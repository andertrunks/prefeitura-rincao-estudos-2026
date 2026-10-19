# TJ-SP Escrevente — Central de Estudos 2026/2027

Reaproveitamento da plataforma **Prefeitura de Rincão Estudos 2026**, direcionada ao concurso do Tribunal de Justiça de São Paulo para **Escrevente Técnico Judiciário (edital nº 02/2026, Fundação Vunesp)**.

**Site principal:** https://andertrunks.github.io/prefeitura-rincao-estudos-2026/

**Arquivo original preservado:** https://andertrunks.github.io/prefeitura-rincao-estudos-2026/?arquivo=prefeitura

## Edição 2026/2027 — primeira entrega (19/10/2026)

- Conteúdo programático de prova objetiva e redação catalogado por bloco, disciplina e assunto (Anexo VIII).
- 78 tópicos de estudo, representando decomposição didática do conteúdo; nem todos têm aulas publicadas.
- Primeiras 3 aulas completas: Português (interpretação), Matemática (operações) e Raciocínio Lógico (dedução).
- 9 questões inéditas de fixação, com alternativas, feedback e gabarito comentado.
- Página inicial, ciclo de estudos, painel de matérias, questões, revisões e caderno de erros.
- Registro local e **separado** do progresso das aulas do TJ-SP, sem modificar dados do site anterior.
- Páginas de informações do edital, prazos e inscrição PcD.
- Aulas de Direito, Informática, Atualidades, LBI e redação na fila de produção progressiva. Tópicos planejados aparecem como não publicados, sem simular disponibilidade.

## Estrutura

- src/tjsp2026/catalog.ts — mapa do Anexo VIII.
- src/tjsp2026/lessons.ts — aula em Markdown e questões inéditas.
- src/tjsp2026/TjspApp.tsx — aplicativo do TJ-SP.
- src/tjsp2026/tjsp.css — design responsivo.
- src/main.tsx — troca de portal por query string.
- src/App.tsx — implementação original preservada e acessível com ?arquivo=prefeitura.

## Desenvolvimento

Executar pnpm install, pnpm lint, pnpm test e pnpm build. A publicação ocorre pela GitHub Actions em cada push no branch main.

## Fonte e responsabilidade

O edital nº 02/2026 é a fonte primária; verifique retificações e resultados no TJ-SP e na Vunesp. Questões marcadas como inéditas não são questões oficiais. Este site não é afiliado ao TJ-SP ou à organizadora. Materiais anteriores referentes ao concurso da Prefeitura de Rincão permanecem arquivados e podem divergir do programa do TJ-SP.
