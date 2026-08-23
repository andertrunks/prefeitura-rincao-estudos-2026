import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookCheck,
  BookOpen,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  Cloud,
  CloudOff,
  Download,
  FileText,
  GraduationCap,
  HardHat,
  Heart,
  Home,
  LibraryBig,
  LogIn,
  Menu,
  Newspaper,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  Upload,
  UserRound,
  X,
  XCircle,
} from 'lucide-react'
import { AccountPage } from './account/AccountPage'
import { AuthModal } from './auth/AuthModal'
import { useAuth } from './auth/useAuth'
import { GuestImportModal } from './auth/GuestImportModal'
import { RichLessonArticle, RichLessonToc } from './content/RichLessonArticle'
import { primaryTopicIdByTopicId, richLessonsByTopicId } from './content/editorial'
import { calendarEventsForCargo, examCountdown, formatCalendarEvent, newsForCargo, publicationRectifications } from './content/publication'
import {
  HashRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import {
  cargos,
  disciplineLabels,
  practicalExam,
  questions,
  simulationQuestionsForCargo,
  topics,
  verifiedQuestionReferences,
} from './data'
import { useProgress } from './hooks/useProgress'
import { PrivacyPage } from './privacy/PrivacyPage'
import { getStudyRecommendations } from './services/recommendations'
import { mergeUserData } from './services/progressMerge'
import {
  createLocalId,
  dismissGuestImport,
  loadUserData,
  normalizeImportedData,
  nextUpdatedAt,
  queueGuestImport,
  shouldOfferGuestImport,
  touchUserData,
} from './storage'
import type {
  AnswerRecord,
  CargoId,
  DisciplineId,
  Question,
  SimulationRecord,
  SyncStatus,
  UserData,
} from './types'
import { exportUserData } from './utils/backup'
import { questionMatchesCargo } from './utils/questions'
import './App.css'

type AppState = {
  data: UserData
  setData: Dispatch<SetStateAction<UserData>>
}

type ConnectedAppState = AppState & {
  onOpenAuth: () => void
  onSync: () => Promise<unknown>
  syncMessage: string
  syncStatus: SyncStatus
}

const navItems = [
  { to: '/', label: 'Início', icon: Home, end: true },
  { to: '/cargos', label: 'Cargos', icon: GraduationCap },
  { to: '/estudo', label: 'Material de estudo', icon: LibraryBig },
  { to: '/questoes', label: 'Questões', icon: CircleHelp },
  { to: '/simulados', label: 'Simulados', icon: Timer },
  { to: '/erros', label: 'Caderno de Erros', icon: AlertTriangle },
  { to: '/revisoes', label: 'Revisões', icon: CalendarClock },
  { to: '/desempenho', label: 'Desempenho', icon: BarChart3 },
]

const originLabels = {
  edital: 'Conteúdo expresso no edital',
  subtema: 'Subtema necessário',
  complemento: 'Complemento didático',
  banca: 'Padrão verificado da INEPAM',
}

function studyCatalogByCargo(cargoId: CargoId) {
  const seenLessons = new Set<string>()
  return topics.filter((topic) => {
    if (!topic.cargoIds.includes(cargoId)) return false
    const lesson = richLessonsByTopicId[topic.id]
    if (!lesson) return true
    if (seenLessons.has(lesson.editorialId) || primaryTopicIdByTopicId[topic.id] !== topic.id) return false
    seenLessons.add(lesson.editorialId)
    return true
  })
}

function byCargo(cargoId: CargoId) {
  return studyCatalogByCargo(cargoId).filter((topic) => Boolean(richLessonsByTopicId[topic.id]))
}

function lessonStateIds(topicId: string) {
  return richLessonsByTopicId[topicId]?.topicIds ?? [topicId]
}

function includesLessonState(ids: string[], topicId: string) {
  return lessonStateIds(topicId).some((id) => ids.includes(id))
}

function accuracy(records: AnswerRecord[]) {
  return records.length ? Math.round((records.filter((record) => record.correct).length / records.length) * 100) : 0
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const rest = seconds % 60
  return [hours, minutes, rest].map((value) => String(value).padStart(2, '0')).join(':')
}

function latestAnswers(records: AnswerRecord[]) {
  const map = new Map<string, AnswerRecord>()
  records.forEach((record) => map.set(record.questionId, record))
  return [...map.values()]
}

function Header({ data, setData, onOpenAuth, syncStatus }: ConnectedAppState) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const cargo = cargos.find((item) => item.id === data.selectedCargo)!

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Rincão Estudos, início">
          <span className="brand-mark"><GraduationCap size={22} /></span>
          <span>Rincão <strong>Estudos</strong></span>
        </Link>
        <div className="top-actions">
          <button className="search-button" type="button" onClick={() => setSearchOpen(true)}>
            <Search size={17} /> <span>Pesquisar</span><kbd>⌘ K</kbd>
          </button>
          <select
            className="cargo-select"
            aria-label="Cargo selecionado"
            value={data.selectedCargo}
            onChange={(event) => setData((current) => {
              const selectedCargo = event.target.value as CargoId
              return { ...current, selectedCargo, cargoIds: [...new Set([...current.cargoIds, selectedCargo])] }
            })}
          >
            {cargos.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          {user ? <Link className="account-button" to="/conta"><span className={`sync-dot ${syncStatus}`} /> <UserRound size={18} /><span>Minha conta</span></Link> : <button className="account-button" type="button" onClick={onOpenAuth}><LogIn size={18} /><span>Entrar</span></button>}
          <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <span className="mobile-current">Estudando para: <strong>{cargo.name}</strong></span>
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}><Icon size={18} />{label}</NavLink>
        ))}
        {cargo.practicalExam && <NavLink to="/pratica"><HardHat size={18} />Prova prática</NavLink>}
        {user ? <NavLink to="/conta"><UserRound size={18} />Minha conta</NavLink> : <button className="mobile-auth" type="button" onClick={onOpenAuth}><LogIn size={18} />Entrar ou criar conta grátis</button>}
      </div>
      {searchOpen && <GlobalSearch cargoId={data.selectedCargo} onClose={() => setSearchOpen(false)} />}
    </>
  )
}

