import { openDB } from 'idb'
import type { CargoId, UserData } from './types'

const DB_NAME = 'rincao-estudos-2026'
const STORE_NAME = 'user-data'
const USER_KEY = 'main'

export const defaultUserData: UserData = {
  version: 1,
  selectedCargo: (localStorage.getItem('rincao:selectedCargo') as CargoId) || 'monitor',
  completedTopics: [],
  favoriteTopics: [],
  favoriteQuestions: [],
  answers: [],
  simulations: [],
  reviews: [],
  studySeconds: 0,
}

async function database() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME)
    },
  })
}

let dbWriteQueue = Promise.resolve()

function readLocalBackup(): UserData | null {
  const fallback = localStorage.getItem('rincao:userDataFallback')
  if (!fallback) return null
  try {
    const value: unknown = JSON.parse(fallback)
    return validateImportedData(value) ? { ...defaultUserData, ...value } : null
  } catch {
    return null
  }
}

export async function loadUserData(): Promise<UserData> {
  // localStorage is written synchronously, so it is the freshest copy even if
  // the user reloads before a queued IndexedDB transaction has completed.
  const localBackup = readLocalBackup()
  if (localBackup) return localBackup
  try {
    const db = await database()
    const saved = await db.get(STORE_NAME, USER_KEY)
    if (!saved || saved.version !== 1) return defaultUserData
    return { ...defaultUserData, ...saved }
  } catch {
    return defaultUserData
  }
}

export async function saveUserData(data: UserData): Promise<void> {
  localStorage.setItem('rincao:selectedCargo', data.selectedCargo)
  localStorage.setItem('rincao:userDataFallback', JSON.stringify(data))
  dbWriteQueue = dbWriteQueue.then(async () => {
    try {
      const db = await database()
      await db.put(STORE_NAME, data, USER_KEY)
    } catch {
      // The localStorage copy above keeps the application usable in restrictive browsers.
    }
  })
  await dbWriteQueue
}

export function validateImportedData(value: unknown): value is UserData {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<UserData>
  return candidate.version === 1
    && ['monitor', 'agente', 'ajudante'].includes(candidate.selectedCargo ?? '')
    && Array.isArray(candidate.completedTopics)
    && Array.isArray(candidate.favoriteTopics)
    && Array.isArray(candidate.favoriteQuestions)
    && Array.isArray(candidate.answers)
    && Array.isArray(candidate.simulations)
    && Array.isArray(candidate.reviews)
}
