import React from 'react';
import { LockOpen } from 'lucide-react';

interface Props {
  title: string;
  content: string;
  theme?: 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald';
}

export const TheoryBlock: React.FC<Props> = ({ title, content, theme = 'teal' }) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'emerald':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-100',
          iconWrapperBg: 'bg-emerald-100',
          icon: 'text-emerald-600',
          title: 'text-emerald-900',
          decor: 'text-emerald-200'
        };
      case 'amber':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-100',
          iconWrapperBg: 'bg-amber-100',
          icon: 'text-amber-600',
          title: 'text-amber-900',
          decor: 'text-amber-200'
        };
      case 'rose':
        return {
          bg: 'bg-rose-50',
          border: 'border-rose-100',
          iconWrapperBg: 'bg-rose-100',
          icon: 'text-rose-600',
          title: 'text-rose-900',
          decor: 'text-rose-100'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-50',
          border: 'border-indigo-100',
          iconWrapperBg: 'bg-indigo-100',
          icon: 'text-indigo-600',
          title: 'text-indigo-900',
          decor: 'text-indigo-100'
        };
      case 'teal':
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-100',
          iconWrapperBg: 'bg-blue-100',
          icon: 'text-blue-600',
          title: 'text-blue-900',
          decor: 'text-blue-100'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <section className="mb-4 h-[10%] flex flex-col justify-center">
      <div className={`${styles.bg} ${styles.border} border rounded-lg p-4 h-full flex flex-col justify-center shadow-sm relative overflow-hidden group`}>
        {/* Decorative background element */}
        <div className={`absolute -right-4 -top-4 ${styles.decor} opacity-50 transform rotate-12 group-hover:scale-110 transition-transform duration-500`}>
          <LockOpen size={100} />
        </div>

        <div className="flex items-start gap-3 relative z-10">
          <div className={`${styles.iconWrapperBg} p-2 rounded-md ${styles.icon} mt-1 shrink-0`}>
            <LockOpen size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className={`${styles.title} font-bold text-sm uppercase tracking-wider mb-1 flex items-center gap-2`}>
              {title}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium line-clamp-3">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};