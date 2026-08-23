---
id: medio-matematica-juros-simples-001
stableItemId: MED-MAT-004
cargoIds:
  - agente-administrativo
  - monitor-educacao
nivel: ensino-medio
disciplinaId: medio-matematica
temaId: juros-simples
titulo: "Juros simples — capital, taxa, tempo, juros e montante"
editalRef: "Anexo II — Conhecimentos Gerais — Cargos de Ensino Médio e Técnico — Matemática: Juros Simples"
status: revisado
versao: "0.1.0"
revisadoEm: "2026-08-23"
sourceRefs:
  - src-edital-rincao-2026
  - src-inepam-itajuba-001-2024-recursos
  - src-inepam-bofete-0001-2023-recursos
  - src-inepam-dumont-0001-2024-recursos
  - src-inepam-conchas-002-2025-recursos
  - src-inepam-itamogi-001-2024-recursos
---

# Juros simples — capital, taxa, tempo, juros e montante

## 1. Identificação e referência ao edital

Esta aula atende ao item **Juros Simples**, previsto em Matemática para os cargos de **Agente Administrativo** e **Monitor de Educação** do Concurso Público nº 001/2026 da Prefeitura Municipal de Rincão-SP, banca INEPAM.

A aula é compartilhada pelos dois cargos por meio de `cargoIds[]`.

A pesquisa oficial da banca foi realizada antes da revisão final e localizou julgamentos da INEPAM que comprovam cobrança real de:

- cálculo direto dos juros;
- cálculo do montante;
- descoberta do capital;
- descoberta da taxa;
- descoberta do tempo;
- situação em que o enunciado fornece **montante e juros**, exigindo calcular o capital antes de aplicar a fórmula;
- conversão de meses para anos quando a taxa está ao ano;
- questões anuladas por ausência de alternativa correspondente ao resultado matematicamente correto.

Há evidência especialmente próxima de Rincão:

- **Itajubá/MG — Concurso Público nº 001/2024 — Agente Administrativo**: a INEPAM exigiu recuperar o capital a partir de montante e juros e, em seguida, encontrar o tempo;
- **Dumont/SP — Concurso Público nº 0001/2024**: grupo com Assistente de Licitações e Contratos, Auxiliar de Desenvolvimento Infantil e professores;
- **Conchas/SP — Processo Seletivo nº 002/2025**: questão recente para Professor de Ensino Infantil.

> **Regra de ouro:** em juros simples, antes de usar `J = C · i · t`, confirme que **taxa e tempo estão na mesma unidade**.

### Situação editorial

O material está **revisado** para estudo. A liberação global do pacote continua condicionada ao controle de retificações do projeto, especialmente à conferência integral da rerratificação já registrada no controle editorial.

---

## 2. O que o edital cobra

Para dominar juros simples, você precisa saber:

1. identificar o capital;
2. identificar a taxa;
3. identificar o tempo;
4. identificar os juros;
5. identificar o montante;
6. converter porcentagem em número decimal;
7. manter taxa e tempo na mesma unidade;
8. aplicar `J = C · i · t`;
9. aplicar `M = C + J`;
10. usar `M = C(1 + i·t)`;
11. descobrir juros quando C, i e t são conhecidos;
12. descobrir capital quando J, i e t são conhecidos;
13. descobrir taxa quando J, C e t são conhecidos;
14. descobrir tempo quando J, C e i são conhecidos;
15. trabalhar com montante e juros no mesmo enunciado;
16. converter meses em anos quando necessário;
17. conferir se a resposta é plausível;
18. diferenciar juros simples de juros compostos em nível conceitual.

---

## 3. Objetivos

Ao final desta aula, você deverá conseguir:

- reconhecer cada elemento da fórmula;
- transformar `0,3%` em `0,003`;
- transformar `0,15%` em `0,0015`;
- calcular juros de um capital;
- calcular montante;
- descobrir taxa mensal;
- descobrir tempo em meses;
- descobrir capital a partir de montante e juros;
- resolver uma questão em que o capital está “escondido”;
- converter 9 meses em `0,75 ano`;
- resolver questões reais documentadas da INEPAM;
- evitar confundir juros com montante.

---

# PARTE I — CONCEITOS FUNDAMENTAIS

## 4. Capital — C

**Capital** é o valor inicial aplicado, emprestado ou financiado.

Símbolo:

`C`.

Exemplo:

Uma pessoa aplica R$ 5.000,00.

Capital:

`C = 5000`.

---

## 5. Taxa — i

A **taxa de juros** indica quanto o capital rende ou custa por unidade de tempo.

Símbolo:

`i`.

Exemplos:

