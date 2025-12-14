import React from 'react';
import { LockOpen } from 'lucide-react';

interface Props {
  title: string;
  content: string;
}

export const TheoryBlock: React.FC<Props> = ({ title, content }) => {
  return (
    <section className="mb-4 h-[12%] flex flex-col justify-center">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 h-full flex flex-col justify-center shadow-sm relative overflow-hidden group">
        {/* Decorative background element */}
        <div className="absolute -right-4 -top-4 text-blue-100 opacity-50 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
          <LockOpen size={100} />
        </div>

        <div className="flex items-start gap-3 relative z-10">
          <div className="bg-blue-100 p-2 rounded-md text-blue-600 mt-1 shrink-0">
            <LockOpen size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-1 flex items-center gap-2">
              {title}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};