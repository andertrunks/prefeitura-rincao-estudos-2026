---
id: medio-matematica-probabilidade-analise-combinatoria-001
stableItemId: MED-MAT-013
cargoIds:
  - agente-administrativo
  - monitor-educacao
nivel: ensino-medio
disciplinaId: medio-matematica
temaId: probabilidade-analise-combinatoria
titulo: "Probabilidade e análise combinatória — espaço amostral, contagem, permutações, arranjos e combinações"
editalRef: "Anexo II — Conhecimentos Gerais — Cargos de Ensino Médio e Técnico — Matemática: Probabilidade e análise combinatória"
status: revisado
versao: "0.1.0"
revisadoEm: "2026-08-23"
sourceRefs:
  - src-edital-rincao-2026
  - src-rerratificacao-rincao-2026-pendente-auditoria
  - src-inepam-santa-isabel-002-2024-recursos
  - src-inepam-sao-goncalo-sapucai-001-2024-recursos
  - src-inepam-crea-mt-001-2025-recursos
  - src-inepam-embu-artes-003-2026-recursos
  - src-inepam-nova-ubirata-001-2024-recursos
  - src-inepam-santa-isabel-001-2024-recursos
  - src-inepam-ipiranga-norte-002-2025-recursos
  - src-inepam-ipiranga-norte-002-2025-retificacao-recursos
  - src-inepam-marinopolis-001-2025-recursos
---

# Probabilidade e análise combinatória — espaço amostral, contagem, permutações, arranjos e combinações

## 1. Identificação e referência ao edital

Esta aula atende ao item:

> **Probabilidade e análise combinatória**

previsto em Matemática para os cargos de **Agente Administrativo** e **Monitor de Educação** do Concurso Público nº 001/2026 da Prefeitura Municipal de Rincão-SP, banca INEPAM.

A aula é compartilhada pelos dois cargos por meio de `cargoIds[]`.

A pesquisa oficial da banca foi realizada antes da revisão final. Foram localizados julgamentos da INEPAM que comprovam cobrança real de:

- probabilidade como razão entre casos favoráveis e casos possíveis;
- simplificação de frações de probabilidade;
- conversão de probabilidade em porcentagem;
- probabilidade complementar;
- probabilidade em mais de uma etapa;
- evento “exatamente um” em três realizações;
- princípio multiplicativo implícito;
- anagramas;
- permutação simples;
- permutação com repetição;
- comparação, soma, divisão e redução de quantidades de anagramas.

Há exemplos próximos dos cargos do projeto:

- **Santa Isabel/SP — 2024 — Agente de Administração Pública**: probabilidade `12/18 = 2/3`;
- **Nova Ubiratã/MT — 2024 — Técnico Administrativo Educacional — Secretário Escolar**: `9/36 = 25%`;
- **Ipiranga do Norte/MT — 2025 — Agente de Desenvolvimento Educacional**: anagramas de MARIA e MANUELA;
- **Marinópolis/SP — 2025 — Escriturário e Auxiliar de Desenvolvimento Infantil** no grupo da questão: anagramas de MORANGO;
- **Embu das Artes/SP — 2026 — professores**: probabilidade simples e complementar.

> **Regra de ouro da probabilidade:** quando os resultados elementares são equiprováveis,  
> `P(A) = casos favoráveis / casos possíveis`.

> **Regra de ouro da análise combinatória:** antes de escolher uma fórmula, responda:
>
> 1. **a ordem importa?**
> 2. **há repetição?**
> 3. **estou usando todos os elementos ou apenas parte deles?**

### Situação editorial e rerratificação

Na consulta oficial realizada em 23/08/2026, a página do Concurso Público nº 001/2026 de Rincão lista entre os arquivos disponíveis:

- `Edital Concurso Público nº 001/2026`;
- `Rerratificação do Edital de Abertura`.

Portanto, a produção desta aula **não elimina o bloqueio editorial global** do projeto. A rerratificação oficial ainda precisa ser recuperada e auditada integralmente contra o mapa de cobertura antes de qualquer declaração de pacote final publicável.

---

# 2. O que o edital cobra

Para dominar o tema, você precisa saber:

1. compreender experimento aleatório;
2. reconhecer espaço amostral;
3. reconhecer evento;
4. contar resultados possíveis;
5. contar casos favoráveis;
6. calcular probabilidade em casos equiprováveis;
7. converter fração em decimal e porcentagem;
8. calcular probabilidade complementar;
9. reconhecer evento certo;
10. reconhecer evento impossível;
11. trabalhar com eventos mutuamente exclusivos;
12. multiplicar probabilidades em etapas independentes;
13. interpretar “exatamente um”;
14. interpretar “pelo menos um”;
15. interpretar “nenhum”;
16. compreender o princípio fundamental da contagem;
17. trabalhar com fatorial;
18. calcular permutações simples;
19. calcular permutações com repetição;
20. resolver problemas de anagramas;
21. reconhecer arranjos;
22. reconhecer combinações;
23. distinguir arranjo de combinação;
24. usar análise combinatória para contar casos em probabilidade;
25. conferir se o resultado de probabilidade está entre 0 e 1.

---

# PARTE I — EXPERIMENTO ALEATÓRIO

## 3. Conceito

Experimento aleatório é uma situação cujo resultado não pode ser conhecido com certeza antes da realização, embora possamos descrever os resultados possíveis.

Exemplos:

- lançar uma moeda;
- lançar um dado;
- retirar uma ficha de uma urna;
- sortear um nome;
- selecionar ao acaso um item;
- escolher aleatoriamente uma rota entre várias.

---

# PARTE II — ESPAÇO AMOSTRAL

## 4. Conceito

