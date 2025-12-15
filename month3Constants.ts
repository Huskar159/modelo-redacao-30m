import { TrainingSheetData } from './types';

export const MONTH_3_SHEETS: TrainingSheetData[] = [
  // --- PART 1: OPERADORES ARGUMENTATIVOS ---
  {
    id: "#61",
    topic: "O Início do D1 (Ligando com a Introdução)",
    metaTime: "30 Minutos",
    theme: 'amber',
    sectionInfo: {
      title: "Operadores Argumentativos",
      subtitle: "O cimento do texto"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Nunca comece o parágrafo de Desenvolvimento 1 (D1) 'do nada'. Você precisa mostrar que ele é uma continuação da Introdução. Use conectivos que retomam o tema ou a tese apresentada antes. Melhores Opções: 'Diante desse cenário,', 'Nesse contexto,', 'Sob essa ótica,', 'A princípio,'.",
    },
    model: {
      error: "A falta de leis é um problema.",
      correction: "Diante desse cenário, a falta de leis é um problema.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O preconceito linguístico afeta a sociedade.", placeholder: "Insira conectivo..." },
      { id: 2, incorrectSentence: "A evasão escolar é preocupante.", placeholder: "Insira conectivo..." },
      { id: 3, incorrectSentence: "A tecnologia mudou as relações.", placeholder: "Insira conectivo..." },
      { id: 4, incorrectSentence: "É importante analisar as causas do problema.", placeholder: "Insira conectivo..." },
      { id: 5, incorrectSentence: "A saúde pública carece de investimentos.", placeholder: "Insira conectivo..." },
      { id: 6, incorrectSentence: "O desmatamento cresceu nos últimos anos.", placeholder: "Insira conectivo..." },
      { id: 7, incorrectSentence: "A cultura do cancelamento é tóxica.", placeholder: "Insira conectivo..." },
      { id: 8, incorrectSentence: "Cabe analisar o papel da mídia.", placeholder: "Insira conectivo..." },
      { id: 9, incorrectSentence: "A Constituição garante direitos.", placeholder: "Insira conectivo..." },
      { id: 10, incorrectSentence: "O sedentarismo é um mal do século.", placeholder: "Insira conectivo..." },
    ],
    fixation: {
      description: "Escreva a primeira frase de um parágrafo D1 sobre 'Doação de Órgãos'. Regra: Comece obrigatoriamente com 'Nesse contexto,' ou 'Sob essa ótica,'."
    }
  },
  {
    id: "#62",
    topic: "O Início do D2 (Soma ou Contraste?)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "O D2 precisa conversar com o D1. Se soma uma ideia (outro problema): Use 'Ademais,', 'Além disso,', 'Outrossim,'. Se contraria (outro lado): Use 'Por outro lado,', 'Em contrapartida,'. Dica Elite: 90% das redações usam Soma (Ademais).",
    },
    model: {
      error: "A escola também tem culpa.",
      correction: "Ademais, a escola também tem culpa.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Portanto,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 2, incorrectSentence: "Ademais,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 3, incorrectSentence: "A princípio,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 4, incorrectSentence: "Além disso,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 5, incorrectSentence: "Outrossim,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 6, incorrectSentence: "Vale ressaltar também,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 7, incorrectSentence: "Em segundo lugar,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 8, incorrectSentence: "Em suma,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 9, incorrectSentence: "Paralelamente,", placeholder: "Serve para iniciar D2 de soma?" },
      { id: 10, incorrectSentence: "Somado a isso,", placeholder: "Serve para iniciar D2 de soma?" },
    ],
    fixation: {
      description: "O D1 falou sobre a negligência do Estado. O D2 vai falar sobre a apatia social. Regra: Escreva a primeira frase do D2 usando 'Além disso,'."
    }
  },
  {
    id: "#63",
    topic: "O Início da Conclusão (O Rei \"Portanto\")",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "O último parágrafo DEVE começar com um conectivo conclusivo forte. O Rei: 'Portanto,'. Os Príncipes: 'Dessa forma,', 'Logo,' (menos usado no início), 'Em suma,' (evite, é muito simples). Dica: Nunca comece a conclusão sem conectivo.",
    },
    model: {
      error: "O governo deve criar leis.",
      correction: "Portanto, o governo deve criar leis.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Portanto, medidas são necessárias.", placeholder: "Reescreva usando 'Dessa forma,'..." },
      { id: 2, incorrectSentence: "Dessa forma, medidas são necessárias.", placeholder: "Reescreva usando 'Diante do exposto,'..." },
      { id: 3, incorrectSentence: "Diante do exposto, medidas são necessárias.", placeholder: "Reescreva usando 'Logo,'..." },
      { id: 4, incorrectSentence: "Logo, medidas são necessárias.", placeholder: "Reescreva usando 'Assim,'..." },
      { id: 5, incorrectSentence: "Assim, medidas são necessárias.", placeholder: "Reescreva usando 'Por conseguinte,'..." },
      { id: 6, incorrectSentence: "Por conseguinte, medidas são necessárias.", placeholder: "Reescreva usando 'Desse modo,'..." },
      { id: 7, incorrectSentence: "Desse modo, medidas são necessárias.", placeholder: "Reescreva usando 'Infere-se, portanto, que'..." },
      { id: 8, incorrectSentence: "Infere-se, portanto, que medidas são necessárias.", placeholder: "Reescreva usando 'Fica claro, pois, que'..." },
      { id: 9, incorrectSentence: "Fica claro, pois, que medidas são necessárias.", placeholder: "Reescreva usando 'Torna-se evidente, assim, que'..." },
      { id: 10, incorrectSentence: "Torna-se evidente, assim, que medidas são necessárias.", placeholder: "Reescreva usando 'Portanto,'..." },
    ],
    fixation: {
      description: "Escreva a frase de abertura da sua conclusão sobre o tema 'Mobilidade Urbana'. Regra: Use 'Portanto,'."
    }
  },
  {
    id: "#64",
    topic: "Intraparágrafo - Adição (Mais que \"E\")",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Dentro do parágrafo, pare de usar 'E' o tempo todo. Use conectivos de adição mais sofisticados para unir frases. Use: 'bem como', 'não só... mas também', 'além de', 'somado a'.",
    },
    model: {
      error: "O problema afeta a saúde e a educação e a segurança.",
      correction: "O problema afeta a saúde, bem como a educação e a segurança.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O governo deve investir em saúde e educação.", placeholder: "Use 'bem como'..." },
      { id: 2, incorrectSentence: "A leitura melhora a fala e a escrita.", placeholder: "Use 'não só... mas também'..." },
      { id: 3, incorrectSentence: "O preconceito fere a vítima e a sociedade.", placeholder: "Use 'além de ferir...'..." },
      { id: 4, incorrectSentence: "Falta dinheiro e vontade política.", placeholder: "Use 'somado à'..." },
      { id: 5, incorrectSentence: "Ele estuda e trabalha.", placeholder: "Use 'bem como'..." },
      { id: 6, incorrectSentence: "A crise afeta ricos e pobres.", placeholder: "Use 'não só... mas também'..." },
      { id: 7, incorrectSentence: "O projeto visa lucro e bem-estar.", placeholder: "Use 'aliado ao'..." },
      { id: 8, incorrectSentence: "Temos leis e punições.", placeholder: "Use 'bem como'..." },
      { id: 9, incorrectSentence: "O aluno lê e escreve.", placeholder: "Use 'além de'..." },
      { id: 10, incorrectSentence: "O país cresceu e desenvolveu.", placeholder: "Use 'bem como'..." },
    ],
    fixation: {
      description: "Escreva uma frase listando dois problemas do Brasil. Regra: Use a estrutura 'não só [problema 1], mas também [problema 2]'."
    }
  },
  {
    id: "#65",
    topic: "Intraparágrafo - Oposição (O \"Mas\" Proibido)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "'Mas' é correto, mas é pobre se usado no início de frases longas. E JAMAIS comece um parágrafo com 'Mas'. Para refutar uma ideia ou apresentar um problema, prefira: 'Entretanto,', 'Todavia,', 'Contudo,', 'No entanto,'.",
    },
    model: {
      error: "O país é rico. Mas o povo é pobre.",
      correction: "O país é rico. Entretanto, o povo é pobre.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A lei existe, mas não funciona.", placeholder: "Use 'contudo'..." },
      { id: 2, incorrectSentence: "Eles tentaram, mas falharam.", placeholder: "Use 'todavia'..." },
      { id: 3, incorrectSentence: "É uma boa ideia, mas é cara.", placeholder: "Use 'no entanto'..." },
      { id: 4, incorrectSentence: "O Brasil cresceu, mas a desigualdade continua.", placeholder: "Use 'entretanto'..." },
      { id: 5, incorrectSentence: "Estudar é chato, mas necessário.", placeholder: "Use 'contudo'..." },
      { id: 6, incorrectSentence: "Temos tecnologia, mas falta acesso.", placeholder: "Use 'todavia'..." },
      { id: 7, incorrectSentence: "Ele falou, mas ninguém ouviu.", placeholder: "Use 'no entanto'..." },
      { id: 8, incorrectSentence: "O plano é bom, mas difícil.", placeholder: "Use 'entretanto'..." },
      { id: 9, incorrectSentence: "Quero viajar, mas não tenho dinheiro.", placeholder: "Use 'contudo'..." },
      { id: 10, incorrectSentence: "O clima está bom, mas vai chover.", placeholder: "Use 'todavia'..." },
    ],
    fixation: {
      description: "Escreva sobre a internet: ela ajuda, mas também atrapalha. Regra: Use 'Entretanto,' ou 'Todavia,'."
    }
  },
  {
    id: "#66",
    topic: "Intraparágrafo - Causa e Consequência",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Para ligar o problema ao seu efeito, evite 'então' ou 'por isso' (muito orais). Use: 'Consequentemente,', 'Por conseguinte,', 'Dessa forma,', 'Em virtude disso,'.",
    },
    model: {
      error: "Não choveu, então a plantação morreu.",
      correction: "Não choveu; consequentemente, a plantação morreu.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Faltou investimento. A saúde piorou.", placeholder: "Use 'dessa forma'..." },
      { id: 2, incorrectSentence: "O aluno não estudou. Reprovou.", placeholder: "Use 'por conseguinte'..." },
      { id: 3, incorrectSentence: "Há muita corrupção. Falta dinheiro.", placeholder: "Use 'em virtude disso'..." },
      { id: 4, incorrectSentence: "O trânsito parou. Cheguei atrasado.", placeholder: "Use 'consequentemente'..." },
      { id: 5, incorrectSentence: "A floresta queimou. Os animais fugiram.", placeholder: "Use 'devido a isso'..." },
      { id: 6, incorrectSentence: "A lei é fraca. O crime aumenta.", placeholder: "Use 'por isso' (formal)..." },
      { id: 7, incorrectSentence: "O celular vicia. Os jovens não dormem.", placeholder: "Use 'consequentemente'..." },
      { id: 8, incorrectSentence: "Falta fiscalização. O desmatamento cresce.", placeholder: "Use 'dessa maneira'..." },
      { id: 9, incorrectSentence: "Ele se esforçou. Passou no teste.", placeholder: "Use 'logo'..." },
      { id: 10, incorrectSentence: "O governo ignorou. O problema agravou.", placeholder: "Use 'com isso'..." },
    ],
    fixation: {
      description: "Escreva uma frase de causa e efeito sobre 'Falta de leitura'. Regra: Use 'Consequentemente,'."
    }
  },
  {
    id: "#67",
    topic: "Intraparágrafo - Explicação (Pois e Já que)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Evite usar 'Porque' no início de frase explicativa. Use: 'Visto que', 'Uma vez que', 'Haja vista', ou o clássico 'Pois' (entre vírgulas não iniciais, explicativo).",
    },
    model: {
      error: "Devemos agir. Porque o problema é grave.",
      correction: "Devemos agir, visto que o problema é grave.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Estude, porque o futuro exige.", placeholder: "Use 'uma vez que'..." },
      { id: 2, incorrectSentence: "O Brasil sofre, porque falta gestão.", placeholder: "Use 'haja vista'..." },
      { id: 3, incorrectSentence: "Não saia, porque está chovendo.", placeholder: "Use 'já que'..." },
      { id: 4, incorrectSentence: "A saúde falha, porque não há verba.", placeholder: "Use 'visto que'..." },
      { id: 5, incorrectSentence: "Ele passou, porque estudou.", placeholder: "Use 'dado que'..." },
      { id: 6, incorrectSentence: "O crime cresce, porque há impunidade.", placeholder: "Use 'uma vez que'..." },
      { id: 7, incorrectSentence: "Devemos ler, porque abre a mente.", placeholder: "Use 'pois'..." },
      { id: 8, incorrectSentence: "Evite doces, porque faz mal.", placeholder: "Use 'já que'..." },
      { id: 9, incorrectSentence: "Respeite as leis, porque é dever.", placeholder: "Use 'visto que'..." },
      { id: 10, incorrectSentence: "O sistema falhou, porque estava velho.", placeholder: "Use 'porquanto'..." },
    ],
    fixation: {
      description: "Explique por que a educação é importante. Regra: Use 'Visto que' ou 'Uma vez que'."
    }
  },
  {
    id: "#68",
    topic: "O \"Pois\" Deslocado (Conclusão Elegante)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "O 'Pois' no início da oração explica ('Estude, pois precisa'). O 'Pois' depois do verbo conclui. Essa é uma técnica de nível 1000. 'O Brasil é rico. Deve, pois, investir mais.' (= Deve, portanto).",
    },
    model: {
      error: "Portanto, é necessário agir.",
      correction: "É necessário, pois, agir.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Portanto, o governo deve investir.", placeholder: "O governo deve, pois, investir..." },
      { id: 2, incorrectSentence: "Portanto, a escola precisa ensinar.", placeholder: "A escola precisa, pois, ensinar..." },
      { id: 3, incorrectSentence: "Logo, o indivíduo deve mudar.", placeholder: "O indivíduo deve, pois, mudar..." },
      { id: 4, incorrectSentence: "Assim, a sociedade pode evoluir.", placeholder: "A sociedade pode, pois, evoluir..." },
      { id: 5, incorrectSentence: "Portanto, as leis são vitais.", placeholder: "As leis são, pois, vitais..." },
      { id: 6, incorrectSentence: "Logo, o combate é urgente.", placeholder: "O combate é, pois, urgente..." },
      { id: 7, incorrectSentence: "Portanto, a mídia tem papel social.", placeholder: "A mídia tem, pois, papel..." },
      { id: 8, incorrectSentence: "Assim, o problema será resolvido.", placeholder: "O problema será, pois, resolvido..." },
      { id: 9, incorrectSentence: "Logo, a leitura é essencial.", placeholder: "A leitura é, pois, essencial..." },
      { id: 10, incorrectSentence: "Portanto, devemos respeitar.", placeholder: "Devemos, pois, respeitar..." },
    ],
    fixation: {
      description: "Escreva uma frase concluindo que 'os jovens devem ler mais'. Regra: Use o 'pois' deslocado (entre vírgulas, após 'devem')."
    }
  },
  {
    id: "#69",
    topic: "Exemplificação (Para provar)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Argumento sem exemplo é fofoca. Você precisa provar. Para introduzir um exemplo ou uma prova, use: 'Nesse sentido,', 'Sob essa ótica,', 'A exemplo de,', 'Como prova disso,'.",
    },
    model: {
      error: "A saúde vai mal. Faltam médicos.",
      correction: "A saúde vai mal. Nesse sentido, faltam médicos.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A tecnologia vicia. A exemplo de jogos online.", placeholder: "Una as frases..." },
      { id: 2, incorrectSentence: "O Estado falha. Nesse sentido, vemos hospitais lotados.", placeholder: "Reescreva..." },
      { id: 3, incorrectSentence: "A história se repete. Como prova disso, temos a Segunda Guerra.", placeholder: "Reescreva..." },
      { id: 4, incorrectSentence: "A violência cresce. Sob esse viés, os assaltos aumentaram.", placeholder: "Reescreva..." },
      { id: 5, incorrectSentence: "A natureza pede socorro. Nesse contexto, as queimadas destroem tudo.", placeholder: "Reescreva..." },
      { id: 6, incorrectSentence: "A educação liberta. A exemplo do método de Paulo Freire.", placeholder: "Reescreva..." },
      { id: 7, incorrectSentence: "O preconceito fere. Nesse prisma, o racismo estrutural persiste.", placeholder: "Reescreva..." },
      { id: 8, incorrectSentence: "As leis existem. Como exemplo, temos a Lei Maria da Penha.", placeholder: "Reescreva..." },
      { id: 9, incorrectSentence: "O jovem está ansioso. Nesse cenário, as redes sociais pressionam.", placeholder: "Reescreva..." },
      { id: 10, incorrectSentence: "A cultura é vasta. Sob essa ótica, o folclore é rico.", placeholder: "Reescreva..." },
    ],
    fixation: {
      description: "Dê um exemplo de um problema ambiental. Regra: Use 'A exemplo de...' ou 'Nesse sentido,'."
    }
  },
  {
    id: "#70",
    topic: "O \"Onde\" (A Armadilha)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "'Onde' só se usa para LUGAR FÍSICO. Se não for lugar (ex: uma situação, um livro, uma época), use 'Em que', 'No qual' ou 'Na qual'. Ex: A sociedade em que vivemos (não onde).",
    },
    model: {
      error: "A época onde eu nasci.",
      correction: "A época em que nasci.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A casa ___ moro.", placeholder: "Onde..." },
      { id: 2, incorrectSentence: "A situação ___ me encontro.", placeholder: "Em que/Na qual..." },
      { id: 3, incorrectSentence: "O ano ___ nasci.", placeholder: "Em que..." },
      { id: 4, incorrectSentence: "O Brasil é o país ___ vivo.", placeholder: "Onde..." },
      { id: 5, incorrectSentence: "A internet é um ambiente ___ há ódio.", placeholder: "Em que (preferível)..." },
      { id: 6, incorrectSentence: "O relacionamento ___ estou.", placeholder: "Em que..." },
      { id: 7, incorrectSentence: "A cidade ___ cresci.", placeholder: "Onde..." },
      { id: 8, incorrectSentence: "A tese ___ defendo.", placeholder: "Que/A qual..." },
      { id: 9, incorrectSentence: "O texto ___ li.", placeholder: "Em que/No qual..." },
      { id: 10, incorrectSentence: "O mundo ___ vivemos.", placeholder: "Onde..." },
    ],
    fixation: {
      description: "Fale sobre a 'escola' (lugar) e sobre a 'educação' (conceito). Regra: Use 'Onde' para a escola e 'Em que' para a educação."
    }
  },
  {
    id: "#71",
    topic: "Conectivos de Tempo (A Ordem)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Para contar uma evolução histórica ou uma sequência, use marcadores temporais. Use: 'Primeiramente,' (apenas se tiver um 'em segundo lugar'), 'Inicialmente,' 'Posteriormente,' 'Simultaneamente,' 'Enquanto isso,'.",
    },
    model: {
      error: "A revolução industrial aconteceu. Depois veio a tecnologia.",
      correction: "A revolução industrial aconteceu. Posteriormente, veio a tecnologia.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O homem descobriu o fogo. Criou a roda.", placeholder: "Inicialmente... Posteriormente..." },
      { id: 2, incorrectSentence: "O aluno estuda. Faz a prova.", placeholder: "Primeiro... Em seguida..." },
      { id: 3, incorrectSentence: "O governo promete. Não cumpre.", placeholder: "Inicialmente... Depois..." },
      { id: 4, incorrectSentence: "A internet surgiu. As redes sociais dominaram.", placeholder: "A princípio... Posteriormente..." },
      { id: 5, incorrectSentence: "O vírus espalhou. A vacina chegou.", placeholder: "Inicialmente... Logo após..." },
      { id: 6, incorrectSentence: "A criança brinca. O adulto trabalha.", placeholder: "Enquanto..." },
      { id: 7, incorrectSentence: "Cabral chegou. O Brasil foi colonizado.", placeholder: "Primeiramente... Depois..." },
      { id: 8, incorrectSentence: "Escrevemos o rascunho. Passamos a limpo.", placeholder: "Inicialmente... Em seguida..." },
      { id: 9, incorrectSentence: "O problema surge. As consequências aparecem.", placeholder: "A princípio... Depois..." },
      { id: 10, incorrectSentence: "Lemos o livro. Fizemos o resumo.", placeholder: "Primeiro... Posteriormente..." },
    ],
    fixation: {
      description: "Descreva sua rotina de estudos em duas etapas. Regra: Use 'Primeiramente' e 'Em seguida'."
    }
  },
  {
    id: "#72",
    topic: "Evitando a Repetição (Sinônimos)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Não use o mesmo conectivo duas vezes no mesmo parágrafo. O corretor conta. Se já usou 'Mas', use 'Porém'. Se já usou 'Pois', use 'Visto que'.",
    },
    model: {
      error: "O país é rico, mas tem pobreza. Mas vamos mudar.",
      correction: "O país é rico, mas tem pobreza. Entretanto, vamos mudar.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Já usei 'Portanto'. Posso usar:", placeholder: "Logo / Dessa forma..." },
      { id: 2, incorrectSentence: "Já usei 'Mas'. Posso usar:", placeholder: "Contudo / Todavia..." },
      { id: 3, incorrectSentence: "Já usei 'Além disso'. Posso usar:", placeholder: "Ademais / Outrossim..." },
      { id: 4, incorrectSentence: "Já usei 'Porque'. Posso usar:", placeholder: "Pois / Visto que..." },
      { id: 5, incorrectSentence: "Já usei 'Por exemplo'. Posso usar:", placeholder: "Como prova disso..." },
      { id: 6, incorrectSentence: "Já usei 'Então'. Posso usar:", placeholder: "Assim / Por isso..." },
      { id: 7, incorrectSentence: "Já usei 'Segundo'. Posso usar:", placeholder: "Conforme..." },
      { id: 8, incorrectSentence: "Já usei 'Também'. Posso usar:", placeholder: "Bem como..." },
      { id: 9, incorrectSentence: "Já usei 'Atualmente'. Posso usar:", placeholder: "Hoje em dia..." },
      { id: 10, incorrectSentence: "Já usei 'Consequentemente'. Posso usar:", placeholder: "Em virtude disso..." },
    ],
    fixation: {
      description: "Escreva duas frases de oposição. Regra: Use conectivos diferentes em cada uma (Ex: Mas e Contudo)."
    }
  },
  {
    id: "#73",
    topic: "O \"Que\" (Queísmo)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "O excesso da palavra 'QUE' deixa o texto feio e repetitivo (Queísmo). Truque: Troque 'Que' por pronomes ('O qual'), ou transforme a frase. 'A lei que foi aprovada' -> 'A lei aprovada'.",
    },
    model: {
      error: "O aluno que estuda que passa.",
      correction: "O aluno estudioso passa.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A lei que foi criada ontem.", placeholder: "A lei criada ontem..." },
      { id: 2, incorrectSentence: "O menino que tem coragem.", placeholder: "O menino corajoso..." },
      { id: 3, incorrectSentence: "O país que é rico.", placeholder: "O país rico..." },
      { id: 4, incorrectSentence: "As medidas que são necessárias.", placeholder: "As medidas necessárias..." },
      { id: 5, incorrectSentence: "O texto que foi escrito por ele.", placeholder: "O texto escrito por ele..." },
      { id: 6, incorrectSentence: "A decisão que foi tomada.", placeholder: "A decisão tomada..." },
      { id: 7, incorrectSentence: "O tempo que foi perdido.", placeholder: "O tempo perdido..." },
      { id: 8, incorrectSentence: "As pessoas que têm dinheiro.", placeholder: "As pessoas ricas..." },
      { id: 9, incorrectSentence: "O vírus que mata.", placeholder: "O vírus mortal..." },
      { id: 10, incorrectSentence: "É importante que a gente estude.", placeholder: "É importante estudarmos..." },
    ],
    fixation: {
      description: "Reescreva: 'O problema que afeta o Brasil'. Regra: Elimine o 'que'."
    }
  },
  {
    id: "#74",
    topic: "Operadores de Certeza (Afirmação)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Para ser persuasivo, use conectivos que indiquem certeza e ênfase. Use: 'Indubitavelmente,', 'Certamente,', 'É evidente que,', 'Com certeza,' (evite o excesso, use mais o 'indubitavelmente'), 'De fato,'.",
    },
    model: {
      error: "A educação ajuda o país.",
      correction: "Indubitavelmente, a educação ajuda o país.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O racismo é crime.", placeholder: "De fato, o racismo..." },
      { id: 2, incorrectSentence: "A leitura é vital.", placeholder: "Indubitavelmente..." },
      { id: 3, incorrectSentence: "O Brasil precisa melhorar.", placeholder: "Certamente..." },
      { id: 4, incorrectSentence: "A saúde é um direito.", placeholder: "É evidente que..." },
      { id: 5, incorrectSentence: "O problema existe.", placeholder: "Com certeza..." },
      { id: 6, incorrectSentence: "A solução é complexa.", placeholder: "De fato..." },
      { id: 7, incorrectSentence: "O governo falhou.", placeholder: "Indubitavelmente..." },
      { id: 8, incorrectSentence: "A sociedade sofre.", placeholder: "É notório que..." },
      { id: 9, incorrectSentence: "A tecnologia avança.", placeholder: "Certamente..." },
      { id: 10, incorrectSentence: "A mudança é urgente.", placeholder: "De fato..." },
    ],
    fixation: {
      description: "Afirme que a redação é importante. Regra: Comece com 'Indubitavelmente,'."
    }
  },
  {
    id: "#75",
    topic: "Teste Final Mês 3 (Conectivos)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Você já tem um arsenal de conectivos para: Iniciar parágrafos, Somar, Opor, Explicar, Concluir e Exemplificar. Agora, vamos preencher as lacunas de um texto real.",
    },
    model: {
      error: "...",
      correction: "Aplicação Prática (Sem modelo específico)",
    },
    exercises: [
      { id: 1, incorrectSentence: "A tecnologia trouxe avanços. (Oposição) _________, trouxe problemas.", placeholder: "Mas / Entretanto..." },
      { id: 2, incorrectSentence: "(Adição) _________, o sedentarismo aumentou.", placeholder: "Além disso..." },
      { id: 3, incorrectSentence: "(Explicação) _________ as pessoas não saem mais.", placeholder: "Pois / Visto que..." },
      { id: 4, incorrectSentence: "(Conclusão) _________, é preciso equilíbrio.", placeholder: "Portanto..." },
      { id: 5, incorrectSentence: "Início de D1: _________ contexto.", placeholder: "Nesse..." },
      { id: 6, incorrectSentence: "Início de Conclusão: , medidas são necessárias. (Conclusivo)", placeholder: "Portanto..." },
      { id: 7, incorrectSentence: "Sinônimo de Mas: T__________.", placeholder: "Todavia..." },
      { id: 8, incorrectSentence: "Sinônimo de Além disso: A_________.", placeholder: "Ademais..." },
      { id: 9, incorrectSentence: "Sinônimo de Por isso: D________ forma.", placeholder: "Dessa..." },
      { id: 10, incorrectSentence: "Sinônimo de Porque: V________ que.", placeholder: "Visto..." },
    ],
    fixation: {
      description: "Escreva um mini-parágrafo de 4 linhas sobre qualquer tema. Regra: Use 3 conectivos diferentes (um de início, um de meio e um de conclusão)."
    }
  },

  // --- PART 2: COESÃO REFERENCIAL ---
  {
    id: "#76",
    topic: "O Eco (Identificando a Repetição)",
    metaTime: "30 Minutos",
    theme: 'amber',
    sectionInfo: {
      title: "Coesão Referencial",
      subtitle: "Evitando a Repetição"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Repetir a mesma palavra (substantivo ou verbo) num curto espaço de tempo é um 'eco'. Isso mostra pobreza de vocabulário. O Alvo: Nunca repita uma palavra chave (ex: 'governo', 'escola', 'problema') na mesma frase ou em frases vizinhas.",
    },
    model: {
      error: "O governo deve agir, pois o governo é responsável.",
      correction: "O governo deve agir, pois o Estado é responsável.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A educação é importante, porque a educação muda o mundo.", placeholder: "Identifique o eco..." },
      { id: 2, incorrectSentence: "O problema da violência é um problema grave.", placeholder: "Identifique o eco..." },
      { id: 3, incorrectSentence: "As crianças precisam brincar, pois as crianças aprendem...", placeholder: "Identifique o eco..." },
      { id: 4, incorrectSentence: "O Brasil precisa crescer, mas o Brasil tem dívidas.", placeholder: "Identifique o eco..." },
      { id: 5, incorrectSentence: "Devemos combater o crime, pois o crime destrói famílias.", placeholder: "Identifique o eco..." },
      { id: 6, incorrectSentence: "A leitura ajuda a escrever, e a leitura abre a mente.", placeholder: "Identifique o eco..." },
      { id: 7, incorrectSentence: "O SUS é vital, mas o SUS tem falhas.", placeholder: "Identifique o eco..." },
      { id: 8, incorrectSentence: "A internet vicia, porque a internet é rápida.", placeholder: "Identifique o eco..." },
      { id: 9, incorrectSentence: "Os jovens sofrem, pois os jovens são pressionados.", placeholder: "Identifique o eco..." },
      { id: 10, incorrectSentence: "A água acabou, e sem água não vivemos.", placeholder: "Identifique o eco..." },
    ],
    fixation: {
      description: "Reescreva a frase: 'A escola é fundamental, pois a escola forma cidadãos.' Regra: Troque a segunda 'escola' por um sinônimo (ex: a instituição, o colégio)."
    }
  },
  {
    id: "#77",
    topic: "Sinônimos (A Troca Simples)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "A forma mais fácil de não repetir é usar um sinônimo (palavra de sentido igual ou parecido). Dica Elite: Crie um 'banco de reservas' mental. Homem -> Indivíduo, Ser humano, Cidadão. Escola -> Instituição de ensino, Ambiente escolar.",
    },
    model: {
      error: "Criança...",
      correction: "O infante, o pequeno, o menor.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O aluno estudou. O aluno passou.", placeholder: "O estudante..." },
      { id: 2, incorrectSentence: "A cidade é grande. A cidade tem trânsito.", placeholder: "A urbe / metrópole..." },
      { id: 3, incorrectSentence: "O governo falhou. O governo não investiu.", placeholder: "O Estado / Poder Público..." },
      { id: 4, incorrectSentence: "O celular ajuda. O celular também atrapalha.", placeholder: "O aparelho / dispositivo..." },
      { id: 5, incorrectSentence: "A lei foi aprovada. A lei é rígida.", placeholder: "A legislação / norma..." },
      { id: 6, incorrectSentence: "O professor ensina. O professor é mestre.", placeholder: "O docente / educador..." },
      { id: 7, incorrectSentence: "O planeta aquece. O planeta sofre.", placeholder: "A Terra / o globo..." },
      { id: 8, incorrectSentence: "O dinheiro acabou. O dinheiro faz falta.", placeholder: "A verba / o recurso..." },
      { id: 9, incorrectSentence: "As mulheres lutam. As mulheres querem direitos.", placeholder: "O gênero feminino / elas..." },
      { id: 10, incorrectSentence: "O livro é bom. O livro ensina.", placeholder: "A obra / o exemplar..." },
    ],
    fixation: {
      description: "Escreva dois sinônimos para a palavra 'Internet' (Ex: rede mundial, mundo virtual)."
    }
  },
  {
    id: "#78",
    topic: "Hiperônimos (O Termo Geral)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Se você não sabe um sinônimo exato, use uma palavra 'maior' que englobe a anterior (Hiperônimo). Ex: 'Maçã' -> 'Fruta'. 'Desmatamento' -> 'Problema' / 'Questão'. Essa técnica salva vidas na redação.",
    },
    model: {
      error: "A dengue cresce.",
      correction: "A doença preocupa.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A fome persiste. Essa fome mata.", placeholder: "Essa tragédia / questão..." },
      { id: 2, incorrectSentence: "O racismo é crime. Esse racismo deve acabar.", placeholder: "Essa prática / crime..." },
      { id: 3, incorrectSentence: "A escola fechou. Essa escola era antiga.", placeholder: "Essa instituição..." },
      { id: 4, incorrectSentence: "O futebol une. Esse futebol emociona.", placeholder: "Esse esporte..." },
      { id: 5, incorrectSentence: "A depressão afeta jovens. Essa depressão é séria.", placeholder: "Essa doença / patologia..." },
      { id: 6, incorrectSentence: "O presidente falou. O presidente foi breve.", placeholder: "O político / chefe de Estado..." },
      { id: 7, incorrectSentence: "As queimadas destroem. Essas queimadas são ilegais.", placeholder: "Esses desastres..." },
      { id: 8, incorrectSentence: "A televisão informa. A televisão manipula.", placeholder: "A mídia / o veículo..." },
      { id: 9, incorrectSentence: "O carro quebrou. O carro é velho.", placeholder: "O veículo / automóvel..." },
      { id: 10, incorrectSentence: "A democracia é vital. A democracia precisa de cuidado.", placeholder: "Esse regime / sistema..." },
    ],
    fixation: {
      description: "Refira-se ao 'Bullying' usando um termo geral (Ex: essa agressão, esse comportamento)."
    }
  },
  {
    id: "#79",
    topic: "Isso vs. Isto (A Flecha)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "ISSO (com SS): Aponta para trás (Passado). Retoma o que você já disse. 'Estudei muito. Isso me ajudou.' ISTO (com T): Aponta para frente (Futuro). Anuncia o que você vai dizer. 'Quero dizer isto: estudem.'",
    },
    model: {
      error: "O país cresceu. Isso é bom. (Retoma)",
      correction: "Meu conselho é isto: leia. (Anuncia)",
    },
    exercises: [
      { id: 1, incorrectSentence: "A fome aumentou. ___ é inaceitável.", placeholder: "Isso..." },
      { id: 2, incorrectSentence: "O problema é __: falta dinheiro.", placeholder: "isto..." },
      { id: 3, incorrectSentence: "Ele não estudou. Por ___, reprovou.", placeholder: "isso..." },
      { id: 4, incorrectSentence: "Ouça bem ___: você vai passar.", placeholder: "isto..." },
      { id: 5, incorrectSentence: "A lei é fraca. ___ gera impunidade.", placeholder: "Isso..." },
      { id: 6, incorrectSentence: "O importante é ___: dedicação total.", placeholder: "isto..." },
      { id: 7, incorrectSentence: "Faltam médicos. ___ prejudica a saúde.", placeholder: "Isso..." },
      { id: 8, incorrectSentence: "Só te peço ___: tenha calma.", placeholder: "isto..." },
      { id: 9, incorrectSentence: "A floresta queima. ___ afeta o clima.", placeholder: "Isso..." },
      { id: 10, incorrectSentence: "Diante d___ (disso/disto), devemos agir.", placeholder: "disso..." },
    ],
    fixation: {
      description: "Escreva uma frase retomando uma ideia anterior usando 'Isso' ou 'Diante disso'."
    }
  },
  {
    id: "#80",
    topic: "Esse vs. Este (No Texto)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Funciona igual ao Isso/Isto. ESSE (SS): Retoma o que já foi dito. 'Falei sobre o medo. Esse sentimento...' ESTE (T): Apresenta algo novo ou está 'aqui e agora'. 'Neste momento', 'Nesta redação'. Dica: Na dúvida, para retomar, use sempre SS.",
    },
    model: {
      error: "A saúde vai mal. Esse cenário preocupa.",
      correction: "Nesta redação, discutirei a saúde.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O Brasil tem problemas. (Esse/Este) país precisa mudar.", placeholder: "Esse..." },
      { id: 2, incorrectSentence: "(Nessa/Nesta) prova, vou tirar 1000. (Agora)", placeholder: "Nesta..." },
      { id: 3, incorrectSentence: "A violência cresce. (Essa/Esta) realidade é triste.", placeholder: "Essa..." },
      { id: 4, incorrectSentence: "(Nesse/Neste) ano de 2025, farei diferente.", placeholder: "Neste..." },
      { id: 5, incorrectSentence: "O autor citou Kant. (Esse/Este) filósofo é importante.", placeholder: "Esse..." },
      { id: 6, incorrectSentence: "(Nesse/Neste) momento, estou estudando.", placeholder: "Neste..." },
      { id: 7, incorrectSentence: "A água acabou. (Esse/Este) recurso é vital.", placeholder: "Esse..." },
      { id: 8, incorrectSentence: "Olhe para (essa/esta) folha na sua mão.", placeholder: "esta..." },
      { id: 9, incorrectSentence: "Falta empatia. (Essa/Esta) virtude é rara.", placeholder: "Essa..." },
      { id: 10, incorrectSentence: "(Dessa/Desta) maneira, concluo meu texto.", placeholder: "Dessa..." },
    ],
    fixation: {
      description: "Escreva uma frase retomando a palavra 'Educação'. Regra: Use 'Essa área...' ou 'Esse pilar...'."
    }
  },
  {
    id: "#81",
    topic: "Ele e Ela (Pronomes Pessoais)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "O pronome pessoal (Ele, Ela, Eles, Elas) é o substituto mais rápido. Em vez de repetir o nome do autor ou do sujeito, use o pronome. Cuidado: Só use se não houver dúvida de quem você está falando.",
    },
    model: {
      error: "Machado escreveu. Machado era gênio.",
      correction: "Machado escreveu. Ele era gênio.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A sociedade cobra. A sociedade é exigente.", placeholder: "Ela..." },
      { id: 2, incorrectSentence: "Os políticos prometem. Os políticos não cumprem.", placeholder: "Eles..." },
      { id: 3, incorrectSentence: "A natureza pede socorro. A natureza está morrendo.", placeholder: "Ela..." },
      { id: 4, incorrectSentence: "O indivíduo sofre. O indivíduo precisa de ajuda.", placeholder: "Ele..." },
      { id: 5, incorrectSentence: "As leis existem. As leis devem ser seguidas.", placeholder: "Elas..." },
      { id: 6, incorrectSentence: "Paulo Freire educou. Paulo Freire mudou o ensino.", placeholder: "Ele..." },
      { id: 7, incorrectSentence: "A ONU alertou. A ONU tem poder.", placeholder: "Ela..." },
      { id: 8, incorrectSentence: "Os cidadãos votam. Os cidadãos decidem.", placeholder: "Eles..." },
      { id: 9, incorrectSentence: "A escola ensina. A escola forma.", placeholder: "Ela..." },
      { id: 10, incorrectSentence: "O problema persiste. O problema é antigo.", placeholder: "Ele..." },
    ],
    fixation: {
      description: "Fale sobre 'O Governo'. Na segunda frase, use 'Ele'."
    }
  },
  {
    id: "#82",
    topic: "Este e Aquele (A Dupla de Retomada)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Quando você citou DUAS coisas antes e quer retomar sem repetir os nomes: ESTE: Retoma o último citado (o mais perto). AQUELE: Retoma o primeiro citado (o mais longe).",
    },
    model: {
      error: "O Brasil e a China crescem.",
      correction: "Esta (China) investe em tec. Aquele (Brasil) investe em agro.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A ciência e a religião... Esta pela fé. Quem é esta?", placeholder: "A religião..." },
      { id: 2, incorrectSentence: "...aquela pela razão. Quem é aquela?", placeholder: "A ciência..." },
      { id: 3, incorrectSentence: "João e Maria saíram. ____ (Maria) foi ao parque.", placeholder: "Esta..." },
      { id: 4, incorrectSentence: "____ (João) foi ao cinema.", placeholder: "Aquele..." },
      { id: 5, incorrectSentence: "A escola e a família educam. ____ (Família) em casa.", placeholder: "Esta..." },
      { id: 6, incorrectSentence: "____ (Escola) na sala.", placeholder: "Aquela..." },
      { id: 7, incorrectSentence: "O medo e a coragem existem. ____ (Medo) paralisa.", placeholder: "Aquele..." },
      { id: 8, incorrectSentence: "____ (Coragem) move.", placeholder: "Esta..." },
      { id: 9, incorrectSentence: "Gatos e cães são pets. ____ (Cães) latem.", placeholder: "Estes..." },
      { id: 10, incorrectSentence: "____ (Gatos) miam.", placeholder: "Aqueles..." },
    ],
    fixation: {
      description: "Escreva uma frase citando 'Saúde e Educação'. Regra: Use 'Esta' para falar da educação e 'Aquela' para a saúde."
    }
  },
  {
    id: "#83",
    topic: "O Mesmo (O Proibido)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Nunca use 'O mesmo' ou 'A mesma' para substituir pessoa ou sujeito anterior. Isso é linguagem de elevador ('Verifique se o mesmo encontra-se parado'). Na redação, é erro. Solução: Use 'Ele', 'Este', ou o sinônimo.",
    },
    model: {
      error: "Vi o aluno. O mesmo estava triste.",
      correction: "Vi o aluno. Ele estava triste.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A lei foi criada, mas a mesma não pegou.", placeholder: "...mas ela não pegou..." },
      { id: 2, incorrectSentence: "O autor defende a tese. O mesmo afirma que...", placeholder: "Ele afirma que..." },
      { id: 3, incorrectSentence: "A escola abriu. A mesma está lotada.", placeholder: "Ela / A instituição..." },
      { id: 4, incorrectSentence: "O cidadão reclama, pois o mesmo paga impostos.", placeholder: "...pois ele paga..." },
      { id: 5, incorrectSentence: "A vacina chegou e a mesma é eficaz.", placeholder: "...e ela é eficaz..." },
      { id: 6, incorrectSentence: "O governo falhou. O mesmo deve corrigir.", placeholder: "Este deve corrigir..." },
      { id: 7, incorrectSentence: "A polícia chegou. A mesma prendeu o ladrão.", placeholder: "Ela / A corporação..." },
      { id: 8, incorrectSentence: "Li o livro. O mesmo é bom.", placeholder: "Ele / A obra..." },
      { id: 9, incorrectSentence: "O problema cresce. O mesmo afeta a todos.", placeholder: "Ele / Tal questão..." },
      { id: 10, incorrectSentence: "A mulher lutou. A mesma venceu.", placeholder: "Ela venceu..." },
    ],
    fixation: {
      description: "Reescreva: 'O médico chegou. O mesmo estava cansado.' Regra: Elimine 'o mesmo'."
    }
  },
  {
    id: "#84",
    topic: "Epítetos (A Qualidade que Substitui)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Troque o nome pela 'fama' ou 'característica' dele. Em vez de repetir 'Machado de Assis', use 'O Bruxo do Cosme Velho' ou 'O autor realista'. Em vez de 'Brasil', use 'A nação tupiniquim' ou 'O gigante sul-americano'.",
    },
    model: {
      error: "Pelé jogou bem.",
      correction: "O Rei do Futebol jogou bem.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O Sol ->", placeholder: "O astro rei..." },
      { id: 2, incorrectSentence: "A Internet ->", placeholder: "A rede mundial de computadores..." },
      { id: 3, incorrectSentence: "O Petróleo ->", placeholder: "O ouro negro..." },
      { id: 4, incorrectSentence: "Brasília ->", placeholder: "A capital federal..." },
      { id: 5, incorrectSentence: "A Amazônia ->", placeholder: "O pulmão do mundo / A maior floresta..." },
      { id: 6, incorrectSentence: "Os Idosos ->", placeholder: "A terceira idade..." },
      { id: 7, incorrectSentence: "As Crianças ->", placeholder: "Os pequenos cidadãos..." },
      { id: 8, incorrectSentence: "O Celular ->", placeholder: "O dispositivo móvel..." },
      { id: 9, incorrectSentence: "A Constituição ->", placeholder: "A Carta Magna..." },
      { id: 10, incorrectSentence: "A Globo ->", placeholder: "A emissora carioca..." },
    ],
    fixation: {
      description: "Refira-se ao 'Brasil' sem usar a palavra Brasil. Regra: Use 'O país', 'A nação' ou 'A pátria'."
    }
  },
  {
    id: "#85",
    topic: "Elipse (O Sumiço Mágico)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Se o sujeito já apareceu e está claro quem é, você pode simplesmente omitir (esconder) ele na próxima frase. O texto fica limpo. 'João chegou. (João) Sentou no sofá.' -> 'João chegou. Sentou no sofá.'",
    },
    model: {
      error: "O governo cobra. O governo não faz.",
      correction: "O governo cobra, mas não faz.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A mãe cozinha e a mãe lava.", placeholder: "A mãe cozinha e lava..." },
      { id: 2, incorrectSentence: "O aluno estuda e o aluno passa.", placeholder: "O aluno estuda e passa..." },
      { id: 3, incorrectSentence: "O Brasil é rico, mas o Brasil é desigual.", placeholder: "O Brasil é rico, mas é desigual..." },
      { id: 4, incorrectSentence: "Eles gritaram e eles correram.", placeholder: "Eles gritaram e correram..." },
      { id: 5, incorrectSentence: "A lei pune e a lei educa.", placeholder: "A lei pune e educa..." },
      { id: 6, incorrectSentence: "A água limpa e a água hidrata.", placeholder: "A água limpa e hidrata..." },
      { id: 7, incorrectSentence: "O vírus ataca e o vírus mata.", placeholder: "O vírus ataca e mata..." },
      { id: 8, incorrectSentence: "A sociedade julga e a sociedade condena.", placeholder: "A sociedade julga e condena..." },
      { id: 9, incorrectSentence: "Eu li e eu gostei.", placeholder: "Eu li e gostei..." },
      { id: 10, incorrectSentence: "Nós fomos e nós voltamos.", placeholder: "Nós fomos e voltamos..." },
    ],
    fixation: {
      description: "Escreva sobre 'O estudante'. Use dois verbos (ex: estuda e aprende) sem repetir 'o estudante'."
    }
  },
  {
    id: "#86",
    topic: "O Qual / A Qual (O Parente Elegante)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Para evitar o excesso de 'QUE' (queísmo), use 'O qual', 'A qual', 'Os quais', 'As quais'. Funciona igual ao 'Que', mas é mais chique e concorda em gênero/número. 'A lei que foi feita' -> 'A lei, a qual foi feita'.",
    },
    model: {
      error: "O tema que escolhi.",
      correction: "O tema, o qual escolhi.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A medida que foi adotada.", placeholder: "A medida, a qual..." },
      { id: 2, incorrectSentence: "O problema que afeta a todos.", placeholder: "O problema, o qual..." },
      { id: 3, incorrectSentence: "As pessoas que lutam.", placeholder: "As pessoas, as quais..." },
      { id: 4, incorrectSentence: "Os recursos que faltam.", placeholder: "Os recursos, os quais..." },
      { id: 5, incorrectSentence: "A tese que defendo.", placeholder: "A tese, a qual..." },
      { id: 6, incorrectSentence: "O caminho que segui.", placeholder: "O caminho, o qual..." },
      { id: 7, incorrectSentence: "As regras que mudaram.", placeholder: "As regras, as quais..." },
      { id: 8, incorrectSentence: "O fato que ocorreu.", placeholder: "O fato, o qual..." },
      { id: 9, incorrectSentence: "A carta que escrevi.", placeholder: "A carta, a qual..." },
      { id: 10, incorrectSentence: "Os livros que li.", placeholder: "Os livros, os quais..." },
    ],
    fixation: {
      description: "Reescreva: 'A solução que o governo criou'. Regra: Use 'A qual'."
    }
  },
  {
    id: "#87",
    topic: "Tal e Tais (Demonstrativo Resumidor)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Use 'Tal' ou 'Tais' para retomar uma ideia completa anterior sem precisar explicar tudo de novo. 'O desmatamento cresce. Tal prática deve parar.' (Tal prática = O desmatamento que cresce).",
    },
    model: {
      error: "O racismo é cruel.",
      correction: "Tal crime é inaceitável.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A violência aumenta. ___ (situação) preocupa.", placeholder: "Tal situação..." },
      { id: 2, incorrectSentence: "Os políticos mentem. ___ (atitude) envergonha.", placeholder: "Tal atitude..." },
      { id: 3, incorrectSentence: "Faltam remédios. ___ (cenário) é triste.", placeholder: "Tal cenário..." },
      { id: 4, incorrectSentence: "As pessoas jogam lixo na rua. ___ (ações) poluem.", placeholder: "Tais ações..." },
      { id: 5, incorrectSentence: "O ensino é fraco. ___ (realidade) precisa mudar.", placeholder: "Tal realidade..." },
      { id: 6, incorrectSentence: "O ódio se espalha. ___ (comportamento) é nocivo.", placeholder: "Tal comportamento..." },
      { id: 7, incorrectSentence: "As leis são brandas. ___ (medidas) geram impunidade.", placeholder: "Tais medidas..." },
      { id: 8, incorrectSentence: "A tecnologia avança. ___ (avanço) é rápido.", placeholder: "Tal avanço..." },
      { id: 9, incorrectSentence: "Eles doaram comida. ___ (gesto) foi nobre.", placeholder: "Tal gesto..." },
      { id: 10, incorrectSentence: "O preconceito existe. ___ (pensamento) é antigo.", placeholder: "Tal pensamento..." },
    ],
    fixation: {
      description: "Retome a ideia de 'Falta de leitura' usando 'Tal problema'."
    }
  },
  {
    id: "#88",
    topic: "Nominalização (Verbo vira Nome)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Transforme o verbo da frase anterior em um substantivo na frase seguinte. Isso se chama Nominalização. É o auge da coesão. Frase 1: 'O governo investiu pouco.' Frase 2: 'Esse investimento insuficiente causou...'",
    },
    model: {
      error: "Educar é vital.",
      correction: "Essa educação transforma.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O aluno leu. Essa (leitura) foi boa.", placeholder: "Leitura..." },
      { id: 2, incorrectSentence: "A fábrica poluiu. Essa (poluição) é crime.", placeholder: "Poluição..." },
      { id: 3, incorrectSentence: "O diretor demitiu. A (demissão) foi injusta.", placeholder: "Demissão..." },
      { id: 4, incorrectSentence: "Eles discutiram. A (discussão) foi longa.", placeholder: "Discussão..." },
      { id: 5, incorrectSentence: "O país cresceu. Esse (crescimento) foi rápido.", placeholder: "Crescimento..." },
      { id: 6, incorrectSentence: "A mulher agrediu. Tal (agressão) chocou.", placeholder: "Agressão..." },
      { id: 7, incorrectSentence: "O jovem participou. A (participação) foi ativa.", placeholder: "Participação..." },
      { id: 8, incorrectSentence: "O sol nasceu. O (nascimento/nascer) foi lindo.", placeholder: "Nascimento..." },
      { id: 9, incorrectSentence: "O juiz julgou. O (julgamento) foi correto.", placeholder: "Julgamento..." },
      { id: 10, incorrectSentence: "Nós mudamos. Essa (mudança) foi necessária.", placeholder: "Mudança..." },
    ],
    fixation: {
      description: "Frase 1: 'É preciso conscientizar.' Frase 2: Retome usando o substantivo 'Conscientização'."
    }
  },
  {
    id: "#89",
    topic: "Coisa e Negócio (Palavras Proibidas)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Palavras como 'Coisa', 'Negócio', 'Trem', 'Algo' são genéricas demais (palavras-curinga). Na redação, elas mostram falta de vocabulário. Troque por: Elemento, Fator, Aspecto, Questão, Item, Objeto.",
    },
    model: {
      error: "A violência é uma coisa ruim.",
      correction: "A violência é um problema ruim.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A liberdade é uma coisa boa.", placeholder: "...um valor / direito..." },
      { id: 2, incorrectSentence: "O negócio é estudar.", placeholder: "O foco / objetivo..." },
      { id: 3, incorrectSentence: "Tem uma coisa errada aqui.", placeholder: "Há um erro / equívoco..." },
      { id: 4, incorrectSentence: "O preconceito é uma coisa antiga.", placeholder: "...uma prática / mentalidade..." },
      { id: 5, incorrectSentence: "Esse negócio de política é chato.", placeholder: "Esse assunto / tema..." },
      { id: 6, incorrectSentence: "A solidariedade é uma coisa nobre.", placeholder: "...uma virtude / atitude..." },
      { id: 7, incorrectSentence: "Vi uma coisa estranha.", placeholder: "...uma cena / situação..." },
      { id: 8, incorrectSentence: "Falta uma coisa no texto.", placeholder: "...um elemento / detalhe..." },
      { id: 9, incorrectSentence: "O troço quebrou.", placeholder: "O objeto / equipamento..." },
      { id: 10, incorrectSentence: "Isso é algo importante.", placeholder: "Isso é um ponto importante..." },
    ],
    fixation: {
      description: "Reescreva: 'A honestidade é uma coisa rara.'"
    }
  },
  {
    id: "#90",
    topic: "Teste Final Mês 3 (Coesão Total)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Fim do Mês 3! Você agora sabe usar conectivos (Mês 3 Parte 1) e sabe retomar ideias sem repetir palavras (Mês 3 Parte 2). Seu texto está amarrado e elegante. Vamos testar.",
    },
    model: {
      error: "O aluno estuda. O aluno passa.",
      correction: "O aluno estuda e passa (Elipse).",
    },
    exercises: [
      { id: 1, incorrectSentence: "O aluno precisa estudar. Se o aluno não estudar...", placeholder: "Use pronome (Se ele)..." },
      { id: 2, incorrectSentence: "...o aluno não passa.", placeholder: "Use pronome (ele) ou elipse..." },
      { id: 3, incorrectSentence: "A prova é difícil, e a prova exige leitura.", placeholder: "Use elipse (e exige)..." },
      { id: 4, incorrectSentence: "A leitura é uma coisa importante.", placeholder: "Nominalize ou troque coisa..." },
      { id: 5, incorrectSentence: "Por isso, o aluno deve focar na leitura.", placeholder: "Use sinônimo para leitura..." },
      { id: 6, incorrectSentence: "Coisa e Negócio são palavras...", placeholder: "Proibidas / Vagas..." },
      { id: 7, incorrectSentence: "Para retomar o último citado, uso...", placeholder: "Este..." },
      { id: 8, incorrectSentence: "Para retomar o primeiro citado, uso...", placeholder: "Aquele..." },
      { id: 9, incorrectSentence: "O governo cobrou. O governo fez.", placeholder: "Use Elipse..." },
      { id: 10, incorrectSentence: "A violência cresce. ___ (Tal/Esse) cenário preocupa.", placeholder: "Tal / Esse..." },
    ],
    fixation: {
      description: "Escreva 3 linhas sobre 'Tecnologia'. Regra: Use 1 Pronome (Ela/Essa) e 1 Sinônimo (Inovação/Ferramenta) para não repetir a palavra 'Tecnologia'."
    }
  }
];
