export interface Topico { id: string; materia: string; titulo: string; referencia: string }
export interface Materia { id: string; nome: string; bloco: string; questoes: number; descricao: string; topicos: Topico[] }
export const editalUrl = 'https://jcconcursos.uol.com.br/media/uploads/anexos/concurso-tj-sp-edital-2-2026-escrevente.pdf'
export const inscricaoUrl = 'https://www.vunesp.com.br/TJSP2607'
export const materias: Materia[] = [
  {
    "id": "port",
    "nome": "Língua Portuguesa",
    "bloco": "I",
    "questoes": 16,
    "descricao": "Português desde a interpretação até a gramática em contexto.",
    "topicos": [
      {
        "id": "port-01",
        "materia": "port",
        "titulo": "Análise, compreensão e interpretação de textos verbais, não verbais, literários e não literários",
        "referencia": "Bloco I, item 1"
      },
      {
        "id": "port-02",
        "materia": "port",
        "titulo": "Informações literais e inferências",
        "referencia": "Bloco I, item 2"
      },
      {
        "id": "port-03",
        "materia": "port",
        "titulo": "Ponto de vista do autor",
        "referencia": "Bloco I, item 3"
      },
      {
        "id": "port-04",
        "materia": "port",
        "titulo": "Estruturação do texto: relações de ideias e coesão",
        "referencia": "Bloco I, item 4"
      },
      {
        "id": "port-05",
        "materia": "port",
        "titulo": "Significação contextual das palavras",
        "referencia": "Bloco I, item 5"
      },
      {
        "id": "port-06",
        "materia": "port",
        "titulo": "Sinônimos e antônimos",
        "referencia": "Bloco I, item 6"
      },
      {
        "id": "port-07",
        "materia": "port",
        "titulo": "Sentido próprio e figurado",
        "referencia": "Bloco I, item 7"
      },
      {
        "id": "port-08",
        "materia": "port",
        "titulo": "Classes de palavras: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição e conjunção",
        "referencia": "Bloco I, item 8"
      },
      {
        "id": "port-09",
        "materia": "port",
        "titulo": "Concordância verbal e nominal",
        "referencia": "Bloco I, item 9"
      },
      {
        "id": "port-10",
        "materia": "port",
        "titulo": "Regência verbal e nominal",
        "referencia": "Bloco I, item 10"
      },
      {
        "id": "port-11",
        "materia": "port",
        "titulo": "Colocação pronominal",
        "referencia": "Bloco I, item 11"
      },
      {
        "id": "port-12",
        "materia": "port",
        "titulo": "Crase",
        "referencia": "Bloco I, item 12"
      },
      {
        "id": "port-13",
        "materia": "port",
        "titulo": "Pontuação",
        "referencia": "Bloco I, item 13"
      }
    ]
  },
  {
    "id": "penal",
    "nome": "Direito Penal",
    "bloco": "II",
    "questoes": 0,
    "descricao": "",
    "topicos": [
      {
        "id": "penal-01",
        "materia": "penal",
        "titulo": "Fé pública e falsidades documentais",
        "referencia": "Código Penal, arts. 293 a 305"
      },
      {
        "id": "penal-02",
        "materia": "penal",
        "titulo": "Falsa identidade e uso de documento alheio",
        "referencia": "Código Penal, arts. 307 e 308"
      },
      {
        "id": "penal-03",
        "materia": "penal",
        "titulo": "Fraudes em certames",
        "referencia": "Código Penal, art. 311-A"
      },
      {
        "id": "penal-04",
        "materia": "penal",
        "titulo": "Crimes funcionais",
        "referencia": "Código Penal, arts. 312 a 317"
      },
      {
        "id": "penal-05",
        "materia": "penal",
        "titulo": "Demais crimes contra a Administração",
        "referencia": "Código Penal, arts. 319 a 333"
      },
      {
        "id": "penal-06",
        "materia": "penal",
        "titulo": "Crimes previstos nos arts. 336 e 337",
        "referencia": "Código Penal, arts. 336 e 337"
      },
      {
        "id": "penal-07",
        "materia": "penal",
        "titulo": "Crimes contra a administração da Justiça",
        "referencia": "Código Penal, arts. 339 a 347"
      },
      {
        "id": "penal-08",
        "materia": "penal",
        "titulo": "Crimes dos arts. 357 e 359",
        "referencia": "Código Penal, arts. 357 e 359"
      }
    ]
  },
  {
    "id": "pp",
    "nome": "Direito Processual Penal",
    "bloco": "II",
    "questoes": 0,
    "descricao": "",
    "topicos": [
      {
        "id": "pp-01",
        "materia": "pp",
        "titulo": "Juiz, Ministério Público, acusados e auxiliares",
        "referencia": "CPP, arts. 251 a 258; 261 a 267; 274"
      },
      {
        "id": "pp-02",
        "materia": "pp",
        "titulo": "Citações, notificações e intimações",
        "referencia": "CPP, arts. 351 a 372"
      },
      {
        "id": "pp-03",
        "materia": "pp",
        "titulo": "Procedimento comum e tribunal do júri",
        "referencia": "CPP, arts. 394 a 497"
      },
      {
        "id": "pp-04",
        "materia": "pp",
        "titulo": "Procedimentos previstos no edital",
        "referencia": "CPP, arts. 531 a 538; 541 a 548"
      },
      {
        "id": "pp-05",
        "materia": "pp",
        "titulo": "Recursos e demais dispositivos cobrados",
        "referencia": "CPP, arts. 574 a 667"
      },
      {
        "id": "pp-06",
        "materia": "pp",
        "titulo": "Juizado Especial Criminal",
        "referencia": "Lei 9.099/1995, arts. 60 a 83, 88 e 89"
      }
    ]
  },
  {
    "id": "pc",
    "nome": "Direito Processual Civil",
    "bloco": "II",
    "questoes": 0,
    "descricao": "",
    "topicos": [
      {
        "id": "pc-01",
        "materia": "pc",
        "titulo": "Impedimento, suspeição e auxiliares da Justiça",
        "referencia": "CPC, arts. 144 a 155"
      },
      {
        "id": "pc-02",
        "materia": "pc",
        "titulo": "Atos processuais, prazos e comunicações",
        "referencia": "CPC, arts. 188 a 275"
      },
      {
        "id": "pc-03",
        "materia": "pc",
        "titulo": "Tutela provisória",
        "referencia": "CPC, arts. 294 a 311"
      },
      {
        "id": "pc-04",
        "materia": "pc",
        "titulo": "Procedimento comum",
        "referencia": "CPC, arts. 318 a 538"
      },
      {
        "id": "pc-05",
        "materia": "pc",
        "titulo": "Recursos",
        "referencia": "CPC, arts. 994 a 1026"
      },
      {
        "id": "pc-06",
        "materia": "pc",
        "titulo": "Juizados Especiais Cíveis",
        "referencia": "Lei 9.099/1995, arts. 3º a 19"
      },
      {
        "id": "pc-07",
        "materia": "pc",
        "titulo": "Juizados da Fazenda Pública",
        "referencia": "Lei 12.153/2009"
      }
    ]
  },
  {
    "id": "const",
    "nome": "Direito Constitucional",
    "bloco": "II",
    "questoes": 0,
    "descricao": "",
    "topicos": [
      {
        "id": "const-01",
        "materia": "const",
        "titulo": "Direitos individuais e coletivos",
        "referencia": "CF, art. 5º"
      },
      {
        "id": "const-02",
        "materia": "const",
        "titulo": "Direitos sociais",
        "referencia": "CF, arts. 6º a 11"
      },
      {
        "id": "const-03",
        "materia": "const",
        "titulo": "Nacionalidade",
        "referencia": "CF, arts. 12 e 13"
      },
      {
        "id": "const-04",
        "materia": "const",
        "titulo": "Administração Pública e servidores",
        "referencia": "CF, arts. 37 a 41"
      },
      {
        "id": "const-05",
        "materia": "const",
        "titulo": "Órgãos do Poder Judiciário",
        "referencia": "CF, art. 92"
      }
    ]
  },
  {
    "id": "adm",
    "nome": "Direito Administrativo",
    "bloco": "II",
    "questoes": 0,
    "descricao": "",
    "topicos": [
      {
        "id": "adm-01",
        "materia": "adm",
        "titulo": "Estatuto do servidor de SP — parte inicial",
        "referencia": "Lei estadual 10.261/1968, arts. 1º a 86"
      },
      {
        "id": "adm-02",
        "materia": "adm",
        "titulo": "Disposições selecionadas do Estatuto",
        "referencia": "Lei estadual 10.261/1968, arts. 171 a 175"
      },
      {
        "id": "adm-03",
        "materia": "adm",
        "titulo": "Deveres, responsabilidades e regime disciplinar",
        "referencia": "Lei estadual 10.261/1968, arts. 239 a 323"
      },
      {
        "id": "adm-04",
        "materia": "adm",
        "titulo": "Improbidade Administrativa",
        "referencia": "Lei federal 8.429/1992"
      }
    ]
  },
  {
    "id": "interna",
    "nome": "Legislação Interna do TJ-SP",
    "bloco": "II",
    "questoes": 0,
    "descricao": "",
    "topicos": [
      {
        "id": "interna-01",
        "materia": "interna",
        "titulo": "Teletrabalho no TJ-SP",
        "referencia": "Resolução TJSP 850/2021"
      },
      {
        "id": "interna-02",
        "materia": "interna",
        "titulo": "Sistema eproc: governança e uso",
        "referencia": "Resolução TJSP 963/2025"
      },
      {
        "id": "interna-03",
        "materia": "interna",
        "titulo": "Plano de Cargos e Carreiras",
        "referencia": "LC estadual 1.111/2010"
      },
      {
        "id": "interna-04",
        "materia": "interna",
        "titulo": "Regimento Interno do TJ-SP",
        "referencia": "Regimento Interno TJSP"
      },
      {
        "id": "interna-05",
        "materia": "interna",
        "titulo": "Normas da Corregedoria — Cap. II e III",
        "referencia": "Tomo I, Cap. II, Seção I, Subseções I–II; Cap. III, Seções I, II, V–XIX e Subseções indicadas"
      },
      {
        "id": "interna-06",
        "materia": "interna",
        "titulo": "Normas da Corregedoria — Cap. XI",
        "referencia": "Tomo I, Cap. XI, Seções I a VII"
      }
    ]
  },
  {
    "id": "atu",
    "nome": "Atualidades e Estatuto PcD",
    "bloco": "III",
    "questoes": 4,
    "descricao": "",
    "topicos": [
      {
        "id": "atu-01",
        "materia": "atu",
        "titulo": "Fatos políticos, econômicos, sociais e culturais no Brasil e no mundo",
        "referencia": "A partir do 1º semestre de 2026"
      },
      {
        "id": "atu-02",
        "materia": "atu",
        "titulo": "Estatuto da Pessoa com Deficiência (LBI)",
        "referencia": "Lei 13.146/2015, arts. 1º a 13 e 34 a 38"
      }
    ]
  },
  {
    "id": "mat",
    "nome": "Matemática",
    "bloco": "III",
    "questoes": 4,
    "descricao": "Explicação do zero, com cálculos detalhados.",
    "topicos": [
      {
        "id": "mat-01",
        "materia": "mat",
        "titulo": "Operações com números reais",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-02",
        "materia": "mat",
        "titulo": "MMC e MDC",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-03",
        "materia": "mat",
        "titulo": "Razão e proporção",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-04",
        "materia": "mat",
        "titulo": "Porcentagem",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-05",
        "materia": "mat",
        "titulo": "Regra de três simples e composta",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-06",
        "materia": "mat",
        "titulo": "Médias simples e ponderada",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-07",
        "materia": "mat",
        "titulo": "Juros simples",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-08",
        "materia": "mat",
        "titulo": "Equações de 1º e 2º graus",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-09",
        "materia": "mat",
        "titulo": "Sistema de equações do 1º grau",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-10",
        "materia": "mat",
        "titulo": "Tabelas, gráficos e relação entre grandezas",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-11",
        "materia": "mat",
        "titulo": "Sistemas de medidas usuais",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-12",
        "materia": "mat",
        "titulo": "Geometria: perímetro, área, volume, ângulos e Pitágoras",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "mat-13",
        "materia": "mat",
        "titulo": "Resolução de situações-problema",
        "referencia": "Anexo VIII, edital 02/2026"
      }
    ]
  },
  {
    "id": "info",
    "nome": "Informática",
    "bloco": "III",
    "questoes": 9,
    "descricao": "Windows, Word, Excel, Teams, OneDrive e Internet.",
    "topicos": [
      {
        "id": "info-01",
        "materia": "info",
        "titulo": "Windows 10 ou superior, pastas, arquivos e atalhos",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "info-02",
        "materia": "info",
        "titulo": "MS Word: documentos, edição e formatação",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "info-03",
        "materia": "info",
        "titulo": "MS Excel: fórmulas, funções, macros, gráficos e dados",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "info-04",
        "materia": "info",
        "titulo": "Correio eletrônico e anexação de arquivos",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "info-05",
        "materia": "info",
        "titulo": "Internet: navegação, URLs, links, pesquisas",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "info-06",
        "materia": "info",
        "titulo": "MS Teams e colaboração no Microsoft 365",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "info-07",
        "materia": "info",
        "titulo": "OneDrive: armazenamento e compartilhamento",
        "referencia": "Anexo VIII, edital 02/2026"
      }
    ]
  },
  {
    "id": "rl",
    "nome": "Raciocínio Lógico",
    "bloco": "III",
    "questoes": 7,
    "descricao": "Começa com deduções práticas e avança gradualmente.",
    "topicos": [
      {
        "id": "rl-01",
        "materia": "rl",
        "titulo": "Estruturas lógicas e deduções",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "rl-02",
        "materia": "rl",
        "titulo": "Lógica de argumentação",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "rl-03",
        "materia": "rl",
        "titulo": "Diagramas lógicos",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "rl-04",
        "materia": "rl",
        "titulo": "Sequências numéricas e figurais",
        "referencia": "Anexo VIII, edital 02/2026"
      }
    ]
  },
  {
    "id": "red",
    "nome": "Redação",
    "bloco": "Discursiva",
    "questoes": 0,
    "descricao": "Prova discursiva separada das 70 questões.",
    "topicos": [
      {
        "id": "red-01",
        "materia": "red",
        "titulo": "Texto dissertativo-argumentativo: estrutura e tese",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "red-02",
        "materia": "red",
        "titulo": "Argumentação, coesão e gramática",
        "referencia": "Anexo VIII, edital 02/2026"
      },
      {
        "id": "red-03",
        "materia": "red",
        "titulo": "Treino cronometrado e reescrita",
        "referencia": "Anexo VIII, edital 02/2026"
      }
    ]
  }
]
export const topicos: Topico[] = materias.flatMap(m => m.topicos)