- 2% ao mês;
- 0,5% ao mês;
- 8,5% ao ano.

Na fórmula, usamos a taxa normalmente em forma decimal.

### Conversões

`2% = 0,02`.

`0,5% = 0,005`.

`0,3% = 0,003`.

`0,15% = 0,0015`.

`8,5% = 0,085`.

---

## 6. Tempo — t

É o número de períodos em que o capital permanece submetido à taxa.

Símbolo:

`t`.

Exemplos:

- 10 meses;
- 17 meses;
- 2 anos;
- 0,75 ano.

### Regra fundamental

Se a taxa é **ao mês**, o tempo deve ser expresso em meses.

Se a taxa é **ao ano**, o tempo deve ser expresso em anos.

---

## 7. Juros — J

Juros são o acréscimo produzido pelo capital ao longo do tempo.

Símbolo:

`J`.

Em juros simples:

`J = C · i · t`.

---

## 8. Montante — M

Montante é o valor final:

`M = C + J`.

Também podemos escrever:

`M = C(1 + i·t)`.

A INEPAM já chamou atenção explicitamente, em julgamento oficial, para esta definição:

> montante = capital + juros.

---

# PARTE II — FÓRMULA FUNDAMENTAL

## 9. Fórmula dos juros simples

`J = C · i · t`

onde:

- `J` = juros;
- `C` = capital;
- `i` = taxa em forma decimal;
- `t` = tempo compatível com a unidade da taxa.

---

## 10. Exemplo básico

Capital:

`C = 2000`.

Taxa:

`i = 2% a.m. = 0,02`.

Tempo:

`t = 5 meses`.

Então:

`J = 2000 · 0,02 · 5`.

Primeiro:

`2000 · 0,02 = 40`.

Depois:

`40 · 5 = 200`.

Juros:

`J = R$ 200,00`.

Montante:

`M = 2000 + 200`.

`M = R$ 2.200,00`.

---

# PARTE III — TAXA E TEMPO PRECISAM COMBINAR

## 11. Taxa mensal

Taxa:

`1,5% ao mês`.

Tempo:

`8 meses`.

Está pronto para usar:

`i = 0,015`

`t = 8`.

---

## 12. Taxa anual e tempo em meses

Taxa:

`12% ao ano`.

Tempo:

`6 meses`.

Não use diretamente:

`i=0,12` e `t=6`.

Isso trataria 6 como seis anos.

Converta:

`6 meses = 6/12 ano = 0,5 ano`.

Então:

`i = 0,12`

`t = 0,5`.

---

## 13. Exemplo real de conversão

A INEPAM, em Conchas/SP, trabalhou com:

- taxa anual = 8,5%;
- tempo = 9 meses.

A banca converteu:

`9/12 = 0,75 ano`.

Depois aplicou:

`J = 558800 · 0,085 · 0,75`.

Resultado:

`J = 35.623,50`.

---

# PARTE IV — CÁLCULO DO MONTANTE

## 14. Método 1 — calcular juros e somar

Capital:

`C = 10000`.

Taxa:

`1% a.m.`.

Tempo:

`8 meses`.

Juros:

`J = 10000 · 0,01 · 8`.

`J = 800`.

Montante:

`M = 10000 + 800`.

`M = 10800`.

---

## 15. Método 2 — fórmula direta

`M = C(1 + i·t)`.

Então:

`M = 10000(1 + 0,01·8)`.

`M = 10000(1,08)`.

`M = 10800`.

---

# PARTE V — DESCOBRINDO O CAPITAL

## 16. Quando J, i e t são conhecidos

Da fórmula:

`J = C·i·t`.

Isolando C:

`C = J/(i·t)`.

### Exemplo

Juros:

`J = 300`.

Taxa:

`i = 0,02`.

Tempo:

`t = 5`.

Então:

`C = 300/(0,02·5)`.

`C = 300/0,10`.

`C = 3000`.

---

## 17. Quando o montante e os juros são conhecidos

Como:

`M = C + J`.

Então:

`C = M - J`.

### Exemplo

Montante:

`M = 2392253,50`.

Juros:

`J = 35353,50`.

Capital:

`C = 2392253,50 - 35353,50`.

`C = 2356900`.

Esse passo aparece em questão real da INEPAM para **Agente Administrativo**.

---

# PARTE VI — DESCOBRINDO A TAXA

## 18. Fórmula

De:

`J = C·i·t`

temos:

`i = J/(C·t)`.

### Exemplo

Capital:

`C = 10000`.

Juros:

`J = 1200`.

Tempo:

`t = 12 meses`.

Então:

`i = 1200/(10000·12)`.

`i = 1200/120000`.

`i = 0,01`.

