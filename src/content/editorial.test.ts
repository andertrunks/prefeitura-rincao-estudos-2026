import { describe, expect, it } from 'vitest'
import { editorialQuestions, editorialStableItemIds, richLessons, richLessonsByTopicId } from './editorial'

describe('biblioteca editorial revisada', () => {
  it('integra as 21 aulas de Português e as 13 de Matemática sem duplicar IDs', () => {
    expect(richLessons.filter((lesson) => lesson.discipline === 'portugues')).toHaveLength(21)
    expect(richLessons.filter((lesson) => lesson.discipline === 'matematica')).toHaveLength(13)
    expect(new Set(richLessons.map((lesson) => lesson.editorialId)).size).toBe(34)
    expect(new Set(editorialStableItemIds).size).toBe(34)
  })

  it('mantém a aula de Fonema integral e associada ao ID local permanente', () => {
    const lesson = richLessonsByTopicId['mp-fonema']
    expect(lesson.editorialId).toBe('medio-portugues-fonema-001')
    expect(lesson.stableItemId).toBe('MED-PORT-001')
    expect(lesson.markdown).toContain('## 1. Identificação e referência ao edital')
    expect(lesson.markdown).toContain('## 19. Questões antigas da INEPAM — resolução comentada')
    expect(lesson.markdown).toContain('## 27. Fontes')
    expect(lesson.markdown.length).toBeGreaterThan(18_000)
  })

  it('integra 115 questões inéditas compartilhadas, sempre com cinco alternativas', () => {
    expect(editorialQuestions).toHaveLength(115)
    expect(new Set(editorialQuestions.map((question) => question.id)).size).toBe(115)
    expect(editorialQuestions.filter((question) => question.topicId === 'mp-fonema')).toHaveLength(10)
    for (const question of editorialQuestions) {
      expect(question.cargoIds).toEqual(['agente', 'monitor'])
      expect(question.type).toBe('inedita')
      expect(question.alternatives).toHaveLength(5)
      expect(question.correctIndex).toBeGreaterThanOrEqual(0)
      expect(question.correctIndex).toBeLessThan(5)
    }
  })

  it('não transforma referências reais parciais em questões reais do banco', () => {
    expect(editorialQuestions.some((question) => question.type === 'real')).toBe(false)
    expect(richLessons.some((lesson) => lesson.realQuestionReferenceCount > 0)).toBe(true)
  })
})

