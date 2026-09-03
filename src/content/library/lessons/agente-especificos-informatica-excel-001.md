---
id: agente-especificos-informatica-excel-001
stableItemId: AGE-ESP-011-05
parentStableItemId: AGE-ESP-011
cargoIds:
  - agente-administrativo
nivel: ensino-medio
disciplinaId: agente-especificos
siteTopicIds:
  - aa-excel
temaId: microsoft-excel
titulo: "Microsoft Excel — células, fórmulas, referências, funções, filtros e gráficos"
editalRefs:
  - "Anexo II — Agente Administrativo — Informática: Pacote Office 2010 ou versão mais recente, incluindo Microsoft Excel."
status: questoes_adicionadas
versao: "0.3.0"
revisadoEm: "2026-09-01"
sourceRefs:
  - src-edital-rincao-2026
  - src-inepam-rincao-pagina
  - src-microsoft-excel-basic-tasks
  - src-microsoft-excel-formulas-overview
  - src-microsoft-excel-sum
  - src-microsoft-excel-average
  - src-microsoft-excel-if
  - src-microsoft-excel-index
  - src-microsoft-excel-sort
  - src-microsoft-excel-chart
  - src-microsoft-excel-freeze-panes
  - src-microsoft-excel-lock-cells
  - src-microsoft-excel-file-formats
  - src-inepam-clementina-001-2026-recursos
  - src-inepam-crea-mt-001-2025-recursos
  - src-inepam-santa-rita-001-2022-recursos
  - src-inepam-orindiuva-001-2026-edital
---

# Microsoft Excel — células, fórmulas, referências, funções, filtros e gráficos

## 1. Identificação e referência ao edital

**Cargo:** Agente Administrativo  
**Disciplina:** Conhecimentos Específicos — Informática  
**Item estável:** `AGE-ESP-011-05`  
**Tópico do site:** `aa-excel`  
**Item-pai:** `AGE-ESP-011 — Informática`

### EXIGÊNCIA DO EDITAL

O edital de Rincão nº 001/2026 inclui o **Pacote Office 2010 ou versão mais recente**, abrangendo o **Microsoft Excel**. Portanto, a preparação deve contemplar recursos clássicos que existem no Excel 2010 e continuam presentes nas versões atuais, sem transformar funções introduzidas apenas em versões recentes em conteúdo obrigatório.

A página oficial do concurso foi novamente verificada em 01/09/2026 e continua exibindo **Edital Concurso Público nº 001/2026** e **Rerratificação do Edital de Abertura**, sem nova retificação publicada até a verificação deste lote.

### REGRA DE VERSÃO

O edital aceita Excel 2010 **ou mais recente**. Assim:
- recursos tradicionais, como células, fórmulas, SOMA, MÉDIA, SE, referências relativas/absolutas, classificação, filtro, gráficos e proteção, são núcleo seguro;
- recursos de versões mais novas podem aparecer apenas como observação;
- se uma questão real indicar uma versão específica, vale o comportamento daquela versão.

---

## 2. O que o edital cobra

Para fins de prova, o estudo de Excel deve priorizar:

1. pasta de trabalho e planilha;
2. linhas, colunas, células e intervalos;
3. entrada e edição de dados;
4. fórmulas e operadores;
5. ordem de precedência;
6. referências relativas, absolutas e mistas;
7. funções fundamentais, especialmente `SOMA`, `MÉDIA`, `MÁXIMO`, `MÍNIMO`, `CONT.NÚM` e `SE`;
8. classificação e filtro;
9. criação e interpretação básica de gráficos;
10. congelamento de painéis;
11. proteção de células, planilhas e fórmulas;
12. formatos de arquivo, com destaque para `.xlsx`;
13. interpretação de comandos e caminhos da interface.

### EXPLICAÇÃO PEDAGÓGICA

Não é necessário estudar Excel como analista de dados avançado. O foco é dominar operações administrativas: listas de protocolos, controles de estoque, cadastros, consolidação simples de valores, percentuais, filtros, relatórios e apresentação visual de dados.

---

## 3. Objetivos da aula

Ao final, você deverá conseguir:

