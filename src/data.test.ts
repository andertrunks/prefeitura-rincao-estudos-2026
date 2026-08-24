import { describe, expect, it } from 'vitest'
import { richLessonsByTopicId } from './content/editorial'
import { questions, simulationQuestionsForCargo, topics } from './data'
import type { CargoId, DisciplineId } from './types'

describe('integração editorial no banco e nos simulados', () => {
  it('preserva o ID local da aula e registra o ID editorial', () => {
    const topic = topics.find((item) => item.id === 'mp-fonema')
    expect(topic?.editorialId).toBe('medio-portugues-fonema-001')
    expect(topic?.cargoIds).toEqual(['monitor', 'agente'])
  })

  it('mantém simulados com distribuição 10/5/15 para todos os cargos', () => {
    const expected: Record<DisciplineId, number> = { portugues: 10, matematica: 5, especificos: 15 }
    for (const cargoId of ['monitor', 'agente', 'ajudante'] as CargoId[]) {
      const simulation = simulationQuestionsForCargo(cargoId)
      expect(simulation).toHaveLength(30)
      for (const discipline of Object.keys(expected) as DisciplineId[]) {
        expect(simulation.filter((question) => question.discipline === discipline)).toHaveLength(expected[discipline])
      }
    }
  })

  it('substitui as duas questões-placeholder de Fonema pelas dez editoriais', () => {
    const fonema = questions.filter((question) => question.topicId === 'mp-fonema')
    expect(fonema).toHaveLength(10)
    expect(fonema.every((question) => question.id.startsWith('q-inedita-medio-portugues-'))).toBe(true)
  })

  it('disponibiliza todo o material aprovado por cargo sem vazar Específicos do Monitor', () => {
    const agentTopics = topics.filter((topic) => topic.cargoIds.includes('agente'))
    const ajudanteTopics = topics.filter((topic) => topic.cargoIds.includes('ajudante'))
    const monitorSpecific = topics.filter((topic) => topic.cargoIds.includes('monitor') && topic.discipline === 'especificos')
    expect(agentTopics.every((topic) => Boolean(richLessonsByTopicId[topic.id]))).toBe(true)
    expect(ajudanteTopics.every((topic) => Boolean(richLessonsByTopicId[topic.id]))).toBe(true)
    expect(monitorSpecific.every((topic) => !richLessonsByTopicId[topic.id])).toBe(true)
    expect(richLessonsByTopicId['mp-fonema'].cargoIds).toEqual(['agente', 'monitor'])
  })
})
