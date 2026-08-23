---
id: medio-matematica-expressoes-algebricas-fracionarias-001
stableItemId: MED-MAT-008
cargoIds:
  - agente-administrativo
  - monitor-educacao
nivel: ensino-medio
disciplinaId: medio-matematica
temaId: expressoes-algebricas-fracionarias
titulo: "Expressões algébricas fracionárias — domínio, operações, fatoração e simplificação"
editalRef: "Anexo II — Conhecimentos Gerais — Cargos de Ensino Médio e Técnico — Matemática: Expressões algébricas fracionárias — operações — simplificação"
status: revisado
versao: "0.1.0"
revisadoEm: "2026-08-23"
sourceRefs:
  - src-edital-rincao-2026
  - src-inepam-embu-artes-001-2023-recursos
  - src-inepam-santa-isabel-001-2026-edital
---

# Expressões algébricas fracionárias — domínio, operações, fatoração e simplificação

## 1. Identificação e referência ao edital

Esta aula atende ao item **Expressões algébricas fracionárias — operações — simplificação**, previsto em Matemática para os cargos de **Agente Administrativo** e **Monitor de Educação** do Concurso Público nº 001/2026 da Prefeitura Municipal de Rincão-SP, banca INEPAM.

A aula é compartilhada pelos dois cargos por meio de `cargoIds[]`.

Uma **expressão algébrica fracionária** é uma fração em que aparecem letras no numerador, no denominador ou em ambos.

Exemplos:

`(x+2)/(x-3)`

`3/x`

`(a²-b²)/(a-b)`

`(2a+6b)/(a²+6ab+9b²)`

Como há denominadores algébricos, surgem duas responsabilidades adicionais:

1. **descobrir os valores proibidos**, que zeram algum denominador;
2. simplificar apenas **fatores**, nunca parcelas isoladas.

A pesquisa oficial foi realizada antes da revisão final. Foram encontrados dois exemplos reais diretamente relevantes no julgamento de recursos do Concurso Público nº 001/2023 de Embu das Artes/SP:

- uma fração com `b`, cuja resolução oficial chega a `(2-b)/3`;
- uma expressão aplicada a grupo com **Secretário de Escola**, cuja resolução oficial chega a `2/(a+3b)`.

O portal oficial da INEPAM também confirma, em edital de 2026, a redação programática:

> `Expressões algébricas fracionárias – operações – simplificação.`

> **Regra de ouro:** antes de cancelar qualquer coisa, **fatere**. Cancelamento ocorre entre fatores multiplicativos, não entre termos de uma soma ou subtração.

### Situação editorial

O material está **revisado** para estudo. A liberação global do pacote continua condicionada ao controle de retificações do projeto.

---

## 2. O que o edital cobra

Para dominar o tema, você precisa saber:

1. reconhecer expressão algébrica fracionária;
2. identificar denominadores;
3. determinar restrições ou condições de existência;
4. fatorar numeradores e denominadores;
5. simplificar fatores comuns;
6. compreender que a simplificação não elimina as restrições da expressão original;
7. multiplicar frações algébricas;
8. dividir frações algébricas;
9. somar frações com denominadores iguais;
10. subtrair frações com denominadores iguais;
11. encontrar denominador comum;
12. aplicar MMC algébrico em casos básicos;
13. somar e subtrair frações com denominadores diferentes;
14. simplificar o resultado final;
15. reconhecer produtos notáveis em numeradores e denominadores;
16. trabalhar com diferença de quadrados;
17. trabalhar com trinômio quadrado perfeito;
18. evitar cancelamentos inválidos;
19. resolver frações complexas em casos básicos;
20. conferir o domínio antes e depois da simplificação.

---

## 3. Objetivos

Ao final desta aula, você deverá conseguir:

- simplificar `(x²-9)/(x-3)`;
- informar corretamente que `x≠3` na expressão original;
- simplificar `(x²-4)/(x²+4x+4)`;
- multiplicar duas frações algébricas;
- dividir usando o inverso da segunda fração;
- somar `2/x + 3/x`;
- somar `1/x + 1/y`;
- trabalhar com denominadores `x`, `x+1` e fatores polinomiais;
- identificar MMC algébrico;
- resolver os dois exemplos reais documentados da INEPAM;
- evitar cancelar `x` em `(x+2)/x`.