- identificar corretamente célula, linha, coluna, intervalo, planilha e pasta de trabalho;
- montar fórmulas simples;
- reconhecer a precedência de operadores;
- usar funções fundamentais;
- prever o que acontece ao copiar fórmulas;
- diferenciar referências relativa, absoluta e mista;
- distinguir **classificar** de **filtrar**;
- reconhecer procedimentos básicos para criar gráficos;
- compreender proteção de fórmulas e liberação de células editáveis;
- identificar `.xlsx` como formato padrão moderno de pasta de trabalho sem macros;
- resolver questões objetivas com linguagem típica de concursos.

---

## 4. Explicação completa e didática

### 4.1 Pasta de trabalho x planilha

**Pasta de trabalho** é o arquivo do Excel.  
Exemplo: `controle_protocolos.xlsx`.

Dentro dessa pasta podem existir várias **planilhas**:
- Janeiro;
- Fevereiro;
- Março;
- Resumo.

Pegadinha comum: chamar o arquivo inteiro de “planilha” é frequente no uso cotidiano, mas tecnicamente a pasta de trabalho pode conter várias planilhas.

### 4.2 Linhas, colunas e células

- **linhas**: identificadas por números;
- **colunas**: identificadas por letras;
- **célula**: interseção entre coluna e linha.

Exemplos:
- `A1` = coluna A, linha 1;
- `C7` = coluna C, linha 7;
- `AA10` = coluna AA, linha 10.

### 4.3 Intervalos

Um intervalo contínuo usa dois-pontos:

`A1:C5`

Significa o retângulo que começa em A1 e termina em C5.

`B2:B10` significa somente a coluna B, da linha 2 à 10.

### 4.4 Fórmulas

Em situações usuais, a fórmula começa por `=`.

Exemplos:

`=A1+B1`

`=B2*C2`

`=(B2*C2)-D2`

A Microsoft documenta que o sinal de igual informa ao Excel que o conteúdo seguinte constitui uma fórmula.

### 4.5 Operadores aritméticos

Principais:
- `+` adição;
- `-` subtração;
- `*` multiplicação;
- `/` divisão;
- `^` exponenciação;
- `%` porcentagem.

### 4.6 Precedência

O Excel segue uma ordem de cálculo. Parênteses podem ser usados para controlar explicitamente a operação desejada.

Exemplo:

`=10+2*3`

A multiplicação ocorre antes da soma.

Resultado: `16`.

Já:

`=(10+2)*3`

Resultado: `36`.

### 4.7 Porcentagem

Se B2 contém `1000` e C2 contém `5%`:

`=B2*C2`

retorna `50`.

É diferente de digitar `5` sem formato percentual: nesse caso, multiplicar 1000 por 5 produziria 5000.

### 4.8 Função SOMA

A documentação da Microsoft apresenta a sintaxe:

`SOMA(número1; [número2]; ...)`

Exemplo:

`=SOMA(B2:B10)`

Soma os valores de B2 até B10.

### 4.9 Função MÉDIA

Retorna a média aritmética dos argumentos.

Exemplo:

`=MÉDIA(C2:C6)`

Se os valores forem 6, 7, 8, 9 e 10, a média será 8.

### 4.10 MÁXIMO e MÍNIMO

- `MÁXIMO` retorna o maior valor;
- `MÍNIMO` retorna o menor valor.

Em uma relação de tempos de atendimento, `MÁXIMO` pode indicar o maior tempo e `MÍNIMO`, o menor.

### 4.11 CONT.NÚM

Conta células que contêm números.

Não deve ser confundida com contagem de todas as células preenchidas.

### 4.12 Função SE

A função `SE` realiza um teste lógico e retorna um resultado se a condição for verdadeira e outro se for falsa.

Exemplo didático:

`=SE(B2>=60;"Aprovado";"Reprovado")`

Em algumas instalações/configurações regionais, o separador de argumentos pode aparecer diferente. Em prova, respeite a sintaxe exibida no enunciado e a localização informada.

### 4.13 Referência relativa

`A1` é relativa.

Se em C2 houver:

`=A2+B2`

e a fórmula for copiada para C3, normalmente ela se ajusta para:

`=A3+B3`

### 4.14 Referência absoluta

`$A$1` fixa coluna e linha.

Exemplo: uma taxa está em F1 e deve permanecer fixa ao copiar a fórmula:

`=B2*$F$1`

Ao copiar para baixo, B2 pode virar B3, B4 etc., mas `$F$1` permanece.

### 4.15 Referências mistas

- `$A1` fixa a coluna A, mas permite mudança da linha;
- `A$1` fixa a linha 1, mas permite mudança da coluna.

