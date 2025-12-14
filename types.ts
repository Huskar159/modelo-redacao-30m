export interface ExerciseItem {
  id: number;
  incorrectSentence: string;
  placeholder: string;
}

export interface TrainingSheetData {
  id: string;
  topic: string;
  metaTime: string; // e.g., "30 Minutos"
  theory: {
    title: string;
    content: string;
  };
  model: {
    error: string;
    correction: string;
  };
  exercises: ExerciseItem[];
  fixation: {
    topic: string;
  };
}