function GlobalSearch({ cargoId, onClose }: { cargoId: CargoId; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('pt-BR')
    if (term.length < 2) return []
    return byCargo(cargoId).filter((topic) => `${topic.title} ${topic.summary} ${topic.keyPoints.join(' ')}`.toLocaleLowerCase('pt-BR').includes(term)).slice(0, 8)
  }, [cargoId, query])

  useEffect(() => inputRef.current?.focus(), [])
  useEffect(() => {
    const handler = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="search-modal" role="dialog" aria-modal="true" aria-label="Pesquisa global" onMouseDown={(event) => event.stopPropagation()}>
        <div className="search-field"><Search size={21} /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por crase, ECA, porcentagem..." /><button onClick={onClose} aria-label="Fechar"><X size={19} /></button></div>
        <div className="search-results">
          {query.length < 2 && <p>Digite pelo menos duas letras. A pesquisa considera aulas, resumos e pontos-chave.</p>}
          {query.length >= 2 && !results.length && <p>Nenhum conteúdo encontrado para este cargo.</p>}
          {results.map((topic) => (
            <button key={topic.id} onClick={() => { navigate(`/aula/${topic.id}`); onClose() }}>
              <span><small>{disciplineLabels[topic.discipline]}</small><strong>{topic.title}</strong><em>{topic.summary}</em></span><ChevronRight size={18} />
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

function Sidebar({ data, onOpenAuth, syncMessage, syncStatus }: ConnectedAppState) {
  const { user } = useAuth()
  const cargo = cargos.find((item) => item.id === data.selectedCargo)!
  const cargoTopics = byCargo(data.selectedCargo)
  const completed = cargoTopics.filter((topic) => includesLessonState(data.completedTopics, topic.id)).length
  const progress = cargoTopics.length ? Math.round((completed / cargoTopics.length) * 100) : 0
  return (
    <aside className="sidebar">
      <nav aria-label="Navegação da plataforma">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}><Icon size={18} /><span>{label}</span></NavLink>
        ))}
        {cargo.practicalExam && <NavLink to="/pratica"><HardHat size={18} /><span>Prova prática</span></NavLink>}
      </nav>
      <div className="sidebar-progress">
        <span>Meu progresso</span>
        <strong>{progress}%</strong>
        <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
        <small>{completed} de {cargoTopics.length} aulas concluídas</small>
      </div>
      {user ? <Link className={`storage-note authenticated ${syncStatus}`} to="/conta">{syncStatus === 'synced' ? <Cloud size={17} /> : <CloudOff size={17} />}<span><strong>{syncStatus === 'synced' ? 'Sincronizado' : 'Salvo no dispositivo'}</strong><small>{syncMessage}</small></span></Link> : <button className="storage-note" type="button" onClick={onOpenAuth}><CloudOff size={17} /><span><strong>Salvo neste dispositivo</strong><small>Criar conta grátis e sincronizar progresso</small></span></button>}
    </aside>
  )
}

function AppLayout(props: ConnectedAppState) {
  const { data, setData, onSync, syncMessage, syncStatus } = props
  const { user } = useAuth()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Header {...props} />
      <div className="app-body">
        <Sidebar {...props} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard data={data} setData={setData} />} />
            <Route path="/cargos" element={<CargoPage data={data} setData={setData} />} />
            <Route path="/estudo" element={<StudyPage data={data} setData={setData} />} />
            <Route path="/aula/:topicId" element={<LessonPage data={data} setData={setData} />} />
            <Route path="/questoes" element={<QuestionsPage data={data} setData={setData} />} />
            <Route path="/simulados" element={<SimulationsPage data={data} setData={setData} />} />
            <Route path="/erros" element={<ErrorNotebook data={data} setData={setData} />} />
            <Route path="/revisoes" element={<ReviewsPage data={data} setData={setData} />} />
            <Route path="/desempenho" element={<PerformancePage data={data} setData={setData} />} />
            <Route path="/pratica" element={<PracticalPage data={data} setData={setData} />} />
            <Route path="/conta" element={user ? <AccountPage data={data} setData={setData} syncMessage={syncMessage} syncStatus={syncStatus} onSync={onSync} /> : <Navigate to="/" replace />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </div>
  )
}

function PageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return <header className="page-header"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{actions && <div className="page-actions">{actions}</div>}</header>
}