Espaço amostral é o conjunto de todos os resultados possíveis de um experimento.

Símbolo usual:

`Ω`.

### Exemplo — moeda

`Ω = {cara, coroa}`.

Número de resultados:

`n(Ω)=2`.

---

## 5. Exemplo — dado

Dado comum de seis faces:

`Ω={1,2,3,4,5,6}`.

Logo:

`n(Ω)=6`.

---

## 6. Exemplo — duas moedas

Representando:

- C = cara;
- K = coroa.

Espaço amostral:

`Ω={CC, CK, KC, KK}`.

Total:

`n(Ω)=4`.

---

# PARTE III — EVENTO

## 7. Conceito

Evento é um subconjunto do espaço amostral.

Exemplo:

lançar um dado e obter número par.

Evento A:

`A={2,4,6}`.

Então:

`n(A)=3`.

---

# PARTE IV — PROBABILIDADE CLÁSSICA

## 8. Fórmula

Quando todos os resultados elementares são equiprováveis:

`P(A)=n(A)/n(Ω)`.

onde:

- `n(A)` = casos favoráveis;
- `n(Ω)` = casos possíveis.

---

## 9. Exemplo básico

Probabilidade de sair número par num dado:

Casos favoráveis:

`{2,4,6}` → 3.

Casos possíveis:

6.

Então:

`P(par)=3/6=1/2`.

Decimal:

`0,5`.

Porcentagem:

`50%`.

---

# PARTE V — LIMITES DA PROBABILIDADE

## 10. Intervalo possível

Para qualquer evento A:

`0 ≤ P(A) ≤ 1`.

Em porcentagem:

`0% ≤ P(A) ≤ 100%`.

Se sua conta produz probabilidade maior que 1 ou maior que 100%, revise a montagem.

---

## 11. Evento impossível

Probabilidade:

`0`.

Exemplo:

obter 8 num dado comum de seis faces.

---

## 12. Evento certo

Probabilidade:

`1`.

Exemplo:

num dado comum, obter um número entre 1 e 6.

---

# PARTE VI — PROBABILIDADE COMPLEMENTAR

## 13. Conceito

O complementar de A significa:

> A não ocorrer.

Fórmula:

`P(Aᶜ)=1-P(A)`.

Em porcentagem:

`P(não A)=100%-P(A)`.

---

## 14. Exemplo

Probabilidade de chuva:

37%.

Probabilidade de não chover:

`100%-37%=63%`.

A INEPAM cobrou exatamente essa ideia em Embu das Artes/2026.

---

## 15. Exemplo com defeitos

18 carrinhos:

- 6 defeituosos;
- 12 sem defeito.

Probabilidade de selecionar um carrinho sem defeito:

`12/18`.

Simplificando por 6:

`2/3`.

Esse raciocínio foi cobrado pela INEPAM num grupo com **Agente de Administração Pública**.

---

# PARTE VII — “PELO MENOS UM”

## 16. Estratégia pelo complemento

Muitas vezes:

`P(pelo menos um)=1-P(nenhum)`.

### Exemplo — duas moedas

Queremos pelo menos uma cara.

Espaço:

`CC, CK, KC, KK`.

O único resultado sem nenhuma cara é:

`KK`.

Então:

`P(nenhuma cara)=1/4`.

Logo:

`P(pelo menos uma cara)=1-1/4`.

`=3/4`.

---

# PARTE VIII — SOMA DE PROBABILIDADES

## 17. Eventos mutuamente exclusivos

Se A e B não podem acontecer ao mesmo tempo:

`P(A ou B)=P(A)+P(B)`.

### Exemplo

Num dado:

A = sair 1.

B = sair 6.

Então:

`P(A ou B)=1/6+1/6`.

`=2/6`.

`=1/3`.

---

# PARTE IX — MULTIPLICAÇÃO DE PROBABILIDADES

## 18. Etapas independentes

Quando uma etapa não altera a probabilidade da outra:

`P(A e B)=P(A)·P(B)`.

### Exemplo

Duas moedas honestas.

Probabilidade de cara nas duas:

`1/2 · 1/2`.

`=1/4`.

---

# PARTE X — “EXATAMENTE UM”

## 19. Ideia

Se queremos exatamente um sucesso em três tentativas, precisamos considerar todas as posições possíveis do sucesso.

Representemos:

- V = sucesso;
- C = outro resultado.

As possibilidades são:

- VCC;
- CVC;
- CCV.

Esse formato foi cobrado diretamente pela INEPAM no Concurso do CREA/MT.

---

## 20. Exemplo com probabilidades diferentes de 1/2

Sucesso:

`1/4`.

Fracasso:

`3/4`.

Exatamente um sucesso em três tentativas:

VCC:

`1/4·3/4·3/4=9/64`.

CVC:

`3/4·1/4·3/4=9/64`.

CCV:

`3/4·3/4·1/4=9/64`.

Some:

`27/64`.

Esse é exatamente o procedimento documentado pela INEPAM.

---

# PARTE XI — SEM REPOSIÇÃO

## 21. Mudança do espaço amostral

Quando um objeto é retirado e **não devolvido**, a quantidade total muda.

### Exemplo

Urna:

- 3 bolas azuis;
- 2 vermelhas.

Probabilidade de retirar duas azuis, sem reposição:

Primeira azul:

`3/5`.

Depois restam:

- 2 azuis;
- 4 bolas no total.

Segunda azul:

`2/4`.

Então:

`3/5·2/4`.

`=6/20`.

`=3/10`.

### Observação editorial

Esse é um desenvolvimento pedagógico natural de probabilidade. A pesquisa desta versão não permite afirmar frequência específica desse subtipo na INEPAM.

---