Em porcentagem:

`0,01 = 1%`.

Taxa:

`1% ao mês`.

---

## 19. Conversão final é importante

Se o cálculo produz:

`i = 0,002`.

Isso significa:

`0,2%`.

Porque:

`0,002 × 100 = 0,2`.

A INEPAM já cobrou exatamente essa etapa.

---

# PARTE VII — DESCOBRINDO O TEMPO

## 20. Fórmula

De:

`J = C·i·t`

temos:

`t = J/(C·i)`.

### Exemplo

Capital:

`C = 5000`.

Juros:

`J = 600`.

Taxa:

`i = 0,02 a.m.`.

Então:

`t = 600/(5000·0,02)`.

`t = 600/100`.

`t = 6 meses`.

---

# PARTE VIII — MONTANTE DADO, JUROS DESCONHECIDOS

## 21. Capital escrito como M - J

Se conhecemos:

- montante M;
- taxa i;
- tempo t;

mas queremos os juros, podemos usar:

`C = M - J`.

Substituindo na fórmula:

`J = (M-J)·i·t`.

Isso gera uma equação em J.

Esse formato apareceu em julgamento oficial da INEPAM em Dumont/SP.

---

## 22. Exemplo semelhante ao caso real

Montante:

`M = 589660,80`.

Taxa:

`i = 0,002`.

Tempo:

`t = 14`.

Capital:

`C = M-J`.

Então:

`J = (589660,80-J)·0,002·14`.

Como:

`0,002·14 = 0,028`,

temos:

`J = (589660,80-J)·0,028`.

Distribuindo:

`J = 16510,5024 - 0,028J`.

Somando `0,028J` aos dois lados:

`1,028J = 16510,5024`.

Logo:

`J = 16060,80`.

Esse é o resultado oficial registrado pela INEPAM.

---

# PARTE IX — JUROS SIMPLES x JUROS COMPOSTOS

## 23. Diferença conceitual

### Juros simples

Os juros de cada período são calculados sobre o **capital inicial**.

O crescimento é linear.

### Juros compostos

Os juros de cada período incidem sobre o valor acumulado.

Há “juros sobre juros”.

### Para este edital

O item especificado é **Juros Simples**. Portanto, o foco da preparação deve ser:

`J = C·i·t`.

Não transforme questões de juros simples em juros compostos.

---

# PARTE X — CRESCIMENTO LINEAR

## 24. Mesmo valor de juros a cada período

Capital:

R$ 1000.

Taxa:

2% ao mês.

Juro mensal:

`1000·0,02 = 20`.

Após:

- 1 mês → juros acumulados = R$ 20;
- 2 meses → R$ 40;
- 3 meses → R$ 60;
- 10 meses → R$ 200.

O acréscimo é constante por período.

---

# PARTE XI — COMO A INEPAM COBRA O TEMA

## 25. Padrão observado com evidência

A amostra oficial pesquisada permite afirmar que a INEPAM já cobrou:

1. aplicação direta de `J=C·i·t`;
2. cálculo de montante;
3. descoberta do capital;
4. descoberta da taxa;
5. descoberta do tempo;
6. situação com montante e juros juntos;
7. conversão de meses para anos;
8. necessidade de converter taxa percentual para decimal.

### Evidência próxima

Em **Itajubá/2024**, a questão foi aplicada diretamente a **Agente Administrativo** e exigiu uma sequência de raciocínio:

1. calcular capital por `M-J`;
2. aplicar juros simples;
3. isolar o tempo.

### Limite

A amostra não autoriza afirmar que:

- uma dessas variáveis seja sempre a mais cobrada;
- toda prova tenha questão de juros;
- os valores sempre venham em meses;
- a banca nunca use uma taxa anual.

---

# PARTE XII — QUESTÕES ANTIGAS DA INEPAM — RESOLUÇÃO COMENTADA

## 26. QUESTÃO REAL — INEPAM 1 — Itajubá/MG — Agente Administrativo

**Origem:** Prefeitura Municipal de Itajubá/MG.  
**Concurso:** Concurso Público nº 001/2024.  
**Cargo:** **Agente Administrativo**.  
**Disciplina:** Matemática.  
**Questão:** 18.  
**Fonte:** julgamento oficial dos recursos.  
**Gabarito oficial:** alternativa **C**.  
**Recurso:** indeferido.

O julgamento informa que o enunciado fornece:

- montante;
- juros de R$ 35.353,50;
- taxa de `0,15%` ao mês;
- pede o tempo.

A banca registra que:

`C = M - J = R$ 2.356.900,00`.

Taxa:

`0,15% = 0,0015`.

Aplicando:

