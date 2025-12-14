import React, { useState } from 'react';
import { BookMarked, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_VOL_1, SOLUTIONS_VOL_2 } from '../solutionConstants';
import { SolutionSection } from '../types';

export const SolutionBooklet: React.FC = () => {
  const [activeVolume, setActiveVolume] = useState<1 | 2>(1);

  const currentSolutions = activeVolume === 1 ? SOLUTIONS_VOL_1 : SOLUTIONS_VOL_2;
  const volumeTitle = activeVolume === 1 ? "VOLUME 1" : "VOLUME 2";
  const volumeSubtitle = activeVolume === 1 
    ? "Mês 1: Domínio da Pontuação e Crase" 
    : "Mês 2: Concordância e Regência";

  return (
    <div className="a4-multipage flex flex-col font-sans">
      
      {/* Title Page / Header */}
      <header className="border-b-4 border-gray-900 pb-4 mb-6 text-center shrink-0">
        <div className="flex flex-col items-center gap-4 no-print">
            <div className="flex gap-2 mb-2 p-1 bg-gray-100 rounded-lg">
                <button 
                    onClick={() => setActiveVolume(1)}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                        activeVolume === 1 
                        ? 'bg-white shadow text-gray-900' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Volume 1
                </button>
                <button 
                    onClick={() => setActiveVolume(2)}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                        activeVolume === 2 
                        ? 'bg-white shadow text-gray-900' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Volume 2
                </button>
            </div>
        </div>

        <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-2 rounded-full mb-3 print:bg-gray-900 print:text-white mt-2">
          <BookMarked size={20} />
          <span className="font-bold tracking-widest uppercase text-sm">Gabarito Comentado</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">{volumeTitle}</h1>
        <p className="text-lg text-gray-600 font-medium">{volumeSubtitle}</p>
      </header>

      {/* Sections Loop */}
      <div className="flex-1 space-y-8 print:space-y-6">
        {currentSolutions.map((section: SolutionSection, sIndex) => {
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
          } else if (section.theme === 'amber') {
            themeColor = 'text-amber-700';
            borderColor = 'border-amber-200';
            bgColor = 'bg-amber-50';
            numberBg = 'bg-amber-600';
          }

          return (
            /* REMOVED break-inside-avoid-page from section to allow it to flow across pages */
            <section key={sIndex} className="mb-4">
              <h2 className={`text-xl font-bold ${themeColor} border-b-2 ${borderColor} pb-1 mb-4 flex items-center gap-2 print:text-lg print:mb-3`}>
                {section.title}
              </h2>

              <div className="grid grid-cols-1 gap-4 print:gap-3">
                {section.sheets.map((sheet, shIndex) => (
                  /* KEEP break-inside-avoid on the sheet to prevent splitting a single exercise box */
                  <div key={shIndex} className={`rounded-lg border ${borderColor} ${bgColor} p-3 print:p-2.5 break-inside-avoid shadow-sm print:shadow-none print:border`}>
                    
                    {/* Sheet Header */}
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-black/5">
                       <span className={`text-[10px] font-bold text-white px-1.5 py-0.5 rounded ${numberBg} print-color-adjust`}>{sheet.id}</span>
                       <h3 className="font-bold text-gray-900 text-sm leading-tight">{sheet.topic}</h3>
                    </div>

                    {/* Sheet Items */}
                    <div className="grid grid-cols-1 gap-y-1">
                      {sheet.items.map((item, iIndex) => (
                        <div key={iIndex} className="flex gap-2 text-[11px] leading-snug">
                           <span className="font-bold text-gray-400 w-4 shrink-0 text-right">{item.id}.</span>
                           <div className="flex-1">
                             <span className="font-bold text-gray-900">{item.correction}</span>
                             {item.explanation && (
                               <span className="text-gray-600 italic ml-1 print:text-gray-700 block sm:inline font-medium">— {item.explanation}</span>
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
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-400 text-[10px] font-medium uppercase tracking-wider print:mt-4">
        Redação 30M — Material Exclusivo para Alunos
      </div>
    </div>
  );
};