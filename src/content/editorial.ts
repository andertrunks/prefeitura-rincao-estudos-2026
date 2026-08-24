import type { CargoId, DisciplineId, Question } from '../types'
import manifestData from './library/data/manifest.json'
import questionsRaw from './library/data/questions.json?raw'
import sourcesRaw from './library/data/sources.json?raw'

type EditorialQuestionOrigin = {
  classificacao?: string
  banca?: string
  orgao?: string
  concurso?: string
  cargo?: string
  ano?: number
}

type EditorialQuestion = {
  id: string
  cargoIds: string[]
  disciplinaId: string
  temaId: string
  subtemaId?: string
  aulaIds: string[]
  siteTopicIds?: string[]
  tipo: 'inedita_estilo_inepam' | 'real_inepam'
  dificuldade: 'facil' | 'media' | 'medio' | 'dificil'
  textoBase?: string
  enunciado: string
  alternativas: Record<'A' | 'B' | 'C' | 'D' | 'E', string>
  respostaCorreta: 'A' | 'B' | 'C' | 'D' | 'E'
  explicacao: string
  sourceRefs?: string[]
  origem?: EditorialQuestionOrigin
  sourceUrl?: string
  ano?: number
}

type RawEditorialSource = {
  id: string
  tipo: string
  titulo: string
  tituloExatoConfirmado?: boolean
  ano?: number
  orgao?: string
  orgaoAutoria?: string
  url?: string | null
  referencia?: string
  referenciasDrive?: string[]
  verificadoEm?: string
  lastVerifiedAt?: string | null
  uso?: string
  observacao?: string
  observacoes?: string[]
}

export type EditorialSource = {
  id: string
  tipo: string
  titulo: string
  orgao: string
  tituloExatoConfirmado?: boolean
  ano?: number
  url?: string
  referencia?: string
  verificadoEm?: string
  uso: string
  observacao?: string
}

type ManifestLesson = {
  fileName?: string
  path: string
  stableItemId: string
  id: string
  siteTopicIds: string[]
  disciplinaId: string
  cargoIds: string[]
  status: string
  version: string
}

type LessonBinding = {
  fileName: string
  editorialId: string
  stableItemId: string
  topicIds: string[]
  discipline: DisciplineId
  disciplineId: string
  cargoIds: CargoId[]
  level: 'Ensino Fundamental' | 'Ensino Médio' | 'Prova prática'
  status: string
  version: string
}

export interface RichLesson {
  topicId: string
  topicIds: string[]
  editorialId: string
  stableItemId: string
  title: string
  discipline: DisciplineId
  disciplineId: string
  level: LessonBinding['level']
  cargoIds: CargoId[]
  markdown: string
  sources: EditorialSource[]
  questionCount: number
  originalQuestionCount: number
  realQuestionCount: number
  realQuestionReferenceCount: number
  status: string
  version: string
}

const cargoIdMap: Record<string, CargoId> = {
  'agente-administrativo': 'agente',
  'monitor-educacao': 'monitor',
  'ajudante-geral': 'ajudante',
}

function disciplineFromId(disciplineId: string): DisciplineId {
  if (disciplineId.includes('portugues')) return 'portugues'
  if (disciplineId.includes('matematica')) return 'matematica'
  return 'especificos'
}

function levelFromId(disciplineId: string): LessonBinding['level'] {
  if (disciplineId === 'ajudante-pratica') return 'Prova prática'
  return disciplineId.startsWith('fundamental-') || disciplineId === 'ajudante-especificos' ? 'Ensino Fundamental' : 'Ensino Médio'
}

const manifest = manifestData as { lessons: ManifestLesson[]; editorialAliases?: Record<string, string> }
const lessonBindings: LessonBinding[] = manifest.lessons.map((lesson) => ({
  fileName: lesson.fileName ?? lesson.path.split('/').pop()!,
  editorialId: lesson.id,
  stableItemId: lesson.stableItemId,
  topicIds: lesson.siteTopicIds,
  discipline: disciplineFromId(lesson.disciplinaId),
  disciplineId: lesson.disciplinaId,
  cargoIds: lesson.cargoIds.map((cargoId) => cargoIdMap[cargoId]).filter((cargoId): cargoId is CargoId => Boolean(cargoId)),
  level: levelFromId(lesson.disciplinaId),
  status: lesson.status,
  version: lesson.version,
}))