Questões podem pedir exatamente qual parte ficará fixa.

### 4.16 Referência a outra planilha

O Excel usa `!` para separar o nome da planilha da referência.

Exemplo:

`=Janeiro!B2`

Se o nome da planilha tiver espaço, pode ser necessário usar aspas simples:

`='Receita Janeiro'!B2`

### 4.17 Classificar

**Classificar** reorganiza os registros.

Exemplos:
- A a Z;
- Z a A;
- menor para maior;
- maior para menor;
- mais antigo para mais recente.

Ao classificar uma tabela administrativa, deve-se preservar a integridade das linhas. Reordenar apenas uma coluna isoladamente, sem considerar o restante do registro, pode desassociar nome, CPF, data e situação.

### 4.18 Filtrar

**Filtrar** restringe quais registros ficam visíveis segundo critérios.

Exemplo: mostrar apenas protocolos com situação “Pendente”.

O filtro não significa, por si só, apagar as linhas que não atendem ao critério.

### 4.19 Filtro x função FILTRO

Há diferença entre:
- o **comando de filtro** da guia Dados, presente há várias versões;
- a **função FILTRO**, associada a versões mais recentes com matrizes dinâmicas.

Como o edital admite Excel 2010 ou mais recente, o comando tradicional **Filtrar** é núcleo obrigatório. A função FILTRO moderna não deve ser tratada como se existisse no Excel 2010.

### 4.20 Gráficos

A Microsoft orienta, nas versões atuais, selecionar os dados e usar **Inserir → Gráficos Recomendados** ou outro tipo de gráfico.

Elementos comuns:
- título;
- eixos;
- legenda;
- área de plotagem;
- rótulos;
- linhas de grade.

Tipos frequentes:
- colunas;
- barras;
- linhas;
- pizza/setores;
- dispersão.

O gráfico deve representar adequadamente os dados; ele não substitui a tabela-fonte.

### 4.21 Congelar Painéis

Serve para manter linhas e/ou colunas visíveis durante a rolagem.

Nas versões atuais, a Microsoft documenta o recurso na guia **Exibir → Congelar Painéis**.

Exemplo administrativo: manter os cabeçalhos “Nome / Matrícula / Setor / Situação” visíveis em uma lista extensa.

### 4.22 Proteção de células e fórmulas

A Microsoft informa que células podem ser marcadas como bloqueadas, mas o bloqueio passa a produzir efeito quando a planilha é protegida.

Para permitir edição apenas em campos específicos:

1. identificar as células que devem continuar editáveis;
2. desbloquear essas células;
3. manter bloqueadas as células que contêm fórmulas;
4. proteger a planilha.

**Importante:** proteção de planilha não é sinônimo de criptografar o arquivo inteiro.

### 4.23 Formato `.xlsx`

A documentação oficial da Microsoft registra `.xlsx` como formato padrão baseado em XML para pasta de trabalho do Excel das versões modernas abrangidas pelo edital.

`.xlsx` não armazena código VBA. Para pasta com macros, existe `.xlsm`.

---

## 5. Conceitos e regras essenciais

| Conceito | Regra |
|---|---|
| Pasta de trabalho | arquivo do Excel |
| Planilha | folha dentro da pasta |
| Célula | interseção linha/coluna |
| Intervalo | conjunto de células, ex. `A1:C5` |
| Fórmula | normalmente inicia com `=` |
| Referência relativa | ajusta ao copiar, ex. `A1` |
| Referência absoluta | permanece fixa, ex. `$A$1` |
| Referência mista | fixa só linha ou coluna |
| SOMA | totaliza valores |
| MÉDIA | média aritmética |
| SE | teste lógico |
| Classificar | reordena registros |
| Filtrar | restringe a exibição segundo critérios |
| Congelar Painéis | mantém parte da planilha visível ao rolar |
| `.xlsx` | formato padrão moderno sem VBA |

### Regra editorial de versão

Não transforme recursos novos em requisito do Excel 2010. O conteúdo central deve permanecer compatível com a faixa “2010 ou mais recente”.

---

## 6. Exemplos resolvidos e situações práticas

### Exemplo 1 — total de despesas

Valores em B2:B6:
- 120;
- 80;
- 150;
- 50;
- 100.

Fórmula:

`=SOMA(B2:B6)`

Resultado: **500**.

### Exemplo 2 — média de atendimentos

