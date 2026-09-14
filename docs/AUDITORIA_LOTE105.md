# Auditoria de integração — Lote 105

Verificação: 13/09/2026. Branch: `main`. Base remota e local: `0a1e3395fda0c91dbcb6ddea37d24bf34c938fe4`.

## Documento oficial

Página da INEPAM: https://app.inepam.org.br/concurso/concursoPaginaInterna.do?idConcurso=2&idInstituicao=94

PDF recuperado diretamente do link `data-href` da página oficial: https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2774

SHA-256: `c66c7f7db1ab586f2069f87bf3e8c2defc01ae246de8ad9c10cb3ec81e6661f2`.

O PDF tem uma página, lida integralmente e renderizada para conferência visual. Data: 11/09/2026. Acrescenta o item 2.2.2.1 (distribuição por períodos), altera o item 4.9 (prova de 27/09/2026 e fechamento dos portões) e ratifica os demais itens. Agente Administrativo e Ajudante Geral: primeiro período, 08h00. Monitor de Educação: segundo período, 13h00. Nenhuma alteração de conteúdo programático, requisitos, distribuição de questões ou prova prática.

### Divergência na transcrição, sem impacto nos três cargos

A transcrição aprovada coloca Vigilante Patrimonial no segundo período. A tabela do PDF oficial coloca esse cargo no primeiro período. O cargo não integra o site; os três cargos do projeto estão corretos. O arquivo original foi preservado integralmente para rastreabilidade; a divergência deve voltar à revisão editorial, não ser corrigida silenciosamente.

## Pacote estático

Os oito arquivos foram importados sem alteração em `src/content/library/publication/lote105/`. Os sete hashes declarados no manifesto foram conferidos. O manifesto do patch é mantido separado do manifesto de aulas: substituí-lo cegamente eliminaria o índice `lessons` exigido pela aplicação.

Calendário, notícias e retificações são consumidos pelo adaptador `src/content/publication.ts`. Os documentos originais de auditoria/transcrição/manifesto/fontes continuam disponíveis para rastreabilidade e não são exibidos como instruções técnicas ao estudante.

## Conciliação da base editorial — autorizada e integrada

O usuário autorizou integrar os Lotes 103 e 104 antes do 105. Os pacotes originais estão versionados separadamente. O índice aprovado seleciona 107 aulas já existentes; cinco agregadores históricos deixam de aparecer no catálogo, mas seus arquivos e identificadores são preservados. O banco publicado passa a conter as 1.792 questões aprovadas e os três simulados canônicos. Questões antigas continuam consultáveis para históricos, erros e favoritos. Aulas Markdown não foram reescritas. A cobertura aprovada possui 90 itens vinculados a aulas existentes; os testes conferem os vínculos.

Pendência editorial: 28 questões do pacote possuem apenas gabarito ou comentário não recuperável da aula correspondente. A integração não inventa explicações: preserva a resposta e orienta consultar a aula. A transcrição divergente de Vigilante Patrimonial também permanece registrada para revisão, sem impacto nos três cargos atendidos.

### Diagnóstico anterior, preservado como histórico

O README do Lote 105 exige aplicação após os Lotes 103 e 104. O README do Lote 103 descreve 90 itens, 107 aulas, 1.792 questões e três simulados canônicos. A base publicada real, confirmada por `git fetch origin`, possui 112 aulas, 1.307 questões e zero pacotes de simulados canônicos (há gerador funcional de simulados 10/5/15 para os três cargos).

Aulas, questões, cobertura, IDs, aliases e simulados atuais não foram alterados. Não é correto declarar que 107/1.792/3 permaneceram inalterados: essa base ainda não está no repositório. Foi solicitada decisão entre integrar também a base aprovada dos Lotes 103/104 ou publicar somente os dados operacionais e Analytics preservando o acervo atual.

Publicação conjunta pendente dessa conciliação. Não declarar versão global 1.0.2 nem validação pública concluída apenas pelo número no manifesto do patch.
