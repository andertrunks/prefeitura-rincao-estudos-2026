---
id: agente-especificos-informatica-perifericos-001
stableItemId: AGE-ESP-011-03
parentStableItemId: AGE-ESP-011
cargoIds:
  - agente-administrativo
nivel: ensino-medio
disciplinaId: agente-especificos
siteTopicIds:
  - aa-perifericos
temaId: perifericos-impressoras-monitores
titulo: "Periféricos — impressoras, monitores e dispositivos de entrada e saída"
editalRefs:
  - "Anexo II — Agente Administrativo — Informática: utilização e configuração do Sistema Operacional Windows (versão XP ou mais recente), seus aplicativos embarcados e configurações de periféricos (impressoras, monitores, etc.)."
status: questoes_adicionadas
versao: "0.3.0"
revisadoEm: "2026-09-01"
sourceRefs:
  - src-edital-rincao-2026
  - src-rincao-rerratificacao-001-2026
  - src-inepam-rincao-pagina
  - src-microsoft-printer-install
  - src-microsoft-printer-default
  - src-microsoft-print-spooler
  - src-microsoft-scanner-install
  - src-microsoft-display-layout
  - src-microsoft-multiple-monitors
  - src-microsoft-refresh-rate
  - src-inepam-itajuba-001-2024-recursos
  - src-inepam-perifericos-evidencias
---

# Periféricos — impressoras, monitores e dispositivos de entrada e saída

## 1. Identificação e referência ao edital

**Cargo:** Agente Administrativo  
**Disciplina:** Conhecimentos Específicos — Informática  
**Item estável:** `AGE-ESP-011-03`  
**Item-pai:** `AGE-ESP-011` — Informática  
**Tópico do site:** `aa-perifericos`

**EXIGÊNCIA DO EDITAL.** O conteúdo programático oficial de Rincão inclui, dentro de Informática, a utilização e configuração do Windows (versão XP ou mais recente), seus aplicativos embarcados e **configurações de periféricos, com menção expressa a impressoras e monitores**. Portanto, esta aula trata do núcleo de periféricos que pode aparecer na prova, com prioridade para situações administrativas de impressão, exibição e digitalização.

A página oficial da INEPAM para Rincão foi revisada em 1º de setembro de 2026. Na verificação deste lote, continuavam disponíveis o **Edital do Concurso Público nº 001/2026** e a **Rerratificação do Edital de Abertura**, sem nova retificação exibida na página. A rerratificação já existente não alterou o recorte editorial desta subaula.

> **Regra de versão:** o edital admite “Windows XP ou mais recente”. Isso significa que conceitos permanentes — entrada/saída, impressora, monitor, fila, driver, resolução, escala — são centrais. Caminhos exatos de menus variam entre versões. Quando esta aula mostra caminhos atuais, eles são identificados como documentação do Windows 11/10, e não como se fossem idênticos ao Windows XP.

## 2. O que o edital cobra

Para este item, o candidato deve dominar principalmente:

- o conceito de periférico e sua função;
- classificação em **entrada**, **saída** e, quando aplicável, **entrada e saída**;
- impressoras: conexão, seleção, impressora padrão, fila, trabalhos de impressão, preferências e driver;
- identificação de falhas simples de impressão;
- monitores: **escala, resolução, orientação e taxa de atualização**;
- uso de múltiplos monitores: identificar/detectar, **duplicar** e **estender**;
- scanners e equipamentos multifuncionais como exemplos práticos de entrada;
- diferença entre **digitalizar** um documento e aplicar **OCR**;
- interpretação de situações de escritório nas quais é preciso escolher o periférico ou configuração adequada.

**EXPLICAÇÃO PEDAGÓGICA.** O edital escreve “impressoras, monitores, etc.”. O “etc.” não autoriza estudar qualquer hardware em profundidade. A estratégia editorial é cobrir os periféricos mais básicos e os diretamente ligados ao trabalho administrativo, mantendo o foco da prova.

## 3. Objetivos

Ao terminar esta aula, você deve ser capaz de:

1. classificar dispositivos comuns como entrada ou saída;
2. distinguir impressora, scanner e equipamento multifuncional;
3. explicar o papel de uma fila de impressão e do serviço Print Spooler;
4. explicar o que é driver sem confundi-lo com hardware ou cabo;
5. selecionar e compreender uma impressora padrão;
6. diferenciar escala, resolução, orientação e taxa de atualização de um monitor;
7. diferenciar os modos Duplicar e Estender em duas telas;
8. reconhecer procedimentos básicos e seguros diante de uma impressão que não saiu;
9. diferenciar captura de imagem por scanner e reconhecimento de texto por OCR;
10. resolver questões A–E de nível médio com situações administrativas.

## 4. Explicação completa e didática

### 4.1 O que é periférico

Periférico é um dispositivo usado para permitir entrada, saída ou troca de informações entre o computador e o ambiente externo. Para a prova, pense na **direção principal da informação**.

- Se a informação **entra** no computador: periférico de entrada.
- Se a informação **sai** do computador para o usuário ou para outro meio: periférico de saída.
- Se o mesmo equipamento faz os dois papéis: pode ser de entrada e saída.

### 4.2 Periféricos de entrada

Exemplos clássicos:

| Dispositivo | Função principal |
|---|---|
| Teclado | envia caracteres e comandos |
| Mouse | envia movimentos, cliques e seleções |
| Scanner | capta documento/imagem física e envia ao computador |
| Microfone | capta áudio |
| Webcam | capta imagem/vídeo |

