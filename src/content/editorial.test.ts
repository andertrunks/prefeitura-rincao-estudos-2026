import { describe, expect, it } from 'vitest'
import { editorialQuestions, editorialStableItemIds, fallbackExplanationCount, fallbackExplanationIds, practicalLesson, recoveredExplanationCount, richLessons, richLessonsByTopicId } from './editorial'

describe('biblioteca editorial revisada', () => {
  it('integra as 89 aulas canônicas aprovadas sem duplicar IDs', () => {
    expect(richLessons).toHaveLength(89)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'medio-portugues')).toHaveLength(21)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'medio-matematica')).toHaveLength(13)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'fundamental-portugues')).toHaveLength(4)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'fundamental-matematica')).toHaveLength(5)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'agente-especificos')).toHaveLength(30)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'ajudante-especificos')).toHaveLength(15)
    expect(richLessons.filter((lesson) => lesson.disciplineId === 'ajudante-pratica')).toHaveLength(1)
    expect(new Set(richLessons.map((lesson) => lesson.editorialId)).size).toBe(89)
    expect(new Set(editorialStableItemIds).size).toBe(89)
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

  it('integra 713 questões consolidadas, sempre com cinco alternativas', () => {
    expect(editorialQuestions).toHaveLength(713)
    expect(new Set(editorialQuestions.map((question) => question.id)).size).toBe(713)
    expect(editorialQuestions.filter((question) => question.topicId === 'mp-fonema')).toHaveLength(10)
    for (const question of editorialQuestions) {
      expect(question.alternatives).toHaveLength(5)
      expect(question.correctIndex).toBeGreaterThanOrEqual(0)
      expect(question.correctIndex).toBeLessThan(5)
    }
    expect(editorialQuestions.filter((question) => question.type === 'inedita')).toHaveLength(702)
    expect(editorialQuestions.filter((question) => question.type === 'real')).toHaveLength(11)
    expect(editorialQuestions.every((question) => question.explanation.replace(/^[A-E][.:]\s*/i, '').replace(/[-–—\s.]/g, '').length >= 4)).toBe(true)
    expect(recoveredExplanationCount).toBe(105)
    expect(fallbackExplanationCount, fallbackExplanationIds.join(', ')).toBe(26)
    expect(editorialQuestions.filter((question) => question.discipline !== 'especificos').every((question) => question.cargoIds.join(',') === 'agente,monitor')).toBe(true)
    expect(editorialQuestions.filter((question) => question.discipline === 'especificos').every((question) => question.cargoIds.join(',') === 'agente')).toBe(true)
  })

  it('mantém questões reais somente quando catalogadas e preserva a Prova Prática no cargo correto', () => {
    expect(editorialQuestions.filter((question) => question.type === 'real').every((question) => question.source.startsWith('Questão real — INEPAM'))).toBe(true)
    expect(richLessons.some((lesson) => lesson.realQuestionReferenceCount > 0)).toBe(true)
    expect(practicalLesson.stableItemId).toBe('AJU-PRAT-001')
    expect(practicalLesson.cargoIds).toEqual(['ajudante'])
  })
})
