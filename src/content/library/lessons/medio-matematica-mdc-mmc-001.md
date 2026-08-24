---
id: medio-matematica-mdc-mmc-001
stableItemId: MED-MAT-009
cargoIds:
  - agente-administrativo
  - monitor-educacao
nivel: ensino-medio
disciplinaId: medio-matematica
temaId: mdc-mmc
titulo: "MDC e MMC — divisibilidade, decomposição em primos e aplicações"
editalRef: "Anexo II — Conhecimentos Gerais — Cargos de Ensino Médio e Técnico — Matemática: MDC e MMC"
status: revisado
versao: "0.1.1"
revisadoEm: "2026-08-24"
sourceRefs:
  - src-edital-rincao-2026
  - src-inepam-rincao-concurso-001-2026-pagina
  - src-rincao-retificacao-001-2026
  - src-auditoria-rerratificacao-rincao-001-2026
  - src-inepam-campo-limpo-paulista-001-2026-recursos
  - src-inepam-adamantina-0001-2023-recursos
  - src-inepam-aguas-sao-pedro-001-2025-recursos
  - src-inepam-sao-sebastiao-rio-verde-001-2024-recursos
  - src-inepam-mongagua-001-2026-recursos
---

# MDC e MMC — divisibilidade, decomposição em primos e aplicações

## 1. Identificação e referência ao edital

Esta aula atende ao item **MDC e MMC**, previsto em Matemática para os cargos de **Agente Administrativo** e **Monitor de Educação** do Concurso Público nº 001/2026 da Prefeitura Municipal de Rincão-SP, banca INEPAM.

A aula é compartilhada pelos dois cargos por meio de `cargoIds[]`.

O tópico aparece expressamente no conteúdo programático de Matemática do edital. Para dominá-lo, é necessário compreender:

- múltiplos;
- divisores;
- números primos;
- decomposição em fatores primos;
- critérios básicos de divisibilidade;
- máximo divisor comum — MDC;
- mínimo múltiplo comum — MMC;
- aplicações em formação de grupos;
- aplicações em repartições iguais;
- aplicações em periodicidade;
- aplicações em sincronização de eventos;
- aplicações em tempo.

A pesquisa oficial da banca foi realizada antes da revisão final. Foram encontrados julgamentos da INEPAM que comprovam cobrança real de:

- MDC entre duas quantidades;
- formação do maior número possível de itens por pacote;
- MMC entre dois ciclos;
- MMC entre três ciclos;
- identificação do próximo reencontro entre eventos periódicos;
- conversão do MMC obtido em dias, semanas, horas e minutos.

Há evidência particularmente próxima do cargo de Rincão:

- **Campo Limpo Paulista/SP — Concurso Público nº 001/2026 — Assistente Administrativo**: questão de MMC entre 6 e 8;
- no mesmo julgamento, **Assistente Legislativo**: MDC entre 84 e 126.

> **Regra de ouro:**  
> **MDC** costuma aparecer quando o problema pede a **maior divisão possível em partes iguais**.  
> **MMC** costuma aparecer quando o problema pede o **primeiro momento em que ciclos voltarão a coincidir**.

### Situação editorial

O material está **revisado** para estudo. A rerratificação do Concurso Público nº 001/2026 de Rincão foi auditada em 23/08/2026 e classificada como **sem impacto** sobre este item, sobre os cargos deste projeto e sobre as questões desta aula. O bloqueio editorial específico relacionado à rerratificação está encerrado.

---

## 2. O que o edital cobra

Para dominar o tópico, você precisa saber:

1. reconhecer múltiplos;
2. reconhecer divisores;
3. identificar números primos;
4. decompor números em fatores primos;
5. aplicar critérios básicos de divisibilidade;
6. encontrar o MDC;
7. encontrar o MMC;
8. usar decomposição simultânea;
9. usar fatoração separada;
10. compreender a diferença conceitual entre MDC e MMC;
11. resolver problemas de agrupamento;
12. resolver problemas de repartição em partes iguais;
13. resolver problemas de periodicidade;
14. resolver problemas de sincronização;
15. trabalhar com unidades de tempo;
16. converter dias, semanas, horas, minutos e segundos;
17. conferir se o resultado é divisor comum ou múltiplo comum;
18. reconhecer quando usar MDC e quando usar MMC.

---

# PARTE I — MÚLTIPLOS E DIVISORES

## 3. Múltiplos

Os múltiplos de um número são obtidos multiplicando-o por números inteiros não negativos.

Múltiplos de 6:

`0, 6, 12, 18, 24, 30, 36, 42, ...`

Múltiplos de 8:

`0, 8, 16, 24, 32, 40, 48, ...`

O primeiro múltiplo positivo comum de 6 e 8 é:

`24`.

Logo:

`MMC(6,8)=24`.

---

## 4. Divisores

Um número `d` é divisor de `n` quando a divisão `n/d` é exata.

Divisores positivos de 12:

`1, 2, 3, 4, 6, 12`.

Divisores positivos de 18:

`1, 2, 3, 6, 9, 18`.

Divisores comuns:

