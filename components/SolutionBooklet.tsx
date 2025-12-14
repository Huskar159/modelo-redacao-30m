import React from 'react';
import { BookMarked, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS } from '../solutionConstants';
import { SolutionSection } from '../types';

export const SolutionBooklet: React.FC = () => {
  return (
    <div className="a4-multipage flex flex-col">
      
      {/* Title Page / Header */}
      <header className="border-b-4 border-gray-900 pb-6 mb-8 text-center shrink-0">
        <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-2 rounded-full mb-4 print:bg-gray-900 print:text-white">
          <BookMarked size={24} />
          <span className="font-bold tracking-widest uppercase">Gabarito Comentado</span>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">VOLUME 1</h1>
        <p className="text-xl text-gray-600 font-medium">Mês 1: Domínio da Pontuação e Crase</p>
      </header>

      {/* Sections Loop */}
      <div className="flex-1 space-y-10">
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
            <section key={sIndex} className="break-inside-avoid-page">
              <h2 className={`text-2xl font-bold ${themeColor} border-b-2 ${borderColor} pb-2 mb-6 flex items-center gap-2 print:text-xl`}>
                {section.title}
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {section.sheets.map((sheet, shIndex) => (
                  <div key={shIndex} className={`rounded-xl border ${borderColor} ${bgColor} p-4 print:p-3 break-inside-avoid shadow-sm print:shadow-none`}>
                    
                    {/* Sheet Header */}
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/5">
                       <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${numberBg} print-color-adjust`}>{sheet.id}</span>
                       <h3 className="font-bold text-gray-900 text-base leading-tight">{sheet.topic}</h3>
                    </div>

                    {/* Sheet Items */}
                    <div className="grid grid-cols-1 gap-y-1.5">
                      {sheet.items.map((item, iIndex) => (
                        <div key={iIndex} className="flex gap-2 text-[13px] leading-snug">
                           <span className="font-bold text-gray-400 w-4 shrink-0 text-right">{item.id}.</span>
                           <div className="flex-1">
                             <span className="font-bold text-gray-900">{item.correction}</span>
                             {item.explanation && (
                               <span className="text-gray-600 italic ml-1 print:text-gray-700 block sm:inline">— {item.explanation}</span>
                             )}
                           </div>
                           <CheckCircle2 size={12} className="text-green-600 shrink-0 mt-0.5 opacity-50 hidden sm:block print:hidden" />
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
      <div className="mt-auto pt-8 border-t border-gray-200 text-center text-gray-400 text-xs font-medium uppercase tracking-wider print:mt-8">
        Redação 30M — Material Exclusivo para Alunos
      </div>
    </div>
  );
};