function Dashboard({ data }: AppState) {
  const { user } = useAuth()
  const cargo = cargos.find((item) => item.id === data.selectedCargo)!
  const cargoTopics = byCargo(data.selectedCargo)
  const cargoQuestions = questions.filter((question) => questionMatchesCargo(question, data.selectedCargo))
  const latest = latestAnswers(data.answers.filter((answer) => answer.cargoId === data.selectedCargo && cargoQuestions.some((question) => question.id === answer.questionId)))
  const completed = cargoTopics.filter((topic) => includesLessonState(data.completedTopics, topic.id)).length
  const coverage = cargoTopics.length ? Math.round((completed / cargoTopics.length) * 100) : 0
  const recommendations = getStudyRecommendations(data, data.selectedCargo)
  const nextTopic = cargoTopics.find((topic) => !includesLessonState(data.completedTopics, topic.id))
  const upcomingEvents = calendarEventsForCargo(data.selectedCargo).slice(0, 4)
  const latestNews = newsForCargo(data.selectedCargo).slice().sort((left, right) => right.publishedAt.localeCompare(left.publishedAt)).slice(0, 2)

  return (
    <>
      <section className="dashboard-hero">
        <div>
          <span className="eyebrow"><Sparkles size={15} /> Concurso Público nº 001/2026</span>
          <h1>Preparação que segue o edital, <em>tópico por tópico.</em></h1>
          <p>Plano gratuito para {cargo.name}, com estudo, questões e progresso {user ? 'sincronizados na sua conta' : 'salvos neste dispositivo'}.</p>
          <div className="hero-actions"><Link className="primary-action" to={nextTopic ? `/aula/${nextTopic.id}` : '/estudo'}>Continuar estudando <ArrowRight size={18} /></Link><Link className="secondary-action" to="/simulados"><Timer size={18} /> Fazer simulado</Link></div>
        </div>
        <aside className="exam-card">
          <span className="mini-label">Sua prova objetiva</span>
          <strong>30 questões · 3 horas</strong>
          <em className="exam-countdown"><CalendarClock size={15} />{examCountdown()}</em>
          <div className="exam-row"><span>Língua Portuguesa</span><b>10</b></div>
          <div className="exam-row"><span>Matemática</span><b>05</b></div>
          <div className="exam-row"><span>Conhecimentos Específicos</span><b>15</b></div>
          <div className="exam-note"><ClipboardCheck size={17} /> Nota mínima: 50 pontos</div>
        </aside>
      </section>

      {!user && <section className="guest-banner"><CloudOff size={19} /><span><strong>Seu progresso está salvo neste dispositivo.</strong><small>O cadastro continua opcional; entre apenas se quiser sincronizar em outros aparelhos.</small></span></section>}

      <section className="dashboard-grid">
        <article className="metric-card feature"><span>Cobertura estudada</span><strong>{coverage}%</strong><div className="progress-track large"><i style={{ width: `${coverage}%` }} /></div><small>{completed} de {cargoTopics.length} aulas concluídas</small></article>
        <article className="metric-card"><span>Questões respondidas</span><strong>{latest.length}</strong><small>de {cargoQuestions.length} disponíveis</small></article>
        <article className="metric-card"><span>Taxa de acertos</span><strong>{accuracy(latest)}%</strong><small>{latest.filter((item) => item.correct).length} respostas corretas</small></article>
        <article className="metric-card"><span>Revisões agendadas</span><strong>{data.reviews.filter((item) => item.status === 'pending' && item.cargoId === data.selectedCargo).length}</strong><small>{data.reviews.filter((item) => item.status === 'pending' && item.cargoId === data.selectedCargo && new Date(item.dueAt) <= new Date()).length} para revisar agora</small></article>
      </section>

      <section className="dashboard-columns">
        <article className="panel recommendation">
          <div className="panel-title"><Target size={20} /><div><span>Recomendação de estudo</span><h2>Prioridades para você</h2></div></div>
          <div className="recommendation-list">{recommendations.map((item, index) => <Link key={item.topicId} to={`/aula/${item.topicId}`}><b>{index + 1}</b><span><strong>{item.title}</strong><small>{item.reason}</small></span><em className={item.priority}>{item.priority}</em></Link>)}</div>
          {!recommendations.length && <p>Responda algumas questões para receber recomendações baseadas no seu desempenho real.</p>}
          {nextTopic && <Link to={`/aula/${nextTopic.id}`}>Continuar plano de estudos <ArrowRight size={17} /></Link>}
        </article>
        <article className="panel timeline-panel"><div className="panel-title"><CalendarClock size={20} /><div><span>Cronograma oficial</span><h2>Próximas datas</h2></div></div>{upcomingEvents.map(({ event }) => <div className="timeline-row" key={event.id}><i /><span><strong>{event.titulo}</strong><small>{formatCalendarEvent(event)}</small></span></div>)}</article>
      </section>

      <section className="publication-grid">
        <article className="panel publication-panel"><div className="panel-title"><Newspaper size={20} /><div><span>Fontes oficiais</span><h2>Últimas notícias</h2></div></div><div className="publication-list">{latestNews.map((item) => <a href={item.url} target="_blank" rel="noreferrer" key={item.id}><small>{new Date(item.publishedAt).toLocaleDateString('pt-BR')} · {item.fonteOficial}</small><strong>{item.titulo}</strong><p>{item.resumo}</p></a>)}</div></article>
        <article className="panel publication-panel rectification-panel"><div className="panel-title"><FileText size={20} /><div><span>Documento auditado</span><h2>Rerratificação</h2></div></div><div className="publication-list">{publicationRectifications.map((item) => <a href={item.url} target="_blank" rel="noreferrer" key={item.id}><small>{new Date(item.publishedAt).toLocaleDateString('pt-BR')} · {item.fonteOficial}</small><strong>{item.identificacao}</strong><p>{item.resumo}</p><em>{item.impactoCandidato}</em></a>)}</div></article>
      </section>
    </>
  )
}

function CargoPage({ data, setData }: AppState) {
  return (
    <>
      <PageHeader eyebrow="Área 1 · Cargos" title="Escolha seu cargo" description="Requisitos, estrutura da prova e atribuições confirmados diretamente no edital." />
      <div className="cargo-grid full">
        {cargos.map((cargo) => {
          const catalog = studyCatalogByCargo(cargo.id)
          const completeCount = catalog.filter((topic) => Boolean(richLessonsByTopicId[topic.id])).length
          const preparingCount = catalog.length - completeCount
          const selected = data.selectedCargo === cargo.id
          return <article key={cargo.id} className={`cargo-card ${cargo.color} ${selected ? 'selected' : ''}`}>
            <span className="card-status">{selected ? 'Cargo selecionado' : 'Edital auditado'}</span>
            <h2>{cargo.name}</h2><p className="schooling">{cargo.schooling}</p><p className="detail">{cargo.vacancies} · {cargo.workload} · {cargo.salary}</p>
            <div className="cargo-facts"><div><span>Requisito</span><p>{cargo.requirements}</p></div><div><span>Prova</span><p>10 Português + 5 Matemática + 15 Específicos</p></div><div><span>Conteúdo</span><p>{completeCount} aulas completas · {preparingCount} em preparação</p></div></div>
            {cargo.practicalExam && <div className="practical-badge"><HardHat size={17} /> Possui prova prática</div>}
            <ul>{cargo.attributes.map((attribute) => <li key={attribute}>{attribute}</li>)}</ul>
            <div className="card-actions"><button onClick={() => setData((current) => ({ ...current, selectedCargo: cargo.id, cargoIds: [...new Set([...current.cargoIds, cargo.id])] }))}>{selected ? <><Check size={17} /> Selecionado</> : 'Selecionar cargo'}</button><Link to="/estudo">Ver conteúdo <ArrowRight size={16} /></Link></div>
          </article>
        })}
      </div>
    </>
  )
}

