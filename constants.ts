import { TrainingSheetData } from './types';

export const SHEETS: TrainingSheetData[] = [
  // --- VOLUME 1: VÍRGULAS (TEAL THEME) ---
  {
    id: "#01",
    topic: "A Regra de Ouro (Sujeito e Verbo)",
    metaTime: "30 Minutos",
    theme: 'teal',
    sectionInfo: {
      title: "Foco em Vírgula",
      subtitle: "Regras básicas, proibitivas e deslocamentos"
    },
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
    theme: 'teal',
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
  },

  // --- VOLUME 2: CRASE (INDIGO THEME) ---
  {
    id: "#11",
    topic: "O Truque da Volta (Regra Geral)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    sectionInfo: {
      title: "Volume 1: Continuação",
      subtitle: "Foco: Crase (Regra Geral, Proibições e Casos Específicos)"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Crase é a fusão de dois 'As'. Para saber se tem crase antes de lugares, use o truque: 'Vou A, volto DA = Crase há! Vou A, volto DE = Crase pra quê?'. Se você volta 'da' Bahia, você vai 'à' Bahia.",
    },
    model: {
      error: "Fui a Bahia nas férias.",
      correction: "Fui à Bahia nas férias.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Fui a praia caminhar.", placeholder: "Aplique o truque da volta..." },
      { id: 2, incorrectSentence: "Iremos a Curitiba no feriado.", placeholder: "Volto de Curitiba ou da Curitiba?..." },
      { id: 3, incorrectSentence: "Eles viajaram a Itália.", placeholder: "Volto da Itália?..." },
      { id: 4, incorrectSentence: "Voltei a Roma antiga nos meus estudos.", placeholder: "Roma está especificada?..." },
      { id: 5, incorrectSentence: "Vamos a festa hoje à noite.", placeholder: "Substitua por 'ao baile'..." },
      { id: 6, incorrectSentence: "Chegaremos a Brasília amanhã.", placeholder: "Volto de Brasília..." },
      { id: 7, incorrectSentence: "O navio chegou a África.", placeholder: "Volto da África..." },
      { id: 8, incorrectSentence: "Fui a padaria comprar pão.", placeholder: "Volto da padaria..." },
      { id: 9, incorrectSentence: "Ela foi a Santa Catarina visitar parentes.", placeholder: "Volto de Santa Catarina..." },
      { id: 10, incorrectSentence: "Levei meu filho a escola.", placeholder: "Volto da escola..." },
    ],
    fixation: {
      description: "Escreva 3 frases dizendo lugares aonde você gostaria de ir. Regra: Um lugar deve exigir crase (Volto da...) e um não deve exigir (Volto de...)."
    }
  },
  {
    id: "#12",
    topic: "A Proibida I (Palavra Masculina)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Nunca, jamais use crase antes de palavra masculina. O artigo feminino 'a' não gosta de palavras masculinas. Se a palavra da frente admite 'O' (ex: O prazo, O pé), a crase é proibida.",
    },
    model: {
      error: "Venda à prazo.",
      correction: "Venda a prazo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Escreveu o texto à lápis.", placeholder: "Lápis é masculino (O lápis)..." },
      { id: 2, incorrectSentence: "Andamos à cavalo na fazenda.", placeholder: "Cavalo é masculino..." },
      { id: 3, incorrectSentence: "Fizemos o percurso à pé.", placeholder: "Pé é masculino..." },
      { id: 4, incorrectSentence: "O pagamento foi feito à vista.", placeholder: "Atenção: A vista é feminina..." },
      { id: 5, incorrectSentence: "O carro é movido à óleo.", placeholder: "Óleo é masculino..." },
      { id: 6, incorrectSentence: "Bife à cavalo.", placeholder: "Cuidado com a exceção culinária..." },
      { id: 7, incorrectSentence: "Ele não dá valor à dinheiro.", placeholder: "Dinheiro é masculino..." },
      { id: 8, incorrectSentence: "Assistiu ao filme à bordo do avião.", placeholder: "Bordo é masculino..." },
      { id: 9, incorrectSentence: "O ataque foi feito à sangue frio.", placeholder: "Sangue é masculino..." },
      { id: 10, incorrectSentence: "Refiro-me àquele caso.", placeholder: "Foque na regra da palavra seguinte..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre como você vai à escola ou ao trabalho. Regra: Use expressões como 'a pé', 'a ônibus' (sem crase) ou 'de carro'."
    }
  },
  {
    id: "#13",
    topic: "A Proibida II (Antes de Verbo)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Verbo não tem sexo, por isso não aceita artigo 'a'. Logo, não tem crase antes de verbo. 'Estou a pensar'. Nunca coloque o acento grave antes de uma ação.",
    },
    model: {
      error: "Ele está disposto à ajudar.",
      correction: "Ele está disposto a ajudar.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Ela começou à falar alto.", placeholder: "Tem verbo depois do A?..." },
      { id: 2, incorrectSentence: "Estamos à esperar uma resposta.", placeholder: "Esperar é ação..." },
      { id: 3, incorrectSentence: "O governo passou à investir mais.", placeholder: "Sem crase antes de verbo..." },
      { id: 4, incorrectSentence: "O aluno pôs-se à estudar.", placeholder: "Estudar é verbo..." },
      { id: 5, incorrectSentence: "Fiquei à ver navios.", placeholder: "Ver é verbo..." },
      { id: 6, incorrectSentence: "A partir de hoje, serei mais focado.", placeholder: "Partir é verbo..." },
      { id: 7, incorrectSentence: "Nada temos à declarar.", placeholder: "Declarar é verbo..." },
      { id: 8, incorrectSentence: "Ela aprendeu à dirigir ontem.", placeholder: "Dirigir é verbo..." },
      { id: 9, incorrectSentence: "Ele voltou à sorrir depois da notícia.", placeholder: "Sorrir é verbo..." },
      { id: 10, incorrectSentence: "Estou à procura de emprego.", placeholder: "Atenção: Procura é substantivo aqui..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre seus planos futuros. Regra: Use a estrutura 'Começarei a...' ou 'Estou disposto a...' seguida de um verbo, sem crase."
    }
  },
  {
    id: "#14",
    topic: "A Hora Exata (Tempo)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Horas exatas sempre têm crase. 'Às 14h'. É como se você dissesse 'Ao meio-dia'. Exceção: Se tiver preposição antes (Para, Desde, Até), a crase some ou é facultativa.",
    },
    model: {
      error: "A reunião será as 15h.",
      correction: "A reunião será às 15h.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Acordo todo dia as 06h da manhã.", placeholder: "Coloque a crase na hora..." },
      { id: 2, incorrectSentence: "O filme começa as 20h.", placeholder: "Hora exata exige crase..." },
      { id: 3, incorrectSentence: "A aula vai das 08h as 12h.", placeholder: "Crase no segundo 'as'..." },
      { id: 4, incorrectSentence: "Cheguei a uma hora da tarde.", placeholder: "Hora especificada..." },
      { id: 5, incorrectSentence: "Sairei as duas horas.", placeholder: "Indique a crase..." },
      { id: 6, incorrectSentence: "A festa está marcada para as 22h.", placeholder: "Tem 'para'? Sem crase..." },
      { id: 7, incorrectSentence: "Ele estuda desde as 13h.", placeholder: "Tem 'desde'?..." },
      { id: 8, incorrectSentence: "O banco abre as 10h.", placeholder: "Pontue a hora..." },
      { id: 9, incorrectSentence: "Estarei lá as 18h30.", placeholder: "Hora quebrada também leva..." },
      { id: 10, incorrectSentence: "O toque de recolher é a zero hora.", placeholder: "Meia-noite / Zero hora..." },
    ],
    fixation: {
      description: "Escreva sua rotina matinal em 3 frases. Regra: Cite os horários que você acorda e toma café usando crase (ex: Às 07h...)."
    }
  },
  {
    id: "#15",
    topic: "O Modo (Locuções Femininas)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Expressões femininas que indicam tempo, modo ou lugar levam crase. Ex: 'À noite', 'Às vezes', 'À direita', 'Às pressas'. Se você trocar por uma masculina e virar 'AO', tem crase.",
    },
    model: {
      error: "Virou a esquerda na rua.",
      correction: "Virou à esquerda na rua.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Ele estuda a noite.", placeholder: "Tempo feminino..." },
      { id: 2, incorrectSentence: "As vezes sinto sono na aula.", placeholder: "Locução de tempo..." },
      { id: 3, incorrectSentence: "Saiu as pressas para não atrasar.", placeholder: "Modo feminino..." },
      { id: 4, incorrectSentence: "Ficou a vontade na festa.", placeholder: "Modo de estar..." },
      { id: 5, incorrectSentence: "Andava a toa pela cidade.", placeholder: "Locução 'à toa'..." },
      { id: 6, incorrectSentence: "O carro dobrou a direita.", placeholder: "Lugar/Direção..." },
      { id: 7, incorrectSentence: "Escreveu o texto a mão.", placeholder: "Ao computador vs A mão..." },
      { id: 8, incorrectSentence: "Fez o pedido a medida que precisava.", placeholder: "Locução conjuntiva..." },
      { id: 9, incorrectSentence: "Tudo ficou as claras.", placeholder: "Modo..." },
      { id: 10, incorrectSentence: "O soldado estava a paisana.", placeholder: "À moda paisana..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'Um dia corrido'. Regra: Use as expressões 'às pressas' e 'à noite' ou 'à tarde'."
    }
  },
  {
    id: "#16",
    topic: "Casa e Terra (Especificar é Preciso)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: 'Casa' (lar) e 'Terra' (chão) são tímidas. Só aceitam crase se tiverem 'dono' ou forem especificadas. 'Cheguei a casa' (sem crase). 'Cheguei à casa da Maria' (tem dono, tem crase).",
    },
    model: {
      error: "Voltei à casa cansado.",
      correction: "Voltei a casa cansado.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Após o trabalho, vou à casa.", placeholder: "Casa própria sem especificador..." },
      { id: 2, incorrectSentence: "Fui à casa de meus pais ontem.", placeholder: "Casa especificada..." },
      { id: 3, incorrectSentence: "O navio retornou à terra firme.", placeholder: "Terra oposta a mar..." },
      { id: 4, incorrectSentence: "Voltei à terra onde nasci.", placeholder: "Terra especificada..." },
      { id: 5, incorrectSentence: "Chegamos a casa exaustos.", placeholder: "Sem crase aqui..." },
      { id: 6, incorrectSentence: "Bem-vindo à casa dos Silva.", placeholder: "Tem dono..." },
      { id: 7, incorrectSentence: "O astronauta voltou à Terra.", placeholder: "Planeta Terra..." },
      { id: 8, incorrectSentence: "Ele quer voltar a terra natal.", placeholder: "Terra natal é específica..." },
      { id: 9, incorrectSentence: "Nunca mais voltei àquela casa.", placeholder: "Fusão A + Aquela..." },
      { id: 10, incorrectSentence: "Vou a casa almoçar.", placeholder: "Casa 'lar'..." },
    ],
    fixation: {
      description: "Escreva duas frases. Regra: Uma frase indo para a 'sua casa' (sem crase) e outra indo para a 'casa de um amigo' (com crase)."
    }
  },
  {
    id: "#17",
    topic: "Aquele, Aquela, Aquilo",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Se o verbo pede 'A' e a palavra seguinte é 'Aquele/Aquela/Aquilo', os dois 'As' se fundem. Dica: Troque 'Aquele' por 'A este'. Se ficar 'A este', tem crase no Àquele.",
    },
    model: {
      error: "Entreguei o prêmio a aquele aluno.",
      correction: "Entreguei o prêmio àquele aluno.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Não obedeço a aquele regulamento.", placeholder: "Obedeço a este..." },
      { id: 2, incorrectSentence: "Refiro-me aquilo que você disse.", placeholder: "Refiro-me a isto..." },
      { id: 3, incorrectSentence: "Fui a aquela festa chata.", placeholder: "Fui a esta..." },
      { id: 4, incorrectSentence: "Comprei aquele carro.", placeholder: "Comprei este (sem A)..." },
      { id: 5, incorrectSentence: "Assisti àquele filme premiado.", placeholder: "Assisti a este..." },
      { id: 6, incorrectSentence: "Dei o recado àquela professora.", placeholder: "Dei a esta..." },
      { id: 7, incorrectSentence: "Visitei aquela cidade.", placeholder: "Visitei esta..." },
      { id: 8, incorrectSentence: "Dedico meu sucesso àqueles que me apoiaram.", placeholder: "A estes..." },
      { id: 9, incorrectSentence: "Escrevi uma carta àquela menina.", placeholder: "A esta..." },
      { id: 10, incorrectSentence: "Veja aquele avião!", placeholder: "Veja este..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre algo que você quer. Regra: Use o verbo 'Referir-se' (que pede crase) seguido de 'Aquilo' ou 'Aquele'. Ex: 'Refiro-me àquilo...'"
    }
  },
  {
    id: "#18",
    topic: "Facultativa I (Pronome Possessivo)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Antes de 'Minha', 'Sua', 'Nossa' (femininos singulares), a crase é Tanto Faz. 'Entreguei a minha mãe' (Certo) ou 'Entreguei à minha mãe' (Certo e elegante).",
    },
    model: {
      error: "Refiro-me a sua ideia (Certo).",
      correction: "Refiro-me à sua ideia (Certo).",
    },
    exercises: [
      { id: 1, incorrectSentence: "( ) Dei o presente à minha irmã.", placeholder: "C ou E?" },
      { id: 2, incorrectSentence: "( ) Dei o presente a minha irmã.", placeholder: "C ou E?" },
      { id: 3, incorrectSentence: "( ) Fui à sua festa.", placeholder: "C ou E?" },
      { id: 4, incorrectSentence: "( ) Fui a sua festa.", placeholder: "C ou E?" },
      { id: 5, incorrectSentence: "( ) Respeito às suas decisões.", placeholder: "Respeitar pede A?" },
      { id: 6, incorrectSentence: "( ) Respeito as suas decisões.", placeholder: "Respeito algo..." },
      { id: 7, incorrectSentence: "( ) Enviei o e-mail à nossa diretora.", placeholder: "C ou E?" },
      { id: 8, incorrectSentence: "( ) Peço desculpas a vossa senhoria.", placeholder: "Pronome tratamento..." },
      { id: 9, incorrectSentence: "( ) Ele fez elogios à minha redação.", placeholder: "C ou E?" },
      { id: 10, incorrectSentence: "( ) Ele fez elogios a minha redação.", placeholder: "C ou E?" },
    ],
    fixation: {
      description: "Escreva uma frase enviando algo para 'sua mãe' ou 'sua amiga'. Regra: Escreva a mesma frase duas vezes: uma com crase e uma sem. "
    }
  },
  {
    id: "#19",
    topic: "Facultativa II (Nomes de Mulher)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Antes de nomes próprios femininos (Maria, Joana), a crase também é opcional. 'Dei o livro a Ana' ou 'Dei o livro à Ana'. Ambos certos.",
    },
    model: {
      error: "Peça ajuda a Júlia (Certo).",
      correction: "Peça ajuda à Júlia (Certo).",
    },
    exercises: [
      { id: 1, incorrectSentence: "Escrevi uma carta a Mariana.", placeholder: "Coloque crase ou deixe..." },
      { id: 2, incorrectSentence: "Fizeram uma homenagem a Clarice Lispector.", placeholder: "Opcional..." },
      { id: 3, incorrectSentence: "O prêmio foi entregue a Fernanda.", placeholder: "Opcional..." },
      { id: 4, incorrectSentence: "Contei o segredo a Beatriz.", placeholder: "Opcional..." },
      { id: 5, incorrectSentence: "Dedico este livro a minha esposa, Helena.", placeholder: "Opcional..." },
      { id: 6, incorrectSentence: "Pergunte a Luana se ela vai.", placeholder: "Opcional..." },
      { id: 7, incorrectSentence: "Diga a Paula que cheguei.", placeholder: "Opcional..." },
      { id: 8, incorrectSentence: "Ofereci flores a Camila.", placeholder: "Opcional..." },
      { id: 9, incorrectSentence: "Não conheço a Amanda.", placeholder: "Quem conhece, conhece alguém (Sem crase)..." },
      { id: 10, incorrectSentence: "Agradeço a Juliana pela ajuda.", placeholder: "Opcional..." },
    ],
    fixation: {
      description: "Escreva uma frase dizendo que você deu um presente para uma amiga (use o nome dela). Regra: Use a crase."
    }
  },
  {
    id: "#20",
    topic: "O Grande Teste (Revisão de Crase)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Misturamos tudo. Fluxograma mental: É masculina/verbo? (PARE). É hora/locução feminina? (CRASE). É lugar? (Vou a, Volto da). É 'Aquele'? (A este).",
    },
    model: {
      error: "Acesso ... internet (Fem) / Acesso ... computador (Masc)",
      correction: "Acesso à internet / Acesso ao computador",
    },
    exercises: [
      { id: 1, incorrectSentence: "Fomos a praia a pé.", placeholder: "Corrija as crases..." },
      { id: 2, incorrectSentence: "O curso começa as 19h.", placeholder: "Hora exata..." },
      { id: 3, incorrectSentence: "Não fale à ninguém.", placeholder: "Ninguém aceita crase?..." },
      { id: 4, incorrectSentence: "Estamos dispostos à colaborar.", placeholder: "Verbo..." },
      { id: 5, incorrectSentence: "Refiro-me àquele problema antigo.", placeholder: "Verifique Aquele..." },
      { id: 6, incorrectSentence: "Ele foi a Paris e voltou da França.", placeholder: "Voltou de Paris..." },
      { id: 7, incorrectSentence: "A medida que estudamos, aprendemos.", placeholder: "Locução..." },
      { id: 8, incorrectSentence: "Venda a prazo com desconto a vista.", placeholder: "Prazo vs Vista..." },
      { id: 9, incorrectSentence: "Respeite às leis de trânsito.", placeholder: "Respeitar pede preposição?..." },
      { id: 10, incorrectSentence: "Obedeça às leis de trânsito.", placeholder: "Obedecer pede preposição?..." },
    ],
    fixation: {
      description: "Escreva um parágrafo de 4 linhas sobre 'Como a tecnologia afeta a sociedade'. Regra: Use pelo menos 3 casos de crase corretamente (pode ser antes de palavra feminina, 'à medida que', ou 'às vezes')."
    }
  },

  // --- VOLUME 3: PONTUAÇÃO EXPRESSIVA E REVISÃO (ROSE THEME) ---
  {
    id: "#21",
    topic: "O Anunciante (Dois Pontos)",
    metaTime: "30 Minutos",
    theme: 'rose',
    sectionInfo: {
      title: "Volume 1: Finalização",
      subtitle: "Foco: Pontuação Expressiva (Estilo) e Revisão Geral do Mês 1"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Os dois pontos servem para anunciar que algo vai acontecer. Eles dizem: 'Atenção, lá vem uma lista!' ou 'Atenção, lá vem uma explicação!'. Use antes de enumerações ou antes de explicar um conceito.",
    },
    model: {
      error: "O Brasil tem problemas como saúde e educação.",
      correction: "O Brasil tem graves problemas: saúde e educação.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Existem três poderes que são o Executivo, Legislativo e Judiciário.", placeholder: "Use dois pontos antes da lista..." },
      { id: 2, incorrectSentence: "O problema é apenas um que é a falta de empatia.", placeholder: "Anuncie o problema..." },
      { id: 3, incorrectSentence: "Comprei várias frutas como maçã, uva e pera.", placeholder: "Use dois pontos para listar..." },
      { id: 4, incorrectSentence: "Só quero uma coisa que é passar no vestibular.", placeholder: "Anuncie seu desejo..." },
      { id: 5, incorrectSentence: "A solução envolve três pilares: educação, fiscalização e punição.", placeholder: "Já está certa? Marque OK..." },
      { id: 6, incorrectSentence: "Ele citou Sócrates que disse 'Só sei que nada sei'.", placeholder: "Dois pontos antes da citação..." },
      { id: 7, incorrectSentence: "Tenho dois objetivos estudar e trabalhar.", placeholder: "Separe os objetivos..." },
      { id: 8, incorrectSentence: "As causas da crise são corrupção e má gestão.", placeholder: "Anuncie as causas..." },
      { id: 9, incorrectSentence: "O lema da bandeira é Ordem e Progresso.", placeholder: "O lema é: ..." },
      { id: 10, incorrectSentence: "Defendo esta tese a educação transforma a sociedade.", placeholder: "Explique a tese..." },
    ],
    fixation: {
      description: "Escreva uma frase listando 3 qualidades que um estudante deve ter. Regra: Use dois pontos antes de começar a lista. (Ex: 'O aluno precisa ter: ...')."
    }
  },
  {
    id: "#22",
    topic: "O Holofote (Travessão)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O travessão (—) serve para destacar, dar ênfase ou explicar algo com mais estilo. Enquanto os parênteses escondem a informação, o travessão joga luz nela. Use para isolar uma explicação.",
    },
    model: {
      error: "O SUS (Sistema Único de Saúde) é vital.",
      correction: "O SUS — Sistema Único de Saúde — é vital.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A internet, ferramenta essencial, também traz riscos.", placeholder: "Troque vírgulas por travessões..." },
      { id: 2, incorrectSentence: "O Brasil (país de dimensões continentais) sofre com logística.", placeholder: "Dê destaque à explicação..." },
      { id: 3, incorrectSentence: "A educação, base da sociedade, precisa de verbas.", placeholder: "Use o holofote..." },
      { id: 4, incorrectSentence: "Os jovens, futuro da nação, estão ansiosos.", placeholder: "Destaque quem são os jovens..." },
      { id: 5, incorrectSentence: "A água, recurso finito, está escassa.", placeholder: "Explique a água com ênfase..." },
      { id: 6, incorrectSentence: "O machismo (problema estrutural) deve ser combatido.", placeholder: "Tire os parênteses..." },
      { id: 7, incorrectSentence: "Machado de Assis, fundador da ABL, era genial.", placeholder: "Isole a importância dele..." },
      { id: 8, incorrectSentence: "A tecnologia, que deveria unir, às vezes afasta.", placeholder: "Use travessões..." },
      { id: 9, incorrectSentence: "O medo, sentimento paralisante, impede o progresso.", placeholder: "Explique o sentimento..." },
      { id: 10, incorrectSentence: "A desigualdade (raiz de muitos males) persiste.", placeholder: "Destaque a causa..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre o Brasil. Regra: No meio da frase, use dois travessões para inserir uma explicação ou opinião sobre o país."
    }
  },
  {
    id: "#23",
    topic: "Voz Alheia (Aspas)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Use aspas para Citação (quando a frase não é sua) ou Neologismo/Gíria (quando usar palavra informal). Aspas mostram que você sabe que aquilo não é seu ou não é norma culta.",
    },
    model: {
      error: "Segundo Kant, o homem é aquilo que a educação faz dele.",
      correction: "Segundo Kant, 'o homem é aquilo que a educação faz dele'.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Penso, logo existo, disse Descartes.", placeholder: "Isole a frase famosa..." },
      { id: 2, incorrectSentence: "O comportamento de cancelar alguém na internet é tóxico.", placeholder: "Aspas na gíria..." },
      { id: 3, incorrectSentence: "A disseminação de fake news é perigosa.", placeholder: "Termo estrangeiro/neologismo..." },
      { id: 4, incorrectSentence: "Como disse Nelson Mandela: A educação é a arma mais poderosa...", placeholder: "Cite corretamente..." },
      { id: 5, incorrectSentence: "O jeitinho brasileiro precisa acabar.", placeholder: "Expressão informal..." },
      { id: 6, incorrectSentence: "O Uberização do trabalho é uma realidade.", placeholder: "Neologismo..." },
      { id: 7, incorrectSentence: "Segundo Durkheim, o fato social é coercitivo.", placeholder: "Conceito específico..." },
      { id: 8, incorrectSentence: "Muitos sofrem de Burnout no trabalho.", placeholder: "Termo estrangeiro..." },
      { id: 9, incorrectSentence: "O autor afirma que a cegueira moral afeta a todos.", placeholder: "Conceito do autor..." },
      { id: 10, incorrectSentence: "Ela deu um ghosting no namorado.", placeholder: "Gíria moderna..." },
    ],
    fixation: {
      description: "Escreva uma frase citando um ditado popular ou uma frase famosa. Regra: Use aspas corretamente na citação."
    }
  },
  {
    id: "#24",
    topic: "O Organizador (Ponto e Vírgula)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O ponto e vírgula (;) serve para separar itens de uma lista que já são longos ou contêm vírgulas. Ele organiza a bagunça.",
    },
    model: {
      error: "Gosto de ler, escrever e correr, de manhã, à tarde e à noite.",
      correction: "Gosto de: ler, escrever e correr; de manhã, à tarde e à noite.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Para a saúde, coma frutas, para a mente, leia livros.", placeholder: "Separe os dois conselhos..." },
      { id: 2, incorrectSentence: "O artigo 5º garante a vida, o artigo 6º, os direitos sociais.", placeholder: "Separe os artigos..." },
      { id: 3, incorrectSentence: "Uns preferem o calor, outros, o frio.", placeholder: "Organize as preferências..." },
      { id: 4, incorrectSentence: "Estudar exige foco, passar, persistência.", placeholder: "Separe as etapas..." },
      { id: 5, incorrectSentence: "No Brasil, falta lei, na Europa, falta gente.", placeholder: "Separe os locais..." },
      { id: 6, incorrectSentence: "A criança precisa de brincar, o adulto, de trabalhar.", placeholder: "Separe as fases..." },
      { id: 7, incorrectSentence: "O norte é quente, o sul, frio.", placeholder: "Separe as regiões..." },
      { id: 8, incorrectSentence: "Ela gosta de exatas, ele, de humanas.", placeholder: "Separe os gostos..." },
      { id: 9, incorrectSentence: "Kant focava na moral, Maquiavel, na política.", placeholder: "Separe os filósofos..." },
      { id: 10, incorrectSentence: "As causas são a negligência, as consequências, o caos.", placeholder: "Separe causa de consequência..." },
    ],
    fixation: {
      description: "Escreva uma frase comparando duas coisas (ex: Exatas e Humanas, ou Dia e Noite). Regra: Use o ponto e vírgula para separar as duas partes da comparação."
    }
  },
  {
    id: "#25",
    topic: "O Sussurro (Parênteses)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Use parênteses para inserir informação secundária, sigla ou fonte. Dica Elite: Use para apresentar siglas na primeira vez que aparecem. 'Organização das Nações Unidas (ONU)'.",
    },
    model: {
      error: "O IBGE divulgou os dados ontem.",
      correction: "O Instituto Brasileiro de Geografia e Estatística (IBGE) divulgou...",
    },
    exercises: [
      { id: 1, incorrectSentence: "A Organização Mundial da Saúde OMS alertou sobre o vírus.", placeholder: "Isole a sigla..." },
      { id: 2, incorrectSentence: "A Constituição Federal CF garante direitos.", placeholder: "Sigla..." },
      { id: 3, incorrectSentence: "Machado de Assis 1839-1908 foi um gênio.", placeholder: "Datas..." },
      { id: 4, incorrectSentence: "O Produto Interno Bruto PIB caiu este ano.", placeholder: "Sigla..." },
      { id: 5, incorrectSentence: "A Lei de Diretrizes e Bases LDB rege a educação.", placeholder: "Sigla..." },
      { id: 6, incorrectSentence: "O filme Matrix 1999 é um clássico.", placeholder: "Data..." },
      { id: 7, incorrectSentence: "O dióxido de carbono CO2 polui o ar.", placeholder: "Fórmula..." },
      { id: 8, incorrectSentence: "Brasília DF é a capital.", placeholder: "Sigla estado..." },
      { id: 9, incorrectSentence: "Os Estados Unidos EUA são uma potência.", placeholder: "Sigla..." },
      { id: 10, incorrectSentence: "O Exame Nacional do Ensino Médio Enem ocorre anualmente.", placeholder: "Sigla..." },
    ],
    fixation: {
      description: "Escreva uma frase citando uma instituição (ex: MEC, SUS, ONU). Regra: Escreva o nome completo e coloque a sigla entre parênteses."
    }
  },
  {
    id: "#26",
    topic: "O Que NÃO Usar (Proibições)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Em textos formais, evite reticências (...) e exclamação (!). Reticências indicam dúvida; exclamação, emoção exagerada. O texto deve ser racional. Troque ambos por ponto final.",
    },
    model: {
      error: "O problema é grave!",
      correction: "O problema é grave.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Isso é um absurdo!", placeholder: "Torne formal..." },
      { id: 2, incorrectSentence: "O Brasil precisa mudar logo!", placeholder: "Sem gritos..." },
      { id: 3, incorrectSentence: "Existem vários problemas: fome, miséria, seca...", placeholder: "Sem reticências..." },
      { id: 4, incorrectSentence: "A corrupção destrói o país!", placeholder: "Ponto final..." },
      { id: 5, incorrectSentence: "Temos que agir...", placeholder: "Complete ou feche..." },
      { id: 6, incorrectSentence: "É inaceitável que isso continue acontecendo!", placeholder: "Formalize..." },
      { id: 7, incorrectSentence: "Comprei livros, cadernos, canetas...", placeholder: "Encerre a lista..." },
      { id: 8, incorrectSentence: "Que situação triste!", placeholder: "Sem emoção..." },
      { id: 9, incorrectSentence: "A violência cresce a cada dia...", placeholder: "Afirme com certeza..." },
      { id: 10, incorrectSentence: "Precisamos de paz!", placeholder: "Ponto final..." },
    ],
    fixation: {
      description: "Escreva uma frase indignada sobre a corrupção, mas usando pontuação formal (apenas ponto final). Regra: Sem usar exclamação."
    }
  },
  {
    id: "#27",
    topic: "Revisão Turbo I (Vírgula)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Hora de revisar. Lembre-se: Não separe Sujeito e Verbo. Use vírgula para listar. Use vírgula para isolar tempo/lugar no início. Use vírgula antes do 'Mas'.",
    },
    model: {
      error: "O povo, precisa de justiça.",
      correction: "O povo precisa de justiça.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A tecnologia, ajuda mas vicia.", placeholder: "Arrume a conjunção e a separação..." },
      { id: 2, incorrectSentence: "No Brasil a lei é lenta.", placeholder: "Deslocamento..." },
      { id: 3, incorrectSentence: "O aluno, estudioso, passou.", placeholder: "Está certo? (Aposto)..." },
      { id: 4, incorrectSentence: "O aluno, passou.", placeholder: "Sujeito e verbo..." },
      { id: 5, incorrectSentence: "Fui ao mercado e comprei, pão.", placeholder: "Verbo e objeto..." },
      { id: 6, incorrectSentence: "Maria José e João saíram.", placeholder: "Precisa de vírgula na lista?..." },
      { id: 7, incorrectSentence: "Maria, José e João saíram.", placeholder: "Está certo?..." },
      { id: 8, incorrectSentence: "Ele disse, que viria.", placeholder: "Separou oração..." },
      { id: 9, incorrectSentence: "Portanto devemos agir.", placeholder: "Conclusão..." },
      { id: 10, incorrectSentence: "Homens e mulheres, buscam igualdade.", placeholder: "Sujeito composto..." },
    ],
    fixation: {
      description: "Escreva 3 linhas sobre 'Meio Ambiente'. Tente cometer ZERO erros de vírgula."
    }
  },
  {
    id: "#28",
    topic: "Revisão Turbo II (Crase)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Resumo anti-crase: Antes de masculino? Não. Antes de verbo? Não. Palavra repetida? Não. Hora exata? Sim. Vou a, volto da? Sim.",
    },
    model: {
      error: "Andar à pé.",
      correction: "Andar a pé.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Fui ___ festa ontem.", placeholder: "a, à, as ou às?" },
      { id: 2, incorrectSentence: "Fui ___ pé para casa.", placeholder: "a ou à?" },
      { id: 3, incorrectSentence: "Cheguei ___ 10h da manhã.", placeholder: "Hora exata..." },
      { id: 4, incorrectSentence: "Estou disposto ___ estudar.", placeholder: "Verbo..." },
      { id: 5, incorrectSentence: "Referiu-se ___quele livro.", placeholder: "Aquele..." },
      { id: 6, incorrectSentence: "Entregue ___ ela.", placeholder: "Pronome..." },
      { id: 7, incorrectSentence: "Ficou frente ___ frente com o inimigo.", placeholder: "Repetida..." },
      { id: 8, incorrectSentence: "Vamos ___ praia.", placeholder: "Lugar..." },
      { id: 9, incorrectSentence: "Voltei ___ casa de minha mãe.", placeholder: "Casa especificada..." },
      { id: 10, incorrectSentence: "O texto foi escrito ___ mão.", placeholder: "Modo..." },
    ],
    fixation: {
      description: "Escreva uma frase que tenha Crase e uma frase que NÃO tenha Crase, sobre o tema 'Viagem'."
    }
  },
  {
    id: "#29",
    topic: "Simulado de Erros Comuns",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Esta ficha não tem teoria nova. Ela simula o olhar do corretor. Abaixo, temos frases com erros misturados (vírgula, crase, pontuação expressiva). Sua missão é ser o corretor.",
    },
    model: {
      error: "O Brasil, pais rico, sofre à toa.",
      correction: "O Brasil, país rico, sofre à toa.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O problema, é a falta de dinheiro.", placeholder: "Corrija..." },
      { id: 2, incorrectSentence: "Fomos a Italia e voltamos de Roma.", placeholder: "Crase?..." },
      { id: 3, incorrectSentence: "Precisamos de: paz amor e união!", placeholder: "Pontuação..." },
      { id: 4, incorrectSentence: "O menino disse: eu quero doce.", placeholder: "Discurso direto..." },
      { id: 5, incorrectSentence: "Venda à prazo sujeito a juros.", placeholder: "Masc..." },
      { id: 6, incorrectSentence: "As 15h, começara a reunião.", placeholder: "Hora..." },
      { id: 7, incorrectSentence: "O SUS (Sistema Único de Saúde, é importante.", placeholder: "Feche parenteses..." },
      { id: 8, incorrectSentence: "Ele é um 'bom' político...", placeholder: "Ironia/Reticências..." },
      { id: 9, incorrectSentence: "Quem estuda passa.", placeholder: "Pegadinha..." },
      { id: 10, incorrectSentence: "Graças à Deus.", placeholder: "Deus é masculino..." },
    ],
    fixation: {
      description: "Reescreva a frase abaixo para deixá-la perfeita: 'o aluno, que estuda a noite, fica cansado...'"
    }
  },
  {
    id: "#30",
    topic: "O Teste Final (Mix de Erros)",
    metaTime: "30 Minutos",
    theme: 'rose',
    theory: {
      title: "O Desbloqueio",
      content: "Parabéns! Você chegou ao fim do Mês 1. Esta ficha mistura todas as regras que vimos até agora: Vírgula (sujeito, deslocamento, enumeração), Crase (proibições e regras gerais) e Pontuação Expressiva (travessão, dois pontos). O segredo agora é o \"Olhar de Raio-X\": Duvide de cada espaço em branco e de cada acento grave.",
    },
    model: {
      error: "O governo, deve investir à longo prazo.",
      correction: "O governo deve investir a longo prazo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A população, precisa de mais segurança pública.", placeholder: "Não separe sujeito e verbo..." },
      { id: 2, incorrectSentence: "Fui à Brasília e voltei de Porto Alegre.", placeholder: "Atenção ao \"Volto de\"..." },
      { id: 3, incorrectSentence: "O cidadão deve obedecer, as leis do país.", placeholder: "Não separe verbo e complemento..." },
      { id: 4, incorrectSentence: "O problema é grave!", placeholder: "Troque a pontuação informal..." },
      { id: 5, incorrectSentence: "Estudo de manhã, e trabalho à noite.", placeholder: "Sujeitos iguais: eu estudo, eu trabalho..." },
      { id: 6, incorrectSentence: "Refiro-me àquele caso que aconteceu ontem.", placeholder: "Verifique a crase em Àquele..." },
      { id: 7, incorrectSentence: "O Brasil país tropical sofre com o calor.", placeholder: "Faltam vírgulas no aposto..." },
      { id: 8, incorrectSentence: "Precisamos de soluções como: educação saúde e transporte.", placeholder: "Arrume a lista..." },
      { id: 9, incorrectSentence: "Estou disposto à fazer a diferença.", placeholder: "Crase antes de verbo?..." },
      { id: 10, incorrectSentence: "Atualmente a tecnologia domina o mundo.", placeholder: "Falta vírgula de tempo deslocado..." },
    ],
    fixation: {
      description: "Escreva um parágrafo de 3 a 4 linhas sobre \"Desafios da Juventude\". Regra Obrigatória: Você deve usar corretamente 1 Crase, 1 Vírgula de deslocamento (ex: No Brasil,) e 1 Travessão para explicação."
    }
  }
];