**Scanner:** em uma prefeitura, pode ser usado para digitalizar requerimentos, documentos pessoais, ofícios recebidos e comprovantes. Ele é um periférico de **entrada** porque leva a informação do papel para o computador.

### 4.3 Periféricos de saída

Exemplos:

| Dispositivo | Função principal |
|---|---|
| Monitor | exibe informação visual |
| Impressora | produz saída impressa |
| Projetor | projeta imagem para visualização |
| Alto-falante/caixa de som | reproduz áudio |

A prova pode tentar inverter essas classificações. Uma impressora comum não é periférico de entrada só porque recebe dados do computador: a classificação considera a função para o usuário — produzir a **saída** em papel.

### 4.4 Dispositivos com entrada e saída

Uma tela sensível ao toque é bom exemplo: mostra imagens (**saída**) e recebe toques (**entrada**). Um equipamento multifuncional pode reunir componentes distintos: a função impressora é de saída e a função scanner é de entrada.

Evite transformar essa classificação em regra rígida sobre o aparelho inteiro. A questão pode perguntar pela **função** usada naquele momento.

### 4.5 Impressora local, de rede e sem fio

Uma impressora pode estar:

- conectada diretamente ao computador, por exemplo via USB;
- conectada a uma rede e compartilhada entre computadores;
- conectada sem fio, dependendo do modelo e da infraestrutura.

Na documentação atual da Microsoft, muitas impressoras são reconhecidas e instaladas automaticamente pelo Windows quando são conectadas e ligadas. Se uma impressora local não aparecer, no Windows 11 o caminho documentado passa por **Configurações → Bluetooth e dispositivos → Impressoras e scanners → Adicionar dispositivo**.

**Atenção:** o fato de a instalação ser automática em muitos casos não significa que “driver deixou de existir”. Significa apenas que o Windows já possui suporte para muitos modelos e pode obter componentes/atualizações sem que o usuário faça instalação manual em todos os casos.

### 4.6 Impressora padrão

A impressora padrão é aquela que o sistema tende a selecionar quando um programa envia uma impressão sem o usuário escolher outro dispositivo.

No Windows atual existem dois comportamentos relevantes:

- o usuário pode escolher manualmente uma impressora padrão;
- pode permitir que o Windows gerencie a padrão e use automaticamente a **última impressora utilizada**, conforme a opção documentada pela Microsoft.

**Pegadinha frequente em prova:** “impressora padrão” não é sinônimo de “única impressora instalada”. É possível ter várias instaladas e apenas uma definida como padrão em determinado momento.

### 4.7 Trabalho e fila de impressão

Quando você manda imprimir, o documento vira um **trabalho de impressão**. Esses trabalhos podem ser organizados em uma **fila**.

Na fila é possível encontrar trabalhos:

- aguardando;
- em processamento/imprimindo;
- pausados;
- presos por erro;
- duplicados porque alguém clicou várias vezes em Imprimir.

No Windows atual, a Microsoft documenta a abertura da fila a partir de **Configurações → Bluetooth e dispositivos → Impressoras e scanners → [impressora] → Abrir fila de impressão**.

**Situação administrativa:** um ofício não saiu. O servidor aperta Ctrl+P cinco vezes. Quando a impressora volta a responder, podem sair cinco cópias. Antes de repetir o envio, é melhor verificar a fila.

### 4.8 Print Spooler

O **Print Spooler** é o serviço do Windows que gerencia trabalhos de impressão. Se ele falhar, a impressão pode parar e documentos podem permanecer presos na fila.

Para a prova, memorize a relação:

**Print Spooler → serviço de impressão → trabalhos/fila.**

Não precisa decorar procedimentos avançados de manutenção do sistema para responder às questões básicas deste edital. É suficiente entender a função e saber que reiniciar o serviço pode fazer parte da solução de problemas documentada pela Microsoft.

### 4.9 Driver

Driver é software que permite ao sistema operacional se comunicar adequadamente com o hardware.

Não confunda:

- **driver** = software;
- **cabo USB** = conexão física;
- **fila** = trabalhos aguardando impressão;
- **spooler** = serviço que gerencia trabalhos;
- **impressora** = hardware/periférico de saída.

A Microsoft informa que o Windows suporta muitas impressoras diretamente, mas drivers adicionais ou atualizados podem existir, inclusive por atualização do sistema ou pelo fabricante conforme o equipamento.

### 4.10 Preferências de impressão

Antes de imprimir, podem aparecer opções como:

- número de cópias;
- tamanho do papel;
- orientação **retrato** ou **paisagem**;
- intervalo de páginas;
- qualidade/cor, conforme dispositivo;
- impressão em **frente e verso (duplex)**, se o hardware e o driver oferecerem o recurso.

**Retrato** normalmente representa página mais alta que larga. **Paisagem** representa página mais larga que alta.

**Duplex** não tem relação com múltiplos monitores. Duplex é frente e verso na impressão.

### 4.11 Monitor: escala

**Escala** altera o tamanho visual de textos, aplicativos e outros elementos. Por exemplo, aumentar a escala pode fazer menus e textos parecerem maiores sem significar simplesmente “trocar a resolução”.

Esse ponto possui **evidência real da INEPAM**: no julgamento oficial de recursos do concurso de Itajubá/MG 001/2024, para Agente Administrativo, a banca explicou que a questão 20 pedia o item que altera o tamanho do texto, aplicativos e outros itens no Windows 11, localizado em **Configurações → Sistema → Tela → Escala**. A própria banca registrou que a versão indicada no enunciado — Windows 11 23H2 — precisava ser considerada.