`35353,5 = 2356900 · 0,0015 · t`.

Calcule o produto:

`2356900 · 0,0015 = 3535,35`.

Então:

`35353,5 = 3535,35t`.

Logo:

`t = 10`.

### Resultado

**10 meses**, alternativa C.

### Lição para Rincão

Leia os dados antes de aplicar a fórmula. O enunciado pode fornecer o **montante**, não o capital.

---

## 27. QUESTÃO REAL — INEPAM 2 — Bofete/SP — montante

**Origem:** Prefeitura Municipal de Bofete/SP.  
**Concurso:** Concurso Público nº 0001/2023.  
**Disciplina:** Matemática.  
**Questão:** 14 no grupo de Motorista, Patroleiro, Servente de Pedreiro e Servidor de Serviços Gerais.  
**Gabarito oficial:** alternativa **D**.  
**Recurso:** indeferido.

Dados registrados pela banca:

`C = R$ 49.800,00`.

`i = 0,003`.

`t = 24`.

### Juros

`J = 49800 · 0,003 · 24`.

Primeiro:

`49800 · 0,003 = 149,40`.

Depois:

`149,40 · 24 = 3585,60`.

### Montante

`M = C + J`.

`M = 49800 + 3585,60`.

`M = 53385,60`.

### Resultado

R$ 53.385,60.

### Lição

A banca documenta explicitamente que **montante é capital + juros**.

---

## 28. QUESTÃO REAL — INEPAM 3 — Bofete/SP — descoberta da taxa

**Origem:** Prefeitura Municipal de Bofete/SP.  
**Concurso:** Concurso Público nº 0001/2023.  
**Grupo:** Agente Comunitário de Saúde, Almoxarife, Assistente Social, Controlador Interno, Professora de Educação Infantil e outros cargos.  
**Questão:** 19.  
**Recurso:** indeferido.

O julgamento registra:

Montante:

`M = R$ 424.848,00`.

Capital:

`C = R$ 400.800,00`.

Tempo:

`t = 30 meses`.

### Passo 1 — juros

`J = M-C`.

`J = 424848 - 400800`.

`J = 24048`.

### Passo 2 — taxa

`i = J/(C·t)`.

`i = 24048/(400800·30)`.

`i = 0,002`.

### Conversão

`0,002 = 0,2%`.

### Resultado

Taxa de **0,2% ao mês**.

### Lição

Se a questão fornece montante e capital, primeiro encontre os juros pela diferença.

---

## 29. QUESTÃO REAL — INEPAM 4 — Dumont/SP — montante e juros

**Origem:** Prefeitura Municipal de Dumont/SP.  
**Concurso:** Concurso Público nº 0001/2024.  
**Grupo:** inclui Agente Comunitário de Saúde, Auxiliar de Desenvolvimento Infantil — ADI, Assistente de Licitações e Contratos, professores e Recepcionista.  
**Questão:** 12 de Matemática.  
**Gabarito oficial:** alternativa **E**.  
**Recurso:** indeferido.

O julgamento usa:

`M = 589660,80`.

`i = 0,002`.

`t = 14`.

Como o capital é:

`C = M-J`,

a banca monta:

`J = (589660,80-J)·0,002·14`.

Resolvendo:

`J = 16060,80`.

### Resultado

R$ 16.060,80 de juros.

### Lição

A fórmula pode aparecer dentro de uma equação. Não espere que todos os dados sejam entregues diretamente na forma `C`, `i` e `t`.

---

## 30. QUESTÃO REAL — INEPAM 5 — Conchas/SP — taxa anual e meses — ANULADA

**Origem:** Prefeitura Municipal de Conchas/SP.  
**Processo Seletivo:** nº 002/2025.  
**Função:** Professor de Ensino Infantil.  
**Disciplina:** Matemática.  
**Questão:** 12.  
**Situação:** **anulada**.  
**Fonte:** julgamento oficial dos recursos.

Dados:

`C = R$ 558.800,00`.

Taxa:

`8,5% ao ano = 0,085 a.a.`.

Tempo:

`9 meses`.

### Passo 1 — converter o tempo

`9 meses = 9/12 ano`.

`9 meses = 0,75 ano`.

### Passo 2 — calcular juros

`J = 558800 · 0,085 · 0,75`.

`J = 35623,50`.

### Passo 3 — montante

`M = 558800 + 35623,50`.

`M = 594423,50`.

### Por que foi anulada?

O julgamento informa que **não havia alternativa correta**.

### Lição

A conversão da unidade de tempo é parte central do cálculo.

---

## 31. QUESTÃO REAL — INEPAM 6 — Itamogi/MG — cálculo direto