Valores: 20, 30, 40, 50.

`=MÉDIA(C2:C5)`

Soma = 140.  
Quantidade = 4.  
Média = **35**.

### Exemplo 3 — referência absoluta

B2 contém valor do material: `200`.  
F1 contém taxa: `10%`.

Em C2:

`=B2*$F$1`

Resultado = `20`.

Copiando para C3, a referência de B muda conforme a linha, mas `$F$1` continua fixa.

### Exemplo 4 — referência mista

Em uma tabela em que a linha 1 contém percentuais e a coluna A contém valores-base, pode ser necessário fixar apenas a linha do percentual:

`=A2*B$1`

Ao copiar para a direita, B pode mudar para C, D etc.; a linha `1` continua fixa.

### Exemplo 5 — filtro

Uma planilha contém 500 protocolos. O servidor quer visualizar apenas os registros “Pendente”.

Aplicar filtro à coluna Situação e selecionar “Pendente” apenas oculta temporariamente os demais registros da visualização. Eles não foram excluídos.

### Exemplo 6 — proteção

Uma planilha de solicitação possui:
- B2:B8 = campos de entrada;
- C2:C8 = fórmulas.

Procedimento adequado:
1. desbloquear B2:B8;
2. manter C2:C8 bloqueado;
3. proteger a planilha.

O usuário pode preencher os campos, enquanto as fórmulas permanecem protegidas.

---

## 7. Como a INEPAM cobra o tema — somente com evidência

### QUESTÃO REAL — INEPAM parcialmente documentada 1
**Clementina/SP — Concurso Público nº 001/2026**  
**Cargo:** Oficial Administrativo  
**Questão:** 29

O julgamento oficial registra que a alternativa **D** descrevia corretamente o procedimento do Microsoft Excel para **proteger fórmulas e permitir edição apenas em células específicas**. O recurso foi indeferido.

**PADRÃO OBSERVADO EM PROVA REAL:** situação operacional do Excel, com necessidade de compreender a relação entre células bloqueadas/desbloqueadas e proteção da planilha.

**Limite documental:** o julgamento não reproduz todas as alternativas; portanto, a questão não é apresentada integralmente nem reconstruída.

### QUESTÃO REAL — INEPAM parcialmente documentada 2
**CREA/MT — Concurso Público nº 001/2025**  
**Cargo:** Assistente Administrativo  
**Questão:** 45

O julgamento oficial explica que a função `ÍNDICE` retorna diretamente um valor de uma matriz conforme números de linha e coluna, enquanto `DESLOC` retorna uma referência. O gabarito oficial permaneceu **B — ÍNDICE**.

**PADRÃO OBSERVADO EM PROVA REAL:** comparação conceitual entre funções e atenção ao verbo do enunciado — “retornar o valor” versus “retornar uma referência”.

**Limite documental:** não há caderno integral no documento de julgamento; alternativas ausentes não são reconstruídas.

### QUESTÃO REAL — INEPAM parcialmente documentada 3
**Santa Rita do Passa Quatro/SP — Processo Seletivo nº 01/2022**  
**Cargos:** Auxiliar de Farmácia e Recepcionista  
**Questão:** 21

O julgamento oficial declara que um documento do tipo “Planilha do Microsoft Excel” tem extensão **`.xlsx`** e altera o gabarito para a alternativa **D**.

**PADRÃO OBSERVADO EM PROVA REAL:** associação direta entre aplicativo/tipo de documento e extensão de arquivo.

**Limite editorial:** é evidência de mesmo tema e banca, porém cargos diferentes do alvo; tem peso menor do que os exemplos administrativos.

### EVIDÊNCIA OFICIAL DE ESCOPO
No edital de Orindiúva/SP nº 001/2026, para **Assistente Administrativo**, a INEPAM explicitou Office 365 com Microsoft Excel e operações básicas, incluindo **fórmulas elementares (SOMA, MÉDIA)** e **gráficos básicos**.

Isso não é questão real; é apenas evidência oficial de que esses conteúdos continuam presentes em editais recentes da banca para área administrativa.

### INFERÊNCIA EDITORIAL

Com base apenas nos documentos oficiais acima, é razoável treinar:
- conceitos de fórmulas;
- referências;
- funções clássicas;
- proteção;
- formatos;
- filtros/classificação;
- gráficos básicos.

Não há base para afirmar que uma função específica será cobrada em Rincão.

