import { isValidElement, memo, type ReactNode } from 'react'
import { ArrowRight, BookOpenText, FileCheck2, ListTree } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { RichLesson } from './editorial'

type FrontmatterValue = string | string[]

const metadataLabels: Record<string, string> = {
  id: 'ID editorial',
  cargoIds: 'Cargos',
  nivel: 'Nível',
  disciplinaId: 'Disciplina',
  temaId: 'Tema',
  titulo: 'Título editorial',
  editalRefs: 'Referência ao edital',
  sourceRefs: 'Fontes rastreáveis',
  status: 'Status editorial',
  versao: 'Versão',
  dataRevisao: 'Revisado em',
}

const primarySectionNumbers = new Set([1, 2, 4, 17, 18, 19, 21, 22, 23, 24, 25, 27])

function splitFrontmatter(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  if (lines[0] !== '---') return { body: markdown, metadata: {} as Record<string, FrontmatterValue> }
  const end = lines.indexOf('---', 1)
  if (end < 0) return { body: markdown, metadata: {} as Record<string, FrontmatterValue> }

  const metadata: Record<string, FrontmatterValue> = {}
  let activeKey = ''
  for (const line of lines.slice(1, end)) {
    const item = line.match(/^\s+-\s+(.+)$/)
    if (item && activeKey) {
      const current = metadata[activeKey]
      metadata[activeKey] = [...(Array.isArray(current) ? current : []), item[1].replace(/^"|"$/g, '')]
      continue
    }
    const field = line.match(/^([A-Za-z][\w]*):\s*(.*)$/)
    if (!field) continue
    activeKey = field[1]
    metadata[activeKey] = field[2].replace(/^"|"$/g, '')
  }
  return { body: lines.slice(end + 1).join('\n').trimStart(), metadata }
}

function plainText(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(plainText).join('')
  if (isValidElement<{ children?: ReactNode }>(children)) return plainText(children.props.children)
  return ''
}

function lessonHeadingId(title: string) {
  return `secao-${title.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

function primaryHeadings(markdown: string) {
  return splitFrontmatter(markdown).body.split('\n').flatMap((line) => {
    const match = line.match(/^##\s+(\d+)\.\s+(.+)$/)
    if (!match || !primarySectionNumbers.has(Number(match[1]))) return []
    return [{ id: lessonHeadingId(`${match[1]}. ${match[2]}`), label: match[2] }]
  })
}

export function RichLessonToc({ lesson }: { lesson: RichLesson }) {
  const headings = primaryHeadings(lesson.markdown)
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <nav className="rich-lesson-toc" aria-label="Índice da aula">
      <span><ListTree size={15} /> Nesta aula</span>
      {headings.map((heading) => <button type="button" key={heading.id} onClick={() => goTo(heading.id)}>{heading.label}</button>)}
    </nav>
  )
}

function RichLessonArticleComponent({ lesson }: { lesson: RichLesson }) {
  const { body, metadata } = splitFrontmatter(lesson.markdown)
  const metadataEntries = Object.entries(metadata)

  return (
    <div className="rich-lesson-document">
      <section className="editorial-identity">
        <header><FileCheck2 size={20} /><div><span>Conteúdo editorial completo</span><strong>{lesson.editorialId}</strong></div></header>
        <dl>{metadataEntries.map(([key, value]) => <div key={key}><dt>{metadataLabels[key] ?? key}</dt><dd>{Array.isArray(value) ? value.join(' · ') : value}</dd></div>)}</dl>
      </section>

      <div className="rich-markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h1 className="editorial-document-title">{children}</h1>,
            h2: ({ children }) => <h2 id={lessonHeadingId(plainText(children))}>{children}</h2>,
            h3: ({ children }) => <h3>{children}</h3>,
            table: ({ children }) => <div className="markdown-table-scroll" role="region" aria-label="Tabela da aula" tabIndex={0}><table>{children}</table></div>,
            a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>,
          }}
        >{body}</ReactMarkdown>
      </div>

      <section className="editorial-practice-panel">
        <BookOpenText size={22} />
        <div><span>Prática vinculada</span><strong>{lesson.questionCount} questões inéditas — estilo INEPAM</strong><p>As resoluções comentadas aparecem após a confirmação de cada resposta.</p></div>
        <a href="#/questoes?topico=mp-fonema">Praticar agora <ArrowRight size={16} /></a>
      </section>

      <section className="official-source-links">
        <header><span>Links oficiais do pacote</span><h2>Fontes verificáveis</h2></header>
        <div>{lesson.sources.map((source) => source.url ? <a href={source.url} key={source.id} target="_blank" rel="noreferrer"><span>{source.orgao}</span><strong>{source.titulo}</strong><small>{source.uso}</small><ArrowRight size={16} /></a> : <article key={source.id}><span>{source.orgao}</span><strong>{source.titulo}</strong><small>{source.referencia ?? source.uso}</small></article>)}</div>
      </section>
    </div>
  )
}

export const RichLessonArticle = memo(RichLessonArticleComponent)