# PARTE XII — PRINCÍPIO FUNDAMENTAL DA CONTAGEM

## 22. Princípio multiplicativo

Se uma escolha pode ser feita de `m` maneiras e uma segunda de `n` maneiras, a sequência das duas escolhas pode ser realizada de:

`m·n`

maneiras.

---

## 23. Exemplo — roupas

3 camisas.

4 calças.

Quantidade de conjuntos com uma camisa e uma calça:

`3·4=12`.

---

## 24. Exemplo — três etapas

Uma refeição pode ter:

- 2 entradas;
- 5 pratos principais;
- 3 sobremesas.

Total:

`2·5·3=30`.

---

# PARTE XIII — FATORIAL

## 25. Definição

Para inteiro positivo n:

`n!=n·(n-1)·(n-2)·...·2·1`.

Exemplos:

`3!=6`.

`4!=24`.

`5!=120`.

`6!=720`.

`7!=5040`.

---

## 26. Caso especial

`0!=1`.

---

# PARTE XIV — PERMUTAÇÃO SIMPLES

## 27. Quando usar

Permutação simples ocorre quando:

- usamos **todos** os elementos;
- os elementos são distintos;
- a ordem importa.

Fórmula:

`Pₙ=n!`.

---

## 28. Exemplo — CAFE

A palavra CAFE possui quatro letras distintas.

Quantidade de anagramas:

`4!=24`.

A INEPAM documentou esse cálculo em Santa Isabel.

---

## 29. Exemplo — fila

Três pessoas:

A, B e C.

Quantidade de ordens possíveis:

`3!=6`.

---

# PARTE XV — PERMUTAÇÃO COM REPETIÇÃO

## 30. Fórmula

Quando existem repetições:

`P=n!/(a!·b!·c!...)`

onde:

- n = número total de elementos;
- a, b, c = quantidades de repetições de cada grupo idêntico.

---

## 31. Exemplo — VIVA

Quatro letras.

V aparece duas vezes.

`4!/2!`.

`=24/2`.

`=12`.

A INEPAM registrou esse cálculo em São Gonçalo do Sapucaí.

---

## 32. Exemplo — TREZE

Cinco letras.

E aparece duas vezes.

`5!/2!`.

`=120/2`.

`=60`.

Há julgamento oficial da INEPAM com esse resultado.

---

## 33. Exemplo — MORANGO

Sete letras.

O aparece duas vezes.

`7!/2!`.

`=5040/2`.

`=2520`.

A INEPAM registra 2520 anagramas para MORANGO.

---

# PARTE XVI — ARRANJO SIMPLES

## 34. Conceito

Arranjo simples ocorre quando:

- usamos apenas parte dos elementos;
- a ordem importa;
- não há repetição.

Fórmula:

`A(n,p)=n!/(n-p)!`.

---

## 35. Exemplo

Cinco candidatos.

Escolher:

- presidente;
- vice-presidente.

A ordem importa.

`A(5,2)=5!/3!`.

`=5·4`.

`=20`.

---

# PARTE XVII — COMBINAÇÃO SIMPLES

## 36. Conceito

Combinação simples ocorre quando:

- usamos parte dos elementos;
- a ordem **não** importa.

Fórmula:

`C(n,p)=n!/[p!(n-p)!]`.

---

## 37. Exemplo

Cinco pessoas.

Escolher duas para uma comissão.

`C(5,2)=5!/(2!3!)`.

`=10`.

A comissão Ana-Bruno é a mesma comissão Bruno-Ana.

---

# PARTE XVIII — COMO ESCOLHER A FÓRMULA

## 38. Pergunta 1 — a ordem importa?

### Sim

Considere permutação ou arranjo.

### Não

Considere combinação.

---

## 39. Pergunta 2 — uso todos os elementos?

### Sim + ordem importa

Permutação.

### Não + ordem importa

Arranjo.

---

## 40. Pergunta 3 — existem repetições?

Se há repetição de elementos idênticos numa permutação:

divida pelos fatoriais das repetições.

---

# PARTE XIX — EXEMPLOS DE DECISÃO

## 41. Presidente e vice

Ordem importa.

Ana presidente e Bruno vice é diferente de Bruno presidente e Ana vice.

Arranjo.

---

## 42. Comissão de três pessoas

Ordem não importa.

Combinação.

---

## 43. Ordenar todos os livros

Usamos todos.

Ordem importa.

Permutação.

---

## 44. Anagrama com letras repetidas

Usamos todas as letras.

Ordem importa.

Há repetição.

Permutação com repetição.

---

# PARTE XX — COMBINATÓRIA E PROBABILIDADE

## 45. Integração

A análise combinatória pode contar:

- total de casos possíveis;
- casos favoráveis.

Depois:

`P=favoráveis/possíveis`.

---

## 46. Exemplo

Cinco pessoas.

Escolhem-se duas para uma comissão.

Total:

`C(5,2)=10`.

Apenas uma comissão específica atende a uma condição.

Probabilidade:

`1/10=10%`.

---

# PARTE XXI — COMO A INEPAM COBRA O TEMA

## 47. Evidência comprovada

A documentação oficial pesquisada comprova que a INEPAM já cobrou:

1. probabilidade direta `favoráveis/total`;
2. simplificação da fração;
3. conversão para porcentagem;
4. probabilidade complementar;
5. evento “exatamente um”;
6. multiplicação de probabilidades em sequência;
7. soma de casos correspondentes a posições diferentes;
8. anagramas com letras distintas;
9. anagramas com letras repetidas;
10. operação posterior sobre o total de anagramas.

---

## 48. Limite da evidência

A pesquisa não localizou, com a mesma qualidade documental, julgamento integral suficiente para afirmar padrão frequente de:

