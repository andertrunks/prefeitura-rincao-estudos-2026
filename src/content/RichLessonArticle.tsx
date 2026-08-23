import { isValidElement, memo, type ReactNode } from 'react'
import { ArrowRight, BookOpenText, FileCheck2, ListTree } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { RichLesson } from './editorial'
import { createStudentLessonMarkdown } from './studentContent'

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

type LessonHeading = { id: string; label: string }

const tocCategories = [
  /o que o edital cobra/i,
  /objetivos?/i,
  /(?:o que é|conceitos? fundamentais?|regra geral|teoria)/i,
  /(?:inepam|padrões? observados?)/i,
  /questão real/i,
  /exemplos?/i,
  /(?:pegadinhas?|erros?)/i,
  /(?:quadro-?resumo|resumo)/i,
  /(?:revisão|o que memorizar)/i,
  /flashcards?/i,
  /questões? (?:para praticar|de fixação|inéditas?)/i,
  /gabarito/i,
  /fontes?/i,
]

function primaryHeadings(markdown: string, questionCount: number) {
  const { mainBody, sourcesBody } = createStudentLessonMarkdown(markdown, questionCount)
  const headings = `${mainBody}\n${sourcesBody}`.split('\n').flatMap((line): LessonHeading[] => {
    const match = line.match(/^##\s+(.+)$/)
    if (!match) return []
    return [{ id: lessonHeadingId(match[1]), label: match[1].replace(/^\d+\.\s+/, '') }]
  })
  const selected: LessonHeading[] = []
  for (const category of tocCategories) {
    const heading = headings.find((candidate) => category.test(candidate.label))
    if (heading && !selected.some((candidate) => candidate.id === heading.id)) selected.push(heading)
  }
  if (!selected.length) return headings.slice(0, 12)
  return selected.slice(0, 14)
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
  const disciplineLabel = lesson.discipline === 'portugues' ? 'Português' : 'Matemática'

  return (
    <div className="rich-lesson-document">
      <section className="editorial-identity">
        <header><FileCheck2 size={20} /><div><span>Aula completa</span><strong>{disciplineLabel} · Ensino Médio</strong></div></header>
        <p>Conteúdo compartilhado por Agente Administrativo e Monitor de Educação, alinhado ao edital e organizado para estudo completo.</p>
      </section>

      <div className="rich-markdown"><StudentMarkdown markdown={mainBody} /></div>

      <section className="editorial-practice-panel" aria-labelledby="practice-title">
        <BookOpenText size={22} />
        {lesson.questionCount ? <>
          <div><span>Questões para praticar</span><strong id="practice-title">Esta aula possui {lesson.questionCount} questões inéditas no estilo INEPAM, com gabarito comentado.</strong>{lesson.realQuestionReferenceCount ? <p>A aula também inclui questões anteriores da INEPAM resolvidas e comentadas, preservadas como evidência pedagógica.</p> : null}</div>
          <a href={`#/questoes?topico=${lesson.topicId}`}>Praticar este assunto <ArrowRight size={16} /></a>
        </> : <div><span>Prática na própria aula</span><strong id="practice-title">A aula inclui questões de fixação e gabarito comentado no próprio material.</strong>{lesson.realQuestionReferenceCount ? <p>Também há questões anteriores da INEPAM resolvidas e comentadas, preservadas com sua classificação correta.</p> : null}</div>}
      </section>

      {sourcesBody ? <div className="rich-markdown rich-markdown-sources"><StudentMarkdown markdown={sourcesBody} /></div> : null}
    </div>
  )
}

export const RichLessonArticle = memo(RichLessonArticleComponent)