function StudyPage({ data }: AppState) {
  const [discipline, setDiscipline] = useState<DisciplineId | 'todas'>('todas')
  const [query, setQuery] = useState('')
  const cargo = cargos.find((item) => item.id === data.selectedCargo)!
  const cargoTopics = studyCatalogByCargo(data.selectedCargo)
  const availableTopics = cargoTopics.filter((topic) => Boolean(richLessonsByTopicId[topic.id]))
  const completedAvailable = availableTopics.filter((topic) => includesLessonState(data.completedTopics, topic.id)).length
  const coverage = cargoTopics.length ? Math.round((availableTopics.length / cargoTopics.length) * 100) : 0
  const filtered = cargoTopics.filter((topic) => {
    const lesson = richLessonsByTopicId[topic.id]
    return (discipline === 'todas' || topic.discipline === discipline) && `${lesson?.title ?? topic.title} ${topic.summary}`.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR'))
  })

  return (
    <>
      <PageHeader eyebrow="Área 2 · Material para estudo" title={`Plano de ${cargo.name}`} description="Cada aula mostra o que o edital cobra, explicação, pontos de prova, exemplos, pegadinhas, revisão e fontes." />
      <section className="coverage-banner"><ShieldCheck size={22} /><div><span>Cobertura editorial comprovada</span><strong>{availableTopics.length} aulas completas disponíveis · {cargoTopics.length - availableTopics.length} conteúdos em preparação</strong><small>{completedAvailable} {completedAvailable === 1 ? 'aula completa já concluída' : 'aulas completas já concluídas'} por você. O percentual não representa cobertura integral do cargo enquanto os Conhecimentos Específicos permanecerem pendentes.</small></div><b>{coverage}%</b></section>
      <div className="study-toolbar"><div className="segmented"><button className={discipline === 'todas' ? 'active' : ''} onClick={() => setDiscipline('todas')}>Todas</button>{(Object.keys(disciplineLabels) as DisciplineId[]).map((id) => <button className={discipline === id ? 'active' : ''} key={id} onClick={() => setDiscipline(id)}>{disciplineLabels[id]}</button>)}</div><label className="inline-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filtrar aulas" /></label></div>
      <div className="topic-groups">
        {(Object.keys(disciplineLabels) as DisciplineId[]).map((id) => {
          const group = filtered.filter((topic) => topic.discipline === id)
          if (!group.length) return null
          const available = group.filter((topic) => Boolean(richLessonsByTopicId[topic.id]))
          const done = available.filter((topic) => includesLessonState(data.completedTopics, topic.id)).length
          return <section className="topic-section" key={id}><header><div><span>{disciplineLabels[id]}</span><h2>{available.length} completas · {group.length - available.length} em preparação</h2></div><small>{done} concluídas</small></header><div className="topic-list">{group.map((topic, index) => {
            const lesson = richLessonsByTopicId[topic.id]
            const done = includesLessonState(data.completedTopics, topic.id)
            const content = <><span className="topic-number">{done ? <Check size={15} /> : String(index + 1).padStart(2, '0')}</span><span className="topic-copy"><strong>{lesson?.title ?? topic.title}</strong><small>{lesson ? topic.summary : 'Conteúdo em preparação'}</small></span><span className={`origin-chip ${lesson ? topic.origin : 'preparing'}`}>{lesson ? 'Aula completa' : 'Em preparação'}</span>{lesson ? <ChevronRight size={18} /> : <Clock3 size={18} />}</>
            return lesson ? <Link to={`/aula/${topic.id}`} key={topic.id} className={done ? 'done' : ''}>{content}</Link> : <div key={topic.id} className="topic-preparing" aria-label={`${topic.title}: conteúdo em preparação`}>{content}</div>
          })}</div></section>
        })}
      </div>
    </>
  )
}

