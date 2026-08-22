import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'
import {
  createDefaultUserData,
  loadUserData,
  migrateUserData,
  saveUserData,
} from './storage'

class MemoryStorage implements Storage {
  private values = new Map<string, string>()
  get length() { return this.values.size }
  clear() { this.values.clear() }
  getItem(key: string) { return this.values.get(key) ?? null }
  key(index: number) { return [...this.values.keys()][index] ?? null }
  removeItem(key: string) { this.values.delete(key) }
  setItem(key: string, value: string) { this.values.set(key, value) }
}

const localStorage = new MemoryStorage()
Object.defineProperty(globalThis, 'window', { value: { localStorage }, configurable: true })

describe('storage versionado e isolado', () => {
  beforeEach(() => localStorage.clear())

  it('migra dados v1 para guest sem perder respostas antigas', () => {
    const migrated = migrateUserData({
      version: 1,
      selectedCargo: 'agente',
      completedTopics: ['tema-1'],
      favoriteTopics: [],
      favoriteQuestions: [],
      answers: [{ questionId: 'q-agente-1', selectedIndex: 2, correct: true, answeredAt: '2026-08-20T10:00:00.000Z' }],
      simulations: [],
      reviews: [],
      studySeconds: 60,
    })

    expect(migrated?.version).toBe(2)
    expect(migrated?.cargoIds).toEqual(['agente'])
    expect(migrated?.answers[0]).toMatchObject({ cargoId: 'agente', questionId: 'q-agente-1' })
    expect(migrated?.answers[0].id).toMatch(/^answer-legacy-/)
  })

  it('mantém guest e usuários autenticados em namespaces diferentes', async () => {
    const guest = { ...createDefaultUserData('monitor'), completedTopics: ['guest-aula'] }
    const joao = { ...createDefaultUserData('agente'), completedTopics: ['joao-aula'] }
    const maria = { ...createDefaultUserData('ajudante'), completedTopics: ['maria-aula'] }

    await saveUserData('guest', guest)
    await saveUserData('user:abc123', joao)
    await saveUserData('user:def456', maria)

    expect((await loadUserData('guest')).completedTopics).toEqual(['guest-aula'])
    expect((await loadUserData('user:abc123')).completedTopics).toEqual(['joao-aula'])
    expect((await loadUserData('user:def456')).completedTopics).toEqual(['maria-aula'])
  })

  it('reconecta respostas de simulados legados aos novos IDs permanentes', () => {
    const migrated = migrateUserData({
      version: 1,
      selectedCargo: 'monitor',
      completedTopics: [],
      favoriteTopics: [],
      favoriteQuestions: [],
      answers: [{ questionId: 'q-monitor-1', selectedIndex: 0, correct: true, answeredAt: '2026-08-20T10:00:00.000Z', simulationId: 'sim-legado' }],
      simulations: [{ id: 'sim-legado', cargoId: 'monitor', mode: 'prova', questionIds: ['q-monitor-1'], answerIds: ['q-monitor-1'], startedAt: '2026-08-20T09:00:00.000Z', finishedAt: '2026-08-20T10:00:00.000Z', elapsedSeconds: 3600 }],
      reviews: [],
      studySeconds: 0,
    })

    expect(migrated?.simulations[0].answerIds).toEqual([migrated?.answers[0].id])
    expect(migrated?.simulations[0].correctAnswers).toBe(1)
  })
})
