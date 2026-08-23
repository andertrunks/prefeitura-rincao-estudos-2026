import { editorialQuestions } from './content/editorial'
import type { Cargo, CargoId, DisciplineId, Question, SourceLink, Topic } from './types'

const EDITAL_URL = 'https://www.inepam.org.br/'
const CF_URL = 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm'
const ECA_URL = 'https://www.planalto.gov.br/ccivil_03/leis/l8069compilado.htm'
const LDB_URL = 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm'
const DH_URL = 'https://www.gov.br/mec/pt-br/cne/pdf/normas-classificadas-por-assunto/direitos-humanos-cne/rcp001_12.pdf/view'
const LOM_URL = 'https://www.camararincao.sp.gov.br/2023/index.php?Itemid=71&download=1771%3Alei-organica-do-municipio&id=1%3Alei-organica&option=com_phocadownload&view=category'

const editalSource: SourceLink = { label: 'Edital oficial - Concurso Público nº 001/2026', url: EDITAL_URL, kind: 'edital' }

export const cargos: Cargo[] = [
  {
    id: 'monitor',
    name: 'Monitor de Educação',
    schooling: 'Ensino médio completo',
    requirements: 'Ensino médio completo e conhecimentos na área da educação.',
    vacancies: '1 vaga',
    workload: '200 horas mensais',
    salary: 'R$ 1.692,64',
    registrationFee: 'R$ 50,00',
    practicalExam: false,
    color: 'mint',
    attributes: [
      'Executar atividades em creches e escolas de educação infantil e básica sob supervisão.',
      'Auxiliar alimentação, higiene, recreação, acompanhamento, transporte e deslocamento dos alunos.',
      'Zelar pela segurança e pelos cuidados cotidianos dentro das unidades escolares.',
    ],
  },
  {
    id: 'agente',
    name: 'Agente Administrativo',
    schooling: 'Ensino médio completo',
    requirements: 'Ensino médio completo, manuseio de máquinas de calcular e conhecimentos do sistema operacional Windows.',
    vacancies: 'Cadastro reserva',
    workload: '200 horas mensais',
    salary: 'R$ 1.692,64',
    registrationFee: 'R$ 50,00',
    practicalExam: false,
    color: 'blue',
    attributes: [
      'Executar serviços gerais de escritório nas unidades administrativas.',
      'Classificar documentos e correspondências, transcrever dados e realizar lançamentos.',
      'Prestar informações ao público, arquivar, digitar e atender demandas administrativas.',
    ],
  },
  {
    id: 'ajudante',
    name: 'Ajudante Geral',
    schooling: 'Ensino fundamental incompleto',
    requirements: 'Ensino fundamental incompleto e aptidão física.',
    vacancies: 'Cadastro reserva',
    workload: '200 horas mensais',
    salary: 'R$ 1.692,64',
    registrationFee: 'R$ 40,00',
    practicalExam: true,
    color: 'sand',
    attributes: [
      'Executar tarefas operacionais em obras, limpeza, conservação e manutenção municipal.',
      'Atuar em redes de água e esgoto, ruas, parques, praças e estradas rurais.',
      'Realizar coleta, varrição, lavagem, pintura de guias, aparo de grama, poda e sinalização.',
    ],
  },
]

type TopicSeed = [string, string, string, string[], string?, string?]

function makeTopics(
  prefix: string,
  cargoIds: CargoId[],
  discipline: DisciplineId,
  page: number,
  item: string,
  seeds: TopicSeed[],
  sources: SourceLink[] = [editalSource],
): Topic[] {
  return seeds.map(([slug, title, summary, keyPoints, example, pitfall]) => ({
    id: `${prefix}-${slug}`,
    cargoIds,
    discipline,
    title,
    summary,
    keyPoints,
    editalText: title,
    editalPage: page,
    editalItem: item,
    origin: 'edital',
    example: example ?? `Em uma situação de prova, identifique a aplicação correta de ${title.toLowerCase()} antes de marcar a alternativa.`,
    pitfall: pitfall ?? `Não confunda ${title.toLowerCase()} com conceitos apenas parecidos; a banca pode trocar uma condição essencial.`,
    sources,
  }))
}

const mediumCargos: CargoId[] = ['monitor', 'agente']

const fundamentalPortuguese = makeTopics('fp', ['ajudante'], 'portugues', 33, 'Anexo II - Conhecimentos gerais / Ensino Fundamental', [
  ['interpretacao', 'Interpretação de textos', 'Compreender informação explícita, finalidade e sentido global de textos curtos.', ['Localize quem, o quê, quando e onde.', 'Separe o que está escrito do que é opinião.', 'Use o contexto para confirmar a resposta.']],
  ['significado', 'Significado das palavras', 'Reconhecer sinônimos, antônimos e o sentido que uma palavra assume dentro da frase.', ['Leia a frase inteira.', 'Observe se o sentido é positivo, negativo ou neutro.', 'Teste a substituição sem alterar a ideia.']],
  ['vogais-consoantes', 'Vogais e consoantes', 'Distinguir as letras vogais A, E, I, O, U das demais letras do alfabeto.', ['Vogal representa núcleo sonoro da sílaba.', 'Consoante depende de vogal para formar sílaba.', 'Conte letras, não sons, quando o enunciado pedir grafia.']],
  ['grafia', 'Escrita correta', 'Identificar a grafia convencional das palavras de uso cotidiano.', ['Observe trocas como s/z, x/ch e g/j.', 'A pronúncia nem sempre revela a escrita.', 'Releia a palavra no contexto.']],
])

