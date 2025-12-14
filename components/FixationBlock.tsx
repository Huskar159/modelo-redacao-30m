import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface Props {
  topic: string; // Kept for backwards compatibility if needed, though we primarily use description now
  description?: string;
}

export const FixationBlock: React.FC<Props> = ({ topic, description }) => {
  return (
    <section className="h-[18%] mt-auto border-2 border-gray-100 rounded-xl p-4 bg-gray-50/30 flex flex-col">
      <div className="flex items-center gap-2 mb-3 text-gray-800">
        <BrainCircuit size={20} className="text-primary-700" />
        <h3 className="font-bold text-sm uppercase tracking-wide">A Fixação</h3>
        <span className="text-xs text-gray-500 font-normal ml-auto bg-white px-2 py-0.5 rounded border border-gray-200">
          Desafio Final
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-2 leading-relaxed">
        {description || (
          <>
            Escreva um parágrafo de 3 a 4 linhas sobre o tema <span className="font-bold text-gray-900 bg-gray-200 px-1 rounded mx-1">{topic}</span> aplicando obrigatoriamente a regra de hoje.
          </>
        )}
      </p>

      {/* Lined Paper Effect Area */}
      <textarea 
        className="w-full flex-1 resize-none bg-white border border-gray-200 rounded-md lined-paper px-3 text-gray-800 text-sm outline-none focus:border-primary-400 transition-colors"
        placeholder="Comece a escrever aqui..."
        spellCheck={false}
      ></textarea>
    </section>
  );
};