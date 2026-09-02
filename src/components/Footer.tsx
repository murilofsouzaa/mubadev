import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 border-t border-border/60 max-w-4xl mx-auto select-none mt-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim">
        <div>
          <span>Murilo Freitas © {new Date().getFullYear()}</span>
          <span className="mx-2">•</span>
          <span>Belo Horizonte, MG</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-text hover:opacity-60 transition-opacity cursor-pointer"
        >
          <span>{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