---

## 8. Pegadinhas e erros frequentes

1. **Pasta de trabalho ≠ planilha.**
2. `C7` = coluna C, linha 7.
3. `A1` e `$A$1` não se comportam da mesma maneira ao copiar.
4. `$A1` e `A$1` são referências mistas diferentes.
5. **Filtrar ≠ excluir.**
6. **Classificar ≠ filtrar.**
7. `SOMA` ≠ `MÉDIA`.
8. `MÁXIMO` retorna o maior valor, não a soma.
9. Uma célula “bloqueada” só fica efetivamente protegida quando a proteção correspondente é aplicada.
10. Proteger planilha não é o mesmo que criptografar o arquivo.
11. `.xlsx` é diferente de `.xlsm`.
12. Salvar como CSV pode perder recursos/formatação e normalmente representa dados tabulares, não todas as características da pasta de trabalho.
13. Gráfico depende de dados-fonte.
14. A função moderna `FILTRO` não deve ser confundida com o comando tradicional de filtro disponível em versões antigas.
15. Nomes de funções e separadores podem variar conforme idioma/configuração regional; em questão real, observe o ambiente indicado.

---

## 9. Resumo

Para a prova:

- arquivo = pasta de trabalho;
- folha = planilha;
- coluna = letras;
- linha = números;
- célula = interseção;
- intervalo usa referências como `A1:C10`;
- fórmula normalmente começa com `=`;
- `SOMA` totaliza;
- `MÉDIA` calcula média aritmética;
- `SE` executa teste lógico;
- `A1` é relativa;
- `$A$1` é absoluta;
- `$A1` e `A$1` são mistas;
- classificar reorganiza;
- filtrar restringe visualização;
- gráficos representam dados visualmente;
- Congelar Painéis mantém linhas/colunas visíveis;
- proteção exige atenção às células bloqueadas/desbloqueadas;
- `.xlsx` é formato padrão moderno sem macro VBA.

---

## 10. Revisão rápida

Responda mentalmente:

1. O que é `B12`?
2. Qual a diferença entre pasta de trabalho e planilha?
3. Qual símbolo inicia uma fórmula?
4. Qual função soma B2:B20?
5. Qual função calcula a média?
6. Como se escreve uma referência absoluta a F1?
7. Em `$A3`, o que está fixo?
8. Em `A$3`, o que está fixo?
9. Filtrar elimina definitivamente as linhas?
10. Classificar muda a ordem dos registros?
11. Para que serve Congelar Painéis?
12. Como liberar campos de entrada e proteger fórmulas?
13. Qual extensão padrão moderna de pasta sem macro?

---

## 11. Flashcards

**O que é uma pasta de trabalho?**  
O arquivo do Excel.

**O que é uma planilha?**  
Uma folha dentro da pasta de trabalho.

**Como são identificadas as colunas?**  
Por letras.

**Como são identificadas as linhas?**  
Por números.

**O que significa `A1:C5`?**  
Intervalo contínuo entre A1 e C5.

**Como normalmente começa uma fórmula?**  
Com `=`.

**Qual função soma valores?**  
`SOMA`.

**Qual função calcula média aritmética?**  
`MÉDIA`.

**O que faz `SE`?**  
Testa uma condição e retorna resultados conforme verdadeiro/falso.

**Referência relativa?**  
`A1`.

**Referência absoluta?**  
`$A$1`.

**Referência mista com coluna fixa?**  
`$A1`.

**Referência mista com linha fixa?**  
`A$1`.

**Filtrar exclui dados?**  
Não necessariamente; normalmente restringe a exibição.

**Classificar faz o quê?**  
Reorganiza a ordem dos dados.

**Congelar Painéis?**  
Mantém determinadas linhas/colunas visíveis durante a rolagem.

**Formato padrão moderno sem macros?**  
`.xlsx`.

---

## 12. Questões de fixação — QUESTÕES INÉDITAS — ESTILO INEPAM

As questões abaixo são **criadas para treinamento** e não são questões reais da banca.

### Questão 1
Em uma planilha, a referência `D8` identifica:

A) linha D e coluna 8.  
B) coluna D e linha 8.  
C) intervalo entre D e 8.  
D) oitava planilha da pasta D.  
E) uma referência absoluta.

### Questão 2
Assinale a alternativa que apresenta corretamente a diferença entre pasta de trabalho e planilha:

