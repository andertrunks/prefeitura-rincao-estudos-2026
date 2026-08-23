import type { CargoId, DisciplineId, Question } from '../types'
import questionsRaw from './library/data/questions.json?raw'
import sourcesRaw from './library/data/sources.json?raw'

type EditorialQuestion = {
  id: string
  cargoIds: string[]
  disciplinaId: string
  temaId: string
  subtemaId?: string
  aulaIds: string[]
  tipo: 'inedita_estilo_inepam' | 'real_inepam'
  dificuldade: 'facil' | 'medio' | 'dificil'
  textoBase?: string
  enunciado: string
  alternativas: Record<'A' | 'B' | 'C' | 'D' | 'E', string>
  respostaCorreta: 'A' | 'B' | 'C' | 'D' | 'E'
  explicacao: string
  sourceUrl?: string
  ano?: number
}

export type EditorialSource = {
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

type LessonBinding = {
  fileName: string
  stableItemId: string
  topicIds: string[]
  discipline: DisciplineId
}

export interface RichLesson {
  topicId: string
  topicIds: string[]
  editorialId: string
  stableItemId: string
  title: string
  discipline: DisciplineId
  cargoIds: CargoId[]
  markdown: string
  sources: EditorialSource[]
  questionCount: number
  realQuestionReferenceCount: number
  status: string
  version: string
}

const lessonBindings: LessonBinding[] = [
  { fileName: 'medio-portugues-fonema-001.md', stableItemId: 'MED-PORT-001', topicIds: ['mp-fonema'], discipline: 'portugues' },
  { fileName: 'medio-portugues-silaba-001.md', stableItemId: 'MED-PORT-002', topicIds: ['mp-silaba'], discipline: 'portugues' },
  { fileName: 'medio-portugues-ortografia-001.md', stableItemId: 'MED-PORT-003', topicIds: ['mp-ortografia'], discipline: 'portugues' },
  { fileName: 'medio-portugues-substantivo-001.md', stableItemId: 'MED-PORT-004', topicIds: ['mp-substantivo'], discipline: 'portugues' },
  { fileName: 'medio-portugues-adjetivo-001.md', stableItemId: 'MED-PORT-005', topicIds: ['mp-adjetivo'], discipline: 'portugues' },
  { fileName: 'medio-portugues-preposicao-001.md', stableItemId: 'MED-PORT-006', topicIds: ['mp-preposicao'], discipline: 'portugues' },
  { fileName: 'medio-portugues-conjuncao-001.md', stableItemId: 'MED-PORT-007', topicIds: ['mp-conjuncao'], discipline: 'portugues' },
  { fileName: 'medio-portugues-adverbio-001.md', stableItemId: 'MED-PORT-008', topicIds: ['mp-adverbio'], discipline: 'portugues' },
  { fileName: 'medio-portugues-verbo-001.md', stableItemId: 'MED-PORT-009', topicIds: ['mp-verbo'], discipline: 'portugues' },
  { fileName: 'medio-portugues-pronome-001.md', stableItemId: 'MED-PORT-010', topicIds: ['mp-pronome'], discipline: 'portugues' },
  { fileName: 'medio-portugues-numeral-001.md', stableItemId: 'MED-PORT-011', topicIds: ['mp-numeral'], discipline: 'portugues' },
  { fileName: 'medio-portugues-interjeicao-001.md', stableItemId: 'MED-PORT-012', topicIds: ['mp-interjeicao'], discipline: 'portugues' },
  { fileName: 'medio-portugues-artigo-001.md', stableItemId: 'MED-PORT-013', topicIds: ['mp-artigo'], discipline: 'portugues' },
  { fileName: 'medio-portugues-acentuacao-001.md', stableItemId: 'MED-PORT-014', topicIds: ['mp-acentuacao'], discipline: 'portugues' },
  { fileName: 'medio-portugues-concordancia-001.md', stableItemId: 'MED-PORT-015', topicIds: ['mp-concordancia-nominal', 'mp-concordancia-verbal'], discipline: 'portugues' },
  { fileName: 'medio-portugues-pontuacao-001.md', stableItemId: 'MED-PORT-016', topicIds: ['mp-pontuacao'], discipline: 'portugues' },
  { fileName: 'medio-portugues-crase-001.md', stableItemId: 'MED-PORT-017', topicIds: ['mp-crase'], discipline: 'portugues' },
  { fileName: 'medio-portugues-colocacao-pronominal-001.md', stableItemId: 'MED-PORT-018', topicIds: ['mp-colocacao'], discipline: 'portugues' },
  { fileName: 'medio-portugues-analise-sintatica-001.md', stableItemId: 'MED-PORT-019', topicIds: ['mp-sintaxe', 'mp-periodo-simples', 'mp-periodo-composto'], discipline: 'portugues' },
  { fileName: 'medio-portugues-figuras-linguagem-001.md', stableItemId: 'MED-PORT-020', topicIds: ['mp-figuras'], discipline: 'portugues' },
  { fileName: 'medio-portugues-interpretacao-001.md', stableItemId: 'MED-PORT-021', topicIds: ['mp-interpretacao'], discipline: 'portugues' },
  { fileName: 'medio-matematica-radicais-001.md', stableItemId: 'MED-MAT-001', topicIds: ['mm-radicais', 'mm-operacoes-radicais', 'mm-racionalizacao'], discipline: 'matematica' },
  { fileName: 'medio-matematica-razao-proporcao-001.md', stableItemId: 'MED-MAT-002', topicIds: ['mm-razao', 'mm-proporcao'], discipline: 'matematica' },
  { fileName: 'medio-matematica-porcentagem-001.md', stableItemId: 'MED-MAT-003', topicIds: ['mm-porcentagem'], discipline: 'matematica' },
  { fileName: 'medio-matematica-juros-simples-001.md', stableItemId: 'MED-MAT-004', topicIds: ['mm-juros'], discipline: 'matematica' },
  { fileName: 'medio-matematica-numeros-reais-001.md', stableItemId: 'MED-MAT-005', topicIds: ['mm-reais'], discipline: 'matematica' },
  { fileName: 'medio-matematica-fatoracao-001.md', stableItemId: 'MED-MAT-006', topicIds: ['mm-fatoracao'], discipline: 'matematica' },
  { fileName: 'medio-matematica-expressoes-algebricas-operacoes-001.md', stableItemId: 'MED-MAT-007', topicIds: ['mm-expressoes'], discipline: 'matematica' },
  { fileName: 'medio-matematica-expressoes-algebricas-fracionarias-001.md', stableItemId: 'MED-MAT-008', topicIds: ['mm-fracoes-algebricas'], discipline: 'matematica' },
  { fileName: 'medio-matematica-mdc-mmc-001.md', stableItemId: 'MED-MAT-009', topicIds: ['mm-mdc', 'mm-mmc'], discipline: 'matematica' },
  { fileName: 'medio-matematica-sistema-medidas-001.md', stableItemId: 'MED-MAT-010', topicIds: ['mm-medidas', 'mm-conversoes'], discipline: 'matematica' },
  { fileName: 'medio-matematica-estatistica-001.md', stableItemId: 'MED-MAT-011', topicIds: ['mm-estatistica', 'mm-tabelas', 'mm-graficos'], discipline: 'matematica' },
  { fileName: 'medio-matematica-geometria-001.md', stableItemId: 'MED-MAT-012', topicIds: ['mm-geometria', 'mm-plano'], discipline: 'matematica' },
  { fileName: 'medio-matematica-probabilidade-analise-combinatoria-001.md', stableItemId: 'MED-MAT-013', topicIds: ['mm-probabilidade', 'mm-combinatoria'], discipline: 'matematica' },
]

const lessonModules = import.meta.glob<string>('./library/lessons/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

function removeQuotes(value: string) {
  return value.replace(/^(["'])(.*)\1$/, '$2')
}

function frontmatter(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, '\n')
  if (!normalized.startsWith('---\n')) return { scalar: new Map<string, string>(), arrays: new Map<string, string[]>() }
  const end = normalized.indexOf('\n---\n', 4)
  const block = end < 0 ? '' : normalized.slice(4, end)
  const scalar = new Map<string, string>()
  const arrays = new Map<string, string[]>()
  let currentArray = ''
  for (const line of block.split('\n')) {
    const item = line.match(/^\s+-\s+(.+)$/)
    if (item && currentArray) {
      arrays.set(currentArray, [...(arrays.get(currentArray) ?? []), removeQuotes(item[1].trim())])
      continue
    }
    const field = line.match(/^([A-Za-z][\w]*):\s*(.*)$/)
    if (!field) continue
    currentArray = field[2].trim() ? '' : field[1]
    if (field[2].trim()) scalar.set(field[1], removeQuotes(field[2].trim()))
    else arrays.set(field[1], [])
  }
  return { scalar, arrays }
}

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
const questionPackage = JSON.parse(questionsRaw) as { questions: EditorialQuestion[] }
const sourcePackage = JSON.parse(sourcesRaw) as { sources: EditorialSource[] }
const sourcesById = new Map(sourcePackage.sources.map((source) => [source.id, source]))
const bindingByEditorialId = new Map<string, LessonBinding>()

for (const binding of lessonBindings) {
  const markdown = lessonModules[`./library/lessons/${binding.fileName}`]
  if (!markdown) throw new Error(`Aula editorial ausente: ${binding.fileName}`)
  const metadata = frontmatter(markdown)
  const editorialId = metadata.scalar.get('id')
  if (!editorialId) throw new Error(`ID editorial ausente: ${binding.fileName}`)
  bindingByEditorialId.set(editorialId, binding)
}

export const editorialQuestions: Question[] = questionPackage.questions.map((question) => {
  const binding = bindingByEditorialId.get(question.aulaIds[0])
  if (!binding) throw new Error(`Questão ${question.id} aponta para aula não integrada: ${question.aulaIds[0]}`)
  const alternatives = letters.map((letter) => question.alternativas[letter])
  if (alternatives.some((alternative) => typeof alternative !== 'string') || alternatives.length !== 5) {
    throw new Error(`Questão ${question.id} não possui exatamente cinco alternativas A–E`)
  }
  const isReal = question.tipo === 'real_inepam'
  return {
    id: question.id,
    cargoIds: question.cargoIds.map((cargoId) => cargoIdMap[cargoId]).filter((cargoId): cargoId is CargoId => Boolean(cargoId)),
    discipline: binding.discipline,
    topicId: binding.topicIds[0],
    statement: question.textoBase ? `${question.textoBase}\n\n${question.enunciado}` : question.enunciado,
    alternatives,
    correctIndex: letters.indexOf(question.respostaCorreta),
    explanation: question.explicacao,
    difficulty: difficultyMap[question.dificuldade],
    type: isReal ? 'real' : 'inedita',
    source: isReal
      ? 'Questão real — INEPAM, com origem documental cadastrada.'
      : 'Questão inédita — estilo INEPAM. Elaborada para treinamento; não é questão real da banca.',
    sourceUrl: question.sourceUrl,
    year: question.ano ?? 2026,
  }
})

const questionCountByEditorialId = new Map<string, number>()
for (const question of questionPackage.questions) {
  for (const editorialId of question.aulaIds) {
    questionCountByEditorialId.set(editorialId, (questionCountByEditorialId.get(editorialId) ?? 0) + 1)
  }
}

export const richLessons = lessonBindings.map((binding): RichLesson => {
  const markdown = lessonModules[`./library/lessons/${binding.fileName}`]
  const metadata = frontmatter(markdown)
  const editorialId = metadata.scalar.get('id')!
  const sourceIds = metadata.arrays.get('sourceRefs') ?? []
  const cargoIds = (metadata.arrays.get('cargoIds') ?? [])
    .map((cargoId) => cargoIdMap[cargoId])
    .filter((cargoId): cargoId is CargoId => Boolean(cargoId))
  const title = metadata.scalar.get('titulo') ?? markdown.match(/^#\s+(.+)$/m)?.[1] ?? editorialId
  return {
    topicId: binding.topicIds[0],
    topicIds: binding.topicIds,
    editorialId,
    stableItemId: binding.stableItemId,
    title,
    discipline: binding.discipline,
    cargoIds,
    markdown,
    sources: sourceIds.map((sourceId) => sourcesById.get(sourceId)).filter((source): source is EditorialSource => Boolean(source)),
    questionCount: questionCountByEditorialId.get(editorialId) ?? 0,
    realQuestionReferenceCount: (markdown.match(/^##\s+.*QUESTÃO REAL\b/gim) ?? []).length,
    status: metadata.scalar.get('status') ?? 'revisado',
    version: metadata.scalar.get('versao') ?? '0.1.0',
  }
})

export const richLessonsByTopicId: Record<string, RichLesson> = Object.fromEntries(
  richLessons.flatMap((lesson) => lesson.topicIds.map((topicId) => [topicId, lesson])),
)

export const topicEditorialIdByTopicId: Record<string, string> = Object.fromEntries(
  richLessons.flatMap((lesson) => lesson.topicIds.map((topicId) => [topicId, lesson.editorialId])),
)

export const primaryTopicIdByTopicId: Record<string, string> = Object.fromEntries(
  richLessons.flatMap((lesson) => lesson.topicIds.map((topicId) => [topicId, lesson.topicId])),
)

export const editorialStableItemIds = richLessons.map((lesson) => lesson.stableItemId)