`1,2,3,6`.

O maior deles é:

`6`.

Então:

`MDC(12,18)=6`.

---

# PARTE II — NÚMEROS PRIMOS

## 5. Número primo

É o número natural maior que 1 que possui exatamente dois divisores positivos:

- 1;
- ele próprio.

Primos iniciais:

`2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...`

### Atenção

`1` não é primo.

`2` é o único primo par.

---

# PARTE III — CRITÉRIOS DE DIVISIBILIDADE

## 6. Divisibilidade por 2

Um número é divisível por 2 quando termina em:

`0,2,4,6,8`.

Exemplo:

126 é divisível por 2.

---

## 7. Divisibilidade por 3

Some os algarismos.

126:

`1+2+6=9`.

Como 9 é divisível por 3:

126 também é.

---

## 8. Divisibilidade por 5

Termina em:

`0` ou `5`.

---

## 9. Divisibilidade por 10

Termina em:

`0`.

---

## 10. Divisibilidade por 4

Observe os dois últimos algarismos.

Exemplo:

`316`.

Como 16 é divisível por 4:

316 também é.

---

## 11. Divisibilidade por 9

Some os algarismos.

729:

`7+2+9=18`.

18 é divisível por 9.

Logo, 729 também é.

---

# PARTE IV — DECOMPOSIÇÃO EM FATORES PRIMOS

## 12. Exemplo: 84

Divida sucessivamente por primos:

`84 = 2·42`

`42 = 2·21`

`21 = 3·7`.

Logo:

`84 = 2²·3·7`.

---

## 13. Exemplo: 126

`126 = 2·63`

`63 = 3·21`

`21 = 3·7`.

Então:

`126 = 2·3²·7`.

---

# PARTE V — MDC

## 14. Conceito

MDC significa:

**Máximo Divisor Comum**.

É o maior número positivo que divide exatamente todos os números considerados.

---

## 15. MDC por lista de divisores

Exemplo:

MDC de 18 e 30.

Divisores de 18:

`1,2,3,6,9,18`.

Divisores de 30:

`1,2,3,5,6,10,15,30`.

Comuns:

`1,2,3,6`.

Maior:

`6`.

Logo:

`MDC(18,30)=6`.

---

## 16. MDC por fatores primos

Exemplo:

`84 = 2²·3·7`

`126 = 2·3²·7`.

Para o MDC, pegue somente os fatores comuns com o **menor expoente**:

- `2¹`;
- `3¹`;
- `7¹`.

Então:

`MDC(84,126)=2·3·7=42`.

---

## 17. Regra prática do MDC

Na fatoração:

> pegue somente os fatores que aparecem em todos os números, com o menor expoente.

---

# PARTE VI — MMC

## 18. Conceito

MMC significa:

**Mínimo Múltiplo Comum**.

É o menor múltiplo positivo comum a todos os números considerados.

---

## 19. MMC por lista

Múltiplos de 6:

`6,12,18,24,30,...`

Múltiplos de 8:

`8,16,24,32,...`

Primeiro comum:

`24`.

Então:

`MMC(6,8)=24`.

---

## 20. MMC por fatores primos

`6=2·3`

`8=2³`.

Para o MMC, use todos os fatores necessários com o **maior expoente**:

`2³·3`.

Então:

`MMC(6,8)=8·3=24`.

---

## 21. Regra prática do MMC

Na fatoração:

> pegue todos os fatores que aparecem, com o maior expoente necessário.

---

# PARTE VII — COMPARAÇÃO ENTRE MDC E MMC

## 22. Quadro rápido

| Pergunta do problema | Ferramenta provável |
|---|---|
| maior tamanho possível | MDC |
| maior número de itens por grupo igual | MDC |
| dividir sem sobrar | MDC |
| maior medida que cabe exatamente | MDC |
| primeiro reencontro | MMC |
| quando voltarão a coincidir | MMC |
| ciclos periódicos | MMC |
| menor tempo comum | MMC |
| menor quantidade múltipla de várias | MMC |

---

# PARTE VIII — DECOMPOSIÇÃO SIMULTÂNEA

## 23. Exemplo de MMC

Calcule:

`MMC(12,18)`.

Faça divisões por primos:

`12,18 | 2`
`6,9   | 2`
`3,9   | 3`
`1,3   | 3`
`1,1`

Multiplique os divisores usados:

`2·2·3·3=36`.

Logo:

`MMC(12,18)=36`.

---

## 24. Exemplo de MDC simultâneo

No MDC, multiplicamos apenas os primos que dividem **todos os números simultaneamente**.

Para:

`12` e `18`:

ambos dividem por 2:

`12,18 → 6,9`.

Agora 6 e 9 não são ambos divisíveis por 2.

Ambos são divisíveis por 3?

`6/3=2`

`9/3=3`.

Sim.

Multiplicamos:

`2·3=6`.

MDC = 6.

---

# PARTE IX — RELAÇÃO ENTRE MDC E MMC

## 25. Dois números positivos

Para dois inteiros positivos `a` e `b`:

`MDC(a,b) · MMC(a,b) = a·b`.

