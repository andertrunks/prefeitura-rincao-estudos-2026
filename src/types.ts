export type CargoId = 'monitor' | 'agente' | 'ajudante'
export type DisciplineId = 'portugues' | 'matematica' | 'especificos'
export type OriginKind = 'edital' | 'subtema' | 'complemento' | 'banca'
export type StorageNamespace = 'guest' | `user:${string}`
export type SyncStatus = 'local' | 'pending' | 'syncing' | 'synced' | 'error' | 'unavailable'

export interface SourceLink {
  label: string
  url: string
  kind: 'edital' | 'legislacao' | 'bibliografia' | 'pesquisa' | 'complemento'
}

export interface Topic {
  id: string
  /** ID permanente definido pela fonte editorial, quando houver aula completa integrada. */
  editorialId?: string
  cargoIds: CargoId[]
  discipline: DisciplineId
  title: string
  summary: string
  keyPoints: string[]
  editalText: string
  editalPage: number
  editalItem: string
  origin: OriginKind
  example: string
  pitfall: string
  sources: SourceLink[]
}

export interface Cargo {
  id: CargoId
  name: string
  schooling: string
  requirements: string
  vacancies: string
  workload: string
  salary: string
  registrationFee: string
  attributes: string[]
  practicalExam: boolean
  color: string
}

export interface Question {
  id: string
  cargoIds: CargoId[]
  /** Compatibilidade de leitura com pacotes editoriais anteriores. */
  cargoId?: CargoId
  discipline: DisciplineId
  topicId: string
  statement: string
  alternatives: string[]
  correctIndex: number
  explanation: string
  difficulty: 'fácil' | 'média' | 'difícil'
  type: 'inedita' | 'real'
  source: string
  sourceUrl?: string
  year: number
}

export interface AnswerRecord {
  id: string
  cargoId: CargoId
  questionId: string
  selectedIndex: number
  correct: boolean
  answeredAt: string
  simulationId?: string
}

export interface SimulationRecord {
  id: string
  cargoId: CargoId
  mode: 'estudo' | 'prova'
  questionIds: string[]
  answerIds: string[]
  startedAt: string
  finishedAt: string
  elapsedSeconds: number
  correctAnswers: number
  updatedAt: string
}

export interface ReviewRecord {
  cargoId: CargoId
  topicId: string
  dueAt: string
  intervalDays: 1 | 7 | 15 | 30
  status: 'pending' | 'completed' | 'dismissed'
  updatedAt: string
}

export interface UserData {
  version: 2
  selectedCargo: CargoId
  cargoIds: CargoId[]
  completedTopics: string[]
  favoriteTopics: string[]
  favoriteQuestions: string[]
  answers: AnswerRecord[]
  simulations: SimulationRecord[]
  reviews: ReviewRecord[]
  studySeconds: number
  updatedAt: string
}
