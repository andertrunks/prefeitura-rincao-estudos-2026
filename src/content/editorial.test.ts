import { describe, expect, it } from 'vitest'
import { editorialQuestions, richLessonsByTopicId } from './editorial'

describe('Lote 002 — Fonema', () => {
  it('mantém a aula integral associada ao ID local permanente', () => {
    const lesson = richLessonsByTopicId['mp-fonema']
    expect(lesson.editorialId).toBe('medio-portugues-fonema-001')
    expect(lesson.markdown).toContain('## 1. Identificação e referência ao edital')
    expect(lesson.markdown).toContain('## 19. Questões antigas da INEPAM — resolução comentada')
    expect(lesson.markdown).toContain('## 27. Fontes')
    expect(lesson.markdown.match(/^## /gm)).toHaveLength(27)
    expect(lesson.markdown.length).toBeGreaterThan(18_000)
  })

  it('integra dez questões inéditas compartilhadas, sempre com cinco alternativas', () => {
    expect(editorialQuestions).toHaveLength(10)
    expect(new Set(editorialQuestions.map((question) => question.id)).size).toBe(10)
    for (const question of editorialQuestions) {
      expect(question.cargoIds).toEqual(['agente', 'monitor'])
      expect(question.topicId).toBe('mp-fonema')
      expect(question.type).toBe('inedita')
      expect(question.alternatives).toHaveLength(5)
      expect(question.correctIndex).toBeGreaterThanOrEqual(0)
      expect(question.correctIndex).toBeLessThan(5)
    }
  })

  it('não transforma as referências reais parciais em questões reais do banco', () => {
    expect(editorialQuestions.some((question) => question.type === 'real')).toBe(false)
  })
})