### Exemplo

`a=12`

`b=18`.

MDC:

`6`.

MMC:

`36`.

Produto:

`6·36=216`.

Também:

`12·18=216`.

A relação confere.

---

## 26. Uso como conferência

Se você encontrou:

`MDC(12,18)=6`

pode calcular:

`MMC = (12·18)/6`

`=216/6`

`=36`.

---

# PARTE X — APLICAÇÕES DE MDC

## 27. Formar grupos iguais

Temos:

112 lápis e 70 borrachas.

Queremos fazer pacotes com o **maior número possível de objetos de um único tipo em cada pacote**, mantendo todos os pacotes do mesmo tamanho e sem sobras.

Precisamos:

`MDC(112,70)`.

Fatorando:

`112 = 2⁴·7`.

`70 = 2·5·7`.

Comuns:

`2·7=14`.

Então:

cada pacote terá 14 objetos.

Lápis:

`112/14=8 pacotes`.

Borrachas:

`70/14=5 pacotes`.

Total:

`13 pacotes`.

Esse é um problema real documentado da INEPAM.

---

## 28. Cortar segmentos iguais

Duas cordas medem:

84 cm e 126 cm.

Queremos cortá-las em pedaços iguais, do **maior comprimento possível**, sem sobrar.

Usamos:

`MDC(84,126)=42`.

Cada pedaço terá:

42 cm.

---

# PARTE XI — APLICAÇÕES DE MMC

## 29. Dois ciclos

Uma atividade ocorre a cada 6 dias.

Outra ocorre a cada 8 dias.

Se ocorreram juntas hoje, voltarão a coincidir após:

`MMC(6,8)=24 dias`.

---

## 30. Três ciclos

Eventos ocorrem a cada:

40, 50 e 15 unidades de tempo.

Fatorações:

`40=2³·5`

`50=2·5²`

`15=3·5`.

MMC:

`2³·3·5²`

`=8·3·25`

`=600`.

Primeira coincidência após:

600 unidades de tempo.

---

# PARTE XII — TEMPO E PERIODICIDADE

## 31. Converter segundos

Se o MMC resulta em:

`39900 segundos`,

podemos converter.

Minutos:

`39900/60=665 minutos`.

Horas:

`665/60=11 horas e 5 minutos`.

Portanto:

`39900 s = 11h05min`.

Esse procedimento aparece em julgamento oficial da INEPAM.

---

## 32. Converter dias em semanas

Se:

`MMC(9,21)=63 dias`.

Como:

`63/7=9`.

Temos:

9 semanas.

Após um número inteiro de semanas, o dia da semana é o mesmo.

---

## 33. Converter horas em dias

Se:

`MMC(16,22)=176 horas`.

Divida por 24:

`176 = 24·7 + 8`.

Então:

`176 horas = 7 dias e 8 horas`.

---

# PARTE XIII — COMO IDENTIFICAR A FERRAMENTA CORRETA

## 34. Perguntas típicas de MDC

Procure expressões como:

- maior possível;
- maior comprimento;
- maior tamanho;
- dividir igualmente;
- sem sobras;
- grupos iguais;
- mesma quantidade por pacote.

---

## 35. Perguntas típicas de MMC

Procure:

- quando voltarão a ocorrer juntos;
- próxima coincidência;
- menor tempo;
- ciclos;
- intervalos regulares;
- periodicidade;
- menor quantidade múltipla de todas.

---

## 36. Cuidado: palavras isoladas não bastam

Você precisa entender o sentido.

Problema:

> 24 alunos e 36 livros serão organizados em grupos iguais, sem sobra.

Pode sugerir MDC.

Problema:

> Um alarme toca a cada 24 minutos e outro a cada 36 minutos. Quando tocarão juntos?

É MMC.

Mesmos números, operações diferentes.

---

# PARTE XIV — COMO A INEPAM COBRA O TEMA

## 37. Evidência observada

A pesquisa oficial permite afirmar que a INEPAM já cobrou:

1. MDC diretamente;
2. MDC aplicado à formação de pacotes;
3. MMC diretamente;
4. MMC de dois ciclos;
5. MMC de três ciclos;
6. periodicidade em dias;
7. periodicidade em horas e segundos;
8. conversão do resultado para unidade adequada.

Há exemplo diretamente aplicável a cargo administrativo:

- **Assistente Administrativo — Campo Limpo Paulista/2026**.

---

## 38. Limite da evidência

A amostra comprova ocorrência real, mas não permite afirmar que:

- MMC seja mais frequente que MDC;
- toda prova contenha um problema de periodicidade;
- a INEPAM sempre utilize números pequenos;
- o método exigido seja necessariamente decomposição em primos.

Na prova, qualquer método matematicamente correto pode levar à resposta.

---

# PARTE XV — QUESTÕES ANTIGAS DA INEPAM — RESOLUÇÃO COMENTADA

## 39. QUESTÃO REAL — INEPAM 1 — Campo Limpo Paulista/SP — Assistente Administrativo

