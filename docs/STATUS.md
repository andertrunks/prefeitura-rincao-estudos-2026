# Status do projeto

Atualizado em 22/08/2026.

## Concluído

- auditoria visual e textual das 45 páginas do edital;
- Mapa Mestre dos três cargos;
- aplicação React + TypeScript + Vite compatível com GitHub Pages;
- navegação por HashRouter;
- seleção dos três cargos;
- 140 unidades curriculares mapeadas no conjunto geral (134 títulos distintos), com recorte por cargo;
- 98 questões inéditas ativas com cinco alternativas e vínculo Cargo → Disciplina → Tópico;
- simulados completos 10/5/15 nos modos prova e estudo;
- correção automática sem revelar gabarito antes da confirmação;
- Caderno de Erros, favoritos, revisões e desempenho;
- persistência em IndexedDB com fallback em LocalStorage;
- exportação e importação de progresso em JSON;
- PWA e cache offline;
- seção de prova prática do Ajudante Geral;
- transparência sobre questões reais não reproduzidas;
- fluxo de publicação gratuita no GitHub Pages;
- build de produção e lint sem erros;
- integridade validada: 140 unidades curriculares, 98 questões ativas e distribuição 10/5/15 por simulado e cargo;
- testes funcionais de estudo, favoritos, revisões, questões, Caderno de Erros, simulado completo, busca, importação e persistência;
- validação responsiva em viewport móvel de 390 × 844;
- manifesto e service worker servidos pelo build de produção;
- repositório público criado em `andertrunks/prefeitura-rincao-estudos-2026`;
- GitHub Pages publicado via GitHub Actions em https://andertrunks.github.io/prefeitura-rincao-estudos-2026/;
- versão pública validada em desktop e viewport móvel.
- armazenamento local v2 com migração compatível e namespaces `guest` / `user:<UUID>`;
- autenticação opcional e sincronização offline-first preparadas com Supabase;
- novo projeto Supabase gratuito em `sa-east-1`, sem billing ou upgrade;
- oito tabelas pessoais normalizadas, RLS forçada e quatro políticas por tabela;
- permissões públicas restritas: `anon` sem acesso e `authenticated` somente com operações cobertas por RLS;
- proteção no banco contra atualizações fora de ordem por navegadores antigos;
- migração assistida de visitante para conta, com mescla e proteção contra duplicidade;
- suporte a vários cargos por conta, mantendo um cargo ativo por vez;
- recomendações determinísticas por erro, amostra mínima e revisão vencida;
- questões preparadas para `cargoIds[]`, com compatibilidade dos IDs existentes;
- página de conta e página de privacidade;
- cache PWA v2 com atualização de navegação e limpeza de versões antigas;
- testes automatizados para migração, isolamento local, conflitos, recomendações e questões compartilhadas.
- auditoria de dependências de produção sem vulnerabilidades conhecidas.
- primeira integração editorial real concluída com o Lote 002 — Português Médio — Fonema;
- aula `medio-portugues-fonema-001.md` incorporada integralmente como conteúdo estático, mantendo o ID local `mp-fonema`;
- 10 questões inéditas — estilo INEPAM do pacote integradas e compartilhadas por Agente Administrativo e Monitor de Educação;
- cinco referências reais da banca preservadas como análise pedagógica, sem classificação indevida como questões reais do banco;
- renderização de Markdown longo com índice interno, tabelas responsivas, metadados editoriais e links oficiais;
- cache PWA atualizado para `rincao-estudos-v3`.

## Pendências externas

- conferir eventuais retificações do edital após 21/08/2026;
- conferir emendas posteriores à versão oficial disponibilizada da Lei Orgânica (arquivo declara atualização até 2007).
- configurar as credenciais do Google OAuth no painel do Supabase e validar o primeiro login real.

## Decisão de custo

O Google AI Studio não foi usado porque a conta acessível aparece como Pro e a interface apresenta alerta de controle de gastos da API. A regra de custo zero determina que uma ferramenta com cobrança incerta seja evitada. A sincronização usa somente o plano gratuito do Supabase e degrada com segurança para armazenamento local; não há API paga nem serviço com billing habilitado.