A) São sinônimos técnicos obrigatórios.  
B) A planilha é o arquivo e a pasta de trabalho é uma única célula.  
C) A pasta de trabalho é o arquivo e pode conter uma ou mais planilhas.  
D) A pasta de trabalho só existe no Excel 365.  
E) Uma planilha sempre contém apenas uma coluna.

### Questão 3
Em uso normal do Excel, uma fórmula é iniciada por:

A) `#`  
B) `@`  
C) `=`  
D) `$`  
E) `&`

### Questão 4
Considere a fórmula `=10+2*3`. Sem parênteses adicionais, o resultado será:

A) 12  
B) 16  
C) 30  
D) 36  
E) 60

### Questão 5
Para somar os valores do intervalo B2:B10, a fórmula adequada é:

A) `=MÉDIA(B2:B10)`  
B) `=SE(B2:B10)`  
C) `=SOMA(B2:B10)`  
D) `=MÁXIMO(B2:B10)`  
E) `=CONT.NÚM(B2:B10)`

### Questão 6
A função usada para calcular a média aritmética dos valores em C2:C6 é:

A) SOMA  
B) MÉDIA  
C) MÍNIMO  
D) SE  
E) ÍNDICE

### Questão 7
A fórmula `=SE(B2>=60;"Aprovado";"Reprovado")` tem por finalidade principal:

A) ordenar B2.  
B) filtrar a planilha.  
C) testar uma condição e retornar um resultado conforme verdadeiro ou falso.  
D) transformar B2 em referência absoluta.  
E) criar um gráfico.

### Questão 8
Na célula C2 existe a fórmula `=A2+B2`. Ao copiá-la para C3, considerando referências relativas, ela tende a se tornar:

A) `=A2+B2`  
B) `=$A$2+$B$2`  
C) `=A3+B3`  
D) `=C2+C3`  
E) `=A1+B1`

### Questão 9
Qual referência mantém coluna e linha fixas ao copiar a fórmula?

A) `A1`  
B) `$A1`  
C) `A$1`  
D) `$A$1`  
E) `A:A`

### Questão 10
Na referência `$C5`, está fixada:

A) apenas a coluna C.  
B) apenas a linha 5.  
C) a coluna C e a linha 5.  
D) nenhuma parte.  
E) toda a planilha.

### Questão 11
Assinale a alternativa correta:

A) Filtrar sempre apaga os registros que não atendem ao critério.  
B) Classificar e filtrar são exatamente o mesmo comando.  
C) Classificar reorganiza a ordem dos registros; filtrar pode restringir quais registros ficam visíveis.  
D) Filtrar só funciona com números.  
E) Classificar necessariamente cria um gráfico.

### Questão 12
Ao aplicar um filtro para mostrar apenas protocolos com situação “Pendente”:

A) todos os demais registros são obrigatoriamente excluídos do arquivo.  
B) os registros não selecionados podem permanecer na planilha, mas ficar ocultos na visualização filtrada.  
C) as fórmulas são transformadas em texto.  
D) a pasta de trabalho passa a ser `.csv`.  
E) a planilha é automaticamente protegida.

### Questão 13
Nas versões atuais do Excel, um caminho documentado para iniciar a criação de gráfico a partir dos dados selecionados é:

A) Revisão → Ortografia.  
B) Inserir → Gráficos Recomendados.  
C) Exibir → Congelar Painéis.  
D) Dados → Remover Duplicatas exclusivamente.  
E) Arquivo → Imprimir.

### Questão 14
O recurso **Congelar Painéis** é utilizado principalmente para:

A) impedir a abertura do arquivo sem senha.  
B) manter linhas e/ou colunas visíveis enquanto se percorre outra área da planilha.  
C) converter fórmulas em valores.  
D) excluir linhas ocultas.  
E) bloquear macros.

### Questão 15
Uma planilha possui células de entrada que devem ser editáveis e células com fórmulas que não devem ser alteradas. A estratégia adequada é:

A) excluir as fórmulas antes de proteger.  
B) desbloquear as células de entrada, manter as fórmulas bloqueadas e proteger a planilha.  
C) salvar obrigatoriamente como `.txt`.  
D) aplicar apenas filtro automático.  
E) transformar todas as células em referências relativas.

### Questão 16
Segundo documentação oficial e julgamento real da INEPAM, a função que pode retornar diretamente o valor de um elemento de uma matriz conforme número de linha e coluna é:

A) DESLOC.  
B) ÍNDICE.  
C) FILTRO.  
D) SOMA.  
E) CONT.NÚM.

### Questão 17
A extensão padrão moderna de uma pasta de trabalho do Excel sem código VBA é:

A) `.docx`  
B) `.pptx`  
C) `.xlsx`  
D) `.exe`  
E) `.rtf`

### Questão 18
Em F1 há uma taxa fixa de 5%. Em B2 está um valor que mudará em cada linha. Para calcular B2 multiplicado pela taxa e copiar a fórmula para baixo mantendo a taxa fixa, a forma mais adequada é:

A) `=B2*F1`  
B) `=$B$2*F1`  
C) `=B2*$F$1`  
D) `=$B2*F2`  
E) `=B$2*F$2`

---

## 13. Gabarito comentado

1. **B** — `D8` significa coluna D, linha 8.  
2. **C** — a pasta de trabalho é o arquivo e contém planilhas.  
3. **C** — fórmulas normalmente começam com `=`.  
4. **B** — multiplicação antes da soma: 2×3=6; 10+6=16.  
5. **C** — `SOMA` totaliza o intervalo.  
6. **B** — `MÉDIA` retorna a média aritmética.  
7. **C** — `SE` executa teste lógico e escolhe o resultado.  
8. **C** — referências relativas acompanham o deslocamento.  
9. **D** — `$A$1` fixa coluna e linha.  
10. **A** — `$` antes da letra fixa a coluna C; a linha continua relativa.  
11. **C** — classificação reordena; filtro restringe a visualização.  
12. **B** — filtrar não equivale a excluir.  
13. **B** — a Microsoft documenta Inserir → Gráficos Recomendados nas versões atuais.  
14. **B** — Congelar Painéis mantém áreas visíveis durante rolagem.  
15. **B** — é o procedimento coerente com a proteção documentada pela Microsoft e evidenciada em prova da INEPAM.  
16. **B** — a função `ÍNDICE` possui forma que retorna valor de elemento conforme linha/coluna; a INEPAM manteve esse entendimento em julgamento oficial.  
17. **C** — `.xlsx` é formato padrão moderno sem VBA.  
18. **C** — B2 fica relativa e `$F$1` permanece absoluta.

---

## 14. Fontes

### Fonte de verdade do concurso
- Prefeitura de Rincão/SP — Concurso Público nº 001/2026 — edital e rerratificação, publicados na página oficial da INEPAM.
- Página oficial INEPAM do concurso de Rincão, verificada em 01/09/2026.

### Microsoft — documentação oficial
- Microsoft Support — Tarefas básicas no Excel.
- Microsoft Support — Visão geral de fórmulas no Excel.
- Microsoft Support — Função SOMA.
- Microsoft Support — Função MÉDIA.
- Microsoft Support — Função SE.
- Microsoft Support — Função ÍNDICE.
- Microsoft Support — Classificar dados em intervalo ou tabela.
- Microsoft Support — Criar um gráfico do início ao fim.
- Microsoft Support — Congelar painéis para bloquear linhas e colunas.
- Microsoft Support — Bloquear células para protegê-las no Excel.
- Microsoft Support — Formatos de arquivos com suporte no Excel.

### INEPAM — evidências oficiais
- Clementina/SP — Concurso Público nº 001/2026 — julgamento dos recursos, questão 29 de Informática para Oficial Administrativo.
- CREA/MT — Concurso Público nº 001/2025 — julgamento dos recursos, questão 45 de Excel para Assistente Administrativo.
- Santa Rita do Passa Quatro/SP — Processo Seletivo nº 01/2022 — julgamento dos recursos, questão 21 sobre `.xlsx`.
- Orindiúva/SP — Concurso Público nº 001/2026 — edital de abertura, conteúdo de Informática para Assistente Administrativo.

### Registro de captura dos PDFs
- Clementina 001/2026, julgamento, página PDF index 11: `cache_miss`; texto acessível; OCR não usado.
- CREA/MT 001/2025, julgamento, página PDF index 16: `cache_miss`; texto acessível; OCR não usado.
- Santa Rita do Passa Quatro 01/2022, julgamento, página PDF index 0: `cache_miss`; texto acessível; OCR não usado.
- Orindiúva 001/2026, edital, página PDF index 49: `cache_miss`; texto acessível; OCR não usado.