const fundamentalMath = makeTopics('fm', ['ajudante'], 'matematica', 33, 'Anexo II - Conhecimentos gerais / Ensino Fundamental', [
  ['adicao', 'Adição', 'Somar quantidades e valores mantendo unidades iguais.', ['Alinhe as ordens numéricas.', 'Some da direita para a esquerda.', 'Confira por estimativa.']],
  ['subtracao', 'Subtração', 'Calcular diferença, retirada ou quanto falta entre duas quantidades.', ['Identifique o maior valor.', 'Faça empréstimos com atenção.', 'Confira somando o resultado ao valor retirado.']],
  ['multiplicacao', 'Multiplicação', 'Representar adições repetidas e calcular produtos.', ['Observe o valor posicional.', 'Use tabuada e decomposição.', 'Verifique o número de casas decimais.']],
  ['divisao', 'Divisão', 'Repartir em partes iguais ou descobrir quantas vezes uma quantidade cabe em outra.', ['Divisor não pode ser zero.', 'Interprete quociente e resto.', 'Confira multiplicando divisor e quociente.']],
  ['juros', 'Juros simples', 'Calcular acréscimo proporcional ao capital, à taxa e ao tempo: J = C × i × t.', ['Transforme porcentagem em decimal.', 'Mantenha taxa e tempo na mesma unidade.', 'Montante é capital mais juros.']],
  ['sistema-metrico', 'Sistema métrico decimal', 'Usar unidades decimais de medida e suas relações por potências de dez.', ['Cada passo entre múltiplos vale dez.', 'Identifique a grandeza antes de converter.', 'Não misture comprimento, área e volume.']],
  ['medidas', 'Comprimento, massa e capacidade', 'Distinguir metro, grama e litro e selecionar a unidade adequada.', ['Comprimento mede distância.', 'Massa usa grama e quilograma.', 'Capacidade usa litro e mililitro.']],
  ['conversoes', 'Transformação de unidades', 'Converter medidas multiplicando ou dividindo conforme a mudança de unidade.', ['Escreva a escala das unidades.', 'Conte os deslocamentos.', 'Confirme se o número deveria aumentar ou diminuir.']],
  ['razao', 'Razão', 'Comparar duas quantidades por meio de uma divisão.', ['Mantenha a ordem indicada.', 'Use unidades compatíveis.', 'Simplifique quando possível.']],
  ['proporcao', 'Proporção', 'Reconhecer igualdade entre razões e resolver valores desconhecidos.', ['Organize grandezas correspondentes.', 'Use produto cruzado.', 'Verifique se a relação é direta ou inversa.']],
])

const mediumPortuguese = makeTopics('mp', mediumCargos, 'portugues', 33, 'Anexo II - Conhecimentos gerais / Ensino Médio e Técnico', [
  ['fonema', 'Fonema', 'Aula completa sobre letras, sons, dígrafos, contagem de fonemas e aplicação em questões da INEPAM.', ['Fonema é som; letra é representação.', 'Dígrafos usam duas letras para um som.', 'Uma letra pode representar dois fonemas.']],
  ['silaba', 'Sílaba', 'Dividir palavras em grupos sonoros e reconhecer a sílaba tônica.', ['Toda sílaba tem núcleo vocálico.', 'Classifique pela quantidade de sílabas.', 'Localize a tonicidade.']],
  ['ortografia', 'Ortografia', 'Aplicar a grafia oficial, incluindo emprego de letras e hífen.', ['Observe famílias de palavras.', 'Considere o Acordo Ortográfico.', 'Diferencie grafia de pronúncia.']],
  ['substantivo', 'Substantivo', 'Reconhecer palavras que nomeiam seres, lugares, ações, estados e conceitos.', ['Pode variar em gênero e número.', 'Pode ser comum ou próprio.', 'Funciona como núcleo de grupos nominais.']],
  ['adjetivo', 'Adjetivo', 'Identificar palavras que caracterizam ou atribuem qualidade ao substantivo.', ['Concorda com o substantivo.', 'Pode ter valor explicativo ou restritivo.', 'Locução adjetiva equivale a adjetivo.']],
  ['preposicao', 'Preposição', 'Reconhecer termos que ligam palavras e estabelecem relações de sentido.', ['Pode indicar causa, lugar, meio ou finalidade.', 'Pode formar locução prepositiva.', 'Regência determina muitas preposições.']],
  ['conjuncao', 'Conjunção', 'Identificar conectivos que relacionam orações ou termos semelhantes.', ['Coordenativas ligam estruturas independentes.', 'Subordinativas introduzem dependência.', 'O sentido pode ser causa, condição, oposição ou conclusão.']],
  ['adverbio', 'Advérbio', 'Reconhecer palavras invariáveis que modificam verbo, adjetivo ou outro advérbio.', ['Indica circunstância.', 'Pode formar locução adverbial.', 'A posição altera a ênfase.']],
  ['verbo', 'Verbo', 'Analisar palavras que expressam ação, estado, mudança ou fenômeno.', ['Observe modo, tempo, número e pessoa.', 'Identifique a voz verbal.', 'Locução verbal tem auxiliar e principal.']],
  ['pronome', 'Pronome', 'Usar palavras que acompanham ou retomam nomes e participantes do discurso.', ['Evita repetição.', 'Pode indicar pessoa, posse ou posição.', 'A referência deve ser clara.']],
  ['numeral', 'Numeral', 'Reconhecer palavras que indicam quantidade, ordem, multiplicação ou fração.', ['Cardinal indica quantidade.', 'Ordinal indica ordem.', 'Multiplicativo e fracionário expressam relações.']],
  ['interjeicao', 'Interjeição', 'Identificar palavras ou expressões que traduzem emoções e reações.', ['Tem valor expressivo.', 'O contexto define o sentido.', 'Pode formar locução interjetiva.']],
  ['artigo', 'Artigo', 'Distinguir artigos definidos e indefinidos e seu efeito sobre o substantivo.', ['Define ou generaliza o referente.', 'Concorda com o substantivo.', 'Pode substantivar outras classes.']],
  ['acentuacao', 'Acentuação', 'Aplicar regras de tonicidade, hiatos, ditongos e acentos diferenciais vigentes.', ['Classifique a sílaba tônica.', 'Observe terminações.', 'Não use regras revogadas pelo Acordo Ortográfico.']],
  ['concordancia-nominal', 'Concordância nominal', 'Fazer determinantes e modificadores concordarem com o substantivo.', ['Verifique gênero e número.', 'A posição pode mudar a regra.', 'Atenção a expressões invariáveis.']],
  ['concordancia-verbal', 'Concordância verbal', 'Relacionar corretamente o verbo ao núcleo do sujeito.', ['Localize o sujeito.', 'Ignore termos intercalados.', 'Estude sujeitos compostos e expressões partitivas.']],
  ['pontuacao', 'Sinais de pontuação', 'Usar pontuação para organizar a estrutura sintática e o sentido.', ['Vírgula não separa sujeito de verbo.', 'Dois-pontos introduzem explicação ou enumeração.', 'Pontuação pode alterar o sentido.']],
  ['crase', 'Uso da crase', 'Reconhecer a fusão da preposição a com artigo ou pronome iniciado por a.', ['Teste a regência.', 'Substitua por termo masculino.', 'Não ocorre antes de verbo.']],
  ['colocacao', 'Colocação pronominal', 'Posicionar pronomes átonos em próclise, mesóclise ou ênclise.', ['Palavra atrativa favorece próclise.', 'Não se inicia oração formal com pronome átono.', 'Mesóclise ocorre com futuros sem atrativo.']],
  ['sintaxe', 'Análise sintática', 'Reconhecer funções como sujeito, predicado, objetos, complementos e adjuntos.', ['Comece pelo verbo.', 'Pergunte quem pratica ou sofre.', 'Diferencie complemento de circunstância.']],
  ['periodo-simples', 'Período simples', 'Analisar enunciados com uma única oração.', ['Uma locução verbal forma uma oração.', 'Classifique sujeito e predicado.', 'Observe termos integrantes e acessórios.']],
  ['periodo-composto', 'Período composto', 'Analisar coordenação e subordinação entre duas ou mais orações.', ['Conte verbos e locuções.', 'Identifique conectivos.', 'Determine a relação de sentido.']],
  ['figuras', 'Figuras de linguagem', 'Reconhecer efeitos expressivos como metáfora, comparação, ironia e hipérbole.', ['Procure sentido não literal.', 'Diferencie comparação explícita de metáfora.', 'Considere o efeito no texto.']],
  ['interpretacao', 'Interpretação de textos', 'Inferir tema, finalidade, opinião e relações entre partes do texto.', ['Volte ao trecho indicado.', 'Diferencie fato e inferência.', 'Observe conectivos e referências.']],
])