const lessonModules = import.meta.glob<string>('./library/lessons/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

function removeQuotes(value: string) {
  return value.replace(/^(["'])(.*)\1$/, '$2')
}

function frontmatter(markdown: string) {
  const normalized = markdown.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  const opening = normalized.match(/^\s*---\s*\n/)
  if (!opening) return { scalar: new Map<string, string>(), arrays: new Map<string, string[]>() }
  const contentStart = opening[0].length
  const closing = normalized.slice(contentStart).match(/\n\s*---\s*(?:\n|$)/)
  const block = closing ? normalized.slice(contentStart, contentStart + closing.index!) : ''
  const scalar = new Map<string, string>()
  const arrays = new Map<string, string[]>()
  let currentArray = ''

  for (const line of block.split('\n')) {
    const item = line.match(/^\s*-\s+(.+)$/)
    if (item && currentArray) {
      arrays.set(currentArray, [...(arrays.get(currentArray) ?? []), removeQuotes(item[1].trim())])
      continue
    }
    const field = line.match(/^\s*([A-Za-z][\w]*)\s*:\s*(.*)$/)
    if (!field) continue
    currentArray = field[2].trim() ? '' : field[1]
    if (field[2].trim()) scalar.set(field[1], removeQuotes(field[2].trim()))
    else arrays.set(field[1], [])
  }
  return { scalar, arrays }
}

const difficultyMap: Record<EditorialQuestion['dificuldade'], Question['difficulty']> = {
  facil: 'fácil',
  media: 'média',
  medio: 'média',
  dificil: 'difícil',
}

const letters = ['A', 'B', 'C', 'D', 'E'] as const
const questionPackage = JSON.parse(questionsRaw) as { questions: EditorialQuestion[] }
const rawSourcePackage = JSON.parse(sourcesRaw) as { sources: RawEditorialSource[] }
const sourcePackage: { sources: EditorialSource[] } = {
  sources: rawSourcePackage.sources.map((source) => ({
    id: source.id,
    tipo: source.tipo,
    titulo: source.titulo,
    orgao: source.orgaoAutoria ?? source.orgao ?? 'Fonte catalogada',
    tituloExatoConfirmado: source.tituloExatoConfirmado,
    ano: source.ano,
    url: source.url ?? undefined,
    referencia: source.referencia ?? source.referenciasDrive?.[0],
    verificadoEm: source.verificadoEm ?? source.lastVerifiedAt ?? undefined,
    uso: source.uso ?? 'Fonte oficial consultada na preparação da aula',
    observacao: source.observacao ?? source.observacoes?.join(' '),
  })),
}
const sourcesById = new Map(sourcePackage.sources.map((source) => [source.id, source]))
const bindingByEditorialId = new Map(lessonBindings.map((binding) => [binding.editorialId, binding]))

for (const [historicalId, canonicalId] of Object.entries(manifest.editorialAliases ?? {})) {
  const canonicalBinding = bindingByEditorialId.get(canonicalId)
  if (!canonicalBinding) throw new Error(`Alias editorial ${historicalId} aponta para aula ausente: ${canonicalId}`)
  bindingByEditorialId.set(historicalId, canonicalBinding)
}

for (const binding of lessonBindings) {
  if (!lessonModules[`./library/lessons/${binding.fileName}`]) {
    throw new Error(`Aula editorial ausente: ${binding.fileName}`)
  }
}

function questionTopicId(question: EditorialQuestion, binding: LessonBinding) {
  return question.siteTopicIds?.find((topicId) => binding.topicIds.includes(topicId))
    ?? (question.subtemaId && binding.topicIds.includes(question.subtemaId) ? question.subtemaId : undefined)
    ?? binding.topicIds[0]
}

function questionSource(question: EditorialQuestion) {
  if (question.tipo !== 'real_inepam') {
    return 'Questão inédita — estilo INEPAM. Elaborada para treinamento; não é questão real da banca.'
  }
  const details = [question.origem?.orgao, question.origem?.cargo, question.origem?.ano].filter(Boolean).join(' · ')
  return details ? `Questão real — INEPAM · ${details}` : 'Questão real — INEPAM, com origem documental cadastrada.'
}

function comparableText(value: string) {
  return value.normalize('NFKC').toLocaleLowerCase('pt-BR')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/[`*_~>#|$]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,:;.?!])/g, '$1')
    .trim()
}

function cleanExplanation(value: string) {
  return value.replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim()
}

function isUsableExplanation(value: string) {
  const content = value.replace(/^[A-E][.:]\s*/i, '').replace(/[-–—\s.]/g, '')
  return content.length >= 4
}

let recoveredExplanations = 0
let fallbackExplanations = 0
const fallbackIds: string[] = []

function questionExplanation(question: EditorialQuestion, binding: LessonBinding) {
  const direct = cleanExplanation(question.explicacao ?? '')
  if (isUsableExplanation(direct)) return direct

  const markdown = lessonModules[`./library/lessons/${binding.fileName}`]
  const statement = comparableText(question.enunciado)
  const blocks = markdown.split(/\n\s*---\s*(?:\n|$)/)
  const section = blocks.find((candidate) => comparableText(candidate).includes(statement))
  const recovered = section?.match(/\*\*(?:Coment[aá]rio)\s*:\s*\*\*\s*([\s\S]*)$/i)?.[1]
  const cleanRecovered = cleanExplanation(recovered ?? '')
  if (isUsableExplanation(cleanRecovered)) {
    recoveredExplanations += 1
    return cleanRecovered
  }

  const heading = section?.match(/^#{2,4}\s+(.+)$/m)?.[1] ?? ''
  const headingNumbers = [...heading.matchAll(/\d+/g)]
  const ordinal = headingNumbers[headingNumbers.length - 1]?.[0]
  if (ordinal) {
    const detailedHeading = new RegExp(`(?:^|\\n)#{2,4}\\s+.*quest[aã]o\\s+${ordinal}\\s*(?:—|-)\\s*${question.respostaCorreta}\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n#{1,6}\\s|$)`, 'i')
    const detailed = blocks.map((candidate) => candidate.match(detailedHeading)?.[1]).find(Boolean)
    const cleanDetailed = cleanExplanation(detailed ?? '')
    if (isUsableExplanation(cleanDetailed)) {
      recoveredExplanations += 1
      return cleanDetailed
    }
    const compactLine = new RegExp(`^${ordinal}\\.?\\s*(?:\\*\\*)?${question.respostaCorreta}(?:\\*\\*)?\\s*(?:—|-)\\s*(.+)$`, 'mi')
    const compact = markdown.match(compactLine)?.[1]
    const cleanCompact = cleanExplanation(compact ?? '')
    if (isUsableExplanation(cleanCompact)) {
      recoveredExplanations += 1
      return cleanCompact
    }
  }

  fallbackExplanations += 1
  fallbackIds.push(question.id)
  return `Gabarito: alternativa ${question.respostaCorreta}. Consulte a resolução comentada e a revisão completa na aula deste assunto.`
}

export const editorialQuestions: Question[] = questionPackage.questions.map((question) => {
  const binding = bindingByEditorialId.get(question.aulaIds[0])
  if (!binding) throw new Error(`Questão ${question.id} aponta para aula não integrada: ${question.aulaIds[0]}`)
  const alternatives = letters.map((letter) => question.alternativas[letter])
  if (alternatives.some((alternative) => typeof alternative !== 'string') || alternatives.length !== 5) {
    throw new Error(`Questão ${question.id} não possui exatamente cinco alternativas A–E`)
  }
  const isReal = question.tipo === 'real_inepam'
  const linkedSource = question.sourceRefs?.map((sourceId) => sourcesById.get(sourceId)).find((source) => source?.url)
  return {
    id: question.id,
    cargoIds: question.cargoIds.map((cargoId) => cargoIdMap[cargoId]).filter((cargoId): cargoId is CargoId => Boolean(cargoId)),
    discipline: binding.discipline,
    topicId: questionTopicId(question, binding),
    statement: question.textoBase ? `${question.textoBase}\n\n${question.enunciado}` : question.enunciado,
    alternatives,
    correctIndex: letters.indexOf(question.respostaCorreta),
    explanation: questionExplanation(question, binding),
    difficulty: difficultyMap[question.dificuldade] ?? 'média',
    type: isReal ? 'real' : 'inedita',
    source: questionSource(question),
    sourceUrl: question.sourceUrl ?? linkedSource?.url,
    year: question.origem?.ano ?? question.ano ?? 2026,
  }
})

export const recoveredExplanationCount = recoveredExplanations
export const fallbackExplanationCount = fallbackExplanations
export const fallbackExplanationIds = fallbackIds

const questionCountByEditorialId = new Map<string, number>()
const originalQuestionCountByEditorialId = new Map<string, number>()
const realQuestionCountByEditorialId = new Map<string, number>()
for (const question of questionPackage.questions) {
  for (const editorialId of question.aulaIds) {
    const canonicalEditorialId = bindingByEditorialId.get(editorialId)?.editorialId ?? editorialId
    questionCountByEditorialId.set(canonicalEditorialId, (questionCountByEditorialId.get(canonicalEditorialId) ?? 0) + 1)
    const target = question.tipo === 'real_inepam' ? realQuestionCountByEditorialId : originalQuestionCountByEditorialId
    target.set(canonicalEditorialId, (target.get(canonicalEditorialId) ?? 0) + 1)
  }
}

export const richLessons = lessonBindings.map((binding): RichLesson => {
  const markdown = lessonModules[`./library/lessons/${binding.fileName}`]
  const metadata = frontmatter(markdown)
  const sourceIds = metadata.arrays.get('sourceRefs') ?? []
  return {
    topicId: binding.topicIds[0],
    topicIds: binding.topicIds,
    editorialId: binding.editorialId,
    stableItemId: binding.stableItemId,
    title: metadata.scalar.get('titulo') ?? markdown.match(/^#\s+(.+)$/m)?.[1] ?? binding.editorialId,
    discipline: binding.discipline,
    disciplineId: binding.disciplineId,
    level: binding.level,
    cargoIds: binding.cargoIds,
    markdown,
    sources: sourceIds.map((sourceId) => sourcesById.get(sourceId)).filter((source): source is EditorialSource => Boolean(source)),
    questionCount: questionCountByEditorialId.get(binding.editorialId) ?? 0,
    originalQuestionCount: originalQuestionCountByEditorialId.get(binding.editorialId) ?? 0,
    realQuestionCount: realQuestionCountByEditorialId.get(binding.editorialId) ?? 0,
    realQuestionReferenceCount: (markdown.match(/^##\s+.*QUESTÃO REAL\b/gim) ?? []).length,
    status: metadata.scalar.get('status') ?? binding.status,
    version: metadata.scalar.get('version') ?? metadata.scalar.get('versao') ?? binding.version,
  }
})

export const richLessonsByTopicId: Record<string, RichLesson> = Object.fromEntries(
  richLessons.flatMap((lesson) => lesson.topicIds.map((topicId) => [topicId, lesson])),
)

export const practicalLesson = richLessonsByTopicId['aj-pratica']

export const topicEditorialIdByTopicId: Record<string, string> = Object.fromEntries(
  richLessons.flatMap((lesson) => lesson.topicIds.map((topicId) => [topicId, lesson.editorialId])),
)

export const primaryTopicIdByTopicId: Record<string, string> = Object.fromEntries(
  richLessons.flatMap((lesson) => lesson.topicIds.map((topicId) => [topicId, lesson.topicId])),
)

export const editorialStableItemIds = richLessons.map((lesson) => lesson.stableItemId)
