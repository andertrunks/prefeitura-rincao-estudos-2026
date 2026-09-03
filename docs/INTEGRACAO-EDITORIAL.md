# Integração editorial estática

## Fluxo

Google Drive é a fonte editorial. Durante uma integração autorizada, os arquivos canônicos são auditados e copiados para `src/content/library`. O site publicado não consulta o Drive em tempo de execução.

## Biblioteca atual

- 21 aulas completas de Português do Ensino Médio;
- 13 aulas completas de Matemática do Ensino Médio;
- 4 aulas completas de Português do Ensino Fundamental;
- 5 aulas completas de Matemática do Ensino Fundamental;
- 36 arquivos canônicos de Conhecimentos Específicos de Agente Administrativo, apresentados em 31 tópicos do site;
- 17 aulas canônicas de Conhecimentos Específicos de Monitor de Educação, cobrindo 19 itens estáveis e 30 tópicos do site;
- 15 aulas de Conhecimentos Específicos de Ajudante Geral;
- 1 módulo completo de preparação para a Prova Prática de Ajudante Geral;
- 1.307 questões editoriais no banco interativo: 1.296 inéditas — estilo INEPAM e 11 reais com origem catalogada;
- fontes, calendário, notícias, rerratificações, manifesto e cobertura versionados no repositório.

Os arquivos Markdown são carregados estaticamente pelo Vite. O frontmatter permanece disponível para rastreabilidade, mas é removido da apresentação ao estudante.

## IDs e compatibilidade

O ID do arquivo editorial e o `stableItemId` nunca dependem do título ou do caminho. Os IDs locais já usados por progresso e sincronização foram preservados. Quando uma aula editorial cobre mais de um ID local antigo, todos os aliases apontam para a mesma aula e a lista mostra apenas uma entrada.

## Duplicatas do Drive

Duplicatas históricas não são removidas do Drive durante a integração. A publicação seleciona uma única versão canônica por ID editorial. Nesta versão, Pronome usa o arquivo mais recente da pasta canônica de Português.

## Questões

O banco canônico importado contém 1.307 questões, todas com A–E, uma resposta correta e comentário. As 1.296 inéditas permanecem identificadas como **QUESTÃO INÉDITA — ESTILO INEPAM**. As 11 questões classificadas como reais possuem origem catalogada; referências parciais analisadas apenas no Markdown não são promovidas automaticamente ao banco.

O mestre consolidado de Arquivo mantém um alias para o antigo vínculo `agente-especificos-nocoes-arquivo-001`. Em Monitor, `MON-ESP-018` reutiliza a aula e as questões de `MON-ESP-004`, preservando a cobertura 1:1 sem criar uma cópia da LDB.

## Portão documental

Nenhum deploy editorial é liberado antes da leitura integral do edital e de todas as retificações conhecidas. Em 02/09/2026, a página oficial continuava exibindo apenas a rerratificação de 13/08/2026 (`idAnexo=2681`), já auditada integralmente e sem impacto nos três cargos do projeto.

## Conteúdo pendente

Itens sem pacote canônico completo aparecem como **Conteúdo em preparação**. Eles continuam mapeados internamente, mas não são apresentados como aula concluída. No fluxo editorial atualizado de Agente Administrativo, Informática está produzida até PowerPoint; Outlook, Adobe Reader e Internet aguardam os próximos lotes, embora as versões anteriores do site permaneçam preservadas até a substituição segura.
