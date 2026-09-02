import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  const scrollTo = (id: string) => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo('#' + id, { duration: 1.5 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white select-none py-6 px-6 sm:px-12 lg:px-16 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left: Name / Brand as in reference */}
        <button
          type="button"
          onClick={scrollToTop}
          className="text-base sm:text-lg font-bold tracking-tight hover:opacity-75 transition-opacity cursor-pointer focus:outline-none"
        >
          Murilo Freitas<span className="opacity-60">.</span>
        </button>

        {/* Right: Minimal Nav Links + Resume Pill Button */}
        <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => scrollTo('projetos')}
            className="hover:opacity-70 transition-opacity cursor-pointer hidden sm:inline-block"
          >
            {language === 'pt' ? 'Projetos' : 'Work'}
          </button>

          <button
            type="button"
            onClick={() => scrollTo('sobre')}
            className="hover:opacity-70 transition-opacity cursor-pointer hidden sm:inline-block"
          >
            {language === 'pt' ? 'Sobre' : 'About'}
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contato')}
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            {language === 'pt' ? 'Contato' : 'Contact'}
          </button>

          {/* Resume Pill Button as in reference image */}
          <a
            href={t.hero.cvFilePath}
            download={t.hero.cvFileName}
            className="px-4 py-1.5 rounded-full border border-current hover:bg-white hover:text-black transition-all text-xs font-semibold"
          >
            {language === 'pt' ? 'Currículo' : 'Résumé'}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 font-mono text-[11px] opacity-80">
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`hover:opacity-100 ${language === 'pt' ? 'font-bold underline' : 'opacity-50'}`}
            >
              PT
            </button>
            <span className="opacity-40">/</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`hover:opacity-100 ${language === 'en' ? 'font-bold underline' : 'opacity-50'}`}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};