### 4.12 Monitor: resolução

Resolução indica a quantidade de pontos/pixels usados para compor a imagem na tela, expressa comumente como largura × altura.

Na documentação atual, a Microsoft recomenda normalmente a opção marcada como **Recommended**. Uma resolução abaixo da nativa do monitor pode deixar textos menos nítidos e provocar imagem menor, centralizada, com bordas ou esticada, conforme o equipamento.

**Não confunda:**

- escala = tamanho visual dos elementos;
- resolução = matriz/quantidade de pixels usada na imagem.

É possível alterar uma sem que a outra se torne automaticamente a mesma coisa.

### 4.13 Orientação do monitor

A orientação pode ser, entre outras opções disponíveis, **paisagem** ou **retrato**. Alterar a orientação no sistema muda como a imagem é organizada; para uso real, normalmente o monitor físico também deve ser posicionado de maneira correspondente.

A mesma palavra “orientação” aparece em impressão e em tela, mas o objeto é diferente:

- orientação da página impressa;
- orientação da exibição do monitor.

Leia o contexto do enunciado.

### 4.14 Taxa de atualização

Taxa de atualização é quantas vezes por segundo a imagem é atualizada na tela. É medida em hertz (Hz).

**Exemplo:** 60 Hz = aproximadamente 60 atualizações por segundo.

No Windows atual, a Microsoft documenta essa configuração em opções avançadas de exibição. As taxas disponíveis dependem do monitor e do que ele suporta.

Para esta prova, a prioridade é compreender o conceito. Recursos modernos específicos, como taxa dinâmica, só devem ser cobrados se o enunciado/versionamento justificar; não os trate como característica universal de Windows antigos.

### 4.15 Múltiplos monitores

Quando existem duas ou mais telas, o Windows pode identificar os monitores e organizar seu posicionamento. Os modos mais importantes, acessíveis também por **Windows + P**, são:

- **Somente a tela do computador**;
- **Duplicar** — mostra o mesmo conteúdo nas telas;
- **Estender** — distribui a área de trabalho entre as telas e permite mover janelas;
- **Somente a segunda tela**.

**Duplicar ≠ Estender.** Essa diferença é excelente matéria para alternativa de prova.

Em uma rotina administrativa, Estender pode permitir deixar um sistema em uma tela e um documento de consulta na outra. Duplicar é mais útil quando se deseja que outra tela/projetor mostre o mesmo conteúdo.

### 4.16 Scanner e equipamento multifuncional

A Microsoft documenta que scanners locais e de rede podem ser detectados automaticamente pelo Windows. Para scanner local, o USB é um exemplo comum. Para scanner de rede/sem fio, é importante a conectividade; quando ambos são sem fio, scanner e computador devem estar na mesma rede/SSID para o cenário documentado.

Um equipamento multifuncional pode aparecer como impressora e, se a função scanner for detectada, oferecer também configurações de scanner.

### 4.17 Digitalização não é sinônimo de OCR

Digitalizar significa capturar o documento físico para uma representação digital. Essa representação pode ser apenas uma imagem.

**OCR (Optical Character Recognition / reconhecimento óptico de caracteres)** é uma etapa/recurso capaz de identificar caracteres em uma imagem e transformá-los em texto pesquisável ou tratável, conforme o software e o fluxo utilizado.

Logo:

**scanner → captura/digitalização**  
**OCR → reconhecimento de caracteres**

Um PDF digitalizado pode continuar sendo apenas imagem se não houver OCR.

### 4.18 Nota de atualização tecnológica

O edital de Rincão usa formulação ampla, “Windows XP ou mais recente”. Em 2026, a documentação atual da Microsoft consultada para este lote é de Windows 11/10; as páginas também registram que o suporte do Windows 10 terminou em **14 de outubro de 2025**.

Isso não muda o edital: Windows 10 continua sendo uma versão “mais recente” que XP e conceitos históricos podem aparecer. A aula evita misturar menus exatos de versões diferentes. Quando um caminho atual é ensinado, ele é tratado como exemplo documentado no Windows atual.

## 5. Conceitos e regras

### Quadro essencial

| Conceito | Definição para prova | Não confundir com |
|---|---|---|
| Periférico de entrada | envia dados ao computador | dispositivo de saída |
| Periférico de saída | apresenta/produz dados para fora do computador | entrada |
| Scanner | captura documento/imagem para o computador | impressora |
| Impressora | produz saída impressa | scanner |
| Multifuncional | equipamento que reúne funções como imprimir e digitalizar | “uma única classificação obrigatória” |
| Impressora padrão | impressora previamente escolhida pelo sistema/usuário | única impressora instalada |
| Fila de impressão | conjunto/ordem dos trabalhos enviados | armazenamento permanente |
| Print Spooler | serviço que gerencia trabalhos de impressão | driver |
| Driver | software de comunicação com hardware | cabo |
| Duplex | frente e verso | duplicar monitor |
| Escala | tamanho visual de textos/apps/itens | resolução |
| Resolução | quantidade/matriz de pixels da imagem | escala |
| Taxa de atualização | atualizações da imagem por segundo | resolução |
| Duplicar | mesmo conteúdo nas telas | estender |
| Estender | área de trabalho distribuída entre telas | duplicar |
| Digitalizar | capturar documento físico em formato digital | OCR obrigatório |
| OCR | reconhecer caracteres em uma imagem | scanner físico |

