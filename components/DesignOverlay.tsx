import React from 'react';

// SVG Components for hand-drawn look
const HandArrowDown = ({ className }: { className?: string }) => (
  <svg className={className} width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 5 Q 20 30 20 50 M 20 50 L 10 40 M 20 50 L 30 40" />
  </svg>
);

const HandArrowUp = ({ className }: { className?: string }) => (
  <svg className={className} width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10 L 10 20 M 20 10 L 30 20 M 20 10 Q 20 30 10 55" />
  </svg>
);

const HandArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="60" height="30" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 15 Q 30 15 50 15 M 50 15 L 40 5 M 50 15 L 40 25" />
  </svg>
);

const HandArrowCurved = ({ className }: { className?: string }) => (
  <svg className={className} width="80" height="60" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 50 Q 10 20 70 10 M 70 10 L 60 0 M 70 10 L 60 20" />
  </svg>
);

const ScribbleCircle = ({ className, width = "100%", height = "100%" }: { className?: string, width?: string, height?: string }) => (
  <svg className={`absolute pointer-events-none ${className}`} width={width} height={height} viewBox="0 0 200 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
    <path d="M10,50 Q20,5 100,5 Q180,5 190,50 Q195,95 100,95 Q15,95 10,50 Q12,25 50,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="4,3" />
  </svg>
);

export const DesignOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden font-handwriting select-none">
      
      {/* 1. BLOCK 1: O Desbloqueio (Teoria) - MOVED TO RIGHT */}
      <div className="absolute top-[13%] right-[2%] md:right-[1%] z-10 w-[260px] md:w-[280px]">
         <div className="bg-[#fef9c3] p-4 rounded-lg shadow-xl border-2 border-yellow-400 transform rotate-2 relative">
           {/* Pin effect */}
           <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-red-400 border border-red-600 shadow-sm"></div>
           
           <p className="text-2xl font-bold text-gray-900 mb-2">⚡ Teoria Jato</p>
           <p className="text-xl text-gray-800 leading-snug">
             Aqui você entende a regra em segundos, sem precisar ler textos chatos e longos.
           </p>
         </div>
         {/* Arrow changed to HandArrowRight rotated 180 to point directly left towards the content */}
         <HandArrowRight className="absolute -left-16 top-12 rotate-180 text-marker scale-150" />
      </div>

      {/* 2. BLOCK 2: O Modelo (Erro vs Acerto) - MOVED DOWN */}
      <div className="absolute top-[37%] right-[2%] md:right-[3%] w-[260px] md:w-[280px] z-10">
         {/* Arrow Moved to TOP, pointing UP */}
         <HandArrowUp className="absolute -top-12 left-1/2 -translate-x-1/2 text-marker scale-150 rotate-[-10deg]" />

         <div className="bg-[#fef9c3] p-4 rounded-lg shadow-xl border-2 border-yellow-400 transform -rotate-1 relative">
            <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-red-400 border border-red-600 shadow-sm"></div>
            
            <p className="text-2xl font-bold text-gray-900 mb-2">👀 Comparação</p>
            <p className="text-xl text-gray-800 leading-snug">
                Veja a diferença clara entre o erro comum e o jeito certo (Nota 1000) para não confundir mais.
            </p>
         </div>
      </div>

      {/* 3. BLOCK 3: A Prática (Lista) - MOVED UP */}
      <div className="absolute top-[48%] -left-2 md:left-[1%] w-[260px] md:w-[280px] z-10">
         <div className="bg-[#fef9c3] p-4 rounded-lg shadow-xl border-2 border-yellow-400 transform -rotate-2 relative">
           <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-red-400 border border-red-600 shadow-sm"></div>

           <p className="text-2xl font-bold text-gray-900 mb-2">✍️ Treino Ativo</p>
           <p className="text-xl text-gray-800 leading-snug">
             Nada de marcar X! Aqui você reescreve as frases para destravar a escrita correta na sua cabeça.
           </p>
         </div>
         <HandArrowRight className="absolute -right-14 top-12 text-marker rotate-[-10deg] scale-150" />
      </div>
      
      {/* 4. BLOCK 4: Fixação (Footer) - UNCHANGED */}
      <div className="absolute bottom-[22%] right-[2%] md:right-[5%] w-[280px] md:w-[320px] z-10">
         <div className="bg-[#fef9c3] p-4 rounded-lg shadow-xl border-2 border-yellow-400 transform rotate-1 relative">
            <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-red-400 border border-red-600 shadow-sm"></div>

            <p className="text-2xl font-bold text-gray-900 mb-2">🚀 Prova Real</p>
            <p className="text-xl text-gray-800 leading-snug">
                O desafio final: escrever um parágrafo real sobre um tema atual aplicando a regra que aprendeu.
            </p>
         </div>
         <HandArrowDown className="absolute -bottom-14 right-16 text-marker rotate-[-10deg] scale-150" />
         
         {/* Circle target area */}
         <ScribbleCircle className="absolute -bottom-[160px] -left-[20px] w-[300px] h-[100px] text-marker opacity-60 rotate-2" />
      </div>

    </div>
  );
};