function LessonPage({ data, setData }: AppState) {
  const { topicId } = useParams()
  const topic = topics.find((item) => item.id === topicId)
  if (!topic || !topic.cargoIds.includes(data.selectedCargo)) return <Navigate to="/estudo" replace />
  const richLesson = richLessonsByTopicId[topic.id]
  const stateIds = lessonStateIds(topic.id)
  const completed = stateIds.some((id) => data.completedTopics.includes(id))
  const favorite = stateIds.some((id) => data.favoriteTopics.includes(id))
  const relatedQuestions = questions.filter((question) => questionMatchesCargo(question, data.selectedCargo) && stateIds.includes(question.topicId))
  const toggleArray = (key: 'completedTopics' | 'favoriteTopics') => setData((current) => {
    const active = stateIds.some((id) => current[key].includes(id))
    return { ...current, [key]: active ? current[key].filter((id) => !stateIds.includes(id)) : [...current[key], richLesson?.topicId ?? topic.id] }
  })
  const scheduleReview = (days: 1 | 7 | 15 | 30) => {
    setData((current) => {
      const reviewTopicId = richLesson?.topicId ?? topic.id
      const existing = current.reviews.find((review) => stateIds.includes(review.topicId) && review.cargoId === data.selectedCargo)
      const updatedAt = nextUpdatedAt(current.updatedAt, existing?.updatedAt)
      return { ...current, reviews: [...current.reviews.filter((review) => !(stateIds.includes(review.topicId) && review.cargoId === data.selectedCargo)), { cargoId: data.selectedCargo, topicId: reviewTopicId, intervalDays: days, dueAt: new Date(Date.now() + days * 86400000).toISOString(), status: 'pending', updatedAt }] }
    })
  }

  if (!richLesson) return (
    <article className="lesson-page">
      <Link className="back-link" to="/estudo"><ArrowLeft size={16} /> Voltar ao material</Link>
      <header className="lesson-header"><div><span className="origin-chip preparing">Conteúdo em preparação</span><small>{disciplineLabels[topic.discipline]}</small><h1>{topic.title}</h1><p>Este item está mapeado no edital, mas ainda não recebeu uma aula editorial completa e revisada.</p></div></header>
      <section className="preparing-panel"><Clock3 size={24} /><div><span>Em produção</span><h2>O conteúdo completo será publicado após revisão editorial.</h2><p>Para não confundir um resumo provisório com material final, esta página não apresenta uma aula superficial como se estivesse concluída.</p><blockquote>“{topic.editalText}” — {topic.editalItem}, página {topic.editalPage}.</blockquote></div></section>
    </article>
  )

  const lessonCatalog = byCargo(data.selectedCargo)
  const lessonIndex = lessonCatalog.findIndex((item) => item.id === richLesson.topicId)
  const previousLesson = lessonIndex > 0 ? lessonCatalog[lessonIndex - 1] : undefined
  const nextLesson = lessonIndex >= 0 ? lessonCatalog[lessonIndex + 1] : undefined

  return (
    <article className="lesson-page">
      <Link className="back-link" to="/estudo"><ArrowLeft size={16} /> Voltar ao material</Link>
      <header className="lesson-header"><div><span className={`origin-chip ${topic.origin}`}>{originLabels[topic.origin]}</span><small>{disciplineLabels[topic.discipline]}</small><h1>{richLesson.title}</h1><p>{topic.summary}</p></div><div className="lesson-actions"><button className={favorite ? 'active' : ''} onClick={() => toggleArray('favoriteTopics')}><Heart size={18} fill={favorite ? 'currentColor' : 'none'} /> {favorite ? 'Favorito' : 'Favoritar'}</button><button className={completed ? 'complete' : ''} onClick={() => toggleArray('completedTopics')}>{completed ? <CheckCircle2 size={18} /> : <BookCheck size={18} />}{completed ? 'Concluída' : 'Marcar como concluída'}</button></div></header>
      <div className="lesson-layout"><div className="lesson-content">
        <RichLessonArticle lesson={richLesson} />
        <nav className="lesson-sequence" aria-label="Navegação entre aulas">
          {previousLesson ? <Link to={`/aula/${previousLesson.id}`}><ArrowLeft size={17} /><span><small>Aula anterior</small><strong>{richLessonsByTopicId[previousLesson.id]?.title ?? previousLesson.title}</strong></span></Link> : <span />}
          {nextLesson ? <Link className="next" to={`/aula/${nextLesson.id}`}><span><small>Próxima aula</small><strong>{richLessonsByTopicId[nextLesson.id]?.title ?? nextLesson.title}</strong></span><ArrowRight size={17} /></Link> : <Link className="next" to="/estudo"><span><small>Fim da sequência</small><strong>Voltar ao material</strong></span><ArrowRight size={17} /></Link>}
        </nav>
      </div><aside className="lesson-aside"><RichLessonToc lesson={richLesson} /><div className="aside-card"><span>Revisão espaçada</span><h3>Agendar esta aula</h3><div className="review-buttons">{([1, 7, 15, 30] as const).map((days) => <button key={days} onClick={() => scheduleReview(days)}>{days} {days === 1 ? 'dia' : 'dias'}</button>)}</div></div><div className="aside-card"><span>Sobre esta aula</span><h3>Material completo</h3><p>Conteúdo de {disciplineLabels[topic.discipline]} do Ensino Médio compartilhado pelos cargos compatíveis e organizado para estudo.</p>{relatedQuestions.length ? <small>{relatedQuestions.length} questões interativas vinculadas.</small> : null}</div></aside></div>
    </article>
  )
}

function QuestionsPage({ data, setData }: AppState) {
  const search = new URLSearchParams(useLocation().search)
  const [discipline, setDiscipline] = useState<DisciplineId | 'todas'>((search.get('disciplina') as DisciplineId) || 'todas')
  const [status, setStatus] = useState<'todas' | 'nao-respondidas' | 'erradas' | 'favoritas'>('todas')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const topicFilter = search.get('topico')
  const latest = latestAnswers(data.answers.filter((answer) => answer.cargoId === data.selectedCargo))
  const filtered = questions.filter((question) => {
    if (!questionMatchesCargo(question, data.selectedCargo)) return false
    if (discipline !== 'todas' && question.discipline !== discipline) return false
    if (topicFilter && question.topicId !== topicFilter) return false
    const answer = latest.find((item) => item.questionId === question.id)
    if (status === 'nao-respondidas' && answer) return false
    if (status === 'erradas' && (!answer || answer.correct)) return false
    if (status === 'favoritas' && !data.favoriteQuestions.includes(question.id)) return false
    return true
  })
  const question = filtered[current % Math.max(filtered.length, 1)]
  useEffect(() => { setCurrent(0); setSelected(null); setConfirmed(false) }, [discipline, status, topicFilter])

  const confirm = () => {
    if (selected === null || !question) return
    const record: AnswerRecord = { id: createLocalId('answer'), cargoId: data.selectedCargo, questionId: question.id, selectedIndex: selected, correct: selected === question.correctIndex, answeredAt: new Date().toISOString() }
    setData((value) => ({ ...value, answers: [...value.answers, record] }))
    setConfirmed(true)
  }
  const next = () => { setCurrent((value) => (value + 1) % filtered.length); setSelected(null); setConfirmed(false) }

  return (
    <>
      <PageHeader eyebrow="Banco de questões" title="Pratique com feedback" description="Cinco alternativas por questão. O gabarito e a explicação só aparecem depois da confirmação." />
      <div className="question-toolbar"><select value={discipline} onChange={(event) => setDiscipline(event.target.value as DisciplineId | 'todas')}><option value="todas">Todas as disciplinas</option>{(Object.keys(disciplineLabels) as DisciplineId[]).map((id) => <option value={id} key={id}>{disciplineLabels[id]}</option>)}</select><select value={status} onChange={(event) => setStatus(event.target.value as typeof status)}><option value="todas">Todas as questões</option><option value="nao-respondidas">Não respondidas</option><option value="erradas">Minhas erradas</option><option value="favoritas">Favoritas</option></select><span>{filtered.length} questões</span></div>
      {question ? <QuestionCard question={question} selected={selected} confirmed={confirmed} onSelect={setSelected} onConfirm={confirm} onNext={next} favorite={data.favoriteQuestions.includes(question.id)} onFavorite={() => setData((value) => ({ ...value, favoriteQuestions: value.favoriteQuestions.includes(question.id) ? value.favoriteQuestions.filter((id) => id !== question.id) : [...value.favoriteQuestions, question.id] }))} counter={`${current + 1} / ${filtered.length}`} /> : <EmptyState icon={CircleHelp} title="Nenhuma questão neste filtro" text="Altere os filtros ou responda novas questões para preencher esta lista." />}
      <section className="transparency-panel"><div><ShieldCheck size={22} /><span><strong>Transparência do banco</strong><small>{questions.filter((item) => item.type === 'real').length} questões reais reproduzidas · {questions.filter((item) => item.type === 'inedita').length} questões inéditas claramente identificadas</small></span></div><p>Referências reais parciais são usadas apenas na extensão comprovada pelos documentos oficiais. Elas não entram no banco como questões reais sem enunciado, alternativas e origem integralmente verificáveis.</p><details><summary>Ver referências pesquisadas</summary>{verifiedQuestionReferences.map((reference) => <a href={reference.url} key={reference.title} target="_blank" rel="noreferrer"><strong>{reference.title}</strong><span>{reference.note}</span></a>)}</details></section>
    </>
  )
}

