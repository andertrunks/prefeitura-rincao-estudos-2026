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
    - "Anexo II — Agente Administrativo — Informática: Windows XP ou mais recente; aplicativos embarcados; periféricos; Office 2010 ou mais recente; Adobe Reader; Internet, navegadores, configurações e navegação."
  status: revisado
  versao: "0.2.0"
  revisadoEm: "2026-08-23"
  sourceRefs:
    - src-edital-rincao-2026
- src-microsoft-excel-support
- src-microsoft-excel-protect-worksheet
- src-inepam-clementina-001-2026-recursos
  ---

# Microsoft Excel — células, fórmulas, referências, funções, filtros e gráficos

## 1. Referência ao edital

Esta subaula corresponde ao tópico **`aa-excel`** e trabalha Excel 2010 ou mais recente.

## 2. Pasta de trabalho, planilha, linha, coluna e célula

- **Pasta de trabalho:** arquivo Excel, como `controle.xlsx`.
- **Planilha:** folha dentro da pasta.
- **Linha:** identificada por números.
- **Coluna:** identificada por letras.
- **Célula:** cruzamento, como `B4`.
- **Intervalo:** conjunto, como `A1:C10`.

## 3. Fórmulas e operadores

Fórmulas começam normalmente com `=`.

Operadores:
- `+`;
- `-`;
- `*`;
- `/`;
- `^`.

Exemplo:
`=(B2*C2)-D2`

Use parênteses para controlar precedência.

## 4. Funções básicas

Exemplos em português:
- `=SOMA(A1:A10)`
- `=MÉDIA(A1:A10)`
- `=MÁXIMO(A1:A10)`
- `=MÍNIMO(A1:A10)`
- `=CONT.NÚM(A1:A10)`
- `=SE(B2>=7;"Aprovado";"Reprovado")`

Separadores podem variar conforme configuração regional.

## 5. Referências relativas, absolutas e mistas

- `A1` — relativa;
- `$A$1` — absoluta;
- `$A1` — coluna fixa;
- `A$1` — linha fixa.

**Exemplo:** taxa de juros fixa em `$F$1` ao copiar fórmula para várias linhas.

## 6. Classificação e filtro

**Classificar** reordena registros.

**Filtrar** exibe somente linhas que atendem critérios, sem necessariamente apagar as demais.

**Pegadinha:** filtro ≠ exclusão.

## 7. Gráficos

Gráficos representam dados visualmente:
- colunas;
- barras;
- linhas;
- setores/pizza;
- dispersão.

Escolha gráfico compatível com a informação.

## 8. Proteção de células e fórmulas

No Excel, células são marcadas como bloqueadas por padrão, mas o bloqueio produz efeito quando a planilha é protegida.

Para permitir edição só em campos específicos:
1. selecionar células editáveis;
2. desbloqueá-las;
3. manter fórmulas protegidas bloqueadas;
4. proteger a planilha.

### QUESTÃO REAL — INEPAM

No Concurso 001/2026 da Prefeitura de Clementina/SP, a banca confirmou em julgamento de recursos, para cargo administrativo, alternativa que descrevia corretamente esse procedimento de **proteger fórmulas e permitir edição apenas em células específicas**.

A documentação oficial da Microsoft confirma o fluxo.

## 9. Congelar painéis e visualização

Congelar painéis ajuda a manter cabeçalhos visíveis enquanto se navega por planilha longa.

**Exemplo:** manter a linha com “Nome / CPF / Setor / Situação” visível em cadastro extenso.

## 10. Erros comuns

- `#DIV/0!` — divisão por zero;
- referência errada;
- número armazenado como texto;
- intervalo incompleto;
- esquecer `=`;
- ordenar só uma coluna e separar registros relacionados.

## 11. Pegadinhas

- pasta de trabalho ≠ planilha;
- filtro ≠ exclusão;
- `$` altera referência;
- fórmula ≠ valor digitado;
- proteger planilha ≠ criptografar arquivo inteiro;
- gráfico não substitui dados-fonte.

## 12. Exemplo resolvido

Planilha:
- B2 = 1000
- C2 = 5%

Fórmula de 5%:
`=B2*C2`

Se C2 contém `5%`, resultado = 50.

Para usar uma taxa fixa em F1:
`=B2*$F$1`

Ao copiar a fórmula, B2 muda para B3, B4..., mas `$F$1` permanece.

## 13. Resumo

Excel trabalha com células e fórmulas. Domine endereços, funções básicas, `$`, filtros, classificação, gráficos e proteção.

## 14. Revisão rápida

1. B4 = coluna B, linha 4.
2. Fórmula começa por `=`.
3. SOMA e MÉDIA.
4. `$A$1` fixa tudo.
5. Filtrar não apaga.
6. Proteção de planilha atua sobre células bloqueadas.

## 15. Flashcards

**O que é pasta de trabalho?** O arquivo Excel.  
**O que é planilha?** Uma folha do arquivo.  
**Como começa fórmula?** `=`.  
**Referência absoluta?** `$A$1`.  
**Filtro apaga dados?** Não necessariamente.  
**Para proteger fórmulas e liberar campos?** Desbloquear campos editáveis e proteger a planilha.

## 16. Questões inéditas — estilo INEPAM

**1.** A célula `C7` está na:
A) linha C, coluna 7. B) coluna C, linha 7. C) planilha C7. D) pasta 7. E) seção C.

**2.** Referência absoluta:
A) A1. B) $A$1. C) A:A. D) 1A. E) A-1.

**3.** Função para média:
A) SOMA. B) SE. C) MÉDIA. D) MAXVAL. E) TOTAL.

**4.** Filtrar dados:
A) sempre exclui. B) pode apenas restringir a visualização. C) formata disco. D) cria PDF. E) remove fórmulas.

**5.** Para proteger fórmulas e permitir entrada em campos específicos:
A) apagar fórmulas. B) desbloquear campos editáveis e proteger planilha. C) salvar como TXT. D) ocultar Excel. E) ordenar A-Z.

## 17. Gabarito

1. **B**.  
2. **B**.  
3. **C**.  
4. **B**.  
5. **B**.

## 18. Fontes

- Edital de Rincão 001/2026.
- Microsoft Support — Excel.
- Microsoft Support — Protect a worksheet.
- INEPAM — Clementina/SP 001/2026, julgamento de recursos.