- arranjo simples;
- combinação simples;
- probabilidade condicional formal.

Arranjos e combinações são ensinados porque integram a formação necessária em **análise combinatória**, não porque a amostra permita declarar frequência estatística.

---

# PARTE XXII — QUESTÕES ANTIGAS DA INEPAM — RESOLUÇÃO COMENTADA

## 49. QUESTÃO REAL — INEPAM 1 — Santa Isabel/SP — probabilidade e anagramas

**Origem:** Prefeitura Municipal de Santa Isabel/SP.  
**Concurso:** Concurso Público nº 002/2024.  
**Cargo:** Guarda Civil Municipal — Feminino e Masculino.  
**Disciplina:** Matemática.  
**Questões:** 12 e 14.  
**Fonte:** julgamento oficial dos recursos.

### Questão 12 — probabilidade

O julgamento registra:

`P=4/6`.

Simplificando:

`4/6=2/3`.

Em decimal:

`0,6666...`.

Em porcentagem:

`≈66,7%`.

**Gabarito oficial:** B.  
**Recurso:** indeferido.

### Questão 14 — anagramas

CAFE:

`4!=24`.

CHA:

`3!=6`.

Somando:

`24+6=30`.

**Gabarito oficial:** C.  
**Recurso:** indeferido.

### Lição

Uma mesma prova pode combinar:

- probabilidade;
- permutação/anagramas.

---

## 50. QUESTÃO REAL — INEPAM 2 — São Gonçalo do Sapucaí/MG

**Origem:** Prefeitura Municipal de São Gonçalo do Sapucaí/MG.  
**Processo Seletivo:** nº 001/2024.  
**Grupo:** Agentes Comunitários de Saúde, Auxiliar de Saúde Bucal, Recepcionista e outros cargos.  
**Questões:** 12 e 13.

### Questão 12 — probabilidade

O julgamento registra:

`19/22`.

Matematicamente:

`19/22=0,863636...`.

Porcentagem:

`≈86,36%`.

**Gabarito oficial:** B.  
**Recurso:** indeferido.

### Nota de auditoria

O documento oficial imprime o decimal intermediário como:

`0,833636...`

mas, na própria linha, informa corretamente:

`86,36%`.

O decimal `0,833636...` é incompatível com `19/22`.

O valor matematicamente correto é:

`0,863636...`.

### Questão 13 — anagramas

SORTE:

`5!=120`.

VIVA:

`4!/2!=12`.

A operação pedida é a razão:

`120/12=10`.

**Gabarito oficial:** E.  
**Recurso:** indeferido.

### Lição

A INEPAM pode pedir uma segunda operação depois de calcular os anagramas.

---

## 51. QUESTÃO REAL — INEPAM 3 — CREA/MT — exatamente uma vogal

**Origem:** Conselho Regional de Engenharia e Agronomia do Estado de Mato Grosso — CREA/MT.  
**Concurso:** nº 001/2025.  
**Cargo:** Agente Fiscal.  
**Questão:** 21 de Matemática.  
**Gabarito oficial:** E.  
**Recurso:** indeferido.

O julgamento registra:

`P(V)=1/4`.

`P(C)=3/4`.

Quer-se exatamente uma vogal em três sorteios.

### VCC

`1/4·3/4·3/4=9/64`.

### CVC

`3/4·1/4·3/4=9/64`.

### CCV

`3/4·3/4·1/4=9/64`.

Some:

`9/64+9/64+9/64`.

`=27/64`.

### Resultado

`27/64`.

### Lição

“Exatamente um” exige considerar todas as posições possíveis.

A página da resolução foi conferida visualmente no PDF oficial.

---

## 52. QUESTÃO REAL — INEPAM 4 — Embu das Artes/SP — 2026

**Origem:** Prefeitura Municipal de Embu das Artes/SP.  
**Processo Seletivo:** nº 003/2026 — SME.

### Professor de Educação Básica I — Questão 12

O julgamento registra:

- 6 rotas seguras;
- 10 rotas possíveis.

Probabilidade:

`6/10`.

Simplificando:

`3/5`.

**Gabarito oficial:** A.

### Professores PEB II — Questão 12

Probabilidade de chover:

37%.

Probabilidade de não chover:

`100%-37%=63%`.

**Gabarito oficial:** B.

### Lição

A banca pode cobrar tanto a razão direta quanto o complementar.

A página foi conferida visualmente no PDF oficial.

---

## 53. QUESTÃO REAL — INEPAM 5 — Nova Ubiratã/MT — Secretário Escolar

**Origem:** Prefeitura Municipal de Nova Ubiratã/MT.  
**Concurso:** nº 001/2024.  
**Grupo:** inclui Professor de Educação Básica e **Técnico Administrativo Educacional — Secretário Escolar**.  
**Questão:** 12 de Matemática.  
**Gabarito oficial:** D.  
**Recurso:** indeferido.

O julgamento registra:

`9/36`.

Simplificando:

`1/4`.

Decimal:

`0,25`.

Porcentagem:

`25%`.

### Resultado

25%.

### Lição para Rincão

Há evidência direta em ambiente administrativo escolar de conversão da fração de probabilidade em porcentagem.

### Verificação

O PDF oficial foi aberto e o trecho integral foi recuperado. A tentativa de captura visual da página retornou erro temporário de cache.

---

## 54. QUESTÃO REAL — INEPAM 6 — Santa Isabel/SP — Agente de Administração Pública

