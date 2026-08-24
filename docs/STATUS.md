# Status do projeto

Atualizado em 24/08/2026.

## Concluído

- auditoria visual e textual das 45 páginas do edital;
- Mapa Mestre dos três cargos;
- aplicação React + TypeScript + Vite compatível com GitHub Pages;
- navegação por HashRouter;
- seleção dos três cargos;
- 140 unidades curriculares mapeadas no conjunto geral (134 títulos distintos), com recorte por cargo;
- 713 questões editoriais canônicas com cinco alternativas e vínculo Cargo → Disciplina → Tópico: 702 inéditas — estilo INEPAM e 11 reais com origem catalogada;
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
- integridade validada: 140 unidades curriculares internas, 89 aulas editoriais canônicas, 713 questões editoriais e distribuição 10/5/15 por simulado e cargo;
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
- cache PWA atualizado para `rincao-estudos-v10`, com recarga automática quando uma nova versão assume o controle.
- dashboard conectado aos arquivos estáticos de calendário, notícias e rerratificação, com contagem regressiva calculada e filtro por cargo.
- rerratificação oficial de 13/08/2026 recuperada, lida integralmente e comparada ao edital; alterações restritas a Nutricionista e Psicólogo, sem impacto nos três cargos do projeto;
- 21 aulas revisadas de Português do Ensino Médio e 13 de Matemática do Ensino Médio integradas como arquivos Markdown estáticos;
- duplicatas históricas do Drive resolvidas na publicação por ID editorial, sem exclusão ou reorganização da fonte editorial;
- IDs locais anteriores preservados como aliases quando uma aula canônica reúne mais de um subtópico;
- cobertura pública corrigida: conteúdos ainda sem pacote completo aparecem como “Conteúdo em preparação” e nenhum cargo é declarado 100% concluído;
- manifesto, cobertura, calendário, notícias, rerratificações, fontes e banco editorial versionados em `src/content/library/data`.
- 4 aulas de Português Fundamental e 5 de Matemática Fundamental publicadas para Ajudante Geral;
- 30 aulas canônicas de Conhecimentos Específicos de Agente Administrativo publicadas, sem duplicar os antigos blocos-pai;
- 15 aulas canônicas de Conhecimentos Específicos de Ajudante Geral cobrindo 22 tópicos locais;
- módulo editorial completo de preparação para a Prova Prática publicado exclusivamente para Ajudante Geral;
- alias histórico de Redação Oficial preservado para cinco questões antigas, sem alterar IDs de aula, questão ou progresso;
- catálogo de 180 fontes integrado; 99 referências ainda possuem metadados parciais e impedem declarar conclusão editorial;
- nenhum pacote canônico de simulado foi encontrado; o simulado funcional existente permanece gerado localmente na distribuição oficial 10/5/15.
- comentários malformados do consolidado não vazam `---` para a interface: 105 resoluções foram recuperadas das aulas Markdown e 26 questões sem comentário editorial detalhado encaminham honestamente o estudante à resolução da aula.

## Pendências editoriais

- Conhecimentos Específicos de Monitor de Educação;
- banco interativo canônico para os blocos de Ajudante Geral;
- pacotes editoriais canônicos de simulados completos;
- completar os metadados das 99 referências parciais antes de promover os respectivos itens a `concluido`;
- completar os comentários editoriais detalhados das 26 questões cujo material canônico registra apenas o gabarito;
- continuar monitorando novas retificações e publicações oficiais posteriores a 24/08/2026;
- conferir emendas posteriores à versão oficial disponibilizada da Lei Orgânica (arquivo declara atualização até 2007).

## Decisão de custo

O Google AI Studio não foi usado porque a conta acessível aparece como Pro e a interface apresenta alerta de controle de gastos da API. A regra de custo zero determina que uma ferramenta com cobrança incerta seja evitada. A sincronização usa somente o plano gratuito do Supabase e degrada com segurança para armazenamento local; não há API paga nem serviço com billing habilitado.
