import type { AnswerRecord, ReviewRecord, SimulationRecord, UserData } from '../types'

function unique<T extends string>(values: T[]): T[] {
  return [...new Set(values)]
}

function latestById<T>(left: T[], right: T[], id: (value: T) => string, timestamp: (value: T) => string) {
  const values = new Map<string, T>()
  for (const value of [...left, ...right]) {
    const key = id(value)
    const current = values.get(key)
    if (!current || timestamp(value) > timestamp(current)) values.set(key, value)
  }
  return [...values.values()]
}

export function mergeUserData(local: UserData, remote: UserData): UserData {
  const localIsNewer = local.updatedAt >= remote.updatedAt
  const answers = latestById<AnswerRecord>(local.answers, remote.answers, (answer) => answer.id, (answer) => answer.answeredAt)
  const simulations = latestById<SimulationRecord>(
    local.simulations,
    remote.simulations,
    (simulation) => simulation.id,
    (simulation) => simulation.updatedAt,
  )
  const reviews = latestById<ReviewRecord>(
    local.reviews,
    remote.reviews,
    (review) => `${review.cargoId}:${review.topicId}`,
    (review) => review.updatedAt,
  )

  return {
    version: 2,
    selectedCargo: localIsNewer ? local.selectedCargo : remote.selectedCargo,
    cargoIds: unique([...local.cargoIds, ...remote.cargoIds]),
    completedTopics: unique([...local.completedTopics, ...remote.completedTopics]),
    favoriteTopics: unique([...local.favoriteTopics, ...remote.favoriteTopics]),
    favoriteQuestions: unique([...local.favoriteQuestions, ...remote.favoriteQuestions]),
    answers,
    simulations,
    reviews,
    studySeconds: Math.max(local.studySeconds, remote.studySeconds),
    updatedAt: localIsNewer ? local.updatedAt : remote.updatedAt,
  }
}

export function sameUserData(left: UserData, right: UserData) {
  return JSON.stringify(left) === JSON.stringify(right)
}
