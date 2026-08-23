---
id: medio-matematica-radicais-001
stableItemId: MED-MAT-001
cargoIds:
  - agente-administrativo
  - monitor-educacao
nivel: ensino-medio
disciplinaId: medio-matematica
temaId: radicais
titulo: "Radicais — operações, simplificação, propriedades e racionalização de denominadores"
editalRef: "Anexo II — Conhecimentos Gerais — Cargos de Ensino Médio e Técnico — Matemática: Radicais: operações, simplificação, propriedades e racionalização de denominadores"
status: revisado
versao: "0.1.0"
revisadoEm: "2026-08-23"
sourceRefs:
  - src-edital-rincao-2026
  - src-inepam-bofete-0001-2023-recursos
  - src-inepam-anhembi-0001-2023-recursos
---

# Radicais — operações, simplificação, propriedades e racionalização de denominadores

## 1. Identificação e referência ao edital

Esta aula atende ao primeiro item de Matemática dos cargos de **Agente Administrativo** e **Monitor de Educação** do Concurso Público nº 001/2026 da Prefeitura Municipal de Rincão-SP, banca INEPAM:

> **Radicais: operações, simplificação, propriedades e racionalização de denominadores.**

A aula é compartilhada pelos dois cargos por meio de `cargoIds[]`.

A pesquisa de banca foi realizada antes da revisão final. Foram localizados julgamentos oficiais da INEPAM com resolução matemática explícita envolvendo:

- simplificação de raiz quadrada;
- fatoração do radicando;
- divisão envolvendo radical;
- racionalização de denominador;
- equivalência entre expressões com radicais.

Foram encontradas **duas questões antigas com resolução oficial completa e verificável** diretamente relacionada ao tema. A pesquisa também localizou editais recentes da INEPAM que repetem exatamente esse conteúdo programático, mas sem julgamento de recurso reproduzindo uma questão de radicais. Por isso, esta aula **não inventa um terceiro exemplo real** apenas para atingir quantidade.

> **Regra de ouro:** antes de operar com radicais, simplifique cada radical sempre que possível.

### Situação editorial

O material está **revisado** para estudo. A liberação global do pacote continua condicionada ao controle de retificações do projeto, especialmente à conferência integral da rerratificação já registrada no controle editorial. Isso não impede a produção ou o uso desta aula para estudo.

---

## 2. O que o edital cobra

Para dominar o tópico, você precisa saber:

1. reconhecer índice, radical e radicando;
2. compreender raiz quadrada, cúbica e de índice maior;
3. relacionar radical e potência de expoente fracionário;
4. usar corretamente propriedades dos radicais;
5. simplificar radicais por fatoração;
6. extrair fatores perfeitos do radical;
7. introduzir fatores externos no radical quando necessário;
8. somar e subtrair radicais semelhantes;
9. multiplicar radicais;
10. dividir radicais;
11. efetuar operações combinadas;
12. reconhecer quando uma propriedade **não** pode ser usada;
13. racionalizar denominadores com um único radical;
14. racionalizar denominadores com coeficiente e radical;
15. racionalizar denominadores binomiais usando o conjugado;
16. simplificar o resultado final;
17. conferir se duas expressões radicais são equivalentes.

---

## 3. Objetivos

Ao final desta aula, você deverá conseguir:

- simplificar `√72`, `√180`, `√845` e expressões semelhantes;
- reconhecer que `√a + √b` não é, em geral, igual a `√(a+b)`;
- somar expressões como `3√5 + 7√5`;
- multiplicar expressões como `2√3 · 5√6`;
- dividir expressões com radicais;
- racionalizar `5/√3`, `20/√15` e expressões semelhantes;
- usar conjugado em denominadores como `2 + √3`;
- resolver passo a passo questões reais e inéditas;
- evitar os erros algébricos mais frequentes.

---

# PARTE I — CONCEITOS FUNDAMENTAIS

## 4. O que é um radical

Considere:

`√25 = 5`

A raiz quadrada de 25 é 5 porque:

`5² = 25`

Na expressão:

`√25`

temos:

- símbolo radical: `√`;
- índice: `2`, normalmente não escrito;
- radicando: `25`;
- raiz: `5`.

Em geral:

`ⁿ√a = b`

significa que:

`bⁿ = a`.

### Exemplos

`√49 = 7`, pois `7² = 49`.

`∛27 = 3`, pois `3³ = 27`.

`⁴√16 = 2`, pois `2⁴ = 16`.