const mediumMath = makeTopics('mm', mediumCargos, 'matematica', 33, 'Anexo II - Conhecimentos gerais / Ensino Médio e Técnico', [
  ['radicais', 'Radicais e propriedades', 'Compreender raízes como operações inversas de potências.', ['Respeite o índice.', 'Aplique propriedades apenas quando válidas.', 'Simplifique fatores perfeitos.']],
  ['operacoes-radicais', 'Operações com radicais', 'Somar radicais semelhantes e multiplicar ou dividir respeitando índices.', ['Só some termos semelhantes.', 'Simplifique antes de operar.', 'Verifique domínio.']],
  ['racionalizacao', 'Racionalização de denominadores', 'Eliminar radical do denominador usando fator apropriado ou conjugado.', ['Multiplique numerador e denominador.', 'Use conjugado em binômios.', 'Simplifique o resultado.']],
  ['razao', 'Razão', 'Comparar grandezas por divisão e interpretar escalas e taxas.', ['Preserve a ordem.', 'Converta unidades.', 'Simplifique a fração.']],
  ['proporcao', 'Proporção', 'Resolver igualdade entre razões e regras de três.', ['Identifique grandezas.', 'Determine relação direta ou inversa.', 'Faça produto cruzado.']],
  ['porcentagem', 'Porcentagem', 'Calcular partes por cem, acréscimos, descontos e variações.', ['Converta para decimal.', 'Defina a base de cálculo.', 'Variações sucessivas não se somam diretamente.']],
  ['juros', 'Juros simples', 'Aplicar J = C × i × t e M = C + J.', ['Compatibilize taxa e tempo.', 'Separe juros de montante.', 'Use a taxa em forma decimal.']],
  ['reais', 'Conjunto dos números reais', 'Relacionar naturais, inteiros, racionais e irracionais.', ['Todo inteiro é racional.', 'Irracionais têm decimal infinito não periódico.', 'Reais reúnem racionais e irracionais.']],
  ['fatoracao', 'Fatoração algébrica', 'Transformar soma em produto por fator comum, agrupamento e produtos notáveis.', ['Procure fator comum primeiro.', 'Reconheça diferença de quadrados.', 'Confira distribuindo.']],
  ['expressoes', 'Expressões algébricas', 'Efetuar operações respeitando prioridade e termos semelhantes.', ['Resolva parênteses primeiro.', 'Some somente termos semelhantes.', 'Cuide dos sinais.']],
  ['fracoes-algebricas', 'Expressões algébricas fracionárias', 'Simplificar e operar frações com variáveis observando restrições.', ['Fatore antes de cancelar.', 'Nunca cancele termos somados.', 'Registre denominadores diferentes de zero.']],
  ['mdc', 'MDC', 'Encontrar o maior divisor comum por fatoração ou algoritmo de Euclides.', ['Use fatores comuns com menor expoente.', 'Aplicável a repartições máximas.', 'Teste a divisibilidade.']],
  ['mmc', 'MMC', 'Encontrar o menor múltiplo comum para sincronizar ciclos ou somar frações.', ['Use todos os fatores com maior expoente.', 'Aplicável a coincidência de eventos.', 'Diferencie de MDC.']],
  ['medidas', 'Sistema de medidas', 'Trabalhar com comprimento, superfície, massa, capacidade, tempo e volume.', ['Identifique a grandeza.', 'Área varia ao quadrado.', 'Volume varia ao cubo.']],
  ['conversoes', 'Transformação de unidades', 'Converter unidades com fatores corretos para cada grandeza.', ['Comprimento: fator 10.', 'Área: fator 100 por passo.', 'Volume: fator 1000 por passo.']],
  ['estatistica', 'Estatística básica', 'Organizar dados e calcular média, mediana e moda.', ['Ordene para achar mediana.', 'Moda é o valor mais frequente.', 'Média é soma dividida pela quantidade.']],
  ['tabelas', 'Tabelas', 'Construir e interpretar títulos, linhas, colunas, totais e frequências.', ['Leia unidade e fonte.', 'Compare categorias equivalentes.', 'Confira totais.']],
  ['graficos', 'Gráficos', 'Ler e construir gráficos de barras, linhas e setores.', ['Observe escala dos eixos.', 'Relacione legenda e dados.', 'Não estime sem respeitar a escala.']],
  ['geometria', 'Geometria e conceitos primitivos', 'Reconhecer ponto, reta, plano, ângulos e figuras fundamentais.', ['Ponto não tem dimensão.', 'Reta é infinita nos dois sentidos.', 'Segmento tem extremidades.']],
  ['plano', 'Representação geométrica no plano', 'Localizar figuras e pontos e interpretar medidas planas.', ['Use coordenadas ordenadas.', 'Diferencie perímetro de área.', 'Observe escala e orientação.']],
  ['probabilidade', 'Probabilidade', 'Calcular chance como casos favoráveis sobre casos possíveis equiprováveis.', ['Defina o espaço amostral.', 'Probabilidade varia de 0 a 1.', 'Eventos complementares somam 1.']],
  ['combinatoria', 'Análise combinatória', 'Contar possibilidades por princípio multiplicativo, permutações e combinações simples.', ['Decida se a ordem importa.', 'Multiplique etapas independentes.', 'Evite listar de modo incompleto.']],
])

