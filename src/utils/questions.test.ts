import { describe, expect, it } from 'vitest'
import type { Question } from '../types'
import { questionMatchesCargo } from './questions'

const base: Omit<Question, 'cargoIds' | 'cargoId'> = {
  id: 'q-compartilhada',
  discipline: 'portugues',
  topicId: 'tema',
  statement: 'Enunciado',
  alternatives: ['A', 'B', 'C', 'D', 'E'],
  correctIndex: 0,
  explanation: 'Explicação',
  difficulty: 'fácil',
  type: 'inedita',
  source: 'Fonte',
  year: 2026,
}

describe('compatibilidade de cargos das questões', () => {
  it('aceita cargoIds compartilhados', () => {
    const question: Question = { ...base, cargoIds: ['monitor', 'agente'] }
    expect(questionMatchesCargo(question, 'monitor')).toBe(true)
    expect(questionMatchesCargo(question, 'agente')).toBe(true)
    expect(questionMatchesCargo(question, 'ajudante')).toBe(false)
  })

  it('mantém leitura de cargoId legado', () => {
    const legacy = { ...base, cargoIds: [], cargoId: 'ajudante' as const }
    expect(questionMatchesCargo(legacy, 'ajudante')).toBe(true)
  })
})