---

## 5. Raiz quadrada principal

Quando escrevemos:

`√25`

o símbolo `√` representa a **raiz quadrada principal**, que é não negativa:

`√25 = 5`

e não `±5`.

### Atenção

Na equação:

`x² = 25`

temos duas soluções:

`x = 5` ou `x = -5`.

Isso é diferente de simplesmente calcular:

`√25`.

---

## 6. Quando a raiz é real

Para trabalhar no conjunto dos números reais:

- raiz de índice **par** exige radicando `≥ 0`;
- raiz de índice **ímpar** admite radicando negativo.

Exemplos:

`√9 = 3`.

`√0 = 0`.

`√(-9)` não é número real.

`∛(-8) = -2`.

Para este edital, o foco é trabalhar com radicais dentro dos números reais.

---

# PARTE II — RADICAL E POTENCIAÇÃO

## 7. Expoente fracionário

Um radical pode ser escrito como potência:

`ⁿ√(a^m) = a^(m/n)`

Exemplos:

`√a = a^(1/2)`

`∛a = a^(1/3)`

`³√(a²) = a^(2/3)`

Essa relação ajuda a compreender propriedades, mas em prova de nível médio normalmente é mais rápido trabalhar diretamente com fatoração e extração de fatores.

---

# PARTE III — PROPRIEDADES DOS RADICAIS

## 8. Produto de radicais de mesmo índice

Para valores em que as expressões estejam definidas:

`√a · √b = √(ab)`

Exemplo:

`√3 · √12 = √36 = 6`

Outro modo:

`√12 = 2√3`

Então:

`√3 · 2√3 = 2 · 3 = 6`.

---

## 9. Quociente de radicais de mesmo índice

Com denominador diferente de zero:

`√a / √b = √(a/b)`

Exemplo:

`√50 / √2 = √25 = 5`.

Essa propriedade é útil, mas sempre verifique se simplificar os radicais separadamente é mais rápido.

---

## 10. Potência e radical

Para `a ≥ 0`:

`(√a)² = a`

Exemplo:

`(√7)² = 7`.

Também:

`√(a²) = |a|`

e não simplesmente `a`, se `a` puder ser negativo.

Exemplo:

se `a = -3`:

`√(a²) = √9 = 3 = |-3|`.

Em questões numéricas com valores positivos, essa diferença pode não aparecer, mas a regra correta é importante.

---

## 11. Radical de radical

Podemos multiplicar os índices:

`√(∛a) = ⁶√a`

porque:

`(a^(1/3))^(1/2) = a^(1/6)`.

Esse caso é menos frequente em provas municipais, mas faz parte das propriedades gerais.

---

# PARTE IV — PROPRIEDADES QUE NÃO EXISTEM

## 12. Erro clássico: separar soma dentro da raiz

Em geral:

`√(a + b) ≠ √a + √b`.

Exemplo:

`√(9 + 16) = √25 = 5`.

Mas:

`√9 + √16 = 3 + 4 = 7`.

Logo:

`5 ≠ 7`.

### Também não vale para subtração

Em geral:

`√(a - b) ≠ √a - √b`.

Exemplo:

`√(25 - 9) = √16 = 4`.

Enquanto:

`√25 - √9 = 5 - 3 = 2`.

---

# PARTE V — SIMPLIFICAÇÃO DE RADICAIS

## 13. Ideia central da simplificação

Simplificar um radical significa retirar do radicando fatores que formem potências perfeitas.

Exemplo:

`√72`

Fatore:

`72 = 36 · 2`.

Então:

`√72 = √(36 · 2)`

`√72 = √36 · √2`

`√72 = 6√2`.

---

## 14. Método da fatoração

### Exemplo: √180

Fatorando:

`180 = 36 · 5`

Logo:

`√180 = √36 · √5`

`√180 = 6√5`.

### Outro modo por fatores primos

`180 = 2² · 3² · 5`

Assim:

`√180 = √(2² · 3² · 5)`

`√180 = 2 · 3 · √5`

`√180 = 6√5`.

---

## 15. Como enxergar rapidamente quadrados perfeitos

Memorize pelo menos:

- `1² = 1`
- `2² = 4`
- `3² = 9`
- `4² = 16`
- `5² = 25`
- `6² = 36`
- `7² = 49`
- `8² = 64`
- `9² = 81`
- `10² = 100`
- `11² = 121`
- `12² = 144`
- `13² = 169`
- `14² = 196`
- `15² = 225`

