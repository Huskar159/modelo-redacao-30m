import { TrainingSheetData } from './types';

export const MONTH_4_SHEETS: TrainingSheetData[] = [
  // --- PART 1: VOZ ATIVA/PASSIVA E PRONOMES ---
  {
    id: "#91",
    topic: "A Clareza (Voz Ativa)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    sectionInfo: {
      title: "Voz Ativa/Passiva",
      subtitle: "Colocação Pronominal"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Na Voz Ativa, o Sujeito FAZ a ação. É a forma mais direta, clara e forte de escrever. Use quando você quer destacar QUEM fez. Estrutura: Sujeito + Verbo + Objeto. 'O governo (sujeito) criou (ação) a lei (objeto).'",
    },
    model: {
      error: "A lei foi criada pelo governo.",
      correction: "O governo criou a lei.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O problema foi resolvido pelo diretor.", placeholder: "O diretor resolveu o problema." },
      { id: 2, incorrectSentence: "A carta foi escrita por Maria.", placeholder: "Maria escreveu a carta." },
      { id: 3, incorrectSentence: "As verbas foram desviadas por políticos.", placeholder: "Políticos desviaram as verbas." },
      { id: 4, incorrectSentence: "O aluno foi elogiado pelo professor.", placeholder: "O professor elogiou o aluno." },
      { id: 5, incorrectSentence: "A decisão foi tomada pelo juiz.", placeholder: "O juiz tomou a decisão." },
      { id: 6, incorrectSentence: "O gol foi marcado pelo atacante.", placeholder: "O atacante marcou o gol." },
      { id: 7, incorrectSentence: "O projeto será analisado pela banca.", placeholder: "A banca analisará o projeto." },
      { id: 8, incorrectSentence: "As ruas foram limpas pela prefeitura.", placeholder: "A prefeitura limpou as ruas." },
      { id: 9, incorrectSentence: "O livro foi lido por todos.", placeholder: "Todos leram o livro." },
      { id: 10, incorrectSentence: "O erro foi cometido por mim.", placeholder: "Eu cometi o erro." },
    ],
    fixation: {
      description: "Escreva uma frase afirmando que 'A educação muda o mundo' (Voz Ativa)."
    }
  },
  {
    id: "#92",
    topic: "A Sofisticação (Voz Passiva Analítica)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Na Voz Passiva, o Sujeito SOFRE a ação. Use quando você quer destacar O QUE aconteceu, e não quem fez. É excelente para deixar o texto mais impessoal e acadêmico. Estrutura: Ser + Particípio (ado/ido). 'A lei (sujeito paciente) foi criada (ação sofrida).'",
    },
    model: {
      error: "O Congresso aprovou a medida.",
      correction: "A medida foi aprovada pelo Congresso.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A polícia prendeu o ladrão.", placeholder: "O ladrão foi preso..." },
      { id: 2, incorrectSentence: "O vento derrubou a árvore.", placeholder: "A árvore foi derrubada..." },
      { id: 3, incorrectSentence: "O autor escreveu a obra.", placeholder: "A obra foi escrita..." },
      { id: 4, incorrectSentence: "A sociedade exige mudanças.", placeholder: "Mudanças são exigidas..." },
      { id: 5, incorrectSentence: "O sol iluminou o quarto.", placeholder: "O quarto foi iluminado..." },
      { id: 6, incorrectSentence: "Todos ouviram o grito.", placeholder: "O grito foi ouvido..." },
      { id: 7, incorrectSentence: "O governo construirá escolas.", placeholder: "Escolas serão construídas..." },
      { id: 8, incorrectSentence: "Eu fiz o bolo.", placeholder: "O bolo foi feito..." },
      { id: 9, incorrectSentence: "O tempo curou a ferida.", placeholder: "A ferida foi curada..." },
      { id: 10, incorrectSentence: "A tecnologia mudou o mundo.", placeholder: "O mundo foi mudado..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre 'Novas leis', usando a estrutura 'Serão criadas'."
    }
  },
  {
    id: "#93",
    topic: "O Mistério (Voz Passiva Sintética)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "É aquela que usa a partícula 'SE'. Ela esconde quem fez a ação. É perfeita para generalizações na redação. Em vez de 'O governo construiu escolas', usamos 'Construíram-se escolas'. Lembre da concordância: Plural com Plural.",
    },
    model: {
      error: "Casas são vendidas.",
      correction: "Vendem-se casas.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Reformam-se roupas.", placeholder: "(Certo)" },
      { id: 2, incorrectSentence: "Casas são alugadas.", placeholder: "Alugam-se casas." },
      { id: 3, incorrectSentence: "O problema foi notado.", placeholder: "Notou-se o problema." },
      { id: 4, incorrectSentence: "Medidas foram tomadas.", placeholder: "Tomaram-se medidas." },
      { id: 5, incorrectSentence: "Aulas são dadas.", placeholder: "Dão-se aulas." },
      { id: 6, incorrectSentence: "Carros são comprados.", placeholder: "Compram-se carros." },
      { id: 7, incorrectSentence: "O erro foi corrigido.", placeholder: "Corrigiu-se o erro." },
      { id: 8, incorrectSentence: "Esperanças são renovadas.", placeholder: "Renovam-se esperanças." },
      { id: 9, incorrectSentence: "Investimentos foram feitos.", placeholder: "Fizeram-se investimentos." },
      { id: 10, incorrectSentence: "O silêncio foi ouvido.", placeholder: "Ouviu-se o silêncio." },
    ],
    fixation: {
      description: "Reescreva: 'Muitos erros são cometidos'. Regra: Use a estrutura 'Cometem-se...'"
    }
  },
  {
    id: "#94",
    topic: "Agente da Passiva (Quem fez?)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Na voz passiva, quem faz a ação (o Agente) aparece no final, geralmente com a preposição 'POR' ou 'PELO'. 'O texto foi lido pelo aluno.' Dica Elite: Se o agente for óbvio ou irrelevante, você pode cortá-lo para deixar o texto mais limpo.",
    },
    model: {
      error: "A regra foi mudada pelo diretor.",
      correction: "A regra foi mudada. (Foco total no fato).",
    },
    exercises: [
      { id: 1, incorrectSentence: "A cidade foi destruída pelo furacão.", placeholder: "Agente: pelo furacão..." },
      { id: 2, incorrectSentence: "O bolo foi feito pela avó.", placeholder: "Agente: pela avó..." },
      { id: 3, incorrectSentence: "O prêmio foi entregue pelo diretor.", placeholder: "Agente: pelo diretor..." },
      { id: 4, incorrectSentence: "A música foi composta por Beethoven.", placeholder: "Agente: por Beethoven..." },
      { id: 5, incorrectSentence: "As ruas foram alagadas pela chuva.", placeholder: "Agente: pela chuva..." },
      { id: 6, incorrectSentence: "O livro foi escrito por Machado de Assis.", placeholder: "Agente: por Machado..." },
      { id: 7, incorrectSentence: "A decisão foi apoiada pela maioria.", placeholder: "Agente: pela maioria..." },
      { id: 8, incorrectSentence: "O quadro foi pintado por Picasso.", placeholder: "Agente: por Picasso..." },
      { id: 9, incorrectSentence: "A verdade foi revelada pelo tempo.", placeholder: "Agente: pelo tempo..." },
      { id: 10, incorrectSentence: "A casa foi construída pelos pedreiros.", placeholder: "Agente: pelos pedreiros..." },
    ],
    fixation: {
      description: "Escreva: 'A redação foi corrigida pelo professor.' Regra: Reescreva omitindo o agente (pelo professor) para impessoalizar."
    }
  },
  {
    id: "#95",
    topic: "Conversão Total (Ginástica Mental)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Para ter domínio da escrita, você precisa saber ir e voltar. Ativa -> Passiva Analítica -> Passiva Sintética. 'O povo exige leis' -> 'Leis são exigidas pelo povo' -> 'Exigem-se leis'.",
    },
    model: {
      error: "Ele leu o livro.",
      correction: "O livro foi lido por ele.",
    },
    exercises: [
      { id: 1, incorrectSentence: "(Para Passiva) O vento quebrou a janela.", placeholder: "A janela foi quebrada..." },
      { id: 2, incorrectSentence: "(Para Ativa) O texto foi escrito pelo aluno.", placeholder: "O aluno escreveu..." },
      { id: 3, incorrectSentence: "(Para Passiva) A mãe abraçou o filho.", placeholder: "O filho foi abraçado..." },
      { id: 4, incorrectSentence: "(Para Ativa) O jogo foi vencido pelo Brasil.", placeholder: "O Brasil venceu..." },
      { id: 5, incorrectSentence: "(Para Sintética) Vendem casas.", placeholder: "Vendem-se casas..." },
      { id: 6, incorrectSentence: "(Para Passiva) O sol seca a roupa.", placeholder: "A roupa é seca..." },
      { id: 7, incorrectSentence: "(Para Ativa) A carta será enviada por mim.", placeholder: "Eu enviarei a carta..." },
      { id: 8, incorrectSentence: "(Para Passiva) Todos respeitam o líder.", placeholder: "O líder é respeitado..." },
      { id: 9, incorrectSentence: "(Para Ativa) O erro foi visto por nós.", placeholder: "Nós vimos o erro..." },
      { id: 10, incorrectSentence: "(Para Passiva) O fogo destruiu a floresta.", placeholder: "A floresta foi destruída..." },
    ],
    fixation: {
      description: "Escreva a frase 'O estudo gera conhecimento' na Voz Passiva."
    }
  },
  {
    id: "#96",
    topic: "Próclise I (A Regra do Ímã - Negativos)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Colocação Pronominal é onde colocar o 'me, te, se, o, a, lhe'. Próclise é quando o pronome vem ANTES do verbo. O maior ímã de todos são as Palavras Negativas (Não, Nunca, Jamais, Ninguém). Elas puxam o pronome para perto delas.",
    },
    model: {
      error: "Não espere-me.",
      correction: "Não me espere.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Não engane-se.", placeholder: "Não se engane." },
      { id: 2, incorrectSentence: "Nunca vi-o.", placeholder: "Nunca o vi." },
      { id: 3, incorrectSentence: "Jamais esquecerei-me.", placeholder: "Jamais me esquecerei." },
      { id: 4, incorrectSentence: "Ninguém ouviu-nos.", placeholder: "Ninguém nos ouviu." },
      { id: 5, incorrectSentence: "Nada incomoda-me.", placeholder: "Nada me incomoda." },
      { id: 6, incorrectSentence: "Nem importo-me.", placeholder: "Nem me importo." },
      { id: 7, incorrectSentence: "Não faça-o sofrer.", placeholder: "Não o faça sofrer." },
      { id: 8, incorrectSentence: "Nunca conte-lhe a verdade.", placeholder: "Nunca lhe conte..." },
      { id: 9, incorrectSentence: "Jamais perdoarei-te.", placeholder: "Jamais te perdoarei." },
      { id: 10, incorrectSentence: "Ninguém viu-a sair.", placeholder: "Ninguém a viu sair." },
    ],
    fixation: {
      description: "Escreva uma frase negando algo a alguém. Regra: Use 'Não lhe...' ou 'Não o...'"
    }
  },
  {
    id: "#97",
    topic: "Próclise II (Advérbios e Pronomes)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Advérbios (Sempre, Já, Talvez, Ontem) e Pronomes (Eu, Ele, Quem, Alguém) também são ímãs. Eles puxam o pronome para antes do verbo. Exceção: Se houver vírgula depois do advérbio, o ímã quebra.",
    },
    model: {
      error: "Sempre lembro-me de você.",
      correction: "Sempre me lembro de você.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Talvez veja-o amanhã.", placeholder: "Talvez o veja..." },
      { id: 2, incorrectSentence: "Já disseram-me isso.", placeholder: "Já me disseram..." },
      { id: 3, incorrectSentence: "Quem chamou-te?", placeholder: "Quem te chamou?" },
      { id: 4, incorrectSentence: "Alguém viu-nos.", placeholder: "Alguém nos viu." },
      { id: 5, incorrectSentence: "Sempre dediquei-me.", placeholder: "Sempre me dediquei." },
      { id: 6, incorrectSentence: "Ontem encontrei-a.", placeholder: "Ontem a encontrei." },
      { id: 7, incorrectSentence: "Ele recusou-se a ir.", placeholder: "Ele se recusou." },
      { id: 8, incorrectSentence: "Todos abraçaram-se.", placeholder: "Todos se abraçaram." },
      { id: 9, incorrectSentence: "Poucos manifestaram-se.", placeholder: "Poucos se manifestaram." },
      { id: 10, incorrectSentence: "Agora entendo-te.", placeholder: "Agora te entendo." },
    ],
    fixation: {
      description: "Escreva uma frase com 'Sempre'. Regra: Use o pronome antes do verbo (Sempre me...)."
    }
  },
  {
    id: "#98",
    topic: "Próclise III (O \"Que\" Atrativo)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "A palavra 'QUE' (conjunção ou pronome relativo) é o ímã mais comum na redação. Se tiver 'que' antes do verbo, o pronome cola nele. 'É necessário que se faça'. 'O aluno que se dedica'.",
    },
    model: {
      error: "O país que desenvolve-se.",
      correction: "O país que se desenvolve.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Quero que cale-se.", placeholder: "Quero que se cale." },
      { id: 2, incorrectSentence: "A medida que impõe-se.", placeholder: "...que se impõe." },
      { id: 3, incorrectSentence: "O texto que refere-se ao tema.", placeholder: "...que se refere..." },
      { id: 4, incorrectSentence: "Pessoas que amam-se.", placeholder: "...que se amam." },
      { id: 5, incorrectSentence: "É vital que faça-se justiça.", placeholder: "...que se faça..." },
      { id: 6, incorrectSentence: "O livro que deu-me.", placeholder: "...que me deu." },
      { id: 7, incorrectSentence: "A carta que enviaram-nos.", placeholder: "...que nos enviaram." },
      { id: 8, incorrectSentence: "Penso que enganei-me.", placeholder: "...que me enganei." },
      { id: 9, incorrectSentence: "O aluno que formou-se.", placeholder: "...que se formou." },
      { id: 10, incorrectSentence: "A lei que aplica-se.", placeholder: "...que se aplica." },
    ],
    fixation: {
      description: "Escreva uma frase defendendo uma tese. Regra: Use 'É fundamental que se...'"
    }
  },
  {
    id: "#99",
    topic: "Ênclise I (A Proibição de Ouro)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Nunca comece frase com pronome oblíquo (Me, Te, Se, Nos, O, A, Lhe). Na fala: 'Me ajuda'. Na escrita: 'Ajude-me' (Obrigatório). Se o verbo inicia a frase, o pronome vai para depois (Ênclise).",
    },
    model: {
      error: "Me disseram a verdade.",
      correction: "Disseram-me a verdade.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Se viu muita confusão.", placeholder: "Viu-se..." },
      { id: 2, incorrectSentence: "Me empresta um lápis?", placeholder: "Empresta-me..." },
      { id: 3, incorrectSentence: "Nos falaram sobre isso.", placeholder: "Falaram-nos..." },
      { id: 4, incorrectSentence: "Te amo.", placeholder: "Amo-te." },
      { id: 5, incorrectSentence: "Se percebe o erro.", placeholder: "Percebe-se..." },
      { id: 6, incorrectSentence: "Lhe entreguei o ouro.", placeholder: "Entreguei-lhe..." },
      { id: 7, incorrectSentence: "Me disseram que não.", placeholder: "Disseram-me..." },
      { id: 8, incorrectSentence: "Se faz necessário.", placeholder: "Faz-se..." },
      { id: 9, incorrectSentence: "Se espera melhorias.", placeholder: "Espera-se..." },
      { id: 10, incorrectSentence: "Me perdi na rua.", placeholder: "Perdi-me..." },
    ],
    fixation: {
      description: "Comece uma frase com o verbo 'Tratar'. Regra: Use 'Trata-se de...'"
    }
  },
  {
    id: "#100",
    topic: "Ênclise II (A Pausa)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Se houver uma vírgula (pausa) antes do verbo, o ímã quebra. O pronome vai para depois do verbo. 'Hoje, dedico-me aos estudos'. Se não tivesse vírgula: 'Hoje me dedico'.",
    },
    model: {
      error: "Segundo o autor, se nota o erro.",
      correction: "Segundo o autor, nota-se o erro.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Agora, (se vê/vê-se) a verdade.", placeholder: "Vê-se..." },
      { id: 2, incorrectSentence: "No Brasil, (se vive/vive-se) bem.", placeholder: "Vive-se..." },
      { id: 3, incorrectSentence: "Diante disso, (se conclui/conclui-se).", placeholder: "Conclui-se..." },
      { id: 4, incorrectSentence: "Portanto, (se deve/deve-se) agir.", placeholder: "Deve-se..." },
      { id: 5, incorrectSentence: "Porém, (nos disseram/disseram-nos) não.", placeholder: "Disseram-nos..." },
      { id: 6, incorrectSentence: "Assim, (se faz/faz-se) necessário.", placeholder: "Faz-se..." },
      { id: 7, incorrectSentence: "Antigamente, (se usava/usava-se) chapéu.", placeholder: "usava-se..." },
      { id: 8, incorrectSentence: "Contudo, (me calei/calei-me).", placeholder: "calei-me..." },
      { id: 9, incorrectSentence: "Na escola, (se aprende/aprende-se).", placeholder: "aprende-se..." },
      { id: 10, incorrectSentence: "Ontem, (te vi/vi-te).", placeholder: "vi-te..." },
    ],
    fixation: {
      description: "Use um conectivo conclusivo e depois o verbo. Regra: 'Portanto, percebe-se...'"
    }
  },
  {
    id: "#101",
    topic: "Ênclise III (Gerúndio)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Se o verbo está no gerúndio (terminado em -NDO), o pronome gosta de ficar depois. 'O governo agiu, negando-se a falar.' Exceção: Se tiver preposição 'EM' antes, puxa para antes. 'Em se tratando'.",
    },
    model: {
      error: "O tempo passou, me deixando triste.",
      correction: "O tempo passou, deixando-me triste.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O menino correu, se machucando.", placeholder: "...machucando-se." },
      { id: 2, incorrectSentence: "A lei mudou, nos afetando.", placeholder: "...afetando-nos." },
      { id: 3, incorrectSentence: "Ela sorriu, me olhando.", placeholder: "...olhando-me." },
      { id: 4, incorrectSentence: "O aluno saiu, se despedindo.", placeholder: "...despedindo-se." },
      { id: 5, incorrectSentence: "O texto acabou, se resumindo a isso.", placeholder: "...resumindo-se..." },
      { id: 6, incorrectSentence: "A crise cresceu, se espalhando.", placeholder: "...espalhando-se." },
      { id: 7, incorrectSentence: "O sol nasceu, nos aquecendo.", placeholder: "...aquecendo-nos." },
      { id: 8, incorrectSentence: "Ele gritou, se exaltando.", placeholder: "...exaltando-se." },
      { id: 9, incorrectSentence: "A vida segue, se renovando.", placeholder: "...renovando-se." },
      { id: 10, incorrectSentence: "O professor falou, se dirigindo a mim.", placeholder: "...dirigindo-se..." },
    ],
    fixation: {
      description: "Escreva uma frase com ação contínua (gerúndio). Regra: Use hífen + pronome (Ex: fazendo-se)."
    }
  },
  {
    id: "#102",
    topic: "Mesóclise (O Dinossauro)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "É colocar o pronome no MEIO do verbo. Só acontece com verbos no FUTURO (do Presente ou do Pretérito) se não houver palavra atrativa antes. 'Farei' + 'o' -> 'Far-lo-ei'. Dica Elite: Na redação, evite. Soa pedante.",
    },
    model: {
      error: "Te darei o mundo.",
      correction: "Dar-te-ei o mundo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Direi-te a verdade.", placeholder: "Dir-te-ei..." },
      { id: 2, incorrectSentence: "Convidar-me-ão para a festa.", placeholder: "(Certo) Mesóclise." },
      { id: 3, incorrectSentence: "Entregarei-te o prêmio.", placeholder: "Entregar-te-ei..." },
      { id: 4, incorrectSentence: "Comemorar-se-á o feriado.", placeholder: "(Certo)" },
      { id: 5, incorrectSentence: "Ajudar-nos-ia se pudesse.", placeholder: "(Certo)" },
      { id: 6, incorrectSentence: "Far-se-á justiça.", placeholder: "(Certo)" },
      { id: 7, incorrectSentence: "Dar-lhe-ei um abraço.", placeholder: "(Certo)" },
      { id: 8, incorrectSentence: "Encontrar-te-ei lá.", placeholder: "(Certo)" },
      { id: 9, incorrectSentence: "Realizar-se-á o evento.", placeholder: "(Certo)" },
      { id: 10, incorrectSentence: "Tratar-se-ia de um erro.", placeholder: "(Certo)" },
    ],
    fixation: {
      description: "Transforme 'Ajudarei você' (te) em mesóclise. (Ajudar-te-ei)."
    }
  },
  {
    id: "#103",
    topic: "Pronomes O, A, Lhe (Quem complementa quem?)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "O / A: Substituem 'coisas' ou pessoas (Objeto Direto - sem preposição). LHE: Substitui 'pessoas' (Objeto Indireto - com preposição 'a' ou 'para'). 'Vi o filme' -> 'Vi-o'. 'Obedeci ao pai' -> 'Obedeci-lhe'.",
    },
    model: {
      error: "Eu vi ele.",
      correction: "Eu o vi.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Eu amo ela.", placeholder: "Eu a amo." },
      { id: 2, incorrectSentence: "Eu paguei ao médico.", placeholder: "Eu lhe paguei." },
      { id: 3, incorrectSentence: "Comprei o carro.", placeholder: "Comprei-o." },
      { id: 4, incorrectSentence: "Entreguei o livro a ele.", placeholder: "Entreguei-lhe o livro." },
      { id: 5, incorrectSentence: "Respeito o professor.", placeholder: "Respeito-o." },
      { id: 6, incorrectSentence: "Obedeço às leis.", placeholder: "Obedeço-lhes." },
      { id: 7, incorrectSentence: "Convidei ela.", placeholder: "Convidei-a." },
      { id: 8, incorrectSentence: "Disse a ele.", placeholder: "Disse-lhe." },
      { id: 9, incorrectSentence: "Encontrei as chaves.", placeholder: "Encontrei-as." },
      { id: 10, incorrectSentence: "Perdoei ao amigo.", placeholder: "Perdoei-lhe." },
    ],
    fixation: {
      description: "Reescreva: 'Eu vi o aluno.' Regra: Use o pronome oblíquo 'o'."
    }
  },
  {
    id: "#104",
    topic: "Alterações Fonéticas (Lo, La, No, Na)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Quando o verbo termina em R, S ou Z, o pronome 'O/A' vira 'LO/LA' e a letra final cai. Fazer + o = Fazê-lo. Quando termina em som nasal (M, ÃO), vira 'NO/NA'. Fizeram + o = Fizeram-no.",
    },
    model: {
      error: "Vou amar ela.",
      correction: "Vou amá-la.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Vou fazer o dever.", placeholder: "Vou fazê-lo." },
      { id: 2, incorrectSentence: "Quero comer o bolo.", placeholder: "Quero comê-lo." },
      { id: 3, incorrectSentence: "É preciso dizer a verdade.", placeholder: "É preciso dizê-la." },
      { id: 4, incorrectSentence: "Vamos vender a casa.", placeholder: "Vamos vendê-la." },
      { id: 5, incorrectSentence: "Eles compraram o carro.", placeholder: "Eles compraram-no." },
      { id: 6, incorrectSentence: "Puseram a mesa.", placeholder: "Puseram-na." },
      { id: 7, incorrectSentence: "Quis fazer isso.", placeholder: "Quis fazê-lo." },
      { id: 8, incorrectSentence: "Vou pôr o livro aqui.", placeholder: "Vou pô-lo aqui." },
      { id: 9, incorrectSentence: "Cantaram a música.", placeholder: "Cantaram-na." },
      { id: 10, incorrectSentence: "Amar a vida.", placeholder: "Amá-la." },
    ],
    fixation: {
      description: "Reescreva: 'Preciso escrever a redação.' Regra: Use 'escrevê-la'."
    }
  },
  {
    id: "#105",
    topic: "Teste Final Mês 4 (Refinamento)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Você agora sabe impessoalizar o texto (Voz Passiva) e posicionar os pronomes como um diplomata (Próclise/Ênclise). Vamos misturar tudo no teste final do Mês 4.",
    },
    model: {
      error: "Não se deve fazer isso.",
      correction: "Análise: Próclise pelo Não / Passiva Sintética.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Me disseram que o Brasil vai mal.", placeholder: "Disseram-me..." },
      { id: 2, incorrectSentence: "O governo criou a lei. (Passiva Sintética)", placeholder: "Criou-se a lei." },
      { id: 3, incorrectSentence: "Não espere-me para jantar.", placeholder: "Não me espere." },
      { id: 4, incorrectSentence: "Espero que ajude-nos.", placeholder: "Espero que nos ajude." },
      { id: 5, incorrectSentence: "Segundo a lei, se pune o infrator.", placeholder: "...pune-se o infrator." },
      { id: 6, incorrectSentence: "Eu vi ele na rua.", placeholder: "Eu o vi." },
      { id: 7, incorrectSentence: "Quero fazer o bem.", placeholder: "Quero fazê-lo." },
      { id: 8, incorrectSentence: "O texto foi lido pelo aluno. (Omitir agente)", placeholder: "O texto foi lido." },
      { id: 9, incorrectSentence: "Se trata de um erro grave.", placeholder: "Trata-se de..." },
      { id: 10, incorrectSentence: "Alugam-se casas. (Certo ou Errado?)", placeholder: "Certo." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'A importância da leitura'. Obrigatoriedade: Use uma Voz Passiva Sintética (Ex: nota-se) e uma Próclise correta (Ex: que se)."
    }
  },

  // --- PART 2: PARALELISMO E VÍCIOS DE LINGUAGEM ---
  {
    id: "#106",
    topic: "Paralelismo (A Lei da Simetria)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    sectionInfo: {
      title: "Paralelismo e Vícios",
      subtitle: "Estilo e Revisão Final"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Se você começou uma lista com Substantivo, termine com Substantivo. Se começou com Verbo, termine com Verbo. O texto gosta de espelhos. Quebrar o padrão deixa a frase manca. ❌ Gosto de correr (verbo) e natação (substantivo). ✅ Gosto de correr (verbo) e nadar (verbo).",
    },
    model: {
      error: "O governo deve investir em saúde e a criação de escolas.",
      correction: "O governo deve investir em saúde e criar escolas.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Ela gosta de cantar, dançar e de leitura.", placeholder: "..., dançar e ler." },
      { id: 2, incorrectSentence: "O plano visa à redução de custos e aumentar o lucro.", placeholder: "...e ao aumento do lucro." },
      { id: 3, incorrectSentence: "Ele é inteligente, dedicado e tem coragem.", placeholder: "...dedicado e corajoso." },
      { id: 4, incorrectSentence: "A medida é necessária, urgente e de importância.", placeholder: "...urgente e importante." },
      { id: 5, incorrectSentence: "Vim para discutir e para a resolução do caso.", placeholder: "...e para resolver o caso." },
      { id: 6, incorrectSentence: "O aluno precisa de foco, disciplina e estudar.", placeholder: "...disciplina e estudo." },
      { id: 7, incorrectSentence: "Quero viajar para a Europa e conhecer a Ásia.", placeholder: "(Certo)" },
      { id: 8, incorrectSentence: "O projeto exige tempo e que tenha dinheiro.", placeholder: "...tempo e dinheiro." },
      { id: 9, incorrectSentence: "A lei pune o roubo, o furto e quem mata.", placeholder: "...o furto e o homicídio." },
      { id: 10, incorrectSentence: "O Brasil precisa crescer e de desenvolvimento.", placeholder: "...crescer e se desenvolver." },
    ],
    fixation: {
      description: "Liste 3 coisas que você faz no dia a dia. Regra: Use apenas verbos no infinitivo (ex: Acordar, comer, dormir)."
    }
  },
  {
    id: "#107",
    topic: "Paralelismo com Conectivos",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Conectivos duplos exigem estruturas duplas iguais. Se usou 'Não só...', tem que usar 'Mas também...'. Se usou 'Tanto...', tem que usar 'Quanto...'. E o que vem depois de um, tem que ser igual ao que vem depois do outro (Preposição com Preposição).",
    },
    model: {
      error: "O problema está na falta de verba e gestão.",
      correction: "O problema está na falta de verba e na gestão.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O problema afeta tanto os ricos quanto (pobres/os pobres).", placeholder: "os pobres." },
      { id: 2, incorrectSentence: "Ele não só estuda mas também (trabalho/trabalha).", placeholder: "trabalha." },
      { id: 3, incorrectSentence: "A lei vale para homens e para mulheres.", placeholder: "(Certo)" },
      { id: 4, incorrectSentence: "A lei vale para homens e mulheres.", placeholder: "(Certo)" },
      { id: 5, incorrectSentence: "A lei vale para homens e as mulheres.", placeholder: "(Errado) Para homens e para mulheres..." },
      { id: 6, incorrectSentence: "Gosto muito de ler e pouco de escrever.", placeholder: "(Certo) Simetria." },
      { id: 7, incorrectSentence: "Estive em Roma e em Paris.", placeholder: "(Certo)" },
      { id: 8, incorrectSentence: "Quero ou viajar ou (comprar/compra) um carro.", placeholder: "comprar." },
      { id: 9, incorrectSentence: "Seja por bem, seja por mal.", placeholder: "(Certo)" },
      { id: 10, incorrectSentence: "O texto deve ter clareza e coesão.", placeholder: "(Certo)" },
    ],
    fixation: {
      description: "Escreva sobre seus estudos usando 'Não só... mas também'."
    }
  },
  {
    id: "#108",
    topic: "Ambiguidade (O Duplo Sentido)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Ambiguidade é quando a frase tem dois sentidos e confunde o leitor. O vilão nº 1 é o pronome 'SUA' ou 'SEU'. 'O policial prendeu o ladrão em sua casa.' (Casa de quem?). Solução: Use 'dele', 'dela', ou reescreva.",
    },
    model: {
      error: "Ana falou com Pedro sobre sua nota.",
      correction: "Ana falou com Pedro sobre a nota dele.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A mãe pediu à filha para arrumar seu quarto.", placeholder: "...quarto dela." },
      { id: 2, incorrectSentence: "O aluno encontrou o professor em sua sala.", placeholder: "...na sala do mestre." },
      { id: 3, incorrectSentence: "O guarda deteve o suspeito em seu carro.", placeholder: "...no carro do suspeito." },
      { id: 4, incorrectSentence: "Vi o menino correndo. (Quem corria?)", placeholder: "Vi o menino que corria." },
      { id: 5, incorrectSentence: "O deputado falou com o presidente sobre seu projeto.", placeholder: "...projeto deste." },
      { id: 6, incorrectSentence: "Maria comeu um doce e sua irmã também.", placeholder: "...também o comeu." },
      { id: 7, incorrectSentence: "Mataram o porco do meu tio. (O tio ou o animal?)", placeholder: "Mataram o suíno do meu tio." },
      { id: 8, incorrectSentence: "Ele sentou no banco. (Praça ou Dinheiro?)", placeholder: "...no banco da praça." },
      { id: 9, incorrectSentence: "A menina viu a vizinha saindo.", placeholder: "...que a vizinha saía." },
      { id: 10, incorrectSentence: "Roubaram o banco da entrada.", placeholder: "Roubaram a agência..." },
    ],
    fixation: {
      description: "Reescreva: 'João abraçou o pai em sua casa.' (Deixe claro que a casa é do pai)."
    }
  },
  {
    id: "#109",
    topic: "Gerundismo (O Vício do Telemarketing)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Não use 'Vou estar fazendo', 'Vamos estar analisando'. Isso é vício de linguagem. Use o futuro simples: 'Farei', 'Analisaremos', 'Vou fazer'. Nota: Gerúndio é bom (Fazendo, correndo), o ruim é o Gerundismo no Futuro desnecessário.",
    },
    model: {
      error: "Nós vamos estar enviando o material.",
      correction: "Nós enviaremos o material.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O governo vai estar criando leis.", placeholder: "O governo criará leis." },
      { id: 2, incorrectSentence: "Eu vou estar verificando.", placeholder: "Vou verificar." },
      { id: 3, incorrectSentence: "Nós vamos estar apresentando o trabalho.", placeholder: "Apresentaremos." },
      { id: 4, incorrectSentence: "O aluno vai estar podendo sair.", placeholder: "Poderá sair." },
      { id: 5, incorrectSentence: "Em breve, vamos estar resolvendo.", placeholder: "Resolveremos." },
      { id: 6, incorrectSentence: "A escola vai estar abrindo vagas.", placeholder: "Abrirá vagas." },
      { id: 7, incorrectSentence: "Eu vou estar ligando.", placeholder: "Ligarei." },
      { id: 8, incorrectSentence: "Eles vão estar transferindo a verba.", placeholder: "Transferirão." },
      { id: 9, incorrectSentence: "Amanhã vou estar viajando.", placeholder: "(Certo - ação durativa)." },
      { id: 10, incorrectSentence: "Aguarde que vou estar passando.", placeholder: "Aguarde que passarei." },
    ],
    fixation: {
      description: "Imagine que você vai escrever uma redação amanhã. Regra: Use 'Escreverei' em vez de 'Vou estar escrevendo'."
    }
  },
  {
    id: "#110",
    topic: "Pleonasmo (A Redundância)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Não repita ideias óbvias. 'Subir para cima', 'Elo de ligação', 'Criação de novos', 'Protagonista principal'. Corte a palavra excedente. Seja conciso.",
    },
    model: {
      error: "Precisamos criar novos empregos.",
      correction: "Precisamos criar empregos.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Elo de ligação.", placeholder: "Elo." },
      { id: 2, incorrectSentence: "Certeza absoluta.", placeholder: "Certeza." },
      { id: 3, incorrectSentence: "Fato real.", placeholder: "Fato." },
      { id: 4, incorrectSentence: "Surpresa inesperada.", placeholder: "Surpresa." },
      { id: 5, incorrectSentence: "Gritar alto.", placeholder: "Gritar." },
      { id: 6, incorrectSentence: "Encarar de frente.", placeholder: "Encarar." },
      { id: 7, incorrectSentence: "Consenso geral.", placeholder: "Consenso." },
      { id: 8, incorrectSentence: "Plano para o futuro.", placeholder: "Plano." },
      { id: 9, incorrectSentence: "Hemorragia de sangue.", placeholder: "Hemorragia." },
      { id: 10, incorrectSentence: "Protagonista principal.", placeholder: "Protagonista." },
    ],
    fixation: {
      description: "Escreva uma frase sobre 'Planejamento'. Regra: Não use 'antecipado' ou 'futuro'. Apenas 'Planejamento'."
    }
  },
  {
    id: "#111",
    topic: "Concisão (Cortando a Gordura)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Escreva o máximo de informação com o mínimo de palavras. Troque locuções longas por verbos ou palavras únicas. 'Fazer uma análise' -> 'Analisar'. 'No dia de hoje' -> 'Hoje'.",
    },
    model: {
      error: "Devemos fazer a conscientização do povo.",
      correction: "Devemos conscientizar o povo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Vamos fazer uma leitura.", placeholder: "Vamos ler." },
      { id: 2, incorrectSentence: "É preciso tomar uma decisão.", placeholder: "É preciso decidir." },
      { id: 3, incorrectSentence: "No ano de 2025.", placeholder: "Em 2025." },
      { id: 4, incorrectSentence: "Com a finalidade de passar.", placeholder: "Para passar." },
      { id: 5, incorrectSentence: "Dar uma explicação.", placeholder: "Explicar." },
      { id: 6, incorrectSentence: "Realizar uma compra.", placeholder: "Comprar." },
      { id: 7, incorrectSentence: "Pôr em prática.", placeholder: "Praticar/Executar." },
      { id: 8, incorrectSentence: "Fazer uma viagem.", placeholder: "Viajar." },
      { id: 9, incorrectSentence: "Nos dias de hoje.", placeholder: "Hoje / Atualmente." },
      { id: 10, incorrectSentence: "Ter a necessidade de.", placeholder: "Necessitar." },
    ],
    fixation: {
      description: "Reescreva: 'O governo precisa fazer a construção de escolas com o objetivo de ensinar.' (O governo precisa construir escolas para ensinar)."
    }
  },
  {
    id: "#112",
    topic: "Cacofonia (O Som Feio)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Cuidado com o encontro de finais de palavras que formam sons estranhos ou palavrões. 'Vi ela' (Viela). 'Uma mão' (Mamão). 'Por cada' (Porcada). 'Fé demais' (Fede).",
    },
    model: {
      error: "Eu vi ela na rua.",
      correction: "Eu a vi na rua.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Eu amo ela.", placeholder: "Eu a amo." },
      { id: 2, incorrectSentence: "Paguei por cada item.", placeholder: "Paguei por item." },
      { id: 3, incorrectSentence: "A boca dela.", placeholder: "A boca de Maria / Sua boca." },
      { id: 4, incorrectSentence: "Vou-me já.", placeholder: "Vou agora." },
      { id: 5, incorrectSentence: "Havia uma mão.", placeholder: "Havia certa mão." },
      { id: 6, incorrectSentence: "Vez passada.", placeholder: "Na última vez." },
      { id: 7, incorrectSentence: "Fé demais.", placeholder: "Muita fé." },
      { id: 8, incorrectSentence: "Como anda você?", placeholder: "Como você está?" },
      { id: 9, incorrectSentence: "Culpado do crime.", placeholder: "Culpado pelo crime." },
      { id: 10, incorrectSentence: "Ela tinha.", placeholder: "Ela possuía." },
    ],
    fixation: {
      description: "Escreva uma frase evitando 'Por cada'. Use 'Por'."
    }
  },
  {
    id: "#113",
    topic: "Estrangeirismo (Fale Português)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Na redação oficial/acadêmica, evite termos em inglês se houver equivalente em português. 'Startar' -> 'Iniciar'. 'Feedback' -> 'Retorno'. 'Fake News' -> 'Notícias falsas'.",
    },
    model: {
      error: "Precisamos de um brainstorm.",
      correction: "Precisamos de uma chuva de ideias.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O delivery aumentou.", placeholder: "A entrega." },
      { id: 2, incorrectSentence: "Vamos startar o projeto.", placeholder: "Vamos iniciar." },
      { id: 3, incorrectSentence: "Deu match.", placeholder: "Deu certo / combinou." },
      { id: 4, incorrectSentence: "É preciso ter mindset.", placeholder: "Mentalidade." },
      { id: 5, incorrectSentence: "O bullying nas escolas.", placeholder: "Intimidação sistemática." },
      { id: 6, incorrectSentence: "Fazer um upgrade.", placeholder: "Melhoria / Atualização." },
      { id: 7, incorrectSentence: "O layout da cidade.", placeholder: "O desenho / traçado." },
      { id: 8, incorrectSentence: "O budget do governo.", placeholder: "O orçamento." },
      { id: 9, incorrectSentence: "Ter uma performance boa.", placeholder: "Desempenho." },
      { id: 10, incorrectSentence: "O site está off.", placeholder: "Fora do ar." },
    ],
    fixation: {
      description: "Escreva sobre 'Notícias Falsas' sem usar o termo em inglês."
    }
  },
  {
    id: "#114",
    topic: "Vocabulário Preciso (Ter vs. Haver)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "O verbo TER indica POSSE (Eu tenho um carro). Não use 'Ter' no sentido de EXISTIR. Use 'Haver'. ❌ Tem gente aqui. (Errado). ✅ Há gente aqui. (Certo).",
    },
    model: {
      error: "O Brasil tem problemas.",
      correction: "No Brasil há problemas.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Tem muitos alunos na sala.", placeholder: "Há muitos alunos..." },
      { id: 2, incorrectSentence: "Teve um acidente.", placeholder: "Houve um acidente." },
      { id: 3, incorrectSentence: "Não tem vaga.", placeholder: "Não há vaga." },
      { id: 4, incorrectSentence: "Tem que estudar.", placeholder: "É preciso estudar." },
      { id: 5, incorrectSentence: "Na cidade tem violência.", placeholder: "Na cidade existe..." },
      { id: 6, incorrectSentence: "Tem pessoas que não leem.", placeholder: "Há pessoas..." },
      { id: 7, incorrectSentence: "O texto tem coesão.", placeholder: "(Certo - Possui coesão)." },
      { id: 8, incorrectSentence: "Não tem desculpa.", placeholder: "Não há desculpa." },
      { id: 9, incorrectSentence: "Tem dias que chove.", placeholder: "Há dias..." },
      { id: 10, incorrectSentence: "Teve festa ontem.", placeholder: "Houve festa." },
    ],
    fixation: {
      description: "Escreva: 'Existem soluções para o problema.' Regra: Use o verbo HAVER."
    }
  },
  {
    id: "#115",
    topic: "Frases Longas (O Labirinto)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Frases muito longas cansam e confundem. Se sua frase tem mais de 3 linhas, corte-a no meio. Use ponto final e conectivo.",
    },
    model: {
      error: "Estudei muito e passei na prova que era difícil mas consegui.",
      correction: "Estudei muito e passei na prova. Ela era difícil, mas consegui.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A saúde é vital mas o governo não investe...", placeholder: "A saúde é vital. Entretanto..." },
      { id: 2, incorrectSentence: "O aluno leu o livro que o professor pediu...", placeholder: "O aluno leu o livro. O professor..." },
      { id: 3, incorrectSentence: "A tecnologia ajuda mas vicia por isso...", placeholder: "A tecnologia ajuda, mas vicia. Por isso..." },
      { id: 4, incorrectSentence: "O trânsito parou porque choveu e alagou...", placeholder: "O trânsito parou, pois choveu. O temporal..." },
      { id: 5, incorrectSentence: "Escrever é bom pois organiza a mente...", placeholder: "Escrever é bom. Pois organiza..." },
      { id: 6, incorrectSentence: "A floresta queima e os animais fogem...", placeholder: "A floresta queima. Os animais..." },
      { id: 7, incorrectSentence: "Temos leis mas elas não funcionam...", placeholder: "Temos leis. Contudo..." },
      { id: 8, incorrectSentence: "O mundo mudou com a internet que...", placeholder: "O mundo mudou com a internet. Ela..." },
      { id: 9, incorrectSentence: "Ele viajou para a Europa onde conheceu...", placeholder: "Ele viajou para a Europa. Lá conheceu..." },
      { id: 10, incorrectSentence: "O plano falhou visto que não houve...", placeholder: "O plano falhou. Visto que..." },
    ],
    fixation: {
      description: "Escreva duas frases curtas sobre 'Meio Ambiente' em vez de uma longa. Use um ponto final no meio."
    }
  },
  {
    id: "#116",
    topic: "Revisão Turbo I (Mês 4)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Vamos revisar o Paralelismo e a Clareza. Lembre-se: Listas simétricas e nada de duplo sentido.",
    },
    model: {
      error: "Vi o pai com o filho no seu carro.",
      correction: "Vi o pai com o filho no carro do pai.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Gosto de cantar e dança.", placeholder: "cantar e dançar." },
      { id: 2, incorrectSentence: "O governo vai estar investindo.", placeholder: "O governo investirá." },
      { id: 3, incorrectSentence: "A mãe proibiu o filho de sair de sua casa.", placeholder: "...casa dela." },
      { id: 4, incorrectSentence: "Subir para cima.", placeholder: "Subir." },
      { id: 5, incorrectSentence: "Fazer uma comparação.", placeholder: "Comparar." },
      { id: 6, incorrectSentence: "Vi ela.", placeholder: "Vi-a." },
      { id: 7, incorrectSentence: "Tem muitos problemas.", placeholder: "Há muitos problemas." },
      { id: 8, incorrectSentence: "O projeto visa lucro e ajudar.", placeholder: "...lucro e ajuda." },
      { id: 9, incorrectSentence: "O aluno estudou e o aluno passou.", placeholder: "...e ele passou." },
      { id: 10, incorrectSentence: "Onde você quer chegar?", placeholder: "Aonde..." },
    ],
    fixation: {
      description: "Escreva uma frase com uma lista de 3 verbos (Paralelismo perfeito)."
    }
  },
  {
    id: "#117",
    topic: "Revisão Turbo II (Voz e Pronomes)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Relembrando Voz Passiva e Colocação Pronominal. Negativos atraem (Não me...). Início de frase repele (Disseram-me...).",
    },
    model: {
      error: "Me disseram.",
      correction: "Disseram-me.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Não engane-se.", placeholder: "Não se engane." },
      { id: 2, incorrectSentence: "Se vende casas.", placeholder: "Vendem-se casas." },
      { id: 3, incorrectSentence: "O texto foi escrito por ele.", placeholder: "(Certo) Passiva Analítica." },
      { id: 4, incorrectSentence: "Quero que ajude-me.", placeholder: "Que me ajude." },
      { id: 5, incorrectSentence: "Te amo.", placeholder: "Amo-te." },
      { id: 6, incorrectSentence: "Nunca vi-o.", placeholder: "Nunca o vi." },
      { id: 7, incorrectSentence: "Aluga-se apartamentos.", placeholder: "Alugam-se." },
      { id: 8, incorrectSentence: "O problema foi resolvido pelo diretor. (Ativa)", placeholder: "O diretor resolveu..." },
      { id: 9, incorrectSentence: "Ontem, encontrei-a.", placeholder: "(Certo - vírgula)." },
      { id: 10, incorrectSentence: "Me empresta?", placeholder: "Empresta-me." },
    ],
    fixation: {
      description: "Use uma palavra negativa e um pronome corretamente."
    }
  },
  {
    id: "#118",
    topic: "Revisão Turbo III (Coesão)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Relembrando os Conectivos e a Coesão Referencial. Use 'Portanto', 'Entretanto', 'Dessa forma'. Evite ecos.",
    },
    model: {
      error: "O governo falhou. O governo...",
      correction: "O governo falhou. O Estado...",
    },
    exercises: [
      { id: 1, incorrectSentence: "O Brasil é rico mas tem pobreza.", placeholder: "Entretanto..." },
      { id: 2, incorrectSentence: "A educação é vital. A educação muda tudo.", placeholder: "Ela..." },
      { id: 3, incorrectSentence: "Faltou verba então a obra parou.", placeholder: "Por conseguinte..." },
      { id: 4, incorrectSentence: "O aluno que estuda que passa.", placeholder: "O aluno estudioso passa." },
      { id: 5, incorrectSentence: "O problema é grave. Tal problema exige ação.", placeholder: "(Certo)" },
      { id: 6, incorrectSentence: "O homem polui. Isso afeta o clima.", placeholder: "(Certo)" },
      { id: 7, incorrectSentence: "A lei foi criada onde prevê punição.", placeholder: "A qual / Em que..." },
      { id: 8, incorrectSentence: "Gosto de ler porque aprendo.", placeholder: "Pois / Visto que..." },
      { id: 9, incorrectSentence: "O tema é difícil. Esse tema cai na prova.", placeholder: "(Certo)" },
      { id: 10, incorrectSentence: "Machado escreveu. O mesmo era bom.", placeholder: "Ele..." },
    ],
    fixation: {
      description: "Conecte: 'Estudei. Passei.' usando um conectivo de conclusão elegante."
    }
  },
  {
    id: "#119",
    topic: "O Simulado Final (Pré-Prova)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O Desbloqueio",
      content: "Imagine que esta é a revisão de véspera. Abaixo estão frases reais retiradas de redações notas 600. Sua missão é transformá-las em nota 1000.",
    },
    model: {
      error: "O governo tem que fazer coisas pra ajudar.",
      correction: "O Estado deve adotar medidas para auxiliar a população.",
    },
    exercises: [
      { id: 1, incorrectSentence: "As pessoas precisam ter mais consciência.", placeholder: "A sociedade necessita de maior conscientização." },
      { id: 2, incorrectSentence: "O problema da água é uma coisa séria.", placeholder: "A escassez hídrica é uma questão grave." },
      { id: 3, incorrectSentence: "Tem muita gente que não respeita.", placeholder: "Há muitos indivíduos que desrespeitam." },
      { id: 4, incorrectSentence: "A gente precisa mudar isso aí.", placeholder: "É imperativo mudarmos tal cenário." },
      { id: 5, incorrectSentence: "O governo vai estar criando leis.", placeholder: "O Poder Público criará leis." },
      { id: 6, incorrectSentence: "Vi ela jogando lixo.", placeholder: "Vi-a descartando resíduos." },
      { id: 7, incorrectSentence: "Não me falaram nada.", placeholder: "Nada me disseram." },
      { id: 8, incorrectSentence: "A educação e saúde é importante.", placeholder: "A educação e a saúde são fundamentais." },
      { id: 9, incorrectSentence: "Cheguei no limite.", placeholder: "Cheguei ao limite." },
      { id: 10, incorrectSentence: "Portanto, vamos acabar com o problema.", placeholder: "Portanto, deve-se mitigar o impasse." },
    ],
    fixation: {
      description: "Escreva uma frase de conclusão perfeita para o tema 'Violência Urbana'."
    }
  },
  {
    id: "#120",
    topic: "O Desafio Final (Mix de Elite)",
    metaTime: "30 Minutos",
    theme: 'emerald',
    theory: {
      title: "O DESBLOQUEIO (A Conquista)",
      content: "PARABÉNS! Você chegou ao fim. Esta ficha é o teste definitivo. Ela mistura todos os erros que estudamos nos 4 meses: Vírgula, Crase, Concordância, Regência, Colocação Pronominal, Paralelismo e Clareza. Se você acertar estas 10 frases, você está pronto para a nota máxima.",
    },
    model: {
      error: "Se criou leis e punição para quem não obedecer a regra.",
      correction: "Criaram-se leis e punições para quem não obedecer à regra.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O governo vai estar analisando o projeto que visa o lucro.", placeholder: "O governo analisará o projeto que visa ao lucro." },
      { id: 2, incorrectSentence: "Fazem anos que a população pede, por melhorias.", placeholder: "Faz anos que a população pede melhorias." },
      { id: 3, incorrectSentence: "Aluga-se apartamentos para estudantes e trabalhadores.", placeholder: "Alugam-se apartamentos..." },
      { id: 4, incorrectSentence: "Cheguei no limite, mas não me calei.", placeholder: "Cheguei ao limite..." },
      { id: 5, incorrectSentence: "É proibido entrada de pessoas estranhas.", placeholder: "É proibida a entrada..." },
      { id: 6, incorrectSentence: "A mãe pediu a filha para arrumar seu quarto.", placeholder: "...o quarto desta." },
      { id: 7, incorrectSentence: "Gosto de cantar, dançar e de viajar.", placeholder: "...cantar, dançar e viajar." },
      { id: 8, incorrectSentence: "Não espere-me para jantar, pois vou chegar tarde.", placeholder: "Não me espere... chegarei..." },
      { id: 9, incorrectSentence: "A maioria dos alunos concordam com a nova regra. (Certo ou Errado?)", placeholder: "(Certo)." },
      { id: 10, incorrectSentence: "O problema da fome é uma coisa séria que afeta a todos.", placeholder: "A escassez... problema grave..." },
    ],
    fixation: {
      description: "Escreva uma frase para você mesmo ler no dia da sua prova, usando a gramática perfeita (Voz Passiva ou Próclise)."
    }
  }
];