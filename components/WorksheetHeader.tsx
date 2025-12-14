import React from 'react';
import { Timer, BookOpen } from 'lucide-react';

interface Props {
  sheetId: string;
  topic: string;
  timeEstimate: string;
}

export const WorksheetHeader: React.FC<Props> = ({ sheetId, topic, timeEstimate }) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="bg-primary-700 text-white p-1.5 rounded-md">
          <BookOpen size={20} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-primary-800 font-bold text-lg leading-none tracking-tight">Redação 30M</span>
          <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Método Intensivo</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center flex-1 px-4">
        <h1 className="text-gray-900 font-bold text-lg">
          Ficha de Treino {sheetId}: <span className="font-medium text-gray-700">{topic}</span>
        </h1>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
        <Timer size={16} className="text-primary-700" />
        <span>Meta: {timeEstimate}</span>
      </div>
    </header>
  );
};