Isso acelera muito a simplificação.

---

## 16. Exemplo completo: √845

Fatoramos:

`845 = 5 · 169`

Como:

`169 = 13²`

temos:

`√845 = √(13² · 5)`

`√845 = 13√5`.

Esse valor aparece em questão real da INEPAM que veremos adiante.

---

## 17. Extração de mais de um fator

Exemplo:

`√720`

Fatorando:

`720 = 144 · 5`

Logo:

`√720 = √144 · √5`

`√720 = 12√5`.

Outro caminho:

`720 = 2⁴ · 3² · 5`

Então:

`√720 = 2² · 3 · √5`

`√720 = 12√5`.

---

# PARTE VI — RADICAIS SEMELHANTES

## 18. O que são radicais semelhantes

São radicais que, depois de simplificados, possuem o mesmo índice e o mesmo radicando.

Exemplo:

`3√5` e `7√5`.

Eles são semelhantes.

Podemos somar os coeficientes:

`3√5 + 7√5 = 10√5`.

---

## 19. Primeiro simplifique, depois compare

Exemplo:

`√12 + √27`

Simplifique:

`√12 = 2√3`

`√27 = 3√3`

Então:

`√12 + √27 = 2√3 + 3√3`

`= 5√3`.

### Erro

Não faça:

`√12 + √27 = √39`.

Essa propriedade não existe.

---

## 20. Subtração de radicais semelhantes

`8√7 - 3√7 = 5√7`.

Exemplo com simplificação:

`√75 - √12`

`√75 = 5√3`

`√12 = 2√3`

Logo:

`5√3 - 2√3 = 3√3`.

---

# PARTE VII — MULTIPLICAÇÃO

## 21. Multiplicação simples

`√a · √b = √(ab)`.

Exemplo:

`√6 · √24 = √144 = 12`.

---

## 22. Multiplicação com coeficientes

Exemplo:

`2√3 · 5√6`

Multiplique coeficientes:

`2 · 5 = 10`.

Multiplique radicais:

`√3 · √6 = √18`.

Então:

`10√18`.

Simplifique:

`√18 = 3?`

Cuidado: `√18 = √(9·2) = 3√2`.

Logo:

`10√18 = 30√2`.

Resposta:

`30√2`.

---

## 23. Produto de binômios com radicais

Exemplo:

`(√3 + 2)(√3 - 2)`.

Use produto da soma pela diferença:

`(a+b)(a-b) = a² - b²`.

Logo:

`(√3)² - 2²`

`= 3 - 4`

`= -1`.

Esse mecanismo será fundamental na racionalização por conjugado.

---

# PARTE VIII — DIVISÃO

## 24. Divisão e simplificação

Exemplo:

`√72 / √2`

`= √36`

`= 6`.

Também:

`6√15 / 3√5`

Simplifique coeficientes:

`6/3 = 2`.

Radicais:

`√15 / √5 = √3`.

Resultado:

`2√3`.

---

# PARTE IX — RACIONALIZAÇÃO DE DENOMINADORES

## 25. O que é racionalizar

Racionalizar significa transformar uma fração para eliminar radical do denominador, obtendo expressão equivalente.

Exemplo:

`1/√2`.

Multiplicamos numerador e denominador por `√2`:

`1/√2 · √2/√2`

`= √2 / 2`.

Portanto:

`1/√2 = √2/2`.

O valor da fração não muda porque multiplicamos por:

`√2/√2 = 1`.

---

## 26. Caso 1 — denominador com uma raiz quadrada

Exemplo:

`5/√3`.

Multiplique por:

`√3/√3`.

Então:

`5√3 / (√3·√3)`

`= 5√3 / 3`.

Resposta:

`5√3/3`.

---

## 27. Caso 2 — coeficiente vezes radical

Exemplo:

`20/√15`.

Primeiro racionalize:

`20/√15 · √15/√15`

`= 20√15/15`.

Simplifique a fração por 5:

`= 4√15/3`.

Resposta:

`4√15/3`.

Esse formato aparece em questão real da INEPAM.

---

## 28. Simplificar antes ou depois?

As duas estratégias podem funcionar.

Exemplo:

`60/√135`.

Primeiro simplifique:

`√135 = √(9·15) = 3√15`.

Então:

`60/(3√15)`

`= 20/√15`.

Racionalize:

`20/√15 · √15/√15`

`= 20√15/15`

`= 4√15/3`.

Essa é exatamente a cadeia de raciocínio registrada em julgamento oficial da INEPAM.

