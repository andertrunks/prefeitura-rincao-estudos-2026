import { describe, expect, it } from 'vitest'
import { questions, topics } from '../data'
import { createDefaultUserData } from '../storage'
import { getStudyRecommendations } from './recommendations'

describe('recomendações de estudo', () => {
  it('não faz uma afirmação forte com uma única tentativa', () => {
    const topic = topics.find((item) => item.cargoIds.includes('monitor'))!
    const question = questions.find((item) => item.topicId === topic.id && item.cargoIds.includes('monitor'))!
    const data = {
      ...createDefaultUserData('monitor'),
      answers: [{ id: 'a-1', cargoId: 'monitor' as const, questionId: question.id, selectedIndex: 0, correct: false, answeredAt: '2026-08-20T10:00:00.000Z' }],
    }
    const recommendation = getStudyRecommendations(data, 'monitor', new Date('2026-08-22T10:00:00-03:00')).find((item) => item.topicId === topic.id)
    expect(recommendation?.priority).toBe('sugestao')
    expect(recommendation?.reason).toContain('poucas tentativas')
  })

  it('marca alta prioridade somente após amostra mínima e baixo aproveitamento', () => {
    const topic = topics.find((item) => item.cargoIds.includes('monitor'))!
    const question = questions.find((item) => item.topicId === topic.id && item.cargoIds.includes('monitor'))!
    const data = {
      ...createDefaultUserData('monitor'),
      answers: [1, 2, 3].map((index) => ({ id: `a-${index}`, cargoId: 'monitor' as const, questionId: question.id, selectedIndex: index, correct: false, answeredAt: `2026-08-${19 + index}T10:00:00.000Z` })),
    }
    const recommendation = getStudyRecommendations(data, 'monitor', new Date('2026-08-22T10:00:00-03:00')).find((item) => item.topicId === topic.id)
    expect(recommendation?.priority).toBe('alta')
    expect(recommendation?.reason).toContain('3 tentativas')
  })
})
