import { TrainingSheetData } from './types';

export const SHEET_DATA: TrainingSheetData = {
  id: "#01",
  topic: "Uso da Vírgula em Enumerações e Sujeito",
  metaTime: "30 Minutos",
  theory: {
    title: "O Desbloqueio",
    content: "Não se separa sujeito do predicado com vírgula. A vírgula serve aqui apenas para isolar termos deslocados ou enumerações.",
  },
  model: {
    error: "O problema do Brasil, é a desigualdade.",
    correction: "O problema do Brasil é a desigualdade.",
  },
  exercises: [
    { id: 1, incorrectSentence: "O aluno dedicado, passou no vestibular.", placeholder: "Reescreva corrigindo a separação sujeito-verbo..." },
    { id: 2, incorrectSentence: "Fui ao mercado e comprei: banana maçã e uva.", placeholder: "Use vírgulas para enumerar os itens..." },
    { id: 3, incorrectSentence: "Os livros, os cadernos, e as canetas estavam na mesa.", placeholder: "Atenção ao último item da lista..." },
    { id: 4, incorrectSentence: "A maioria das pessoas, concordam com a decisão.", placeholder: "Corrija a separação do sujeito..." },
    { id: 5, incorrectSentence: "Estudamos matemática história e geografia.", placeholder: "Insira as vírgulas na enumeração..." },
    { id: 6, incorrectSentence: "Quem ama, cuida.", placeholder: "Sujeito oracional não deve ser separado..." },
    { id: 7, incorrectSentence: "O sol, a lua, e as estrelas brilham.", placeholder: "Verifique a pontuação da lista..." },
    { id: 8, incorrectSentence: "Correr, nadar, e pedalar são ótimos exercícios.", placeholder: "Ajuste a enumeração de verbos..." },
    { id: 9, incorrectSentence: "O Brasil país tropical, sofre com o calor.", placeholder: "Use vírgulas para isolar o aposto..." },
    { id: 10, incorrectSentence: "Ela disse que, chegaria tarde hoje.", placeholder: "Não separe o verbo de seu complemento..." },
  ],
  fixation: {
    topic: "Violência Urbana"
  }
};