---

# PARTE X — CONJUGADO

## 29. Denominador do tipo a + √b

Se o denominador tiver uma soma ou diferença envolvendo radical, usamos o **conjugado**.

Conjugados:

`a + √b` e `a - √b`.

Isso funciona porque:

`(a + √b)(a - √b) = a² - b`.

O radical desaparece do denominador.

---

## 30. Exemplo: 1 / (2 + √3)

Multiplique pelo conjugado:

`(2 - √3)/(2 - √3)`.

Então:

`1/(2+√3) · (2-√3)/(2-√3)`

Numerador:

`2 - √3`.

Denominador:

`(2+√3)(2-√3)`

`= 4 - 3`

`= 1`.

Logo:

`1/(2+√3) = 2 - √3`.

---

## 31. Exemplo: 3 / (√5 - 1)

Conjugado:

`√5 + 1`.

Multiplique:

`3/(√5-1) · (√5+1)/(√5+1)`.

Numerador:

`3(√5+1)`.

Denominador:

`(√5)² - 1²`

`= 5 - 1`

`= 4`.

Resposta:

`3(√5+1)/4`.

---

# PARTE XI — RAÍZES DE ÍNDICE DIFERENTE

## 32. Simplificação de raiz cúbica

Exemplo:

`∛54`.

Fatore:

`54 = 27 · 2`.

Então:

`∛54 = ∛27 · ∛2`

`= 3∛2`.

### Outro exemplo

`∛128`

`128 = 64 · 2`

`∛128 = 4∛2`.

---

## 33. Operações exigem cuidado com índices

`√2` e `∛2` não são radicais semelhantes.

Não podemos escrever:

`√2 + ∛2 = 2?`

Eles devem permanecer separados, salvo transformação algébrica específica.

---

# PARTE XII — COMO A INEPAM COBRA O TEMA

## 34. Padrão observado com evidência

Com base nos julgamentos oficiais localizados, é possível afirmar apenas o seguinte:

1. a INEPAM já cobrou **simplificação de radical seguida de racionalização** em uma mesma questão;
2. a banca apresentou resolução algébrica direta, com fatoração do radicando e multiplicação pelo radical necessário;
3. a banca também cobrou uma expressão do tipo `60/√135`, exigindo simplificação e racionalização;
4. as questões localizadas são objetivas e o julgamento mostra uma cadeia curta de operações;
5. a amostra encontrada é pequena, portanto não é seguro afirmar frequência estatística ou dizer que a banca “sempre” cobra o tema desse modo.

---

# PARTE XIII — QUESTÕES ANTIGAS DA INEPAM — RESOLUÇÃO COMENTADA

## 35. QUESTÃO REAL — INEPAM 1 — Bofete/SP

**Origem:** Prefeitura Municipal de Bofete/SP.  
**Concurso:** Concurso Público nº 0001/2023.  
**Disciplina:** Matemática.  
**Questão:** 17 no grupo correspondente.  
**Fonte disponível:** julgamento oficial dos recursos dos gabaritos.  
**Situação do recurso:** indeferido.  
**Gabarito oficial informado no julgamento:** alternativa **A**.

O documento oficial registra expressamente que o conteúdo era:

> simplificação de radicais e racionalização de denominadores.

A expressão matemática reproduzida no julgamento corresponde à racionalização de:

`35/√845`.

### Passo 1 — simplificar o radical

Fatore 845:

`845 = 5 · 169`

`169 = 13²`.

Então:

`√845 = √(13² · 5)`

`= 13√5`.

A expressão passa a ser:

`35/(13√5)`.

### Passo 2 — racionalizar

Multiplique numerador e denominador por `√5`:

`35/(13√5) · √5/√5`

Numerador:

`35√5`.

Denominador:

`13 · 5 = 65`.

Logo:

`35√5/65`.

### Passo 3 — simplificar a fração

Divida numerador e denominador por 5:

`35√5/65 = 7√5/13`.

### Resultado

`7√5/13`.

O julgamento oficial confirma a alternativa **A**.

### O que a questão ensina

A banca encadeou duas habilidades do próprio item do edital:

1. simplificação de `√845`;
2. racionalização do denominador.

Não bastava saber apenas uma delas.

---

## 36. QUESTÃO REAL — INEPAM 2 — Anhembi/SP

