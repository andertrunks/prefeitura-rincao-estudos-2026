# Diagnóstico do login com Google — 13/09/2026

Diagnóstico inicial somente leitura, seguido de restauração expressamente autorizada.

## Resolução verificada

Em 13/09/2026, o projeto existente foi restaurado no plano gratuito e retornou ACTIVE_HEALTHY. No site público, foram testados logout, novo login com Google (OAuth/PKCE), retorno à aplicação e sincronização manual. A interface confirmou “Conta autenticada” e “Progresso sincronizado”. Nenhuma chave, conta ou tabela foi recriada e nenhum serviço pago foi habilitado. O diagnóstico abaixo registra o estado anterior à restauração.

## Evidências

- A configuração pública do site aponta para `oawgvsczqxirqlupnkyq`.
- As consultas `list_projects` e `get_project` do conector oficial retornaram `status: INACTIVE` para **Prefeitura Rincao Estudos 2026**.
- A organização **Anderson Projetos** continua com `plan: free`.
- A consulta ao endpoint público `/auth/v1/health` falhou na resolução DNS do host desse mesmo projeto.
- O site estático continua acessível; isso não comprova disponibilidade do Supabase, pois ele é hospedado separadamente no GitHub Pages.
- O código de login utiliza Google via Supabase OAuth/PKCE, com retorno ao caminho-base da origem atual. Não há alteração nessa configuração no trabalho pendente de Analytics.

## Conclusão e limite

A indisponibilidade do projeto de autenticação bloqueia o fluxo antes da autorização no Google. Isso explica um impedimento concreto de login; não é possível descartar problemas adicionais de OAuth enquanto o serviço estiver inativo. A causa histórica da inativação não foi confirmada; não atribuir automaticamente a inatividade sem evidência do painel.

O próximo passo é reativar o projeto existente no plano gratuito e verificar status saudável, endpoint de autenticação, provider Google, URLs de retorno e login real no site público. Foi solicitada autorização para essa ação, pois o pedido atual foi de diagnóstico. Não foram recriados projeto, contas, chaves ou dados e não foi habilitado billing.

O endereço local `127.0.0.1:4173` não deve ser usado como prova de sucesso do OAuth público: a origem de retorno é diferente e pode não estar autorizada. O teste final deve usar `https://andertrunks.github.io/prefeitura-rincao-estudos-2026/`.