**Origem:** Câmara Municipal de Campo Limpo Paulista/SP.  
**Concurso:** Concurso Público nº 001/2026.  
**Cargo/grupo:** **Assistente Administrativo**, Assistente Jurídico e Procurador Jurídico.  
**Disciplina:** Matemática.  
**Questão:** 11.  
**Fonte:** julgamento oficial dos recursos.  
**Gabarito oficial:** alternativa **E**.  
**Recurso:** indeferido.

O julgamento registra que duas atividades ocorreram juntas em **2 de março** e repetiam-se em intervalos de:

- 6 dias;
- 8 dias.

### Passo 1 — calcular MMC

`6=2·3`.

`8=2³`.

Então:

`MMC(6,8)=2³·3=24`.

### Passo 2 — avançar 24 dias

Data inicial:

2 de março.

`2+24=26`.

### Resultado

**26 de março**, alternativa E.

### Lição para Rincão

Quando dois eventos periódicos começam juntos e a questão pergunta pelo **próximo reencontro**, use MMC.

---

## 40. QUESTÃO REAL — INEPAM 2 — Campo Limpo Paulista/SP — MDC

**Origem:** Câmara Municipal de Campo Limpo Paulista/SP.  
**Concurso:** Concurso Público nº 001/2026.  
**Grupo:** Assistente Legislativo, Auxiliar de Serviços Gerais, Contador e Técnico de Informática.  
**Questão:** 11 de Matemática.  
**Gabarito oficial:** alternativa **C**.  
**Recurso:** indeferido.

A banca registra diretamente:

> o máximo divisor comum entre 84 e 126 é 42.

### Resolução por fatoração

`84=2²·3·7`.

`126=2·3²·7`.

Fatores comuns com menores expoentes:

`2·3·7=42`.

### Resultado

`MDC(84,126)=42`.

### Lição

A banca pode cobrar MDC de forma bastante direta, sem problema textual longo.

---

## 41. EVIDÊNCIA COMPLEMENTAR REAL — INEPAM — Adamantina/SP — pacotes

**Origem:** Prefeitura Municipal de Adamantina/SP.  
**Processo Seletivo:** nº 0001/2023.  
**Funções:** Professor de Educação do Ensino Fundamental I — PEB I e Professor de EJA.  
**Disciplina:** Matemática.  
**Questão:** 11.  
**Gabarito oficial:** alternativa **B**.  
**Recurso:** indeferido.

O julgamento registra:

- 112 lápis;
- 70 borrachas;
- `MDC(112,70)=14`.

### Interpretação

Cada pacote deve possuir:

14 objetos.

Quantidade de pacotes de lápis:

`112/14=8`.

Quantidade de pacotes de borracha:

`70/14=5`.

Total:

`8+5=13`.

### Resultado oficial

13 pacotes, alternativa B.

### Lição

“Maior quantidade igual em cada pacote, sem sobrar” é um forte sinal de MDC.

### Nota documental

A captura visual dessa página foi tentada duas vezes no portal oficial, mas o servidor retornou erro temporário de cache. O texto integral do PDF oficial foi recuperado e utilizado sem reconstrução de alternativas.

---

## 42. QUESTÃO REAL — INEPAM 3 — Águas de São Pedro/SP

**Origem:** Prefeitura Municipal de Águas de São Pedro/SP.  
**Processo Seletivo:** nº 001/2025.  
**Funções:** grupo com Inspetor de Alunos, professores, Assistente Social e outros.  
**Disciplina:** Matemática.  
**Questão:** 14.  
**Gabarito oficial:** alternativa **E**.  
**Recurso:** indeferido.

A banca registra:

`MMC(40,50,15)=600`.

### Conferência

`40=2³·5`.

`50=2·5²`.

`15=3·5`.

MMC:

`2³·3·5²`

`=8·3·25`

`=600`.

### Resultado

600.

### Lição

O MMC pode envolver mais de dois números.

---

## 43. QUESTÃO REAL — INEPAM 4 — São Sebastião do Rio Verde/MG

**Origem:** Prefeitura Municipal de São Sebastião do Rio Verde/MG.  
**Concurso:** Concurso Público nº 001/2024.  
**Disciplina:** Matemática.  
**Grupo da questão:** Enfermeiro da ESF, Fiscal Tributário, Médico da ESF, Odontólogo da ESF e Técnico de Enfermagem da ESF.  
**Questão:** 12.  
**Gabarito oficial:** alternativa **E**.  
**Recurso:** indeferido.

A banca resolve:

`MMC(50,38,84)=39900 segundos`.

### Fatoração

`50=2·5²`.

`38=2·19`.

`84=2²·3·7`.

MMC:

`2²·3·5²·7·19`.

`=39900`.

### Conversão

`39900/60=665 minutos`.

`665 minutos = 11 horas e 5 minutos`.

### Resultado

**11h05min**, alternativa E.

### Lição

Depois do MMC, ainda pode ser necessário converter a unidade pedida.

---

## 44. QUESTÃO REAL — INEPAM 5 — Mongaguá/SP — Técnico de Secretaria

