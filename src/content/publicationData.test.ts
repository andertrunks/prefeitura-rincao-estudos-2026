import { describe, expect, it } from 'vitest'
import coverage from './library/data/cobertura-edital.json'
import manifest from './library/data/manifest.json'
import questions from './library/data/questions.json'
import rectifications from './library/data/rectifications.json'

describe('contrato estático de publicação editorial', () => {
  it('publica exatamente 112 aulas canônicas sem IDs permanentes duplicados', () => {
    expect(manifest.lessons).toHaveLength(112)
    expect(new Set(manifest.lessons.map((lesson) => lesson.stableItemId)).size).toBe(112)
    expect(manifest.lessons.filter((lesson) => lesson.disciplinaId === 'medio-portugues')).toHaveLength(21)
    expect(manifest.lessons.filter((lesson) => lesson.disciplinaId === 'medio-matematica')).toHaveLength(13)
    expect(manifest.editorialAliases['agente-especificos-nocoes-arquivo-001']).toBe('agente-especificos-arquivo-001')
    expect(manifest.editorialAliases['monitor-especificos-diretrizes-bases-educacao-nacional-001']).toBe('monitor-especificos-ldb-001')
  })

  it('mantém compartilhamento e exclusividade corretos por cargo', () => {
    const medium = manifest.lessons.filter((lesson) => lesson.disciplinaId.startsWith('medio-'))
    const agent = manifest.lessons.filter((lesson) => lesson.disciplinaId === 'agente-especificos')
    const monitor = manifest.lessons.filter((lesson) => lesson.disciplinaId === 'monitor-especificos')
    const ajudante = manifest.lessons.filter((lesson) => lesson.disciplinaId.startsWith('fundamental-') || lesson.disciplinaId.startsWith('ajudante-'))
    expect(medium.every((lesson) => lesson.cargoIds.join(',') === 'agente-administrativo,monitor-educacao')).toBe(true)
    expect(agent.every((lesson) => lesson.cargoIds.join(',') === 'agente-administrativo')).toBe(true)
    expect(monitor.every((lesson) => lesson.cargoIds.join(',') === 'monitor-educacao')).toBe(true)
    expect(ajudante.every((lesson) => lesson.cargoIds.join(',') === 'ajudante-geral')).toBe(true)
  })

  it('não declara cobertura integral enquanto a produção restante permanece pendente', () => {
    expect(coverage.summary.wholeProjectComplete).toBe(false)
    expect(coverage.summary.publishedLessons).toBe(112)
    expect(coverage.cargoCoverage['agente-administrativo'].specificKnowledge).toContain('31 tópicos')
    expect(coverage.cargoCoverage['monitor-educacao'].specificKnowledge).toContain('19 itens estáveis')
    expect(coverage.cargoCoverage['monitor-educacao'].status).toBe('concluido')
    expect(coverage.cargoCoverage['ajudante-geral'].practicalPreparation).toBe('1 módulo revisado')
  })

  it('mantém as 1.307 questões consolidadas com classificação e cinco alternativas', () => {
    expect(questions.questions).toHaveLength(1307)
    expect(new Set(questions.questions.map((question) => question.id)).size).toBe(1307)
    for (const question of questions.questions) {
      expect(['inedita_estilo_inepam', 'real_inepam']).toContain(question.tipo)
      expect(Object.keys(question.alternativas)).toEqual(['A', 'B', 'C', 'D', 'E'])
      expect(Object.keys(question.alternativas)).toContain(question.respostaCorreta)
    }
    expect(questions.questions.filter((question) => question.tipo === 'inedita_estilo_inepam')).toHaveLength(1296)
    expect(questions.questions.filter((question) => question.tipo === 'real_inepam')).toHaveLength(11)
  })

  it('registra a rerratificação auditada sem impacto nos cargos do projeto', () => {
    expect(manifest.officialDocumentGate.status).toBe('auditado_sem_impacto_nos_cargos_do_projeto')
    expect(rectifications.rectifications).toHaveLength(1)
    expect(rectifications.rectifications[0].cargoIdsAfetadosNoProjeto).toEqual([])
    expect(rectifications.rectifications[0].publish).toBe(true)
  })
})
