import { describe, expect, it } from 'vitest'
import coverage from './library/publication/lote103/cobertura-edital.json'
import index from './library/publication/lote103/lesson-index.json'
import bank from './library/publication/lote103/questions.json'
import simulations from './library/publication/lote103/simulations.json'
import manifest from './library/publication/lote105/manifest.json'
import sources from './library/publication/lote105/sources.json'
import { richLessons } from './editorial'
import { historyQuestions, questions, simulationQuestionsForCargo } from '../data'
import { publicationNews, publicationRectifications } from './publication'
import { analyticsPage } from '../analytics/analytics'

describe('publicação 1.0.2', () => {
  it('preserva os bytes UTF-8 originais dos três pacotes aprovados', async () => {
    const files = import.meta.glob<string>('./library/publication/**/*', { eager: true, query: '?raw', import: 'default' })
    for (const lot of ['lote103', 'lote104', 'lote105']) {
      const base = `./library/publication/${lot}/`
      const contract = JSON.parse(files[base + 'manifest.json']) as { files: { path: string; sha256: string }[] }
      for (const file of contract.files) {
        const original = files[base + file.path] ?? files[`./library/publication/lote103/${file.path}`]
        expect(original).toBeDefined()
        const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(original))
        const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
        expect(hash).toBe(file.sha256)
      }
    }
  })
  it('confere cobertura, fontes e vínculos das aulas e questões', () => {
    expect(manifest.version).toBe('1.0.2')
    expect(coverage.items).toHaveLength(90)
    expect(new Set(coverage.items.map((item) => item.id)).size).toBe(90)
    expect(index.lessons.filter((lesson) => lesson.publish)).toHaveLength(107)
    const lessons = new Map(richLessons.map((lesson) => [lesson.editorialId, lesson]))
    for (const item of coverage.items) {
      expect(item.aulaIds.length).toBeGreaterThan(0)
      for (const id of item.aulaIds) expect(lessons.has(id), id).toBe(true)
    }
    const sourceIds = new Set(sources.sources.map((source) => source.id))
    expect(sourceIds.size).toBe(501)
    for (const question of bank.questions) {
      for (const id of question.aulaIds) expect(lessons.has(id), id).toBe(true)
      for (const id of question.sourceRefs ?? []) expect(sourceIds.has(id), id).toBe(true)
    }
    expect(publicationNews).toHaveLength(3)
    expect(publicationRectifications).toHaveLength(2)
  })
  it('publica somente as questões canônicas e mantém consulta ao histórico', () => {
    expect(questions).toHaveLength(1792)
    expect(historyQuestions.length).toBeGreaterThan(questions.length)
    expect(new Set(historyQuestions.map((question) => question.id)).size).toBe(historyQuestions.length)
    expect(questions.every((question) => historyQuestions.includes(question))).toBe(true)
  })
  it('usa os três simulados aprovados com distribuição oficial e IDs estáveis', () => {
    expect(simulations.simulations).toHaveLength(3)
    for (const cargo of ['agente', 'monitor', 'ajudante'] as const) {
      const selected = simulationQuestionsForCargo(cargo)
      expect(selected).toHaveLength(30)
      expect(new Set(selected.map((question) => question.id)).size).toBe(30)
      expect(selected.filter((question) => question.discipline === 'portugues')).toHaveLength(10)
      expect(selected.filter((question) => question.discipline === 'matematica')).toHaveLength(5)
      expect(selected.filter((question) => question.discipline === 'especificos')).toHaveLength(15)
    }
  })
  it('mede somente rotas públicas conhecidas de notícias, sem consultas pessoais', () => {
    const path = `/noticias/${publicationNews[0].id}`
    const names = { [path]: publicationNews[0].titulo }
    expect(analyticsPage(path + '?email=private', {}, names)).toEqual({ path, title: publicationNews[0].titulo })
    expect(analyticsPage('/noticias/unknown', {}, names)).toBeNull()
  })
})