**Origem:** Prefeitura Municipal de Santa Isabel/SP.  
**Concurso:** nº 001/2024.  
**Grupo:** **Agente de Administração Pública**, Agente de Fiscalização Tributária, Agente de Obras, Analista Jurídico, Contador, Maestro, Psicólogo Educacional e Professor de Educação Básica.  
**Questão:** 11 de Matemática.  
**Gabarito oficial:** D.  
**Recurso:** indeferido.

O julgamento informa:

- total de carrinhos: 18;
- defeituosos: 6;
- sem defeito: `18-6=12`.

A probabilidade pedida é:

`12/18`.

Simplifique:

`2/3`.

### Resultado

`2/3`.

### Lição

Os casos favoráveis nem sempre vêm prontos: pode ser necessário calculá-los antes.

---

## 55. QUESTÃO REAL — INEPAM 7 — Ipiranga do Norte/MT — Agente de Desenvolvimento Educacional

**Origem:** Prefeitura Municipal de Ipiranga do Norte/MT.  
**Processo Seletivo Simplificado:** nº 002/2025.  
**Funções:** **Agente de Desenvolvimento Educacional**, Professor com Licenciatura em Letras/Libras e Professor de Educação Básica.  
**Questão:** 11 de Matemática.

O julgamento inicial registra:

- MARIA = 60 anagramas;
- MANUELA = 2520 anagramas;
- soma = 2580.

### MARIA

5 letras.

A aparece duas vezes:

`5!/2!`.

`=120/2`.

`=60`.

### MANUELA

7 letras.

A aparece duas vezes:

`7!/2!`.

`=5040/2`.

`=2520`.

### Soma

`60+2520=2580`.

### Retificação oficial posterior

O julgamento inicial indicou alternativa B.

Em **05/11/2025**, a INEPAM publicou **retificação do julgamento**, mantendo o resultado numérico 2580, porém corrigindo a alternativa oficial para **C**.

### Resultado vigente

**2580 — alternativa C.**

### Lição editorial

Retificação posterior prevalece sobre documento anterior. O conteúdo matemático permaneceu igual; a letra do gabarito foi corrigida.

---

## 56. QUESTÃO REAL — INEPAM 8 — Marinópolis/SP — MORANGO

**Origem:** Prefeitura Municipal de Marinópolis/SP.  
**Concurso:** nº 001/2025.  
**Grupo:** inclui **Escriturário**, **Auxiliar de Desenvolvimento Infantil**, professores e outros cargos.  
**Questão:** 12 de Matemática.  
**Gabarito oficial:** A.  
**Recurso:** indeferido.

O julgamento registra que MORANGO possui:

`2520`

anagramas.

### Conferência

MORANGO possui 7 letras.

O aparece duas vezes.

Então:

`7!/2!`.

`=5040/2`.

`=2520`.

A questão pede a metade:

`2520/2=1260`.

### Resultado

1260.

Alternativa A.

### Lição

Não pare quando encontrar a quantidade de anagramas: leia qual operação final o enunciado pede.

A página foi conferida visualmente no PDF oficial.

---

# PARTE XXIII — EXEMPLOS RESOLVIDOS

## 57. Exemplo 1 — dado

Probabilidade de sair número maior que 4:

Favoráveis:

`{5,6}` → 2.

Possíveis:

6.

`P=2/6=1/3`.

---

## 58. Exemplo 2 — complementar

Falha de equipamento:

8%.

Não falhar:

`100%-8%=92%`.

---

## 59. Exemplo 3 — princípio multiplicativo

Código com:

- 3 letras possíveis na primeira posição;
- 4 algarismos possíveis na segunda.

Total:

`3·4=12`.

---

## 60. Exemplo 4 — permutação

Quatro pastas diferentes numa prateleira:

`4!=24`.

---

## 61. Exemplo 5 — repetição

CASA.

4 letras.

A repete duas vezes:

`4!/2!=12`.

---

## 62. Exemplo 6 — arranjo

Escolher primeiro e segundo colocados entre 6 candidatos:

`A(6,2)=6!/4!`.

`=6·5`.

`=30`.

---

## 63. Exemplo 7 — combinação

Escolher 2 representantes entre 6:

`C(6,2)=6!/(2!4!)`.

`=15`.

---

## 64. Exemplo 8 — combinatória + probabilidade

Cinco pessoas, sendo duas de um setor específico.

Escolhem-se duas pessoas ao acaso para uma comissão.

Total de comissões:

`C(5,2)=10`.

Comissão formada exatamente pelas duas pessoas daquele setor:

`C(2,2)=1`.

Probabilidade:

`1/10`.

`=10%`.

---

# PARTE XXIV — PEGADINHAS E ERROS FREQUENTES

## 65. Erro 1 — inverter a fração

Correto:

`favoráveis/possíveis`.

Não:

`possíveis/favoráveis`.

---

## 66. Erro 2 — obter probabilidade acima de 100%

Se o resultado é maior que 1 ou 100%, há erro.

---

## 67. Erro 3 — esquecer o complemento

Se o enunciado pede:

- não chover;
- não falhar;
- não selecionar defeituoso;

considere:

`1-P(A)`.

---

## 68. Erro 4 — “exatamente um” com apenas uma posição

Exatamente um sucesso em três tentativas pode ocorrer em várias posições.

---

## 69. Erro 5 — usar n! quando há repetição

VIVA:

não são 24 anagramas distintos.

São:

`4!/2!=12`.

---

## 70. Erro 6 — esquecer repetições múltiplas

Se duas letras diferentes se repetem, divida pelos dois fatoriais correspondentes.

---

## 71. Erro 7 — confundir arranjo com combinação

Presidente e vice:

ordem importa.

Comissão:

ordem não importa.

---

## 72. Erro 8 — esquecer a operação final

Depois da contagem, a questão pode pedir:

- soma;
- metade;
- razão;
- diferença;
- porcentagem.

