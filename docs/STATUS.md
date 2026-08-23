# Status do projeto

Atualizado em 23/08/2026.

## Concluído

- auditoria visual e textual das 45 páginas do edital;
- Mapa Mestre dos três cargos;
- aplicação React + TypeScript + Vite compatível com GitHub Pages;
- navegação por HashRouter;
- seleção dos três cargos;
- 140 unidades curriculares mapeadas no conjunto geral (134 títulos distintos), com recorte por cargo;
- 185 questões inéditas ativas com cinco alternativas e vínculo Cargo → Disciplina → Tópico, das quais 115 vieram do banco editorial canônico;
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
- integridade validada: 140 unidades curriculares internas, 34 aulas editoriais completas compartilhadas, 185 questões ativas e distribuição 10/5/15 por simulado e cargo;
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
- login opcional com Google validado em produção, mantendo o modo visitante disponível;
- cache PWA v2 com atualização de navegação e limpeza de versões antigas;
- testes automatizados para migração, isolamento local, conflitos, recomendações e questões compartilhadas.
- auditoria de dependências de produção sem vulnerabilidades conhecidas.
- primeira integração editorial real concluída com o Lote 002 — Português Médio — Fonema;
- aula `medio-portugues-fonema-001.md` incorporada integralmente como conteúdo estático, mantendo o ID local `mp-fonema`;
- 10 questões inéditas — estilo INEPAM do pacote integradas e compartilhadas por Agente Administrativo e Monitor de Educação;
- cinco referências reais da banca preservadas como análise pedagógica, sem classificação indevida como questões reais do banco;
- renderização de Markdown longo com índice interno, tabelas responsivas e links oficiais;
- separação entre metadados editoriais internos e linguagem pública: IDs, nomes de arquivos, schemas e status permanecem no pacote, mas não aparecem para o estudante;
- apresentação amigável das questões relacionadas e das fontes, preservando a classificação pedagógica real/inédita;
- cache PWA atualizado para `rincao-estudos-v6`, com recarga automática quando uma nova versão assume o controle.
- rerratificação oficial de 13/08/2026 recuperada, lida integralmente e comparada ao edital; alterações restritas a Nutricionista e Psicólogo, sem impacto nos três cargos do projeto;
- 21 aulas revisadas de Português do Ensino Médio e 13 de Matemática do Ensino Médio integradas como arquivos Markdown estáticos;
- duplicatas históricas do Drive resolvidas na publicação por ID editorial, sem exclusão ou reorganização da fonte editorial;
- IDs locais anteriores preservados como aliases quando uma aula canônica reúne mais de um subtópico;
- cobertura pública corrigida: conteúdos ainda sem pacote completo aparecem como “Conteúdo em preparação” e nenhum cargo é declarado 100% concluído;
- manifesto, cobertura, calendário, notícias, rerratificações, fontes e banco editorial versionados em `src/content/library/data`.

## Pendências editoriais

- Conhecimentos Específicos de Agente Administrativo;
- Conhecimentos Específicos de Monitor de Educação;
- Português do Ensino Fundamental para Ajudante Geral;
- Matemática do Ensino Fundamental para Ajudante Geral;
- Conhecimentos Específicos de Ajudante Geral;
- pacote editorial canônico de preparação para a prova prática de Ajudante Geral;
- banco interativo canônico para Interjeição a Interpretação e para as 13 aulas de Matemática;
- continuar monitorando novas retificações e publicações oficiais posteriores a 23/08/2026;
- conferir emendas posteriores à versão oficial disponibilizada da Lei Orgânica (arquivo declara atualização até 2007).

## Decisão de custo

O Google AI Studio não foi usado porque a conta acessível aparece como Pro e a interface apresenta alerta de controle de gastos da API. A regra de custo zero determina que uma ferramenta com cobrança incerta seja evitada. A sincronização usa somente o plano gratuito do Supabase e degrada com segurança para armazenamento local; não há API paga nem serviço com billing habilitado.
