export interface ExerciseItem {
  id: number;
  incorrectSentence: string;
  placeholder: string;
}

export interface TrainingSheetData {
  id: string;
  topic: string;
  metaTime: string; // e.g., "30 Minutos"
  theme?: 'teal' | 'indigo' | 'rose'; // 'teal' (Vol 1), 'indigo' (Vol 1 pt 2), 'rose' (Vol 1 Final)
  sectionInfo?: {
    title: string;
    subtitle: string;
  };
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
    description: string;
  };
}

// New Types for Solution Mode
export interface SolutionItem {
  id: number;
  correction: string;
  explanation: string;
}

export interface SolutionSheet {
  id: string;
  topic: string;
  items: SolutionItem[];
}

export interface SolutionSection {
  title: string;
  theme: 'teal' | 'indigo' | 'rose';
  sheets: SolutionSheet[];
}