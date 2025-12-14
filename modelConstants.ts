import { TrainingSheetData } from './types';

export const MODEL_SHEETS: TrainingSheetData[] = [
  // --- VOLUME 2 PART 1: CONCORDÂNCIA (#31-#45) ---
  {
    id: "#31",
    topic: "O Núcleo do Sujeito",
    metaTime: "30 Minutos",
    theme: 'indigo',
    sectionInfo: {
      title: "Concordância Verbal e Nominal",
      subtitle: "Sujeito composto, partitivo, etc."
    },
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O verbo obedece ao CHEFE (o núcleo do sujeito), não aos vizinhos. Às vezes, a frase é longa e cheia de palavras no plural, mas se o núcleo (a palavra principal) for singular, o verbo fica no singular. Ignore o que está no meio.",
    },
    model: {
      error: "A lista de materiais escolares sumiram.",
      correction: "A lista de materiais escolares sumiu.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O conjunto de regras devem ser respeitadas.", placeholder: "Núcleo: Conjunto. Corrija..." },
      { id: 2, incorrectSentence: "A mudança nos hábitos alimentares causaram melhorias.", placeholder: "Quem causou? A mudança..." },
      { id: 3, incorrectSentence: "O uso de celulares e tablets aumentaram na pandemia.", placeholder: "Núcleo: Uso. Corrija..." },
      { id: 4, incorrectSentence: "A opinião dos especialistas divergem sobre o tema.", placeholder: "Quem diverge? A opinião..." },
      { id: 5, incorrectSentence: "O grupo de manifestantes fecharam a rua.", placeholder: "O grupo fechou..." },
      { id: 6, incorrectSentence: "A falta de investimentos em saúde geram caos.", placeholder: "O que gera caos? A falta..." },
      { id: 7, incorrectSentence: "O grito dos torcedores ecoaram no estádio.", placeholder: "O grito ecoou..." },
      { id: 8, incorrectSentence: "A produção de carros elétricos cresceram este ano.", placeholder: "A produção cresceu..." },
      { id: 9, incorrectSentence: "A maioria das pessoas concordam.", placeholder: "Concordância com 'maioria'..." },
      { id: 10, incorrectSentence: "A lista de aprovados saíram ontem.", placeholder: "A lista saiu..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre 'O preço dos alimentos'. Regra: O sujeito deve ser longo (ex: 'O aumento do preço de vários alimentos...'), mas o verbo deve estar no singular."
    }
  },
  {
    id: "#32",
    topic: "Matemática Verbal (Sujeito Composto)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: 1 + 1 = Plural. Se quem faz a ação são duas coisas ou duas pessoas (Sujeito Composto), o verbo vai para o plural. Dica Elite: Se o sujeito vier DEPOIS do verbo, você pode concordar só com o mais próximo, mas na Redação, prefira sempre o PLURAL para mostrar clareza.",
    },
    model: {
      error: "O Brasil e a Argentina assinou o acordo.",
      correction: "O Brasil e a Argentina assinaram o acordo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A fome e a miséria afeta o país.", placeholder: "Duas coisas afetam..." },
      { id: 2, incorrectSentence: "O pai e a mãe viajou de férias.", placeholder: "Eles viajaram..." },
      { id: 3, incorrectSentence: "Educação e saúde é prioridade.", placeholder: "São prioridades..." },
      { id: 4, incorrectSentence: "O cão e o gato briga todo dia.", placeholder: "Eles brigam..." },
      { id: 5, incorrectSentence: "Chegou a encomenda e a carta.", placeholder: "Invertido: Chegaram..." },
      { id: 6, incorrectSentence: "O aluno e o professor conversou.", placeholder: "Eles conversaram..." },
      { id: 7, incorrectSentence: "Arroz e feijão faz bem à saúde.", placeholder: "Fazem bem..." },
      { id: 8, incorrectSentence: "A teoria e a prática deve andar juntas.", placeholder: "Devem andar..." },
      { id: 9, incorrectSentence: "O medo e a insegurança domina a cidade.", placeholder: "Dominam..." },
      { id: 10, incorrectSentence: "Eu e você formaremos uma bela dupla.", placeholder: "Eu + Você = Nós..." },
    ],
    fixation: {
      description: "Escreva uma frase citando duas matérias que você estuda (ex: História e Geografia). Regra: Coloque o verbo no plural."
    }
  },
  {
    id: "#33",
    topic: "O Dilema (Partitivos)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Quando usamos expressões como 'A maioria de', 'Grande parte de', 'Metade de' + Plural, você tem um Super Poder: pode escolher! Concordar com o grupo (Singular) ou com os membros (Plural).",
    },
    model: {
      error: "A maioria do povo votou (Singular).",
      correction: "A maioria das pessoas votaram (Plural).",
    },
    exercises: [
      { id: 1, incorrectSentence: "Grande parte dos alunos faltou.", placeholder: "Certo ou Errado?" },
      { id: 2, incorrectSentence: "Grande parte dos alunos faltaram.", placeholder: "Certo ou Errado?" },
      { id: 3, incorrectSentence: "A minoria dos candidatos passou.", placeholder: "Concorda com minoria..." },
      { id: 4, incorrectSentence: "A minoria dos candidatos passaram.", placeholder: "Concorda com candidatos..." },
      { id: 5, incorrectSentence: "Metade da sala dormiu.", placeholder: "Concorda com metade..." },
      { id: 6, incorrectSentence: "1% dos brasileiros acredita nisso.", placeholder: "Concorda com 1%..." },
      { id: 7, incorrectSentence: "1% dos brasileiros acreditam nisso.", placeholder: "Concorda com brasileiros..." },
      { id: 8, incorrectSentence: "Uma porção de pássaros voou.", placeholder: "Concorda com porção..." },
      { id: 9, incorrectSentence: "Uma porção de pássaros voaram.", placeholder: "Concorda com pássaros..." },
      { id: 10, incorrectSentence: "A maior parte das verbas foi desviada.", placeholder: "Concorda com maior parte..." },
    ],
    fixation: {
      description: "Escreva duas frases usando 'A maioria dos brasileiros'. Regra: Na primeira, use verbo no singular. Na segunda, no plural."
    }
  },
  {
    id: "#34",
    topic: "O Impessoal (Haver e Fazer)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Os verbos 'Haver' (sentido de existir) e 'Fazer' (sentido de tempo ou clima) NÃO TÊM PLURAL. Eles são 'solteirões convictos'. O certo é sempre: 'Houve problemas' e 'Faz dois anos'.",
    },
    model: {
      error: "Houveram muitas mudanças.",
      correction: "Houve muitas mudanças.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Houveram muitos acidentes na estrada.", placeholder: "Houve..." },
      { id: 2, incorrectSentence: "Fazem dez dias que chove.", placeholder: "Faz dez dias..." },
      { id: 3, incorrectSentence: "Devem haver soluções para isso.", placeholder: "Locução: Deve haver..." },
      { id: 4, incorrectSentence: "Haviam muitas pessoas na festa.", placeholder: "Havia..." },
      { id: 5, incorrectSentence: "Vai fazer três meses que estudo.", placeholder: "Está correto?..." },
      { id: 6, incorrectSentence: "Vão fazer três meses...", placeholder: "Locução impessoal: Vai fazer..." },
      { id: 7, incorrectSentence: "Há anos não vejo meu primo.", placeholder: "Está correto?..." },
      { id: 8, incorrectSentence: "Havia dúvidas sobre o tema.", placeholder: "Está correto?..." },
      { id: 9, incorrectSentence: "Fazem verões muito quentes aqui.", placeholder: "Faz verões..." },
      { id: 10, incorrectSentence: "Existiam muitas pessoas.", placeholder: "Existir TEM plural! Correto..." },
    ],
    fixation: {
      description: "Escreva uma frase dizendo há quanto tempo você estuda para o vestibular/concurso. Regra: Use o verbo 'Fazer' no singular."
    }
  },
  {
    id: "#35",
    topic: "Vende-se Casas (Partícula Apassivadora)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Se você pode transformar a frase em passiva ('Casas são vendidas'), então o verbo tem que ir para o plural. O 'se' funciona como um espelho: se o sujeito é plural, o verbo reflete no plural.",
    },
    model: {
      error: "Aluga-se apartamentos.",
      correction: "Alugam-se apartamentos.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Vende-se terrenos.", placeholder: "Terrenos são vendidos. Vendem-se..." },
      { id: 2, incorrectSentence: "Compra-se ouro.", placeholder: "Ouro é comprado (Singular)..." },
      { id: 3, incorrectSentence: "Faz-se bolos.", placeholder: "Bolos são feitos. Fazem-se..." },
      { id: 4, incorrectSentence: "Conserta-se bicicletas.", placeholder: "Bicicletas são consertadas..." },
      { id: 5, incorrectSentence: "Doa-se livros usados.", placeholder: "Livros são doados..." },
      { id: 6, incorrectSentence: "Ouve-se gritos na rua.", placeholder: "Gritos são ouvidos..." },
      { id: 7, incorrectSentence: "Espera-se resultados melhores.", placeholder: "Resultados são esperados..." },
      { id: 8, incorrectSentence: "Exige-se documentos originais.", placeholder: "Documentos são exigidos..." },
      { id: 9, incorrectSentence: "Analisa-se propostas.", placeholder: "Propostas são analisadas..." },
      { id: 10, incorrectSentence: "Vê-se pássaros no céu.", placeholder: "Pássaros são vistos..." },
    ],
    fixation: {
      description: "Escreva uma frase de anúncio (tipo classificados) oferecendo 'aulas particulares'. Regra: Use a estrutura 'Oferecem-se...'"
    }
  },
  {
    id: "#36",
    topic: "Precisa-se de (Índice de Indeterminação)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Se tem preposição depois do verbo (Precisa-se DE, Confia-se EM, Trata-se DE), o verbo fica SEMPRE NO SINGULAR. Nesse caso, não temos sujeito, temos um 'índice de sujeito desconhecido'.",
    },
    model: {
      error: "Precisam-se de funcionários.",
      correction: "Precisa-se de funcionários.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Necessitam-se de novos equipamentos.", placeholder: "Tem 'de'? Singular..." },
      { id: 2, incorrectSentence: "Confiam-se em Deus.", placeholder: "Tem 'em'? Singular..." },
      { id: 3, incorrectSentence: "Tratam-se de casos graves.", placeholder: "Trata-se de..." },
      { id: 4, incorrectSentence: "Acredita-se em milagres.", placeholder: "Está correto?..." },
      { id: 5, incorrectSentence: "Obedecem-se aos regulamentos.", placeholder: "Obedece-se a..." },
      { id: 6, incorrectSentence: "Assiste-se aos filmes.", placeholder: "Sentido de ver pede 'a'. Singular..." },
      { id: 7, incorrectSentence: "Recorre-se aos tribunais.", placeholder: "Está correto?..." },
      { id: 8, incorrectSentence: "Vive-se bem aqui.", placeholder: "Índice de indeterminação..." },
      { id: 9, incorrectSentence: "Precisa-se de ajudantes.", placeholder: "Está correto?..." },
      { id: 10, incorrectSentence: "Fala-se de política.", placeholder: "Está correto?..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre a necessidade de mudanças no país. Regra: Use 'Precisa-se de...' (Singular)."
    }
  },
  {
    id: "#37",
    topic: "O Camaleão (Adjetivo)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O adjetivo (a qualidade) é um camaleão: ele muda de cor para imitar o substantivo. Se tiver gêneros misturados (masculino e feminino), o masculino plural prevalece no coletivo.",
    },
    model: {
      error: "Segue o texto e a foto atualizado.",
      correction: "Segue o texto e a foto atualizados.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A casa e o carro são (novo).", placeholder: "Novos (Masc + Fem = Masc Plural)..." },
      { id: 2, incorrectSentence: "Ela tem olhos e cabelos (preto).", placeholder: "Pretos..." },
      { id: 3, incorrectSentence: "Comprei sapatos e camisas (caro).", placeholder: "Caros..." },
      { id: 4, incorrectSentence: "A justiça julgou (necessário) a medida.", placeholder: "Julgou necessária..." },
      { id: 5, incorrectSentence: "Água é (bom) para a saúde.", placeholder: "Sem artigo = Bom..." },
      { id: 6, incorrectSentence: "A água é (bom) para a saúde.", placeholder: "Com artigo 'A' = Boa..." },
      { id: 7, incorrectSentence: "Bebida alcoólica é (proibido).", placeholder: "Sem artigo = Proibido..." },
      { id: 8, incorrectSentence: "A bebida alcoólica é (proibido).", placeholder: "Com artigo 'A' = Proibida..." },
      { id: 9, incorrectSentence: "Encontrei a porta e o portão (aberto).", placeholder: "Abertos..." },
      { id: 10, incorrectSentence: "O aluno e a aluna são (dedicado).", placeholder: "Dedicados..." },
    ],
    fixation: {
      description: "Escreva uma frase elogiando 'o texto e a redação' de alguém. Regra: Use o adjetivo 'ótimo' no plural correto."
    }
  },
  {
    id: "#38",
    topic: "Anexo e Incluso (Os Documentos)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: 'Anexo' e 'Incluso' são adjetivos. Eles concordam com o que está indo junto. O arquivo vai anexo. A foto vai anexa. Os arquivos vão anexos. 'Em anexo' é invariável, mas evite.",
    },
    model: {
      error: "Segue anexo as planilhas.",
      correction: "Seguem anexas as planilhas.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Segue ___ a carta.", placeholder: "Anexa..." },
      { id: 2, incorrectSentence: "Vão ___ os boletos.", placeholder: "Anexos..." },
      { id: 3, incorrectSentence: "As fotos estão ___.", placeholder: "Inclusas..." },
      { id: 4, incorrectSentence: "O documento segue ___.", placeholder: "Anexo..." },
      { id: 5, incorrectSentence: "Os recibos vão ___.", placeholder: "Anexos..." },
      { id: 6, incorrectSentence: "A declaração vai ___.", placeholder: "Inclusa..." },
      { id: 7, incorrectSentence: "Remeto ___ as cópias.", placeholder: "Anexas..." },
      { id: 8, incorrectSentence: "O gráfico está ___.", placeholder: "Anexo..." },
      { id: 9, incorrectSentence: "As listas seguem ___.", placeholder: "Inclusas..." },
      { id: 10, incorrectSentence: "Seguem ___ os comprovantes.", placeholder: "Anexos..." },
    ],
    fixation: {
      description: "Imagine que você está enviando um e-mail com sua 'Redação' e seu 'Resumo'. Regra: Escreva: 'Seguem anexos...'"
    }
  },
  {
    id: "#39",
    topic: "É Proibido / É Proibida",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O determinante (artigo 'a') manda em tudo. Se tem 'A', concorda: 'É proibida A entrada'. Se não tem 'A', fica neutro (masculino): 'É proibido entrada'.",
    },
    model: {
      error: "É proibido a venda.",
      correction: "É proibida a venda.",
    },
    exercises: [
      { id: 1, incorrectSentence: "É proibido entrada de estranhos.", placeholder: "Correto (sem artigo)..." },
      { id: 2, incorrectSentence: "É proibido a entrada de estranhos.", placeholder: "Errado -> É proibida..." },
      { id: 3, incorrectSentence: "Paciência é necessário.", placeholder: "Correto..." },
      { id: 4, incorrectSentence: "A paciência é necessária.", placeholder: "Correto..." },
      { id: 5, incorrectSentence: "Verdura é bom.", placeholder: "Correto..." },
      { id: 6, incorrectSentence: "A verdura é boa.", placeholder: "Correto..." },
      { id: 7, incorrectSentence: "É permitido a presença de pais.", placeholder: "Errado -> É permitida..." },
      { id: 8, incorrectSentence: "É permitido permanência.", placeholder: "Correto..." },
      { id: 9, incorrectSentence: "Coragem é necessário.", placeholder: "Correto..." },
      { id: 10, incorrectSentence: "A coragem é necessária.", placeholder: "Correto..." },
    ],
    fixation: {
      description: "Escreva uma regra de um hospital usando 'É proibido'. Regra: Use o artigo 'A' (Ex: A visita) e faça a concordância feminina."
    }
  },
  {
    id: "#40",
    topic: "Menos e Bastante",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra 1: 'Menos' é invariável. Não existe 'Menas'. Regra 2: 'Bastante' se troca por 'Muitos'. Se 'Muitos' for para o plural, 'Bastantes' também vai.",
    },
    model: {
      error: "Havia menas pessoas.",
      correction: "Havia menos pessoas.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Tenho (menos/menas) paciência hoje.", placeholder: "Menos..." },
      { id: 2, incorrectSentence: "Havia (bastante/bastantes) motivos para reclamar.", placeholder: "Muitos motivos -> Bastantes..." },
      { id: 3, incorrectSentence: "Ela tem (menos/menas) chances.", placeholder: "Menos..." },
      { id: 4, incorrectSentence: "Compramos (bastante/bastantes) frutas.", placeholder: "Muitas frutas -> Bastantes..." },
      { id: 5, incorrectSentence: "Eles estão (bastante/bastantes) cansados.", placeholder: "Muito cansados -> Bastante..." },
      { id: 6, incorrectSentence: "Quero (menos/menas) comida.", placeholder: "Menos..." },
      { id: 7, incorrectSentence: "Existem (bastante/bastantes) opções.", placeholder: "Muitas opções -> Bastantes..." },
      { id: 8, incorrectSentence: "(Menos/Menas) palavras, mais ação.", placeholder: "Menos..." },
      { id: 9, incorrectSentence: "Serviram (bastante/bastantes) pratos.", placeholder: "Muitos pratos -> Bastantes..." },
      { id: 10, incorrectSentence: "Ela fala (menos/menas) que ele.", placeholder: "Menos..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre uma festa. Regra: Use 'Bastantes' (no plural) para falar dos convidados ou comidas."
    }
  },
  {
    id: "#41",
    topic: "Porcentagem (O Número ou o Nome?)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Na porcentagem, você pode concordar com o número ou com o especificador. '20% da sala quer' (sala) ou '20% da sala querem' (20). Se for 1%, prefira concordar com o especificador ou use singular.",
    },
    model: {
      error: "10% do orçamento foi gasto (Concorda com orçamento).",
      correction: "10% do orçamento foram gastos (Concorda com 10%).",
    },
    exercises: [
      { id: 1, incorrectSentence: "1% dos alunos (faltou/faltaram).", placeholder: "Ambos aceitos (Faltaram pela atração de alunos)..." },
      { id: 2, incorrectSentence: "50% da população (vacinou/vacinou-se).", placeholder: "Vacinou (População) ou Vacinou-se..." },
      { id: 3, incorrectSentence: "30% (prefere/preferem) estudar à noite.", placeholder: "Preferem (30)..." },
      { id: 4, incorrectSentence: "1,5% (disse/disseram) não.", placeholder: "Disse (Menor que 2)..." },
      { id: 5, incorrectSentence: "20% do eleitorado (vota/votam).", placeholder: "Ambos..." },
      { id: 6, incorrectSentence: "A maioria dos 10% (concorda/concordam).", placeholder: "Ambos..." },
      { id: 7, incorrectSentence: "90% (foi/foram) aprovados.", placeholder: "Foram..." },
      { id: 8, incorrectSentence: "25% da turma (passou/passaram).", placeholder: "Ambos..." },
      { id: 9, incorrectSentence: "1% da verba (sumiu).", placeholder: "Sumiu..." },
      { id: 10, incorrectSentence: "Os outros 50% (ficou/ficaram).", placeholder: "Ficaram..." },
    ],
    fixation: {
      description: "Escreva uma estatística inventada sobre o uso de internet. Regra: 'X% dos jovens...' (Use o verbo no plural)."
    }
  },
  {
    id: "#42",
    topic: "Silepse (Concordância Ideológica)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Às vezes, concordamos com a ideia, não com a palavra. Ex: 'Os brasileiros somos otimistas'. 'Brasileiros' é 3ª pessoa, mas uso 'somos' (nós) para me incluir. Isso é Silepse.",
    },
    model: {
      error: "Todos na sala estávamos cansados (Gramaticalmente estranho).",
      correction: "Todos na sala estávamos cansados (Estilisticamente Elite).",
    },
    exercises: [
      { id: 1, incorrectSentence: "Os estudantes querem mudanças.", placeholder: "Silepse: Os estudantes queremos..." },
      { id: 2, incorrectSentence: "Os cidadãos pagam impostos.", placeholder: "Silepse: Pagamos..." },
      { id: 3, incorrectSentence: "A turma está feliz.", placeholder: "Silepse de número: A turma estamos (evite em redação)..." },
      { id: 4, incorrectSentence: "O povo brasileiro luta.", placeholder: "Silepse: Lutamos..." },
      { id: 5, incorrectSentence: "A população sofre.", placeholder: "Silepse: Sofremos..." },
      { id: 6, incorrectSentence: "Todos sabiam.", placeholder: "Silepse: Sabíamos..." },
      { id: 7, incorrectSentence: "Os homens buscam paz.", placeholder: "Silepse: Buscamos..." },
      { id: 8, incorrectSentence: "A galera gritou.", placeholder: "Silepse: Gritaram..." },
      { id: 9, incorrectSentence: "O casal brigou.", placeholder: "Silepse: Brigaram..." },
      { id: 10, incorrectSentence: "São Paulo é poluída.", placeholder: "Silepse de gênero: Poluído (O estado/lugar)..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre 'Os estudantes brasileiros'. Regra: Use o verbo na 1ª pessoa do plural (nós) para se incluir no grupo."
    }
  },
  {
    id: "#43",
    topic: "Um e Outro / Nem um nem outro",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: 'Um e outro' = Verbo no Plural (ou Singular). 'Nem um nem outro' = Verbo no Singular. 'Um ou outro' = Verbo no Singular (exclusão).",
    },
    model: {
      error: "Um e outro falou a verdade.",
      correction: "Um e outro falaram a verdade.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Um e outro (compareceu/compareceram).", placeholder: "Compareceram..." },
      { id: 2, incorrectSentence: "Nem um nem outro (aceitou/aceitaram) o cargo.", placeholder: "Aceitou..." },
      { id: 3, incorrectSentence: "Um ou outro (ganhará/ganharão) o prêmio.", placeholder: "Ganhará (Exclusão)..." },
      { id: 4, incorrectSentence: "Uma e outra (questão/questões) são difíceis.", placeholder: "Questões..." },
      { id: 5, incorrectSentence: "Nem eu nem você (iremos/irá).", placeholder: "Iremos (Nós)..." },
      { id: 6, incorrectSentence: "Ou ele ou eu (serei/será) escolhido.", placeholder: "Será/Serei (Exclusão)..." },
      { id: 7, incorrectSentence: "Pedro ou Paulo (casará/casarão) com Maria.", placeholder: "Casará..." },
      { id: 8, incorrectSentence: "Laranja ou limão (faz/fazem) bem.", placeholder: "Fazem (Adição)..." },
      { id: 9, incorrectSentence: "Um e outro (disse/disseram) sim.", placeholder: "Disseram..." },
      { id: 10, incorrectSentence: "Nem um nem outro (sabia/sabiam).", placeholder: "Sabia..." },
    ],
    fixation: {
      description: "Escreva uma frase usando 'Um e outro'. Regra: Coloque o verbo no plural."
    }
  },
  {
    id: "#44",
    topic: "O Relógio (Verbos Dar, Bater e Soar)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Esses verbos concordam com o número de horas. 'Deu uma hora'. 'Deram duas horas'. Mas se tiver a palavra 'Relógio' como sujeito, concorda com ele! 'O relógio deu duas horas'.",
    },
    model: {
      error: "Deu duas horas no meu relógio.",
      correction: "Deram duas horas no meu relógio.",
    },
    exercises: [
      { id: 1, incorrectSentence: "(Deu/Deram) uma hora da tarde.", placeholder: "Deu..." },
      { id: 2, incorrectSentence: "(Deu/Deram) cinco horas no sino da igreja.", placeholder: "Deram..." },
      { id: 3, incorrectSentence: "O sino (bateu/bateram) cinco horas.", placeholder: "Bateu (O sino)..." },
      { id: 4, incorrectSentence: "(Soou/Soaram) dez badaladas.", placeholder: "Soaram..." },
      { id: 5, incorrectSentence: "(Bateu/Bateram) meio-dia.", placeholder: "Bateu..." },
      { id: 6, incorrectSentence: "(Bateu/Bateram) meia-noite.", placeholder: "Bateu..." },
      { id: 7, incorrectSentence: "O relógio da sala (deu/deram) doze horas.", placeholder: "Deu..." },
      { id: 8, incorrectSentence: "Já (deu/deram) 11 horas?", placeholder: "Deram..." },
      { id: 9, incorrectSentence: "Faltam 5 minutos para (dar/darem) 10 horas.", placeholder: "Darem..." },
      { id: 10, incorrectSentence: "(Vai dar/Vão dar) duas horas.", placeholder: "Vão dar..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre o horário de um compromisso. Regra: Use 'Deram...' ou 'Bateram...' no plural."
    }
  },
  {
    id: "#45",
    topic: "O Mix (Revisão de Concordância)",
    metaTime: "30 Minutos",
    theme: 'indigo',
    theory: {
      title: "O Desbloqueio",
      content: "Chegamos à metade do Mês 2. Vamos misturar tudo: Núcleo manda no verbo. Haver/Fazer não tem plural. Partícula 'SE' (passiva = plural). Anexo concorda.",
    },
    model: {
      error: "Houveram erros.",
      correction: "Houve erros.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Fazem dias que não chove.", placeholder: "Faz dias..." },
      { id: 2, incorrectSentence: "Aluga-se quartos para estudantes.", placeholder: "Alugam-se..." },
      { id: 3, incorrectSentence: "Precisa-se de vendedores.", placeholder: "Correto (Tem 'de')..." },
      { id: 4, incorrectSentence: "A maioria dos alunos saíram.", placeholder: "Correto..." },
      { id: 5, incorrectSentence: "Segue em anexo os documentos.", placeholder: "Correto, mas prefira 'Seguem anexos'..." },
      { id: 6, incorrectSentence: "É proibido entrada.", placeholder: "Correto..." },
      { id: 7, incorrectSentence: "É proibido a entrada.", placeholder: "Errado -> Proibida..." },
      { id: 8, incorrectSentence: "Menas pessoas vieram.", placeholder: "Errado -> Menos..." },
      { id: 9, incorrectSentence: "O relógio deram três horas.", placeholder: "Errado -> Deu..." },
      { id: 10, incorrectSentence: "A falta de recursos causaram a greve.", placeholder: "Errado -> Causou (A falta)..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'O mercado de trabalho'. Regra: Use: 'Precisa-se de profissionais' (singular) e 'Exigem-se qualidades' (plural)."
    }
  },
  
  // --- VOLUME 2 PART 2: REGÊNCIA (#46-#60) ---
  {
    id: "#46",
    topic: "O Verbo Assistir (Ver ou Ajudar?)",
    metaTime: "30 Minutos",
    theme: 'amber',
    sectionInfo: {
      title: "Regência Verbal e Nominal",
      subtitle: "A relação entre as palavras"
    },
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O verbo 'Assistir' muda de personalidade. Sentido de VER (TV, Cinema): Pede preposição 'A' ('Assistir ao filme'). Sentido de AJUDAR (Médico): Sem preposição ('O médico assistiu o paciente').",
    },
    model: {
      error: "Ontem assisti o jogo do Brasil.",
      correction: "Ontem assisti ao jogo do Brasil.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Nós assistimos ___ documentário sobre a guerra.", placeholder: "Ver (ao)..." },
      { id: 2, incorrectSentence: "O bombeiro assistiu ___ ferido.", placeholder: "Ajudar (o)..." },
      { id: 3, incorrectSentence: "Ela gosta de assistir ___ novelas.", placeholder: "Ver (às)..." },
      { id: 4, incorrectSentence: "Assistimos ___ pôr do sol.", placeholder: "Ver (ao)..." },
      { id: 5, incorrectSentence: "O técnico assistiu ___ jogador que caiu.", placeholder: "Ajudar (o)..." },
      { id: 6, incorrectSentence: "Vou assistir ___ esse filme amanhã.", placeholder: "Ver (a esse)..." },
      { id: 7, incorrectSentence: "A enfermeira assistiu ___ doente.", placeholder: "Ajudar (o)..." },
      { id: 8, incorrectSentence: "Nunca assisti ___ um jogo tão ruim.", placeholder: "Ver (a)..." },
      { id: 9, incorrectSentence: "O governo deve assistir ___ famílias carentes.", placeholder: "Ajudar (as)..." },
      { id: 10, incorrectSentence: "Assistimos ___ peça de teatro.", placeholder: "Ver (à)..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre seu filme ou série favorita. Regra: Use 'Eu assisti ao...' ou 'Gosto de assistir ao...'."
    }
  },
  {
    id: "#47",
    topic: "O Verbo Aspirar (Respirar ou Querer?)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Sentido de RESPIRAR: Sem preposição ('Aspirar o perfume'). Sentido de DESEJAR (Sonho): Pede preposição 'A' ('Aspirar ao cargo').",
    },
    model: {
      error: "O candidato aspira o cargo.",
      correction: "O candidato aspira ao cargo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Ele aspira ___ vaga de gerente.", placeholder: "Desejar (à)..." },
      { id: 2, incorrectSentence: "O aspirador aspira ___ pó.", placeholder: "Sugar (o)..." },
      { id: 3, incorrectSentence: "O jovem aspira ___ sucesso profissional.", placeholder: "Desejar (ao)..." },
      { id: 4, incorrectSentence: "Adoro aspirar ___ aroma das flores.", placeholder: "Cheirar (o)..." },
      { id: 5, incorrectSentence: "O político aspira ___ poder.", placeholder: "Desejar (ao)..." },
      { id: 6, incorrectSentence: "Ela aspira ___ uma carreira internacional.", placeholder: "Desejar (a)..." },
      { id: 7, incorrectSentence: "Aspiramos ___ ar puro da montanha.", placeholder: "Respirar (o)..." },
      { id: 8, incorrectSentence: "Quem estuda aspira ___ aprovação.", placeholder: "Desejar (à)..." },
      { id: 9, incorrectSentence: "Aspirou ___ gás tóxico e desmaiou.", placeholder: "Respirar (o)..." },
      { id: 10, incorrectSentence: "Nós aspiramos ___ dias melhores.", placeholder: "Desejar (a)..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre seu maior sonho (objetivo). Regra: Use o verbo 'Aspirar' com a preposição 'a' (ou crase, se for feminino)."
    }
  },
  {
    id: "#48",
    topic: "O Verbo Visar (Mirar ou Assinar?)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Sentido de OBJETIVO/META: Pede preposição 'A' ('O plano visa ao combate'). Sentido de ASSINAR/MIRAR: Sem preposição ('O gerente visou o cheque').",
    },
    model: {
      error: "A lei visa o bem-estar.",
      correction: "A lei visa ao bem-estar.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O estudo visa a aprovação.", placeholder: "Faltou crase (à aprovação)..." },
      { id: 2, incorrectSentence: "O policial visou o alvo.", placeholder: "Mirar (Certo)..." },
      { id: 3, incorrectSentence: "O projeto visa o desenvolvimento.", placeholder: "Objetivo: Visa ao..." },
      { id: 4, incorrectSentence: "O chefe visou os documentos.", placeholder: "Assinar (Certo)..." },
      { id: 5, incorrectSentence: "A medida visa à redução de custos.", placeholder: "Objetivo (Certo)..." },
      { id: 6, incorrectSentence: "O arqueiro visou ao centro do alvo.", placeholder: "Mirar: Visou o centro..." },
      { id: 7, incorrectSentence: "Minha crítica visa a melhoria do texto.", placeholder: "Faltou crase (à melhoria)..." },
      { id: 8, incorrectSentence: "O governo visa o lucro.", placeholder: "Objetivo: Visa ao..." },
      { id: 9, incorrectSentence: "O banco não visou o cheque.", placeholder: "Assinar (Certo)..." },
      { id: 10, incorrectSentence: "A educação visa ao progresso.", placeholder: "Objetivo (Certo)..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre o objetivo dos seus estudos. Regra: Use 'Meus estudos visam ao...'"
    }
  },
  {
    id: "#49",
    topic: "Esquecer e Lembrar (O Casal Pronome)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Sem Pronome + Sem Preposição ('Eu esqueci o livro'). Com Pronome + Com Preposição ('Eu me esqueci do livro'). Se tem 'ME/SE/NOS', tem que ter 'DE'.",
    },
    model: {
      error: "Eu me esqueci o nome dele.",
      correction: "Eu me esqueci do nome dele.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Eu esqueci ___ chave.", placeholder: "a (sem pronome)..." },
      { id: 2, incorrectSentence: "Eu me esqueci ___ chave.", placeholder: "da (com pronome)..." },
      { id: 3, incorrectSentence: "Nós nos lembramos ___ você.", placeholder: "de..." },
      { id: 4, incorrectSentence: "Nós lembramos ___ caso.", placeholder: "o (sem pronome)..." },
      { id: 5, incorrectSentence: "Ele se esqueceu ___ pagar a conta.", placeholder: "de..." },
      { id: 6, incorrectSentence: "Ela esqueceu ___ carteira em casa.", placeholder: "a..." },
      { id: 7, incorrectSentence: "Jamais me esquecerei ___ desse dia.", placeholder: "me esquecerei deste/desse (de + esse)..." },
      { id: 8, incorrectSentence: "Lembre ___ recado.", placeholder: "o..." },
      { id: 9, incorrectSentence: "Lembre-se ___ recado.", placeholder: "do..." },
      { id: 10, incorrectSentence: "Esqueceram ___ tudo.", placeholder: "de (indeterminado pede de? ou esqueceram tudo?)..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre algo que você nunca esquece. Regra: Use a forma pronominal 'Eu nunca me esqueço de...'"
    }
  },
  {
    id: "#50",
    topic: "Obedecer (Respeito Exige 'A')",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Quem obedece, obedece A alguém ou A alguma coisa. Sempre use a preposição. Mesmo que pareça estranho falar 'Obedeço ao pai', na escrita é o único jeito certo.",
    },
    model: {
      error: "O cidadão deve obedecer a lei.",
      correction: "O cidadão deve obedecer à lei.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Devemos obedecer ___ regulamento.", placeholder: "ao..." },
      { id: 2, incorrectSentence: "A criança não obedece ___ pais.", placeholder: "aos..." },
      { id: 3, incorrectSentence: "O motorista obedeceu ___ sinalização.", placeholder: "à..." },
      { id: 4, incorrectSentence: "Ninguém obedeceu ___ ordem do juiz.", placeholder: "à..." },
      { id: 5, incorrectSentence: "Obedeça ___ seus instintos.", placeholder: "a (ou aos)..." },
      { id: 6, incorrectSentence: "O soldado obedece ___ comandante.", placeholder: "ao..." },
      { id: 7, incorrectSentence: "Precisamos obedecer ___ Constituição.", placeholder: "à..." },
      { id: 8, incorrectSentence: "Ele desobedeceu ___ regras.", placeholder: "às..." },
      { id: 9, incorrectSentence: "Obedeça ___ placa de pare.", placeholder: "à..." },
      { id: 10, incorrectSentence: "O aluno obedeceu ___ professor.", placeholder: "ao..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre a importância de seguir as leis. Regra: Use 'Obedecer às leis'."
    }
  },
  {
    id: "#51",
    topic: "Preferir (Nada de 'Do Que')",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: O verbo Preferir já indica comparação. Não use 'do que'. Estrutura Correta: Preferir X A Y. 'Prefiro estudar a trabalhar'.",
    },
    model: {
      error: "Prefiro frio do que calor.",
      correction: "Prefiro frio a calor.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Prefiro português do que matemática.", placeholder: "a matemática..." },
      { id: 2, incorrectSentence: "Ela prefere sair do que ficar em casa.", placeholder: "a ficar..." },
      { id: 3, incorrectSentence: "Prefiro ler do que assistir TV.", placeholder: "a assistir..." },
      { id: 4, incorrectSentence: "Prefiro mil vezes praia do que campo.", placeholder: "praia a campo (sem mil vezes)..." },
      { id: 5, incorrectSentence: "O brasileiro prefere futebol do que vôlei.", placeholder: "futebol a vôlei..." },
      { id: 6, incorrectSentence: "Prefiro doce a salgado.", placeholder: "Correto..." },
      { id: 7, incorrectSentence: "Prefiro a verdade do que a mentira.", placeholder: "a verdade à mentira..." },
      { id: 8, incorrectSentence: "Ele prefere trabalhar do que estudar.", placeholder: "trabalhar a estudar..." },
      { id: 9, incorrectSentence: "Prefiro dia do que noite.", placeholder: "dia a noite..." },
      { id: 10, incorrectSentence: "Prefiro café do que chá.", placeholder: "café a chá..." },
    ],
    fixation: {
      description: "Escreva uma frase comparando duas matérias escolares. Regra: Use 'Prefiro [matéria 1] a [matéria 2]'."
    }
  },
  {
    id: "#52",
    topic: "Pagar e Perdoar (Coisa vs. Pessoa)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Se você paga/perdoa uma COISA: Sem preposição ('Paguei o boleto'). Se você paga/perdoa uma PESSOA: Pede preposição 'A' ('Paguei ao médico').",
    },
    model: {
      error: "Perdoei o meu amigo.",
      correction: "Perdoei ao meu amigo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Paguei ___ conta de luz.", placeholder: "a (Coisa)..." },
      { id: 2, incorrectSentence: "Paguei ___ dentista.", placeholder: "ao (Pessoa)..." },
      { id: 3, incorrectSentence: "Deus perdoa ___ pecadores.", placeholder: "aos (Pessoa)..." },
      { id: 4, incorrectSentence: "Perdoou ___ dívida.", placeholder: "a (Coisa)..." },
      { id: 5, incorrectSentence: "Já pagamos ___ funcionários.", placeholder: "aos..." },
      { id: 6, incorrectSentence: "Vamos pagar ___ aluguel.", placeholder: "o..." },
      { id: 7, incorrectSentence: "O governo pagou ___ fornecedores.", placeholder: "aos..." },
      { id: 8, incorrectSentence: "Ela não perdoou ___ traição.", placeholder: "a..." },
      { id: 9, incorrectSentence: "Paguei ___ imposto.", placeholder: "o..." },
      { id: 10, incorrectSentence: "Perdoe ___ teu irmão.", placeholder: "a (ao)..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre pagar uma dívida a alguém. Regra: 'Paguei a dívida (coisa) ao fulano (pessoa)'."
    }
  },
  {
    id: "#53",
    topic: "Chegar e Ir (Nada de 'Em')",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Verbos de movimento (Ir, Chegar, Voltar) pedem preposição A, não 'EM'. Quem chega, chega A algum lugar. 'Cheguei no escritório' está errado. 'Cheguei ao escritório' é o certo.",
    },
    model: {
      error: "Cheguei em casa.",
      correction: "Cheguei a casa.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Fui na festa ontem.", placeholder: "Fui à festa..." },
      { id: 2, incorrectSentence: "Chegamos no Brasil.", placeholder: "Chegamos ao Brasil..." },
      { id: 3, incorrectSentence: "Vou no médico.", placeholder: "Vou ao médico..." },
      { id: 4, incorrectSentence: "O aluno chegou na escola atrasado.", placeholder: "chegou à escola..." },
      { id: 5, incorrectSentence: "Iremos na praia.", placeholder: "à praia..." },
      { id: 6, incorrectSentence: "Ele foi no jogo.", placeholder: "ao jogo..." },
      { id: 7, incorrectSentence: "Chegamos no limite.", placeholder: "ao limite..." },
      { id: 8, incorrectSentence: "Fomos no shopping.", placeholder: "ao shopping..." },
      { id: 9, incorrectSentence: "Cheguei em São Paulo.", placeholder: "a São Paulo..." },
      { id: 10, incorrectSentence: "Vai no banco para mim?", placeholder: "ao banco..." },
    ],
    fixation: {
      description: "Escreva uma frase dizendo aonde você foi no fim de semana. Regra: Use 'Fui ao...' ou 'Fui à...'"
    }
  },
  {
    id: "#54",
    topic: "Namorar (Sem 'Com')",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Quem namora, namora alguém. NÃO namora 'com' alguém. O verbo é transitivo direto. O 'com' indica companhia, não o par romântico.",
    },
    model: {
      error: "João namora com Maria.",
      correction: "João namora Maria.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Ela namora com meu primo.", placeholder: "Risque o 'com'..." },
      { id: 2, incorrectSentence: "Quer namorar comigo?", placeholder: "Quer me namorar?..." },
      { id: 3, incorrectSentence: "Pedro namora a vizinha.", placeholder: "Correto..." },
      { id: 4, incorrectSentence: "Eles namoram com frequência.", placeholder: "Correto (Modo)..." },
      { id: 5, incorrectSentence: "Ana namora com o Paulo.", placeholder: "namora o Paulo..." },
      { id: 6, incorrectSentence: "Ele quer namorar com ela.", placeholder: "namorar ela (a ela/la)..." },
      { id: 7, incorrectSentence: "Namoramos por dois anos.", placeholder: "Correto..." },
      { id: 8, incorrectSentence: "Você namora com quem?", placeholder: "namora quem?..." },
      { id: 9, incorrectSentence: "Romeu namorou Julieta.", placeholder: "Correto..." },
      { id: 10, incorrectSentence: "Namoro com livros.", placeholder: "Namoro livros..." },
    ],
    fixation: {
      description: "Escreva uma frase simples dizendo que 'Fulano namora Ciclana'. Regra: Não use a palavra 'com'."
    }
  },
  {
    id: "#55",
    topic: "Implicar (Consequência sem 'Em')",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: No sentido de 'causar' ou 'ter como consequência', o verbo Implicar NÃO pede preposição 'EM'. 'Isso implica mudança' (Certo). 'Isso implica em mudança' (Errado).",
    },
    model: {
      error: "A crise implica em desemprego.",
      correction: "A crise implica desemprego.",
    },
    exercises: [
      { id: 1, incorrectSentence: "A falta de estudo implica em reprovação.", placeholder: "implica reprovação..." },
      { id: 2, incorrectSentence: "O atraso implicou em multa.", placeholder: "implicou multa..." },
      { id: 3, incorrectSentence: "A reforma implica em gastos.", placeholder: "implica gastos..." },
      { id: 4, incorrectSentence: "O novo cargo implica em mais responsabilidade.", placeholder: "implica mais..." },
      { id: 5, incorrectSentence: "Sua atitude implica em demissão.", placeholder: "implica demissão..." },
      { id: 6, incorrectSentence: "Isso não implica em dizer que você errou.", placeholder: "implica dizer..." },
      { id: 7, incorrectSentence: "A decisão implica mudanças drásticas.", placeholder: "Correto..." },
      { id: 8, incorrectSentence: "Estudar implica em dedicação.", placeholder: "implica dedicação..." },
      { id: 9, incorrectSentence: "O silêncio implica em consentimento.", placeholder: "implica consentimento..." },
      { id: 10, incorrectSentence: "O progresso implica sacrifícios.", placeholder: "Correto..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre causa e consequência. Regra: Use 'O estudo implica...' (sem 'em')."
    }
  },
  {
    id: "#56",
    topic: "Regência Nominal I (Adjetivos Exigentes)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Alguns nomes (substantivos e adjetivos) exigem preposições específicas. Acessível A, Capaz DE, Compatível COM, Favorável A.",
    },
    model: {
      error: "O texto é acessível para todos.",
      correction: "O texto é acessível a todos.",
    },
    exercises: [
      { id: 1, incorrectSentence: "O fumo é prejudicial ___ saúde.", placeholder: "à..." },
      { id: 2, incorrectSentence: "Estamos aptos ___ trabalhar.", placeholder: "a..." },
      { id: 3, incorrectSentence: "Tenho medo ___ altura.", placeholder: "de..." },
      { id: 4, incorrectSentence: "Sou favorável ___ mudança.", placeholder: "à..." },
      { id: 5, incorrectSentence: "O horário é compatível ___ meu trabalho.", placeholder: "com..." },
      { id: 6, incorrectSentence: "Ele é capaz ___ fazer isso.", placeholder: "de..." },
      { id: 7, incorrectSentence: "Este filme é impróprio ___ menores.", placeholder: "para..." },
      { id: 8, incorrectSentence: "Tenho respeito ___ idosos.", placeholder: "aos / pelos..." },
      { id: 9, incorrectSentence: "Estou ansioso ___ resultado.", placeholder: "pelo..." },
      { id: 10, incorrectSentence: "Ele foi fiel ___ seus princípios.", placeholder: "a..." },
    ],
    fixation: {
      description: "Escreva uma frase sobre algo que faz mal à saúde. Regra: Use 'Prejudicial à...'"
    }
  },
  {
    id: "#57",
    topic: "Onde ou Aonde?",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: ONDE: Lugar fixo (Estar, Ficar). AONDE: Movimento (Ir, Chegar). Dica: Se você pode trocar por 'Para onde', use Aonde.",
    },
    model: {
      error: "Aonde você mora?",
      correction: "Onde você mora?",
    },
    exercises: [
      { id: 1, incorrectSentence: "___ você vai com tanta pressa?", placeholder: "Aonde..." },
      { id: 2, incorrectSentence: "___ está meu livro?", placeholder: "Onde..." },
      { id: 3, incorrectSentence: "Não sei ___ nós iremos parar.", placeholder: "aonde..." },
      { id: 4, incorrectSentence: "A casa ___ moro é azul.", placeholder: "onde..." },
      { id: 5, incorrectSentence: "O lugar ___ cheguei era lindo.", placeholder: "aonde..." },
      { id: 6, incorrectSentence: "___ você trabalha?", placeholder: "Onde..." },
      { id: 7, incorrectSentence: "___ ele quer chegar com isso?", placeholder: "Aonde..." },
      { id: 8, incorrectSentence: "Fique ___ você está.", placeholder: "onde..." },
      { id: 9, incorrectSentence: "Não sei ___ coloquei a chave.", placeholder: "onde..." },
      { id: 10, incorrectSentence: "___ o vento nos levar.", placeholder: "Aonde..." },
    ],
    fixation: {
      description: "Escreva uma pergunta para um amigo sobre o destino dele. Regra: Use 'Aonde'."
    }
  },
  {
    id: "#58",
    topic: "O 'Mesmo' (Regência Compartilhada)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: Não dê o mesmo complemento para verbos que pedem preposições diferentes. 'Entrei e saí de casa' (Errado). Entrei EM, Saí DE. Certo: 'Entrei em casa e saí dela'.",
    },
    model: {
      error: "Eu assisti e gostei do filme.",
      correction: "Eu assisti ao filme e gostei dele.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Entrei e saí do carro.", placeholder: "Errado (Entrei no, saí do)..." },
      { id: 2, incorrectSentence: "Li e gostei do livro.", placeholder: "Errado (Li o, gostei do)..." },
      { id: 3, incorrectSentence: "Obedeço e respeito meu pai.", placeholder: "Errado (Obedeço ao, respeito o)..." },
      { id: 4, incorrectSentence: "Vi e comprei a camisa.", placeholder: "Certo (Vi a, comprei a)..." },
      { id: 5, incorrectSentence: "Necessito e confio em você.", placeholder: "Errado (Necessito de)..." },
      { id: 6, incorrectSentence: "Amo e adoro chocolate.", placeholder: "Certo..." },
      { id: 7, incorrectSentence: "Cheguei e saí da escola.", placeholder: "Errado (Cheguei à, saí da)..." },
      { id: 8, incorrectSentence: "Entrou e saiu da sala.", placeholder: "Errado..." },
      { id: 9, incorrectSentence: "Concordo e discordo de você.", placeholder: "Certo (Concordo com, discordo de)..." },
      { id: 10, incorrectSentence: "Comprei e paguei o carro.", placeholder: "Certo (Paguei o - coisa)..." },
    ],
    fixation: {
      description: "Reescreva corretamente: 'Li e gostei do texto'."
    }
  },
  {
    id: "#59",
    topic: "Preposição Para vs. Por",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Regra: PARA: Objetivo, direção. POR: Causa, meio, troca. Na redação, cuidado com 'Pedir para fazer' vs 'Pedir por'.",
    },
    model: {
      error: "Lutar para a justiça.",
      correction: "Lutar pela (por a) justiça.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Estude ___ passar.", placeholder: "para..." },
      { id: 2, incorrectSentence: "Foi preso ___ roubo.", placeholder: "por..." },
      { id: 3, incorrectSentence: "Vou ___ casa.", placeholder: "para..." },
      { id: 4, incorrectSentence: "Fiz isso ___ você.", placeholder: "por..." },
      { id: 5, incorrectSentence: "O texto foi escrito ___ mim.", placeholder: "por..." },
      { id: 6, incorrectSentence: "Entregue o livro ___ ele.", placeholder: "para..." },
      { id: 7, incorrectSentence: "Trocamos o carro ___ uma moto.", placeholder: "por..." },
      { id: 8, incorrectSentence: "Viajamos ___ avião.", placeholder: "por..." },
      { id: 9, incorrectSentence: "Olhe ___ frente.", placeholder: "para..." },
      { id: 10, incorrectSentence: "Tenho apreço ___ ele.", placeholder: "por..." },
    ],
    fixation: {
      description: "Escreva uma frase explicando o motivo de você estudar. Regra: Use 'Por' (pela causa) ou 'Para' (pela finalidade)."
    }
  },
  {
    id: "#60",
    topic: "Teste Final Mês 2 (O Mix)",
    metaTime: "30 Minutos",
    theme: 'amber',
    theory: {
      title: "O Desbloqueio",
      content: "Este teste mistura tudo: verbos que pedem 'a', plural de 'fazer', crase obrigatória em 'visar'. É o teste de fogo.",
    },
    model: {
      error: "Fazem anos que assisto o jogo.",
      correction: "Faz anos que assisto ao jogo.",
    },
    exercises: [
      { id: 1, incorrectSentence: "Houveram problemas no projeto que visa o lucro.", placeholder: "Houve... visa ao..." },
      { id: 2, incorrectSentence: "Fazem dois meses que cheguei em casa.", placeholder: "Faz... a casa..." },
      { id: 3, incorrectSentence: "Prefiro mais doce do que salgado.", placeholder: "Prefiro doce a salgado..." },
      { id: 4, incorrectSentence: "Obedeça o regulamento e pague o funcionário.", placeholder: "Obedeça ao... ao funcionário..." },
      { id: 5, incorrectSentence: "Aluga-se casas no centro.", placeholder: "Alugam-se..." },
      { id: 6, incorrectSentence: "A maioria das pessoas foram na festa.", placeholder: "foram à festa..." },
      { id: 7, incorrectSentence: "Esqueceu-se a chave?", placeholder: "Esqueceu-se da..." },
      { id: 8, incorrectSentence: "Onde você vai?", placeholder: "Aonde..." },
      { id: 9, incorrectSentence: "Namoro com ela há anos.", placeholder: "Namoro ela (a ela)..." },
      { id: 10, incorrectSentence: "Segue anexo as cartas que implica em demissão.", placeholder: "Seguem anexas... implicam demissão..." },
    ],
    fixation: {
      description: "Escreva um parágrafo curto sobre 'Planos para o Futuro'. Regra Obrigatória: Use corretamente os verbos Visar (com preposição) e Aspirar (com preposição)."
    }
  }
];