### Regras para interpretar alternativas

1. **Leia o verbo:** imprimir, digitalizar, exibir, capturar, duplicar, estender.
2. **Veja a direção da informação:** entra ou sai do computador?
3. **Procure a versão do Windows:** se a questão fixa uma versão, não responda com um menu de outra versão por memória vaga.
4. **Não torne exemplos em absolutos:** “muitas impressoras instalam automaticamente” não é “todas sempre instalam sem driver”.
5. **Respeite dependência de hardware:** duplex, brilho e certas taxas de atualização dependem do equipamento.
6. **Diferencie função e aparelho:** uma multifuncional reúne funções de entrada e saída.

## 6. Exemplos resolvidos e situações práticas

### Exemplo 1 — documento não imprime

**Situação:** o usuário enviou um PDF para impressão e nada saiu. Ele pretende clicar novamente em Imprimir várias vezes.

**Raciocínio:**
1. confirmar se a impressora correta foi selecionada;
2. verificar energia/conexão e mensagens de erro;
3. abrir a fila;
4. observar se o trabalho está parado ou duplicado;
5. cancelar cópias desnecessárias;
6. se a fila persistir travada, considerar o serviço de impressão/Print Spooler e demais etapas documentadas.

**Resposta de prova mais provável em uma questão básica:** verificar **fila de impressão** antes de reenviar repetidamente.

### Exemplo 2 — dois monitores para trabalhar com planilha e sistema

**Situação:** o servidor quer deixar uma planilha em uma tela e o sistema administrativo em outra.

**Raciocínio:** Duplicar exibiria o mesmo conteúdo nas duas. **Estender** amplia a área de trabalho e permite posicionar janelas diferentes.

**Resposta:** Estender.

### Exemplo 3 — projetar a mesma apresentação

**Situação:** uma reunião exige que o notebook e o projetor mostrem o mesmo conteúdo.

**Raciocínio:** a palavra-chave é “mesmo”.

**Resposta:** Duplicar.

### Exemplo 4 — texto pequeno, mas resolução correta

**Situação:** a resolução recomendada está adequada, mas textos e aplicativos aparecem pequenos para o usuário.

**Raciocínio:** a configuração diretamente ligada ao tamanho visual dos elementos é **Escala**.

**Resposta:** ajustar a escala, respeitando opções disponíveis.

### Exemplo 5 — digitalização de protocolo

**Situação:** um requerimento em papel precisa entrar no sistema como arquivo digital.

**Raciocínio:** o equipamento de entrada apropriado é o **scanner**. Se for necessário pesquisar palavras dentro da imagem, pode ser necessário OCR em etapa separada.

**Resposta:** scanner para digitalização; OCR apenas se houver necessidade de reconhecimento de caracteres.

### Exemplo 6 — impressora USB não aparece

**Situação:** impressora conectada por USB e ligada não foi instalada automaticamente no Windows 11.

**Raciocínio:** a documentação atual orienta procurar em **Configurações → Bluetooth e dispositivos → Impressoras e scanners** e usar **Adicionar dispositivo**.

**Resposta:** usar a área de Impressoras e scanners para localizar/adicionar o equipamento.

### Exemplo 7 — 60 Hz

**Situação:** a questão pergunta o significado de uma tela configurada a 60 Hz.

**Raciocínio:** hertz mede ocorrências por segundo.

**Resposta:** a imagem é atualizada aproximadamente 60 vezes por segundo.

## 7. Como a INEPAM cobra o tema — somente com evidência

### 7.1 QUESTÃO REAL — INEPAM parcialmente documentada: Itajubá/MG 001/2024

**Cargo:** Agente Administrativo  
**Questão:** 20  
**Fonte:** julgamento oficial de recursos dos gabaritos, responsabilidade técnica da INEPAM.

O documento oficial registra que a questão solicitava o item que altera o tamanho do texto, dos aplicativos e de outros itens no Windows 11. A banca fundamentou a resposta em **Configurações → Sistema → Tela → Escala** e destacou que deveria ser considerada a versão informada no enunciado, **Windows 11 23H2 (build 22635.3430)**. O recurso foi indeferido.

**Classificação editorial:** **QUESTÃO REAL — INEPAM parcialmente documentada.** O julgamento comprova cargo, número, tema, versão e fundamento, mas não estamos publicando o caderno integral com todas as alternativas originais. Portanto, nenhuma alternativa ausente foi reconstruída.

**PADRÃO OBSERVADO EM DOCUMENTO REAL:** esta evidência mostra que a banca pode:

- cobrar caminho/configuração de interface;
- diferenciar conceitos próximos, como escala e outras opções de tela;
- fixar uma versão do Windows no enunciado;
- defender o gabarito com documentação técnica do fabricante.

**Limite da inferência:** uma questão real não prova que “sempre” será cobrado o mesmo menu. Ela justifica treinar leitura de versão e finalidade das configurações.

### 7.2 Evidência oficial de escopo em editais da INEPAM

Em edital oficial de **Clementina/SP 001/2026**, organizado pela INEPAM, o conteúdo de Informática para Agente Administrativo repete formulação muito próxima: Windows XP ou mais recente e **configurações de periféricos (impressoras, monitores etc.)**.

Em edital oficial de **Valentim Gentil/SP 001/2026**, a banca também usa essa formulação em cargos e, no conteúdo do Secretário de Escola, explicita periféricos como **impressoras, scanners, monitores, dispositivos USB e Bluetooth**.