function QuestionCard({ question, selected, confirmed, onSelect, onConfirm, onNext, favorite, onFavorite, counter }: { question: Question; selected: number | null; confirmed: boolean; onSelect: (index: number) => void; onConfirm: () => void; onNext: () => void; favorite: boolean; onFavorite: () => void; counter: string }) {
  const topic = topics.find((item) => item.id === question.topicId)!
  return <article className="question-card"><header><div><span className={`question-type ${question.type}`}>{question.type === 'real' ? 'Questão real — INEPAM' : 'Questão inédita — estilo INEPAM'}</span><small>{disciplineLabels[question.discipline]} · {topic.title} · {question.difficulty}</small></div><div><span>{counter}</span><button onClick={onFavorite} aria-label="Favoritar questão"><Heart size={19} fill={favorite ? 'currentColor' : 'none'} /></button></div></header><h2>{question.statement}</h2><div className="alternatives">{question.alternatives.map((alternative, index) => { const letter = String.fromCharCode(65 + index); const state = confirmed ? index === question.correctIndex ? 'correct' : selected === index ? 'wrong' : '' : selected === index ? 'selected' : ''; return <button disabled={confirmed} className={state} key={alternative} onClick={() => onSelect(index)}><span>{letter}</span><p>{alternative}</p>{confirmed && index === question.correctIndex && <Check size={18} />}{confirmed && selected === index && index !== question.correctIndex && <X size={18} />}</button> })}</div>{!confirmed ? <button className="confirm-answer" disabled={selected === null} onClick={onConfirm}>Confirmar resposta</button> : <div className={`feedback ${selected === question.correctIndex ? 'success' : 'error'}`}><h3>{selected === question.correctIndex ? <><CheckCircle2 /> Correto</> : <><XCircle /> Errado</>}</h3>{selected !== question.correctIndex && <p>Sua resposta: <strong>{String.fromCharCode(65 + (selected ?? 0))}</strong> · Resposta correta: <strong>{String.fromCharCode(65 + question.correctIndex)}</strong></p>}<p>{question.explanation}</p><div className="feedback-meta"><span>Fonte: {question.source}</span><Link to={`/aula/${question.topicId}`}>Estudar este assunto <ArrowRight size={15} /></Link></div><button className="next-question" onClick={onNext}>Próxima questão <ArrowRight size={17} /></button></div>}</article>
}

function SimulationsPage({ data, setData }: AppState) {
  const [mode, setMode] = useState<'estudo' | 'prova'>('prova')
  const [active, setActive] = useState(false)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [seconds, setSeconds] = useState(0)
  const [result, setResult] = useState<{ records: AnswerRecord[]; simulation: SimulationRecord } | null>(null)
  const set = useMemo(() => simulationQuestionsForCargo(data.selectedCargo), [data.selectedCargo])
  const current = set[index]
  useEffect(() => { if (!active || result) return; const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000); return () => window.clearInterval(timer) }, [active, result])

  const start = () => { setActive(true); setIndex(0); setSelected(null); setAnswers({}); setSeconds(0); setResult(null); setConfirmed(false) }
  const confirmStudy = () => { if (selected === null) return; setAnswers((value) => ({ ...value, [current.id]: selected })); setConfirmed(true) }
  const advance = () => {
    if (selected === null) return
    const nextAnswers = { ...answers, [current.id]: selected }
    setAnswers(nextAnswers)
    if (index === set.length - 1) finish(nextAnswers)
    else { setIndex((value) => value + 1); setSelected(null); setConfirmed(false) }
  }
  const finish = (finalAnswers = answers) => {
    const simulationId = createLocalId('simulation')
    const now = new Date().toISOString()
    const records: AnswerRecord[] = set.map((question) => ({ id: createLocalId('answer'), cargoId: data.selectedCargo, questionId: question.id, selectedIndex: finalAnswers[question.id] ?? -1, correct: finalAnswers[question.id] === question.correctIndex, answeredAt: now, simulationId }))
    const simulation: SimulationRecord = { id: simulationId, cargoId: data.selectedCargo, mode, questionIds: set.map((question) => question.id), answerIds: records.map((record) => record.id), startedAt: new Date(Date.now() - seconds * 1000).toISOString(), finishedAt: now, elapsedSeconds: seconds, correctAnswers: records.filter((record) => record.correct).length, updatedAt: now }
    setData((value) => ({ ...value, answers: [...value.answers, ...records], simulations: [...value.simulations, simulation] }))
    setResult({ records, simulation })
  }

  if (!active) return <><PageHeader eyebrow="Área 3 · Simulados de perguntas" title="Simulado completo de Rincão" description="A distribuição reproduz a prova: 10 questões de Português, 5 de Matemática e 15 de Conhecimentos Específicos." /><section className="simulation-setup"><div className="simulation-summary"><span>Formato oficial</span><h2>30 questões em até 3 horas</h2><div><p><b>10</b> Português</p><p><b>05</b> Matemática</p><p><b>15</b> Específicos</p></div></div><div className="mode-picker"><button className={mode === 'prova' ? 'active' : ''} onClick={() => setMode('prova')}><Timer size={22} /><span><strong>Modo prova</strong><small>Sem feedback durante a prova. Resultado apenas no final.</small></span></button><button className={mode === 'estudo' ? 'active' : ''} onClick={() => setMode('estudo')}><BookOpen size={22} /><span><strong>Modo estudo</strong><small>Correção e explicação após cada resposta.</small></span></button><button className="start-simulation" onClick={start}>Iniciar simulado <ArrowRight size={18} /></button></div></section></>
  if (result) return <SimulationResult result={result} questionsSet={set} onRestart={() => setActive(false)} />
  return <><div className="simulation-top"><button onClick={() => setActive(false)}><ArrowLeft size={16} /> Sair</button><span>Questão {index + 1} de {set.length}</span><strong><Clock3 size={17} /> {formatTime(seconds)}</strong></div><div className="simulation-progress"><i style={{ width: `${((index + 1) / set.length) * 100}%` }} /></div><QuestionCard question={current} selected={selected} confirmed={mode === 'estudo' && confirmed} onSelect={setSelected} onConfirm={mode === 'estudo' ? confirmStudy : advance} onNext={advance} favorite={data.favoriteQuestions.includes(current.id)} onFavorite={() => {}} counter={`${index + 1} / ${set.length}`} />{mode === 'prova' && index > 0 && <button className="finish-early" onClick={() => finish()}>Finalizar agora</button>}</>
}

