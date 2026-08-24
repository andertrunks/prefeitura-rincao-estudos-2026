# Rincão Estudos 2026

Plataforma pública, gratuita e static-first para o Concurso Público nº 001/2026 da Prefeitura de Rincão-SP, destinada exclusivamente a Monitor de Educação, Agente Administrativo e Ajudante Geral.

**Site público:** [acessar a plataforma](https://andertrunks.github.io/prefeitura-rincao-estudos-2026/)

![Tela móvel da plataforma](docs/preview-mobile.png)

## Recursos

- conteúdo rastreado por página e item do edital;
- cobertura estrutural de 74 tópicos para Monitor, 76 para Agente e 36 para Ajudante;
- aulas divididas por cargo, disciplina e tópico;
- banco editorial com 713 questões: 702 inéditas — estilo INEPAM e 11 reais com origem catalogada;
- simulados com 30 questões na distribuição 10/5/15;
- modos prova e estudo;
- Caderno de Erros, favoritos, revisões e estatísticas;
- dados locais em IndexedDB/LocalStorage;
- cadastro opcional e login com Google pelo Supabase Auth;
- sincronização offline-first e isolamento `guest` / `user:<UUID>`;
- importação assistida do progresso de visitante;
- recomendações locais baseadas em desempenho, sem IA paga;
- exportação e importação de backup;
- PWA com suporte offline;
- 89 aulas editoriais completas importadas estaticamente de pacotes versionados, com Markdown navegável e fontes rastreáveis;
- preparação específica para a prova prática do Ajudante Geral;
- publicação gratuita pelo GitHub Pages.

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm test
pnpm check
pnpm build
```

O mapa auditado e a cobertura tópico a tópico ficam em [`docs/MAPA-MESTRE-DO-EDITAL.md`](docs/MAPA-MESTRE-DO-EDITAL.md) e [`docs/cobertura-edital.md`](docs/cobertura-edital.md). A arquitetura de autenticação, RLS, namespaces e conflitos está em [`docs/AUTENTICACAO-E-SINCRONIZACAO.md`](docs/AUTENTICACAO-E-SINCRONIZACAO.md). O fluxo de pacotes de conteúdo está em [`docs/INTEGRACAO-EDITORIAL.md`](docs/INTEGRACAO-EDITORIAL.md).

## Fontes e limites

O edital é a fonte primária. Textos legais apontam para fontes oficiais. Nenhuma questão é apresentada como real da INEPAM sem caderno integral e gabarito verificáveis. A plataforma não é oficial e o candidato deve acompanhar retificações e convocações nos canais da Prefeitura e da banca.

## Licença

O código é disponibilizado sob a licença MIT. Essa licença não concede direito de republicação de conteúdo de terceiros, provas, textos protegidos ou documentos oficiais além das permissões legais aplicáveis.