**Classificação editorial:** isso é **EVIDÊNCIA OFICIAL DE ESCOPO**, não “questão real”. Serve para mostrar que periféricos fazem parte do vocabulário atual de conteúdos programáticos da banca.

### 7.3 Pesquisa de pistas não oficiais

Foi localizada em banco público não oficial uma referência de 2026 a questão da INEPAM envolvendo scanner/digitalização. A pesquisa no julgamento oficial correspondente não confirmou o conteúdo específico. Por isso:

- não foi transcrita como questão real;
- não foi usada para inventar alternativas;
- não foi usada para afirmar gabarito;
- permanece registrada apenas como **pista descartada/não promovida** no arquivo de evidências.

Essa é a regra do projeto: é melhor ter **uma evidência real comprovada** do que várias “questões reais” sem rastreabilidade.

## 8. Pegadinhas e erros frequentes

1. **Scanner como saída.** Errado: scanner é principalmente entrada.
2. **Impressora como entrada.** Errado: sua função principal é saída.
3. **Monitor e touchscreen como a mesma coisa.** Monitor tradicional é saída; touchscreen pode também receber entrada.
4. **Driver = cabo.** Driver é software.
5. **Fila = driver.** Fila organiza trabalhos; driver viabiliza comunicação com hardware.
6. **Spooler = impressora.** Spooler é serviço do Windows.
7. **Clicar várias vezes em Imprimir resolve.** Pode gerar trabalhos duplicados na fila.
8. **Impressora padrão = única instalada.** Pode haver várias instaladas.
9. **Windows sempre instala qualquer impressora sem driver.** Formulação absoluta e incorreta. Muitas são reconhecidas automaticamente; suporte adicional pode ser necessário.
10. **Duplex = duplicar monitor.** Duplex é frente e verso na impressão.
11. **Escala = resolução.** São configurações diferentes.
12. **60 Hz = 60 pixels.** Hz mede atualizações por segundo, não quantidade de pixels.
13. **Duplicar = estender.** Duplicar repete; Estender amplia a área de trabalho.
14. **Digitalização = OCR.** Um scanner pode gerar apenas imagem; OCR é reconhecimento de caracteres.
15. **Menu atual = menu do XP.** Caminhos variam por versão.
16. **Toda opção existe em qualquer hardware.** Duplex, taxa de atualização, brilho e outras opções dependem do equipamento.

## 9. Resumo

- Periférico conecta o computador ao ambiente de entrada/saída de informações.
- Teclado, mouse, scanner, microfone e webcam são exemplos de entrada.
- Monitor, impressora, projetor e caixas de som são exemplos de saída.
- Equipamentos podem acumular funções; touchscreen e multifuncional ajudam a entender isso.
- Impressora padrão é a seleção preferencial do sistema; não significa única impressora.
- Fila guarda/organiza trabalhos de impressão; Print Spooler gerencia esses trabalhos.
- Driver é software de comunicação com hardware.
- Duplex é impressão frente e verso quando suportada.
- Escala altera tamanho visual; resolução trata dos pixels da imagem; taxa de atualização é medida em Hz.
- Duplicar mostra o mesmo conteúdo; Estender amplia a área de trabalho.
- Scanner digitaliza; OCR reconhece caracteres.
- A INEPAM já documentou cobrança de **Escala** para Agente Administrativo e exigiu respeito à versão indicada no enunciado.

## 10. Revisão rápida

Responda mentalmente:

1. Scanner é entrada ou saída? **Entrada.**
2. Impressora é entrada ou saída? **Saída.**
3. O que organiza trabalhos enviados para impressão? **Fila de impressão.**
4. Qual serviço gerencia trabalhos de impressão no Windows? **Print Spooler.**
5. Driver é hardware? **Não; é software.**
6. Impressora padrão é necessariamente a única instalada? **Não.**
7. Qual configuração altera o tamanho visual de textos/apps? **Escala.**
8. Resolução e escala são iguais? **Não.**
9. O que significa 60 Hz? **Aproximadamente 60 atualizações de imagem por segundo.**
10. Qual modo mostra o mesmo conteúdo em duas telas? **Duplicar.**
11. Qual modo amplia a área de trabalho? **Estender.**
12. Digitalização garante texto pesquisável? **Não.**
13. OCR é o scanner físico? **Não; é reconhecimento de caracteres.**
14. O caminho de menus é necessariamente igual em XP e Windows 11? **Não.**

## 11. Flashcards

**Frente:** O que define um periférico de entrada?  
**Verso:** Envia informações para o computador.

**Frente:** Scanner é qual tipo?  
**Verso:** Entrada.

**Frente:** Monitor tradicional é qual tipo?  
**Verso:** Saída.

**Frente:** Impressora é qual tipo?  
**Verso:** Saída.

**Frente:** Uma tela touch pode fazer quais papéis?  
**Verso:** Saída visual e entrada por toque.

**Frente:** O que é impressora padrão?  
**Verso:** Impressora selecionada preferencialmente pelo sistema/usuário para impressão.

**Frente:** O que é fila de impressão?  
**Verso:** Conjunto/ordem dos trabalhos enviados à impressora.

**Frente:** O que é Print Spooler?  
**Verso:** Serviço do Windows que gerencia trabalhos de impressão.

**Frente:** O que é driver?  
**Verso:** Software que permite a comunicação do sistema operacional com o hardware.

