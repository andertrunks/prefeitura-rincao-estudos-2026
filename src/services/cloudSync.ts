import type { SupabaseClient } from '@supabase/supabase-js'
import { topics } from '../data'
import type { CargoId, ReviewRecord, UserData } from '../types'
import { mergeUserData } from './progressMerge'

type Row = Record<string, unknown>
const REMOTE_EPOCH = '1970-01-01T00:00:00.000Z'

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' ? value : fallback
}

function asCargo(value: unknown, fallback: CargoId): CargoId {
  return value === 'monitor' || value === 'agente' || value === 'ajudante' ? value : fallback
}

function asReviewStatus(value: unknown): ReviewRecord['status'] {
  return value === 'completed' || value === 'dismissed' ? value : 'pending'
}

function stringList(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function requireSuccess(result: { error: { message: string } | null }, operation: string) {
  if (result.error) throw new Error(`${operation}: ${result.error.message}`)
}

async function selectRows(client: SupabaseClient, table: string, userId: string) {
  const result = await client.from(table).select('*').eq('user_id', userId)
  requireSuccess(result, `Leitura de ${table}`)
  return (result.data ?? []) as Row[]
}

export async function pullRemoteUserData(client: SupabaseClient, userId: string): Promise<UserData> {
  const [profiles, cargoRows, lessonRows, attemptRows, favoriteRows, reviewRows, simulationRows, studyRows] = await Promise.all([
    selectRows(client, 'profiles', userId),
    selectRows(client, 'user_cargos', userId),
    selectRows(client, 'lesson_progress', userId),
    selectRows(client, 'question_attempts', userId),
    selectRows(client, 'favorites', userId),
    selectRows(client, 'review_queue', userId),
    selectRows(client, 'simulation_attempts', userId),
    selectRows(client, 'study_progress', userId),
  ])
  const profile = profiles[0]
  const selectedCargo = asCargo(profile?.active_cargo_id, 'monitor')
  const cargoIds = cargoRows.map((row) => asCargo(row.cargo_id, selectedCargo))
  const lessonIds = lessonRows.filter((row) => row.completed === true).map((row) => asString(row.lesson_id)).filter(Boolean)
  const updateTimestamps = [
    profile?.updated_at,
    ...lessonRows.map((row) => row.updated_at),
    ...attemptRows.map((row) => row.answered_at),
    ...favoriteRows.map((row) => row.created_at),
    ...reviewRows.map((row) => row.updated_at),
    ...simulationRows.map((row) => row.updated_at),
    ...studyRows.map((row) => row.updated_at),
  ]
    .map((value) => asString(value))
    .filter(Boolean)
    .sort()
  const remoteUpdatedAt = updateTimestamps[updateTimestamps.length - 1] ?? REMOTE_EPOCH

  return {
    version: 2,
    selectedCargo,
    cargoIds: [...new Set([...(profile ? [selectedCargo] : []), ...cargoIds])],
    completedTopics: [...new Set(lessonIds)],
    favoriteTopics: favoriteRows.filter((row) => row.entity_type === 'lesson').map((row) => asString(row.entity_id)).filter(Boolean),
    favoriteQuestions: favoriteRows.filter((row) => row.entity_type === 'question').map((row) => asString(row.entity_id)).filter(Boolean),
    answers: attemptRows.map((row) => ({
      id: asString(row.id),
      cargoId: asCargo(row.cargo_id, selectedCargo),
      questionId: asString(row.question_id),
      selectedIndex: asNumber(row.selected_option, -1),
      correct: row.correct === true,
      answeredAt: asString(row.answered_at, remoteUpdatedAt),
      ...(row.simulation_id ? { simulationId: asString(row.simulation_id) } : {}),
    })).filter((answer) => answer.id && answer.questionId),
    simulations: simulationRows.map((row) => ({
      id: asString(row.id),
      cargoId: asCargo(row.cargo_id, selectedCargo),
      mode: row.mode === 'estudo' ? 'estudo' as const : 'prova' as const,
      questionIds: stringList(row.question_ids),
      answerIds: stringList(row.answer_ids),
      startedAt: asString(row.started_at, remoteUpdatedAt),
      finishedAt: asString(row.finished_at, remoteUpdatedAt),
      elapsedSeconds: asNumber(row.elapsed_seconds),
      correctAnswers: asNumber(row.correct_answers),
      updatedAt: asString(row.updated_at, asString(row.finished_at, remoteUpdatedAt)),
    })).filter((simulation) => simulation.id),
    reviews: reviewRows.map((row) => ({
      cargoId: asCargo(row.cargo_id, selectedCargo),
      topicId: asString(row.topic_id),
      dueAt: asString(row.due_at, remoteUpdatedAt),
      intervalDays: ([1, 7, 15, 30].includes(asNumber(row.interval_days)) ? asNumber(row.interval_days) : 7) as 1 | 7 | 15 | 30,
      status: asReviewStatus(row.status),
      updatedAt: asString(row.updated_at, remoteUpdatedAt),
    })).filter((review) => review.topicId),
    studySeconds: asNumber(studyRows[0]?.study_seconds),
    updatedAt: remoteUpdatedAt,
  }
}

async function upsertRows(client: SupabaseClient, table: string, rows: Row[], onConflict: string) {
  if (!rows.length) return
  const result = await client.from(table).upsert(rows, { onConflict })
  requireSuccess(result, `Gravação de ${table}`)
}

export async function pushRemoteUserData(client: SupabaseClient, userId: string, data: UserData) {
  const now = data.updatedAt
  const topicById = new Map(topics.map((topic) => [topic.id, topic]))
  const lessonRows = data.completedTopics.flatMap((lessonId) => {
    const topic = topicById.get(lessonId)
    const applicableCargos = topic
      ? topic.cargoIds.filter((cargoId) => data.cargoIds.includes(cargoId))
      : [data.selectedCargo]
    return applicableCargos.map((cargoId) => ({
      user_id: userId,
      lesson_id: lessonId,
      cargo_id: cargoId,
      completed: true,
      progress: 100,
      updated_at: now,
    }))
  })

  await upsertRows(client, 'profiles', [{
    user_id: userId,
    active_cargo_id: data.selectedCargo,
    updated_at: now,
  }], 'user_id')
  await Promise.all([
    upsertRows(client, 'user_cargos', data.cargoIds.map((cargoId) => ({ user_id: userId, cargo_id: cargoId })), 'user_id,cargo_id'),
    upsertRows(client, 'lesson_progress', lessonRows, 'user_id,lesson_id,cargo_id'),
    upsertRows(client, 'question_attempts', data.answers.map((answer) => ({
      id: answer.id,
      user_id: userId,
      question_id: answer.questionId,
      cargo_id: answer.cargoId,
      selected_option: answer.selectedIndex,
      correct: answer.correct,
      answered_at: answer.answeredAt,
      simulation_id: answer.simulationId ?? null,
      sync_source_id: answer.id,
    })), 'user_id,id'),
    upsertRows(client, 'favorites', [
      ...data.favoriteTopics.map((entityId) => ({ user_id: userId, entity_type: 'lesson', entity_id: entityId })),
      ...data.favoriteQuestions.map((entityId) => ({ user_id: userId, entity_type: 'question', entity_id: entityId })),
    ], 'user_id,entity_type,entity_id'),
    upsertRows(client, 'review_queue', data.reviews.map((review) => ({
      user_id: userId,
      cargo_id: review.cargoId,
      topic_id: review.topicId,
      question_id: null,
      due_at: review.dueAt,
      interval_days: review.intervalDays,
      status: review.status,
      updated_at: review.updatedAt,
    })), 'user_id,cargo_id,topic_id'),
    upsertRows(client, 'simulation_attempts', data.simulations.map((simulation) => ({
      id: simulation.id,
      user_id: userId,
      cargo_id: simulation.cargoId,
      mode: simulation.mode,
      started_at: simulation.startedAt,
      finished_at: simulation.finishedAt,
      total_questions: simulation.questionIds.length,
      correct_answers: simulation.correctAnswers,
      score: simulation.questionIds.length ? Math.round((simulation.correctAnswers / simulation.questionIds.length) * 10000) / 100 : 0,
      elapsed_seconds: simulation.elapsedSeconds,
      question_ids: simulation.questionIds,
      answer_ids: simulation.answerIds,
      updated_at: simulation.updatedAt,
    })), 'user_id,id'),
    upsertRows(client, 'study_progress', [{ user_id: userId, study_seconds: data.studySeconds, updated_at: now }], 'user_id'),
  ])
}

export async function syncUserProgress(client: SupabaseClient, userId: string, local: UserData) {
  const remote = await pullRemoteUserData(client, userId)
  const merged = mergeUserData(local, remote)
  await pushRemoteUserData(client, userId, merged)
  return merged
}
