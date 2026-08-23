# Integração editorial estática

## Fluxo

O Google Drive é a fonte editorial. Durante uma atualização autorizada, o pacote é validado e copiado para `src/content/lote-NNN/`. O build do Vite incorpora esses arquivos à aplicação. O site publicado não consulta o Drive em tempo de execução.

## Lote 002 — Fonema

- pacote: `rincao-2026-lote-002-portugues-medio-fonema`;
- aula editorial: `medio-portugues-fonema-001`;
- ID local preservado: `mp-fonema`;
- cargos: Agente Administrativo e Monitor de Educação;
- conteúdo: Markdown integral com frontmatter, 27 seções de nível 2 e 653 linhas no arquivo importado;
- questões: 10 inéditas — estilo INEPAM, IDs `q-inedita-medio-portugues-0006` a `q-inedita-medio-portugues-0015`;
- referências reais: cinco análises documentais, exibidas apenas como evidência pedagógica e não cadastradas como questões reais do banco.

O ID local continua sendo usado por progresso, favoritos e revisões. O ID editorial é armazenado como metadado do tópico. Essa associação evita perder dados atuais e permite que pacotes futuros mantenham sua rastreabilidade própria.

## Renderização

O arquivo Markdown é importado com `?raw`, processado localmente e renderizado com suporte a tabelas GFM. O frontmatter aparece em um quadro de identificação; o corpo integral permanece visível. Um índice interno usa rolagem na própria rota do `HashRouter`, sem alterar o hash de navegação. Links oficiais do `sources.json` são apresentados ao final.

## Questões e simulados

As questões editoriais são convertidas em `Question` sem mudar seus IDs. O mapeamento de cargos é:

- `agente-administrativo` → `agente`;
- `monitor-educacao` → `monitor`.

As antigas questões genéricas de Fonema deixaram de ser exibidas no banco e foram substituídas pelas dez questões editoriais. Registros locais de respostas não são apagados. O banco passa a ter 98 questões ativas, enquanto cada simulado continua selecionando exatamente 10 de Português, 5 de Matemática e 15 de Conhecimentos Específicos.

## Validação de pacotes futuros

Antes de integrar outro lote:

1. conferir `manifest.json`, IDs, cargos e disciplina;
2. preservar o ID local já usado pelo progresso ou declarar uma migração explícita;
3. importar Markdown e arquivos de rastreabilidade sem resumir o conteúdo;
4. cadastrar como real somente questão com origem e conteúdo integralmente comprovados;
5. validar leitura desktop e móvel, tabelas, links, banco de questões, simulado e PWA;
6. atualizar o cache do service worker e executar lint, testes e build; abas já controladas recarregam uma vez quando a nova versão assume o controle.
