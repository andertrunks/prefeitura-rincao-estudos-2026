import { Cloud, CloudOff, Download, LogOut, RefreshCcw, UserRound } from 'lucide-react'
import { useState, type Dispatch, type SetStateAction } from 'react'
import { useAuth } from '../auth/useAuth'
import { cargos, questions, topics } from '../data'
import type { CargoId, SyncStatus, UserData } from '../types'
import { exportUserData } from '../utils/backup'
import { questionMatchesCargo } from '../utils/questions'

const syncLabels: Record<SyncStatus, string> = {
  local: 'Somente neste dispositivo',
  pending: 'Sincronização pendente',
  syncing: 'Sincronizando',
  synced: 'Sincronizado',
  error: 'Sincronização pendente',
  unavailable: 'Nuvem indisponível',
}

export function AccountPage({
  data,
  setData,
  syncMessage,
  syncStatus,
  onSync,
}: {
  data: UserData
  setData: Dispatch<SetStateAction<UserData>>
  syncMessage: string
  syncStatus: SyncStatus
  onSync: () => Promise<unknown>
}) {
  const { user, signOut } = useAuth()
  const [busy, setBusy] = useState(false)
  if (!user) return null

  const cargoTopics = topics.filter((topic) => topic.cargoIds.includes(data.selectedCargo))
  const cargoQuestions = questions.filter((question) => questionMatchesCargo(question, data.selectedCargo))
  const answered = new Map(data.answers.filter((answer) => answer.cargoId === data.selectedCargo).map((answer) => [answer.questionId, answer]))
  const answers = [...answered.values()].filter((answer) => cargoQuestions.some((question) => question.id === answer.questionId))
  const correct = answers.filter((answer) => answer.correct).length
  const progress = Math.round((data.completedTopics.filter((id) => cargoTopics.some((topic) => topic.id === id)).length / cargoTopics.length) * 100)

  const changeCargo = (cargoId: CargoId) => setData((current) => ({
    ...current,
    selectedCargo: cargoId,
    cargoIds: [...new Set([...current.cargoIds, cargoId])],
  }))
  const logout = async () => {
    setBusy(true)
    try {
      await signOut()
    } catch {
      alert('Não foi possível encerrar a sessão agora. Tente novamente.')
      setBusy(false)
    }
  }

  return (
    <>
      <header className="page-header"><div><span className="eyebrow">Minha conta</span><h1>Seu estudo, em todos os dispositivos</h1><p>A conta guarda apenas autenticação, preferências e histórico de estudo.</p></div></header>
      <section className="account-summary">
        <div className="account-identity"><span><UserRound size={24} /></span><div><small>Conta autenticada</small><strong>{user.email ?? 'Usuário Supabase'}</strong></div></div>
        <div className={`sync-pill ${syncStatus}`}>{syncStatus === 'synced' ? <Cloud size={17} /> : <CloudOff size={17} />}<span><strong>{syncLabels[syncStatus]}</strong><small>{syncMessage}</small></span></div>
      </section>
      <div className="performance-grid account-metrics">
        <article><span>Questões respondidas</span><strong>{answers.length}</strong></article>
        <article><span>Aproveitamento</span><strong>{answers.length ? Math.round((correct / answers.length) * 100) : 0}%</strong></article>
        <article><span>Progresso do cargo</span><strong>{progress}%</strong></article>
        <article><span>Simulados</span><strong>{data.simulations.filter((simulation) => simulation.cargoId === data.selectedCargo).length}</strong></article>
      </div>
      <section className="account-panel">
        <header><span>Cargo ativo</span><h2>{cargos.find((cargo) => cargo.id === data.selectedCargo)?.name}</h2></header>
        <div className="account-cargos">{cargos.map((cargo) => <button type="button" className={data.selectedCargo === cargo.id ? 'active' : ''} key={cargo.id} onClick={() => changeCargo(cargo.id)}>{cargo.name}{data.cargoIds.includes(cargo.id) && <small>Nos meus cargos</small>}</button>)}</div>
      </section>
      <section className="data-panel account-actions"><div><Download size={24} /><span><h2>Controle dos seus dados</h2><p>Exporte uma cópia a qualquer momento. Sair não apaga os dados remotos.</p></span></div><div><button type="button" onClick={() => exportUserData(data)}><Download size={17} /> Exportar meus dados</button><button type="button" disabled={busy || syncStatus === 'syncing'} onClick={() => void onSync()}><RefreshCcw size={17} /> Sincronizar agora</button><button type="button" disabled={busy} onClick={logout}><LogOut size={17} /> Sair</button></div></section>
    </>
  )
}