const ajudanteSpecific = makeTopics('ag', ['ajudante'], 'especificos', 35, 'Anexo II - Conhecimentos específicos / Ajudante Geral', [
  ['higiene', 'Higiene pessoal e no trabalho', 'Prevenir contaminações e doenças por limpeza corporal, mãos, uniforme, ambientes e materiais.', ['Lavar as mãos nos momentos críticos.', 'Manter uniforme e ferramentas limpos.', 'Separar resíduos e produtos.']],
  ['ferramentas', 'Manuseio de ferramentas e materiais', 'Selecionar, inspecionar, transportar e guardar ferramentas de modo compatível com a tarefa.', ['Inspecione antes do uso.', 'Use a ferramenta para sua finalidade.', 'Guarde limpa e em local seguro.']],
  ['epi', 'Equipamentos de Proteção Individual', 'Usar EPI adequado ao risco, com ajuste, conservação e substituição quando danificado.', ['EPI não elimina o risco.', 'Siga orientação do responsável.', 'Não improvise proteção.']],
  ['primeiros-socorros', 'Noções de primeiros socorros', 'Proteger o local, acionar socorro e prestar ajuda dentro dos próprios limites.', ['Evite novo acidente.', 'Chame 192 ou 193 conforme a situação.', 'Não mova vítima sem necessidade.']],
  ['atendimento', 'Qualidade no atendimento ao público', 'Atender com respeito, clareza, atenção e encaminhamento correto.', ['Ouça sem interromper.', 'Use linguagem simples.', 'Não prometa o que não pode cumprir.']],
  ['relacoes', 'Relações humanas no trabalho', 'Cooperar, comunicar-se e respeitar hierarquia e colegas.', ['Confirme instruções.', 'Relate riscos e falhas.', 'Trate conflitos sem agressividade.']],
  ['seguranca', 'Segurança no trabalho', 'Reconhecer riscos físicos, químicos, biológicos, ergonômicos e de acidentes.', ['Sinalize a área.', 'Mantenha postura segura.', 'Interrompa condição de risco grave.']],
  ['limpeza-urbana', 'Importância da limpeza urbana', 'Relacionar limpeza pública a saúde, drenagem, mobilidade, bem-estar e conservação da cidade.', ['Resíduo em via pode obstruir drenagem.', 'Regularidade reduz vetores.', 'Acondicionamento facilita coleta.']],
  ['reciclagem', 'Reciclagem de materiais recuperáveis', 'Separar papel, plástico, metal, vidro e outros materiais conforme condição e destino.', ['Evite misturar reciclável com orgânico.', 'Material contaminado pode perder valor.', 'Vidro exige acondicionamento seguro.']],
  ['reciclagem-impactos', 'Aspectos econômicos e sociais da reciclagem', 'Compreender geração de renda, redução de custos e inclusão de trabalhadores da reciclagem.', ['Reciclagem reduz uso de matéria-prima.', 'Coleta seletiva melhora aproveitamento.', 'Respeite cooperativas e catadores.']],
  ['logradouros', 'Limpeza de logradouros', 'Remover resíduos de ruas, praças e demais áreas públicas com método e segurança.', ['Planeje fluxo e obstáculos.', 'Evite espalhar poeira.', 'Recolha o material varrido.']],
  ['varricao', 'Métodos e tipos de varrição', 'Aplicar varrição manual ou apoiada por equipamentos conforme pavimento, movimento e sujeira.', ['Trabalhe no sentido planejado.', 'Proteja pedestres e veículos.', 'Adapte técnica ao local.']],
  ['utensilios', 'Utensílios e equipamentos de varrição', 'Usar vassouras, pás, enxadas, recipientes e equipamentos auxiliares adequados.', ['Escolha pelo tipo de resíduo.', 'Evite sobrecarga.', 'Mantenha utensílios conservados.']],
  ['carrinhos', 'Carrinhos para remoção do lixo', 'Distinguir carrocinha de madeira, carrinho de ferro com pneus e carrinho de mão convencional.', ['Distribua a carga.', 'Verifique rodas e estrutura.', 'Não exceda capacidade.']],
  ['cestas', 'Cestas coletoras', 'Entender instalação, localização, resistência, capacidade e facilidade de esvaziamento.', ['Instale em pontos de uso.', 'Não bloqueie circulação.', 'Planeje frequência de coleta.']],
  ['plano-varricao', 'Plano de varrição', 'Organizar setores, frequência, horários, equipes, equipamentos e rotas.', ['Mapeie trechos e prioridades.', 'Considere fluxo e geração de resíduos.', 'Registre execução.']],
  ['nivel-servico', 'Nível de serviço e frequência', 'Definir padrão de limpeza e repetição necessária conforme uso do logradouro.', ['Área movimentada exige maior frequência.', 'Nível de serviço deve ser verificável.', 'Ajuste após fiscalização.']],
  ['produtividade', 'Velocidade e extensão de sarjeta', 'Dimensionar ritmo seguro e trecho executado sem sacrificar qualidade.', ['Velocidade depende do tipo de resíduo.', 'Sarjeta é medida ao longo do meio-fio.', 'Qualidade prevalece sobre pressa.']],
  ['rota', 'Remoção, itinerário e implantação', 'Recolher o resíduo varrido e organizar itinerário compatível com coleta e segurança.', ['Não deixe montes expostos.', 'Evite retrabalho.', 'Implante por etapas monitoradas.']],
  ['fiscalizacao', 'Fiscalização dos serviços', 'Conferir presença, qualidade, segurança, frequência e destino do resíduo.', ['Use critérios objetivos.', 'Registre não conformidades.', 'Oriente correção.']],
  ['drenagem', 'Limpeza de bocas de lobo e caixas de ralo', 'Retirar resíduos sem empurrá-los para a drenagem e manter passagem da água.', ['Sinalize e use EPI.', 'Não entre em espaço confinado.', 'Destine corretamente o material.']],
  ['atribuicoes', 'Atividades e atribuições do cargo', 'Relacionar obras, manutenção, água e esgoto, vias, áreas verdes, coleta, pintura e sinalização.', ['Siga ordens de serviço.', 'Preserve patrimônio público.', 'Comunique anormalidades.']],
])

