import { describe, expect, it } from 'vitest'
import { createDefaultUserData } from '../storage'
import { mergeUserData } from './progressMerge'

describe('resolução determinística de conflitos', () => {
  it('preserva conclusões, favoritos e tentativas únicas dos dois lados', () => {
    const local = {
      ...createDefaultUserData('monitor'),
      updatedAt: '2026-08-22T10:00:00.000Z',
      completedTopics: ['aula-local'],
      favoriteTopics: ['favorito-comum'],
      answers: [{ id: 'tentativa-local', cargoId: 'monitor' as const, questionId: 'q-monitor-1', selectedIndex: 0, correct: false, answeredAt: '2026-08-22T09:00:00.000Z' }],
      studySeconds: 100,
    }
    const remote = {
      ...createDefaultUserData('agente'),
      updatedAt: '2026-08-22T11:00:00.000Z',
      completedTopics: ['aula-remota'],
      favoriteTopics: ['favorito-comum', 'favorito-remoto'],
      answers: [{ id: 'tentativa-remota', cargoId: 'agente' as const, questionId: 'q-agente-1', selectedIndex: 1, correct: true, answeredAt: '2026-08-22T10:30:00.000Z' }],
      studySeconds: 80,
    }

    const merged = mergeUserData(local, remote)
    expect(merged.selectedCargo).toBe('agente')
    expect(merged.completedTopics).toEqual(expect.arrayContaining(['aula-local', 'aula-remota']))
    expect(merged.favoriteTopics).toEqual(['favorito-comum', 'favorito-remoto'])
    expect(merged.answers.map((answer) => answer.id)).toEqual(expect.arrayContaining(['tentativa-local', 'tentativa-remota']))
    expect(merged.studySeconds).toBe(100)
  })

  it('deduplica a mesma tentativa pelo ID e mantém a versão mais recente', () => {
    const local = { ...createDefaultUserData(), answers: [{ id: 'same', cargoId: 'monitor' as const, questionId: 'q-monitor-1', selectedIndex: 0, correct: false, answeredAt: '2026-08-20T10:00:00.000Z' }] }
    const remote = { ...createDefaultUserData(), answers: [{ id: 'same', cargoId: 'monitor' as const, questionId: 'q-monitor-1', selectedIndex: 1, correct: true, answeredAt: '2026-08-21T10:00:00.000Z' }] }
    const merged = mergeUserData(local, remote)
    expect(merged.answers).toHaveLength(1)
    expect(merged.answers[0]).toMatchObject({ selectedIndex: 1, correct: true })
  })
})