**Origem:** Prefeitura Municipal de Anhembi/SP.  
**Concurso:** Concurso Público nº 0001/2023.  
**Grupo:** inclui **Escriturário** e **Inspetor de Alunos**, entre outros cargos.  
**Disciplina:** Matemática.  
**Questão:** 11.  
**Fonte:** julgamento oficial dos recursos.  
**Situação do recurso:** indeferido.  
**Gabarito oficial:** alternativa **B**.

A resolução oficial parte de:

`60/√135`.

### Passo 1 — simplificar √135

`135 = 9 · 15`.

Logo:

`√135 = 3√15`.

Então:

`60/√135 = 60/(3√15)`.

Simplificando por 3:

`= 20/√15`.

### Passo 2 — racionalizar

Multiplique por `√15/√15`:

`20/√15 · √15/√15`

`= 20√15/15`.

### Passo 3 — simplificar

Divida por 5:

`20√15/15 = 4√15/3`.

### Resultado

`4√15/3`.

O julgamento oficial confirma a alternativa **B**.

### O que a questão ensina

A ordem mais eficiente foi:

1. fatorar o radicando;
2. simplificar a raiz;
3. reduzir coeficientes;
4. racionalizar;
5. simplificar a fração final.

Esse é um excelente roteiro para Rincão.

---

## 37. Limite da pesquisa de questões reais

A pesquisa desta aula foi feita em julgamentos, editais e documentos oficiais indexados da INEPAM.

Foram encontrados **dois exemplos reais com resolução oficial completa e inequívoca** diretamente relacionados a radicais. Também foram encontrados vários editais recentes que mantêm o mesmo conteúdo programático, inclusive para cargos de nível médio e escriturário, mas sem questão real reproduzida nos documentos pesquisáveis.

Por isso:

- não se apresentam questões geradas como reais;
- não se reconstruem alternativas ausentes;
- não se afirma que determinada forma seja a mais frequente sem amostra suficiente.

---

# PARTE XIV — EXEMPLOS RESOLVIDOS

## 38. Exemplo 1 — simplificação

Simplifique:

`√200`.

`200 = 100 · 2`.

Então:

`√200 = 10√2`.

---

## 39. Exemplo 2 — soma

Calcule:

`√50 + √8`.

Simplifique:

`√50 = 5√2`.

`√8 = 2√2`.

Logo:

`5√2 + 2√2 = 7√2`.

---

## 40. Exemplo 3 — subtração

`3√12 - √27`.

Simplifique:

`√12 = 2√3`.

`√27 = 3√3`.

Então:

`3·2√3 - 3√3`

`= 6√3 - 3√3`

`= 3√3`.

---

## 41. Exemplo 4 — multiplicação

`√8 · √18`.

`= √144`

`= 12`.

Também:

`√8 = 2√2`

`√18 = 3√2`

Produto:

`2√2 · 3√2 = 6·2 = 12`.

---

## 42. Exemplo 5 — racionalização simples

`7/√2`.

Multiplique por:

`√2/√2`.

Resultado:

`7√2/2`.

---

## 43. Exemplo 6 — racionalização com simplificação anterior

`18/√72`.

Simplifique:

`√72 = 6√2`.

Então:

`18/(6√2) = 3/√2`.

Racionalize:

`3/√2 · √2/√2`

`= 3√2/2`.

---

## 44. Exemplo 7 — conjugado

`2/(3-√5)`.

Conjugado:

`3+√5`.

Então:

`2(3+√5) / [(3-√5)(3+√5)]`

Denominador:

`9 - 5 = 4`.

Numerador:

`6 + 2√5`.

Logo:

`(6+2√5)/4`.

Simplifique por 2:

`(3+√5)/2`.

---

# PARTE XV — PEGADINHAS E ERROS FREQUENTES

## 45. Erro 1 — somar radicandos

Errado:

`√2 + √3 = √5`.

Correto:

`√2 + √3`

não pode ser simplificado por soma de radicandos.

---

## 46. Erro 2 — esquecer de simplificar antes de somar

`√8 + √18`.

Não parecem semelhantes inicialmente.

Mas:

`√8 = 2√2`.

`√18 = 3√2`.

Logo:

`5√2`.

---

## 47. Erro 3 — racionalizar e não reduzir a fração

`20√15/15`

está racionalizado, mas ainda pode ser simplificado:

`= 4√15/3`.

Em prova objetiva, a alternativa pode apresentar apenas a forma totalmente simplificada.

---

## 48. Erro 4 — multiplicar só o denominador

Em:

`5/√3`

não se pode multiplicar somente o denominador por `√3`.

