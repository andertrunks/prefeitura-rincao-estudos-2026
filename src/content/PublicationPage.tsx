import { Link, useParams } from 'react-router-dom'
import type { CargoId } from '../types'
import { examSchedule, publicationDate, publicationNews, publicationRectifications } from './publication'

export function PublicationPage({ kind, cargoId }: { kind: 'noticia' | 'retificacao'; cargoId: CargoId }) {
  const { publicationId } = useParams()
  const news = kind === 'noticia' ? publicationNews.find((item) => item.id === publicationId) : undefined
  const rectification = kind === 'retificacao' ? publicationRectifications.find((item) => item.id === publicationId) : undefined
  const item = news ?? rectification
  if (!item) return <section className="publication-article"><h1>Publicação não encontrada</h1><Link to="/">Voltar ao início</Link></section>
  const second = item.id.includes('2-rerratificacao') || item.id.includes('abertura-2-')
  const title = news?.titulo ?? rectification!.identificacao
  const fullUrl = second ? 'https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2774'
    : rectification ? 'https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2681'
    : item.id === 'noticia-edital-divulgacao-inscritos-2026' ? 'https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2755' : item.url
  return <article className="publication-article">
    <Link to="/">← Voltar às notícias</Link>
    <p className="eyebrow">{kind === 'noticia' ? 'Notícia do concurso' : 'Retificação oficial'} · {publicationDate(item.publishedAt)}</p>
    <h1>{title}</h1>
    <p>{item.resumo}</p>
    {!second && news && <p>Esta notícia registra as informações disponíveis na data da publicação. <Link to="/">Confira também as atualizações mais recentes do concurso.</Link></p>}
    {rectification && <section><h2>O que mudou</h2><ul>{rectification.mudancas.map((change) => <li key={change}>{change}</li>)}</ul></section>}
    {second && <section className="publication-highlight"><h2>O que você precisa observar</h2><p><strong>{examSchedule(cargoId)}</strong></p><p>O horário acima é o fechamento dos portões, não uma orientação para chegar nesse momento. Confira também a convocação oficial para o local e as instruções de comparecimento.</p></section>}
    {rectification && <section><h2>Impacto nos estudos</h2><p>Não houve alteração no conteúdo programático dos três cargos atendidos pelo site. Aulas, questões e simulados permanecem válidos; {second ? 'a atualização trata dos períodos e horários da prova.' : 'as mudanças não afetam Agente Administrativo, Monitor de Educação e Ajudante Geral.'}</p></section>}
    <section><h2>Leia a publicação oficial na íntegra</h2><p>Fonte: {item.fonteOficial}. Consulte o documento original para verificar todos os detalhes.</p><a className="primary-action" href={fullUrl} target="_blank" rel="noreferrer">Ler conteúdo oficial na íntegra ↗</a></section>
  </article>
}
