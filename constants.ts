import { TrainingSheetData } from './types';

export const SHEETS: TrainingSheetData[] = [
  {
    id: "#01",
    topic: "A Regra de Ouro (Sujeito e Verbo)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Nunca coloque um 'muro' entre quem faz a ação e a ação em si. A vírgula é proibida entre o Sujeito (quem faz) e o Verbo (a ação), mesmo que a frase seja longa.",
    },
    model: {
      error: "A falta de investimento em educação, gera desigualdade.",
      correction: "A falta de investimento em educação gera desigualdade.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O Governo Federal, deve criar novas leis de proteção.", placeholder: "Reescreva sem separar sujeito e verbo..." },
      { id: 2, incorrectSentence: "A maioria dos estudantes brasileiros, sofrem com a ansiedade.", placeholder: "Quem sofre? Remova a barreira..." },
      { id: 3, incorrectSentence: "Quem pratica exercícios físicos, vive melhor.", placeholder: "Sujeito oracional não leva vírgula..." },
      { id: 4, incorrectSentence: "O acesso à internet de qualidade, é um direito de todos.", placeholder: "Una o sujeito ao verbo..." },
      { id: 5, incorrectSentence: "Os problemas causados pela poluição, afetam a saúde pública.", placeholder: "Remova a pausa respiratória errada..." },
      { id: 6, incorrectSentence: "A leitura de livros clássicos, amplia o vocabulário.", placeholder: "Fluxo direto entre leitura e amplia..." },
      { id: 7, incorrectSentence: "Muitos jovens que moram na periferia, enfrentam dificuldades.", placeholder: "Não separe quem enfrenta da ação..." },
      { id: 8, incorrectSentence: "A Constituição de 1988, garante a liberdade de expressão.", placeholder: "Quem garante? Corrija..." },
      { id: 9, incorrectSentence: "O uso excessivo de celulares nas escolas, atrapalha o ensino.", placeholder: "Sujeito longo: mantenha sem vírgula..." },
      { id: 10, incorrectSentence: "Aqueles que não respeitam as leis de trânsito, devem ser punidos.", placeholder: "Conecte o sujeito à punição..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto (3 a 4 linhas) sobre o tema 'O uso de celulares em sala de aula'. Regra: Crie frases onde o sujeito seja longo, mas não use vírgula antes do verbo."
    }
  },
  {
    id: "#02",
    topic: "A Lista (Enumeração)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "A vírgula serve para separar itens de uma lista, como se fosse uma lista de compras. Use a vírgula para separar cada item. No último item, troque a vírgula por 'e'.",
    },
    model: {
      error: "O Brasil precisa de saúde educação e segurança.",
      correction: "O Brasil precisa de saúde, educação e segurança.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Fui à feira e comprei batata cenoura alface e tomate.", placeholder: "Separe os itens da compra..." },
      { id: 2, incorrectSentence: "O governo precisa investir em hospitais, escolas, e estradas.", placeholder: "Atenção ao 'e' no final..." },
      { id: 3, incorrectSentence: "A violência afeta homens mulheres, crianças e idosos.", placeholder: "Complete a separação dos grupos..." },
      { id: 4, incorrectSentence: "A redação exige coesão coerência e boa gramática.", placeholder: "Enumere os critérios..." },
      { id: 5, incorrectSentence: "Os sintomas são febre dor de cabeça e cansaço.", placeholder: "Liste os sintomas corretamente..." },
      { id: 6, incorrectSentence: "Precisamos de respeito, empatia, solidariedade.", placeholder: "Faltou o conector final..." },
      { id: 7, incorrectSentence: "O aluno estudou história, geografia, matemática, e física.", placeholder: "Remova a vírgula antes do 'e' final..." },
      { id: 8, incorrectSentence: "Redes sociais como Instagram, Facebook, e TikTok viciam.", placeholder: "Ajuste a enumeração das redes..." },
      { id: 9, incorrectSentence: "O problema envolve o Estado a sociedade e a família.", placeholder: "Quem está envolvido? Separe..." },
      { id: 10, incorrectSentence: "É necessário reciclar papel, vidro plástico e metal.", placeholder: "Não esqueça de nenhum item..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'Alimentação Saudável'. Regra: Cite pelo menos 3 tipos de alimentos saudáveis usando a vírgula para enumerar e o 'e' para finalizar."
    }
  },
  {
    id: "#03",
    topic: "A Explicação (O Aposto)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Quando você para a frase no meio para explicar quem é alguém ou o que é algo, use duas vírgulas. Elas funcionam como parênteses: uma antes e uma depois.",
    },
    model: {
      error: "Pelé o rei do futebol nasceu em Três Corações.",
      correction: "Pelé, o rei do futebol, nasceu em Três Corações.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Machado de Assis grande escritor brasileiro fundou a ABL.", placeholder: "Isole a explicação sobre Machado..." },
      { id: 2, incorrectSentence: "Brasília, capital do Brasil foi inaugurada em 1960.", placeholder: "Faltou fechar a explicação..." },
      { id: 3, incorrectSentence: "A internet uma ferramenta poderosa, mudou o mundo.", placeholder: "Faltou abrir a explicação..." },
      { id: 4, incorrectSentence: "O celular, aparelho indispensável vicia os jovens.", placeholder: "Isole a característica do celular..." },
      { id: 5, incorrectSentence: "Paulo Freire patrono da educação, defendia o pensamento crítico.", placeholder: "Quem foi Paulo Freire? Isole..." },
      { id: 6, incorrectSentence: "A dengue doença transmitida pelo mosquito, mata milhares.", placeholder: "Explique o que é a dengue..." },
      { id: 7, incorrectSentence: "O Enem maior exame do país, ocorre em novembro.", placeholder: "Destaque a importância do exame..." },
      { id: 8, incorrectSentence: "A água, recurso finito deve ser preservada.", placeholder: "Encerre a explicação sobre a água..." },
      { id: 9, incorrectSentence: "Anitta cantora pop, faz sucesso internacional.", placeholder: "Isole a profissão dela..." },
      { id: 10, incorrectSentence: "O sedentarismo mal do século causa diversas doenças.", placeholder: "Explique o que é o sedentarismo..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'Uma figura histórica ou celebridade'. Regra: Use vírgulas para explicar quem é essa pessoa no meio da frase (Aposto)."
    }
  },
  {
    id: "#04",
    topic: "Tempo e Lugar (Deslocamento)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Quando você começa a frase dizendo 'Quando' (tempo) ou 'Onde' (lugar), coloque uma vírgula logo depois para marcar que você trouxe essa informação para o início.",
    },
    model: {
      error: "No Brasil a desigualdade é grande.",
      correction: "No Brasil, a desigualdade é grande.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Hoje em dia é difícil viver sem celular.", placeholder: "Marque o tempo no início..." },
      { id: 2, incorrectSentence: "Na Idade Média a higiene era precária.", placeholder: "Quando isso ocorria? Use vírgula..." },
      { id: 3, incorrectSentence: "Em 2025 teremos novas eleições.", placeholder: "Isole o ano..." },
      { id: 4, incorrectSentence: "Nas grandes cidades o trânsito é caótico.", placeholder: "Onde o trânsito é caótico?..." },
      { id: 5, incorrectSentence: "Infelizmente, muitas pessoas não leem livros.", placeholder: "Este advérbio já está correto?..." },
      { id: 6, incorrectSentence: "No século XXI a tecnologia avançou muito.", placeholder: "Marque a época..." },
      { id: 7, incorrectSentence: "Durante a pandemia o ensino foi remoto.", placeholder: "Isole o período de tempo..." },
      { id: 8, incorrectSentence: "Pela manhã gosto de tomar café.", placeholder: "Quando você gosta de café?..." },
      { id: 9, incorrectSentence: "Diante desse cenário é preciso agir rápido.", placeholder: "Isole a circunstância..." },
      { id: 10, incorrectSentence: "Nos Estados Unidos a lei é diferente.", placeholder: "Marque o lugar..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'O futuro do Planeta'. Regra: Comece pelo menos uma frase com uma marcação de tempo (Ex: 'No futuro,' ou 'Em 2050,') usando a vírgula."
    }
  },
  {
    id: "#05",
    topic: "O 'Mas' (Oposição)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Sempre use vírgula antes de palavras que indicam oposição ou contraste (mas, porém, contudo). É uma pausa para respirar antes de mudar o sentido da ideia.",
    },
    model: {
      error: "Ele estudou muito mas não passou.",
      correction: "Ele estudou muito, mas não passou.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Queria viajar mas não tenho dinheiro.", placeholder: "Insira a pausa antes da oposição..." },
      { id: 2, incorrectSentence: "O governo promete melhorias porém não cumpre.", placeholder: "Use a vírgula antes do porém..." },
      { id: 3, incorrectSentence: "A internet ajuda, contudo também atrapalha.", placeholder: "Verifique a pontuação..." },
      { id: 4, incorrectSentence: "Ele acordou cedo todavia chegou atrasado.", placeholder: "Contraste entre acordar e chegar..." },
      { id: 5, incorrectSentence: "O livro é bom entretanto o final é triste.", placeholder: "Separe a qualidade do defeito..." },
      { id: 6, incorrectSentence: "Eu gosto de estudar, mas, prefiro dormir.", placeholder: "Cuidado com o excesso de vírgulas..." },
      { id: 7, incorrectSentence: "O Brasil é lindo no entanto tem muita violência.", placeholder: "Isole o conector de oposição..." },
      { id: 8, incorrectSentence: "Ela tentou avisar mas ninguém ouviu.", placeholder: "Pausa antes do mas..." },
      { id: 9, incorrectSentence: "O projeto é ótimo todavia é muito caro.", placeholder: "Separe as ideias opostas..." },
      { id: 10, incorrectSentence: "O sol apareceu mas está frio.", placeholder: "Antes do mas..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'Redes Sociais'. Regra: Use uma palavra de oposição (mas, porém, contudo) precedida de vírgula para mostrar um lado positivo e um negativo."
    }
  },
  {
    id: "#06",
    topic: "O Chamamento (Vocativo)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Sempre que você 'chama' alguém na frase, tem que usar vírgula. Não importa se é o nome da pessoa, um apelido ou um cargo. É a 'pausa' para a pessoa perceber que você está falando com ela.",
    },
    model: {
      error: "Mãe traz a toalha.",
      correction: "Mãe, traz a toalha.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Professor posso tirar uma dúvida?", placeholder: "Isole o chamamento ao professor..." },
      { id: 2, incorrectSentence: "Não desista agora meu amigo.", placeholder: "Quem você está chamando?..." },
      { id: 3, incorrectSentence: "Bom dia Brasil!", placeholder: "Separe a saudação do nome..." },
      { id: 4, incorrectSentence: "Olha Maria que situação complicada.", placeholder: "Isole o nome da Maria..." },
      { id: 5, incorrectSentence: "Cidadãos é hora de votar consciente.", placeholder: "Chame os cidadãos com a vírgula..." },
      { id: 6, incorrectSentence: "Deus me ajude nessa prova.", placeholder: "Invoque com a pausa correta..." },
      { id: 7, incorrectSentence: "Venha cá menino e sente-se.", placeholder: "Isole 'menino' na frase..." },
      { id: 8, incorrectSentence: "Senhor Juiz peço deferimento.", placeholder: "Dirija-se ao juiz corretamente..." },
      { id: 9, incorrectSentence: "Calma gente vai dar tudo certo.", placeholder: "Separe o vocativo 'gente'..." },
      { id: 10, incorrectSentence: "Entenda meu filho que a vida não é fácil.", placeholder: "Vocativo no meio da frase..." },
    ],
    fixation: {
      description: "Escreva um diálogo curto (3 linhas) entre duas pessoas. Regra: Use o nome das pessoas ou apelidos (ex: 'Cara', 'Amiga') no início ou no final da frase, sempre usando a vírgula do vocativo."
    }
  },
  {
    id: "#07",
    topic: "A Conclusão (Portanto/Logo)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Palavras que indicam o final de um raciocínio ou uma conclusão pedem vírgula. Se você vai usar 'Portanto', 'Logo' ou 'Assim' para fechar uma ideia, coloque a vírgula antes.",
    },
    model: {
      error: "Ele não estudou logo reprovou.",
      correction: "Ele não estudou, logo reprovou.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O país está em crise portanto precisamos economizar.", placeholder: "Pausa antes da conclusão..." },
      { id: 2, incorrectSentence: "Penso logo existo.", placeholder: "A clássica frase precisa de vírgula..." },
      { id: 3, incorrectSentence: "A lei é clara assim todos devem obedecer.", placeholder: "Separe a consequência..." },
      { id: 4, incorrectSentence: "Choveu muito então o jogo foi cancelado.", placeholder: "Conclua com a pontuação correta..." },
      { id: 5, incorrectSentence: "Ele cometeu um crime por isso foi preso.", placeholder: "Pausa antes do motivo/consequência..." },
      { id: 6, incorrectSentence: "O prazo acabou logo não podemos mais enviar.", placeholder: "Use a vírgula antes do logo..." },
      { id: 7, incorrectSentence: "A educação é a base portanto deve ser prioridade.", placeholder: "Conclusão no meio da frase..." },
      { id: 8, incorrectSentence: "Você se esforçou merece a aprovação.", placeholder: "Insira um conectivo e a vírgula..." },
      { id: 9, incorrectSentence: "O ar está poluído dessa forma a saúde piora.", placeholder: "Separe a conclusão..." },
      { id: 10, incorrectSentence: "Não havia vagas então voltei para casa.", placeholder: "Pontue antes do então..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'A importância da leitura'. Regra: Termine o parágrafo com uma frase de conclusão usando 'Portanto,' ou 'Logo,'."
    }
  },
  {
    id: "#08",
    topic: "O 'E' Traiçoeiro (Sujeitos Diferentes)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Normalmente não se usa vírgula antes do 'e'. A exceção é quando quem faz a primeira ação é diferente de quem faz a segunda ação. Sujeitos diferentes pedem vírgula.",
    },
    model: {
      error: "O governo fez a obra e o povo agradeceu.",
      correction: "O governo fez a obra, e o povo agradeceu.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Eu limpei a casa e minha irmã lavou a louça.", placeholder: "Sujeitos diferentes? Use vírgula..." },
      { id: 2, incorrectSentence: "O professor explicou e saiu da sala.", placeholder: "Mesmo sujeito? Sem vírgula..." },
      { id: 3, incorrectSentence: "A luz apagou e a festa acabou.", placeholder: "Separe os acontecimentos distintos..." },
      { id: 4, incorrectSentence: "O sol nasceu e os pássaros começaram a cantar.", placeholder: "Ações de sujeitos diferentes..." },
      { id: 5, incorrectSentence: "Ela estudou muito e passou no vestibular.", placeholder: "Mesma pessoa fez tudo..." },
      { id: 6, incorrectSentence: "O dólar subiu e as importações caíram.", placeholder: "Economia: sujeitos diferentes..." },
      { id: 7, incorrectSentence: "João correu e Maria ficou parada.", placeholder: "Separe o João da Maria..." },
      { id: 8, incorrectSentence: "O policial apitou e o carro parou.", placeholder: "Ações distintas, sujeitos distintos..." },
      { id: 9, incorrectSentence: "Nós viajamos e eles ficaram em casa.", placeholder: "Nós vs Eles..." },
      { id: 10, incorrectSentence: "O menino caiu e chorou.", placeholder: "Mesmo menino?..." },
    ],
    fixation: {
      description: "Escreva duas frases sobre 'Um dia chuvoso'. Regra: Na primeira frase, use o mesmo sujeito para duas ações (sem vírgula). Na segunda, use sujeitos diferentes (com vírgula antes do 'e')."
    }
  },
  {
    id: "#09",
    topic: "A Interrupção (Intercalação Curta)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Quando você 'quebra' a frase no meio para dar uma opinião rápida ou adicionar um detalhe, use duas vírgulas. Palavras como 'por exemplo', 'na verdade', 'infelizmente' ficam presas entre vírgulas.",
    },
    model: {
      error: "O Brasil infelizmente tem muita corrupção.",
      correction: "O Brasil, infelizmente, tem muita corrupção.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O aluno na minha opinião estava certo.", placeholder: "Isole a opinião..." },
      { id: 2, incorrectSentence: "A prova por exemplo estava muito difícil.", placeholder: "Isole o exemplo..." },
      { id: 3, incorrectSentence: "Os políticos na maioria das vezes prometem demais.", placeholder: "Separe o comentário intercalado..." },
      { id: 4, incorrectSentence: "O trânsito em São Paulo é caótico.", placeholder: "Isole o local no meio da frase..." },
      { id: 5, incorrectSentence: "A tecnologia na verdade aproxima e afasta.", placeholder: "Destaque a expressão 'na verdade'..." },
      { id: 6, incorrectSentence: "O tempo infelizmente não para.", placeholder: "Isole o lamento..." },
      { id: 7, incorrectSentence: "A água potável segundo pesquisas está acabando.", placeholder: "Cite a fonte entre vírgulas..." },
      { id: 8, incorrectSentence: "O futebol esporte popular move multidões.", placeholder: "Explique o esporte..." },
      { id: 9, incorrectSentence: "A vida entretanto continua.", placeholder: "Conectivo deslocado..." },
      { id: 10, incorrectSentence: "Você com certeza vai passar.", placeholder: "Enfatize a certeza..." },
    ],
    fixation: {
      description: "Escreva uma frase defendendo sua comida favorita. Regra: Use a expressão 'sem dúvida' ou 'na minha opinião' no meio da frase, entre vírgulas."
    }
  },
  {
    id: "#10",
    topic: "A Proibida II (Verbo e Complemento)",
    metaTime: "30 Minutos",
    theory: {
      title: "O Desbloqueio",
      content: "Nunca separe a ação (verbo) do alvo da ação (objeto). Se você diz 'Eu comprei', a resposta 'o quê?' (ex: 'um carro') tem que vir colada no verbo, sem vírgula no meio.",
    },
    model: {
      error: "O presidente anunciou, novas medidas.",
      correction: "O presidente anunciou novas medidas.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O ministro da saúde garantiu, a chegada das vacinas.", placeholder: "Quem garante, garante algo..." },
      { id: 2, incorrectSentence: "É preciso combater, o preconceito racial.", placeholder: "Una o verbo ao objeto..." },
      { id: 3, incorrectSentence: "As escolas devem oferecer, merenda de qualidade.", placeholder: "Remova a barreira..." },
      { id: 4, incorrectSentence: "O aquecimento global causa, desastres naturais.", placeholder: "Quem causa, causa algo..." },
      { id: 5, incorrectSentence: "Eu espero, que você entenda.", placeholder: "Sem pausa entre espero e que..." },
      { id: 6, incorrectSentence: "A sociedade exige, mais segurança.", placeholder: "Fluxo direto..." },
      { id: 7, incorrectSentence: "Não devemos jogar lixo, na rua.", placeholder: "Atenção: ordem direta..." },
      { id: 8, incorrectSentence: "O autor descreve, o cenário com detalhes.", placeholder: "Una a descrição ao cenário..." },
      { id: 9, incorrectSentence: "O uso de máscaras evita, o contágio.", placeholder: "Remova a vírgula..." },
      { id: 10, incorrectSentence: "O cidadão deve respeitar as leis.", placeholder: "Verifique se está correto..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'O que o governo deve fazer pela educação'. Regra: Use verbos como 'deve garantir', 'precisa investir' e NÃO use vírgula depois deles."
    }
  }
];