É necessário multiplicar **numerador e denominador** pelo mesmo valor:

`√3/√3 = 1`.

---

## 49. Erro 5 — usar o mesmo sinal no conjugado

Conjugado de:

`2 + √3`

é:

`2 - √3`.

Conjugado de:

`2 - √3`

é:

`2 + √3`.

---

## 50. Erro 6 — confundir √(a²) com a em qualquer situação

A regra geral real é:

`√(a²) = |a|`.

---

# PARTE XVI — RESUMO

## 51. Quadro-resumo

| Situação | Regra/estratégia |
|---|---|
| Simplificar √72 | procurar quadrado perfeito: `√(36·2)=6√2` |
| Produto | `√a·√b=√(ab)` |
| Quociente | `√a/√b=√(a/b)` quando definido |
| Soma | só combinar radicais semelhantes |
| `√a+√b` | não é `√(a+b)` em geral |
| Racionalizar `1/√a` | multiplicar por `√a/√a` |
| Denominador `a+√b` | usar conjugado `a-√b` |
| Antes de operar | simplificar os radicais |
| Resultado final | racionalizar e reduzir frações |

---

# PARTE XVII — REVISÃO RÁPIDA — 5 MINUTOS

## 52. O que memorizar

1. `√(ab)=√a·√b`, quando a operação está definida nos reais.
2. `√a + √b` não vira `√(a+b)`.
3. Procure quadrados perfeitos dentro do radicando.
4. Só some/subtraia radicais semelhantes.
5. Em divisão, simplifique antes de racionalizar.
6. Para `1/√a`, multiplique por `√a/√a`.
7. Para binômio com radical, use conjugado.
8. Sempre simplifique o resultado final.
9. `√(a²)=|a|`.
10. A INEPAM já combinou simplificação + racionalização na mesma questão.

---

# PARTE XVIII — FLASHCARDS

## 53. Flashcards

**1. O que é radicando?**  
O número ou expressão que fica dentro do radical.

**2. Qual é o índice de `√a`?**  
2.

**3. Quanto vale `√49`?**  
7.

**4. Quanto vale `∛(-8)`?**  
-2.

**5. `√a + √b = √(a+b)`?**  
Não, em geral.

**6. Como simplificar `√72`?**  
`√72 = √(36·2)=6√2`.

**7. Como simplificar `√45`?**  
`3√5`.

**8. Quando radicais são semelhantes?**  
Quando, após simplificação, possuem mesmo índice e mesmo radicando.

**9. Quanto é `2√3 + 5√3`?**  
`7√3`.

**10. Quanto é `√2·√8`?**  
`√16=4`.

**11. O que é racionalizar?**  
Eliminar radical do denominador por transformação equivalente.

**12. Racionalização de `1/√5`?**  
`√5/5`.

**13. Conjugado de `2+√3`?**  
`2-√3`.

**14. Produto de conjugados `(a+b)(a-b)`?**  
`a²-b²`.

**15. Quanto é `√(a²)` nos reais?**  
`|a|`.

**16. Simplificação de `√135`?**  
`3√15`.

**17. Racionalização de `20/√15`?**  
`4√15/3`.

**18. Simplificação de `√845`?**  
`13√5`.

**19. Qual deve ser o primeiro passo em muitas questões de radical?**  
Fatorar e simplificar o radicando.

**20. Depois de racionalizar, o que conferir?**  
Se a fração e os radicais ainda podem ser simplificados.

**21. `√50 + √8`?**  
`5√2+2√2=7√2`.

**22. `√18·√2`?**  
`√36=6`.

**23. Pode existir `√(-4)` nos reais?**  
Não.

**24. A INEPAM já cobrou simplificação e racionalização juntas?**  
Sim, há julgamentos oficiais documentados.

---

# PARTE XIX — QUESTÕES DE FIXAÇÃO

Todas as questões a seguir são:

> **QUESTÃO INÉDITA — ESTILO INEPAM**

Elas não são questões reais da banca.

## 54. Questão 1

Simplifique `√48`.

A) `2√12`  
B) `3√3`  
C) `4√3`  
D) `6√2`  
E) `8√3`

**Gabarito: C.**

**Comentário:**  
`48 = 16·3`, então:

`√48 = 4√3`.

---

## 55. Questão 2

O valor de `√12 + √27` é:

A) `√39`  
B) `5√3`  
C) `7√3`  
D) `3√5`  
E) `9√3`

**Gabarito: B.**