---

## 73. Erro 9 — sem reposição como se houvesse reposição

Sem reposição, o total muda após a primeira retirada.

---

# PARTE XXV — RESUMO

## 74. Quadro-resumo

| Conceito | Regra |
|---|---|
| probabilidade clássica | `favoráveis/possíveis` |
| complementar | `1-P(A)` |
| evento impossível | 0 |
| evento certo | 1 |
| eventos exclusivos | somar |
| etapas independentes | multiplicar |
| princípio da contagem | multiplicar nº de opções |
| fatorial | `n!` |
| permutação simples | `n!` |
| permutação com repetição | `n!/(a!b!...)` |
| arranjo | parte dos elementos, ordem importa |
| combinação | parte dos elementos, ordem não importa |
| anagrama | aplicação clássica de permutação |

---

# PARTE XXVI — REVISÃO RÁPIDA — 5 MINUTOS

## 75. O que memorizar

1. `P(A)=favoráveis/possíveis`.
2. `0≤P(A)≤1`.
3. Complementar: `1-P(A)`.
4. 25% = 1/4.
5. 2/3 ≈ 66,7%.
6. Em etapas independentes, multiplique.
7. Em eventos exclusivos, some.
8. “Exatamente um” exige todas as posições.
9. `n!` é o produto de n até 1.
10. Permutação simples: `n!`.
11. Repetição: divida pelos fatoriais das repetições.
12. Arranjo: ordem importa.
13. Combinação: ordem não importa.
14. Leia a operação pedida depois da contagem.
15. Retificação oficial posterior prevalece sobre julgamento anterior.

---

# PARTE XXVII — FLASHCARDS

## 76. Flashcards

**1. O que é espaço amostral?**  
Conjunto de todos os resultados possíveis.

**2. O que é evento?**  
Subconjunto do espaço amostral.

**3. Fórmula básica da probabilidade?**  
`favoráveis/possíveis`.

**4. Probabilidade de evento impossível?**  
0.

**5. Probabilidade de evento certo?**  
1.

**6. Fórmula do complementar?**  
`1-P(A)`.

**7. Se chover tem 37%, não chover tem?**  
63%.

**8. `9/36` em porcentagem?**  
25%.

**9. `12/18` simplificado?**  
2/3.

**10. `4/6` em porcentagem aproximada?**  
66,7%.

**11. O que é princípio fundamental da contagem?**  
Multiplicar as quantidades de opções sucessivas.

**12. Quanto vale `5!`?**  
120.

**13. Quanto vale `0!`?**  
1.

**14. Anagramas de CAFE?**  
24.

**15. Anagramas de VIVA?**  
12.

**16. Anagramas de TREZE?**  
60.

**17. Anagramas de MORANGO?**  
2520.

**18. Quando usar permutação?**  
Quando todos os elementos são ordenados.

**19. Quando usar arranjo?**  
Quando usamos parte dos elementos e a ordem importa.

**20. Quando usar combinação?**  
Quando usamos parte e a ordem não importa.

**21. Presidente e vice é arranjo ou combinação?**  
Arranjo.

**22. Comissão de três pessoas é arranjo ou combinação?**  
Combinação.

**23. A INEPAM já cobrou “exatamente uma” ocorrência?**  
Sim, no CREA/MT 2025.

**24. Qual foi o resultado vigente da questão MARIA + MANUELA após a retificação de Ipiranga do Norte?**  
2580, alternativa C.

---

# PARTE XXVIII — QUESTÕES DE FIXAÇÃO

Todas as questões abaixo são:

> **QUESTÃO INÉDITA — ESTILO INEPAM**

## 77. Questão 1

Em uma urna há 5 bolas azuis e 3 vermelhas. Retirando-se uma bola ao acaso, a probabilidade de ela ser vermelha é:

A) `3/5`  
B) `3/8`  
C) `5/8`  
D) `5/3`  
E) `8/3`

**Gabarito: B.**

**Comentário:**  
Há 3 casos favoráveis em 8 possíveis.

---

## 78. Questão 2

Se a probabilidade de determinado evento ocorrer é 28%, a probabilidade de ele não ocorrer é:

A) 28%  
B) 42%  
C) 62%  
D) 72%  
E) 78%

**Gabarito: D.**

---

## 79. Questão 3

Ao lançar um dado comum, a probabilidade de obter um número par é:

A) `1/6`  
B) `1/3`  
C) `1/2`  
D) `2/3`  
E) `5/6`

**Gabarito: C.**

---

## 80. Questão 4

Duas moedas honestas são lançadas. A probabilidade de obter cara nas duas é:

A) `1/2`  
B) `1/3`  
C) `1/4`  
D) `2/3`  
E) `3/4`

**Gabarito: C.**

---

## 81. Questão 5

Uma pessoa pode escolher entre 4 camisas e 3 calças. Quantos conjuntos diferentes com uma camisa e uma calça podem ser formados?

A) 7  
B) 9  
C) 10  
D) 12  
E) 24

**Gabarito: D.**

---

## 82. Questão 6

O valor de `6!` é:

A) 120  
B) 360  
C) 540  
D) 720  
E) 1440

**Gabarito: D.**

---

## 83. Questão 7

Quantos anagramas distintos possui a palavra AMOR?

A) 4  
B) 8  
C) 12  
D) 16  
E) 24

**Gabarito: E.**

---

## 84. Questão 8

Quantos anagramas distintos possui a palavra CASA?

A) 6  
B) 8  
C) 12  
D) 18  
E) 24

**Gabarito: C.**

**Comentário:**  
4 letras, A repetido duas vezes:

`4!/2!=12`.

---

## 85. Questão 9

