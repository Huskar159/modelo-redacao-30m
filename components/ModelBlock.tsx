import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  errorExample: string;
  correctionExample: string;
}

export const ModelBlock: React.FC<Props> = ({ errorExample, correctionExample }) => {
  return (
    <section className="mb-6 h-[12%]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">👁️ O Modelo</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Error Column */}
        <div className="bg-red-50/50 border border-red-100 rounded-lg p-4 flex flex-col justify-center relative">
          <div className="flex items-center gap-2 mb-2 text-red-600">
            <XCircle size={18} strokeWidth={2.5} />
            <span className="font-bold text-sm uppercase">Errado</span>
          </div>
          <p className="text-gray-800 font-medium font-mono text-sm border-l-2 border-red-300 pl-3">
            {errorExample}
          </p>
        </div>

        {/* Correction Column */}
        <div className="bg-green-50/50 border border-green-100 rounded-lg p-4 flex flex-col justify-center relative">
          <div className="flex items-center gap-2 mb-2 text-green-700">
            <CheckCircle2 size={18} strokeWidth={2.5} />
            <span className="font-bold text-sm uppercase">Certo (Nota 1000)</span>
          </div>
          <p className="text-gray-900 font-bold font-mono text-sm border-l-2 border-green-500 pl-3">
            {correctionExample}
          </p>
        </div>
      </div>
    </section>
  );
};