**Origem:** Prefeitura Municipal de Itamogi/MG.  
**Concurso:** Concurso Público nº 001/2024.  
**Disciplina:** Matemática.  
**Questão:** 15 no grupo de funções operacionais do julgamento.  
**Gabarito oficial:** alternativa **B**.  
**Recurso:** indeferido.

O julgamento registra:

`C = 3.578.000`.

`i = 0,003`.

`t = 17`.

Aplicação direta:

`J = 3578000 · 0,003 · 17`.

`J = 182478`.

### Resultado

R$ 182.478,00.

### Lição

Há questões em que a INEPAM espera apenas identificação correta dos três dados e substituição direta na fórmula.

---

# PARTE XIII — EXEMPLOS RESOLVIDOS

## 32. Exemplo 1 — juros

Capital:

R$ 8.000.

Taxa:

1,5% a.m.

Tempo:

6 meses.

`i = 0,015`.

`J = 8000·0,015·6`.

`J = 720`.

---

## 33. Exemplo 2 — montante

Usando os dados anteriores:

`M = 8000 + 720`.

`M = 8720`.

---

## 34. Exemplo 3 — capital

Juros:

R$ 900.

Taxa:

2% a.m.

Tempo:

9 meses.

`C = 900/(0,02·9)`.

`C = 900/0,18`.

`C = 5000`.

---

## 35. Exemplo 4 — taxa

Capital:

R$ 20.000.

Juros:

R$ 1.800.

Tempo:

6 meses.

`i = 1800/(20000·6)`.

`i = 1800/120000`.

`i = 0,015`.

Taxa:

`1,5% ao mês`.

---

## 36. Exemplo 5 — tempo

Capital:

R$ 15.000.

Juros:

R$ 1.350.

Taxa:

1,5% a.m.

`i=0,015`.

`t = 1350/(15000·0,015)`.

`t = 1350/225`.

`t = 6 meses`.

---

## 37. Exemplo 6 — taxa anual

Capital:

R$ 10.000.

Taxa:

18% a.a.

Tempo:

8 meses.

Converta:

`8/12 = 2/3 ano`.

Taxa:

`0,18`.

Então:

`J = 10000·0,18·(2/3)`.

`J = 1200`.

---

## 38. Exemplo 7 — montante direto

Capital:

R$ 25.000.

Taxa:

0,8% a.m.

Tempo:

10 meses.

`M = C(1+i·t)`.

`M = 25000(1+0,008·10)`.

`M = 25000(1,08)`.

`M = 27000`.

---

# PARTE XIV — PEGADINHAS E ERROS FREQUENTES

## 39. Erro 1 — usar a taxa percentual sem converter

Errado:

`J = 5000·2·4`.

Se a taxa é 2%:

`i=0,02`.

Correto:

`J = 5000·0,02·4`.

---

## 40. Erro 2 — confundir juros com montante

Se:

`C=1000`

e:

`J=100`,

o montante é:

`M=1100`.

Não 100.

---

## 41. Erro 3 — usar M como se fosse C

A fórmula básica usa capital:

`J=C·i·t`.

Se o enunciado fornece M e J:

`C=M-J`.

---

## 42. Erro 4 — misturar meses com taxa anual

Taxa:

12% a.a.

Tempo:

6 meses.

Você deve usar:

`t=0,5 ano`

ou converter a taxa de modo equivalente, conforme o modelo.

Não use `t=6` com taxa anual.

---

## 43. Erro 5 — 0,15% não é 0,15

`0,15% = 0,0015`.

`15% = 0,15`.

---

## 44. Erro 6 — esquecer de converter a taxa encontrada

Se:

`i=0,002`,

a taxa é:

`0,2%`.

Não `0,002%`.

---

## 45. Erro 7 — usar fórmula de juros compostos

O edital pede **juros simples**.

Não use exponenciação do tipo:

`M=C(1+i)^t`

em questão explicitamente de juros simples.

---

## 46. Erro 8 — confiar cegamente nas alternativas

Julgamentos oficiais da própria INEPAM mostram questões anuladas porque **nenhuma alternativa correspondia ao cálculo correto**.

Faça a conta primeiro.

---

# PARTE XV — RESUMO

## 47. Quadro-resumo

| Grandeza | Símbolo | Fórmula |
|---|---|---|
| Capital | C | valor inicial |
| Taxa | i | percentual convertido para decimal |
| Tempo | t | mesma unidade da taxa |
| Juros | J | `J=C·i·t` |
| Montante | M | `M=C+J` |
| Montante direto | M | `M=C(1+i·t)` |
| Capital | C | `J/(i·t)` |
| Taxa | i | `J/(C·t)` |
| Tempo | t | `J/(C·i)` |
| Capital com M e J | C | `M-J` |

