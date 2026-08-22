import { ArrowRight, DatabaseBackup, X } from 'lucide-react'

export function GuestImportModal({
  busy,
  onImport,
  onSkip,
}: {
  busy: boolean
  onImport: () => void
  onSkip: () => void
}) {
  return (
    <div className="modal-backdrop">
      <section className="auth-modal import-modal" role="dialog" aria-modal="true" aria-labelledby="import-title">
        <span className="auth-icon"><DatabaseBackup size={25} /></span>
        <h2 id="import-title">Encontramos progresso de estudos neste dispositivo</h2>
        <p>Deseja importar esse progresso para sua conta? Aulas concluídas, respostas, favoritos, erros, simulados e revisões serão mesclados sem duplicar registros.</p>
        <div className="auth-options">
          <button type="button" disabled={busy} onClick={onImport}><ArrowRight size={18} /> Importar progresso</button>
          <button type="button" disabled={busy} onClick={onSkip}><X size={18} /> Começar sem importar</button>
        </div>
        {busy && <small>Salvando localmente e sincronizando com segurança...</small>}
      </section>
    </div>
  )
}