function SimulationResult({ result, questionsSet, onRestart }: { result: { records: AnswerRecord[]; simulation: SimulationRecord }; questionsSet: Question[]; onRestart: () => void }) {
  const rows = (Object.keys(disciplineLabels) as DisciplineId[]).map((discipline) => { const disciplineQuestions = questionsSet.filter((question) => question.discipline === discipline); const ids = disciplineQuestions.map((question) => question.id); const records = result.records.filter((record) => ids.includes(record.questionId)); return { discipline, correct: records.filter((record) => record.correct).length, total: records.length } })
  const total = result.records.filter((record) => record.correct).length
  return <section className="result-page"><div className="result-score"><Award size={34} /><span>Resultado do simulado</span><strong>{total}/30</strong><p>{Math.round((total / 30) * 100)}% de aproveitamento · {formatTime(result.simulation.elapsedSeconds)}</p></div><div className="result-breakdown">{rows.map((row) => <div key={row.discipline}><span>{disciplineLabels[row.discipline]}</span><strong>{row.correct}/{row.total}</strong><div className="progress-track"><i style={{ width: `${(row.correct / row.total) * 100}%` }} /></div></div>)}</div><div className="result-actions"><Link to="/erros">Revisar questões erradas</Link><button onClick={onRestart}><RefreshCcw size={17} /> Novo simulado</button></div></section>
}

function ErrorNotebook({ data }: AppState) {
  const cargoIds = questions.filter((question) => questionMatchesCargo(question, data.selectedCargo)).map((question) => question.id)
  const errors = latestAnswers(data.answers.filter((answer) => answer.cargoId === data.selectedCargo)).filter((record) => cargoIds.includes(record.questionId) && !record.correct)
  return <><PageHeader eyebrow="Caderno de Erros" title="Transforme erro em revisão" description="A última resposta errada de cada questão aparece com o assunto e acesso direto à aula." actions={<Link className="primary-action compact" to="/questoes">Revisar somente meus erros</Link>} />{errors.length ? <div className="error-list">{errors.map((record) => { const question = questions.find((item) => item.id === record.questionId)!; const topic = topics.find((item) => item.id === question.topicId)!; return <article key={record.questionId}><span className="error-icon"><XCircle size={20} /></span><div><small>{disciplineLabels[question.discipline]} · {new Date(record.answeredAt).toLocaleDateString('pt-BR')}</small><h2>{topic.title}</h2><p>{question.statement}</p><div><span>Sua resposta: {record.selectedIndex >= 0 ? String.fromCharCode(65 + record.selectedIndex) : 'em branco'}</span><span>Correta: {String.fromCharCode(65 + question.correctIndex)}</span></div></div><Link to={`/aula/${topic.id}`}>Estudar assunto <ArrowRight size={16} /></Link></article> })}</div> : <EmptyState icon={CheckCircle2} title="Seu caderno está limpo" text="Quando você errar uma questão, ela aparecerá aqui automaticamente para revisão." />}</>
}

function ReviewsPage({ data, setData }: AppState) {
  const reviews = data.reviews.filter((review) => review.status === 'pending' && review.cargoId === data.selectedCargo && topics.some((topic) => topic.id === review.topicId && topic.cargoIds.includes(data.selectedCargo))).sort((a, b) => a.dueAt.localeCompare(b.dueAt))
  const remove = (topicId: string) => setData((value) => ({ ...value, reviews: value.reviews.map((review) => review.topicId === topicId && review.cargoId === data.selectedCargo ? { ...review, status: 'dismissed', updatedAt: nextUpdatedAt(value.updatedAt, review.updatedAt) } : review) }))
  return <><PageHeader eyebrow="Revisão espaçada" title="Sua fila de revisão" description="Agendamentos de 1, 7, 15 e 30 dias, com prioridade para assuntos que você marcou." />{reviews.length ? <div className="review-list">{reviews.map((review) => { const topic = topics.find((item) => item.id === review.topicId)!; const due = new Date(review.dueAt) <= new Date(); return <article key={review.topicId} className={due ? 'due' : ''}><span><CalendarClock size={20} /></span><div><small>{due ? 'Revisar agora' : `Agendada para ${new Date(review.dueAt).toLocaleDateString('pt-BR')}`}</small><h2>{topic.title}</h2><p>{disciplineLabels[topic.discipline]} · intervalo de {review.intervalDays} dia(s)</p></div><Link to={`/aula/${topic.id}`}>Abrir aula</Link><button aria-label="Remover revisão" onClick={() => remove(topic.id)}><X size={17} /></button></article> })}</div> : <EmptyState icon={CalendarClock} title="Nenhuma revisão agendada" text="Abra uma aula e escolha 1, 7, 15 ou 30 dias para criar sua fila." />}</>
}