Cinco candidatos disputam os cargos de presidente e vice-presidente de uma comissão. Quantas duplas ordenadas podem ser formadas?

A) 10  
B) 15  
C) 20  
D) 25  
E) 120

**Gabarito: C.**

**Comentário:**  
`5·4=20`.

---

## 86. Questão 10

De cinco pessoas, devem ser escolhidas duas para uma comissão, sem distinção de função. Quantas comissões são possíveis?

A) 5  
B) 8  
C) 10  
D) 20  
E) 25

**Gabarito: C.**

**Comentário:**  
`C(5,2)=10`.

---

## 87. Questão 11

Assinale a situação em que a ordem **não** importa.

A) Definir campeão e vice.  
B) Criar senha de três algarismos distintos.  
C) Escolher três membros de uma comissão.  
D) Ordenar cinco livros numa estante.  
E) Escolher presidente e secretário.

**Gabarito: C.**

---

## 88. Questão 12

Uma caixa possui 10 peças, das quais 2 são defeituosas. A probabilidade de escolher uma peça não defeituosa é:

A) 10%  
B) 20%  
C) 40%  
D) 80%  
E) 90%

**Gabarito: D.**

---

## 89. Questão 13

Uma urna possui 3 bolas verdes e 2 amarelas. Duas bolas verdes são retiradas sucessivamente, sem reposição. A probabilidade é:

A) `1/5`  
B) `3/10`  
C) `2/5`  
D) `1/2`  
E) `3/5`

**Gabarito: B.**

**Comentário:**  
`3/5·2/4=6/20=3/10`.

---

## 90. Questão 14

A palavra ARARA possui 5 letras, sendo A repetida 3 vezes e R repetida 2 vezes. A quantidade de anagramas distintos é:

A) 5  
B) 10  
C) 20  
D) 30  
E) 120

**Gabarito: B.**

**Comentário:**  
`5!/(3!2!)=120/12=10`.

---

## 91. Questão 15

Em três sorteios independentes, a probabilidade de sucesso em cada sorteio é `1/2`. A probabilidade de ocorrer **exatamente um sucesso** é:

A) `1/8`  
B) `1/4`  
C) `3/8`  
D) `1/2`  
E) `3/4`

**Gabarito: C.**

**Comentário:**  
As posições possíveis são:

`SNN`, `NSN`, `NNS`.

Cada uma tem probabilidade:

`1/8`.

Total:

`3/8`.

---

# PARTE XXIX — GABARITO RÁPIDO

## 92. Gabarito

1. B  
2. D  
3. C  
4. C  
5. D  
6. D  
7. E  
8. C  
9. C  
10. C  
11. C  
12. D  
13. B  
14. B  
15. C

---

# PARTE XXX — COMO ESTUDAR ESTE TEMA

## 93. Roteiro de treino

### Bloco 1 — probabilidade simples

Faça problemas com:

- dados;
- moedas;
- urnas;
- itens defeituosos.

### Bloco 2 — complemento

Treine:

- não ocorrer;
- não chover;
- não falhar;
- sem defeito;
- pelo menos um.

### Bloco 3 — etapas

Treine multiplicação de probabilidades e eventos “exatamente um”.

### Bloco 4 — fatorial

Calcule mentalmente:

`3!`, `4!`, `5!`, `6!`, `7!`.

### Bloco 5 — anagramas

Treine:

- letras distintas;
- uma letra repetida;
- mais de um grupo de repetição.

### Bloco 6 — decidir a técnica

Pergunte:

1. uso todos os elementos?
2. ordem importa?
3. há repetição?

### Bloco 7 — questões reais

Refaça:

1. Santa Isabel — `4/6 ≈ 66,7%`;
2. São Gonçalo — `19/22 ≈ 86,36%`;
3. CREA/MT — exatamente uma vogal = `27/64`;
4. Embu — `6/10=3/5`;
5. Nova Ubiratã — `9/36=25%`;
6. Santa Isabel — `12/18=2/3`;
7. Ipiranga do Norte — MARIA + MANUELA = 2580, alternativa vigente C;
8. Marinópolis — metade de 2520 = 1260.

---

# PARTE XXXI — FONTES E RASTREABILIDADE

## 94. Fonte oficial — Rincão/SP

**Prefeitura Municipal de Rincão-SP — Concurso Público nº 001/2026 — INEPAM.**

Página oficial:

`https://app.inepam.org.br/concurso/concursoPaginaInterna.do?idConcurso=2&idInstituicao=94`

Na consulta de 23/08/2026, a página exibe:

- período de inscrições: 10/08/2026 a 03/09/2026;
- Agente Administrativo;
- Ajudante Geral;
- Monitor de Educação;
- Edital Concurso Público nº 001/2026;
- Rerratificação do Edital de Abertura.

O conteúdo desta aula segue o item mapeado no projeto:

> Probabilidade e análise combinatória.

---

## 95. Fonte INEPAM — Santa Isabel/SP — Concurso 002/2024

**Prefeitura Municipal de Santa Isabel/SP — Concurso Público nº 002/2024.**

Questões 12 e 14 de Matemática para Guarda Civil Municipal.

O julgamento registra:

- `4/6 ≈ 66,7%`;
- CAFE = 24 anagramas;
- CHA = 6;
- soma = 30.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1136`

---

## 96. Fonte INEPAM — São Gonçalo do Sapucaí/MG

**Prefeitura Municipal de São Gonçalo do Sapucaí/MG — Processo Seletivo nº 001/2024.**

Questões 12 e 13 de Matemática.

O julgamento registra:

- `19/22`;
- porcentagem = 86,36%;
- SORTE = 120;
- VIVA = 12;
- razão = 10.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=645`

### Auditoria