---

# PARTE XVI — REVISÃO RÁPIDA — 5 MINUTOS

## 48. O que memorizar

1. `J=C·i·t`.
2. `M=C+J`.
3. `M=C(1+i·t)`.
4. Taxa percentual deve virar decimal.
5. 0,3% = 0,003.
6. 0,15% = 0,0015.
7. Taxa e tempo precisam ter a mesma unidade.
8. Se M e J são conhecidos: `C=M-J`.
9. Para achar taxa: `i=J/(C·t)`.
10. Para achar tempo: `t=J/(C·i)`.

---

# PARTE XVII — FLASHCARDS

## 49. Flashcards

**1. Fórmula dos juros simples?**  
`J=C·i·t`.

**2. O que é C?**  
Capital.

**3. O que é i?**  
Taxa de juros em forma decimal.

**4. O que é t?**  
Tempo.

**5. O que é J?**  
Juros.

**6. O que é M?**  
Montante.

**7. Fórmula do montante?**  
`M=C+J`.

**8. Outra fórmula do montante simples?**  
`M=C(1+i·t)`.

**9. 2% em decimal?**  
0,02.

**10. 0,3% em decimal?**  
0,003.

**11. 0,15% em decimal?**  
0,0015.

**12. 8,5% em decimal?**  
0,085.

**13. Taxa ao mês exige tempo em quê?**  
Meses.

**14. Taxa ao ano exige tempo em quê?**  
Anos.

**15. 9 meses em anos?**  
0,75 ano.

**16. Como achar capital?**  
`C=J/(i·t)`.

**17. Como achar taxa?**  
`i=J/(C·t)`.

**18. Como achar tempo?**  
`t=J/(C·i)`.

**19. Se conheço M e J, como acho C?**  
`C=M-J`.

**20. Juros simples têm juros sobre juros?**  
Não.

**21. O crescimento dos juros simples é linear?**  
Sim.

**22. Se i=0,002, qual é a taxa percentual?**  
0,2%.

**23. Montante é só os juros?**  
Não; é capital + juros.

**24. A INEPAM já cobrou descobrir tempo em Agente Administrativo?**  
Sim, em Itajubá/2024.

---

# PARTE XVIII — QUESTÕES DE FIXAÇÃO

Todas as questões abaixo são:

> **QUESTÃO INÉDITA — ESTILO INEPAM**

## 50. Questão 1

Um capital de R$ 5.000,00 é aplicado a juros simples de 2% ao mês durante 4 meses. Os juros são:

A) R$ 200,00  
B) R$ 300,00  
C) R$ 400,00  
D) R$ 500,00  
E) R$ 600,00

**Gabarito: C.**

**Comentário:**

`J=5000·0,02·4=400`.

---

## 51. Questão 2

No problema anterior, o montante será:

A) R$ 5.200,00  
B) R$ 5.300,00  
C) R$ 5.400,00  
D) R$ 5.500,00  
E) R$ 5.600,00

**Gabarito: C.**

---

## 52. Questão 3

A taxa decimal correspondente a 0,8% é:

A) 0,0008  
B) 0,008  
C) 0,08  
D) 0,8  
E) 8

**Gabarito: B.**

---

## 53. Questão 4

Um capital produz R$ 600,00 de juros em 5 meses, à taxa de 2% ao mês. O capital é:

A) R$ 4.000,00  
B) R$ 5.000,00  
C) R$ 6.000,00  
D) R$ 7.000,00  
E) R$ 8.000,00

**Gabarito: C.**

**Comentário:**

`C=600/(0,02·5)=600/0,10=6000`.

---

## 54. Questão 5

Um capital de R$ 10.000,00 gera R$ 1.200,00 de juros simples em 12 meses. A taxa mensal é:

A) 0,5%  
B) 0,8%  
C) 1%  
D) 1,2%  
E) 2%

**Gabarito: C.**

---

## 55. Questão 6

Um capital de R$ 8.000,00 rende R$ 960,00 a juros simples de 2% ao mês. O tempo é:

A) 4 meses  
B) 5 meses  
C) 6 meses  
D) 7 meses  
E) 8 meses

**Gabarito: C.**

---

## 56. Questão 7

Um investimento de R$ 20.000,00 a 1,5% ao mês durante 10 meses terá montante de:

A) R$ 21.500,00  
B) R$ 22.000,00  
C) R$ 22.500,00  
D) R$ 23.000,00  
E) R$ 23.500,00

**Gabarito: D.**

**Comentário:**

`J=20000·0,015·10=3000`.

`M=23000`.

---

## 57. Questão 8

