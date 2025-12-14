import React from 'react';
import { BookMarked, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS } from '../solutionConstants';
import { SolutionSection } from '../types';

export const SolutionBooklet: React.FC = () => {
  return (
    <div className="w-full max-w-[210mm] bg-white shadow-2xl print:shadow-none p-8 md:p-12 print:p-8 flex flex-col min-h-screen">
      
      {/* Title Page / Header */}
      <header className="border-b-4 border-gray-900 pb-6 mb-8 text-center">
        <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-2 rounded-full mb-4">
          <BookMarked size={24} />
          <span className="font-bold tracking-widest uppercase">Gabarito Comentado</span>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">VOLUME 1</h1>
        <p className="text-xl text-gray-600 font-medium">Mês 1: Domínio da Pontuação e Crase</p>
      </header>

      {/* Sections Loop */}
      <div className="space-y-12">
        {SOLUTIONS.map((section: SolutionSection, sIndex) => {
          // Color logic
          let themeColor = 'text-teal-700';
          let borderColor = 'border-teal-200';
          let bgColor = 'bg-teal-50';
          let numberBg = 'bg-teal-600';
          
          if (section.theme === 'indigo') {
            themeColor = 'text-indigo-700';
            borderColor = 'border-indigo-200';
            bgColor = 'bg-indigo-50';
            numberBg = 'bg-indigo-600';
          } else if (section.theme === 'rose') {
            themeColor = 'text-rose-700';
            borderColor = 'border-rose-200';
            bgColor = 'bg-rose-50';
            numberBg = 'bg-rose-600';
          }

          return (
            <section key={sIndex} className="break-after-auto break-inside-avoid">
              <h2 className={`text-2xl font-bold ${themeColor} border-b-2 ${borderColor} pb-2 mb-6 flex items-center gap-2`}>
                {section.title}
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {section.sheets.map((sheet, shIndex) => (
                  <div key={shIndex} className={`rounded-xl border ${borderColor} ${bgColor} p-5 break-inside-avoid`}>
                    <div className="flex items-center gap-2 mb-4">
                       <span className={`text-xs font-bold text-white px-2 py-1 rounded ${numberBg}`}>{sheet.id}</span>
                       <h3 className="font-bold text-gray-900 text-lg">{sheet.topic}</h3>
                    </div>

                    <div className="space-y-2">
                      {sheet.items.map((item, iIndex) => (
                        <div key={iIndex} className="flex gap-3 text-sm border-b border-black/5 pb-2 last:border-0 last:pb-0">
                           <span className="font-bold text-gray-400 w-5 shrink-0 text-right">{item.id}.</span>
                           <div className="flex-1">
                             <span className="font-bold text-gray-900">{item.correction}</span>
                             {item.explanation && (
                               <span className="text-gray-600 italic ml-1.5">— {item.explanation}</span>
                             )}
                           </div>
                           <CheckCircle2 size={14} className="text-green-600 shrink-0 mt-0.5 opacity-50" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm font-medium">
        Redação 30M — Material Exclusivo para Alunos
      </div>
    </div>
  );
};