**Origem:** Câmara Municipal de Mongaguá/SP.  
**Concurso:** Concurso Público nº 001/2026.  
**Cargo:** **Técnico de Secretaria**.  
**Disciplina:** Matemática.  
**Questão:** 12.  
**Gabarito oficial:** alternativa **A**.  
**Recurso:** indeferido.

O julgamento registra:

`MMC(9,21)=63`.

### Fatoração

`9=3²`.

`21=3·7`.

MMC:

`3²·7=63`.

Depois:

`63/7=9 semanas`.

Como passaram exatamente 9 semanas, o dia da semana volta a ser o mesmo.

### Resultado

O evento ocorre numa **segunda-feira**, alternativa A.

### Lição

O MMC pode resolver não apenas “quantos dias”, mas também qual será o dia da semana.

---

## 45. QUESTÃO REAL — INEPAM 6 — Mongaguá/SP — Procurador Jurídico

**Origem:** Câmara Municipal de Mongaguá/SP.  
**Concurso:** Concurso Público nº 001/2026.  
**Cargo:** Procurador Jurídico.  
**Disciplina:** Matemática.  
**Questão:** 12.  
**Gabarito oficial:** alternativa **C**.  
**Recurso:** indeferido.

No julgamento oficial, a banca registra:

`MMC(16,22)=176`.

Como:

`176=24·7+8`,

temos:

**7 dias e 8 horas**.

Alternativa C.

Esse exemplo reforça a necessidade de converter a unidade depois de calcular o MMC.

### Lição

Quando o resultado está em horas e ultrapassa 24, faça a divisão por 24 e interprete quociente e resto como dias e horas.

---

# PARTE XVI — EXEMPLOS RESOLVIDOS

## 46. Exemplo 1 — MDC

Calcule:

`MDC(24,36)`.

Fatore:

`24=2³·3`.

`36=2²·3²`.

Comuns, menores expoentes:

`2²·3=12`.

Resposta:

12.

---

## 47. Exemplo 2 — MMC

`MMC(24,36)`.

Maiores expoentes:

`2³·3²`.

`=8·9`.

`=72`.

---

## 48. Exemplo 3 — grupos iguais

48 alunos e 60 alunos de dois grupos precisam ser reorganizados em equipes de mesmo tamanho, usando o maior tamanho possível e sem misturar os grupos.

`MDC(48,60)`.

`48=2⁴·3`.

`60=2²·3·5`.

MDC:

`2²·3=12`.

Cada equipe terá:

12 alunos.

Número total de equipes:

`48/12 + 60/12`

`=4+5`

`=9`.

---

## 49. Exemplo 4 — alarmes

Um alarme toca a cada 12 minutos e outro a cada 18 minutos.

`MMC(12,18)=36`.

Voltarão a tocar juntos após:

36 minutos.

---

## 50. Exemplo 5 — três ciclos

Três tarefas são verificadas a cada:

8, 12 e 20 dias.

Fatorações:

`8=2³`.

`12=2²·3`.

`20=2²·5`.

MMC:

`2³·3·5=120`.

Coincidirão após:

120 dias.

---

## 51. Exemplo 6 — maior pedaço

Tábuas de 96 cm e 144 cm devem ser cortadas em partes iguais, do maior tamanho possível.

`MDC(96,144)`.

`96=2⁵·3`.

`144=2⁴·3²`.

MDC:

`2⁴·3=48`.

Pedaços:

48 cm.

---

# PARTE XVII — PEGADINHAS E ERROS FREQUENTES

## 52. Erro 1 — trocar MDC por MMC

“Maior pedaço possível”:

MDC.

“Quando coincidirão novamente?”:

MMC.

---

## 53. Erro 2 — usar o maior múltiplo

MMC significa **mínimo** múltiplo comum.

Não existe “maior múltiplo comum” positivo finito: há infinitos múltiplos.

---

## 54. Erro 3 — usar o menor divisor

MDC significa **máximo** divisor comum.

`1` é divisor comum de todos os inteiros positivos, mas normalmente não é o máximo.

---

## 55. Erro 4 — não decompor corretamente

`84` não é:

`2·3·7`.

Isso resulta em 42.

O correto:

`84=2²·3·7`.

---

## 56. Erro 5 — confundir expoentes

Para MDC:

menor expoente entre os fatores comuns.

Para MMC:

maior expoente entre todos os fatores necessários.

---

## 57. Erro 6 — esquecer o contexto após calcular

Se o MMC é 63 dias e a pergunta pede semanas:

`63/7=9`.

A conta não termina no 63.

---

## 58. Erro 7 — somar os períodos

Eventos a cada 6 e 8 dias não necessariamente coincidem a cada:

`6+8=14`.

O correto é:

`MMC(6,8)=24`.

---

# PARTE XVIII — RESUMO

## 59. Quadro-resumo

| Conceito | Ideia |
|---|---|
| divisor | divide exatamente |
| múltiplo | resultado de multiplicação inteira |
| primo | possui exatamente 2 divisores positivos |
| MDC | maior divisor comum |
| MMC | menor múltiplo comum |
| MDC por fatoração | fatores comuns, menor expoente |
| MMC por fatoração | todos necessários, maior expoente |
| grupos iguais máximos | MDC |
| maior pedaço possível | MDC |
| reencontro de ciclos | MMC |
| periodicidade | MMC |