O decimal publicado `0,833636...` contém aparente erro de digitação.

Matematicamente:

`19/22 = 0,863636...`.

---

## 97. Fonte INEPAM — CREA/MT

**Conselho Regional de Engenharia e Agronomia do Estado de Mato Grosso — Concurso Público nº 001/2025.**

Agente Fiscal — Matemática — Questão 21.

Resolução oficial:

`P(VCC)=9/64`.

`P(CVC)=9/64`.

`P(CCV)=9/64`.

Total:

`27/64`.

Alternativa E.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1876`

A página foi conferida visualmente.

---

## 98. Fonte INEPAM — Embu das Artes/SP — 2026

**Prefeitura Municipal de Embu das Artes/SP — Processo Seletivo nº 003/2026 — SME.**

Matemática:

- PEB I, Q12: `6/10=3/5`, alternativa A;
- PEB II, Q12: 37% de chuva → 63% de não chuva, alternativa B.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2356`

A página foi conferida visualmente.

---

## 99. Fonte INEPAM — Nova Ubiratã/MT

**Prefeitura Municipal de Nova Ubiratã/MT — Concurso Público nº 001/2024.**

Grupo com Técnico Administrativo Educacional — Secretário Escolar.

Matemática — Questão 12.

O julgamento registra:

`9/36=0,25=25%`.

Alternativa D.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=746`

O PDF foi aberto; a captura da página apresentou erro temporário de cache.

---

## 100. Fonte INEPAM — Santa Isabel/SP — Concurso 001/2024

**Prefeitura Municipal de Santa Isabel/SP — Concurso Público nº 001/2024.**

Grupo com Agente de Administração Pública — Questão 11.

O julgamento registra:

- 18 carrinhos;
- 6 defeituosos;
- 12 sem defeito;
- `12/18=2/3`.

Alternativa D.

O mesmo julgamento contém exemplos de anagramas, como:

`TREZE = 5!/2! = 60`.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1182`

---

## 101. Fonte INEPAM — Ipiranga do Norte/MT

**Prefeitura Municipal de Ipiranga do Norte/MT — Processo Seletivo Simplificado nº 002/2025.**

Agente de Desenvolvimento Educacional e professores — Questão 11.

Julgamento inicial:

- MARIA = 60;
- MANUELA = 2520;
- total = 2580;
- alternativa inicialmente indicada: B.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1765`

### Retificação oficial

Em 05/11/2025, a banca publicou retificação:

- resultado numérico permanece 2580;
- alternativa oficial corrigida para **C**.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1770`

A retificação prevalece sobre o julgamento anterior.

---

## 102. Fonte INEPAM — Marinópolis/SP

**Prefeitura Municipal de Marinópolis/SP — Concurso Público nº 001/2025.**

Grupo com Escriturário, Auxiliar de Desenvolvimento Infantil e professores — Matemática — Questão 12.

O julgamento registra:

- MORANGO = 2520 anagramas;
- metade = 1260;
- alternativa A.

URL:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=1587`

A página foi conferida visualmente.

---

## 103. Limite da evidência

A pesquisa comprova fortemente cobrança real de:

- probabilidade simples;
- complemento;
- eventos em múltiplas etapas;
- permutações;
- permutação com repetição;
- anagramas.

Não há base suficiente, nesta amostra, para declarar frequência estatística de:

- arranjo simples;
- combinação simples.

Esses conteúdos são mantidos como explicação pedagógica necessária de análise combinatória.

---

# PARTE XXXII — CHECKLIST EDITORIAL

## 104. Checklist

- [x] item do edital identificado;
- [x] cargoIds compartilhados;
- [x] experimento aleatório;
- [x] espaço amostral;
- [x] evento;
- [x] probabilidade clássica;
- [x] evento certo;
- [x] evento impossível;
- [x] complemento;
- [x] pelo menos um;
- [x] soma de probabilidades;
- [x] multiplicação de probabilidades;
- [x] exatamente um;
- [x] sem reposição;
- [x] princípio fundamental da contagem;
- [x] fatorial;
- [x] permutação simples;
- [x] permutação com repetição;
- [x] anagramas;
- [x] arranjo;
- [x] combinação;
- [x] integração contagem + probabilidade;
- [x] 8 blocos de evidências reais INEPAM;
- [x] erro decimal oficial auditado;
- [x] retificação oficial de gabarito aplicada;
- [x] PDFs analisados com tentativa de captura visual;
- [x] 15 questões inéditas A–E;
- [x] gabarito comentado;
- [x] 24 flashcards;
- [x] revisão rápida;
- [x] fontes oficiais;
- [x] status `revisado`.

---

# 105. Fechamento da Matemática do Ensino Médio

Com esta aula, os 13 itens substantivos mapeados de Matemática do Ensino Médio possuem material produzido:

1. Radicais;
2. Razão e proporção;
3. Porcentagem;
4. Juros simples;
5. Números reais;
6. Fatoração de expressão algébrica;
7. Operações com expressões algébricas;
8. Expressões algébricas fracionárias;
9. MDC e MMC;
10. Sistema de medidas;
11. Estatística;
12. Geometria;
13. Probabilidade e análise combinatória.

Isso significa **conclusão substantiva desta sequência de aulas**, não conclusão global do projeto.

Não declarar:

- 100% do edital;
- pacote final pronto;
- publicação liberada.

Ainda é necessário:

- confrontar a cobertura canônica 1:1;
- auditar integralmente a rerratificação de Rincão;
- revisar IDs/status nos dados relacionais;
- continuar os conteúdos pendentes de outros blocos/cargos;
- preparar pacotes para o ChatGPT Work apenas quando o lote estiver editorialmente liberado.

