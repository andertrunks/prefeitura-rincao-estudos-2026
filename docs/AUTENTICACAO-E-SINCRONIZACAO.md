# Autenticação e sincronização

## Visão geral

A plataforma continua static-first no GitHub Pages. O Supabase é uma camada opcional para autenticação e sincronização de dados pessoais de estudo; aulas, questões, simulados-modelo, edital, calendário, notícias e fontes permanecem no repositório.

O fluxo de uma ação é:

1. salvar imediatamente no namespace local do IndexedDB;
2. atualizar a interface;
3. marcar a fotografia local como pendente;
4. quando houver usuário autenticado e conexão, mesclar com o Supabase;
5. gravar o resultado mesclado nos dois lados.

Falhas de rede ou do Supabase não impedem estudo, questões ou simulados.

## Autenticação

O método escolhido é Google OAuth pelo Supabase Auth. Ele reduz o atrito, não exige armazenar senha no projeto e evita depender do SMTP padrão limitado do Supabase. O cadastro continua opcional.

O navegador recebe somente:

- URL pública do projeto;
- publishable key `sb_publishable_...`.

A publishable key identifica o projeto, mas não autoriza acesso a dados de outra pessoa. A autorização é feita pela sessão do Supabase e pelas políticas RLS. Nenhuma `service_role`, senha de banco ou credencial administrativa deve entrar no frontend, no Git ou em variáveis `VITE_*`.

Para substituir a configuração pública sem alterar código, o build aceita:

- `VITE_SUPABASE_URL`;
- `VITE_SUPABASE_PUBLISHABLE_KEY`.

Sem esses valores e sem a configuração pública, a conta fica indisponível e o modo visitante continua funcional.

## Armazenamento local e migração

A versão 2 usa namespaces independentes:

- `guest` para visitante;
- `user:<UUID>` para cada conta autenticada.

Há uma cópia principal em IndexedDB e um fallback síncrono em LocalStorage. Na primeira execução da versão 2, o registro antigo `main` e o fallback legado são normalizados para `guest`. IDs determinísticos são criados para respostas antigas que ainda não possuíam ID.

Ao trocar a sessão, a interface limpa o estado anterior antes de carregar o novo namespace. Logout não apaga dados remotos e não mostra os dados da conta anterior.

## Importação de visitante

Ao autenticar, o sistema calcula uma impressão digital do progresso `guest`. Se houver dados relevantes ainda não tratados, pergunta se devem ser importados.

- `Importar progresso`: mescla localmente, marca a importação como pendente e sincroniza quando possível.
- `Começar sem importar`: registra a decisão para aquela conta e para aquela versão do progresso visitante.

Após sincronização bem-sucedida, a impressão digital fica marcada como concluída. Novos dados posteriores de visitante podem gerar uma nova oferta sem duplicar tentativas já importadas.

## Resolução de conflitos

As regras são determinísticas e conservadoras:

- cargo ativo: vence o valor com `updated_at` mais recente;
- cargos estudados: união;
- aula concluída: concluído prevalece;
- favoritos: união;
- respostas e simulados: deduplicação por ID, mantendo a versão mais recente;
- revisões: chave `cargo + tópico`, mantendo o `updated_at` mais recente; remoções viram estado `dismissed`;
- tempo de estudo: maior valor;
- navegador antigo: dados remotos válidos são lidos e mesclados antes de qualquer envio.

O cliente envia fotografias completas somente depois de fazer `pull + merge`. Isso evita sobrescrever silenciosamente progresso remoto com um estado local antigo.

Como segunda barreira, gatilhos do Postgres mantêm o maior `updated_at` em perfis, aulas, revisões, simulados e tempo de estudo. Mesmo se dois dispositivos sincronizarem simultaneamente entre o `pull` e o `push`, uma gravação antiga não substitui a mais nova.

O cliente mantém um relógio lógico monotônico: cada alteração usa o maior valor entre o horário atual e o último `updated_at` conhecido, acrescido de 1 ms. Assim, uma configuração incorreta do relógio do dispositivo ou um registro remoto datado no futuro não impede novas alterações legítimas de serem sincronizadas.

## Banco de dados

As migrações ficam em `supabase/migrations` e criam:

- `profiles`: cargo ativo;
- `user_cargos`: conjunto de cargos da pessoa;
- `lesson_progress`: conclusão e percentual por aula/cargo;
- `question_attempts`: tentativas independentes e seu ID de origem;
- `favorites`: favoritos de aula e questão;
- `review_queue`: agenda e tombstones de revisão;
- `simulation_attempts`: resultado mínimo reconstruível;
- `study_progress`: tempo acumulado.

Todos os registros pessoais usam `user_id uuid` com chave estrangeira para `auth.users` e exclusão em cascata. IDs editoriais de aula e questão são strings estáveis e não devem mudar ao renomear títulos ou caminhos.

## Row Level Security

RLS está habilitada e forçada nas oito tabelas. Cada tabela possui políticas separadas para `SELECT`, `INSERT`, `UPDATE` e `DELETE`, sempre com:

```sql
(select auth.uid()) = user_id
```

Para `INSERT` e `UPDATE`, a mesma condição também é aplicada em `WITH CHECK`. O papel `anon` não recebe privilégios nas tabelas pessoais. `authenticated` recebe somente `SELECT`, `INSERT`, `UPDATE` e `DELETE`; a política ainda valida a propriedade de cada linha.

Filtros React melhoram a interface, mas não são considerados barreira de segurança.

## Offline e fila de sincronização

Cada alteração autenticada grava um marcador `rincao:syncPending:user:<UUID>`. A sincronização ocorre após um pequeno debounce, por solicitação manual ou no evento `online`.

Se a operação falhar:

- o estado local permanece intacto;
- o marcador pendente continua;
- a interface informa que a sincronização ocorrerá quando a conexão voltar.

O Service Worker versão 2 usa rede primeiro para navegação e arquivos mutáveis, cache primeiro apenas para assets Vite com hash. Caches antigos do projeto são removidos na ativação, preservando o uso offline sem manter indefinidamente JS antigo.

## Recomendação inicial

O dashboard prioriza temas por regras locais, sem IA ou API paga:

- alta: pelo menos 3 tentativas e menos de 60% de acertos;
- média: pelo menos 3 tentativas e 60% a 75%;
- revisão: revisão vencida;
- sugestão: erro recente com amostra pequena ou aula não concluída.

Erros recentes e proximidade da prova aumentam a pontuação. Uma única resposta nunca gera uma conclusão forte.

## Limites e custo

O projeto usa o plano gratuito do Supabase e o GitHub Pages gratuito. Não há billing, cartão, upgrade, API paga, domínio pago, Edge Function ou backend adicional. Os limites do plano Free devem ser acompanhados no painel do Supabase; ao se aproximar de algum limite, a resposta segura é manter o modo local e avaliar otimizações, nunca habilitar cobrança automaticamente.

## Manutenção

Antes de publicar mudanças:

1. criar migração pelo Supabase CLI para qualquer DDL;
2. revisar RLS, políticas e grants;
3. executar advisors de segurança e desempenho;
4. rodar `pnpm check`;
5. procurar segredos e arquivos locais;
6. testar visitante, troca de contas, offline/online e produção.

Conteúdo editorial não deve ser inserido nessas tabelas. Questões compartilhadas usam `cargoIds[]`; o campo legado `cargoId` existe apenas para leitura compatível.
