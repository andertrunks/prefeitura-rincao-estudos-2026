import { isValidElement, memo, type ReactNode } from 'react'
import { ArrowRight, BookOpenText, FileCheck2, ListTree } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { RichLesson } from './editorial'
import { createStudentLessonMarkdown } from './studentContent'

const primarySectionNumbers = new Set([1, 2, 4, 17, 18, 19, 21, 22, 23, 24, 25, 27])

function plainText(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(plainText).join('')
  if (isValidElement<{ children?: ReactNode }>(children)) return plainText(children.props.children)
  return ''
}

function lessonHeadingId(title: string) {
  return `secao-${title.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

function StudentMarkdown({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="editorial-document-title">{children}</h1>,
        h2: ({ children }) => <h2 id={lessonHeadingId(plainText(children))}>{children}</h2>,
        h3: ({ children }) => <h3>{children}</h3>,
        table: ({ children }) => <div className="markdown-table-scroll" role="region" aria-label="Tabela da aula" tabIndex={0}><table>{children}</table></div>,
        a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>,
      }}
    >{markdown}</ReactMarkdown>
  )
}

function primaryHeadings(markdown: string, questionCount: number) {
  const { mainBody, sourcesBody } = createStudentLessonMarkdown(markdown, questionCount)
  return `${mainBody}\n${sourcesBody}`.split('\n').flatMap((line) => {
    const match = line.match(/^##\s+(\d+)\.\s+(.+)$/)
    if (!match || !primarySectionNumbers.has(Number(match[1]))) return []
    return [{ id: lessonHeadingId(`${match[1]}. ${match[2]}`), label: match[2] }]
  })
}

export function RichLessonToc({ lesson }: { lesson: RichLesson }) {
  const headings = primaryHeadings(lesson.markdown, lesson.questionCount)
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <nav className="rich-lesson-toc" aria-label="Índice da aula">
      <span><ListTree size={15} /> Nesta aula</span>
      {headings.map((heading) => <button type="button" key={heading.id} onClick={() => goTo(heading.id)}>{heading.label}</button>)}
    </nav>
  )
}

function RichLessonArticleComponent({ lesson }: { lesson: RichLesson }) {
  const { mainBody, sourcesBody } = createStudentLessonMarkdown(lesson.markdown, lesson.questionCount)

  return (
    <div className="rich-lesson-document">
      <section className="editorial-identity">
        <header><FileCheck2 size={20} /><div><span>Aula completa</span><strong>Português · Ensino Médio</strong></div></header>
        <p>Conteúdo compartilhado por Agente Administrativo e Monitor de Educação, alinhado ao tema Fonema previsto no edital.</p>
      </section>

      <div className="rich-markdown"><StudentMarkdown markdown={mainBody} /></div>

      <section className="editorial-practice-panel" aria-labelledby="practice-title">
        <BookOpenText size={22} />
        <div><span>Questões para praticar</span><strong id="practice-title">Esta aula possui {lesson.questionCount} questões inéditas no estilo INEPAM, com gabarito comentado.</strong><p>As resoluções aparecem após cada resposta. A aula também analisa {lesson.realQuestionReferenceCount} questões anteriores da INEPAM relacionadas ao tema.</p></div>
        <a href={`#/questoes?topico=${lesson.topicId}`}>Praticar este assunto <ArrowRight size={16} /></a>
      </section>

      {sourcesBody ? <div className="rich-markdown rich-markdown-sources"><StudentMarkdown markdown={sourcesBody} /></div> : null}

      <section className="official-source-links">
        <header><span>Fontes oficiais</span><h2>Links para consulta</h2></header>
        <div>{lesson.sources.map((source) => source.url ? <a href={source.url} key={source.id} target="_blank" rel="noreferrer"><span>{source.orgao}</span><strong>{source.titulo}</strong><small>{source.uso}</small><ArrowRight size={16} /></a> : <article key={source.id}><span>{source.orgao}</span><strong>{source.titulo}</strong><small>{source.referencia ?? source.uso}</small></article>)}</div>
      </section>
    </div>
  )
}

export const RichLessonArticle = memo(RichLessonArticleComponent)
