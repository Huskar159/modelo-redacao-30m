import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface Props {
  topic: string; 
  description?: string;
  theme?: 'teal' | 'indigo' | 'rose';
}

export const FixationBlock: React.FC<Props> = ({ topic, description, theme = 'teal' }) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'rose':
        return {
          iconColor: 'text-rose-700',
          focusBorder: 'focus:border-rose-400'
        };
      case 'indigo':
        return {
          iconColor: 'text-indigo-700',
          focusBorder: 'focus:border-indigo-400'
        };
      case 'teal':
      default:
        return {
          iconColor: 'text-primary-700',
          focusBorder: 'focus:border-primary-400'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <section className="h-[19%] mt-auto border-2 border-gray-100 rounded-xl p-3 bg-gray-50/30 flex flex-col">
      <div className="flex items-center gap-2 mb-2 text-gray-800 shrink-0">
        <BrainCircuit size={20} className={styles.iconColor} />
        <h3 className="font-bold text-sm uppercase tracking-wide">A Fixação</h3>
        <span className="text-xs text-gray-500 font-normal ml-auto bg-white px-2 py-0.5 rounded border border-gray-200">
          Desafio Final
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-2 leading-relaxed shrink-0">
        {description || (
          <>
            Escreva um parágrafo de 3 a 4 linhas sobre o tema <span className="font-bold text-gray-900 bg-gray-200 px-1 rounded mx-1">{topic}</span> aplicando obrigatoriamente a regra de hoje.
          </>
        )}
      </p>

      {/* Lined Paper Effect Area */}
      <textarea 
        className={`w-full flex-1 resize-none bg-white border border-gray-200 rounded-md lined-paper px-3 text-gray-800 text-sm outline-none ${styles.focusBorder} transition-colors min-h-[4rem]`}
        placeholder="Comece a escrever aqui..."
        spellCheck={false}
      ></textarea>
    </section>
  );
};