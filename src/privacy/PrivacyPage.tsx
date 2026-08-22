import { Cloud, Database, ShieldCheck, Smartphone } from 'lucide-react'

export function PrivacyPage() {
  return (
    <>
      <header className="page-header"><div><span className="eyebrow">Privacidade</span><h1>Seus dados servem ao seu estudo</h1><p>Explicação simples sobre o que fica no dispositivo e o que pode ser sincronizado.</p></div></header>
      <div className="privacy-grid">
        <article><Smartphone size={24} /><h2>Sem cadastro</h2><p>O cargo, progresso, respostas, favoritos, simulados e revisões ficam somente neste navegador. Você pode estudar sem criar conta.</p></article>
        <article><Cloud size={24} /><h2>Com conta</h2><p>Os mesmos dados de estudo são sincronizados com o Supabase para aparecerem nos seus outros dispositivos.</p></article>
        <article><Database size={24} /><h2>Dados mínimos</h2><p>Não pedimos CPF, endereço, telefone ou data de nascimento. A autenticação pode fornecer apenas identificador e e-mail da conta.</p></article>
        <article><ShieldCheck size={24} /><h2>Proteção e finalidade</h2><p>O projeto é gratuito, não vende dados e usa o histórico somente para progresso, Caderno de Erros, revisões e recomendações.</p></article>
      </div>
      <section className="privacy-copy"><h2>Como protegemos o acesso</h2><p>As tabelas pessoais usam Row Level Security. Cada operação é validada no banco com o identificador da sessão autenticada; filtros do React não são a barreira de segurança.</p><h2>Funcionamento offline</h2><p>Toda ação é salva primeiro no dispositivo. Se a internet ou o Supabase falhar, o estudo continua e a sincronização é retomada quando a conexão voltar.</p><h2>Conteúdo educacional</h2><p>Aulas, questões, edital, calendário, notícias e fontes permanecem públicos e estáticos no GitHub Pages. Eles não são armazenados como dados pessoais no Supabase.</p></section>
    </>
  )
}
