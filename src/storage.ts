import { openDB } from 'idb'
import type {
  AnswerRecord,
  CargoId,
  ReviewRecord,
  SimulationRecord,
  StorageNamespace,
  UserData,
} from './types'

const DB_NAME = 'rincao-estudos-2026'
const DB_VERSION = 2
const STORE_NAME = 'user-data'
const LEGACY_USER_KEY = 'main'
const LEGACY_BACKUP_KEY = 'rincao:userDataFallback'
const LEGACY_CARGO_KEY = 'rincao:selectedCargo'

const CARGOS: CargoId[] = ['monitor', 'agente', 'ajudante']

function localStorageAvailable() {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
  } catch {
    return false
  }
}

function getLocalItem(key: string) {
  try {
    return localStorageAvailable() ? window.localStorage.getItem(key) : null
  } catch {
    return null
  }
}

function setLocalItem(key: string, value: string) {
  try {
    if (localStorageAvailable()) window.localStorage.setItem(key, value)
  } catch {
    // IndexedDB continua sendo a cópia principal em navegadores restritivos.
  }
}

function removeLocalItem(key: string) {
  try {
    if (localStorageAvailable()) window.localStorage.removeItem(key)
  } catch {
    // A ausência do fallback não deve interromper o estudo.
  }
}

function now() {
  return new Date().toISOString()
}

function isCargoId(value: unknown): value is CargoId {
  return typeof value === 'string' && CARGOS.includes(value as CargoId)
}

function inferCargoFromQuestionId(questionId: string, fallback: CargoId): CargoId {
  const match = /^q-(monitor|agente|ajudante)-/.exec(questionId)
  return match && isCargoId(match[1]) ? match[1] : fallback
}

