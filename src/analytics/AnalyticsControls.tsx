import { useEffect, useSyncExternalStore } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { topics } from '../data'
import { publicationNews, publicationRectifications } from '../content/publication'
import { analyticsPage } from './analytics'
import { analytics, chooseAnalytics, getAnalyticsChoice, subscribeAnalytics } from './consent'
import './analytics.css'

const lessonNames = Object.fromEntries(topics.map((topic) => [topic.id, topic.title]))
const publicationNames = Object.fromEntries([
  ...publicationNews.map((item) => [`/noticias/${item.id}`, item.titulo]),
  ...publicationRectifications.map((item) => [`/retificacoes/${item.id}`, item.identificacao]),
])

export function Analytics() {
  const location = useLocation()
  const choice = useSyncExternalStore(subscribeAnalytics, getAnalyticsChoice)

  useEffect(() => {
    const track = () => analytics.pageView(analyticsPage(location.pathname, lessonNames, publicationNames))
    track()
    window.addEventListener('online', track)
    return () => window.removeEventListener('online', track)
  }, [location.pathname, choice])

  if (!analytics.configured || choice !== null) return null
  return <aside className="analytics-banner" aria-label="Preferências de estatísticas">
    <div><strong>Ajude a melhorar este espaço de estudos</strong><p>Podemos usar cookies do Google Analytics para contar visitas e saber quais aulas são mais acessadas? A escolha é opcional. <Link to="/privacidade">Saiba mais</Link></p></div>
    <div className="analytics-actions"><button type="button" onClick={() => chooseAnalytics('denied')}>Recusar estatísticas</button><button type="button" onClick={() => chooseAnalytics('granted')}>Permitir estatísticas</button></div>
  </aside>
}

export function AnalyticsPreferences() {
  const choice = useSyncExternalStore(subscribeAnalytics, getAnalyticsChoice)
  if (!analytics.configured) return null
  return <section className="privacy-copy"><h2>Estatísticas de acesso opcionais</h2>
    <p>Com sua permissão, usamos a versão gratuita do Google Analytics para medir visitas, páginas e aulas acessadas, origem dos acessos e características gerais do dispositivo. O Google recebe essas informações e usa cookies para distinguir navegadores. Bloqueadores, acessos offline e quem recusa a medição não entram integralmente na contagem.</p>
    <p>Não enviamos ao Analytics nome, e-mail, identificação da conta, respostas, notas, favoritos ou progresso. A medição não é usada para anúncios. As aulas continuam disponíveis se você recusar.</p>
    <p>Os cookies de estatísticas têm duração configurada de até 90 dias. Você pode retirar sua permissão aqui: isso interrompe a medição neste navegador e remove os cookies de estatísticas do projeto, sem apagar seus estudos. Não exclui automaticamente dados já recebidos pelo Google.</p>
    <p><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">Como o Google usa informações de sites e apps que usam seus serviços</a></p>
    <p role="status">Sua escolha neste navegador: {choice === 'granted' ? 'estatísticas permitidas' : choice === 'denied' ? 'estatísticas recusadas' : 'ainda não definida'}.</p>
    <div className="analytics-actions"><button type="button" disabled={choice === 'denied'} onClick={() => chooseAnalytics('denied')}>Recusar estatísticas</button><button type="button" disabled={choice === 'granted'} onClick={() => chooseAnalytics('granted')}>Permitir estatísticas</button></div>
  </section>
}
