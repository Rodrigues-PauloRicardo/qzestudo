
    // Estrutura das perguntas, respostas e respostas corretas
    const perguntas = [
        {
            pergunta: "Dentre as definições abaixo, a que melhor se aplica à atmosfera protetora é:",
            respostas: ["Atmosfera que circunda a região de solda, responsável pelo sopro magnético.", "Atmosfera quimicamente ativa que, a temperaturas elevadas, reduz óxidos de metais", "Envoltório de gás ou vácuo que circunda a parte a ser soldada de modo a prevenir ou reduzir a formação de óxidos e outros defeitos superficiais.", "É um tipo de proteção exclusivamente gasosa, a qual é utilizada para prevenir a contaminação indesejada pela atmosfera.", ") Envoltório de gás que circunda o eletrodo no instante da abertura do arco"],
            correta: 2  // Índice da resposta correta (0 baseado)
        },       
        {
            pergunta: "Profundidade da solda numa junta de topo medida entre a face da solda e sua extensão na junta, exclusive reforços...",
            respostas: ["Penetração da raiz.", "Penetração total da junta.", "Penetração da junta.", "Raiz da junta", "Raiz da solda"],
            correta: 2
        },
        {
            pergunta: "A respeito do termo “concavidade” assinale entre as opções abaixo a correta:",
            respostas: ["Quando ocorre consiste sempre em reentrância na raiz da solda situada nas laterais do cordão, assemelhando-se com mordedura", "É também considerada “falta de penetração", "Tem o mesmo significado do termo “concavidade excessiva", "Consiste em reentrância na raiz da solda",

"xxxxxxx"],
            correta: 3
        },
        ,
        {
            pergunta: "A trinca é um tipo de descontinuidade planar caracterizada por uma ponta aguda e uma alta razão comprimento e largura e pode ocorrer de diferentes formas. Marque, dentre as opções abaixo, a que também é conhecida como “trinca a frio” ",
            respostas: [" Trinca sob o cordão.", "Trinca na margem. ", " ) Trinca interlamelar.", "Trinca de cratera. ", " Trinca longitudinal."],
            correta: 0
        },
        {
            pergunta: " Numa junta a soldar, a mínima distância que separa os componentes a serem unidos por soldagem ou processos afins é denominada",
            respostas: ["Chanfro ", " Face da raiz", "Face do chanfro ", "Abertura da raiz. ", "xxxxxx "],
            correta: 3
        },
        {
            pergunta: "A borda preparada de um componente na forma angular é denominada ",
            respostas: ["Margem da junta. ", "Chanfro. ", " Bisel. ", "Ângulo do chanfro. ", "Ângulo do bisel. "],
            correta: 2
        },
        {
            pergunta: " A respeito de “atmosfera protetora” usada para prevenir ou reduzir a formação de óxidos e outros defeitos superficiais numa solda, indique a opção correta:",
            respostas: ["É sempre gasosa. ", ") Somente utiliza-se gás inerte na sua formação. ", " É proveniente da queima de escória. ", "Pode ser o vácuo.   ", "Somente utiliza-se gás ativo na sua formação. "],
            correta: 3
        },
        {
            pergunta: " Indique a opção correta relativa ao termo “raiz da solda ",
            respostas: ["Porção da junta a soldar onde os membros estão alinhados e, a uma distância não superior a 2,5 mm. ", "Pontos nos quais a parte superior da solda intersecta as faces do chanfro. ", " Porção da junta soldada onde os membros estão o mais próximo possível entre si. Em seção transversal, a raiz pode ser um ponto, uma linha ou uma área", "Pontos, nos quais a parte posterior da solda intersecta as superfícies do metal de base. ", " Pontos nos quais a solda apresenta uma característica plana em relação à sua face."],
            correta: 2
        },
        {
            pergunta: "10. Qual o percentual de diluição em uma solda autógena e na brasagem?	 ",
            respostas: ["100% e 0% ", " 80% e 20%", "20% e 80%. ", "0% e 100% ", "50% e 50% "],
            correta: 0
        },
        {
            pergunta: "Dentre as definições a seguir, indique as que se aplicam respectivamente a solda de aresta e solda em ângulo: I. Solda executada numa junta de aresta. II. Solda realizada segundo o ângulo de trabalho. III. Solda de seção transversal aproximadamente triangular que une duas superfícies em ângulo. IV. Solda executada em uma junta de topo. ",
            respostas: [") I e IV. ", "II e IV. ", " III e II.", "I e III ", " III e IV."],
            correta: 4
        },
        {
            pergunta: "2. Indique a definição incorreta:	 ",
            respostas: ["Embicamento é um tipo de deformação angular da junta soldada de topo. ", "Concavidade excessiva é uma descontinuidade que aparece nas soldas em ângulo cujas faces estão excessivamente côncavas ", "Mordedura é uma depressão sob a forma de entalhe, no metal de base, acompanhando a margem da solda. ", "Concavidade é uma descontinuidade que pode ocorrer tanto na face quanto na raiz da solda. ", "Reforço excessivo é o excesso de metal da zona fundida localizado na face da solda. "],
            correta: 3
        },
        {
            pergunta: "A progressão unitária da soldagem ao longo de uma junta se refere à definição de... ",
            respostas: ["Sequência de soldagem.", "Revestimento do chanfro (amanteigamento). ", "Passe de solda. ", "Taxa de deposição. ", "Sequência de passes. "],
            correta: 2
        },
        {
            pergunta: "A amostra retirada e identificada da chapa ou tubo de teste quando se objetiva conhecer as propriedades mecânicas do material analisado é ",
            respostas: ["Tubo de teste ", "Corpo de prova ", "Contraprova do material. ", "Cobre-junta. ", " Chapa de teste. "],
            correta: 1
        },
        {
            pergunta: "Entre as opções abaixo assinale a correta a respeito do dimensionamento de uma solda em ângulo realizada numa junta de ângulo: ",
            respostas: ["É dimensionada unicamente pela perna. ", "Pode ser dimensionada pela perna de solda correspondendo aos comprimentos do maior triângulo retângulo inscrito na seção transversal da solda (triângulo isósceles ou não). ", "Pode ser dimensionada pela perna ou pela garganta, sendo que esta última poderá ser somente teórica ou real. ", "Pode ser dimensionada pela garganta teórica a qual corresponde à distância entre a raiz da solda e a face da solda. ", "xxxxxxxxxxx "],
            correta: 2
        },
        {
            pergunta: "Leia a frase: “Polaridade direta: é o tipo de ligação para soldagem com corrente alternada na qual a peça é considerada como pólo negativo e o eletrodo como pólo positivo”. A sentença acima está ",
            respostas: ["Correta quanto à polaridade. ", "Totalmente incorreta. ", "Correta quanto à corrente. ", "Nenhuma das anteriores. ", "Totalmente correta. "],
            correta: 3
        },
        {
            pergunta: "A demonstração da habilidade de um soldador em executar soldas que atendam padrões pré-estabelecidos é denominada: ",
            respostas: ["Exame de soldador. ", "Qualificação de procedimento. ", "Acompanhamento de soldador. ", "Teste de soldador. ", "Qualificação de soldador "],
            correta: 4
        },
        {
            pergunta: "Região da junta soldada que sofre fusão durante a soldagem”. Esta definição refere-se ao termo...	 ",
            respostas: ["Zona fundida ", "Zona de contração. ", "Zona afetada termicamente (ZTA). ", "Zona de fusão. ", "Zona de ligação."],
            correta: 0
        },
        {
            pergunta: "Qual é a definição da descontinuidade “Concavidade”? ",
            respostas: ["Imperfeição local na superfície do metal de base, resultante da abertura do arco elétrico ", "Reentrância na raiz da solda ", "Insuficiência de metal na raiz da solda ", " Solda em ângulo com a face excessivamente côncava ", " Insuficiência de metal na face da solda."],
            correta: 1
        },
        {
            pergunta: "Dentre as opções abaixo, selecione a falsa:	 ",
            respostas: ["Soldagem com passe à ré é aquela na qual trechos do cordão de solda são executados em sentido oposto ao da progressão da soldagem. ", "Solda de selagem é qualquer solda executada em um chanfro localizado entre componentes. ", "Solda de tampão é a realizada através de um furo, circular ou não, num membro de uma junta sobreposta ou em T, unindo-o a um outro. ", "Solda descontínua é aquela na qual a continuidade é interrompida por espaços vazios. ", "Solda por pontos é a executada entre ou sobre componentes sobrepostos na qual a fusão se inicia e ocorre nas superfícies em contato ou se inicia na superfície externa de um dos membros"
 ],
            correta: 1
        },
        {
            pergunta: "Ângulo formado entre a borda preparada do componente e um plano perpendicular à superfície do componente... ",
            respostas: ["Ângulo de trabalho ", "Ângulo do chanfro. ", "Ângulo da junta. ", ") Ângulo de deslocamento. ", "Ângulo do bisel. "],
            correta: 4
        },
        {
            pergunta: "Um metal estranho retido na zona fundida de uma solda é considerado... Assinale a opção correta. ",
            respostas: ["Respingo. ", "Inclusão de escória. ", "Inclusão metálica ", "Inclusão de escória que poderá ser alinhada, isolada ou agrupada. ", "xxxxxxxxxxx "],
            correta: 2
        },
        {
            pergunta: "Entende-se por “deposição insuficiente”... ",
            respostas: ["Solda em ângulo com face excessivamente côncava ", " Insuficiência de metal na face da solda. ", "Insuficiência de metal na face do chanfro. ", "Insuficiência de metal entre passes na zona fundida. ", "Reentrância na raiz da solda. "],
            correta: 1
        },
        {
            pergunta: "Podemos dizer que a “diluição” é a participação (percentagem) do metal...............na junta soldada. Complete com a opção correta: ",
            respostas: ["Não-metálico ", "Depositado. ", "Metálico. ", "De base ou de solda anterior. ", "De adição. "],
            correta: 3
        },        
        {
            pergunta: "Das alternativas apresentadas abaixo, assinale a resposta correta:",
            respostas: ["Junta (joint): forma, dimensões e configuração de uma junta antes da soldagem ", "Face da raiz (root face): mínima distância que separa os componentes a serem unidos por soldagem ou processos afins. ", "Profundidade de fusão (depth of fusion): profundidade com que a solda se prolonga na raiz da junta ", "Margem da solda (weld toe): superfície exposta da solda, pelo lado por onde a solda foi executada ", "Raiz da solda (weld root): pontos onde a parte posterior da solda intersecta as superfícies do metal de base "],
            correta: 4
        },
        {
            pergunta: "A seta quebrada ou em zig-zag significa que a mesma aponta para um membro específico da junta que deve ser chanfrado ",
            respostas: ["CERTO ", "ERRADO "],
            correta: 0
        },

        {
            pergunta: "<div>Dada a solda a seguir, selecione a opção correspondente ao seu símbolo:</div><img src='img/image.png' alt='Imagem da questão' />",
            respostas: ["1 ", "3 ", "2 ", "5 ", "4 "],
            correta: 3
        },
        {
            pergunta: "<div>Para a solda a seguir representada numa vista superior (medidas em cm), selecione a opção correta quanto ao símbolo e sua respectiva descrição:</div> <img src='img/image2.jpg' alt='Imagem da questão' /> ",
            
            respostas: [" 2", "3 ", "1 ", "xx ", "xx "],
            correta: 1
        },
        {
            pergunta: "<div>Dado o símbolo a seguir, selecione a opção correspondente à solda a que ele se refere:</div> <img src='img/image3.jpg' alt='Imagem da questão' /> ",
            respostas: ["4 ", "2 ", "3 ", "1 ", "xx "],
            correta: 1
        },
        {
            pergunta: "<div>Dado o símbolo abaixo, selecione entre as opções a seguir a solda a que ele se refere.</div> <img src='img/image4.jpg' alt='Imagem da questão' /> ",
            respostas: ["3 ", "5 ", "4 ", "1 ", "2 "],
            correta: 2
        },
        {
            pergunta: "<div>Dado o símbolo abaixo, selecione entre as opções a seguir a que corresponde a sua descrição.</div> <img src='img/image5.jpg' alt='Imagem da questão' /> ",
            respostas: [" 1a operação: Realizar soldagem de chanfro em K no campo - Combinação de solda de chanfro com solda em ângulo - Profundidade de preparação do bisel: 7mm - Penetração da junta: 10mm - Perna: 12mm - Faceamento, por esmerilhamento com acabamento plano, da solda em ângulo do lado da seta" ,        
            "1a operação: Realizar soldagem de chanfro em K - Combinação de solda de chanfro com solda em ângulo - Profundidade de preparação do bisel: 7mm - Penetração da junta: 10mm - Perna: 12mm",
            ") 1a operação: Realizar soldagem de chanfro em K no campo - Combinação de solda de chanfro com solda em ângulo. - Profundidade de preparação do bisel: 10mm.- Penetração da junta: 7mm.- Faceamento, por esmerilhamento com acabamento plano, da solda em ângulo do lado da seta.", 
            ],
            correta: 0
        },
        {
            pergunta: "A cauda do símbolo é utilizada para anotações como:",
            respostas: ["Símbolo de perfil externo, comprimento da solda espaçamento entre soldas descontínuas. ", "Processo de soldagem, tipo e dimensões do eletrodo e profundidade de preparação do chanfro", "Especificação, processo ou outra referência. ", "Garganta efetiva, profundidade de preparação do chanfro e o símbolo básico de solda.", "Profundidade de preparação do chanfro, o ângulo do chanfro e abertura da raiz."],
            correta: 2
        },
        {
            pergunta: "<div>Dada a solda a seguir, selecione a opção correspondente ao seu símbolo</div> <img src='img/image6.jpg' alt='Imagem da questão' /> ",
            respostas: ["2 ", "3 ", "1 ", "5 ", "4 "],
            correta: 3
        },
        {
            pergunta: "<div>Selecione entre as opções a seguir o símbolo correspondente à solda apresentada.Seção transversal da solda</div> <img src='img/image7.jpg' alt='Imagem da questão' /> ",
            respostas: ["1", "3 ", "2 ", "4 ", "5 "],
            correta: 1
        },
        {
            pergunta: "<div>Determine o símbolo correspondente à solda abaixo: Seção transversal da solda</div> <img src='img/image8.jpg' alt='Imagem da questão' /> ",
            respostas: ["4 ", "1 ", "5 ", " 2", "3 "],
            correta: 5
        },
        {
            pergunta: "<div>Determine entre as opções a seguir o símbolo correto correspondente à solda apresentada:</div> <img src='img/image9.jpg' alt='Imagem da questão' /> ",
            respostas: ["4", "3 ", "5 ", "2 ", "1 "],
            correta: 1
        },
        {
            pergunta: "<div>Dada a solda abaixo, selecione entre as opções a seguir o símbolo que a ela se refere.</div> <img src='img/image10.jpg' alt='Imagem da questão' /> ",
            respostas: ["1", "5 ", "3 ", "2 ", "4 "],
            correta: 1
        },
        {
            pergunta: "<div>Selecione entre as opções a seguir o símbolo correspondente à solda apresentada.Seção transversal da solda.</div> <img src='img/image11.jpg' alt='Imagem da questão' /> ",
            respostas: ["2", "4 ", "5 ", "3 ", "1 "],
            correta: 3
        },
        {
            pergunta: "<div>Selecione, entre as opções, o símbolo correspondente à solda a seguir.Seção transversal da solda.</div> <img src='img/image12.jpg' alt='Imagem da questão' /> ",
            respostas: ["4", "2 ", "5 ", "3 ", "1 "],
            correta: 5
        },
        {
            pergunta: "<div>. Determine entre as opções a seguir o símbolo correto correspondente à solda apresentada:</div> <img src='img/image13.jpg' alt='Imagem da questão' /> ",
            respostas: ["5", "4 ", "1 ", "3 ", "2 "],
            correta: 5
        },
        {
            pergunta: "<div>. Dada a solda abaixo, selecione entre as opções a seguir o símbolo que a ela se refere:</div> <img src='img/image14.jpg' alt='Imagem da questão' /> ",
            respostas: ["3", "1 ", "5", "4 ", "2 "],
            correta: 2
        },
        {
            pergunta: "<div>. Dentre as causas mais frequentes associadas a descontinuidades no processo de soldagem a arco submerso, assinale a opção abaixo que é falsa.</div>",
            respostas: ["Porosidade: alta velocidade de avanço da máquina (resfriamento rápido da solda).", "Falta de fusão: baixa energia de soldagem ", "Inclusão de escória: remoção mal feita de escória na soldagem em vários passes.", " Falta de penetração: alinhamento incorreto da máquina de solda com a junta a ser soldada. ", ") Mordedura: corrente de soldagem muito baixa."],
            correta: 4
        },
        {
            pergunta: "Dentre as causas mais frequentes associadas a descontinuidades no processo de soldagem a arco submerso, assinale a opção abaixo que é falsa.",
            respostas: ["", "", "", "", ""],
            correta: 4
        },
        {
            pergunta: "Uma das desvantagens da soldagem por arco submerso é que o mesmo é limitado às posições plana e horizontal em ângulo (2F):",
            respostas: ["CERTO", "ERRADO", ],
            correta: 0
        },
        {
            pergunta: "Assinale a alternativa correta:",
            respostas: [") No processo eletrogás, o arco elétrico é mantido durante todo o processo.", "No processo eletrogás, visto que as soldas são feitas num único passe, não existe possibilidade de ocorrer trincas a quente.", "A grande desvantagem dos processos eletroescória e eletrogás são as deformações, embicamento, que ocorrem nas uniões de topo.", "Os altos aquecimentos gerados no processo eletrogás provem da elevada resistividade da escória a passagem da corrente elétrica (efeito Joule).", "Pode ocorrer porosidade no processo eletroescória quando por um motivo qualquer é interrompido o ciclo de soldagem."],
            correta: 0
        },
        {
            pergunta: "Indique a afirmativa correta referente ao processo de soldagem por eletroescória:",
            respostas: ["Devido ao superaquecimento dispensa a necessidade de tratamento térmico após a soldagem", "É limitado à posição de soldagem vertical.", "A soldagem em chapas finas de alumínio apresenta cordões com excelente acabamento", "A corrente de soldagem passa do eletrodo para o metal base através da escória, por condução elétrica", "Nas uniões de topo tende a provocar deformações do tipo embicamento"],
            correta: 3
        },
        {
            pergunta: "Indique entre as descontinuidades abaixo associadas ao processo de soldagem a gás, aquela que não tem chances de ocorrer:",
            respostas: ["Mordedura.", "Inclusão de escória.", "Porosidade", "Trinca a quente.", "Trinca a frio (fissuração pelo hidrogênio)."],
            correta: 4
        },
        {
            pergunta: "Observe a frase abaixo a respeito do tipo de corrente e sua polaridade no processo de soldagem a arco elétrico com eletrodo revestido. “Corrente contínua polaridade inversa (CC +): eletrodo positivo e a peça negativa. Com essa configuração, produz-se uma maior taxa de fusão do eletrodo, associada a uma menor profundidade de penetração”. A definição está:",
            respostas: [") Incorreta quanto ao eletrodo estar ligado no polo positivo.", "Totalmente correta.", "Incorreta somente quanto à peça estar ligada ao polo negativo.", "Totalmente incorreta.", "Correta somente quanto à taxa de fusão do eletrodo."],
            correta: 5
        },
        {
            pergunta: "<div>. Sobre as transferências metálicas no processo de soldagem MIG/MAG, correlacione à coluna da direita com a da esquerda.</div> <img src='img/image15.jpg' alt='Imagem da questão' /> ",
            respostas: ["C A B D", "B C A D. ", " B A A D.", " B A D C ", "B A C D. "],
            correta: 2
        },
        {
            pergunta: "8. O processo de soldagem “Arame-tubular” se diferencia do processo “MIG/MAG” devido a... Assinale a opção verdadeira.	",
            respostas: ["Empregar menores intensidades de corrente comparativamente ao MIG/MAG.", "Soldar apenas com a transferência em spray, enquanto que o MIG/MAG solda com todas as transferências.", "Utilizar o consumível arame tubular que, dependendo da sua classificação, não requer proteção gasosa adicional.", "Requerer menos habilidade por parte do soldador.", "Não requer gás de proteção, visto que a proteção é sempre devida ao fluxo no interior do arame."],
            correta: 2
        },
        {
            pergunta: "9. Qual das afirmativas abaixo referente à transferência do metal de adição no processo de soldagem MIG é correta:	",
            respostas: ["A transferência por spray somente se aplica nas posições vertical e sobre-cabeça.", "Na transferência por curto circuito a fusão inicia-se globularmente e a gota vai aumentando de tamanho ate tocar a poça de fusão, produzindo um curto circuito. É indicado para seções espessas", ") A transferência globular ocorre com corrente baixa em relação ao tamanho do eletrodo usado sendo o metal transferido em forma de glóbulos onde os diâmetros destes são maiores que o eletrodo", "Transferência a arco pulsante ocorre quando se utiliza corrente baixa associada a pulsos de baixa corrente sendo a transferência do metal de adição feita pelo jato de gotículas durante esse pulso", "A transferência por spray pulverização axial ocorre com corrente baixa, sendo o metal de adição fundido transferido através do arco como gotículas finas"],
            correta: 2
        },
        {
            pergunta: "Analisando o processo de soldagem manual com eletrodo revestido, assinale a alternativa incorreta:",
            respostas: ["Pode ser usado numa ampla variedade de combinações de metal de adição", "Este processo é muito usado na indústria, devido à simplicidade de sua fonte de energia, à qualidade das soldas e do baixo custo dos equipamentos de soldagem e dos consumíveis.", "Processo que permite soldar em todas as posições", "Neste processo de soldagem o suprimento de energia deve ser apenas por corrente alternada (transformadores) ou por corrente contínua (geradores ou retificadores) com polaridade direta somente", "Pode ser usado numa ampla variedade de configurações de juntas encontradas na soldagem industrial"],
            correta: 3
        },
        {
            pergunta: "Em relação às técnicas de pré ou pós-aquecimento, podemos afirmar que:",
            respostas: ["O aquecimento por chama apresenta como vantagem, uma distribuição bastante uniforme de temperatura.", "O método de aquecimento por indução tem como principal vantagem o baixo custo do equipamento utilizado", "Uma vantagem do aquecimento por material exotérmico é de ser o mesmo aplicável para pré-aquecimento em todos os materiais", "O aquecimento por resistência elétrica é contínuo e uniforme.", "Depois de iniciado o aquecimento por resistência elétrica não há possibilidade de ajustar a temperatura."],
            correta: 3
        },
        {
            pergunta: "2. Assinale dentre as características abaixo a única verdadeira com relação ao processo de soldagem a arco submerso:	",
            respostas: ["Equipamento de baixo custo.", "Solda em todas as posições.", "Taxa de deposição baixa.", "Requer habilidade manual do operador.", "Requer montagem da junta com ajustes precisos."],
            correta: 4
        },
        {
            pergunta: "Na soldagem TIG, se for diminuído o ângulo de cone do eletrodo de tungstênio (ângulo mais agudo), a largura do cordão tende a reduzir-se e a penetração aumenta",
            respostas: ["CERTO", "ERRADO"],
            correta: 0
        },
        {
            pergunta: "Das causas abaixo, quanto à falta de penetração no processo de soldagem a arco submerso, qual é a única verdadeira?",
            respostas: ["Corrente muito alta.", "Alta energia de soldagem.", "Excesso de fluxo.", "Limpeza inadequada.", "Alinhamento incorreto entre o arame-eletrodo e a junta."],
            correta: 4
        },
        {
            pergunta: "5. No processo de soldagem a arco submerso, os elementos de liga são adicionados através de:	",
            respostas: ["Escória.", "Fluxo e Arame.", "Metal de base.", "Arame", "Revestimento do eletrodo."],
            correta: 1
        },
        {
            pergunta: "Indique o processo de soldagem no qual a limpeza do chanfro e bordas deve ser ao metal brilhante:",
            respostas: ["Eletrodo revestido.", "Arco submerso.", "MIG/MAG.", "TIG.", "N.R.A"],
            correta: 3
        },
        {
            pergunta: "No arco submerso, em virtude do arco elétrico de soldagem estar encoberto por um fluxo, não há necessidade de se usar óculos de proteção com filtro:",
            respostas: ["CERTO", "ERRADO"],
            correta: 0
        },
        {
            pergunta: "8. Indique a afirmativa correta a respeito do processo de soldagem a gás:",
            respostas: [" Utiliza um gás combustível combinado com o gás acetileno na produção de chama.", "A fonte de calor por ser uma chama requer tempo menor de aquecimento para fundir o metal de base e iniciar a soldagem. ", "Dependendo da aplicação, a solda pode ser feita sem emprego de metal de adição. ", "Pela forma de aquecimento, chama, a ZTA resultante é estreita. ","Por razões econômicas, é empregado na soldagem de seções espessas (chapas grossas). "],
            correta: 5
        },
        {
            pergunta: "Analisando o processo de soldagem manual com eletrodo revestido (SMAW – Shielded metal arc welding), assinale a alternativa incorreta:",
            respostas: ["Neste processo de soldagem o consumível é o eletrodo revestido, formado por um núcleo metálico (alma) e pelo revestimento. ", "O processo de soldagem com eletrodo revestido pode ser utilizado com CC-, CC+ ou CA ", "Processo de soldagem que permite soldar em todas as posições e em todos os tipos de juntas ", "Este processo de soldagem é rápido devido à alta taxa de deposição ","Neste processo de soldagem, o metal fundido do eletrodo é transferido através do arco elétrico e se combina com o metal de base, também fundido pela ação do arco, na poça de fusão "],
            correta: 3
        },
        {
            pergunta: "Qual das alternativas a seguir não é função do gás de proteção utilizados nos processos MIG/MAG (GMAW)?	",
            respostas: ["Influenciar na penetração e formato do cordão. ", "Influenciar o tipo de transferência metálica do consumível para a peça ", ") Excluir a atmosfera do contato com o metal de solda fundido ", ") Proteger a poça de fusão ","Adicionar elementos de liga no metal de solda "],
            correta: 4
        },
        {
            pergunta: "1. Dadas as afirmativas abaixo a respeito do processo de soldagem a arco submerso indique a falsa:	",
            respostas: ["Soldagem de chapas espessas de aço para construção de vasos de pressão, soldagem de tanques e tubos de grandes diâmetros, são exemplos de aplicações do processo", "Pode ser empregado para união de metais ou deposições superficiais no metal de base (revestimento). ", "O revestimento do arame-eletrodo empregado no processo tem as mesmas funções do revestimento do eletrodo revestido. ", "Uma das vantagens do processo é a alta penetração das soldas por ele produzidas. ","Propicia altas taxas de deposição podendo funcionar semi-automático ou totalmente automatizado. "],
            correta: 2
        },
        {
            pergunta: "No processo de soldagem a arco submerso, a corrente alternada possui como vantagem:",
            respostas: ["Redução do sopro magnético. ", "Grande aquecimento do eletrodo. ", "Alta penetração. ", "Baixa penetração. ","Grande aquecimento do metal de base. "],
            correta: 0
        },
        {
            pergunta: "Assinale o item que pode ser suprimido do equipamento para a soldagem por eletrogás, quando for utilizado arame tubular autoprotegido (self-shielded):",
            respostas: ["Pistola de soldagem.", "Sapatas de retenção. ", "Alimentador do arame. ", "Suprimento de gás.","Fonte de energia. "],
            correta: 3
        },
        {
            pergunta: "O alimentador de arame utilizado no processo de soldagem eletrogás é similar aos dos processos de soldagem, versão automática, MIG/MAG e com Arame Tubular:",
            respostas: ["CERTO ", "ERRADO "],
            correta: 0
        },
        {
            pergunta: "Relativo a tratamento térmico localizado, qual das opções abaixo é falsa",
            respostas: ["Indução: as bobinas têm longa vida ", "Resistência elétrica: aquecimento contínuo e uniforme. ", "Por chama: grande precisão e repetibilidade. ", "Por chama: portátil e de baixo custo. ","Material exotérmico: uma vez iniciado o tratamento térmico, não há nenhuma possibilidade de ajuste "],
            correta: 2
        },
        {
            pergunta: "Com relação ao tratamento térmico de alívio de tensões, é verdadeiro afirmar:	",
            respostas: ["Tem como objetivo principal possibilitar ao hidrogênio difundir-se para fora da solda. ", "A temperatura de tratamento, temperatura do patamar, deve ser controlada e oscilar apenas dentro de limites pré determinados. ", "A taxa de aquecimento nem sempre necessita ser uniforme e controlada. ", "O tempo de permanência na temperatura, se excedido, aumenta a efetividade do tratamento. ",") A taxa de resfriamento mais alta reduz o risco de ocorrência de trincas. "],
            correta: 4
        },
        {
            pergunta: "Assinale, entre as classificações AWS dos consumíveis abaixo, o que pode ser indicado para soldagem de aços carbono pelo processo de soldagem TIG (GTAW):",
            respostas: [" ER 70S-3.", "E70T-1M ", "E6010. ", "EL8K. ","E8018-B3. "],
            correta: 0
        },
        {
            pergunta: "Para a soldagem de uma junta na posição vertical descendente, o consumível mais indicado, segundo sistema de dígitos das classificações da AWS, é:",
            respostas: [" E-XX4X. ", "E-4XXX. ", "E-XXX3.", "E-XX1X ","E-X4XX "],
            correta: 0
        },
        {
            pergunta: "Quanto às especificações AWS de consumíveis de soldagem, marque a opção incorreta:	",
            respostas: ["As especificações AWS estabelecem as condições de testes para os consumíveis a serem realizados pelo fabricante. ", "Especificações AWS podem ser utilizadas pelo código ASME, que emprega a abreviatura SF antes do código de especificação. ", "Para enquadrarem-se numa especificação AWS, os consumíveis devem atender a requisitos específicos tais como propriedades mecânicas, sanidade e composição química do metal depositado. ", "Todos os consumíveis de soldagem existentes geralmente estão cobertos por uma especificação AWS ","As especificações AWS são criadas basicamente em função dos diversos processos de soldagem. "],
            correta: 4
        },
        {
            pergunta: "Sabe-se que a seleção do consumível está condicionada ao processo de soldagem. Dentre os fatores que influenciam na escolha do processo de soldagem para uma determinada aplicação, marque a opção INCORRETA:",
            respostas: ["Tipo de fonte de energia. ", "Posição de soldagem. ", "Geometria e tipo da junta. ", "Ambiente de soldagem. ","Produtividade do processo. "],
            correta: 3
        },
        {
            pergunta: "A respeito dos “gases de proteção” empregados em soldagem assinale a opção correta:",
            respostas: ["Os gases são classificados pela AWS em função de suas composições químicas ", "O gás argônio comparativamente ao gás CO2 apresenta como desvantagens menor estabilidade do arco e consequentemente favorece a mais respingos na solda ", "O gás inerte ideal para soldagem de metais que apresentam alta condutibilidade térmica é gás argônio. ", "O gás de proteção ativo somente é empregado em soldagem quando misturado com um gás inerte. ","Em soldagem somente utilizam-se gases inertes afim de não haja a contaminação da solda. "],
            correta: 0
        },
        {
            pergunta: "7. Considerando-se o gás de proteção com classificação AWS SG-AC-25, podemos afirmar que o mesmo se trata:",
            respostas: ["De uma mistura gasosa especial. ", ") De um gás de proteção inerte. ", "De um gás simples formado apenas por CO2. ", "Mistura com 75 % de gás CO2 e o restante de gás Argônio. ","Mistura com 25 % de gás CO2 e o restante de gás Argônio (75 %). "],
            correta: 4
        },
        {
            pergunta: "Sobre eletrodos revestidos para soldagem a arco, assinale a opção INCORRETA:	",
            respostas: ["Os de revestimento celulósicos favorecem a obtenção de soldas com baixíssimo teor de hidrogênio e baixo nível de impurezas. ", "Os para soldagem de aços ao carbono e aços de baixa liga possuem alma contendo baixo teor de carbono. ", "Os de revestimento básico são altamente higroscópios. ", "Os revestimentos dos mesmos têm função elétrica, física e metalúrgica ","Os de revestimento celulósico permitem obter grande penetração. "],
            correta: 0
        },
        {
            pergunta: "O critério da AWS de classificação dos eletrodos nus (arames) e vareta de aço inoxidável para soldagem de aço inoxidável, relacionado com o consumível AWS ER 308, baseia-se unicamente em:",
            respostas: ["Composição química do metal de solda não diluído. ", "Composição química do próprio consumível. ", "xxx ", "xxx ","xxx "],
            correta: 1
        },
        {
            pergunta: "Qual dos consumíveis abaixo é indicado para soldagem de aço inoxidável?	",
            respostas: [" E 7027-A1 ", " E 70T-1", "E 6010. ", "R 45 ","ER 209 "],
            correta: 4
        },
        {
            pergunta: "Assinale, entre as classificações da AWS dos consumíveis abaixo, o que pode ser indicado para a soldagem pelo processo GTAW (TIG):",
            respostas: ["E16-8-2-15. ", "R 60 ", "E 7018 ", "ER 308 ","E 70-EL8K "],
            correta: 3
        },
        {
            pergunta: "Os elementos de liga introduzidos no metal de solda pelos eletrodos de aços baixa liga para soldagem manual a arco com eletrodo revestido, especificação AWS SFA/A 5.5, são provenientes:",
            respostas: [") Consumíveis são todos os materiais empregados unicamente na deposição da solda. ", "Os metais de adição nas especificações da AWS são agrupados em função da composição química do metal de solda ou do consumível e do processo de soldagem. ", "Os gases inertes não são enquadrados em nenhuma especificação da AWS. ", "Consumível sob a forma de arame tubular e o gás CO2 são empregados na soldagem pelo processo MIG/MAG (GMAW). ","Os gases acetileno e propano são classificados como gases comburentes na soldagem a gás. "],
            correta: 1
        },
        {
            pergunta: "<div>. Correlacione, conforme determina a classificação de consumíveis segundo a AWS, o tipo de consumível com a nomenclatura, letra, correspondente.</div> <img src='img/image16.jpg' alt='Imagem da questão' /> ",
            respostas: ["C D E B A.", "B D C E A ", "C D B E A.  ", "A D B E C. ", "A B D E C"],
            correta: 2
        },
        {
            pergunta: "A respeito das funções do fluxo na soldagem a arco submerso qual delas não se aplica:",
            respostas: ["Purificar a poça de fusão. ", "Proteger a poça de fusão. ", "Influenciar nas propriedades mecânicas do metal de solda. ", ") Influenciar no acabamento do cordão de solda. ","Revestir o arame-eletrodo evitando a sua contaminação. "],
            correta: 4
        },
        {
            pergunta: " Com base na classificação do consumível ER308L, pode-se afirmar que:	",
            respostas: ["O 3º dígito é formado exclusivamente por algarismos ", "Quando o consumível a ser utilizado for do tipo “fita”, a letra “R” deverá ser substituída pela letra “Q”: EQ ", "Este consumível pode ser utilizado pelo processo Eletrodo Revestido ", "São eletrodos de aço inoxidável para soldagem a arco com arame tubular (FCAW) e varetas com núcleo fluxado de aço inoxidável para soldagem TIG (GTAW) ","Tem mesma composição química do ER308, porém com maior teor de carbono."],
            correta: 1
        },
        {
            pergunta: "2. O eletrodo revestido AWS E8016 - B2 é indicado para a soldagem...",
            respostas: ["Apenas na posição horizontal. ", "De aços inoxidáveis austeníticos. ", "Apenas na posição sobre-cabeça. ", "De aços carbono-manganês. ","De aços baixa liga ao Cromo-Molibidênio. "],
            correta: 4
        },
        {
            pergunta: "Assinale, entre as classificações da AWS dos consumíveis abaixo, o que pode ser indicado para a soldagem de aços-carbono pelo processo oxi-gás:",
            respostas: [" E8018-B2", "E6010 ", "R318 L ", "EL8K ","R 45 "],
            correta: 4
        },
        {
            pergunta: "4. O eletrodo classificação AWS EM13K é específico para qual processo de soldagem?	",
            respostas: ["MIG ", "MAG ", "TIG ", "Arco Submerso ","Arco elétrico manual com eletrodo revestido. "],
            correta: 3
        },
        {
            pergunta: "O consumível AWS E6023 é recomendado para emprego nas posições...",
            respostas: ["Horizontal, vertical descendente e sobrecabeça ", "Horizontal para solda em ângulo e plana para soldagem de juntas de topo e de ângulo. ", "Vertical ascendente e descendente. ", "Horizontal e sobrecabeça. ","Todas as posições. "],
            correta: 1
        },
        {
            pergunta: "A classificação AWS R 60 refere-se a. Indique a opção correta.",
            respostas: ["Arame eletrodo para soldagem MIG / MAG. ", "Vareta para soldagem a gás de tubos de aço carbono sem especificação de limite de resistência mínimo ", "Vareta para soldagem TIG. ", "Vareta para soldagem a gás de aços baixa liga e alta resistência ",") Vareta para soldagem a gás de tubos de aço carbono cujo limite mínimo de resistência à tração do metal de solda é de 60.000 psi. "],
            correta: 4
        },
        {
            pergunta: "Dentre as classificações de consumíveis abaixo, qual de refere a arame sólido para soldagem pelo processo MIG / MAG:",
            respostas: ["AWS E70T-1M. ", "AWS ER 70C-6X ", "AWS ER 70S-6. ", "AWS E7018.  ","AES EQ 309. "],
            correta: 2
        },
        {
            pergunta: "A especificação AWS A-5.2 é designada para agrupar",
            respostas: ["Eletrodos nús e varetas para soldagem de aço inoxidável ", "Eletrodos de aço inoxidável para soldagem manual a arco com eletrodo revestido (SMAW) ", "Varetas de aços ao carbono e baixa liga para soldagem oxi-gás (OFW) ", "Eletrodos de aço ao carbono para soldagem a arco com arame tubular (FCAW).","Eletrodos de aço ao carbono e baixa liga, e fluxos para soldagem eletroescória (ESW) "],
            correta: 2
        },
        {
            pergunta: "Na operação de soldagem existem fatores de risco que poderão agir isoladamente ou em conjunto e que, se não observados, trarão danos à saúde do trabalhador. Tais fatores estão citados abaixo, exceto:",
            respostas: ["Fumos e gases. ", "Ruído.", "Eletricidade", "Exaustão","Radiação "],
            correta: 3
        },
        {
            pergunta: "Quanto ao ambiente de soldagem, marque a opção correta:",
            respostas: ["Quanto à iluminação, quando houver boxes, estes devem estar providos de iluminação individual. ", "A ventilação natural é inaceitável para qualquer operação de soldagem. ", "As operações de soldagem e corte, sempre que possível, devem realizadas em ambientes que, mesmo sem serem projetados, basta que possuam boa ventilação ", "Quanto ao Layout, materiais combustíveis e inflamáveis podem ser mantidos no ambiente, desde que haja sistema de combate a incêndio. ","No ambiente de soldagem, o piso deve ser de madeira isolante e/ou concreto antiderrapante "],
            correta: 0
        }, {
            pergunta: "<div>A respeito da radiação devido ao arco elétrico na soldagem e também de seus efeitos, correlacione à coluna da direita com a da esquerda.</div> <img src='img/image17.jpg'alt='Imagem da questão' />",
            respostas: ["D C B A. ", "A B C D. ", " D C A B.", "D B C A. ","C D B A. "],
            correta: 0
        },        
        {
            pergunta: "Quanto aos EPIs (Equipamento de proteção individual) que devem ser usados pelo soldador corriqueiramente durante as operações de soldagem, marque dentre as opções abaixo, a que não corresponde a este grupo.",
            respostas: [") Perneira. ", "Joelheira ", "Casacos. ", "Máscara com fixação por carneira. "," Luvas de raspa de couro."],
            correta: 1
        },
        {
            pergunta: "A máscara de solda deve possuir lente filtrante e de cobertura. A respeito da numeração da lente filtrante assinale a opção verdadeira.",
            respostas: ["Quanto maior o numero menor a proteção oferecida ", "Quanto maior o número quanto maior a proteção oferecida. ", "xxx ", "xxx ","xxx "],
            correta: 1
        },
        {
            pergunta: "Com relação a fumos e gases em soldagem, assinale a opção INCORRETA.",
            respostas: ["Causam efeitos como: tonteiras, náuseas, irritação nos olhos e pele. ", " Os gases de proteção, (por exemplo: gás argônio no processo MIG), não apresentam toxicidade e por esse motivo não causam qualquer risco para o soldador", "A rápida exposição ao cádmio, que é um metal extremamente tóxico, poderá ser letal. ", "Contém elementos químicos e partículas sólidas que se inaladas são prejudiciais à saúde. ","Exposição prolongada a fumos pode causar doenças crônicas como a siderose (acúmulo de ferro nos pulmões). "],
            correta: 1
        },
        {
            pergunta: "7. Com relação à eletricidade e seus efeitos no organismo, indique abaixo a opção correta:	",
            respostas: ["O choque da tensão secundária de uma máquina de solda é muito mais perigoso do que o da tensão primária. ", "O trabalho com segurança é aquele no qual possuímos a maior resistência possível associada a menor tensão possível. ", "Quanto menor a intensidade de corrente maior será o seu efeito no organismo. ", "A resistência oferecida por um dado elemento (por ex: luva de couro) é maior estando este molhado comparativamente a seco. ",") O trabalho com segurança é aquele no qual possuímos a menor resistência possível associada a maior tensão possível. "],
            correta: 1
        },
        {
            pergunta: "Entre as opções a seguir relacionadas com o “ambiente de soldagem”, indique a falsa:",
            respostas: ["Layout – as passagens e rotas de fuga devem ser mantidas obrigatoriamente livres e desimpedias ", "Pintura – devem ser utilizadas cores vivas e refletivas a fim de clarear ao máximo o ambiente. ", "Ventilação – a transversal deve ser livre, sem bloqueios por paredes, divisórias ou outras paredes. ", "Piso – deve proporcionar um bom isolamento térmico, ser de concreto antiderrapante ou com revestimento a prova de fogo. ","Iluminação – as luzes, artificial ou natural, devem incidir sobre a área de trabalho, vindas do alto e por trás. "],
            correta: 1
        },
        {
            pergunta: "Sobre cuidados particulares aos processos de soldagem – “soldagem a arco elétrico”, qual entre as opções a seguir NÃO não se aplica:",
            respostas: [") Aterramento - deve ser empregado cabo terra não sendo permitidas conexões para aterramento em correntes, arames, guindastes, guinchos etc. ", "Porta eletrodo – nunca deve ser resfriado pela imersão em água. ", "Máquina de solda – deverá ser desconectada da fonte de energia quando tiver que ser movimentada. ", "Cabos e conexões - devem ser verificados se são eficazes mecânica e eletricamente para as correntes de soldagem e se estão secos e livres de óleo e graxa ","Cabo de solda – em áreas confinadas, a fim de evitar que o cabo de solda se arraste, o soldador deverá enrolá-lo em torno do seu braço fazendo uma bobina. "],
            correta: 4
        },
        {
            pergunta: "Sobre cuidados particulares aos processos de soldagem – “soldagem e corte a gás”, qual entre as opções a seguir NÃO se aplica:",
            respostas: ["Na ausência de ar comprimido, o oxigênio pode ser usado para ventilar espaços confinados e também para remover poeira de roupas ", "O oxigênio sob alta pressão reage violentamente com óleo ou graxa. ", "Os cilindros de gases (oxigênio e acetileno), nunca devem ser estocados em locais próximos a materiais combustíveis. ", "O regulador de oxigênio deve sempre estar limpo.","Os cilindros de acetileno devem ser usados na posição vertical. "],
            correta: 5
        },
        {
            pergunta: "A micro-estrutura obtida num aço carbono de médio teor de carbono, que tenha sofrido, após austenitização, resfriamento brusco em água fria, denomina-se:",
            respostas: [") Perlita. ", "Cementita. ", "Martensita. ", "Austenita. ","xxx "],
            correta: 2
        },
        {
            pergunta: " A respeito da presença de átomos de carbono numa rede cristalina de ferro, assinale a opção verdadeira:",
            respostas: ["Não se solubiliza no ferro. ", "O carbono é uma impureza que deve ser evitada, pois ao formar liga com o ferro constituindo o aço, promove redução na resistência mecânica comparativamente a que teria o ferro puro (metal puro). ", "Por ter dimensões semelhantes aos dos átomos de ferro, desloca alguns desses átomos ocupando seus lugares originais na rede. ", "Localiza-se nos interstícios da rede cristalina, entre os átomos de ferro. ","Localiza-se nos espaços atômicos vazios, não ocupados pelo átomo de ferro. "],
            correta: 3
        },
        {
            pergunta: "O tipo de solução sólida em que os átomos de natureza diferente possuem dimensões semelhantes aos átomos do metal puro, é...",
            respostas: ["Solução sólida intersticial. ", "Solução sólida substitucional. ", "xxx ", "xxx ","xxx "],
            correta: 5
        },
        {
            pergunta: "Em relação às ligas metálicas, indique em qual tipo de solução sólida há deslocamento de átomos de metal puro de seus lugares originais.",
            respostas: ["Solução sólida intersticial. ", "Solução sólida substitucional. ", " xxx", " xxx","xxx "],
            correta: 5
        },
        {
            pergunta: "Sabe-se que os contornos de grão são regiões onde a ordenação dos átomos é abruptamente desfeita. Em vista disso, pergunta-se se a difusão é mais rápida ou mais lenta nos contornos de grãos?",
            respostas: ["É mais lenta nos contornos que no interior do grão. ", "É mais rápida nos contornos que no interior do grão. ", "xxx ", "xxx "," xxx"],
            correta: 1
        }, {
            pergunta: "Qual tratamento térmico é executado através do aquecimento da peça à temperatura apropriada (conforme procedimento) e pela manutenção da mesma por um determinado tempo, seguida de um resfriamento uniforme, com o intuito de impedir a introdução de novas tensões, e deve-se manter a temperatura abaixo da temperatura crítica para impedir mudanças na microestrutura ou dimensões da peça?",
            respostas: ["Recozimento ", "Revenimento. ", "Têmpera ", "Alívio de tensões","Normalização "],
            correta: 3
        },
        {
            pergunta: "1. Indique a opção correta a respeito da difusão:	",
            respostas: [") A difusão é um fenômeno consiste numa movimentação atômica no estado sólido a qual diminui com o aumento da temperatura", "Não existe o fenômeno de difusão no estado sólido, apenas no estado líquido. ", ") Denomina-se difusão ao fenômeno, no estado sólido, de um átomo se deslocar de sua posição inicial de equilíbrio. Quanto maior a temperatura, maior será a movimentação atômica. ", "A difusão corresponde à movimentação atômica no estado sólido caracterizado por intensa movimentação atômica no centro dos grãos, praticamente não existindo nos seus contornos. ","A difusão é um fenômeno caracterizado por uma movimentação atômica que independe da temperatura. "],
            correta: 2
        },
        {
            pergunta: " Indique, entre as opções abaixo a correta sobre o tratamento térmico têmpera e revenido.	",
            respostas: ["Aquecimento a uma temperatura acima da zona crítica, austenitização, resfriamento lento e reaquecimento a temperaturas bastante inferiores à temperatura crítica. ", "Acompanha o tratamento térmico de têmpera atenuando os inconvenientes desta quanto à obtenção de martensita com elevada dureza e baixa tenacidade. ", " Aquecimento a uma temperatura acima da zona crítica, austenitização e resfriamento ao ar.", ") É feito após a têmpera com o propósito de aumentar a dureza da martensita e reduzir a sua tenacidade. ","Aquecimento a uma temperatura abaixo da zona crítica, austenitização, resfriamento rápido e reaquecimento a temperaturas bastante inferiores à temperatura crítica. "],
            correta: 1
        },
        {
            pergunta: "6. Assinale a alternativa CORRETA:	",
            respostas: [") Quanto menor a condutibilidade térmica de um material menor será sua deformação durante a soldagem ", "Metais com maiores coeficientes de expansão térmica apresentarão maiores deformações durante a soldagem ", ") Aços que tiverem eliminado suas tensões residuais através do tratamento térmico de alívio de tensões não sofrerão durante a soldagem ", "Aços de alta resistência normalmente apresentam maiores deformações em comparação com o aço carbono por possuírem maiores limites de escoamento ","Os metais, somente no estado líquido, apresentam estrutura cristalina "],
            correta: 1
        },
        {
            pergunta: ". Referente à metalurgia de soldagem assinale a opção correta:",
            respostas: ["O aumento na temperatura de um metal, ou liga metálica no estado sólido, implica em uma maior vibração dos átomos em torno da sua posição de equilíbrio, o que proporciona a possibilidade de uma movimentação atômica no estado sólido, a que se chama de difusão ", "Um metal no estado líquido, em um processo de resfriamento lento e contínuo, atinge a temperatura de solidificação, algumas partículas sólidas, chamadas de grãos, começam a se formar. Com a contínua diminuição da temperatura, novos grãos são formados até que estes formam uma única partícula sólida chamado de núcleo ", " A repartição térmica possibilita a interpretação ou previsão das transformações metalúrgicas, enquanto que o ciclo térmico permite determinar a extensão das zonas onde se passam tais fenômenos", "O sistema cristalino hexagonal compacto possui 4 átomos, como número médio de átomos por célula unitária ","Na soldagem de juntas dissimilares, não há necessidade de verificar a diluição para previsão dos constituintes e propriedades da solda "],
            correta: 0
        },
        {
            pergunta: "Dentre os tratamentos térmicos a seguir, qual deles consiste em aquecer o material a temperaturas bastante inferiores à temperatura crítica, permitindo certa acomodação do sistema cristalino e, como consequência, a diminuição da dureza e o aumento da tenacidade da peça? Este tratamento térmico normalmente atenua os inconvenientes produzidos pela têmpera.",
            respostas: ["Revenimento ", " Têmpera ", "Alívio de tensões ", "Recozimento. ","Normalização "],
            correta: 0
        },
        {
            pergunta: "2. Sobre os aços cromo-molibdênio, assinale a opção falsa:	",
            respostas: ["Os que contêm mais de 2 1/2% de Cr são utilizados para serviços com alta corrosividade do meio. ", "Nas soldas desses aços que não podem sofrer tratamento térmico após a soldagem, utilizam-se frequentemente metais de adição de aço inox. austenítico (a austenita retém o hidrogênio). ", ") Estes materiais são imunes à fissuração pelo hidrogênio quando soldados homogeneamente. ", ") Devido à alta temperabilidade desses materiais, na soldagem devem ser considerados os controles térmicos, composição do metal de adição e os tratamentos térmicos após soldagem. ","Soldas homogêneas destes materiais necessitam de tratamento térmico de alívio de tensões. "],
            correta: 0
        },
        {
            pergunta: "A estrutura cristalina, mesmo de um metal puro, sempre conterá átomos diferentes daqueles da matriz, denominados átomos solutos. Com relação à classificação / participação destes átomos selecione entre as opções a seguir a correta:",
            respostas: [" Elementos de ligas: quando são deliberadamente adicionados para melhorar as propriedades mecânicas.", "Os metais ditos puros não contêm átomos solutos. ", ") Impurezas: quando são deliberadamente adicionados para melhorar as propriedades mecânicas. ", "Elementos de liga: quando decorrem espontaneamente do processo de fabricação. ",") Os átomos solutos, tanto “impurezas” quanto “elementos de liga”, decorrem espontaneamente do processo de fabricação. "],
            correta: 0
        },
        {
            pergunta: " Entre as opções a seguir a respeito do mecanismo de “difusão”, indique a única opção INCORRETA.	",
            respostas: ["Pode se dar pela troca de posições entre átomos ", "Aumenta a possibilidade de ocorrer com a redução de temperatura ", "Quando ocorre num determinado material acarretará propriedades mais homogêneas ", "É precedida pelo aumento das vibrações atômicas em torno de suas posições de equilíbrio ","Consiste numa movimentação atômica no estado sólido. "],
            correta: 1
        },
        {
            pergunta: "Das alternativas apresentadas a seguir, identifique os sistemas cristalinos da Ferrita (alfa), Austenita e Ferrita Delta, respectivamente, encontrados no aço carbono:",
            respostas: ["Cúbico de Corpo Centrado, Cúbico de Corpo Centrado e Cúbico de Face Centrada ", ") Cúbico de Corpo Centrado, Hexagonal Compacto e Cúbico de Corpo Centrado ", ") Cúbico de Corpo Centrado, Cúbico de Face Centrada e Cúbico de Corpo Centrado ", "Cúbico de Face Centrada, Cúbico de Face Centrada e Hexagonal Compacto ",") Hexagonal Compacto, Cúbico de Corpo Centrado e Cúbico de Face Centrada "],
            correta: 2
        },
        {
            pergunta: "pré-aquecimento, pode-se afirmar que...",
            respostas: ["Reduz a velocidade de resfriamento da junta soldada minimizando a formação da martensita ", "È o principal tratamento térmico utilizado para a eliminação de hidrogênio da junta soldada ", "Reduz o risco de fissuração à quente em aços com elevados teores de fósforo e enxofre ", "Não interfere nas tensões de contração dadas às baixas temperaturas do tratamento ","Promove a elevação da velocidade de resfriamento da junta soldada "],
            correta: 0
        },
        {
            pergunta: "Dentre as alternativas abaixo, assinale aquela que indica propriedades desejáveis a um bom dispositivo de fixação e montagem na soldagem de junta de topo em aço carbono:",
            respostas: ["Ser fabricado em aço inoxidável. ", ") Impedir qualquer tipo de contração da solda. ", "Impedir a contração longitudinal do cordão de solda. ", ") Permitir, preferencialmente, a livre contratação transversal e limitar o embicamento.","Permitir o livre embicamento. "],
            correta: 3
        },
        {
            pergunta: "A respeito da Contração longitudinal em juntas soldadas, assinale a opção falsa",
            respostas: ["Depende da relação entre a seção transversal da zona fundida e a seção restante da peça", "Quanto menor a seção transversal da zona fundida, menor será a contração longitudinal. ", "Representa a redução do comprimento do cordão de solda. ", "Diminui caso seja aplicado o martelamento na solda ","Esse tipo de contração significa uma redução de dimensão perpendicular ao eixo do cordão de solda. "],
            correta: 5
        },
        {
            pergunta: "A respeito do método de aquecimento localizado a chama de maçarico para correção de deformações devidas a soldagem, assinale a opção verdadeira:",
            respostas: ["O empenamento de uma chapa relativamente fina de um painel normalmente pode ser removido pelo aquecimento de pontos no lado côncavo da chapa. ", "É geralmente aconselhável restringir a temperatura da área entre 600-650º C, que deve ser rigorosamente controlada de forma a evitar problemas metalúrgicos no material. ", "Quando um componente metálico é aquecido localizadamente o mesmo sofre uma expansão uniforme resultando, após o resfriamento, na correção da deformação. ", "Não é um método muito difundido para corrigir deformações. ","O sucesso da técnica depende do estabelecimento de um pequeno diferencial de temperatura (gradiente) na peça entre o local que recebe a chama e a área circunvizinha. "],
            correta: 1
        },
        {
            pergunta: "Das recomendações abaixo, indique aquela mais adequada à fabricação de perfis metálicos compostos por chapas soldadas, do ponto de vista do controle de deformações:",
            respostas: [" Usar chanfros em V.", "Usar a soldagem com passe à ré. ", "Aproximar e balancear as soldas em torno da linha neutra. ", "Aplicar martelamento nas soldas. ","Evitar a decoesão lamelar. "],
            correta: 2
        },
        {
            pergunta: "Das recomendações abaixo, indique aquela que se aplica quando se deseja estabelecer uma seqüência de execução de solda de uma estrutura ou equipamento metálico, do ponto de vista do controle de deformações:",
            respostas: ["Formar e soldar primeiro os subconjuntos da estrutura ou equipamentos e depois soldar estes subconjuntos entre si, procurando, sempre que possível, estabelecer uma simetria na seqüência da montagem e soldagem destes subconjuntos. ", ") Utilizar seqüência que permita, sempre que possível, a livre deformação longitudinal e que restrinja a contração transversal. ", "Utilizar, sempre que possível, o martelamento associado com a soldagem com passe à ré, independente da seqüência de soldagem ", "Executar as soldas na ordem do comprimento das mesmas, isto é, iniciando com as de comprimento maior e terminando com as de comprimento menor. ","O uso de dispositivos auxiliares de fixação e montagem adequados fará com que a seqüência de execução das soldas não possua qualquer influencia nas deformações resultantes. "],
            correta: 0
        },
        {
            pergunta: "Sobre a técnica de “martelamento” para prevenção e controle de deformações, indique a opção INCORRETA:",
            respostas: ["O martelamento somente é permitido no passe final, já que nos passes intermediários poderá encobrir trincas. ", "O martelamento entre passes consiste numa técnica que provou ser a única solução para o controle de deformações em soldagens de alguns materiais ", "O martelamento deforma o cordão de solda, aliviando assim (por deformação plástica) as tensões induzidas pela contração no metal frio. ", ") O passe de raiz nunca deve ser martelado, por causa do perigo de nele se produzir uma trinca, que pode ficar oculta. ","O martelamento é uma interação com as forças de contração de um cordão de solda quando este está em processo de resfriamento. "],
            correta: 0
        },
        {
            pergunta: "Dentre os principais fatores que influenciam a deformação na soldagem, assinale a opção incorreta:	",
            respostas: ["Tensões residuais são causadas por vários processos como laminação, dobramento, corte, conformação e oxicorte ", "Quanto maior o grau de restrição, maior o nível de tensões internas ou tensões residuais, menor a possibilidade de deformação, porém muito maior a possibilidade de aparecimento de trincas ", "Quanto à natureza dos metais, sabe-se que os metais diferentes expandem em quantidades diferentes, quando aquecidos. Ex.: Uma estrutura fabricada em aço carbono deforma mais que uma estrutura similar fabricada em aço inoxidável, devido ao maior coeficiente de dilatação do aço carbono. Pois quanto maior o valor do coeficiente de dilatação, quando o material está no estado líquido, maior será a tendência à deformação durante a soldagem ", "Uma soldagem em metais de baixa condutividade térmica resulta numa menor zona de transição de temperatura entre o metal de base e a solda, o que aumenta os efeitos da contração na solda e áreas adjacentes. ","Quanto menor a energia de soldagem, menor será a quantidade de metal de base adjacente à solda aquecida e, consequentemente, menor será a deformação "],
            correta: 2
        },
        {
            pergunta: "Das alternativas apresentadas a seguir, assinale aquela que não é um fator que influencia na deformação de uma junta soldada:",
            respostas: ["Aplicação de Pré-aquecimento e pós-aquecimento na junta ", "Grau de restrição da junta ", "Energia de soldagem introduzida na junta durante a soldagem. ", ") Propriedades físicas e mecânicas do material ","Tensões internas encontradas na junta "],
            correta: 0
        },
        {
            pergunta: " Um fator que Não influencia na deformação causada devido a soldagem é:	",
            respostas: ["Tensões internas anteriores a soldagem (pré existentes) ", "Propriedades do material de base e do metal de solda ", "Energia de soldagem empregada na execução da solda. ", "Grau de restrição da junta ","Técnica de limpeza interpasses "],
            correta: 4
        },
        {
            pergunta: "2. A respeito do tipo de deformação e sua ocorrência típica, assinale a opção falsa:	",
            respostas: [") Deformação angular: ocorre frequentemente em juntas soldadas de ângulo ", "Empenamento: é o principal tipo de deformação a evitar na soldagem de chapas sobrepostas (solda em ângulo). ", "Embicamento: poderá ocorrer em juntas soldadas a topo em qualquer espessura. ", ") Deformação angular: é comum nos casos de disposição irregular da zona plastificada em relação à linha neutra da peça. ","Empenamento: ocorre frequentemente na soldagem de chapas grossas. "],
            correta: 4
        },
        {
            pergunta: "4. Dentre os recursos descritos abaixo, indique aquele que deverá minimizar as deformações devido à soldagem:	",
            respostas: ["Usar sempre que possível chanfro em V com pequena abertura de raiz. ", "Usar o menor número possível de passes quando a contração transversal puder ser um problema. ", "Fazer a soldagem mais lentamente permitindo que um grande volume de metal adjacente à solda se aqueça e se expanda. ", "Executar sempre a soldagem com o reforço máximo permitido. ","Empregar processos de soldagem manuais ao invés de processos automáticos."],
            correta: 1
        },
        {
            pergunta: "Marque a opção incorreta referente aos principais fatores de influência na deformação:	",
            respostas: [") Tensões internas ou tensões residuais estão geralmente presentes nos componentes de uma estrutura, e são causadas por vários processos como laminação, dobramento, corte, conformação e oxicorte ", "Quanto menor for a energia de soldagem, menor será a quantidade de metal de base adjacente à solda aquecida e, consequentemente, menor será a deformação ", "Condutividade térmica é a medida da capacidade do calor escoar através de um material. Portanto uma soldagem em metais de baixa condutividade térmica (os quais não dissipam calor rapidamente) resulta numa menor zona de transição de temperatura entre o metal de base e a solda, o que aumenta os efeitos da contração na solda e áreas adjacentes. ", "Quanto maior for o valor do coeficiente de dilatação, quando o material está em estado líquido, maior será a tendência à deformação durante a soldagem ","Com o aumento do grau de restrição, menor será o nível de tensões internas ou tensões residuais, diminuindo desta maneira a possibilidade de deformação e de aparecimento de trincas "],
            correta: 4
        },
        {
            pergunta: "Dentre as opções a seguir a respeito das formas usuais de deformações em soldagem, qual opção é falsa?",
            respostas: ["Embicamento (junta de topo). ", "Contração Longitudinal", "Contração transversal ", "Empenamento (chapas finas) ","Desalinhamento "],
            correta: 4
        },
        {
            pergunta: "Quanto à técnica conhecida como “Martelamento”, assinale a alternativa incorreta",
            respostas: ["Em uma junta de topo, dois são os locais onde a técnica de Martelamento não deve ser aplicada: no passe de raiz e nos passes de acabamento da solda ", "O “Martelamento” deforma o cordão de solda, aliviando as tensões induzidas pela contração no metal frio ", "A técnica do Martelamento é uma maneira de se interagir com as forças de contração de um cordão de solda durante o seu resfriamento. ", "A técnica do Martelamento só pode ser aplicada, quando um procedimento específico tiver sido aprovado anteriormente ","A técnica do Martelamento pode ser realizada em todos os passes produzidos em uma junta de topo, à exceção do passe de raiz. Nas demais regiões, ela pode ser feita sem qualquer restrição"],
            correta: 4
        },
        {
            pergunta: "A classificação AISI 309 S representa um aço inoxidável:	",
            respostas: ["Ferrítico, com teor de enxofre diferente do aço AISI 309 ", "Com 3,09% de enxofre. ", "Martensítico, de composição química diferente da do aço AISI 309. ", "Com 3,09% de carbono. ","Austenítico, de composição química diferente da do aço AISI 309. "],
            correta: 4
        },
        {
            pergunta: "O volume 00.01 ASTM constitui um índice geral, que contém uma listagem identificando todos os volumes das normas ASTM; índice remissivo de todos os assuntos incluídos nos volumes e listagem alfanumérica das normas ordenadas sequencialmente. A afirmativa está:",
            respostas: ["CORRETA ", " FALSA ", "XXX ", "XXX ","XXX "],
            correta: 0
        },
        {
            pergunta: "As especificações ASTM reunidas no Grupo II indicam uma série de requisitos para o enquadramento dos materiais como, por exemplo, limite mínimo de resistência à tração, alongamento mínimo, faixa permissível de composição química etc. A afirmativa está:",
            respostas: ["CORRETA ", " FALSA ", "XXX ", "XXX ","XXX "],
            correta: 1
        },
        {
            pergunta: "A classificação AISI, própria para um determinado tipo de aço, é composta por três dígitos. Das alternativas apresentadas a seguir, identifique aquela que identifica o primeiro dígito.",
            respostas: ["Se o produto é uma chapa ou um tubo ", "Grau de soldabilidade do metal. ", "Microestrutura típica do aço. ", "Teores de Cr e Ni. ","Se o tubo é do tipo “com costura” ou “sem costura”. "],
            correta: 2
        },
        {
            pergunta: "7. Os aços inoxidáveis, segundo a AISI (American Iron and Steel Institute), são classificados com base nos seguintes fatores:	",
            respostas: ["Densidade do aço e requisitos de fabricação dos materiais", "Microestrutura e composição química do aço ", "Composição química e tolerâncias dimensionais. ", "Tolerâncias dimensionais, microestrutura e critérios de avaliação de descontinuidades originadas na fabricação ","Propriedades mecânicas mínimas para o material "],
            correta: 3
        },
        {
            pergunta: "A letra maiúscula “A” da norma ASTM (ex.: ASTM A 276M – 17), indica que esta norma pertence a qual grupo?",
            respostas: [" Materiais diversos", "Metais não ferrosos ", "Metais ferrosos ", "Corrosão, deterioração e degradação de materiais ","Materiais para aplicação específica. "],
            correta: 1
        },
        {
            pergunta: "No sistema de identificação das normas ASTM acerca dos metais de base, o 2º dígito significa...",
            respostas: ["A que grupo pertence a norma, dentro das seguintes classes ", ") Indica o ano da última reaprovação, sem alteração da norma ", "Correspondem apenas à ordem cronológica de numeração das normas ", "Indica o número de revisões sofridas pela norma no ano de aprovação da mesma ",") Indica o ano de emissão original ou de adoção como norma ou no caso de revisão, o ano da última revisão "],
            correta: 2
        },
        {
            pergunta: "O 1º dígito na classificação AISI para aços inoxidáveis significa:	",
            respostas: ["A microestrutura do aço como por exemplo: 205 - austenítico ", "Houve alteração no carbono ", ") Diferencia aços de classificação semelhante. ", "Uma faixa de composição química representada por letras ","Houve alteração no enxofre e molibdênio "],
            correta: 0
        },
        {
            pergunta: "Para se conhecer as especificações contidas na coleção de normas ASTM sobre um determinado assunto, deve-se consultar o índice remissivo contido no volume 00.01, o qual indicará a identificação das normas ASTM sobre o assunto e os volumes nos quais se encontram as normas identificadas. A afirmativa está:",
            respostas: ["CORRETA ", "FALSA ", "XXX ", " XXX"," XXX"],
            correta: 1
        },
        {
            pergunta: "A classificação AISI 316 l representa um aço inoxidável:	",
            respostas: ["Austenítico com baixo teor de carbono ", "Martensítico com baixo teor de carbono. ", "Austenítico com teor de carbono inferior ao AISI 316. ", "XXX ","XXX "],
            correta: 2
        },
        {
            pergunta: "Analisando as classificações AISI dos aços apresentados a seguir, identifique qual a alternativa mostra uma relação correta entre as classificações e a microestrutura dos metais.",
            respostas: ["AISI 444 e AISI 316L – Microestrutura austenítica ", "AISI 309 e AISI 436 – Microestrutura austenítica ", ") AISI 205 e AISI 431 – Microestrutura ferrítica ", "AISI 201 e AISI 308MoL – Microestrutura martensítica ","AISI 304L e AISI 347 – Microestrutura austenítica "],
            correta: 4
        },
        {
            pergunta: "A especificação ASTM A 276 - 08a indica que a norma... Assinale a opção verdadeira:	",
            respostas: ["Refere-se a metais não ferrosos ", "É um metal ferroso com a última revisão em 1998 ", "É de um metal ferroso, com número sequencial 276, aprovada em 2008 e que sofreu uma primeira revisão ", ") É de um metal não ferroso com a última revisão em 2008 ","É de um metal ferroso, com número sequencial 276, aprovada em 2008 sem nenhuma revisão. "],
            correta: 2
        },
        {
            pergunta: " Chega-se ao resultado de um ensaio de dureza Rockwell primeiramente fazendo-se a medição:	",
            respostas: ["Do diâmetro do penetrador. ", "Da área da calota. ", "Do diâmetro da impressão. ", "Das diagonais da impressão. ","Da profundidade da impressão. "],
            correta: 4
        },
        {
            pergunta: "Quanto ao ensaio de dureza Vickers, selecione a opção verdadeira:",
            respostas: ["Não é utilizado em dureza superficial, fato este somente atendido pela dureza Rockwell superficial. ", " As impressões provocadas não são muito pequenas, podendo em alguns casos inutilizar a peça.", "Pode ser utilizada na determinação dos constituintes individuais de uma microestrutura. ", "Não oferece grande precisão de medida. "," É utilizado para todos os tipos de materiais devido a grande quantidade existente de escalas no método"],
            correta: 2
        },
        {
            pergunta: "Com relação ao “ensaio de dobramento” aplicado em corpos de prova, assinale entre as opções a seguir, a correta.",
            respostas: ["O eixo de fechamento de um corpo de prova, em ensaio de dobramento longitudinal, deve ser paralelo à direção de laminação. ", "O ensaio fornece uma indicação quantitativa da dutilidade de um material ", "Ao realizar o ensaio, inspeciona-se a olho nu a zona comprimida do corpo de prova quanto à presença de trincas ou outras descontinuidades. ", "Fornece uma indicação qualitativa da dutilidade de um material sendo tão mais severo quanto menor o diâmetro do cutelo. ","Quanto maior o diâmetro do cutelo, maior será o valor quantitativo do resultado do dobramento. "],
            correta: 3
        },
        {
            pergunta: "Qual é a denominação do ensaio de dureza que consiste em comprimir lentamente, por meio de uma carga P, uma esfera de aço, de diâmetro D, sobre uma superfície plana de um corpo de prova ou peça, durante certo intervalo de tempo?",
            respostas: ["Dureza Brinell, porém o penetrador é uma pirâmide de diamante. ", "Dureza Rockwell. ", "Dureza Horn. ", "Dureza Vickers. ","Dureza Brinell. "],
            correta: 4
        },
        {
            pergunta: "5. Dentre as opções a seguir, selecione a única que NÃO é objetivo do ensaio macrográfico.	",
            respostas: ["Verificar de que produto siderúrgico se trata (fundido, forjado ou laminado) e a homogeneidade ou heterogeneidade do produto ", "Verificar se as dimensões finais de uma estrutura soldada estão conforme as tolerâncias estabelecidas no projeto. ", ") Determinar as várias zonas, de uma solda e também suas características, tais como: número de passes, existência de goivagem e a forma do chanfro. ", "Determinar a existência de soldas no material e do processo de fabricação de uma determinada peça.",") Constatar a existência de descontinuidades inerentes ao próprio metal, tais como: porosidades e segregações."],
            correta: 1
        },
        {
            pergunta: "Assinale a opção incorreta:	",
            respostas: ["O valor da dureza Vickers é o quociente da carga aplicada P pela área de impressão S ", "O princípio de operação do medidor portátil de dureza Brinell é pela comparação das impressões obtidas no material testado e numa barra por uma esfera de aço ", "Os valores de dureza Vickers podem ser obtidos utilizando-se um medidor portátil de dureza Brinell e seguindo-se uma conversão. ", "Ao se fazer ensaios Rocwell não deve ser considerado o resultado do primeiro ensaio após a troca do penetrador ",") A esfera utilizada no medidor portátil de dureza Vickers é de aço temperado com diâmetro de 10mm "],
            correta: 4
        },
        {
            pergunta: "Qual ensaio destrutivo, realizado em corpos de prova padronizado, mede a susceptibilidade do material à fratura frágil na presença de uma trinca, a uma dada temperatura? Obs.: O ensaio é utilizado para a determinação de temperatura de transição de ductilidade nula, que é a maior temperatura onde ocorre propagação de uma trinca levando o material, sujeito a tensões no regime elástico, a uma fratura frágil.",
            respostas: ["Ensaio de tração ", "Ensaio de impacto Charpy. ", "Ensaio de queda livre (Drop Weight Test) ", "Ensaio de Fratura "," Ensaio de dureza Rockwell"],
            correta: 2
        },
        {
            pergunta: "Referente ao ensaio de dobramento aplicado em corpos de prova marque a opção verdadeira:",
            respostas: ["O eixo de fechamento de um corpo de prova, em ensaio de dobramento longitudinal, deve ser paralelo à direção de laminação. ", "Quanto maior o diâmetro do cutelo, maior será o valor quantitativo do resultado do dobramento ", "Ao realizar o ensaio, inspeciona-se a olho nu a zona comprimida do corpo de prova quanto à presença de trincas ou outras descontinuidades ", "O ensaio fornece uma indicação quantitativa da dutilidade de um material ","Fornece uma indicação qualitativa da dutilidade de um material sendo tão mais severo quanto menor o diâmetro do cutelo "],
            correta: 4
        },
        {
            pergunta: " Referente às características das fraturas no ensaio de tração, assinale a alternativa correta:	",
            respostas: ["Quando o material apresenta uma prolongada fase de deformação plástica ocorre fratura frágil ", "Quando o material apresenta elevados valores de alongamento e de estricção ocorre fratura dúctil ", "Quando o material apresenta baixos valores de alongamento e de estricção ocorre fratura dúctil ", "Quando o material apresenta uma ruptura inclinada a aproximadamente 45º em relação à direção da carga ocorre fratura frágil ","Quando o material apresenta fratura normal à direção de aplicação da carga ocorre fratura dúctil "],
            correta: 1
        },
        {
            pergunta: "A avaliação da perda de massa é um método utilizado para:	",
            respostas: ["Avaliar a falta de metal de solda na raiz da junta. ", "Avaliar a taxa de corrosão dos materiais ", "Avaliar dupla laminação no metal de base ", "Avaliar poros internos ao metal de base ","Avaliar trincas e poros subsuperficiais "],
            correta: 1
        },
        {
            pergunta: "Um corpo de prova soldado, tipo transversal de face, foi submetido ao ensaio de dobramento. Na avaliação dos resultados do ensaio, o inspetor de soldagem procurou observar:",
            respostas: ["Descontinuidades na zona de tração, na raiz da solda do corpo de prova. ", "Dobras de laminação na chapa, na zona de tração do corpo de prova. ", "Descontinuidades na região convexa do corpo de prova correspondente a superfície lateral da solda. ", " Descontinuidades na zona de compressão, na face da solda do corpo de prova.","Descontinuidades na zona de tração, na face da solda do corpo de prova. "],
            correta: 4
        },
        {
            pergunta: "Dentre as opções indique a única que não compete ao ensaio macrográfico:",
            respostas: ["Determinar o número de passes numa soldagem multipasses. ", "Definir os contornos e, portanto o tamanho de grão do material. ", "Determinar a natureza do produto siderúrgico (por ex.: laminado, fundido etc.). ", "Definir os limites entre as zonas fundida e afetada termicamente de uma junta soldada ","Determinar a forma do chanfro de uma junta soldada. "],
            correta: 1
        },
        {
            pergunta: "Um valor alto na escala de um durômetro Rockwell é característico de uma impressão profunda no material ensaiado, porque o número de dureza é inversamente proporcional à profundidade de impressão. Responda:",
            respostas: [") A afirmação e a razão são verdadeiras. ", "A afirmação é verdadeira e a razão é falsa. ", "A afirmação e a razão são verdadeiras, mas a razão não é adequada ", "A afirmação é falsa e a razão é verdadeira. ","A afirmação e a razão são falsas. "],
            correta: 3
        },
        {
            pergunta: "Sabendo-se que: “Em juntas soldadas, algumas normas fixam os limites de dureza para o metal de base, ZTA, e ZF de certos aços, pois, se apresentassem dureza excessiva, sofreriam perda da dutilidade e, portanto, comprometeria sua aplicabilidade”. Pergunta-se: Entre os fatores listados a seguir, a respeito de como a dureza pode ser influenciada na soldagem, qual é o único que NÃO se aplica?",
            respostas: ["A dureza pode ser influenciada pelo tratamento térmico. ", "A dureza pode ser influenciada pelos efeitos metalúrgicos do processo de soldagem ", "A dureza pode ser influenciada pelo grau de encruamento do metal de base. ", "A dureza pode ser influenciada pela composição química do metal de base ","A dureza pode ser influenciada pela posição de execução da soldagem "],
            correta: 4
        },
        {
            pergunta: ". Qual, dentre as opções a seguir, a respeito das características do ensaio de dureza Vickers, é FALSA?",
            respostas: ["Não mede dureza superficial, já que a espessura da peça, a ser medida, deve ser no mínimo igual a dez vezes a profundidade da impressão obtida. ", "Grande precisão de medida. ", ") Deformação nula do penetrador. ", "Aplicação para toda a gama de durezas encontradas nos diversos materiais. ","Existência de apenas uma escala de dureza. "],
            correta: 0
        },
        {
            pergunta: "Pode-se afirmar que os ensaios de dobramento, dureza, tração e macrográfico são requeridos por normas para qualificar soldadores?",
            respostas: ["Sim. Além de todos estes ensaios serem geralmente requeridos para qualificar soldadores, poderá também ser requerido o ensaio de impacto de charpy ", "Não. Apenas o ensaio de tração é requerido para qualificar soldadores ", " Não. Dentre os ensaios relacionados, usualmente o de dobramento e o macrográfico são requeridos para qualificação de soldadores", "Sim. Os ensaios referidos são usualmente requeridos para qualificação de soldadores ","Não. Os ensaios referidos são utilizados para qualificação de metal de adição. "],
            correta: 2
        },
        {
            pergunta: "Com relação ao ensaio de dobramento, assinale a opção correta:",
            respostas: ["No dobramento transversal de face o eixo da solda é perpendicular ao eixo longitudinal do corpo de prova, o qual é dobrado de modo que a face da solda fique tracionada, tornando-se a superfície convexa do corpo de prova ", "Quanto maior for o diâmetro do cutelo, mais severo será o ensaio ", "Fornece uma indicação da tenacidade do material. ", "No dobramento transversal de face o eixo da solda é perpendicular ao eixo longitudinal do corpo de prova, o qual é dobrado de modo que a raiz da solda fique tracionada, tornando-se a superfície convexa do corpo de prova ","Atingido o ângulo do dobramento examina-se, com auxílio de microscópio, a zona tracionada do corpo de prova para verificação de trincas ou descontinuidades acima de determinado valor "],
            correta: 0
        },
        {
            pergunta: "A capacidade de penetração dos raios X é função:	",
            respostas: ["Da distância fonte-filme. ", "Do tamanho do ponto focal. ", "Do tempo. ", "Da miliamperagem. "," Da quilovoltagem ou comprimento de onda. "],
            correta: 2
        },
        {
            pergunta: "2. No ensaio por ultra-som, o uso de acoplante entre o cabeçote e a superfície da peça em exame se faz necessário por que",
            respostas: ["O cristal do cabeçote não vibrará se este for colocado diretamente sobre a peça. ", "Para que a maior parcela possível de som seja transmitida do cabeçote à peça e vice-versa, o que não aconteceria se existisse ar entre o cabeçote e a peça. ", "Para tornar mais rápida a realização do ensaio ", "O acoplante é necessário para fechar o circuito elétrico do cabeçote. ",") Serve principalmente como lubrificante para minimizar o desgaste do cabeçote. "],
            correta: 1
        },
        {
            pergunta: "Dentre os ensaios não destrutivos a seguir relacionados, qual detecta facilmente defeitos volumétricos internos, tais como porosidades e inclusões:",
            respostas: ["Líquido penetrante. ", "Visual ", "Partículas magnéticas. ", "Estanqueidade. ","Radiografia. "],
            correta: 4
        },
        {
            pergunta: "A diferença entre as densidades de duas áreas de uma radiografia é também conhecida por:	",
            respostas: ["Fator de absorção. ", "Atividade específica. ", "Definição. ", "Grau de enegrecimento do filme. ","Sensibilidade. "],
            correta: 3
        },
        {
            pergunta: "Qual o princípio do ensaio por ultrassom em materiais?	",
            respostas: ["Este ensaio é realizado em uma zona preparada superficialmente e o reconhecimento do material é feito observando-se o modo e a velocidade de reação, e ainda a coloração dos resíduos da reação química na superfície do material. ", "A principal finalidade deste ensaio é a detecção de descontinuidades internas, através da introdução de um feixe sônico a uma freqüência acima da faixa audível. ", "É um ensaio relativamente simples, utilizado na detecção de descontinuidades abertas para a superfície de materiais sólidos não porosos, com aplicação de um líquido penetrante e do revelador.", "É um ensaio que se baseia na emissão de radiação em corpos sólidos. "],
            correta: 1
        },
        {
            pergunta: "Sabe-se que no ultrassom, devido ao efeito piezo-elétrico, quando um cristal é acoplado à superfície de uma peça de aço, agirá como um martelo. Esse cristal faz parte do cabeçote, sendo que, para inspeções em soldas comumente utiliza-se o... Indique a opção correta.",
            respostas: ["Cabeçote normal. ", "Cabeçote angular. ", "xxx ", "xxx ","xxx "],
            correta: 1
        }, 
        {
            pergunta: " Com que finalidade é utilizado o ensaio por Partículas magnéticas e qual é a sua principal vantagem?	",
            respostas: ["A principal finalidade deste ensaio é a detecção de descontinuidades internas, através da introdução de um feixe sônico a uma freqüência acima da faixa audível ", "É um ensaio rápido, de baixo custo e utilizado para detecção de defeitos passantes em soldas. ", "É um ensaio não destrutivo básico, utilizado para a identificação dos metais e ligas metálicas através de suas propriedades físicas e químicas. ", "É um ensaio utilizado para localizar descontinuidades superficiais e subsuperficiais, com aplicação de uma corrente de magnetização ou de um campo magnético à peça inspecionada. "],
            correta: 3
        },
        {
            pergunta: "Qual a sequência correta a ser seguida na inspeção por “Partícula Magnética”?",
            respostas: ["Limpeza – Magnetização da peça – Aplicação das partículas – Desmagnetização da peça - Inspeção ", "Limpeza – Aplicação das partículas – Magnetização – Inspeção – Desmagnetização da peça. ", "Limpeza – Magnetização da peça – Aplicação das partículas – Inspeção – Desmagnetização da peça ", "Limpeza - Aplicação das partículas – Magnetização da peça - Inspeção "," Limpeza – Magnetização da peça – Inspeção – Desmagnetização da peça"],
            correta: 2
        },
        {
            pergunta: "O indicador de Qualidade de Imagem (IQI), ou penetrâmetro, é usado pra medir:",
            respostas: ["A densidade do filme radiográfico ", " A qualidade da imagem da radiografia (sensibilidade)", "Tamanho das descontinuidades existentes.", "Intesidade do raio-X ","O índice da radiação secundária espalhada que poderá atingir o filme radiográfico "],
            correta: 1
        },
        {
            pergunta: "Sobre o ensaio radiográfico, qual opção é falsa?	",
            respostas: ["O filme que a radiação impressiona neste ensaio é chamado de radiografia ", "Comprimento de onda da radiação e o tipo do material são os únicos fatores que influenciam na capacidade da radiação penetrar em sólidos ", "Baseia-se na capacidade que os raios-X e raios-gama possuem de penetrar em sólidos. ", "O material absorve parte da radiação que o atravessa ","A radiação ao atravessar um material sofre menor absorção nas regiões onde existem vazios ou descontinuidades "],
            correta: 1
        },
        {
            pergunta: "Dentre as opções sobre o ensaio visual, qual é a falsa?	",
            respostas: ["A mordedura é um tipo de descontinuidade estrutural detectada por esse ensaio. ", "Por não detectar descontinuidades estruturais internas, o ensaio visual é pouco empregado, preferindo-se aplicar outros ensaios não destrutivos mais eficazes e completos. ", "É de baixo custo comparativamente a outros ensaios não destrutivos. ", "É muito utilizado para detectar descontinuidades dimensionais ","O perfil incorreto da solda é uma descontinuidade tipicamente indicada pelo ensaio visual. "],
            correta: 1
        },  {
            pergunta: "2. O movimento de um cabeçote ao longo de uma superfície, produzido por processo manual ou mecânico, é denominado:	",
            respostas: ["Angulação. ", "Atenuação. ", "Varredura. ", "Ressonância.) Traçagem. ","xxx "],
            correta: 2
        },
        {
            pergunta: "Selecione entre as opções a seguir, aquela que não é considerada causa provável de falsa indicação no ensaio por líquido penetrante:",
            respostas: ["Contaminações durante o exame. ", "Falhas existentes no material. ", "Escórias do processo de soldagem. ", "Limpeza inicial inadequada. ","Óxidos não removidos."],
            correta: 1
        },
        {
            pergunta: "4. A diferença entre as densidades de duas áreas de uma radiografia é também conhecida por:	",
            respostas: ["Definição. ", ") Grau de enegrecimento do filme. ", "Fator de absorção. ", "Atividade específica. ","Sensibilidade. "],
            correta: 1
        },
        {
            pergunta: "5. Dentre as características do ensaio por ultrassom a seguir apresentadas, qual é a única que NÃO se aplica?	",
            respostas: ["Permite localizar e dimensionar com precisão às descontinuidades ", "Pode ser aplicado em superfícies com grau alto de rugosidade superficial. ", "Pode ser executado em materiais metálicos e não metálicos. ", "É um ensaio mais rápido do que a radiografia. ","Pode ser executado em juntas de geometria complexa, como nós de estruturas tubulares "],
            correta: 1
        },
        {
            pergunta: "6. Qual a sequência correta do ensaio por meio de Líquido penetrante?	",
            respostas: ["Limpeza inicial, aplicação do penetrante, aplicação do revelador, remoção do excesso do penetrante e inspeção final. ", "Limpeza inicial, aplicação do penetrante, remoção do excesso do penetrante e inspeção final. ", "Limpeza inicial, aplicação do penetrante, remoção do excesso do penetrante, aplicação do revelador e inspeção final. ", " Limpeza inicial, aplicação do penetrante, aplicação do revelador e inspeção final. ","xxx "],
            correta: 0
        },
        {
            pergunta: "7. Em que se baseia o ensaio por meio de Líquido penetrante?	",
            respostas: ["É um ensaio relativamente simples, utilizado na detecção de descontinuidades abertas para a superfície de materiais sólidos não porosos, com aplicação de um líquido penetrante e do revelador. ", "O ensaio é utilizado para detectar descontinuidades internas, através da introdução de um feixe sônico a uma freqüência acima da faixa audível. ", "É um ensaio utilizado para localizar descontinuidades superficiais e subsuperficiais, com aplicação de uma corrente de magnetização ou de um campo magnético à peça inspecionada ", "O ensaio é utilizado para localizar e detectar defeitos passantes em soldas. ","xxx "],
            correta: 0
        },
        {
            pergunta: "Das alternativas apresentadas a seguir, identifique aquela que não está relacionada com a realização do Ensaio Visual.",
            respostas: ["O ensaio visual pode ser realizado à vista desarmada, ou seja, sem auxílio de algum dispositivo ótico. ", "O ensaio visual pode ser realizado com auxílio de uma lupa ou com aparelhos do tipo endoscópio (inspeção remota) ", "Dos ensaios conhecidos como “não destrutivos”, este é considerado o ensaio mais básico entre todos ", "É um ensaio não destrutivo básico, utilizado para a identificação dos metais e ligas metálicas através de suas propriedades físicas e químicas ","O método é usado na inspeção de superfícies externas para determinação de tamanho, forma, acabamento, ajuste e existência de defeitos "],
            correta: 3
        },
        {
            pergunta: "Sobre o ensaio radiográfico, qual opção é falsa?	",
            respostas: ["Comprimento de onda da radiação e o tipo do material são os únicos fatores que influenciam na capacidade da radiação penetrar em sólidos ", "Baseia-se na capacidade que os raios-X e raios-gama possuem de penetrar em sólidos. ", "A radiação ao atravessar um material sofre menor absorção nas regiões onde existem vazios ou descontinuidades ", "O material absorve parte da radiação que o atravessa ","O filme que a radiação impressiona neste ensaio é chamado de radiografia "],
            correta: 0
        },
        {
            pergunta: "Quanto às chapas de teste de produção, entende-se que:	",
            respostas: [") Comprimento de onda da radiação e o tipo do material são os únicos fatores que influenciam na capacidade da radiação penetrar em sólidos ", "Baseia-se na capacidade que os raios-X e raios-gama possuem de penetrar em sólidos. ", "A radiação ao atravessar um material sofre menor absorção nas regiões onde existem vazios ou descontinuidades ", "O material absorve parte da radiação que o atravessa ","O filme que a radiação impressiona neste ensaio é chamado de radiografia "],
            correta: 5
        },
        {
            pergunta: "Quanto às chapas de teste de produção, entende-se que:	",
            respostas: ["Para juntas longitudinais, as chapas de teste de produção são colocadas próximas às juntas a serem soldadas. ", "São utilizadas quando se objetiva qualificar um procedimento de soldagem. ", "As chapas de teste de produção deverão ser soldadas nas mesmas condições das soldas de produção. ", "Para juntas circunferências, as chapas de teste de produção são colocadas como apêndice nas juntas a serem soldadas ","Os requisitos de ensaios relativos às chapas de teste de produção são encontrados na IEIS. "],
            correta: 2
        },
        {
            pergunta: "A requalificação do procedimento de soldagem é necessária quando:	",
            respostas: ["A solda não for executada por um soldador qualificado. ", "Os limites estabelecidos necessitam ser ultrapassados. ", "Decorrer seis meses após a sua qualificação. ", ") Houver mudança de especificação do metal de base. ","Houver mudança de uma variável não essencial. "],
            correta: 1
        },
        {
            pergunta: "A respeito da etapa de preparação dos corpos de prova para qualificação de um procedimento de soldagem, selecione a opção verdadeira:",
            respostas: [" ---> Dela depende a validade e a repetibilidade dos resultados dos ensaios. ", "--> Dela depende apenas a repetibilidade dos resultados dos ensaios.  ", "É uma etapa que antecede a marcação da posição de retirada dos corpos de prova na peça de teste. ", "As dimensões de preparação dos copos de prova, previstas pelas normas de qualificação, são bastante flexíveis, já que as mesmas não exercem influência nos resultados dos ensaios. ","Dela depende apenas a validade dos ensaios. "],
            correta: 0
        },
        {
            pergunta: "A requalificação da EPS se faz necessário quando:	",
            respostas: ["A solda for executada por um soldador não qualificado no processo de soldagem especificado. ", "Não houver alteração na especificação do metal de base estabelecido. ", "Os limites ou faixas dos parâmetros de soldagem especificados não produzem soldas com qualidade satisfatória. ", "A experiência e a familiarização com certos metais de base e consumíveis de soldagem provam a adequação de uma EPS, através de serviços executados por um longo período de tempo. ",") Houver alteração de uma variável não essencial. "],
            correta: 2
        },
        {
            pergunta: "Qual é a norma de qualificação requerida pela norma/código de projeto (API 650)?	",
            respostas: ["AWS D1.1 ", "ASME Seção IX ", "API Std 1104 ", "ASME VIII Div 1. ","ASME II parte A "],
            correta: 1
        },  
        {
            pergunta: "Qual é a norma de qualificação requerida pela norma/código de projeto (AWS D1.1)?",
            respostas: ["ASME V ", ") API Std 1104 ", "ASME VIII Div 2 ", "AWS D1.1 ","ASME Seção IX. "],
            correta: 4
        },
        {
            pergunta: "Quanto às Variáveis conhecidas como: “Não-Essenciais”, “Essenciais” e “Essenciais Suplementares”. Marque a alternativa incorreta.",
            respostas: ["Variáveis Não-Essenciais são variáveis que, se alteradas, não requerem uma nova qualificação ", "As normas de qualificação determinam as mesmas variáveis essenciais de soldagem, aplicáveis a todos os processos de soldagem", "contudo, a sua análise é necessária quando se tem requisito de impacto na junta soldada ", "Variáveis Essenciais são variáveis que se alteradas além do que as normas estabelecem, requerem uma nova qualificação","Variáveis Essenciais Suplementares são aquelas que, se alteradas além do que as normas estabelecem, requerem uma nova qualificação ", "Os limites das qualificações são estabelecidos em primeiro lugar através das variáveis de soldagem onde cada norma de qualificação estabelece as suas próprias Variáveis “Não-Essenciais”, “Essenciais” e “Essenciais Suplementares”."],
            correta: 4
        },
        {
            pergunta: "A norma de qualificação AWS D1.1 é aplicada para:	",
            respostas: ["Estruturas metálicas e vasos de pressão ", "Vasos de pressão", "Caldeiras, tubulações e vasos de pressão ", "Caldeiras, estruturas metálicas e vasos de pressão. ","Estruturas metálicas "],
            correta: 4
        },
        {
            pergunta: "9. A norma de projeto “ASME VIII Div. 1” é aplicada para qual tipo de equipamento",
            respostas: ["Tubulações de transmissão e distribuição de gás. ", "Estruturas metálicas ", "Caldeiras ", "Vasos de pressão ","Componentes nucleares "],
            correta: 3
        },
        {
            pergunta: "Para qualificar um procedimento de soldagem conforme a norma de qualificação ASME Seção IX, utilizando o processo de soldagem eletrodo revestido, qual das opções a seguir é uma variável de soldagem essencial?",
            respostas: ["Diâmetro do metal de adição abaixo de 6 mm ", "F Number ", " Tipo de chanfro da junta", "Abertura de raiz ","Alteração da progressão de soldagem (ascendente para descendente) "],
            correta: 3
        },
        {
            pergunta: "Entende-se por variável essencial:	",
            respostas: ["Aquela a que as normas dão maior importância. ", "Aquela cuja mudança não afetará as propriedades mecânicas do metal de solda. ", "Aquela cuja mudança afetará as propriedades mecânicas do metal de base. ", "Aquela que, se alterada, afetará a qualidade das soldas. ",") Aquela que pode ser alterada, qualquer que seja o processo de soldagem "],
            correta: 3
        },
        {
            pergunta: " Quanto às chapas de teste de produção, entende-se que:	",
            respostas: ["As chapas de teste de produção deverão ser soldadas nas mesmas condições das soldas de produção. ", "Os requisitos de ensaios relativos às chapas de teste de produção são encontrados na IEIS ", "Para juntas circunferências, as chapas de teste de produção são colocadas como apêndice nas juntas a serem soldadas. ", "Para juntas longitudinais, as chapas de teste de produção são colocadas próximas às juntas a serem soldadas. ","São utilizadas quando se objetiva qualificar um procedimento de soldagem. "],
            correta: 0
        },
        {
            pergunta: "A preparação das peças de teste é feita com base nos requisitos da norma de qualificação aplicável. A seguir, estão listadas algumas das etapas da preparação. Indique a ordem correta dessas etapas: I) Tipo da peça de teste. II) Dimensões da peça de teste. III) Material da peça de teste. IV) Preparação dos corpos de prova. V) Posição de retirada dos corpos de prova.",
            respostas: [" II, I, IV, V e III. ", "III, II, I, IV e V. ", "I, II, III, IV e V. ", " I, III, IV, V e II. ","I,III,II,V e IV. "],
            correta: 4
        },
        {
            pergunta: "4. A requalificação da EPS se faz necessário quando:	",
            respostas: ["A solda for executada por um soldador não qualificado no processo de soldagem especificado. ", "Não houver alteração na especificação do metal de base estabelecido. ", " Houver alteração de uma variável não essencial. ", "Os limites ou faixas dos parâmetros de soldagem especificados não produzem soldas com qualidade satisfatória. ","A experiência e a familiarização com certos metais de base e consumíveis de soldagem provam a adequação de uma EPS, através de serviços executados por um longo período de tempo. "],
            correta: 3
        },
        {
            pergunta: "Quanto às Variáveis conhecidas como: “Não-Essenciais”, “Essenciais” e “Essenciais Suplementares”. Marque a alternativa incorreta.",
            respostas: [" “Variáveis Essenciais” são variáveis que se alteradas além do que as normas estabelecem, requerem uma nova qualificação", "“Variáveis Não-Essenciais” são variáveis que, se alteradas, não requerem uma nova qualificação ", "Os limites das qualificações são estabelecidos em primeiro lugar através das variáveis de soldagem onde cada norma de qualificação estabelece as suas próprias Variáveis “Não-Essenciais”, “Essenciais” e “Essenciais Suplementares”. ", ") “Variáveis Essenciais Suplementares” são aquelas que, se alteradas além do que as normas estabelecem, requerem uma nova qualificação "," contudo, a sua análise é necessária quando se tem requisito de impacto na junta soldada", "As normas de qualificação determinam as mesmas variáveis essenciais de soldagem, aplicáveis a todos os processos de soldagem"],
            correta: 5
        },
        {
            pergunta: "Qual é a norma de qualificação requerida pela norma/código de projeto (ASME VIII Div. 1), na construção de um vaso de pressão?",
            respostas: ["API Std 1104 ", "ASME I ", " AWS D1.1 ", "ASME Seção IX ","ASME VIII Div 2. "],
            correta: 3
        },

        {
            pergunta: "A norma de projeto “ASME I” é aplicada para qual tipo de equipamento?",
            respostas: ["Tanques de estocagem ", "Caldeiras ", "Estruturas metálicas ", "Tubulações de vapor.",") Tubulações de transporte de petróleo "],
            correta: 1
        },

        {
            pergunta: "Para qualificar um procedimento de soldagem conforme a norma de qualificação ASME Seção IX, utilizando o processo de soldagem eletrodo revestido, qual das opções a seguir é uma variável de soldagem não essencial?",
            respostas: ["P Number ", "A Number ", "Espessura qualificada do metal de base ", "Tipo de chanfro da junta "," F Number "],
            correta: 3
        },

    ];

    let perguntaAtual = 0;

    // Função para mostrar a pergunta e as respostas
    function mostrarPergunta() {
        const container = document.getElementById("quizContainer");
        const pergunta = perguntas[perguntaAtual];
        
        container.innerHTML = `
            <div class="pergunta">${pergunta.pergunta}</div>
            <ul class="respostas" id="respostasList">
                ${pergunta.respostas.map((resposta, index) => `
                    <li class="resposta" data-index="${index}">${resposta}</li>
                `).join('')}
            </ul>
        `;
        
        // Mostrar o botão de "Mostrar Resposta"
        document.getElementById("showAnswerBtn").style.display = 'inline-block';
        document.getElementById("nextBtn").style.display = 'none'; // Esconde "Próxima Pergunta" inicialmente
    }

    // Função para mostrar a resposta correta
    function mostrarRespostaCorreta() {
        const pergunta = perguntas[perguntaAtual];
        const respostasList = document.getElementById("respostasList");

        const respostas = respostasList.getElementsByClassName("resposta");
        
        // Itera sobre todas as respostas e marca as corretas/erradas
        for (let i = 0; i < respostas.length; i++) {
            if (i === pergunta.correta) {
                respostas[i].classList.add("resposta-correta");
            } else {
                respostas[i].classList.add("resposta-errada");
            }
        }

        // Mostrar o botão "Próxima Pergunta"
        document.getElementById("nextBtn").style.display = 'inline-block';
        document.getElementById("showAnswerBtn").style.display = 'none'; // Esconde o botão "Mostrar Resposta"
    }

    // Função para avançar para a próxima pergunta
    function proximaPergunta() {
        // Avançar para a próxima pergunta
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            // Se acabou o quiz, reiniciar
            const container = document.getElementById("quizContainer");
            container.innerHTML = "<h2>Fim do quiz! Você completou todas as perguntas.</h2>";
            document.getElementById("nextBtn").style.display = "none"; // Ocultar o botão
            document.getElementById("showAnswerBtn").style.display = "none"; // Ocultar o botão de "Mostrar Resposta"
        }
    }

    // Inicializa a primeira pergunta
    mostrarPergunta();

    // Evento para o botão "Mostrar Resposta"
    document.getElementById("showAnswerBtn").addEventListener("click", mostrarRespostaCorreta);

    // Evento para o botão "Próxima Pergunta"
    document.getElementById("nextBtn").addEventListener("click", proximaPergunta);