**Frente:** O que é duplex?  
**Verso:** Impressão frente e verso, quando suportada.

**Frente:** Escala serve principalmente para quê?  
**Verso:** Alterar tamanho visual de textos, apps e outros itens.

**Frente:** Resolução representa o quê?  
**Verso:** A quantidade/matriz de pixels usada para formar a imagem da tela.

**Frente:** O que mede Hz no monitor?  
**Verso:** A taxa de atualização da imagem por segundo.

**Frente:** Duplicar telas faz o quê?  
**Verso:** Mostra o mesmo conteúdo nas telas.

**Frente:** Estender telas faz o quê?  
**Verso:** Amplia a área de trabalho e permite mover janelas entre telas.

**Frente:** Digitalizar é o mesmo que OCR?  
**Verso:** Não. Digitalização captura; OCR reconhece caracteres.

**Frente:** Qual evidência real da INEPAM foi confirmada neste tema?  
**Verso:** Itajubá/2024, Agente Administrativo, questão 20 — Escala no Windows 11, conforme julgamento oficial.

## 12. Questões de fixação

### Questão 1 — QUESTÃO INÉDITA — ESTILO INEPAM

Em um setor administrativo, qual dos dispositivos abaixo é classificado principalmente como periférico de entrada de dados?
A) Monitor.
B) Impressora.
C) Scanner.
D) Projetor.
E) Caixa de som.
### Questão 2 — QUESTÃO INÉDITA — ESTILO INEPAM

Assinale a alternativa que contém apenas dispositivos tipicamente usados para saída de informações do computador.
A) Teclado e mouse.
B) Scanner e webcam.
C) Monitor e impressora.
D) Microfone e teclado.
E) Scanner e mouse.
### Questão 3 — QUESTÃO INÉDITA — ESTILO INEPAM

Uma tela sensível ao toque pode, conforme o equipamento, atuar simultaneamente como periférico de entrada e de saída porque:
A) exibe informações e também recebe comandos por toque.
B) funciona apenas como impressora virtual.
C) transforma qualquer arquivo em texto por OCR.
D) substitui obrigatoriamente o teclado físico em todos os computadores.
E) serve exclusivamente para armazenar arquivos.
### Questão 4 — QUESTÃO INÉDITA — ESTILO INEPAM

No Windows atual, quando a opção “Let Windows manage my default printer” está ativada, o sistema pode:
A) escolher automaticamente como padrão a última impressora utilizada.
B) apagar a fila depois de cada impressão, obrigatoriamente.
C) converter a impressora local em scanner.
D) impedir o uso de impressoras de rede.
E) alterar a resolução do monitor conforme a impressora.
### Questão 5 — QUESTÃO INÉDITA — ESTILO INEPAM

Uma impressora USB foi conectada e ligada em um computador com Windows 11, mas não apareceu automaticamente. Segundo o procedimento atual documentado pela Microsoft, um caminho adequado para adicioná-la é:
A) Configurações → Bluetooth e dispositivos → Impressoras e scanners → Adicionar dispositivo.
B) Configurações → Sistema → Tela → Orientação.
C) Explorador de Arquivos → Este Computador → Formatar.
D) Painel de Controle → Fontes → Adicionar dispositivo.
E) Calculadora → Programador → Dispositivos.
### Questão 6 — QUESTÃO INÉDITA — ESTILO INEPAM

Ao instalar um scanner sem fio em uma rede local, uma verificação coerente com a documentação atual da Microsoft é confirmar se:
A) o scanner e o computador estão na mesma rede sem fio/SSID.
B) o monitor está necessariamente em orientação retrato.
C) a impressora padrão foi excluída.
D) o arquivo a ser digitalizado já possui OCR.
E) o computador está sem qualquer conexão de rede.
### Questão 7 — QUESTÃO INÉDITA — ESTILO INEPAM

A principal finalidade da fila de impressão no Windows é:
A) organizar e acompanhar os trabalhos enviados para a impressora.
B) armazenar permanentemente todos os documentos do usuário.
C) alterar a taxa de atualização do monitor.
D) transformar imagens digitalizadas em texto pesquisável.
E) instalar memória RAM adicional.
### Questão 8 — QUESTÃO INÉDITA — ESTILO INEPAM

No Windows, o serviço Print Spooler está diretamente relacionado a:
A) gerenciar trabalhos de impressão e a fila.
B) ajustar brilho e contraste do monitor.
C) capturar áudio do microfone.
D) formatar unidades de armazenamento.
E) executar reconhecimento óptico de caracteres.
### Questão 9 — QUESTÃO INÉDITA — ESTILO INEPAM

Sobre drivers de impressora no Windows atual, assinale a alternativa correta.
A) O Windows oferece suporte a muitas impressoras sem exigir instalação manual de software especial, embora drivers adicionais ou atualizados possam existir.
B) Toda impressora exige obrigatoriamente instalação manual de um driver baixado de site de terceiros.
C) Driver é o cabo USB usado para conectar a impressora.
D) Driver é sinônimo de fila de impressão.
E) A existência de driver elimina qualquer necessidade de conexão física ou de rede.
### Questão 10 — QUESTÃO INÉDITA — ESTILO INEPAM

Em uma impressora que oferece suporte ao recurso, a opção “duplex” ou “frente e verso” permite:
A) imprimir nos dois lados da folha.
B) duplicar a imagem em dois monitores.
C) digitalizar frente e verso sem scanner.
D) dobrar a resolução do documento.
E) reiniciar o serviço de impressão.
### Questão 11 — QUESTÃO INÉDITA — ESTILO INEPAM