function stableHash(value: string) {
  let hash = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

export function createLocalId(prefix: 'answer' | 'simulation') {
  const random = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`
  return `${prefix}-${random}`
}

export function createDefaultUserData(selectedCargo: CargoId = 'monitor'): UserData {
  const timestamp = now()
  return {
    version: 2,
    selectedCargo,
    cargoIds: [selectedCargo],
    completedTopics: [],
    favoriteTopics: [],
    favoriteQuestions: [],
    answers: [],
    simulations: [],
    reviews: [],
    studySeconds: 0,
    updatedAt: timestamp,
  }
}

export const defaultUserData = createDefaultUserData()

async function database() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME)
    },
  })
}

let dbWriteQueue = Promise.resolve()

function namespacedBackupKey(namespace: StorageNamespace) {
  return `rincao:userData:${namespace}`
}

function readJson(key: string): unknown {
  const raw = getLocalItem(key)
  if (!raw) return null
  try {
    return JSON.parse(raw) as unknown
  } catch {
    return null
  }
}

function legacyAnswerId(answer: Partial<AnswerRecord>, index: number) {
  return `answer-legacy-${stableHash([
    answer.questionId,
    answer.selectedIndex,
    answer.answeredAt,
    answer.simulationId,
    index,
  ].join('|'))}`
}

function normalizeAnswers(value: unknown, fallbackCargo: CargoId): AnswerRecord[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((raw, index) => {
    if (!raw || typeof raw !== 'object') return []
    const answer = raw as Partial<AnswerRecord>
    if (typeof answer.questionId !== 'string'
      || typeof answer.selectedIndex !== 'number'
      || typeof answer.correct !== 'boolean'
      || typeof answer.answeredAt !== 'string') return []
    return [{
      id: typeof answer.id === 'string' ? answer.id : legacyAnswerId(answer, index),
      cargoId: isCargoId(answer.cargoId)
        ? answer.cargoId
        : inferCargoFromQuestionId(answer.questionId, fallbackCargo),
      questionId: answer.questionId,
      selectedIndex: answer.selectedIndex,
      correct: answer.correct,
      answeredAt: answer.answeredAt,
      ...(typeof answer.simulationId === 'string' ? { simulationId: answer.simulationId } : {}),
    }]
  })
}

function normalizeSimulations(value: unknown, fallbackCargo: CargoId): SimulationRecord[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((raw) => {
    if (!raw || typeof raw !== 'object') return []
    const simulation = raw as Partial<SimulationRecord>
    if (typeof simulation.id !== 'string'
      || !Array.isArray(simulation.questionIds)
      || !Array.isArray(simulation.answerIds)
      || typeof simulation.startedAt !== 'string'
      || typeof simulation.finishedAt !== 'string') return []
    return [{
      id: simulation.id,
      cargoId: isCargoId(simulation.cargoId) ? simulation.cargoId : fallbackCargo,
      mode: simulation.mode === 'estudo' ? 'estudo' : 'prova',
      questionIds: simulation.questionIds.filter((item): item is string => typeof item === 'string'),
      answerIds: simulation.answerIds.filter((item): item is string => typeof item === 'string'),
      startedAt: simulation.startedAt,
      finishedAt: simulation.finishedAt,
      elapsedSeconds: typeof simulation.elapsedSeconds === 'number' ? simulation.elapsedSeconds : 0,
      correctAnswers: typeof simulation.correctAnswers === 'number' ? simulation.correctAnswers : 0,
      updatedAt: typeof simulation.updatedAt === 'string' ? simulation.updatedAt : simulation.finishedAt,
    }]
  })
}

function normalizeReviews(value: unknown, fallbackCargo: CargoId): ReviewRecord[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((raw) => {
    if (!raw || typeof raw !== 'object') return []
    const review = raw as Partial<ReviewRecord>
    if (typeof review.topicId !== 'string'
      || typeof review.dueAt !== 'string'
      || ![1, 7, 15, 30].includes(review.intervalDays ?? 0)) return []
    return [{
      cargoId: isCargoId(review.cargoId) ? review.cargoId : fallbackCargo,
      topicId: review.topicId,
      dueAt: review.dueAt,
      intervalDays: review.intervalDays as 1 | 7 | 15 | 30,
      status: review.status === 'completed' || review.status === 'dismissed' ? review.status : 'pending',
      updatedAt: typeof review.updatedAt === 'string' ? review.updatedAt : review.dueAt,
    }]
  })
}

function stringArray(value: unknown) {
  return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === 'string'))] : []
}

export function migrateUserData(value: unknown, fallbackCargo: CargoId = 'monitor'): UserData | null {
  if (!value || typeof value !== 'object') return null
  const candidate = value as Partial<Omit<UserData, 'version'>> & { version?: number }
  const selectedCargo = isCargoId(candidate.selectedCargo) ? candidate.selectedCargo : fallbackCargo
  if (candidate.version !== 1 && candidate.version !== 2) return null

  const cargoIds = Array.isArray(candidate.cargoIds)
    ? candidate.cargoIds.filter(isCargoId)
    : []
  const answers = normalizeAnswers(candidate.answers, selectedCargo)
  const simulations = normalizeSimulations(candidate.simulations, selectedCargo).map((simulation) => {
    const linkedAnswers = answers.filter((answer) => answer.simulationId === simulation.id)
    return {
      ...simulation,
      answerIds: simulation.answerIds.map((answerId) => linkedAnswers.find((answer) => answer.id === answerId || answer.questionId === answerId)?.id ?? answerId),
      correctAnswers: linkedAnswers.length ? linkedAnswers.filter((answer) => answer.correct).length : simulation.correctAnswers,
    }
  })
  const reviews = normalizeReviews(candidate.reviews, selectedCargo)
  const discoveredCargos = [selectedCargo, ...cargoIds, ...answers.map((answer) => answer.cargoId), ...simulations.map((simulation) => simulation.cargoId)]

  return {
    version: 2,
    selectedCargo,
    cargoIds: [...new Set(discoveredCargos)],
    completedTopics: stringArray(candidate.completedTopics),
    favoriteTopics: stringArray(candidate.favoriteTopics),
    favoriteQuestions: stringArray(candidate.favoriteQuestions),
    answers,
    simulations,
    reviews,
    studySeconds: typeof candidate.studySeconds === 'number' && candidate.studySeconds >= 0 ? candidate.studySeconds : 0,
    updatedAt: typeof candidate.updatedAt === 'string' ? candidate.updatedAt : now(),
  }
}

export function validateImportedData(value: unknown) {
  return migrateUserData(value) !== null
}

export function normalizeImportedData(value: unknown) {
  return migrateUserData(value)
}

async function readIndexedData(key: string) {
  try {
    const db = await database()
    return await db.get(STORE_NAME, key) as unknown
  } catch {
    return null
  }
}

async function migrateLegacyGuestData(): Promise<UserData | null> {
  if (getLocalItem('rincao:guestMigration:v2') === 'done') return null
  const legacyCargoValue = getLocalItem(LEGACY_CARGO_KEY)
  const fallbackCargo = isCargoId(legacyCargoValue) ? legacyCargoValue : 'monitor'
  const legacyLocal = readJson(LEGACY_BACKUP_KEY)
  const legacyIndexed = legacyLocal ? null : await readIndexedData(LEGACY_USER_KEY)
  const migrated = migrateUserData(legacyLocal ?? legacyIndexed, fallbackCargo)
  setLocalItem('rincao:guestMigration:v2', 'done')
  return migrated
}

export async function loadUserData(namespace: StorageNamespace = 'guest'): Promise<UserData> {
  const local = migrateUserData(readJson(namespacedBackupKey(namespace)))
  if (local) return local

  const indexed = migrateUserData(await readIndexedData(namespace))
  if (indexed) return indexed

  if (namespace === 'guest') {
    const migrated = await migrateLegacyGuestData()
    if (migrated) {
      await saveUserData(namespace, migrated)
      return migrated
    }
  }

  return createDefaultUserData()
}

export async function saveUserData(namespace: StorageNamespace, data: UserData): Promise<void> {
  const normalized = migrateUserData(data, data.selectedCargo) ?? createDefaultUserData(data.selectedCargo)
  setLocalItem(namespacedBackupKey(namespace), JSON.stringify(normalized))
  dbWriteQueue = dbWriteQueue.then(async () => {
    try {
      const db = await database()
      await db.put(STORE_NAME, normalized, namespace)
    } catch {
      // A cópia síncrona mantém o modo local funcional em navegadores restritivos.
    }
  })
  await dbWriteQueue
}

export function touchUserData(data: UserData, selectedCargo = data.selectedCargo): UserData {
  return {
    ...data,
    selectedCargo,
    cargoIds: [...new Set([...data.cargoIds, selectedCargo])],
    updatedAt: now(),
  }
}

export function hasMeaningfulProgress(data: UserData) {
  return data.completedTopics.length > 0
    || data.favoriteTopics.length > 0
    || data.favoriteQuestions.length > 0
    || data.answers.length > 0
    || data.simulations.length > 0
    || data.reviews.some((review) => review.status === 'pending')
    || data.studySeconds > 0
}

export function progressFingerprint(data: UserData) {
  return stableHash(JSON.stringify({
    completedTopics: [...data.completedTopics].sort(),
    favoriteTopics: [...data.favoriteTopics].sort(),
    favoriteQuestions: [...data.favoriteQuestions].sort(),
    answerIds: data.answers.map((answer) => answer.id).sort(),
    simulationIds: data.simulations.map((simulation) => simulation.id).sort(),
    reviews: data.reviews.map((review) => `${review.cargoId}:${review.topicId}:${review.updatedAt}`).sort(),
  }))
}

function importKey(userId: string, state: 'pending' | 'complete' | 'dismissed') {
  return `rincao:guestImport:${userId}:${state}`
}

export function shouldOfferGuestImport(userId: string, guestData: UserData) {
  if (!localStorageAvailable() || !hasMeaningfulProgress(guestData)) return false
  const fingerprint = progressFingerprint(guestData)
  return !(['pending', 'complete', 'dismissed'] as const)
    .some((state) => getLocalItem(importKey(userId, state)) === fingerprint)
}

export function queueGuestImport(userId: string, guestData: UserData) {
  setLocalItem(importKey(userId, 'pending'), progressFingerprint(guestData))
}

export function completeGuestImport(userId: string) {
  if (!localStorageAvailable()) return
  const pendingKey = importKey(userId, 'pending')
  const fingerprint = getLocalItem(pendingKey)
  if (fingerprint) setLocalItem(importKey(userId, 'complete'), fingerprint)
  removeLocalItem(pendingKey)
}

export function dismissGuestImport(userId: string, guestData: UserData) {
  setLocalItem(importKey(userId, 'dismissed'), progressFingerprint(guestData))
}

function syncPendingKey(namespace: StorageNamespace) {
  return `rincao:syncPending:${namespace}`
}

export function markSyncPending(namespace: StorageNamespace) {
  setLocalItem(syncPendingKey(namespace), now())
}

export function clearSyncPending(namespace: StorageNamespace) {
  removeLocalItem(syncPendingKey(namespace))
}

export function hasPendingSync(namespace: StorageNamespace) {
  return getLocalItem(syncPendingKey(namespace)) !== null
}