const agentSpecific = makeTopics('aa', ['agente'], 'especificos', 35, 'Anexo II - Conhecimentos específicos / Agente Administrativo', [
  ['redacao', 'Redação oficial: princípios', 'Produzir comunicações com clareza, concisão, impessoalidade, formalidade e padronização.', ['Prefira ordem direta.', 'Elimine ambiguidade.', 'Adote linguagem institucional.']],
  ['atos', 'Atos oficiais e instrumentos normativos', 'Distinguir função e estrutura de atos e organizar artigos, parágrafos, incisos e alíneas.', ['Artigo trata unidade normativa.', 'Parágrafo complementa o artigo.', 'Incisos e alíneas enumeram desdobramentos.']],
  ['elaboracao', 'Normas gerais de elaboração', 'Planejar assunto, destinatário, desenvolvimento, encaminhamento e revisão do documento.', ['Defina objetivo.', 'Ordene informações.', 'Revise dados, linguagem e anexos.']],
  ['siglas', 'Siglas, acrônimos e vícios de linguagem', 'Empregar abreviações com explicação inicial e evitar redundância, ambiguidade e informalidade.', ['Explique a sigla na primeira ocorrência.', 'Evite chavões.', 'Mantenha coerência terminológica.']],
  ['hifen-destaques', 'Hífen, destaques e caixa', 'Aplicar ortografia e usar itálico, aspas, negrito, maiúsculas e minúsculas com moderação.', ['Destaque não substitui organização.', 'Aspas marcam citação ou uso especial.', 'Maiúsculas não devem dominar o texto.']],
  ['numerais', 'Enumerações e grafia de numerais', 'Organizar listas e representar números de forma consistente e legível.', ['Use paralelismo.', 'Mantenha padrão.', 'Evite duplicar informação sem necessidade.']],
  ['fecho', 'Fecho e identificação do signatário', 'Escolher fecho adequado e identificar nome e cargo de quem assina.', ['Respeitosamente para autoridade superior.', 'Atenciosamente nos demais casos.', 'Cargo acompanha o nome.']],
  ['tratamento', 'Formas de tratamento, vocativo e destinatário', 'Adequar tratamento e endereçamento à autoridade e ao contexto.', ['Vocativo abre a comunicação.', 'Tratamento deve permanecer coerente.', 'Confirme cargo e órgão.']],
  ['ata-apostila', 'Ata e apostila', 'Distinguir o registro fiel de reunião da anotação complementar em documento oficial.', ['Ata registra fatos e deliberações.', 'Apostila corrige ou atualiza dado sem novo ato.', 'Evite juízo pessoal na ata.']],
  ['carta-circular', 'Carta, circular e comunicação interna', 'Escolher o documento conforme destinatário individual, múltiplo ou fluxo interno.', ['Circular alcança vários destinatários.', 'Comunicação interna circula no órgão.', 'Carta pode atender relação institucional específica.']],
  ['contrato-convenio', 'Contrato e convênio', 'Diferenciar obrigações recíprocas com interesses contrapostos de cooperação por objetivo comum.', ['Contrato define prestações.', 'Convênio articula cooperação.', 'Verifique objeto, vigência e responsáveis.']],
  ['email', 'Correio eletrônico oficial', 'Redigir e-mails institucionais com assunto claro, corpo objetivo, identificação e anexos conferidos.', ['Use conta institucional.', 'Evite dados desnecessários.', 'Confirme destinatários antes de enviar.']],
  ['despacho-parecer', 'Despacho, parecer e notas técnica/informativa', 'Distinguir decisão ou encaminhamento, análise opinativa e informação técnica estruturada.', ['Despacho impulsiona processo.', 'Parecer fundamenta entendimento.', 'Nota técnica explica matéria especializada.']],
  ['oficio', 'Padrão ofício, aviso e memorando', 'Aplicar o padrão de comunicação oficial e reconhecer finalidades tradicionais desses expedientes.', ['Identifique assunto.', 'Contextualize pedido ou informação.', 'Use fecho e assinatura corretos.']],
  ['portaria-resolucao', 'Portaria, resolução e instrução normativa', 'Reconhecer atos que disciplinam pessoal, decisões colegiadas e procedimentos de execução.', ['Competência define o ato.', 'Objeto deve ser claro.', 'Vigência e publicação importam.']],
  ['arquivo', 'Noções de arquivo', 'Entender ciclo documental, protocolo, uso, guarda e destinação.', ['Documento corrente é de uso frequente.', 'Intermediário aguarda destinação.', 'Permanente tem valor histórico ou probatório.']],
  ['classificacao', 'Classificação e arquivamento', 'Organizar documentos por método alfabético, numérico, geográfico, ideográfico ou cronológico.', ['Defina método antes de guardar.', 'Use referência cruzada quando necessário.', 'Mantenha rastreabilidade.']],
  ['principios', 'Princípios da Administração Pública', 'Aplicar legalidade, impessoalidade, moralidade, publicidade e eficiência.', ['Agente público age conforme a lei.', 'Finalidade é pública.', 'Transparência admite exceções legais.']],
  ['servidores', 'Servidores e hierarquia', 'Compreender dever funcional, competência, subordinação e responsabilidade.', ['Ordem deve ser legal.', 'Competência não se presume.', 'Hierarquia não afasta responsabilidade.']],
  ['cf-37-41', 'Constituição Federal: artigos 37 a 41', 'Estudar regras constitucionais de administração, concurso, acumulação, responsabilidade e estabilidade.', ['Art. 37 reúne princípios e regras gerais.', 'Art. 39 trata regime e política de pessoal.', 'Art. 41 disciplina estabilidade.']],
  ['windows', 'Windows: utilização e configuração', 'Gerenciar área de trabalho, janelas, arquivos, pastas, atalhos e configurações.', ['Diferencie copiar de mover.', 'Use lixeira e restauração.', 'Organize nomes e extensões.']],
  ['aplicativos', 'Aplicativos do Windows', 'Usar Bloco de Notas, Calculadora, Paint e reconhecer o legado do WordPad.', ['Bloco de Notas edita texto simples.', 'Calculadora possui modos.', 'Paint trabalha com imagens raster.']],
  ['perifericos', 'Periféricos, impressoras e monitores', 'Configurar e resolver problemas básicos de dispositivos de entrada, saída e impressão.', ['Confira conexão e fila.', 'Defina impressora padrão.', 'Ajuste resolução e escala.']],
  ['word', 'Microsoft Word', 'Editar, formatar, revisar e imprimir documentos com estilos, tabelas e configuração de página.', ['Use estilos para consistência.', 'Revise ortografia.', 'Verifique margens e quebra de página.']],
  ['excel', 'Microsoft Excel', 'Trabalhar com células, fórmulas, referências, funções, filtros e gráficos.', ['Fórmula começa por =.', 'Diferencie referência relativa e absoluta.', 'Confira intervalo das funções.']],
  ['powerpoint', 'Microsoft PowerPoint', 'Criar apresentações com layouts, temas, objetos, transições e exibição.', ['Priorize legibilidade.', 'Use layouts consistentes.', 'Transição não substitui conteúdo.']],
  ['outlook', 'Microsoft Outlook', 'Gerenciar mensagens, contatos, calendário, anexos e organização de caixa postal.', ['Confira destinatário.', 'Use assunto informativo.', 'Organize por pastas e categorias.']],
  ['adobe', 'Adobe Reader', 'Abrir, pesquisar, navegar, imprimir e comentar arquivos PDF.', ['PDF preserva layout.', 'Use busca textual.', 'Confira páginas antes de imprimir.']],
  ['internet', 'Internet e navegadores', 'Navegar, pesquisar, reconhecer endereços, abas, downloads e riscos básicos.', ['Confira domínio e HTTPS.', 'Não execute anexos suspeitos.', 'Use pesquisa com termos específicos.']],
  ['atribuicoes', 'Rotinas do Agente Administrativo', 'Aplicar conteúdo a escritório, documentos, correspondência, dados, arquivo, digitação e atendimento.', ['Registre movimentações.', 'Proteja informações.', 'Encaminhe cada demanda ao setor competente.']],
], [editalSource, { label: 'Constituição Federal compilada', url: CF_URL, kind: 'legislacao' }])