Uma taxa de 12% ao ano é aplicada durante 6 meses. Para usar a taxa anual diretamente, o tempo deve ser escrito como:

A) 0,25 ano  
B) 0,5 ano  
C) 0,6 ano  
D) 1 ano  
E) 6 anos

**Gabarito: B.**

---

## 58. Questão 9

Um capital de R$ 15.000,00 é aplicado a 12% ao ano por 6 meses. Os juros simples serão:

A) R$ 600,00  
B) R$ 750,00  
C) R$ 900,00  
D) R$ 1.200,00  
E) R$ 1.800,00

**Gabarito: C.**

**Comentário:**

`t=0,5 ano`.

`J=15000·0,12·0,5=900`.

---

## 59. Questão 10

Um montante é de R$ 12.600,00 e os juros são R$ 600,00. O capital é:

A) R$ 11.400,00  
B) R$ 11.600,00  
C) R$ 12.000,00  
D) R$ 12.600,00  
E) R$ 13.200,00

**Gabarito: C.**

---

## 60. Questão 11

Assinale a alternativa correta sobre juros simples.

A) Os juros de cada período sempre incidem sobre o montante acumulado.  
B) O montante é igual apenas aos juros produzidos.  
C) A taxa não precisa possuir unidade temporal compatível com o tempo.  
D) Os juros são proporcionais ao capital, à taxa e ao tempo.  
E) A fórmula obrigatória é `M=C(1+i)^t`.

**Gabarito: D.**

---

## 61. Questão 12

Em juros simples, um capital de R$ 50.000,00 produz R$ 3.000,00 em 10 meses. A taxa mensal é:

A) 0,3%  
B) 0,4%  
C) 0,5%  
D) 0,6%  
E) 0,8%

**Gabarito: D.**

**Comentário:**

`i=3000/(50000·10)=0,006=0,6%`.

---

## 62. Questão 13

Um capital de R$ 25.000,00 é aplicado a 0,4% ao mês durante 15 meses. Os juros serão:

A) R$ 1.000,00  
B) R$ 1.250,00  
C) R$ 1.500,00  
D) R$ 1.750,00  
E) R$ 2.000,00

**Gabarito: C.**

---

## 63. Questão 14

Um valor final de R$ 31.800,00 corresponde ao capital acrescido de R$ 1.800,00 de juros simples. O capital é:

A) R$ 28.000,00  
B) R$ 29.000,00  
C) R$ 30.000,00  
D) R$ 31.000,00  
E) R$ 33.600,00

**Gabarito: C.**

---

## 64. Questão 15

Uma aplicação de R$ 40.000,00, a 9% ao ano, permanece aplicada por 8 meses. O valor dos juros simples é:

A) R$ 1.800,00  
B) R$ 2.000,00  
C) R$ 2.400,00  
D) R$ 2.700,00  
E) R$ 3.600,00

**Gabarito: C.**

**Comentário:**

`8 meses = 8/12 = 2/3 ano`.

`J=40000·0,09·2/3`.

`J=2400`.

---

# PARTE XIX — GABARITO RÁPIDO

## 65. Gabarito

1. C  
2. C  
3. B  
4. C  
5. C  
6. C  
7. D  
8. B  
9. C  
10. C  
11. D  
12. D  
13. C  
14. C  
15. C

---

# PARTE XX — COMO ESTUDAR ESTE TEMA

## 66. Roteiro de treino

### Bloco 1 — identificar variáveis

Em cada exercício, escreva antes da conta:

`C =`

`i =`

`t =`

`J =`

`M =`

### Bloco 2 — conversão de taxa

Treine:

- 2%;
- 0,5%;
- 0,3%;
- 0,15%;
- 8,5%.

### Bloco 3 — cálculo direto

Faça 10 exercícios de:

`J=C·i·t`.

### Bloco 4 — fórmulas invertidas

Treine separadamente:

- achar C;
- achar i;
- achar t.

### Bloco 5 — montante

Treine:

`M=C+J`.

### Bloco 6 — unidade de tempo

Resolva exercícios com:

- taxa mensal e meses;
- taxa anual e meses;
- taxa anual e anos.

### Bloco 7 — questões reais

Refaça sem olhar:

1. Itajubá — capital `2.356.900`, juros `35.353,50`, taxa `0,15% a.m.` → 10 meses;
2. Bofete — `49.800 · 0,003 · 24` → juros e montante;
3. Bofete — descobrir taxa a partir de montante e capital;
4. Dumont — `J=(M-J)it`;
5. Conchas — 9 meses = 0,75 ano.

---

# PARTE XXI — FONTES E RASTREABILIDADE

## 67. Fonte do edital