---

# PARTE XIX — REVISÃO RÁPIDA — 5 MINUTOS

## 60. O que memorizar

1. MDC = maior divisor comum.
2. MMC = menor múltiplo comum.
3. MDC: fatores comuns com menor expoente.
4. MMC: todos os fatores necessários com maior expoente.
5. “Maior tamanho possível” → pense em MDC.
6. “Quando voltarão a coincidir?” → pense em MMC.
7. Fatore em números primos.
8. Converta a unidade final quando necessário.
9. Para dois números positivos: `MDC·MMC=a·b`.
10. Confira se seu MDC divide todos os números.
11. Confira se seu MMC é múltiplo de todos.

---

# PARTE XX — FLASHCARDS

## 61. Flashcards

**1. O que significa MDC?**  
Máximo Divisor Comum.

**2. O que significa MMC?**  
Mínimo Múltiplo Comum.

**3. `MDC(12,18)`?**  
6.

**4. `MMC(12,18)`?**  
36.

**5. `MDC(84,126)`?**  
42.

**6. `MMC(6,8)`?**  
24.

**7. No MDC, quais expoentes usamos?**  
Os menores entre os fatores comuns.

**8. No MMC, quais expoentes usamos?**  
Os maiores necessários.

**9. “Maior comprimento possível” indica?**  
MDC.

**10. “Próxima coincidência” indica?**  
MMC.

**11. 84 fatorado?**  
`2²·3·7`.

**12. 126 fatorado?**  
`2·3²·7`.

**13. `MMC(9,21)`?**  
63.

**14. 63 dias equivalem a quantas semanas?**  
9.

**15. `MMC(40,50,15)`?**  
600.

**16. `MDC(112,70)`?**  
14.

**17. 112/14?**  
8.

**18. 70/14?**  
5.

**19. Total de pacotes nesse caso?**  
13.

**20. Relação entre MDC e MMC de dois positivos?**  
`MDC·MMC=produto dos números`.

**21. 39900 segundos equivalem a?**  
11 horas e 5 minutos.

**22. 176 horas equivalem a?**  
7 dias e 8 horas.

**23. A INEPAM já cobrou MMC para Assistente Administrativo?**  
Sim, em Campo Limpo Paulista/2026.

**24. A INEPAM já cobrou MDC diretamente?**  
Sim.

---

# PARTE XXI — QUESTÕES DE FIXAÇÃO

Todas as questões abaixo são:

> **QUESTÃO INÉDITA — ESTILO INEPAM**

## 62. Questão 1

O MDC entre 36 e 48 é:

A) 6  
B) 8  
C) 12  
D) 18  
E) 24

**Gabarito: C.**

**Comentário:**  
`36=2²·3²` e `48=2⁴·3`. MDC = `2²·3=12`.

---

## 63. Questão 2

O MMC entre 12 e 15 é:

A) 30  
B) 45  
C) 60  
D) 90  
E) 120

**Gabarito: C.**

**Comentário:**  
`12=2²·3` e `15=3·5`. Para o MMC, usamos todos os fatores com o maior expoente: `2²·3·5=60`.

---

## 64. Questão 3

Duas atividades ocorrem, respectivamente, a cada 10 e 15 dias. Se ocorreram juntas hoje, voltarão a coincidir após:

A) 20 dias  
B) 25 dias  
C) 30 dias  
D) 45 dias  
E) 150 dias

**Gabarito: C.**

**Comentário:**  
Como as atividades são periódicas e começaram juntas, usamos MMC: `MMC(10,15)=30`. Portanto, voltam a coincidir após 30 dias.

---

## 65. Questão 4

Duas cordas medem 72 cm e 120 cm. Elas serão cortadas em pedaços iguais, de maior comprimento possível, sem sobrar material. Cada pedaço terá:

A) 6 cm  
B) 8 cm  
C) 12 cm  
D) 24 cm  
E) 36 cm

**Gabarito: D.**

**Comentário:**  
`MDC(72,120)=24`.

---

## 66. Questão 5

O MDC entre 45, 60 e 75 é:

A) 5  
B) 10  
C) 15  
D) 20  
E) 25

**Gabarito: C.**

**Comentário:**  
`45=3²·5`, `60=2²·3·5` e `75=3·5²`. Os fatores comuns aos três, com menores expoentes, são `3·5=15`.

---

## 67. Questão 6

O MMC entre 8, 12 e 20 é:

A) 40  
B) 60  
C) 80  
D) 120  
E) 240

**Gabarito: D.**

**Comentário:**  
`8=2³`, `12=2²·3` e `20=2²·5`. O MMC é `2³·3·5=120`.

---

## 68. Questão 7

A decomposição correta de 180 em fatores primos é:

A) `2²·3²·5`  
B) `2·3³·5`  
C) `2²·3·5²`  
D) `2·3²·5²`  
E) `2³·3·5`

**Gabarito: A.**