const monitorSpecific = makeTopics('me', ['monitor'], 'especificos', 39, 'Anexo II - Conhecimentos específicos / Monitor de Educação', [
  ['cf-5-7', 'Constituição Federal: artigos 5º a 7º', 'Estudar direitos e garantias fundamentais, direitos sociais e direitos dos trabalhadores exigidos.', ['Igualdade e liberdades têm proteção constitucional.', 'Direitos sociais orientam políticas públicas.', 'Leia incisos e parágrafos do texto vigente.']],
  ['cf-205-214', 'Constituição Federal: artigos 205 a 214', 'Compreender direito à educação, princípios do ensino, dever do Estado e Plano Nacional de Educação.', ['Educação é direito de todos.', 'Acesso e permanência devem ser garantidos.', 'Gestão e financiamento integram o regime constitucional.']],
  ['cf-226-230', 'Constituição Federal: artigos 226 a 230', 'Estudar proteção à família, criança, adolescente, jovem e pessoa idosa.', ['Família recebe proteção do Estado.', 'Prioridade absoluta alcança criança e adolescente.', 'Pais e filhos têm deveres de assistência.']],
  ['lom-preliminares', 'Lei Orgânica: Município e competências', 'Revisar disposições preliminares, símbolos, bens e competências do Município de Rincão.', ['Autonomia municipal é política, administrativa, financeira e legislativa.', 'Interesse local orienta competência.', 'Educação e serviços públicos aparecem nas competências.']],
  ['lom-governo', 'Lei Orgânica: Governo Municipal', 'Estudar Poderes Legislativo e Executivo, competências, processo legislativo e fiscalização.', ['Poderes são independentes e harmônicos.', 'Câmara legisla e fiscaliza.', 'Prefeito dirige a administração.']],
  ['lom-administracao', 'Lei Orgânica: Administração Municipal', 'Compreender organização administrativa, atos, bens, obras, serviços e servidores.', ['Atos devem observar competência e publicidade.', 'Bens públicos têm regras próprias.', 'Serviço público atende interesse coletivo.']],
  ['lom-cidadaos', 'Lei Orgânica: participação e defesa dos cidadãos', 'Revisar segurança municipal, proteção do consumidor e participação popular.', ['Participação fortalece controle social.', 'Guarda protege bens, serviços e instalações.', 'Usuário pode avaliar serviços.']],
  ['lom-desenvolvimento', 'Lei Orgânica: desenvolvimento urbano e meio ambiente', 'Estudar plano diretor, função social, ordenamento territorial e proteção ambiental.', ['Planejamento urbano orienta ocupação.', 'Meio ambiente exige prevenção e fiscalização.', 'Comunidade participa do controle.']],
  ['lom-ordem-social', 'Lei Orgânica: educação e ordem social', 'Revisar educação municipal, cultura, esporte, lazer, assistência social e saúde.', ['Município prioriza ensino fundamental.', 'Permanência do educando é dever público.', 'Ações sociais integram políticas municipais.']],
  ['lom-financas', 'Lei Orgânica: tributos, orçamento e finanças', 'Compreender competência tributária, limitações, orçamento e controle financeiro.', ['Tributo depende de lei.', 'Orçamento organiza receitas e despesas.', 'Prestação de contas viabiliza controle.']],
  ['eca-1-6', 'ECA: artigos 1º a 6º', 'Estudar proteção integral, definição etária, prioridade absoluta e condição de pessoa em desenvolvimento.', ['Criança tem até 12 anos incompletos.', 'Adolescente tem de 12 a 18 anos.', 'Interpretação considera fins sociais e bem comum.']],
  ['eca-13-18', 'ECA: artigos 13 a 18', 'Compreender comunicação de suspeita de violência, direito à liberdade, respeito e dignidade.', ['Suspeita ou confirmação exige comunicação aos órgãos competentes.', 'Respeito protege integridade física, psíquica e moral.', 'Todos devem velar pela dignidade.']],
  ['eca-53-59', 'ECA: artigos 53 a 59', 'Estudar direito à educação, deveres do Estado, responsáveis e dirigentes escolares.', ['Aluno tem direito de ser respeitado.', 'Pais participam do processo pedagógico.', 'Evasão e maus-tratos exigem comunicação.']],
  ['eca-60-69', 'ECA: artigos 60 a 69', 'Revisar profissionalização e proteção no trabalho do adolescente.', ['Trabalho infantil é proibido salvo aprendizagem na idade legal.', 'Formação deve respeitar desenvolvimento.', 'Atividade não pode impedir estudo.']],
  ['eca-70-73', 'ECA: artigos 70 a 73', 'Compreender prevenção de ameaça ou violação de direitos.', ['Prevenir é dever de todos.', 'Poder público regula diversões e produtos.', 'Responsabilidade alcança ação e omissão.']],
  ['ldb-principios', 'LDB: princípios e organização', 'Compreender finalidades da educação, princípios do ensino e organização dos sistemas.', ['Educação se vincula ao trabalho e à prática social.', 'Igualdade de acesso e permanência é princípio.', 'Entes federativos colaboram.']],
  ['ldb-basica', 'LDB: Educação Básica', 'Estudar etapas, incumbências das escolas e profissionais, calendário, avaliação e atendimento.', ['Educação básica reúne infantil, fundamental e médio.', 'Proposta pedagógica orienta trabalho.', 'Frequência e avaliação devem ser acompanhadas.']],
  ['direitos-humanos', 'Educação em Direitos Humanos', 'Aplicar dignidade, igualdade, diversidade, laicidade, democracia e sustentabilidade ao ambiente educacional.', ['Direitos humanos atravessam currículo e gestão.', 'Combata discriminação.', 'Promova participação e cultura de paz.']],
  ['seguranca-aluno', 'Segurança do aluno', 'Prevenir acidentes por supervisão, organização dos espaços e resposta a riscos.', ['Conte e acompanhe alunos.', 'Inspecione ambiente e equipamentos.', 'Siga protocolos da unidade.']],
  ['primeiros-socorros', 'Primeiros socorros na escola', 'Proteger, avaliar, acionar ajuda e evitar condutas que agravem a situação.', ['Mantenha calma e segurança.', 'Acione serviço de emergência.', 'Não ofereça medicamento sem protocolo.']],
  ['atendimento', 'Atendimento ao público escolar', 'Receber famílias e comunidade com clareza, respeito, sigilo e encaminhamento.', ['Ouça a demanda.', 'Preserve dados do aluno.', 'Registre quando necessário.']],
  ['higiene', 'Cuidados e higiene', 'Apoiar higiene, alimentação e conforto respeitando autonomia e protocolos.', ['Higienize mãos e superfícies.', 'Observe alergias e orientações.', 'Promova hábitos sem constranger.']],
  ['relacoes', 'Relações humanas, ética e cidadania', 'Atuar com respeito, cooperação, limites profissionais e compromisso com direitos.', ['Evite exposição da criança.', 'Comunique-se com a equipe.', 'Não discrimine.']],
  ['inspecao', 'Inspeção e comportamento dos alunos', 'Observar convivência e intervir de modo educativo e proporcional.', ['Antecipe conflitos.', 'Evite punição humilhante.', 'Registre situações relevantes.']],
  ['ambiente', 'Regras e procedimentos do ambiente escolar', 'Cumprir regimento, rotinas de entrada, saída, recreio, alimentação e emergência.', ['Conheça o regimento.', 'Mantenha consistência.', 'Explique regras em linguagem adequada.']],
  ['comunicacao', 'Comunicação e oratória', 'Transmitir instruções com clareza, escuta ativa e adequação ao público.', ['Use frases simples.', 'Confirme compreensão.', 'Mantenha tom respeitoso.']],
  ['trabalho', 'Segurança no trabalho', 'Proteger a si, colegas e alunos com postura, organização e comunicação de riscos.', ['Não improvise equipamentos.', 'Sinalize condição perigosa.', 'Siga treinamento institucional.']],
  ['atribuicoes', 'Atribuições do Monitor de Educação', 'Relacionar cuidados, alimentação, higiene, recreação, transporte e segurança às rotinas do cargo.', ['Supervisão orienta a atuação.', 'Cuidado não substitui função docente.', 'Priorize integridade e bem-estar.']],
], [
  editalSource,
  { label: 'Constituição Federal compilada', url: CF_URL, kind: 'legislacao' },
  { label: 'Estatuto da Criança e do Adolescente', url: ECA_URL, kind: 'legislacao' },
  { label: 'Lei de Diretrizes e Bases da Educação', url: LDB_URL, kind: 'legislacao' },
  { label: 'Resolução CNE/CP nº 1/2012', url: DH_URL, kind: 'legislacao' },
  { label: 'Lei Orgânica do Município de Rincão', url: LOM_URL, kind: 'legislacao' },
])