---

# PARTE I — CONCEITO E DOMÍNIO

## 4. O que é uma expressão algébrica fracionária

É uma expressão da forma:

`P/Q`

em que `P` e `Q` são expressões algébricas e:

`Q ≠ 0`.

Exemplo:

`(x+5)/(x-2)`.

O denominador é:

`x-2`.

Logo:

`x-2 ≠ 0`.

Portanto:

`x ≠ 2`.

---

## 5. Condição de existência

Uma fração nunca pode ter denominador zero.

Assim, em:

`3/(x+4)`

precisamos de:

`x+4 ≠ 0`

`x ≠ -4`.

---

## 6. Mais de um denominador

Considere:

`1/x + 2/(x-3)`.

Precisamos simultaneamente de:

`x ≠ 0`

e:

`x ≠ 3`.

Essas restrições fazem parte do domínio da expressão.

---

## 7. A simplificação não apaga a restrição original

Considere:

`(x²-9)/(x-3)`.

Fatore o numerador:

`x²-9 = (x-3)(x+3)`.

Então:

`[(x-3)(x+3)]/(x-3)`.

Para `x≠3`, podemos simplificar:

`x+3`.

### Atenção

A expressão simplificada é `x+3`, mas a expressão **original** não existia para:

`x=3`.

Portanto, a equivalência deve ser entendida como:

`(x²-9)/(x-3) = x+3`, para `x≠3`.

---

# PARTE II — CANCELAMENTO CORRETO

## 8. Cancelamos fatores

Exemplo:

`6x/(3x)`.

Fatores:

`6·x / (3·x)`.

Para `x≠0`:

`=2`.

---

## 9. Não cancelamos parcelas

Considere:

`(x+2)/x`.

Errado:

“cancela o x e sobra 2”.

Isso não é válido porque o `x` do numerador faz parte de uma **soma**.

### Teste numérico

Se `x=2`:

Expressão original:

`(2+2)/2 = 4/2 = 2`.

A simplificação errada daria:

`2`.

Neste caso coincidiu por acaso.

Agora `x=3`:

Original:

`(3+2)/3 = 5/3`.

A falsa simplificação continuaria dando 2.

Logo, é inválida.

---

## 10. Fatorar transforma parcelas em fatores

Exemplo:

`(3x+6)/(3x)`.

Numerador:

`3x+6 = 3(x+2)`.

Então:

`3(x+2)/(3x)`.

Podemos cancelar o fator 3:

`(x+2)/x`.

Não podemos cancelar o `x` restante.

---

# PARTE III — FATORAÇÃO COMO FERRAMENTA

## 11. Fator comum

`(4x+8)/(2x+4)`.

Fatore:

Numerador:

`4(x+2)`.

Denominador:

`2(x+2)`.

Então:

`4(x+2)/[2(x+2)]`.

Para `x≠-2`:

`=2`.

---

## 12. Diferença de quadrados

`(x²-25)/(x-5)`.

Fatore:

`x²-25=(x-5)(x+5)`.

Logo:

`[(x-5)(x+5)]/(x-5)`.

Para `x≠5`:

`x+5`.

---

## 13. Trinômio quadrado perfeito

`(x²+6x+9)/(x+3)`.

Numerador:

`x²+6x+9=(x+3)²`.

Então:

`(x+3)²/(x+3)`.

Para `x≠-3`:

`x+3`.

---

## 14. Fatoração no denominador

`(x-2)/(x²-4)`.

Denominador:

`x²-4=(x-2)(x+2)`.

Então:

`(x-2)/[(x-2)(x+2)]`.

Para:

`x≠2` e `x≠-2`,

resulta:

`1/(x+2)`.

As duas restrições originais continuam válidas.

---

# PARTE IV — MULTIPLICAÇÃO

## 15. Regra

Multiplique numeradores entre si e denominadores entre si.

`a/b · c/d = ac/bd`.

Depois, fatore e simplifique.

---

## 16. Exemplo

`(x/3) · (6/x²)`.

Multiplicando:

`6x/(3x²)`.

Para `x≠0`:

`=2/x`.

---

## 17. Melhor estratégia: simplificar antes

`[(x²-4)/(x+1)] · [(x+1)/(x-2)]`.