No Windows, a configuração “Escala” está relacionada principalmente a:
A) alterar o tamanho visual de textos, aplicativos e outros elementos na tela.
B) definir quantas páginas serão impressas.
C) selecionar a impressora padrão.
D) aumentar fisicamente a quantidade de pixels do monitor.
E) transformar um scanner em impressora.
### Questão 12 — QUESTÃO INÉDITA — ESTILO INEPAM

Sobre resolução de tela, a documentação atual da Microsoft recomenda, em regra:
A) usar a resolução marcada como recomendada, normalmente adequada à resolução nativa do monitor.
B) usar sempre a menor resolução disponível para aumentar a nitidez.
C) confundir resolução com escala, pois são a mesma configuração.
D) alterar a resolução apenas por meio da fila de impressão.
E) usar obrigatoriamente orientação retrato em monitores externos.
### Questão 13 — QUESTÃO INÉDITA — ESTILO INEPAM

Um monitor configurado para 60 Hz, considerando a definição de taxa de atualização, atualiza a imagem aproximadamente:
A) 60 vezes por segundo.
B) 60 vezes por minuto.
C) uma vez a cada 60 segundos.
D) 600 vezes por minuto, obrigatoriamente.
E) apenas quando o usuário move o mouse.
### Questão 14 — QUESTÃO INÉDITA — ESTILO INEPAM

Ao pressionar Windows + P e escolher “Duplicar”, o Windows é configurado para:
A) mostrar o mesmo conteúdo nas telas conectadas.
B) formar uma área de trabalho ampliada entre as telas.
C) usar somente a segunda tela.
D) desligar permanentemente o monitor principal.
E) duplicar os arquivos armazenados no computador.
### Questão 15 — QUESTÃO INÉDITA — ESTILO INEPAM

Em uma rotina administrativa com dois monitores, a opção “Estender” é útil porque:
A) amplia a área de trabalho entre as telas e permite mover janelas de uma para outra.
B) repete necessariamente a mesma imagem em ambas.
C) transforma o segundo monitor em impressora.
D) impede que o mouse passe de uma tela para outra.
E) reduz automaticamente a resolução para o mínimo.
### Questão 16 — QUESTÃO INÉDITA — ESTILO INEPAM

Uma impressora multifuncional pode aparecer no Windows como impressora e também oferecer funções de scanner. Para verificar essa função, é correto afirmar que:
A) o Windows pode apresentar configurações de scanner dentro das opções do próprio dispositivo multifuncional.
B) todo equipamento multifuncional funciona como scanner mesmo que o hardware não possua essa capacidade.
C) o scanner é sempre listado exclusivamente como monitor.
D) a função de scanner depende da resolução do monitor principal.
E) digitalização só é possível quando a impressora é definida como padrão.
### Questão 17 — QUESTÃO INÉDITA — ESTILO INEPAM

Assinale a afirmação tecnicamente correta sobre digitalização e OCR.
A) Digitalizar um documento pode gerar uma imagem; tornar o texto pesquisável exige recurso de reconhecimento de caracteres quando isso for necessário.
B) Todo scanner converte automaticamente qualquer imagem em texto editável, sem software ou recurso adicional.
C) OCR é uma configuração de taxa de atualização do monitor.
D) Digitalização é apenas outro nome para impressão duplex.
E) OCR é o serviço responsável pela fila de impressão.
### Questão 18 — QUESTÃO INÉDITA — ESTILO INEPAM

Um servidor enviou um ofício para impressão, nada saiu e ele clicou várias vezes em Imprimir. Antes de continuar reenviando o arquivo, uma providência adequada é:
A) abrir a fila da impressora, verificar trabalhos pendentes/duplicados e cancelar os desnecessários.
B) alterar imediatamente a orientação do monitor para retrato.
C) formatar o disco do computador.
D) desinstalar o teclado e o mouse.
E) converter o arquivo em imagem apenas para limpar a fila.


## 13. Gabarito comentado