**Comentário:**  
`180=18·10=(2·3²)(2·5)=2²·3²·5`. Logo, a alternativa A apresenta a decomposição correta.

---

## 69. Questão 8

Assinale a situação em que o uso de MMC é mais adequado.

A) Cortar duas tábuas em pedaços iguais do maior tamanho possível.  
B) Formar grupos iguais com o maior número possível de pessoas.  
C) Descobrir quando dois alarmes periódicos tocarão juntos novamente.  
D) Descobrir o maior número que divide duas quantidades.  
E) Dividir objetos em caixas idênticas sem sobras usando a maior capacidade possível.

**Gabarito: C.**

**Comentário:**  
MMC é usado para descobrir a primeira nova coincidência de eventos periódicos. Por isso, a situação dos dois alarmes é a adequada.

---

## 70. Questão 9

Assinale a situação em que o uso de MDC é mais adequado.

A) Dois ônibus partem a cada 20 e 30 minutos; determinar o próximo encontro.  
B) Três luzes piscam em ciclos distintos; determinar a próxima coincidência.  
C) Cortar peças de 84 cm e 126 cm em partes iguais de maior comprimento possível.  
D) Encontrar o primeiro múltiplo comum de 8 e 12.  
E) Determinar quando dois relógios sincronizarão novamente.

**Gabarito: C.**

**Comentário:**  
A expressão “partes iguais de maior comprimento possível, sem sobrar” indica MDC. Nesse caso, `MDC(84,126)=42`.

---

## 71. Questão 10

O MMC entre 18 e 24 é:

A) 36  
B) 48  
C) 54  
D) 72  
E) 96

**Gabarito: D.**

**Comentário:**  
`18=2·3²` e `24=2³·3`. Para o MMC, tomamos `2³·3²=72`.

---

## 72. Questão 11

Sabendo que `MDC(20,30)=10`, o MMC entre 20 e 30 pode ser obtido por:

A) `(20+30)/10`  
B) `(20·30)/10`  
C) `20·30·10`  
D) `30-20+10`  
E) `20+30+10`

**Gabarito: B.**

**Comentário:**  
`MMC=(20·30)/10=60`.

---

## 73. Questão 12

Dois procedimentos são realizados a cada 9 dias e 21 dias. Se ocorreram juntos numa segunda-feira, voltarão a ocorrer juntos depois de:

A) 21 dias  
B) 42 dias  
C) 63 dias  
D) 90 dias  
E) 189 dias

**Gabarito: C.**

**Comentário:**  
`9=3²` e `21=3·7`. Assim, `MMC(9,21)=3²·7=63`; os procedimentos voltam a coincidir após 63 dias.

---

## 74. Questão 13

63 dias correspondem a:

A) 7 semanas  
B) 8 semanas  
C) 9 semanas  
D) 10 semanas  
E) 12 semanas

**Gabarito: C.**

**Comentário:**  
Uma semana tem 7 dias. Portanto, `63/7=9` semanas.

---

## 75. Questão 14

O MDC entre 112 e 70 é:

A) 7  
B) 10  
C) 12  
D) 14  
E) 28

**Gabarito: D.**

**Comentário:**  
`112=2⁴·7` e `70=2·5·7`. Os fatores comuns com menores expoentes são `2·7=14`; logo, `MDC(112,70)=14`.

---

## 76. Questão 15

Três sinais se repetem a cada 6, 8 e 12 segundos. Se ocorreram simultaneamente agora, voltarão a coincidir após:

A) 12 s  
B) 18 s  
C) 24 s  
D) 36 s  
E) 48 s

**Gabarito: C.**

**Comentário:**  
`MMC(6,8,12)=24`.

---

# PARTE XXII — GABARITO RÁPIDO

## 77. Gabarito

1. C  
2. C  
3. C  
4. D  
5. C  
6. D  
7. A  
8. C  
9. C  
10. D  
11. B  
12. C  
13. C  
14. D  
15. C

---

# PARTE XXIII — COMO ESTUDAR ESTE TEMA

## 78. Roteiro de treino

### Bloco 1 — divisibilidade

Revise critérios de 2, 3, 4, 5, 9 e 10.

### Bloco 2 — fatoração

Fatore:

- 36;
- 48;
- 70;
- 84;
- 112;
- 126;
- 180.

### Bloco 3 — MDC

Faça exercícios de:

- dois números;
- três números;
- cortes;
- pacotes;
- grupos.

### Bloco 4 — MMC

Faça:

- dois ciclos;
- três ciclos;
- dias;
- horas;
- minutos.

### Bloco 5 — escolha da ferramenta

Para cada problema, antes de calcular, escreva:

`MDC` ou `MMC`

e justifique em uma frase.

### Bloco 6 — questões reais

Refaça:

1. Campo Limpo Paulista: `MMC(6,8)=24`;
2. Campo Limpo Paulista: `MDC(84,126)=42`;
3. Águas de São Pedro: `MMC(40,50,15)=600`;
4. São Sebastião: `MMC(50,38,84)=39900`;
5. Mongaguá — Técnico de Secretaria: `MMC(9,21)=63`;
6. Mongaguá — Procurador Jurídico: `MMC(16,22)=176`.

