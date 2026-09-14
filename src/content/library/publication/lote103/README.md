# Lote 103 — Contrato global de publicação

Status: **APROVADO PARA INTEGRAÇÃO PELO CHATGPT WORK**

Data de geração: 06/09/2026  
Timezone: America/Sao_Paulo

## Conteúdo consolidado

- 90 itens canônicos de cobertura, todos `concluido`.
- 107 aulas canônicas publicáveis.
- 1 alias editorial não publicável (`MON-ESP-018` → `MON-ESP-004`).
- 1.792 questões únicas:
  - 11 `real_inepam`;
  - 1.781 `inedita_estilo_inepam`.
- 499 registros de fontes, sem `sourceRef` órfão.
- 3 simulados completos de 30 questões, 180 minutos.
- 21 eventos de calendário.
- 1 notícia oficial.
- 1 rerratificação auditada sem impacto nos três cargos.

## Arquivos

- `manifest.json`
- `cobertura-edital.json`
- `lesson-index.json`
- `questions.json`
- `simulations.json`
- `sources.json`
- `calendar.json`
- `news.json`
- `rectifications.json`
- `auditoria-contrato-publicacao-lote-103-001.json`

## Instruções ao ChatGPT Work

1. Não reescrever o conteúdo editorial.
2. Preservar todos os IDs.
3. Importar os JSONs como dados estáticos versionados.
4. Usar `lesson-index.json` para resolver os 107 mestres publicáveis.
5. Não publicar o arquivo-alias `monitor-especificos-diretrizes-bases-educacao-nacional-001.md` como segunda aula; direcionar `MON-ESP-018` para `monitor-especificos-ldb-001`.
6. Manter questões `ajudante-pratica` fora dos simulados objetivos.
7. Executar validação de conteúdo, testes, build e verificação da PWA antes do deploy.
8. Invalidar corretamente cache/service worker na publicação.
9. Não buscar Google Drive em runtime.
10. Caso encontre divergência editorial, interromper a integração daquele item e devolver para revisão; não corrigir silenciosamente.

## Rerratificação

A página oficial da INEPAM foi reconferida em 06/09/2026 e continua listando somente o Edital de Abertura e uma Rerratificação. A auditoria do projeto concluiu impacto **nenhum** para Agente Administrativo, Monitor de Educação e Ajudante Geral.

A data exata de publicação do anexo de rerratificação não foi recuperada com segurança. O pacote preserva `publishedAt: null` e registra essa incerteza explicitamente, em vez de inventar uma data.