**1. C** — O scanner capta informações de um documento físico e as envia ao computador, por isso é periférico de entrada. Monitor, impressora, projetor e caixa de som são exemplos típicos de saída.
**2. C** — Monitor apresenta informações visualmente e impressora produz saída em papel. Os demais pares contêm dispositivos de entrada.
**3. A** — A tela fornece saída visual e, quando possui função touch, recebe entradas pelo toque. Isso não significa que faça OCR, armazenamento ou substituição obrigatória de outros periféricos.
**4. A** — A documentação atual da Microsoft informa que essa opção permite ao Windows definir automaticamente a última impressora usada como padrão. Também é possível desativá-la e escolher uma impressora padrão manualmente.
**5. A** — A Microsoft orienta que impressoras locais normalmente sejam instaladas automaticamente; se isso não ocorrer, a área Impressoras e scanners permite procurar e adicionar o dispositivo.
**6. A** — Para scanners em rede sem fio, a Microsoft recomenda verificar se scanner e computador estão conectados à mesma rede/SSID. Esse requisito é de conectividade, não de formato do arquivo ou orientação de tela.
**7. A** — A fila reúne os trabalhos de impressão enviados e permite acompanhar ou cancelar trabalhos. Ela não é sistema de arquivamento permanente nem ferramenta de monitor/scanner.
**8. A** — A Microsoft descreve o Print Spooler como o serviço que gerencia os trabalhos de impressão. Quando ele falha, documentos podem ficar presos na fila.
**9. A** — Segundo a Microsoft, muitas impressoras são suportadas pelo Windows e instalam automaticamente; drivers adicionais ou atualizados podem estar disponíveis. Driver é software, não cabo nem fila.
**10. A** — Duplex é impressão frente e verso quando o hardware e o driver oferecem esse recurso. Não se confunde com duplicação de telas.
**11. A** — Escala ajusta o tamanho visual dos elementos. A INEPAM confirmou em julgamento oficial de Itajubá/2024 que, no ambiente Windows 11 indicado na prova, a opção para tamanho de texto, aplicativos e outros itens ficava em Configurações → Sistema → Tela → Escala.
**12. A** — A Microsoft indica que normalmente é melhor manter a resolução marcada como Recommended. Resoluções inferiores à nativa podem deixar o texto menos nítido ou causar outros efeitos de exibição.
**13. A** — Taxa de atualização é o número de vezes por segundo em que a imagem da tela é atualizada. A própria Microsoft exemplifica 60 Hz como 60 atualizações por segundo.
**14. A** — No modo Duplicar, o mesmo conteúdo é exibido nas telas. A Microsoft separa claramente essa opção de Estender.
**15. A** — Estender distribui a área de trabalho entre as telas; é possível mover itens entre elas. Duplicar, ao contrário, mostra o mesmo conteúdo.
**16. A** — A documentação da Microsoft observa que o scanner de um equipamento multifuncional pode aparecer associado à impressora, com opções de Scanner settings quando a função é detectada.
**17. A** — Digitalização captura o conteúdo físico em formato digital. OCR é um processo distinto de reconhecimento de caracteres; um documento escaneado pode permanecer somente como imagem.
**18. A** — Reenviar repetidamente pode criar cópias na fila. A Microsoft orienta abrir a fila, verificar trabalhos e cancelar os presos ou duplicados; problemas persistentes podem envolver o Print Spooler ou a conexão da impressora.


## 14. Fontes

### Fonte de verdade do concurso

- **Prefeitura Municipal de Rincão / INEPAM.** Concurso Público nº 001/2026 — Edital de Abertura, Anexo II, conteúdo de Agente Administrativo.
- **Prefeitura Municipal de Rincão / INEPAM.** Rerratificação do Edital de Abertura.
- **INEPAM.** Página oficial do Concurso Público nº 001/2026 de Rincão/SP: https://app.inepam.org.br/concurso/concursoPaginaInterna.do?idConcurso=2&idInstituicao=94 — verificada em 01/09/2026; sem nova retificação exibida.

### Microsoft — documentação técnica atual

- **Microsoft Support.** Add or install a printer in Windows. https://support.microsoft.com/en-us/windows/hardware/printer/add-or-install-a-printer-in-windows — consultado em 01/09/2026.
- **Microsoft Support.** Set a default printer in Windows. https://support.microsoft.com/en-us/windows/hardware/printer/set-a-default-printer-in-windows — consultado em 01/09/2026.
- **Microsoft Support.** Fix print spooler service not running errors in Windows. https://support.microsoft.com/en-US/Windows/Hardware/printer/fix-print-spooler-service-not-running-errors-in-windows — consultado em 01/09/2026.
- **Microsoft Support.** Install and use a scanner in Windows. https://support.microsoft.com/en-US/Windows/Hardware/printer/install-and-use-a-scanner-in-windows — consultado em 01/09/2026.
- **Microsoft Support.** Change your screen resolution and layout in Windows. https://support.microsoft.com/en-US/Windows/Hardware/Display-Graphics/change-your-screen-resolution-and-layout-in-windows — consultado em 01/09/2026.
- **Microsoft Support.** How to use multiple monitors in Windows. https://support.microsoft.com/en-us/windows/hardware/display-graphics/how-to-use-multiple-monitors-in-windows — consultado em 01/09/2026.
- **Microsoft Support.** Change the refresh rate on your monitor in Windows. https://support.microsoft.com/pt-BR/Windows/Hardware/Display-Graphics/change-the-refresh-rate-on-your-monitor-in-windows — consultado em 01/09/2026.

### INEPAM — evidência de banca

- **Prefeitura Municipal de Itajubá / INEPAM.** Concurso Público nº 001/2024 — Edital de divulgação do julgamento dos recursos dos gabaritos. https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=881 — Agente Administrativo, questão 20. Screenshot tentado na página de índice 4 e indisponível por `cache_miss`; texto do PDF acessível diretamente, sem OCR.
- **Prefeitura Municipal de Clementina / INEPAM.** Concurso Público nº 001/2026 — Edital de Abertura. https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2068 — conteúdo de Informática para Agente Administrativo, p. 36 do PDF. Screenshot tentado: `cache_miss`.
- **Prefeitura Municipal de Valentim Gentil / INEPAM.** Concurso Público nº 001/2026 — Edital. https://app.inepam.org.br/concurso/downloadAnexo.do?idAnexo=2435 — formulações de periféricos no conteúdo de Informática; p. 51 explicita impressoras, scanners, monitores, USB e Bluetooth para Secretário de Escola. Screenshot tentado: `cache_miss`.

**Nota editorial final:** não foi localizado, neste lote, caderno oficial integral apropriado para republicar uma questão real de periféricos com A–E. As 18 questões desta aula são, por isso, marcadas como **QUESTÃO INÉDITA — ESTILO INEPAM**. A questão de Itajubá aparece somente como evidência real parcialmente documentada.