export const topics: Topic[] = [
  ...fundamentalPortuguese,
  ...fundamentalMath,
  ...mediumPortuguese,
  ...mediumMath,
  ...ajudanteSpecific,
  ...agentSpecific,
  ...monitorSpecific,
].map((topic) => topic.id === 'mp-fonema' ? { ...topic, editorialId: 'medio-portugues-fonema-001' } : topic)

export const disciplineLabels: Record<DisciplineId, string> = {
  portugues: 'Língua Portuguesa',
  matematica: 'Matemática',
  especificos: 'Conhecimentos Específicos',
}

const difficultyCycle: Question['difficulty'][] = ['fácil', 'média', 'média', 'difícil']

function questionFromTopic(topic: Topic, cargoId: CargoId, index: number, pool: Topic[]): Question {
  const distractors = pool
    .filter((candidate) => candidate.id !== topic.id)
    .slice((index * 3) % Math.max(1, pool.length - 4))
    .slice(0, 4)
    .map((candidate) => candidate.summary)
  while (distractors.length < 4) distractors.push('Aplicar uma regra sem verificar a finalidade e as condições apresentadas.')
  const correctIndex = index % 5
  const alternatives = [...distractors]
  alternatives.splice(correctIndex, 0, topic.summary)
  return {
    id: `q-${cargoId}-${topic.id}-${index}`,
    cargoIds: [cargoId],
    discipline: topic.discipline,
    topicId: topic.id,
    statement: `Assinale a alternativa que descreve corretamente o conteúdo “${topic.title}” conforme o material alinhado ao edital.`,
    alternatives,
    correctIndex,
    explanation: `${topic.summary} Pontos centrais: ${topic.keyPoints.join(' ')}`,
    difficulty: difficultyCycle[index % difficultyCycle.length],
    type: 'inedita',
    source: 'Questão inédita - estilo INEPAM, elaborada para este edital. Não é questão real da banca.',
    year: 2026,
  }
}