function PerformancePage({ data, setData }: AppState) {
  const fileRef = useRef<HTMLInputElement>(null)
  const cargoTopics = byCargo(data.selectedCargo)
  const cargoQuestions = questions.filter((question) => questionMatchesCargo(question, data.selectedCargo))
  const latest = latestAnswers(data.answers.filter((answer) => answer.cargoId === data.selectedCargo)).filter((record) => cargoQuestions.some((question) => question.id === record.questionId))
  const importData = async (file?: File) => { if (!file) return; try { const value = normalizeImportedData(JSON.parse(await file.text())); if (!value) throw new Error(); setData(value); alert('Dados importados com sucesso.') } catch { alert('O arquivo não é um backup válido do Rincão Estudos.') } }
  return <><PageHeader eyebrow="Desempenho" title="Seu progresso real" description="Indicadores calculados apenas com seu histórico neste dispositivo." />
    <div className="performance-grid"><article><span>Aulas concluídas</span><strong>{data.completedTopics.filter((id) => cargoTopics.some((topic) => topic.id === id)).length}/{cargoTopics.length}</strong></article><article><span>Questões respondidas</span><strong>{latest.length}/{cargoQuestions.length}</strong></article><article><span>Aproveitamento</span><strong>{accuracy(latest)}%</strong></article><article><span>Simulados</span><strong>{data.simulations.filter((simulation) => simulation.cargoId === data.selectedCargo).length}</strong></article></div>
    <section className="performance-table"><header><span>Desempenho por assunto</span><h2>Visão por disciplina</h2></header>{(Object.keys(disciplineLabels) as DisciplineId[]).map((discipline) => { const ids = cargoQuestions.filter((question) => question.discipline === discipline).map((question) => question.id); const records = latest.filter((record) => ids.includes(record.questionId)); const rate = accuracy(records); return <div key={discipline}><span>{disciplineLabels[discipline]}</span><b>{records.length}</b><b>{records.filter((record) => record.correct).length}</b><strong>{rate}%</strong><div className="progress-track"><i style={{ width: `${rate}%` }} /></div></div> })}</section>
    <section className="data-panel"><div><Download size={24} /><span><h2>Seus dados são seus</h2><p>Exporte um backup antes de trocar de computador ou limpar o navegador.</p></span></div><div><button onClick={() => exportUserData(data)}><Download size={17} /> Exportar meus dados</button><button onClick={() => fileRef.current?.click()}><Upload size={17} /> Importar meus dados</button><input ref={fileRef} hidden type="file" accept="application/json" onChange={(event) => importData(event.target.files?.[0])} /></div></section>
  </>
}

function PracticalPage({ data }: AppState) {
  if (data.selectedCargo !== 'ajudante') return <Navigate to="/cargos" replace />
  return <><PageHeader eyebrow="Ajudante Geral · Prova prática" title="Preparação prática sem inventar testes" description="As exigências do edital estão separadas das orientações complementares de treino." /><div className="practical-grid"><section className="requirement-card"><span><FileText size={20} /> Exigência expressa no edital</span><h2>O que será avaliado</h2><ul>{practicalExam.expressRequirements.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul><footer>{practicalExam.source}</footer></section><section className="guidance-card"><span><HardHat size={20} /> Orientação complementar</span><h2>Como se preparar com segurança</h2><ul>{practicalExam.complementaryGuidance.map((item) => <li key={item}><ArrowRight size={17} />{item}</li>)}</ul><div className="notice warning"><AlertTriangle size={18} />Estas orientações não substituem avaliação médica ou treinamento profissional. O edital não prevê testes adicionais.</div></section></div></>
}

function EmptyState({ icon: Icon, title, text }: { icon: typeof CircleHelp; title: string; text: string }) {
  return <section className="empty-state"><Icon size={34} /><h2>{title}</h2><p>{text}</p></section>
}

function Footer() {
  return <footer className="site-footer"><div><GraduationCap size={20} /><span><strong>Rincão Estudos 2026</strong><small>Projeto gratuito, educacional e não oficial.</small></span></div><p>Edital e rerratificação oficial auditados em 23/08/2026. Continue acompanhando convocações e novas publicações da Prefeitura e da INEPAM.</p><Link to="/privacidade">Privacidade</Link></footer>
}

function App() {
  const { loading: authLoading, user } = useAuth()
  const userId = user?.id
  const { data, ready, setData, syncMessage, syncNow, syncStatus } = useProgress()
  const [authOpen, setAuthOpen] = useState(false)
  const [guestImport, setGuestImport] = useState<UserData | null>(null)
  const [importBusy, setImportBusy] = useState(false)

  useEffect(() => {
    if (user) setAuthOpen(false)
  }, [user])

  useEffect(() => {
    let active = true
    if (!ready || !userId) {
      setGuestImport(null)
      return () => { active = false }
    }
    void loadUserData('guest').then((guestData) => {
      if (active && shouldOfferGuestImport(userId, guestData)) setGuestImport(guestData)
    })
    return () => { active = false }
  }, [ready, userId])

  const importGuestProgress = async () => {
    if (!user || !guestImport) return
    setImportBusy(true)
    const merged = touchUserData(mergeUserData(data, guestImport), data.selectedCargo, data.updatedAt)
    queueGuestImport(user.id, guestImport)
    setData(merged)
    await syncNow(merged)
    setGuestImport(null)
    setImportBusy(false)
  }

  const skipGuestImport = () => {
    if (user && guestImport) dismissGuestImport(user.id, guestImport)
    setGuestImport(null)
  }

  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); (document.querySelector('.search-button') as HTMLButtonElement | null)?.click() } }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler) }, [])

  if (authLoading || !ready) return <div className="app-loading"><GraduationCap size={30} /><strong>Rincão Estudos</strong><span>Carregando seu espaço de estudos...</span></div>

  return (
    <HashRouter>
      <AppLayout data={data} setData={setData} onOpenAuth={() => setAuthOpen(true)} onSync={syncNow} syncMessage={syncMessage} syncStatus={syncStatus} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      {guestImport && <GuestImportModal busy={importBusy} onImport={() => void importGuestProgress()} onSkip={skipGuestImport} />}
    </HashRouter>
  )
}

export default App
