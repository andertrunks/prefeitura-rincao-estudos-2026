import type { CargoId, Question } from '../types'

export function questionCargoIds(question: Question): CargoId[] {
  if (question.cargoIds?.length) return question.cargoIds
  return question.cargoId ? [question.cargoId] : []
}

export function questionMatchesCargo(question: Question, cargoId: CargoId) {
  return questionCargoIds(question).includes(cargoId)
}
