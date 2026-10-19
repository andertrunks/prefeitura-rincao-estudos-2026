export type Questao = { pergunta: string; opcoes: string[]; correta: number; explicacao: string }
export type Aula = { titulo: string; tempo: string; texto: string; questoes: Questao[] }
export const aulas: Record<string, Aula> = {
  "port-01": {
    "titulo": "Interpretação de textos: do zero até a Vunesp",
    "tempo": "35 minutos",
    "texto": "# Aula 01 — Compreensão e interpretação de textos\n\n## O que o edital cobra\n\nO Bloco I, item 1, exige análise, compreensão e interpretação de textos verbais, não verbais, literários e não literários. Você aprenderá um procedimento seguro para resolver questões, mesmo quando o texto for longo.\n\n## 1. Compreender não é adivinhar\n\n**Compreender** significa localizar o que o texto efetivamente afirma. Leia: **Embora estivesse chovendo, Helena caminhou até a biblioteca.**\n\nO texto diz que chovia e que Helena caminhou até a biblioteca. Ele **não** diz que Helena levou guarda-chuva, que gostava de chuva ou que a biblioteca estava aberta.\n\n## 2. O que significa inferir\n\n**Inferência** é uma conclusão apoiada no que está escrito. Podemos concluir que **a chuva não impediu a caminhada**. Não podemos concluir que Helena se molhou: o texto não oferece essa informação.\n\nCompare as três situações:\n\n- **Literal:** a informação aparece expressamente no texto.\n\n- **Inferida:** a conclusão decorre das pistas fornecidas.\n\n- **Extrapolada:** a conclusão é imaginada e não tem apoio suficiente.\n\n## 3. Como a banca pode mudar o sentido\n\nLeia: **A maioria dos participantes chegou cedo.**\n\nÉ correto dizer que **mais da metade** chegou cedo. É incorreto afirmar que **todos** chegaram cedo. As palavras *sempre, nunca, todos, somente* e *nenhum* merecem atenção especial, pois alteram o alcance de uma frase.\n\n## 4. Ideia principal e detalhes\n\nTexto: **A biblioteca passou a abrir aos sábados. A medida amplia o acesso de quem trabalha durante a semana.**\n\n- **Ideia principal:** a ampliação do atendimento facilita o acesso.\n\n- **Detalhe:** a abertura aos sábados.\n\n- **Relação entre as frases:** a segunda explica a importância da primeira.\n\n## 5. Textos verbais e não verbais\n\nTextos **verbais** se expressam por palavras. Textos **não verbais** usam imagens e símbolos. Charges e infográficos podem combinar os dois. Em uma questão visual, descreva primeiro o que aparece e só então interprete.\n\n## 6. Método de cinco passos\n\n1. Leia o comando da questão e marque *correta*, *incorreta* ou *infere-se*.\n\n2. Leia o texto procurando tema, ideia central e palavras de oposição ou causa.\n\n3. Resuma mentalmente a mensagem em uma frase.\n\n4. Procure, para cada alternativa, uma evidência no texto.\n\n5. Elimine alternativas que troquem causa por consequência ou exagerem tempo e quantidade.\n\n## 7. Pegadinha resolvida\n\nTexto: **Alguns funcionários preferem trabalhar presencialmente.**\n\nAlternativa A: **Todos preferem** — errada, porque alguns não significa todos.\n\nAlternativa B: **Parte dos funcionários prefere** — correta, porque mantém a quantidade.\n\nAlternativa C: **Ninguém prefere teletrabalho** — errada, porque o texto não informa isso.\n\n## 8. Checklist de revisão\n\n- Consigo separar uma informação escrita de uma inferência?\n\n- Sei identificar a ideia principal e os detalhes?\n\n- Estou atento a palavras absolutas nas alternativas?\n\n**Pratique agora as três questões inéditas abaixo.** Elas servem para fixação; não são questões oficiais da Vunesp.\n\n**Fonte:** Edital nº 02/2026, Anexo VIII, Bloco I, p. 154.",
    "questoes": [
      {
        "pergunta": "No trecho \"Embora estivesse cansado, Paulo concluiu o relatório\", é correto afirmar:",
        "opcoes": [
          "Paulo deixou de trabalhar.",
          "O cansaço impediu o relatório.",
          "Paulo concluiu o relatório apesar do cansaço.",
          "Paulo não estava cansado.",
          "O relatório não foi concluído."
        ],
        "correta": 2,
        "explicacao": "Embora indica concessão: apesar da dificuldade, a ação ocorreu."
      },
      {
        "pergunta": "Um texto afirma: \"Alguns alunos chegaram cedo.\" Qual afirmação mantém o sentido?",
        "opcoes": [
          "Todos chegaram cedo.",
          "Parte dos alunos chegou cedo.",
          "Ninguém se atrasou.",
          "A maioria chegou tarde.",
          "Todos se atrasaram."
        ],
        "correta": 1,
        "explicacao": "Alguns = parte. Não autoriza concluir todos nem maioria."
      },
      {
        "pergunta": "O que é inferir uma informação?",
        "opcoes": [
          "Copiar um trecho sem ler.",
          "Adivinhar a intenção do leitor.",
          "Criar uma história externa.",
          "Concluir algo sustentado por pistas do texto.",
          "Marcar a alternativa mais longa."
        ],
        "correta": 3,
        "explicacao": "Uma inferência é conclusão apoiada em evidências textuais."
      }
    ]
  },
  "mat-01": {
    "titulo": "Operações com números reais sem pular etapas",
    "tempo": "40 minutos",
    "texto": "# Aula 01 — Números reais e operações\n\n## O que o edital cobra\n\nO Bloco III prevê operações com números reais. Esse conteúdo sustenta porcentagem, regra de três, juros e equações. Vamos aprender com calma.\n\n## 1. Tipos de números\n\n**Naturais**: 0, 1, 2, 3. **Inteiros**: incluem negativos, como -2. **Racionais**: podem ser escritos como fração, por exemplo 1/2 = 0,5. **Irracionais**: não podem ser representados como fração de inteiros, como √2. Os **reais** abrangem racionais e irracionais.\n\n## 2. Adição e subtração com sinais\n\nSinais iguais na soma: some e mantenha o sinal. **-4 + (-3) = -7**. Sinais diferentes: compare os módulos e mantenha o sinal do maior. **-9 + 5 = -4**.\n\nSubtrair um negativo equivale a somar: **7 - (-2) = 9**.\n\n## 3. Multiplicação e divisão\n\nSinais iguais dão resultado positivo; sinais diferentes, negativo. **(-6) × (-3) = 18**. **(-20) ÷ 4 = -5**. Nunca divida por zero.\n\n## 4. Frações\n\nNa fração 3/4, o 3 é o numerador e o 4 é o denominador.\n\nNa soma 1/2 + 1/3, primeiro encontre denominador comum: **3/6 + 2/6 = 5/6**.\n\nNa multiplicação de frações, multiplique numeradores e denominadores: (2/3) × (3/5) = 6/15 = **2/5**.\n\n## 5. Ordem de operações\n\nA ordem é: 1. Parênteses; 2. Potências e raízes; 3. Multiplicações e divisões; 4. Somas e subtrações.\n\nExemplo completo: **2 + 3 × (8 - 6)**. Primeiro (8 - 6) = 2. Depois 3 × 2 = 6. Por último 2 + 6 = **8**.\n\n## 6. Decimais e vírgula\n\nNa soma, alinhe as vírgulas: **1,50 + 0,75 = 2,25**. Na multiplicação **0,2 × 0,3 = 0,06**, pois duas casas decimais aparecem no resultado.\n\n## 7. Questão contextualizada\n\nUm setor recebeu 48 processos e distribuiu igualmente entre 6 servidores. Cada servidor ficou com **48 ÷ 6 = 8 processos**. Sempre identifique a operação antes de calcular.\n\n## 8. Registro de erros\n\nAo errar, anote o motivo real: confusão com sinal? Ordem das operações? Fração? Depois refaça sem olhar a resolução.\n\n**Fonte:** Edital nº 02/2026, Anexo VIII, Matemática, p. 155. Questões inéditas, não oficiais.",
    "questoes": [
      {
        "pergunta": "Quanto vale 4 + 3 × (7 - 5)?",
        "opcoes": [
          "14",
          "10",
          "11",
          "8",
          "21"
        ],
        "correta": 1,
        "explicacao": "7 - 5 = 2; 3 × 2 = 6; 4 + 6 = 10."
      },
      {
        "pergunta": "Qual o resultado de -8 + 13?",
        "opcoes": [
          "-21",
          "-5",
          "5",
          "21",
          "0"
        ],
        "correta": 2,
        "explicacao": "13 - 8 = 5; o número de maior módulo é positivo."
      },
      {
        "pergunta": "Quanto vale 1/2 + 1/4?",
        "opcoes": [
          "2/6",
          "1/8",
          "1/6",
          "3/4",
          "2/4"
        ],
        "correta": 3,
        "explicacao": "1/2 = 2/4, portanto 2/4 + 1/4 = 3/4."
      }
    ]
  },
  "rl-01": {
    "titulo": "Estruturas lógicas e dedução: fundamentos",
    "tempo": "35 minutos",
    "texto": "# Aula 01 — Raciocínio Lógico desde os fundamentos\n\n## O que o edital cobra\n\nRelações entre pessoas, lugares, objetos e eventos; dedução de novas informações; estruturas lógicas, argumentação, diagramas e sequências.\n\n## 1. O que é uma proposição\n\nUma **proposição** é frase declarativa que pode ser verdadeira ou falsa. Exemplo: **Araraquara fica em São Paulo** é uma proposição. **Feche a porta!** é uma ordem e não uma proposição.\n\n## 2. Negação\n\nNegar **Ana estuda hoje** resulta em **Ana não estuda hoje**. Atenção: negar **Todos passaram** não significa que ninguém passou; significa que **pelo menos uma pessoa não passou**.\n\n## 3. Deduzir com uma tabela\n\nConsidere Ana, Beto e Caio. Cada um mora em uma cidade diferente: Araraquara, Matão e Ibitinga.\n\nInformações: (1) Ana não mora em Matão. (2) Beto mora em Ibitinga. (3) Caio não mora em Araraquara.\n\n**Passo a passo:** Beto → Ibitinga. Restam Araraquara e Matão. Ana não mora em Matão, então Ana → Araraquara. Logo, Caio → Matão.\n\nEsse tipo de questão fica muito mais simples com tabelas e eliminações.\n\n## 4. Palavras que mudam a lógica\n\n**Todos** significa sem exceção; **algum** significa pelo menos um; **nenhum** significa zero; **nem todos** significa que há pelo menos uma exceção.\n\n## 5. Sequências\n\nA sequência 2, 4, 6, 8, ... cresce de 2 em 2. Próximo: **10**. A sequência 3, 6, 12, 24, ... dobra a cada passo. Próximo: **48**.\n\n## 6. Método para resolver\n\n1. Liste as pessoas e os objetos. 2. Faça a tabela. 3. Marque fatos certos. 4. Elimine possibilidades. 5. Revise todas as condições.\n\n**Fonte:** Edital nº 02/2026, Anexo VIII, Raciocínio Lógico, p. 156. Questões inéditas, não oficiais.",
    "questoes": [
      {
        "pergunta": "A negação de \"Todos os servidores chegaram cedo\" é:",
        "opcoes": [
          "Ninguém chegou cedo.",
          "Todos chegaram tarde.",
          "Pelo menos um não chegou cedo.",
          "Todos chegaram cedo.",
          "Alguns chegaram cedo."
        ],
        "correta": 2,
        "explicacao": "Basta existir uma exceção para a frase universal ser falsa."
      },
      {
        "pergunta": "Ana é mais alta que Bia; Bia é mais alta que Carla. Pode-se concluir:",
        "opcoes": [
          "Carla é mais alta que Ana.",
          "Ana e Carla têm a mesma altura.",
          "Ana é mais alta que Carla.",
          "Carla é mais alta que Bia.",
          "Nada pode ser concluído."
        ],
        "correta": 2,
        "explicacao": "Relação transitiva: Ana > Bia > Carla."
      },
      {
        "pergunta": "Próximo termo: 5, 10, 20, 40, ...",
        "opcoes": [
          "45",
          "50",
          "60",
          "70",
          "80"
        ],
        "correta": 4,
        "explicacao": "Dobra-se a cada passo: 40 × 2 = 80."
      }
    ]
  }
}
