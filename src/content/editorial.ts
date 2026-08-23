import type { CargoId, Question } from '../types'
import lessonMarkdown from './lote-002/medio-portugues-fonema-001.md?raw'
import manifestRaw from './lote-002/manifest.json?raw'
import questionsRaw from './lote-002/questions.json?raw'
import sourcesRaw from './lote-002/sources.json?raw'

type EditorialQuestion = {
  id: string
  cargoIds: string[]
  disciplinaId: string
  temaId: string
  aulaIds: string[]
  tipo: 'inedita_estilo_inepam'
  dificuldade: 'facil' | 'medio' | 'dificil'
  enunciado: string
  alternativas: Record<'A' | 'B' | 'C' | 'D' | 'E', string>
  respostaCorreta: 'A' | 'B' | 'C' | 'D' | 'E'
  explicacao: string
}

type EditorialSource = {
  id: string
  tipo: string
  titulo: string
  orgao: string
  url?: string
  referencia?: string
  verificadoEm?: string
  uso: string
  observacao?: string
}

type EditorialManifest = {
  packageId: string
  version: string
  generatedAt: string
  lessonIds: string[]
  questionIds: string[]
  editorialStatus: string
}

export interface RichLesson {
  topicId: string
  editorialId: string
  packageId: string
  packageVersion: string
  markdown: string
  sources: EditorialSource[]
  questionCount: number
}

const questionPackage = JSON.parse(questionsRaw) as { questions: EditorialQuestion[] }
const sourcePackage = JSON.parse(sourcesRaw) as { sources: EditorialSource[] }
const manifest = JSON.parse(manifestRaw) as EditorialManifest

const cargoIdMap: Record<string, CargoId> = {
  'agente-administrativo': 'agente',
  'monitor-educacao': 'monitor',
  'ajudante-geral': 'ajudante',
}

const difficultyMap: Record<EditorialQuestion['dificuldade'], Question['difficulty']> = {
  facil: 'fácil',
  medio: 'média',
  dificil: 'difícil',
}

const letters = ['A', 'B', 'C', 'D', 'E'] as const

export const editorialQuestions: Question[] = questionPackage.questions.map((question) => ({
  id: question.id,
  cargoIds: question.cargoIds.map((cargoId) => cargoIdMap[cargoId]).filter((cargoId): cargoId is CargoId => Boolean(cargoId)),
  discipline: 'portugues',
  topicId: 'mp-fonema',
  statement: question.enunciado,
  alternatives: letters.map((letter) => question.alternativas[letter]),
  correctIndex: letters.indexOf(question.respostaCorreta),
  explanation: question.explicacao,
  difficulty: difficultyMap[question.dificuldade],
  type: 'inedita',
  source: 'Questão inédita — estilo INEPAM. Elaborada para treinamento; não é questão real da banca.',
  year: 2026,
}))

const fonemaLesson: RichLesson = {
  topicId: 'mp-fonema',
  editorialId: manifest.lessonIds[0],
  packageId: manifest.packageId,
  packageVersion: manifest.version,
  markdown: lessonMarkdown,
  sources: sourcePackage.sources,
  questionCount: manifest.questionIds.length,
}

export const richLessonsByTopicId: Record<string, RichLesson> = {
  [fonemaLesson.topicId]: fonemaLesson,
}

