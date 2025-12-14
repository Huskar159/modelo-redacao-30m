import React, { useState } from 'react';
import { PencilLine, Check } from 'lucide-react';
import { ExerciseItem } from '../types';

interface Props {
  exercises: ExerciseItem[];
  theme?: 'teal' | 'indigo' | 'rose' | 'amber';
}

export const PracticeBlock: React.FC<Props> = ({ exercises, theme = 'teal' }) => {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleComplete = (id: number) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'amber':
        return {
          iconBg: 'bg-amber-50',
          iconColor: 'text-amber-700',
          checkActive: 'bg-amber-600 border-amber-600',
          checkHover: 'hover:border-amber-400',
          focusBorder: 'focus:border-amber-600',
          inputText: 'text-amber-900'
        };
      case 'rose':
        return {
          iconBg: 'bg-rose-50',
          iconColor: 'text-rose-700',
          checkActive: 'bg-rose-600 border-rose-600',
          checkHover: 'hover:border-rose-400',
          focusBorder: 'focus:border-rose-600',
          inputText: 'text-rose-800'
        };
      case 'indigo':
        return {
          iconBg: 'bg-indigo-50',
          iconColor: 'text-indigo-700',
          checkActive: 'bg-indigo-600 border-indigo-600',
          checkHover: 'hover:border-indigo-400',
          focusBorder: 'focus:border-indigo-600',
          inputText: 'text-indigo-800'
        };
      case 'teal':
      default:
        return {
          iconBg: 'bg-primary-50',
          iconColor: 'text-primary-700',
          checkActive: 'bg-primary-600 border-primary-600',
          checkHover: 'hover:border-primary-400',
          focusBorder: 'focus:border-primary-600',
          inputText: 'text-primary-800'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <section className="mb-4 flex-1 flex flex-col min-h-0">
      <div className="flex items-center gap-2 mb-3 shrink-0">
        <div className={`${styles.iconBg} p-1.5 rounded ${styles.iconColor}`}>
            <PencilLine size={18} />
        </div>
        <h3 className="font-bold text-gray-800">Prática Ativa: Identifique e corrija os erros</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 auto-rows-min flex-1">
        {exercises.map((exercise) => {
          const isDone = completed.includes(exercise.id);
          return (
            <div key={exercise.id} className="group relative">
              <div className="flex gap-3">
                {/* Checkbox */}
                <button
                  onClick={() => toggleComplete(exercise.id)}
                  className={`mt-1 w-5 h-5 shrink-0 rounded border transition-colors flex items-center justify-center ${
                    isDone 
                      ? `${styles.checkActive} text-white` 
                      : `border-gray-300 text-transparent ${styles.checkHover}`
                  }`}
                  aria-label={`Mark question ${exercise.id} as done`}
                >
                  <Check size={14} strokeWidth={3} />
                </button>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex gap-2">
                    <span className="text-xs font-bold text-gray-400 pt-0.5">{String(exercise.id).padStart(2, '0')}</span>
                    <p className={`text-sm text-gray-800 font-medium ${isDone ? 'line-through opacity-50' : ''}`}>
                      {exercise.incorrectSentence}
                    </p>
                  </div>
                  
                  {/* Interactive Input */}
                  <div className="relative">
                    <input 
                      type="text" 
                      className={`w-full bg-transparent border-b-2 border-dotted border-gray-300 ${styles.focusBorder} outline-none text-sm py-1 ${styles.inputText} placeholder-gray-400 transition-colors font-mono`}
                      placeholder={exercise.placeholder}
                      disabled={isDone}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};