**Comentário:**  
`√12=2√3` e `√27=3√3`. Logo:

`2√3+3√3=5√3`.

---

## 56. Questão 3

Assinale a igualdade correta.

A) `√4 + √9 = √13`  
B) `√16 - √9 = √7`  
C) `√3·√12 = 6`  
D) `√25 = ±5`  
E) `√8 = 4√2`

**Gabarito: C.**

**Comentário:**  
`√3·√12=√36=6`.

`√25` é a raiz principal: 5.

---

## 57. Questão 4

A forma racionalizada de `6/√3` é:

A) `2√3`  
B) `3√2`  
C) `6√3`  
D) `√3/2`  
E) `2/√3`

**Gabarito: A.**

**Comentário:**

`6/√3 · √3/√3 = 6√3/3 = 2√3`.

---

## 58. Questão 5

Simplificando `√300`, obtemos:

A) `5√3`  
B) `10√3`  
C) `15√2`  
D) `20√3`  
E) `30√3`

**Gabarito: B.**

**Comentário:**

`300 = 100·3`.

`√300=10√3`.

---

## 59. Questão 6

O resultado de `3√8 - √18` é:

A) `√2`  
B) `2√2`  
C) `3√2`  
D) `4√2`  
E) `6√2`

**Gabarito: C.**

**Comentário:**

`3√8 = 3·2√2 = 6√2`.

`√18=3√2`.

Logo:

`6√2-3√2=3√2`.

---

## 60. Questão 7

Calcule `2√6 · 3√24`.

A) 24  
B) 36  
C) 48  
D) 72  
E) 144

**Gabarito: D.**

**Comentário:**

Coeficientes: `2·3=6`.

Radicais:

`√6·√24=√144=12`.

Logo:

`6·12=72`.

---

## 61. Questão 8

A forma racionalizada e simplificada de `12/√8` é:

A) `3√2`  
B) `6√2`  
C) `3√2/2`  
D) `12√2`  
E) `2√3`

**Gabarito: A.**

**Comentário:**

`√8=2√2`.

Então:

`12/(2√2)=6/√2`.

Racionalizando:

`6√2/2 = 3√2`.

---

## 62. Questão 9

O conjugado de `5 - √7` é:

A) `-5 + √7`  
B) `5 + √7`  
C) `-5 - √7`  
D) `√7 - 5`  
E) `5 - √7`

**Gabarito: B.**

---

## 63. Questão 10

A expressão `1/(3+√8)`, após racionalização, é igual a:

A) `3+√8`  
B) `3-√8`  
C) `(3-√8)/17`  
D) `(3+√8)/17`  
E) `√8-3`

**Gabarito: B.**

**Comentário:**

Use o conjugado:

`1/(3+√8) · (3-√8)/(3-√8)`.

Denominador:

`9-8=1`.

Logo:

`3-√8`.

---

## 64. Questão 11

Qual expressão não pode ser simplificada por soma de radicais?

A) `2√5 + 7√5`  
B) `√20 + √45`  
C) `3√2 + √8`  
D) `√2 + √3`  
E) `√12 + 4√3`

**Gabarito: D.**

**Comentário:**

`√2` e `√3` não são semelhantes.

---

## 65. Questão 12

Simplifique `√980`.

A) `7√20`  
B) `14√5`  
C) `28√5`  
D) `49√2`  
E) `10√98`

**Gabarito: B.**

**Comentário:**

`980 = 196·5`.

Logo:

`√980 = 14√5`.

---

## 66. Questão 13

A forma racionalizada de `4/(√5-1)` é:

A) `√5+1`  
B) `√5-1`  
C) `4√5+4`  
D) `(√5+1)/4`  
E) `(√5-1)/4`

**Gabarito: A.**

**Comentário:**

Multiplique pelo conjugado:

`4(√5+1)/(5-1)`

`= 4(√5+1)/4`

`= √5+1`.

---

## 67. Questão 14

O valor de `(√7+2)(√7-2)` é:

A) 1  
B) 2  
C) 3  
D) 7  
E) 11

**Gabarito: C.**

**Comentário:**

`(√7)² - 2² = 7-4 = 3`.

---

## 68. Questão 15

Considere:

`x = √75 - √27 + √12`.

O valor simplificado de `x` é:

A) `2√3`  
B) `3√3`  
C) `4√3`  
D) `5√3`  
E) `6√3`

**Gabarito: C.**

**Comentário:**

`√75=5√3`.

`√27=3√3`.

