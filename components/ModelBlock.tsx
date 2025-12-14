import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  errorExample: string;
  correctionExample: string;
}

export const ModelBlock: React.FC<Props> = ({ errorExample, correctionExample }) => {
  return (
    <section className="mb-4 h-[10%]">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">👁️ O Modelo</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 h-full pb-1">
        {/* Error Column */}
        <div className="bg-red-50/50 border border-red-100 rounded-lg p-3 flex flex-col justify-center relative">
          <div className="flex items-center gap-2 mb-1 text-red-600">
            <XCircle size={16} strokeWidth={2.5} />
            <span className="font-bold text-xs uppercase">Errado</span>
          </div>
          <p className="text-gray-800 font-medium font-mono text-xs md:text-sm border-l-2 border-red-300 pl-3 leading-snug">
            {errorExample}
          </p>
        </div>

        {/* Correction Column */}
        <div className="bg-green-50/50 border border-green-100 rounded-lg p-3 flex flex-col justify-center relative">
          <div className="flex items-center gap-2 mb-1 text-green-700">
            <CheckCircle2 size={16} strokeWidth={2.5} />
            <span className="font-bold text-xs uppercase">Certo (Nota 1000)</span>
          </div>
          <p className="text-gray-900 font-bold font-mono text-xs md:text-sm border-l-2 border-green-500 pl-3 leading-snug">
            {correctionExample}
          </p>
        </div>
      </div>
    </section>
  );
};