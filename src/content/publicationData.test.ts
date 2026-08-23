import { describe, expect, it } from 'vitest'
import coverage from './library/data/cobertura-edital.json'
import manifest from './library/data/manifest.json'
import questions from './library/data/questions.json'
import rectifications from './library/data/rectifications.json'

describe('contrato estático de publicação editorial', () => {
  it('publica exatamente 34 aulas canônicas sem IDs permanentes duplicados', () => {
    expect(manifest.lessons).toHaveLength(34)
    expect(new Set(manifest.lessons.map((lesson) => lesson.stableItemId)).size).toBe(34)
    expect(manifest.lessons.filter((lesson) => lesson.disciplinaId === 'medio-portugues')).toHaveLength(21)
    expect(manifest.lessons.filter((lesson) => lesson.disciplinaId === 'medio-matematica')).toHaveLength(13)
  })

  it('mantém as aulas compartilhadas somente entre Agente e Monitor', () => {
    for (const lesson of manifest.lessons) {
      expect(lesson.cargoIds).toEqual(['agente-administrativo', 'monitor-educacao'])
      expect(lesson.cargoIds).not.toContain('ajudante-geral')
    }
  })

  it('não declara cobertura integral sem materiais específicos e fundamentais', () => {
    expect(coverage.summary.wholeProjectComplete).toBe(false)
    expect(coverage.summary.completeLessons).toBe(34)
    expect(coverage.cargoCoverage['agente-administrativo'].specificKnowledge).toBe('pendente')
    expect(coverage.cargoCoverage['monitor-educacao'].specificKnowledge).toBe('pendente')
    expect(coverage.cargoCoverage['ajudante-geral'].practicalPreparation).toBe('pendente')
  })

  it('mantém as 115 questões do pacote como inéditas, com cinco alternativas', () => {
    expect(questions.questions).toHaveLength(115)
    expect(new Set(questions.questions.map((question) => question.id)).size).toBe(115)
    for (const question of questions.questions) {
      expect(question.tipo).toBe('inedita_estilo_inepam')
      expect(Object.keys(question.alternativas)).toEqual(['A', 'B', 'C', 'D', 'E'])
      expect(Object.keys(question.alternativas)).toContain(question.respostaCorreta)
    }
  })

  it('registra a rerratificação auditada sem impacto nos cargos do projeto', () => {
    expect(manifest.officialDocumentGate.status).toBe('auditado_sem_impacto_nos_cargos_do_projeto')
    expect(rectifications.rectifications).toHaveLength(1)
    expect(rectifications.rectifications[0].cargoIdsAfetadosNoProjeto).toEqual([])
    expect(rectifications.rectifications[0].publish).toBe(true)
  })
})