function takeCycled(items: Topic[], count: number): Topic[] {
  return Array.from({ length: count }, (_, index) => items[index % items.length])
}

function questionsForCargo(cargoId: CargoId): Question[] {
  const cargoTopics = topics.filter((topic) => topic.cargoIds.includes(cargoId))
  const portuguese = cargoTopics.filter((topic) => topic.discipline === 'portugues')
  const math = cargoTopics.filter((topic) => topic.discipline === 'matematica')
  const specific = cargoTopics.filter((topic) => topic.discipline === 'especificos')
  const selected = [
    ...takeCycled(portuguese, 10),
    ...takeCycled(math, 5),
    ...takeCycled(specific, 15),
  ]
  return selected.map((topic, index) => questionFromTopic(topic, cargoId, index, cargoTopics.filter((candidate) => candidate.discipline === topic.discipline)))
}

export const questions: Question[] = [
  ...questionsForCargo('monitor').filter((question) => question.topicId !== 'mp-fonema'),
  ...questionsForCargo('agente').filter((question) => question.topicId !== 'mp-fonema'),
  ...questionsForCargo('ajudante'),
  ...editorialQuestions,
]

export function simulationQuestionsForCargo(cargoId: CargoId): Question[] {
  const cargoQuestions = questions.filter((question) => question.cargoIds.includes(cargoId) || question.cargoId === cargoId)
  return [
    ...cargoQuestions.filter((question) => question.discipline === 'portugues').slice(0, 10),
    ...cargoQuestions.filter((question) => question.discipline === 'matematica').slice(0, 5),
    ...cargoQuestions.filter((question) => question.discipline === 'especificos').slice(0, 15),
  ]
}

export const verifiedQuestionReferences = [
  {
    title: 'Itajubá/MG - Agente Administrativo - Concurso 001/2024',
    note: 'Página oficial da INEPAM com gabaritos e julgamento de recursos. O caderno integral não foi publicado na página oficial; por integridade, nenhuma questão foi reproduzida como real.',
    url: 'https://app.inepam.org.br/concurso/concursoPaginaInterna.do?idConcurso=2&idInstituicao=32',
  },
  {
    title: 'Luminárias/MG - Monitor de Educação - Concurso 001/2023',
    note: 'Página oficial da INEPAM com documentos do certame. Sem caderno integral oficialmente disponibilizado na página consultada.',
    url: 'https://app.inepam.org.br/concurso/concursoPaginaInterna.do?idConcurso=1&idInstituicao=31',
  },
  {
    title: 'Adamantina/SP - Ajudante Geral - Concurso 001/2023',
    note: 'Julgamento de recursos confirma questões e gabaritos parciais, mas sem alternativas integrais verificáveis; referências foram catalogadas sem republicação.',
    url: 'https://app.inepam.org.br/concurso/concursoPaginaInterna.do?idConcurso=3&idInstituicao=9',
  },
]

export const practicalExam = {
  expressRequirements: [
    'A prova prática é eliminatória e classificatória e vale de 0 a 100 pontos.',
    'Convocação: 10 primeiros da lista geral e 1 primeiro candidato PcD, desde que obtenham ao menos 50 pontos na objetiva.',
    'Tarefa 1 - conhecimento profissional: 0 a 50 pontos, com execução e simulação de tarefas do cargo.',
    'Critérios profissionais: destreza, agilidade, raciocínio lógico, percepção, uso de EPI e identificação correta de materiais e equipamentos.',
    'Tarefa 2 - avaliação física: 0 a 50 pontos.',
    'Flexão abdominal: 5 repetições, máximo de 40 segundos.',
    'Sentar e alcançar: alcançar os pés com as mãos por 30 segundos, com pernas estendidas e músculos posteriores dos membros inferiores flexíveis.',
    'Até 2 tentativas para as duas tarefas físicas, conforme o item 4.41.3 do edital.',
    'Aprovação na prova prática exige nota igual ou superior a 50 pontos.',
  ],
  complementaryGuidance: [
    'Treine a técnica em ambiente seguro e interrompa em caso de dor, tontura ou mal-estar.',
    'Faça aquecimento leve antes do treino e aumente volume de modo gradual.',
    'Pratique identificação e inspeção de ferramentas e EPI usados nas rotinas do cargo.',
    'Simule a explicação verbal do procedimento antes de executar: risco, EPI, ferramenta e sequência.',
    'Durma bem, hidrate-se e confirme no edital de convocação os materiais e vestimentas exigidos.',
  ],
  source: 'Edital, itens 4.33, 4.41, 5.4 e 5.5 - páginas 18, 19, 20 e 23.',
}

export const schedule = [
  ['Inscrições', '10/08/2026 a 03/09/2026'],
  ['Pagamento do boleto', 'até 03/09/2026'],
  ['Convocação da prova objetiva', '14/09/2026'],
  ['Prova objetiva', '27/09/2026, a partir das 08h'],
  ['Gabarito', '28/09/2026'],
  ['Convocação para prova prática', '26/10/2026'],
  ['Prova prática', '01/11/2026'],
  ['Homologação prevista', '16/11/2026'],
]
