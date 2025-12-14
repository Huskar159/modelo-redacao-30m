import React, { useState } from 'react';
import { Printer, PenTool, BookOpenCheck, ArrowLeft } from 'lucide-react';
import { WorksheetHeader } from './components/WorksheetHeader';
import { TheoryBlock } from './components/TheoryBlock';
import { ModelBlock } from './components/ModelBlock';
import { PracticeBlock } from './components/PracticeBlock';
import { FixationBlock } from './components/FixationBlock';
import { DesignOverlay } from './components/DesignOverlay';
import { SolutionBooklet } from './components/SolutionBooklet'; // Import new component
import { SHEETS } from './constants';

const App: React.FC = () => {
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [mode, setMode] = useState<'worksheets' | 'solutions'>('worksheets'); // New State

  const handlePrint = () => {
    // Force focus to window to ensure print dialog triggers correctly
    window.focus();
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-8 gap-8 px-4 print:block print:bg-white print:p-0 print:gap-0">
      
      {/* Controls Container (Hidden in Print) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-[9999] no-print items-end">
        
        {/* Toggle Mode Button */}
        <button 
          type="button"
          onClick={() => setMode(mode === 'worksheets' ? 'solutions' : 'worksheets')}
          className={`p-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium w-full md:w-auto ${
            mode === 'solutions' 
              ? 'bg-gray-900 text-white' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {mode === 'worksheets' ? (
            <>
              <BookOpenCheck size={20} />
              <span className="hidden md:inline">Ver Gabarito</span>
            </>
          ) : (
             <>
              <ArrowLeft size={20} />
              <span className="hidden md:inline">Voltar aos Treinos</span>
            </>
          )}
        </button>

        {/* Toggle Annotations Button (Only visible in Worksheet mode) */}
        {mode === 'worksheets' && (
          <button 
            type="button"
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`p-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium w-full md:w-auto ${
              showAnnotations 
                ? 'bg-white text-marker border-2 border-marker' 
                : 'bg-gray-800 text-white'
            }`}
            title="Alternar notas de design"
          >
            <PenTool size={20} />
            <span className="hidden md:inline">{showAnnotations ? 'Ocultar Notas' : 'Ver Notas de Design'}</span>
          </button>
        )}

        {/* Print Button */}
        <button 
          type="button"
          onClick={handlePrint}
          className="bg-primary-700 text-white p-4 rounded-full shadow-lg hover:bg-primary-800 transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium cursor-pointer w-full md:w-auto"
        >
          <Printer size={24} />
          <span className="hidden md:inline">
            {mode === 'worksheets' ? 'Imprimir PDF Completo' : 'Imprimir Gabarito'}
          </span>
        </button>
      </div>

      {/* RENDER LOGIC */}
      {mode === 'solutions' ? (
        // --- SOLUTION MODE ---
        <SolutionBooklet />
      ) : (
        // --- WORKSHEET MODE (Existing) ---
        SHEETS.map((sheet) => (
          <React.Fragment key={sheet.id}>
            <main 
              className="a4-container w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none print:w-[210mm] print:h-[297mm] print:m-0 print:rounded-none p-[12mm] md:p-[15mm] print:p-[15mm] flex flex-col relative rounded-sm overflow-hidden break-after-page"
            >
              
              {/* Design Annotations Overlay */}
              {showAnnotations && <DesignOverlay />}

              {/* 1. Header */}
              <WorksheetHeader 
                sheetId={sheet.id}
                topic={sheet.topic}
                timeEstimate={sheet.metaTime}
                theme={sheet.theme}
                sectionInfo={sheet.sectionInfo}
              />

              {/* 2. Block 1: Theory */}
              <TheoryBlock 
                title={sheet.theory.title}
                content={sheet.theory.content}
                theme={sheet.theme}
              />

              {/* 3. Block 2: Model */}
              <ModelBlock 
                errorExample={sheet.model.error}
                correctionExample={sheet.model.correction}
              />

              {/* 4. Block 3: Practice (Main Area) */}
              <PracticeBlock 
                exercises={sheet.exercises}
                theme={sheet.theme}
              />

              {/* 5. Block 4: Fixation (Footer) */}
              <FixationBlock 
                topic="" // No longer used directly as title
                description={sheet.fixation.description}
                theme={sheet.theme}
              />

              {/* Footer Brand Watermark */}
              <div className="absolute bottom-4 right-6 opacity-10 pointer-events-none select-none">
                <span className="font-black text-4xl text-gray-900 tracking-tighter">R30M</span>
              </div>
            </main>
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default App;