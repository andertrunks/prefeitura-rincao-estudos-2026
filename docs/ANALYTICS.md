# Estatísticas opcionais — Google Analytics

## Conta existente

Conta: Prefeitura Rincão Estudos 2026. Propriedade: Rincão Estudos 2026 — Site. Identificador de medição público em `src/config/analytics.public.ts`; não é credencial. Propriedade `553943677`, stream `15770370767`. Fuso São Paulo; modalidade gratuita. Sem Google Ads, remarketing, upgrade ou billing. Compartilhamentos opcionais da conta e medição otimizada do stream foram desativados na configuração.

## Consentimento e privacidade

- O script externo só é solicitado em produção, no host oficial, depois de `granted`.
- A escolha local versionada `rincao-estudos-analytics-v1` não contém identificação de conta.
- Escolha ausente, recusada ou ilegível: nenhuma tag carregada e nenhum evento enviado.
- Banner permite aceitar ou recusar com botões equivalentes. A seção Privacidade permite mudar a escolha.
- Recusar posteriormente ativa imediatamente `ga-disable-<measurementId>`, descarta visitas que aguardavam carregamento da tag e remove apenas os cookies `rincao_stats_*` deste projeto.
- Mudanças de escolha entre abas são observadas pelo evento `storage`. Os dados de estudo/autenticação não são tocados.
- A preferência é do navegador, não da conta; ao mudar de pessoa em dispositivo compartilhado a escolha continua visível/editável em Privacidade. Nenhuma identidade de login é enviada.

## Dados permitidos

Somente `page_view`: caminho público conhecido, título fixo da seção ou aula e origem de navegação sanitizada. Consultas, fragmentos adicionais e URLs desconhecidas são descartados. Não enviamos respostas, notas, texto digitado, progresso, favoritos, e-mail, nome, UUID nem identificador de login. O Google ainda recebe dados técnicos do navegador e utiliza cookies; não prometemos anonimização absoluta.

Os cookies estão configurados para o caminho do projeto e duração de 90 dias. Dados já recebidos não são apagados automaticamente ao revogar. A navegação offline não é acumulada para envio retroativo; na reconexão mede-se somente a página atual, se houver permissão.

## SPA e duplicidade

`send_page_view: false`, medição otimizada desligada no stream e efeito React dependente apenas da rota e escolha. Repetir render, buscar, responder questão ou alterar query sem trocar a página não gera outra visualização. Voltar a uma página após visitar outra é uma nova visita legítima.

Enquanto a tag carrega, a fila contém somente os parâmetros públicos permitidos; revogação limpa essa fila. Falha de carregamento não quebra o estudo e permite nova tentativa na próxima navegação/reconexão.

## Verificação

`pnpm check` executa lint, testes e TypeScript/build. Testes cobrem recusa, ausência de consentimento/configuração, revogação, corrida de carregamento, sanitização, deduplicação e offline. Ambiente localhost não envia visitas ao Google.

Após deploy: autorizar no site público, visitar duas aulas, conferir Tempo real na propriedade existente, depois recusar e navegar novamente. Não declarar conclusão sem evidência do painel. Esta verificação pública ainda está pendente da conciliação da base editorial descrita em `AUDITORIA_LOTE105.md`.

Referências de manutenção: [privacidade da tag](https://developers.google.com/tag-platform/security/guides/privacy), [pageviews manuais](https://developers.google.com/analytics/devguides/collection/ga4/views).
