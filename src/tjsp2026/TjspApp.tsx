import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Check, CheckCircle2, ChevronRight, CircleHelp, ClipboardList, ExternalLink, FileText, GraduationCap, Heart, Home, ListChecks, Menu, Search, Target, X } from 'lucide-react'
import { materias, topicos, editalUrl, inscricaoUrl } from './catalog'
import { aulas } from './lessons'
import './tjsp.css'

type Progresso = { concluidas: string[]; respostas: Record<string, number>; favoritas: string[] }
const STORAGE_KEY = 'tjsp-escrevente-2026-estudos-v1'
const inicial: Progresso = { concluidas: [], respostas: {}, favoritas: [] }
const aulaOrdem = ['port-01', 'mat-01', 'rl-01']
const blocos = [
  { titulo: 'Língua Portuguesa', questoes: 16, detalhe: 'Bloco I', peso: 16 },
  { titulo: 'Direito e Legislação', questoes: 30, detalhe: 'Bloco II', peso: 30 },
  { titulo: 'Atualidades e LBI', questoes: 4, detalhe: 'Bloco III', peso: 4 },
  { titulo: 'Matemática', questoes: 4, detalhe: 'Bloco III', peso: 4 },
  { titulo: 'Informática', questoes: 9, detalhe: 'Bloco III', peso: 9 },
  { titulo: 'Raciocínio Lógico', questoes: 7, detalhe: 'Bloco III', peso: 7 },
]
function lerProgresso(): Progresso {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return inicial
    const saved = JSON.parse(raw) as Partial<Progresso>
    return {
      concluidas: Array.isArray(saved.concluidas) ? saved.concluidas.filter((v): v is string => typeof v === 'string') : [],
      respostas: saved.respostas && typeof saved.respostas === 'object' ? saved.respostas : {},
      favoritas: Array.isArray(saved.favoritas) ? saved.favoritas.filter((v): v is string => typeof v === 'string') : [],
    }
  } catch { return inicial }
}
const rotas = [
  { href: '#/', nome: 'Início', Icon: Home },
  { href: '#/estudo', nome: 'Conteúdo do edital', Icon: BookOpen },
  { href: '#/ciclo', nome: 'Meu ciclo de estudos', Icon: Target },
  { href: '#/questoes', nome: 'Questões de fixação', Icon: CircleHelp },
  { href: '#/revisoes', nome: 'Revisões e erros', Icon: ListChecks },
  { href: '#/edital', nome: 'Edital e inscrições', Icon: FileText },
]
function pathname() { return window.location.hash.slice(1).split('?')[0] || '/' }
export default function TjspApp() {
  const [rota, setRota] = useState(pathname)
  const [menu, setMenu] = useState(false)
  const [pesquisa, setPesquisa] = useState('')
  const [materiaFiltro, setMateriaFiltro] = useState('todas')
  const [progresso, setProgresso] = useState<Progresso>(lerProgresso)
  useEffect(() => {
    const fn = () => { setRota(pathname()); setMenu(false); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', fn)
    return () => window.removeEventListener('hashchange', fn)
  }, [])
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(progresso)) }, [progresso])
  const totalAulas = Object.keys(aulas).length
  const feitas = progresso.concluidas.filter(id => aulas[id]).length
  const respostasAvaliadas = useMemo(() => Object.entries(progresso.respostas).flatMap(([chave, marcada]) => {
    const [id, idx] = chave.split(':')
    const questao = aulas[id]?.questoes[Number(idx)]
    return questao ? [{ chave, id, marcada, questao, certa: questao.correta === marcada }] : []
  }), [progresso.respostas])
  const erros = respostasAvaliadas.filter(x => !x.certa)
  function concluir(id: string) {
    setProgresso(p => ({ ...p, concluidas: p.concluidas.includes(id) ? p.concluidas.filter(x => x !== id) : [...p.concluidas, id] }))
  }
  function favorito(id: string) {
    setProgresso(p => ({ ...p, favoritas: p.favoritas.includes(id) ? p.favoritas.filter(x => x !== id) : [...p.favoritas, id] }))
  }
  function responder(id: string, indice: number, resposta: number) {
    setProgresso(p => ({ ...p, respostas: { ...p.respostas, [id + ':' + indice]: resposta } }))
  }
  function refazer(id: string, indice: number) {
    setProgresso(p => { const respostas = { ...p.respostas }; delete respostas[id + ':' + indice]; return { ...p, respostas } })
  }
  const opcoesFiltradas = materias.map(m => ({ ...m, topicos: m.topicos.filter(t =>
    (materiaFiltro === 'todas' || materiaFiltro === m.id) &&
    (t.titulo + ' ' + m.nome).toLocaleLowerCase('pt-BR').includes(pesquisa.toLocaleLowerCase('pt-BR'))
  ) })).filter(m => m.topicos.length)
  const aulaId = rota.startsWith('/aula/') ? rota.slice(6) : ''
  const aula = aulas[aulaId]
  return (
    <div className="tj-site">
      <header className="tj-header">
        <a className="tj-brand" href="#/" aria-label="Voltar ao início">
          <span className="tj-brand-mark"><GraduationCap size={21} /></span>
          <span><strong>TJ-SP | Escrevente</strong><small>Central de estudos 2026/2027</small></span>
        </a>
        <div className="tj-header-right">
          <span className="tj-status"><span aria-hidden="true" /> Aulas em publicação contínua</span>
          <a className="tj-action-small" href="#/estudo">Começar a estudar <ArrowRight size={15}/></a>
          <button className="tj-menu-toggle" type="button" onClick={() => setMenu(!menu)} aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>{menu ? <X /> : <Menu />}</button>
        </div>
      </header>
      <div className="tj-layout">
        <aside className={'tj-sidebar ' + (menu ? 'open' : '')} aria-label="Navegação principal">
          <span className="tj-side-title">PREPARAÇÃO PARA O TJ-SP</span>
          <nav>{rotas.map(({href,nome,Icon}) => <a key={href} href={href} className={rota === href.slice(1) || (rota.startsWith('/aula/') && href === '#/estudo') ? 'active' : ''}><Icon size={18}/>{nome}</a>)}</nav>
          <div className="tj-sidebar-bottom">
            <span className="tj-side-title">SEU PROGRESSO</span>
            <strong>{feitas} de {totalAulas} aulas</strong>
            <div className="tj-progress-track"><span style={{width: (totalAulas ? 100*feitas/totalAulas : 0) + '%'}} /></div>
            <small>Progresso registrado neste dispositivo. O catálogo do edital tem {topicos.length} tópicos e cresce a cada publicação.</small>
          </div>
        </aside>
        <main className="tj-main">
          {rota === '/' && <>
            <section className="tj-hero">
              <div>
                <span className="tj-eyebrow">EDITAL Nº 02/2026 • FUNDAÇÃO VUNESP</span>
                <h1>Seu próximo passo começa <em>hoje.</em></h1>
                <p>Uma trilha de estudos para Escrevente Técnico Judiciário do TJ-SP, organizada pelo conteúdo programático do edital. Explicações desde o básico, exemplos resolvidos e exercícios comentados — uma aula de cada vez.</p>
                <div className="tj-buttons"><a href="#/aula/port-01" className="tj-primary">Iniciar a primeira aula <ArrowRight size={18}/></a><a href="#/estudo" className="tj-secondary">Ver todas as matérias</a></div>
              </div>
              <div className="tj-date-card">
                <span>PROVA OBJETIVA E REDAÇÃO</span>
                <strong>14 de março <small>de 2027</small></strong>
                <div><CalendarDays size={17} /> Inscrições: 28/10 a 10/12/2026</div>
                <div><Target size={17} /> 70 questões + redação</div>
                <div><CheckCircle2 size={17} /> Cadastro de reserva • PcD: reserva de 5%</div>
                <a href={inscricaoUrl} target="_blank" rel="noreferrer">Página oficial de inscrição <ExternalLink size={14}/></a>
              </div>
            </section>
            <section className="tj-kpis">
              <div><span>TÓPICOS DO EDITAL</span><strong>{topicos.length}</strong><small>Organizados por disciplina</small></div>
              <div><span>AULAS PUBLICADAS</span><strong>{totalAulas}</strong><small>Materiais completos para começar</small></div>
              <div><span>AULAS CONCLUÍDAS</span><strong>{feitas}</strong><small>Marcadas por você</small></div>
              <div><span>QUESTÕES RESOLVIDAS</span><strong>{respostasAvaliadas.length}</strong><small>Treinos inéditos comentados</small></div>
            </section>
            <div className="tj-section-heading"><div><span className="tj-eyebrow">PRIMEIRO CICLO</span><h2>Comece por estas aulas</h2><p>Ordem sugerida para hoje. Faça uma aula, pratique e avance — sem precisar estudar tudo de uma vez.</p></div></div>
            <div className="tj-cards">{aulaOrdem.map((id,i) => <a key={id} className="tj-lesson-card" href={'#/aula/'+id}><span className="tj-card-icon">{i===0 ? <BookOpen/> : i===1 ? <ClipboardList/> : <Target/>}</span><small>ETAPA 0{i+1} • {aulas[id].tempo}</small><h3>{aulas[id].titulo}</h3><span className="tj-card-footer">{progresso.concluidas.includes(id) ? 'Concluída ✓' : 'Estudar agora'} <ArrowRight size={17}/></span></a>)}</div>
            <section className="tj-distribution">
              <div className="tj-section-heading"><div><span className="tj-eyebrow">PLANEJAMENTO PELO EDITAL</span><h2>Distribuição da prova objetiva</h2><p>Direito e legislação respondem por 30 questões. Matemática e Raciocínio Lógico terão trilhas próprias com reforço do zero.</p></div></div>
              <div className="tj-bars">{blocos.map(b => <div key={b.titulo} className="tj-bar"><span>{b.titulo}</span><div><i style={{width:(b.peso / 30 * 100) + '%'}} /></div><strong>{b.questoes}</strong></div>)}</div>
            </section>
          </>}
          {rota === '/estudo' && <>
            <div className="tj-page-top"><span className="tj-eyebrow">ANEXO VIII • EDITAL Nº 02/2026</span><h1>Todo o conteúdo programático</h1><p>Uma organização de {topicos.length} tópicos em {materias.length} trilhas. O catálogo mostra também as aulas ainda em produção, para que a cobertura seja transparente.</p></div>
            <div className="tj-searchbar"><label><Search size={18}/><input value={pesquisa} onChange={e => setPesquisa(e.target.value)} placeholder="Buscar assunto, artigo ou disciplina..." aria-label="Buscar assunto" /></label><select aria-label="Filtrar por disciplina" value={materiaFiltro} onChange={e=>setMateriaFiltro(e.target.value)}><option value="todas">Todas as matérias</option>{materias.map(m=><option key={m.id} value={m.id}>{m.nome}</option>)}</select></div>
            <div className="tj-materia-list">{opcoesFiltradas.map(m => <section key={m.id} className="tj-materia"><header><div><small>BLOCO {m.bloco}</small><h2>{m.nome}</h2><p>{m.descricao}</p></div><span>{m.questoes ? m.questoes + ' questões' : m.bloco==='II' ? 'Bloco jurídico' : 'Discursiva'}</span></header><div className="tj-topic-list">{m.topicos.map((t,i)=><div className="tj-topic" key={t.id}><span className="tj-topic-num">{String(i+1).padStart(2,'0')}</span><div><strong>{t.titulo}</strong><small>{t.referencia}</small></div>{aulas[t.id] ? <a href={'#/aula/'+t.id} className="tj-topic-active">{progresso.concluidas.includes(t.id) ? 'Revisar aula' : 'Abrir aula'} <ChevronRight size={16}/></a> : <span className="tj-topic-pending">Aula em preparação</span>}</div>)}</div></section>)}</div>
            {!opcoesFiltradas.length && <p>Nenhum tópico corresponde à sua busca.</p>}
          </>}
          {rota === '/ciclo' && <>
            <div className="tj-page-top"><span className="tj-eyebrow">ESTUDO SEM HORÁRIO FIXO</span><h1>Ciclo inteligente de estudos</h1><p>Em vez de prender matérias a dias, siga a próxima aula disponível. A cada avanço, volte para uma disciplina diferente.</p></div>
            <div className="tj-cycle">
              {aulaOrdem.map((id,i)=><div key={id} className="tj-cycle-item"><span>{i+1}</span><div><small>{aulas[id].tempo}</small><h2>{aulas[id].titulo}</h2><p>{i===0?'Interpretação guiada e identificação de pegadinhas.':i===1?'Contas detalhadas sem pular etapas.':'Dedução, negação e sequência desde o básico.'}</p></div><a href={'#/aula/'+id}>{progresso.concluidas.includes(id)?'Revisar':'Estudar'} <ArrowRight size={16}/></a></div>)}
            </div>
            <div className="tj-note"><strong>Como usar o ciclo:</strong> estude o conteúdo, responda às questões inéditas, registre erros e marque a aula como concluída. Na volta do ciclo, revise os pontos difíceis. Direito, Informática e redação entram na sequência de publicação.</div>
          </>}
          {rota === '/questoes' && <>
            <div className="tj-page-top"><span className="tj-eyebrow">PRÁTICA COM EXPLICAÇÃO</span><h1>Questões de fixação</h1><p>Questões inéditas elaboradas para estudo. Não são questões oficiais ou reproduzidas da Fundação Vunesp.</p></div>
            <div className="tj-cards">{aulaOrdem.map(id => <a key={id} href={'#/aula/'+id+'?questoes'} className="tj-lesson-card"><span className="tj-card-icon"><CircleHelp/></span><small>{aulas[id].questoes.length} questões inéditas</small><h3>{aulas[id].titulo}</h3><span className="tj-card-footer">Responder e conferir gabarito <ArrowRight size={16}/></span></a>)}</div>
            <div className="tj-note">O comentário detalhado aparece após cada resposta. Errar faz parte do aprendizado: consulte a área de revisões.</div>
          </>}
          {rota === '/revisoes' && <>
            <div className="tj-page-top"><span className="tj-eyebrow">APRENDER COM OS ERROS</span><h1>Revisões e caderno de erros</h1><p>{erros.length ? 'Estas questões precisam de uma nova tentativa depois da revisão da teoria.' : 'Os erros das questões respondidas aparecerão aqui, com indicação da aula de origem.'}</p></div>
            <div className="tj-revision-stats"><div><strong>{respostasAvaliadas.length}</strong><span>questões respondidas</span></div><div><strong>{erros.length}</strong><span>erros a revisar</span></div><div><strong>{progresso.favoritas.length}</strong><span>aulas favoritas</span></div></div>
            {erros.map(x=><div className="tj-error" key={x.chave}><small>{aulas[x.id]?.titulo}</small><strong>{x.questao.pergunta}</strong><p>{x.questao.explicacao}</p><a href={'#/aula/'+x.id}>Revisar conteúdo <ArrowRight size={15}/></a></div>)}
            {!erros.length && <div className="tj-note">Comece pela <a href="#/aula/port-01">aula de interpretação de textos</a> e responda às questões finais para alimentar seu caderno de erros.</div>}
          </>}
          {rota === '/edital' && <>
            <div className="tj-page-top"><span className="tj-eyebrow">INFORMAÇÕES DO CONCURSO</span><h1>Edital TJ-SP Escrevente 2026</h1><p>Concurso para Escrevente Técnico Judiciário, exclusivamente em cadastro de reserva. Acompanhe sempre as publicações e retificações oficiais.</p></div>
            <div className="tj-info-grid">
              <div><span>Banca organizadora</span><strong>Fundação Vunesp</strong></div>
              <div><span>Inscrições previstas</span><strong>28/10 a 10/12/2026</strong></div>
              <div><span>Prova prevista</span><strong>14/03/2027</strong></div>
              <div><span>Questões objetivas</span><strong>70 + redação</strong></div>
              <div><span>Vagas</span><strong>Cadastro de reserva</strong></div>
              <div><span>Reserva para PcD</span><strong>5%</strong></div>
            </div>
            <div className="tj-note"><strong>Inscrição PcD:</strong> informe a deficiência e o interesse em disputar a lista especial na ficha da Vunesp; envie o laudo no campo de documentos dentro do prazo. Pedido de condição especial, como tempo adicional, é separado. Consulte os critérios completos do capítulo específico do edital.</div>
            <div className="tj-buttons"><a href={inscricaoUrl} className="tj-primary" target="_blank" rel="noreferrer">Acessar Vunesp <ExternalLink size={16}/></a><a href={editalUrl} className="tj-secondary" target="_blank" rel="noreferrer">Ler edital integral <FileText size={16}/></a></div>
            <p className="tj-source-warning">Plataforma de estudo independente, não afiliada ao TJ-SP ou à Fundação Vunesp. As datas estão sujeitas a retificação.</p>
          </>}
          {aulaId && (aula ? <>
            <a className="tj-back" href="#/estudo"><ArrowLeft size={16}/> Voltar ao conteúdo programático</a>
            <div className="tj-article-top"><div><span className="tj-eyebrow">AULA PUBLICADA • {aula.tempo}</span><h1>{aula.titulo}</h1><p>Explicação passo a passo e questões inéditas com gabarito comentado.</p></div><button className={'tj-favorite '+(progresso.favoritas.includes(aulaId)?'saved':'')} type="button" onClick={()=>favorito(aulaId)} aria-label="Favoritar aula"><Heart size={19} fill={progresso.favoritas.includes(aulaId)?'currentColor':'none'}/></button></div>
            <div className="tj-reading-layout"><article className="tj-article"><ReactMarkdown remarkPlugins={[remarkGfm]}>{aula.texto}</ReactMarkdown></article><aside className="tj-reading-side"><strong>Roteiro da aula</strong><p>1. Leia a explicação sem pressa.</p><p>2. Resolva as questões ao final.</p><p>3. Registre o que errou.</p><p>4. Marque a aula como concluída.</p><a href="#/revisoes">Ir ao caderno de erros <ArrowRight size={15}/></a></aside></div>
            <section className="tj-quiz" id="questoes"><span className="tj-eyebrow">FIXAÇÃO IMEDIATA</span><h2>Teste o que aprendeu</h2><p>Escolha uma alternativa. A explicação aparecerá depois da resposta.</p>{aula.questoes.map((q,i)=>{
              const r=progresso.respostas[aulaId+':'+i]
              const respondida=typeof r === 'number'
              return <div className="tj-question" key={i}><small>QUESTÃO {String(i+1).padStart(2,'0')} • INÉDITA</small><h3>{q.pergunta}</h3><div className="tj-options">{q.opcoes.map((op,j)=><button type="button" key={j} disabled={respondida} onClick={()=>responder(aulaId,i,j)} className={respondida && q.correta===j?'correct':respondida && r===j?'incorrect':''}><span>{'ABCDE'[j]}</span>{op}</button>)}</div>{respondida && <div className={'tj-feedback '+(r===q.correta?'right':'wrong')}><strong>{r===q.correta?'Resposta correta!':'Vamos revisar:'}</strong><p>{q.explicacao}</p><button type="button" onClick={()=>refazer(aulaId,i)}>Refazer questão</button></div>}</div>
            })}</section>
            <div className="tj-lesson-end"><button type="button" onClick={()=>concluir(aulaId)} className={progresso.concluidas.includes(aulaId)?'done':''}><Check size={18}/>{progresso.concluidas.includes(aulaId)?'Aula concluída — desfazer':'Marcar esta aula como concluída'}</button>{aulaOrdem.indexOf(aulaId) >=0 && aulaOrdem.indexOf(aulaId)<aulaOrdem.length-1 ? <a href={'#/aula/'+aulaOrdem[aulaOrdem.indexOf(aulaId)+1]}>Próxima aula <ArrowRight size={18}/></a> : <a href="#/ciclo">Voltar ao ciclo <ArrowRight size={18}/></a>}</div>
          </> : <div className="tj-page-top"><h1>Aula em produção</h1><p>Este tópico consta no mapa do edital, mas a aula ainda não foi publicada. Estude uma das aulas já disponíveis.</p><a className="tj-primary" href="#/estudo">Ver matérias</a></div>)}
          {!['/','/estudo','/ciclo','/questoes','/revisoes','/edital'].includes(rota) && !aulaId && <div className="tj-page-top"><h1>Página não encontrada</h1><a href="#/">Voltar ao início</a></div>}
          <footer className="tj-footer"><span>Central de Estudos TJ-SP • Escrevente Técnico Judiciário • Edital nº 02/2026</span><span>Conteúdo independente • Atualizado por etapas • <a href="?arquivo=prefeitura">Arquivo antigo da Prefeitura de Rincão</a></span></footer>
        </main>
      </div>
    </div>
  )
}