**Prefeitura Municipal de Rincão-SP — Concurso Público nº 001/2026 — INEPAM.**

Conteúdo programático:

> Juros Simples.

Fonte oficial do concurso no portal da INEPAM e mapa mestre do projeto.

---

## 68. Fonte INEPAM — Itajubá/MG

**Prefeitura Municipal de Itajubá/MG — Concurso Público nº 001/2024.**

Documento:

**Edital de Divulgação do Julgamento dos Recursos.**

Matemática — **Agente Administrativo** — Questão 18.

O julgamento registra:

- capital obtido por montante menos juros = R$ 2.356.900,00;
- juros = R$ 35.353,50;
- taxa = 0,0015;
- tempo = 10 meses;
- alternativa C;
- recurso indeferido.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=881`

---

## 69. Fonte INEPAM — Bofete/SP

**Prefeitura Municipal de Bofete/SP — Concurso Público nº 0001/2023.**

Documento de julgamento dos recursos.

Casos utilizados:

- Questão 14: `J=49800·0,003·24=3585,60`; montante = R$ 53.385,60; alternativa D;
- Questão 18: `J=326000·0,0018·16=9388,80`; alternativa D;
- Questão 19: `J=M-C=24048`; taxa `i=0,002`;
- Questão 20: `J=56900·0,005·12=3414`; montante = R$ 60.314,00; questão anulada;
- outro grupo: capital obtido por `17944,60/(0,002·10)=897230`, com montante R$ 915.174,60.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=269`

---

## 70. Fonte INEPAM — Dumont/SP

**Prefeitura Municipal de Dumont/SP — Concurso Público nº 0001/2024.**

Documento de julgamento dos recursos.

Matemática — Questão 12, grupo com Assistente de Licitações e Contratos, Auxiliar de Desenvolvimento Infantil, professores e Recepcionista.

A resolução oficial registra:

`J=(589660,80-J)·0,002·14`

e chega a:

`J=16060,80`.

Alternativa E.

O mesmo documento registra, em outro grupo, descoberta de taxa por:

`14841/(582000·17)=0,0015=0,15%`.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=954`

---

## 71. Fonte INEPAM — Conchas/SP

**Prefeitura Municipal de Conchas/SP — Processo Seletivo nº 002/2025.**

Documento:

**Edital de Julgamento dos Recursos.**

Matemática — Professor de Ensino Infantil — Questão 12.

O julgamento registra:

- 9 meses = 0,75 ano;
- capital = R$ 558.800,00;
- taxa = 8,5% a.a.;
- juros = R$ 35.623,50;
- montante = R$ 594.423,50;
- questão anulada por ausência de alternativa correta.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2026`

---

## 72. Fonte INEPAM — Itamogi/MG

**Prefeitura Municipal de Itamogi/MG — Concurso Público nº 001/2024.**

Matemática — Questão 15 em grupo de funções operacionais.

O julgamento registra:

`J=3.578.000·0,003·17=182.478`.

Alternativa B.

URL oficial:

`https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=981`

---

## 73. Limite da evidência

A pesquisa oficial comprova que a INEPAM já cobrou diferentes incógnitas de juros simples e diversos formatos de montagem.

A evidência é suficiente para afirmar **ocorrência real**, mas não para estabelecer frequência estatística dos subtipos.

Nesta aula:

- questão real é identificada como real;
- questão anulada é identificada como anulada;
- nenhuma alternativa ausente é reconstruída;
- questões criadas são identificadas como inéditas.

---

# PARTE XXII — CHECKLIST EDITORIAL

## 74. Checklist

- [x] item do edital identificado;
- [x] cargoIds compartilhados;
- [x] capital;
- [x] taxa;
- [x] tempo;
- [x] juros;
- [x] montante;
- [x] fórmula `J=C·i·t`;
- [x] fórmula `M=C+J`;
- [x] fórmula `M=C(1+i·t)`;
- [x] descoberta de capital;
- [x] descoberta de taxa;
- [x] descoberta de tempo;
- [x] capital a partir de M-J;
- [x] conversão de taxa percentual;
- [x] compatibilidade taxa/tempo;
- [x] conversão de meses para anos;
- [x] contraste conceitual com juros compostos;
- [x] 6 blocos de evidências reais INEPAM;
- [x] questões anuladas identificadas;
- [x] 15 questões inéditas A–E;
- [x] gabarito comentado;
- [x] 24 flashcards;
- [x] revisão rápida;
- [x] fontes oficiais;
- [x] status `revisado`.

---

## 75. Próxima sequência do edital

Após **Juros Simples**, o próximo item de Matemática no mapa mestre é:

> **Números reais.**