Fatore:

`x²-4=(x-2)(x+2)`.

Então:

`[(x-2)(x+2)/(x+1)] · [(x+1)/(x-2)]`.

Restrições originais:

`x≠-1`

e:

`x≠2`.

Simplifique fatores:

`x+2`.

Resposta:

`x+2`, para `x≠-1,2`.

---

# PARTE V — DIVISÃO

## 18. Regra

Dividir por uma fração significa multiplicar pelo seu inverso.

`a/b ÷ c/d = a/b · d/c`.

Além das restrições dos denominadores originais, o divisor não pode ser zero.

---

## 19. Exemplo

`(x/4) ÷ (x²/8)`.

Transforme:

`x/4 · 8/x²`.

Simplifique:

`8x/(4x²)`.

`=2/x`.

Condição:

`x≠0`.

---

## 20. Exemplo com fatoração

`[(x²-9)/(x+1)] ÷ [(x-3)/(x+1)]`.

Transforme a divisão:

`[(x²-9)/(x+1)] · [(x+1)/(x-3)]`.

Fatore:

`x²-9=(x-3)(x+3)`.

Simplifique:

`x+3`.

### Restrições

Da expressão original:

`x+1≠0` → `x≠-1`.

O divisor:

`(x-3)/(x+1)`

não pode ser zero, então:

`x≠3`.

Resultado:

`x+3`, com `x≠-1,3`.

---

# PARTE VI — ADIÇÃO E SUBTRAÇÃO: MESMO DENOMINADOR

## 21. Regra

Se os denominadores são iguais:

`a/c + b/c = (a+b)/c`.

---

## 22. Exemplo

`2/x + 5/x`.

`=(2+5)/x`.

`=7/x`.

Restrição:

`x≠0`.

---

## 23. Subtração

`7/(x+1) - 3/(x+1)`.

`=4/(x+1)`.

Restrição:

`x≠-1`.

---

# PARTE VII — DENOMINADORES DIFERENTES

## 24. Caso simples: x e y

`1/x + 1/y`.

Denominador comum:

`xy`.

Então:

`1/x = y/(xy)`.

`1/y = x/(xy)`.

Logo:

`1/x + 1/y = (x+y)/(xy)`.

Restrições:

`x≠0`, `y≠0`.

---

## 25. Caso x e 2x

`1/x + 3/(2x)`.

MMC:

`2x`.

Primeira fração:

`2/(2x)`.

Então:

`2/(2x)+3/(2x)=5/(2x)`.

---

## 26. Caso x e x+1

`1/x + 2/(x+1)`.

Denominador comum:

`x(x+1)`.

Primeira fração:

`(x+1)/[x(x+1)]`.

Segunda:

`2x/[x(x+1)]`.

Somando:

`(x+1+2x)/[x(x+1)]`.

`=(3x+1)/[x(x+1)]`.

Restrições:

`x≠0,-1`.

---

# PARTE VIII — MMC ALGÉBRICO

## 27. Ideia

O MMC algébrico segue a mesma lógica do MMC numérico:

- decomponha em fatores;
- tome cada fator necessário;
- use o maior expoente requerido.

---

## 28. Exemplo

Denominadores:

`x(x+2)`

e:

`x²`.

Fatores:

- primeiro: `x·(x+2)`;
- segundo: `x²`.

MMC:

`x²(x+2)`.

---

## 29. Exemplo com quadrado

Denominadores:

`x²-4`

e:

`x-2`.

Fatore:

`x²-4=(x-2)(x+2)`.

O primeiro já contém o segundo como fator.

MMC:

`(x-2)(x+2)`.

---

# PARTE IX — SOMA COM FATORAÇÃO

## 30. Exemplo

`1/(x-2) + 1/(x+2)`.

Denominador comum:

`(x-2)(x+2)`.

Numerador:

`(x+2)+(x-2)`.

`=2x`.

Logo:

`2x/[(x-2)(x+2)]`.

Também:

`2x/(x²-4)`.

Restrições:

`x≠2,-2`.

---

## 31. Subtração semelhante

`1/(x-2) - 1/(x+2)`.

Numerador:

`(x+2)-(x-2)`.

`=x+2-x+2`.

`=4`.

Resultado:

`4/(x²-4)`.

---

# PARTE X — FRAÇÃO COMPLEXA

## 32. Conceito

É uma fração que contém outras frações.

Exemplo:

`(1/x)/(2/y)`.

Trate como divisão:

`1/x ÷ 2/y`.

Multiplique pelo inverso:

`1/x · y/2`.

Resultado:

`y/(2x)`.

Com:

`x≠0`, `y≠0`.

---

## 33. Exemplo

`(1 + 1/x)/(1 - 1/x)`.

Transforme numerador e denominador:

Numerador:

`1+1/x=(x+1)/x`.

Denominador:

`1-1/x=(x-1)/x`.

Logo:

`[(x+1)/x] ÷ [(x-1)/x]`.

Multiplique pelo inverso:

`[(x+1)/x] · [x/(x-1)]`.

Simplifique:

`(x+1)/(x-1)`.

### Restrições

`x≠0`.

Além disso, o denominador da fração complexa não pode ser zero:

`1-1/x≠0`.

Isso exclui:

`x≠1`.

---

# PARTE XI — QUESTÕES REAIS DA INEPAM

## 34. QUESTÃO REAL — INEPAM 1 — Embu das Artes/SP — Questão 14

**Origem:** Prefeitura Municipal de Embu das Artes/SP.  
**Concurso:** Concurso Público nº 001/2023.  
**Disciplina:** Matemática.  
**Grupo:** Auxiliar de Saúde Bucal, Cirurgião Dentista, Eletricista, Enfermeiro, Engenheiro de Segurança do Trabalho, Mecânico, médicos e Procurador.  
**Questão:** 14.  
**Fonte:** julgamento oficial dos recursos.  
**Gabarito oficial:** alternativa **A**.  
**Recurso:** indeferido.

O julgamento apresenta a expressão:

`(4-4b+b²)/(6-3b)`.

### Passo 1 — reorganizar o numerador

`4-4b+b²`

pode ser escrito como:

`b²-4b+4`.

Isso é trinômio quadrado perfeito:

`(b-2)²`.

Também é equivalente a:

`(2-b)²`.

### Passo 2 — fatorar o denominador

`6-3b = 3(2-b)`.

### Passo 3 — substituir

`(2-b)²/[3(2-b)]`.

### Passo 4 — simplificar

Para:

`2-b≠0`

ou seja:

`b≠2`,

podemos cancelar um fator:

`(2-b)/3`.

### Resultado oficial

`(2-b)/3`.

Alternativa A.

### Lição para Rincão

A questão combina exatamente:

- expressão fracionária;
- fatoração;
- produto notável;
- simplificação.

---

## 35. QUESTÃO REAL — INEPAM 2 — Embu das Artes/SP — Secretário de Escola

**Origem:** Prefeitura Municipal de Embu das Artes/SP.  
**Concurso:** Concurso Público nº 001/2023.  
**Grupo:** inclui **Secretário de Escola**, além de Analista de Meio Ambiente, Assistente Social, Bibliotecário, Farmacêutico, médicos, Técnico de Enfermagem e Técnico Desportivo.  
**Questão:** 11.  
**Fonte:** julgamento oficial dos recursos.  
**Gabarito oficial:** alternativa **A**.  
**Recurso:** indeferido.

Expressão:

`(2a+6b)/(a²+6ab+9b²)`.

A banca rotula formalmente a habilidade como **fatoração de expressões algébricas**, mas o objeto apresentado é também uma expressão algébrica fracionária.

### Passo 1 — numerador

`2a+6b = 2(a+3b)`.

### Passo 2 — denominador

`a²+6ab+9b²`

é:

`(a+3b)²`.

### Passo 3 — simplificação

`2(a+3b)/(a+3b)²`

`=2/(a+3b)`.

### Restrição

A expressão original exige:

`a+3b≠0`.

### Resultado oficial

`2/(a+3b)`.

Alternativa A.

### Lição

Fatoração e expressões algébricas fracionárias estão fortemente conectadas: a simplificação normalmente começa pela fatoração.

---

# PARTE XII — COMO A INEPAM COBRA: EVIDÊNCIA E LIMITE

## 36. Evidência comprovada

A documentação oficial comprova que:

1. `Expressões algébricas fracionárias – operações – simplificação` aparece em editais oficiais da INEPAM;
2. a banca já apresentou expressões fracionárias com polinômios;
3. a resolução oficial usa fatoração antes de simplificar;
4. trinômio quadrado perfeito apareceu diretamente;
5. fator comum apareceu diretamente;
6. o resultado final foi obtido por cancelamento de fatores.

---

## 37. O que não podemos afirmar

Não há amostra suficiente para declarar que a INEPAM:

- cobra frequentemente soma de frações algébricas;
- prefere MMC algébrico;
- costuma cobrar frações complexas;
- sempre exige declarar domínio;
- cobra esse tópico em toda prova.

Esses conteúdos são ensinados porque são necessários para dominar integralmente o item do edital.

---

# PARTE XIII — EXEMPLOS RESOLVIDOS

## 38. Exemplo 1 — simplificação

`(x²-16)/(x-4)`.

Fatore:

`(x-4)(x+4)/(x-4)`.

Para `x≠4`:

`x+4`.

---

## 39. Exemplo 2 — denominador fatorado

`(x+3)/(x²+6x+9)`.

Denominador:

`(x+3)²`.

Então:

`(x+3)/(x+3)²`.

Para `x≠-3`:

`1/(x+3)`.

---

## 40. Exemplo 3 — multiplicação

`[(x-1)/(x+2)]·[(x+2)/(x+5)]`.

Restrições:

`x≠-2,-5`.

Simplifique:

`(x-1)/(x+5)`.

---

## 41. Exemplo 4 — divisão

`[(x+1)/x] ÷ [(x+1)/(x-2)]`.

Multiplique pelo inverso:

`[(x+1)/x]·[(x-2)/(x+1)]`.

Resultado:

`(x-2)/x`.

Restrições:

`x≠0,-1,2`.

---

## 42. Exemplo 5 — soma

`2/x + 1/(x+1)`.

MMC:

`x(x+1)`.

Numerador:

`2(x+1)+x`.

`=2x+2+x`.

`=3x+2`.

Resultado:

`(3x+2)/[x(x+1)]`.

---

## 43. Exemplo 6 — diferença

`3/(x-1)-1/(x+1)`.

Denominador:

`(x-1)(x+1)`.

Numerador:

`3(x+1)-(x-1)`.

`=3x+3-x+1`.

`=2x+4`.

`=2(x+2)`.

Resultado:

`2(x+2)/(x²-1)`.

---

## 44. Exemplo 7 — expressão completa

Simplifique:

`[(x²-4)/(x²+4x+4)]·[(x+2)/(x-2)]`.

Fatore:

`x²-4=(x-2)(x+2)`.

`x²+4x+4=(x+2)²`.

Então:

`[(x-2)(x+2)/(x+2)²]·[(x+2)/(x-2)]`.

Simplificando os fatores:

`1`.

Restrições originais:

`x≠-2,2`.

---

# PARTE XIV — PEGADINHAS E ERROS FREQUENTES

## 45. Erro 1 — cancelar termos de uma soma

Errado:

`(x+3)/x = 3`.

Não existe esse cancelamento.

---

## 46. Erro 2 — esquecer o domínio

`(x²-9)/(x-3)=x+3`

somente para:

`x≠3`.

---

## 47. Erro 3 — somar denominadores

Errado:

`1/x + 1/y = 2/(x+y)`.

Correto:

`(x+y)/(xy)`.

---

## 48. Erro 4 — dividir sem inverter

Na divisão de frações, inverta a **segunda** fração e multiplique.

---

## 49. Erro 5 — não fatorar

Antes de tentar simplificar:

`(x²-4)/(x-2)`,

fatere:

`x²-4=(x-2)(x+2)`.

---

## 50. Erro 6 — cancelar antes de identificar fatores

Em:

`(x²+2x)/x`

primeiro:

`x(x+2)/x`.

Agora o cancelamento é justificável.

---

## 51. Erro 7 — perder restrições após cancelamento

Se um fator foi cancelado, o valor que o zerava continua proibido porque a restrição veio da expressão original.

---

# PARTE XV — RESUMO

## 52. Quadro-resumo