Como evidência complementar real, refaça também o caso de Adamantina: `MDC(112,70)=14`, seguido de `112/14=8`, `70/14=5` e total de 13 pacotes.

---

# PARTE XXIV — FONTES E RASTREABILIDADE

### Auditoria da rerratificação de Rincão

A página oficial do concurso, a rerratificação e o registro interno `auditoria-rerratificacao-rincao-001-2026.md` foram confrontados. O resultado é `auditado_sem_impacto_nos_cargos_do_projeto`: **Agente Administrativo, Monitor de Educação e Ajudante Geral não tiveram conteúdo programático alterado por essa rerratificação**. Neste item, nenhuma cobertura, explicação, questão ou referência de MDC/MMC precisou ser removida ou refeita por esse motivo.

---

## 79. Fonte do edital

**Prefeitura Municipal de Rincão-SP — Concurso Público nº 001/2026 — INEPAM.**

Conteúdo programático:

> MDC e MMC.

Fonte oficial: edital/página do concurso e mapa mestre do projeto.

---

## 80. Campo Limpo Paulista/SP — 2026

**Câmara Municipal de Campo Limpo Paulista — Concurso Público nº 001/2026.**

Documento:

**Edital de Divulgação do Julgamento dos Recursos Referentes aos Gabaritos das Provas Objetivas.**

### Assistente Administrativo — Questão 11

A banca registra:

`MMC(6,8)=24`

e, a partir de 2 de março:

`2+24=26 de março`.

Alternativa E.

### Assistente Legislativo — Questão 11

A banca registra:

`MDC(84,126)=42`.

Alternativa C.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2328`

As páginas correspondentes foram conferidas visualmente no PDF oficial.

---

## 81. Adamantina/SP — 2023

**Prefeitura Municipal de Adamantina — Processo Seletivo nº 0001/2023.**

Matemática — Questão 11.

O julgamento registra:

`MDC(112,70)=14`.

Depois:

`112/14=8`.

`70/14=5`.

Total:

13 pacotes.

Alternativa B.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=417`

A abertura textual do PDF foi realizada. A captura visual da página retornou erro temporário de cache do servidor oficial.

---

## 82. Águas de São Pedro/SP — 2025

**Prefeitura Municipal de Águas de São Pedro — Processo Seletivo nº 001/2025.**

Matemática — Questão 14.

A banca registra:

`MMC(40,50,15)=600`.

Alternativa E.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1389`

A página foi conferida visualmente.

---

## 83. São Sebastião do Rio Verde/MG — 2024

**Prefeitura Municipal de São Sebastião do Rio Verde — Concurso Público nº 001/2024.**

Matemática — Questão 12.

A resolução oficial registra:

`MMC(50,38,84)=39900 segundos`

e converte para:

11 horas e 5 minutos.

Alternativa E.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1203`

A página foi conferida visualmente.

---

## 84. Mongaguá/SP — 2026

**Câmara Municipal de Mongaguá — Concurso Público nº 001/2026.**

### Técnico de Secretaria — Questão 12

`MMC(9,21)=63`.

`63/7=9 semanas`.

Alternativa A.

### Procurador Jurídico — Questão 12

`MMC(16,22)=176`.

`176h = 7 dias e 8 horas`.

Alternativa C.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2403`

A página foi conferida visualmente.

---

## 85. Limite da evidência

A pesquisa oficial deste lote localizou diversos casos verificáveis de MDC e MMC.

Eles comprovam ocorrência real em:

- cargo administrativo;
- cargo legislativo;
- cargos educacionais;
- cargo técnico de secretaria;
- outros grupos de nível médio/superior.

A amostra não será usada para inventar frequência estatística.

---

# PARTE XXV — CHECKLIST EDITORIAL

## 86. Checklist

- [x] item do edital identificado;
- [x] cargoIds compartilhados;
- [x] múltiplos;
- [x] divisores;
- [x] números primos;
- [x] critérios de divisibilidade;
- [x] decomposição em primos;
- [x] MDC;
- [x] MMC;
- [x] fatoração separada;
- [x] decomposição simultânea;
- [x] relação MDC × MMC;
- [x] problemas de grupos;
- [x] problemas de cortes;
- [x] periodicidade;
- [x] sincronização;
- [x] conversão de tempo;
- [x] método para distinguir MDC/ MMC;
- [x] 6 blocos de evidências reais principais;
- [x] 1 evidência complementar;
- [x] páginas oficiais conferidas visualmente quando tecnicamente disponíveis;
- [x] limitação de captura registrada;
- [x] 15 questões inéditas A–E;
- [x] gabarito comentado;
- [x] 24 flashcards;
- [x] revisão rápida;
- [x] fontes oficiais;
- [x] status `revisado`.

---

## 87. Próxima sequência do edital

Após **MDC e MMC**, o próximo item de Matemática no mapa mestre é:

> **Sistema de medidas: comprimento, superfície, massa, capacidade, tempo e volume; transformações de unidades.**

