export interface ExerciseItem {
  id: number;
  incorrectSentence: string;
  placeholder: string;
}

export interface TrainingSheetData {
  id: string;
  topic: string;
  metaTime: string; // e.g., "30 Minutos"
  theme?: 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald'; // Added 'emerald' for Month 4
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
  theme: 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald';
  sheets: SolutionSheet[];
}