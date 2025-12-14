import React from 'react';
import { Timer, BookOpen } from 'lucide-react';

interface Props {
  sheetId: string;
  topic: string;
  timeEstimate: string;
  theme?: 'teal' | 'indigo' | 'rose' | 'amber';
  sectionInfo?: {
    title: string;
    subtitle: string;
  };
}

export const WorksheetHeader: React.FC<Props> = ({ sheetId, topic, timeEstimate, theme = 'teal', sectionInfo }) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'amber':
        return {
          iconBg: 'bg-amber-600',
          brandColor: 'text-amber-800',
          iconColor: 'text-amber-700',
          sectionTitle: 'text-amber-700'
        };
      case 'rose':
        return {
          iconBg: 'bg-rose-700',
          brandColor: 'text-rose-800',
          iconColor: 'text-rose-700',
          sectionTitle: 'text-rose-600'
        };
      case 'indigo':
        return {
          iconBg: 'bg-indigo-700',
          brandColor: 'text-indigo-800',
          iconColor: 'text-indigo-700',
          sectionTitle: 'text-indigo-600'
        };
      case 'teal':
      default:
        return {
          iconBg: 'bg-primary-700',
          brandColor: 'text-primary-800',
          iconColor: 'text-primary-700',
          sectionTitle: 'text-primary-600'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className={`${styles.iconBg} text-white p-1.5 rounded-md`}>
          <BookOpen size={20} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className={`${styles.brandColor} font-bold text-lg leading-none tracking-tight`}>Redação 30M</span>
          <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Método Intensivo</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center flex-1 px-4 flex flex-col justify-center">
        {sectionInfo && (
          <div className="mb-1.5 pb-1 border-b border-gray-100">
             <span className={`block text-xs font-bold uppercase tracking-widest ${styles.sectionTitle}`}>{sectionInfo.title}</span>
             <span className="block text-[10px] text-gray-500 font-medium">{sectionInfo.subtitle}</span>
          </div>
        )}
        <h1 className="text-gray-900 font-bold text-lg leading-tight">
          Ficha de Treino {sheetId}: <span className="font-medium text-gray-700">{topic}</span>
        </h1>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
        <Timer size={16} className={styles.iconColor} />
        <span>Meta: {timeEstimate}</span>
      </div>
    </header>
  );
};