| Situação | Estratégia |
|---|---|
| Denominador | nunca pode ser zero |
| Simplificação | fatorar antes |
| Cancelamento | apenas entre fatores |
| Multiplicação | numerador×numerador, denominador×denominador |
| Divisão | multiplicar pelo inverso |
| Soma, mesmo denominador | somar numeradores |
| Soma, denominadores diferentes | obter denominador comum |
| MMC algébrico | usar fatores necessários |
| Diferença de quadrados | `(a-b)(a+b)` |
| Trinômio quadrado perfeito | reconhecer quadrado de binômio |
| Restrição | vem do original e permanece |

---

# PARTE XVI — REVISÃO RÁPIDA — 5 MINUTOS

## 53. O que memorizar

1. Denominador nunca pode ser zero.
2. Descubra as restrições primeiro.
3. Fatore antes de simplificar.
4. Cancele fatores, não parcelas.
5. Multiplicação: multiplique numeradores e denominadores.
6. Divisão: inverta a segunda fração.
7. Soma/subtração exige denominador comum.
8. Preserve as restrições originais.
9. Produtos notáveis ajudam muito.
10. Fatoração é a principal ferramenta de simplificação.

---

# PARTE XVII — FLASHCARDS

## 54. Flashcards

**1. O que é expressão algébrica fracionária?**  
Uma fração com expressões algébricas no numerador, denominador ou ambos.

**2. Qual a condição básica do denominador?**  
Ser diferente de zero.

**3. Em `1/(x-4)`, qual a restrição?**  
`x≠4`.

**4. Podemos cancelar x em `(x+2)/x`?**  
Não.

**5. Por quê?**  
Porque x no numerador é uma parcela, não um fator comum de todo o numerador.

**6. Simplificação de `(x²-9)/(x-3)`?**  
`x+3`, com `x≠3`.

**7. Fatoração de `x²-9`?**  
`(x-3)(x+3)`.

**8. Fatoração de `x²+6x+9`?**  
`(x+3)²`.

**9. Como dividir duas frações?**  
Multiplicar a primeira pelo inverso da segunda.

**10. `1/x+1/y`?**  
`(x+y)/(xy)`.

**11. MMC de x e 2x?**  
`2x`.

**12. MMC de `(x-2)` e `(x-2)(x+2)`?**  
`(x-2)(x+2)`.

**13. A simplificação elimina a restrição original?**  
Não.

**14. `(4-4b+b²)` pode ser fatorado como?**  
`(2-b)²`.

**15. `6-3b` fatorado?**  
`3(2-b)`.

**16. Resultado de `(4-4b+b²)/(6-3b)`?**  
`(2-b)/3`, com `b≠2`.

**17. `2a+6b` fatorado?**  
`2(a+3b)`.

**18. `a²+6ab+9b²`?**  
`(a+3b)²`.

**19. Resultado da fração anterior?**  
`2/(a+3b)`.

**20. Em soma de frações diferentes, o que buscar?**  
Denominador comum ou MMC algébrico.

**21. Podemos somar denominadores diretamente?**  
Não.

**22. O divisor de uma divisão pode ser zero?**  
Não.

**23. A INEPAM já cobrou simplificação de fração algébrica?**  
Sim, há julgamentos oficiais documentados.

**24. Qual a ferramenta central antes de cancelar?**  
Fatoração.

---

# PARTE XVIII — QUESTÕES DE FIXAÇÃO

Todas as questões abaixo são:

> **QUESTÃO INÉDITA — ESTILO INEPAM**

## 55. Questão 1

Simplifique:

`(x²-25)/(x-5)`.

A) `x-5`  
B) `x+5`  
C) `x²+5`  
D) `1/(x+5)`  
E) `5`

**Gabarito: B.**

**Comentário:**  
`x²-25=(x-5)(x+5)`. Para `x≠5`, sobra `x+5`.

---

## 56. Questão 2

Na expressão:

`3/(x+7)`

o valor proibido de `x` é:

A) 7  
B) 3  
C) -3  
D) -7  
E) 0

**Gabarito: D.**

---

## 57. Questão 3

Assinale a simplificação válida de:

`(4x+8)/(2x+4)`.

A) `2`, com `x≠-2`  
B) `2`, sem restrição  
C) `x+2`  
D) `2x+4`  
E) `1/2`

**Gabarito: A.**

---

## 58. Questão 4

O resultado de:

`2/x + 3/x`

é:

A) `5/(2x)`  
B) `5/x`  
C) `6/x²`  
D) `5/(x²)`  
E) `6/x`

**Gabarito: B.**

---

## 59. Questão 5

O resultado de:

`1/x + 1/y`

é:

A) `2/(x+y)`  
B) `1/(xy)`  
C) `(x+y)/(xy)`  
D) `xy/(x+y)`  
E) `(x-y)/(xy)`

**Gabarito: C.**

---

## 60. Questão 6

Simplifique:

`[(x²-4)/(x+1)]·[(x+1)/(x-2)]`.

A) `x-2`  
B) `x+1`  
C) `x+2`  
D) `x²-4`  
E) `1`

**Gabarito: C.**

---

## 61. Questão 7

Na questão anterior, quais valores devem ser excluídos do domínio da expressão original?

A) somente `x=2`  
B) somente `x=-1`  
C) `x=-1` e `x=2`  
D) `x=-2` e `x=2`  
E) nenhum

**Gabarito: C.**

---

## 62. Questão 8

Simplifique:

`(x²+6x+9)/(x+3)`.

A) `x-3`  
B) `x+3`, com `x≠-3`  
C) `x+3`, sem restrição  
D) `x²+3`  
E) `1`

**Gabarito: B.**

---

## 63. Questão 9

A divisão:

`(x/4) ÷ (x²/8)`

é igual a:

A) `x/2`  
B) `2/x`  
C) `x²/2`  
D) `2x`  
E) `1/x²`

**Gabarito: B.**

---

## 64. Questão 10

Calcule:

`1/(x-2) + 1/(x+2)`.

A) `2/(x²-4)`  
B) `2x/(x²-4)`  
C) `x/(x²+4)`  
D) `2x/(x²+4)`  
E) `1/(2x)`

**Gabarito: B.**

---

## 65. Questão 11

Calcule:

`1/(x-2) - 1/(x+2)`.

A) `4/(x²-4)`  
B) `2x/(x²-4)`  
C) `-4/(x²-4)`  
D) `1/(x²-4)`  
E) `4/(x²+4)`

**Gabarito: A.**

---

## 66. Questão 12

O resultado de:

`(x-2)/(x²-4)`

é:

A) `1/(x-2)`  
B) `1/(x+2)`, com `x≠±2`  
C) `x+2`  
D) `x-2`  
E) `1/(x+2)`, com única restrição `x≠-2`

**Gabarito: B.**

---

## 67. Questão 13

Assinale a afirmação correta.

A) Podemos cancelar x em `(x+1)/x`.  
B) As restrições desaparecem após simplificar.  
C) Na divisão de frações, invertemos a primeira fração.  
D) Cancelamento válido ocorre entre fatores multiplicativos.  
E) `1/x+1/y=2/(x+y)`.

**Gabarito: D.**

---

## 68. Questão 14

Simplifique:

`(b²-4b+4)/(6-3b)`.

A) `(b-2)/3`  
B) `(2-b)/3`  
C) `3/(2-b)`  
D) `(b+2)/3`  
E) `1/3`

**Gabarito: B.**

**Comentário:**  
Numerador `(b-2)²=(2-b)²`; denominador `3(2-b)`. Para `b≠2`, resultado `(2-b)/3`.

---

## 69. Questão 15

Simplifique:

`(3x²+6x)/(3x)`.

A) `x+2`, com `x≠0`  
B) `x+2`, sem restrição  
C) `3x+6`  
D) `x²+2`  
E) `3(x+2)`

**Gabarito: A.**

**Comentário:**  
`3x²+6x=3x(x+2)`. Cancela-se `3x`, mas a expressão original exige `x≠0`.

---

# PARTE XIX — GABARITO RÁPIDO

## 70. Gabarito

1. B  
2. D  
3. A  
4. B  
5. C  
6. C  
7. C  
8. B  
9. B  
10. B  
11. A  
12. B  
13. D  
14. B  
15. A

---

# PARTE XX — COMO ESTUDAR ESTE TEMA

## 71. Roteiro de treino

### Bloco 1 — domínio

Antes de fazer qualquer conta, liste os valores que zeram denominadores.

### Bloco 2 — fatoração

Revise:

- fator comum;
- diferença de quadrados;
- trinômio quadrado perfeito.

### Bloco 3 — simplificação

Faça 10 exercícios apenas de fatorar e cancelar fatores.

### Bloco 4 — multiplicação e divisão

Treine simplificação antes de multiplicar.

### Bloco 5 — soma e subtração

Comece por:

- denominadores iguais;
- `x` e `2x`;
- `x` e `x+1`;
- `x-2` e `x+2`.

### Bloco 6 — questões reais

Refaça sem olhar:

1. `(4-4b+b²)/(6-3b)`;
2. `(2a+6b)/(a²+6ab+9b²)`.

---

# PARTE XXI — FONTES E RASTREABILIDADE

## 72. Fonte do edital

**Prefeitura Municipal de Rincão-SP — Concurso Público nº 001/2026 — INEPAM.**

Conteúdo programático:

> Expressões algébricas fracionárias — operações — simplificação.

Fonte oficial do concurso e mapa mestre do projeto.

---

## 73. Evidência oficial do conteúdo programático

**Prefeitura Municipal de Santa Isabel/SP — Processo Seletivo nº 001/2026 — INEPAM.**

O Anexo II inclui, para ensino médio/técnico:

> `Expressões algébricas fracionárias – operações – simplificação.`

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2285`

---

## 74. Fonte INEPAM — Embu das Artes/SP

**Prefeitura Municipal de Embu das Artes/SP — Concurso Público nº 001/2023.**

Documento:

**Edital de Divulgação do Julgamento dos Recursos Referentes aos Gabaritos das Provas Objetivas.**

### Questão 14

O julgamento registra:

`(4-4b+b²)/(6-3b)`

`=(2-b)²/[3(2-b)]`

`=(2-b)/3`.

Alternativa A.

Recurso indeferido.

### Questão 11 — grupo com Secretário de Escola

O julgamento registra:

`(2a+6b)/(a²+6ab+9b²)`

`=2(a+3b)/(a+3b)²`

`=2/(a+3b)`.

Alternativa A.

Recurso indeferido.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=543`

---

## 75. Verificação do PDF

O PDF oficial do julgamento de Embu das Artes foi aberto e seu texto integral foi recuperado.

As resoluções relevantes aparecem nas páginas correspondentes às Questões 14 e 11 do grupo citado.

Foram realizadas tentativas de captura visual dessas páginas, conforme o protocolo de auditoria do projeto, mas o servidor da INEPAM retornou erros temporários de cache/502 nas capturas.

Por isso:

- o texto oficial foi utilizado;
- nenhuma alternativa ausente foi reconstruída;
- a limitação técnica da captura fica registrada.

---

## 76. Limite da pesquisa

Foram pesquisados, em julgamentos oficiais, os termos:

- expressões algébricas fracionárias;
- fração algébrica;
- simplificação de frações algébricas;
- denominador algébrico;
- MMC algébrico.

A pesquisa encontrou os dois exemplos acima como casos integralmente verificáveis e diretamente pertinentes.

Não foi encontrada amostra suficiente para afirmar frequência estatística de soma, divisão ou MMC algébrico na banca.

---

# PARTE XXII — CHECKLIST EDITORIAL

## 77. Checklist

- [x] item do edital identificado;
- [x] cargoIds compartilhados;
- [x] conceito;
- [x] domínio;
- [x] restrições;
- [x] cancelamento de fatores;
- [x] proibição de cancelamento de parcelas;
- [x] fator comum;
- [x] diferença de quadrados;
- [x] trinômio quadrado perfeito;
- [x] multiplicação;
- [x] divisão;
- [x] adição;
- [x] subtração;
- [x] denominador comum;
- [x] MMC algébrico;
- [x] fração complexa básica;
- [x] preservação das restrições;
- [x] 2 questões reais verificáveis INEPAM;
- [x] 15 questões inéditas A–E;
- [x] gabarito comentado;
- [x] 24 flashcards;
- [x] revisão rápida;
- [x] fontes oficiais;
- [x] limitações de captura registradas;
- [x] status `revisado`.

---

## 78. Próxima sequência do edital

Após **Expressões algébricas fracionárias — operações e simplificação**, o próximo item de Matemática no mapa mestre é:

> **MDC e MMC.**