`√12=2√3`.

Logo:

`5√3 - 3√3 + 2√3 = 4√3`.

---

# PARTE XX — GABARITO RÁPIDO

## 69. Gabarito

1. C  
2. B  
3. C  
4. A  
5. B  
6. C  
7. D  
8. A  
9. B  
10. B  
11. D  
12. B  
13. A  
14. C  
15. C

---

# PARTE XXI — COMO ESTUDAR ESTE TEMA

## 70. Roteiro de treino

### Etapa 1 — memorizar quadrados perfeitos

Treine de `1²` a `15²`.

### Etapa 2 — simplificar radicais

Faça pelo menos 10 exercícios apenas de simplificação.

### Etapa 3 — somar/subtrair

Treine expressões que exigem simplificação antes de combinar termos.

### Etapa 4 — multiplicar/dividir

Faça produtos e quocientes com radicais.

### Etapa 5 — racionalizar

Treine:

- denominador com uma raiz;
- coeficiente vezes raiz;
- denominador binomial com conjugado.

### Etapa 6 — revisar as duas questões reais

Resolva sem olhar a resposta:

- `35/√845`;
- `60/√135`.

Se conseguir chegar sozinho a:

- `7√5/13`;
- `4√15/3`;

você dominou o padrão documentado nas questões localizadas.

---

# PARTE XXII — FONTES E RASTREABILIDADE

## 71. Fonte do edital

**Prefeitura Municipal de Rincão-SP — Concurso Público nº 001/2026 — INEPAM.**

Conteúdo programático de Matemática para os cargos de Ensino Médio/Técnico:

> Radicais: operações – simplificação, propriedade – racionalização de denominadores.

Fonte oficial: página/documentos do concurso no portal da INEPAM.

---

## 72. Fonte real INEPAM — Bofete/SP

**Prefeitura Municipal de Bofete/SP — Concurso Público nº 0001/2023.**

Documento oficial:

**Edital de Divulgação do Julgamento dos Recursos Referentes aos Gabaritos das Provas Objetivas.**

Matemática — Questão 17.

O julgamento registra expressamente:

- simplificação de radicais;
- racionalização de denominadores;
- `√845 = 13√5`;
- racionalização que conduz a `7√5/13`;
- alternativa oficial A;
- recurso indeferido.

URL oficial do documento:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=269`

---

## 73. Fonte real INEPAM — Anhembi/SP

**Prefeitura Municipal de Anhembi/SP — Concurso Público nº 0001/2023.**

Documento oficial:

**Edital de Divulgação do Julgamento dos Recursos.**

Matemática — Questão 11.

Grupo de cargos incluindo:

- Escriturário;
- Inspetor de Alunos;
- Controle Interno;
- demais cargos listados no documento oficial.

A resolução registra:

`60/√135 = 60/(3√15) = 20/√15 = 4√15/3`.

Gabarito oficial: alternativa B.

Recurso indeferido.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=416`

---

## 74. Limite de evidência

A pesquisa oficial desta versão localizou **duas questões antigas com resolução completa e verificável** especificamente sobre radicais.

Outros documentos recentes da INEPAM confirmam a presença recorrente do item `Radicais: operações – simplificação, propriedade – racionalização de denominadores` nos conteúdos programáticos de nível médio, mas não fornecem, nos resultados pesquisáveis utilizados nesta aula, outra resolução oficial completa de questão desse tema.

Portanto, nenhuma questão adicional foi apresentada como real sem comprovação.

---

# PARTE XXIII — CHECKLIST EDITORIAL

## 75. Checklist

- [x] item do edital identificado;
- [x] cargoIds compartilhados;
- [x] explicação passo a passo;
- [x] propriedades corretas;
- [x] simplificação de radicais;
- [x] soma e subtração;
- [x] multiplicação e divisão;
- [x] racionalização simples;
- [x] racionalização por conjugado;
- [x] exemplos resolvidos;
- [x] pesquisa de questões antigas INEPAM;
- [x] questões reais identificadas como reais;
- [x] inexistência de alternativas reconstruídas;
- [x] questões inéditas identificadas como inéditas;
- [x] cinco alternativas A–E;
- [x] gabarito comentado;
- [x] flashcards;
- [x] revisão rápida;
- [x] fontes oficiais registradas;
- [x] status `revisado`.

---

## 76. Próxima sequência do edital

Após **Radicais**, o próximo item de Matemática no mapa mestre é:

> **Razão e proporção.**

