import { useState } from 'react'
import { LogIn, ShieldCheck, UserPlus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from './useAuth'

export function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { configured, signInWithGoogle } = useAuth()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  if (!open) return null

  const authenticate = async () => {
    setBusy(true)
    setError('')
    try {
      await signInWithGoogle()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível iniciar a autenticação.')
      setBusy(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar"><X size={19} /></button>
        <span className="auth-icon"><ShieldCheck size={25} /></span>
        <h2 id="auth-title">Sincronize seu progresso gratuitamente</h2>
        <p>O cadastro é opcional. Com uma conta, suas aulas, questões, simulados e revisões ficam disponíveis em outros dispositivos.</p>
        {configured ? (
          <div className="auth-options">
            <button type="button" disabled={busy} onClick={authenticate}><LogIn size={18} /> Entrar com Google</button>
            <button type="button" disabled={busy} onClick={authenticate}><UserPlus size={18} /> Criar conta grátis com Google</button>
          </div>
        ) : (
          <div className="notice neutral">A sincronização em nuvem ainda não está configurada. O estudo como visitante continua funcionando normalmente.</div>
        )}
        {error && <div className="notice warning">{error}</div>}
        <button className="continue-guest" type="button" onClick={onClose}>Continuar sem cadastro</button>
        <small>Usamos somente os dados necessários para autenticação e progresso. <Link to="/privacidade" onClick={onClose}>Ver privacidade</Link></small>
      </section>
    </div>
  )
}
