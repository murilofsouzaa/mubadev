import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [isOverDark, setIsOverDark] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // Smart sticky visibility on mobile:
      // Always visible at the top (<= 40px)
      // When scrolling down past top: hide
      // When scrolling up: show
      if (currentScrollY <= 40) {
        setShowMobileHeader(true);
      } else if (diff > 5) {
        setShowMobileHeader(false);
      } else if (diff < -5) {
        setShowMobileHeader(true);
      }

      // Check if header is over the dark section
      const darkSection = document.getElementById('depois-do-trabalho');
      if (darkSection) {
        const rect = darkSection.getBoundingClientRect();
        setIsOverDark(rect.top <= 40);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Desktop Static Header (Top of the page, not fixed) */}
      <header className="hidden sm:block absolute top-0 left-0 right-0 z-30 text-text select-none py-6 sm:py-8 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Left: Name / Brand */}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-base sm:text-lg font-bold tracking-tight hover:opacity-75 transition-opacity cursor-pointer focus:outline-none"
          >
            Murilo Freitas<span className="opacity-60">.</span>
          </button>

          {/* Right: Minimal Nav Links (Depois do trabalho, Contato + Idioma) */}
          <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => scrollTo('depois-do-trabalho')}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              {language === 'pt' ? 'Depois do trabalho' : 'After Work'}
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contato')}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              {language === 'pt' ? 'Contato' : 'Contact'}
            </button>

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

      {/* Mobile Header: Occupies entire width with transparent glass effect, animated on scroll up */}
      <AnimatePresence>
        {showMobileHeader && (
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={`sm:hidden fixed top-0 left-0 right-0 z-50 w-full px-6 py-3.5 flex items-center justify-between backdrop-blur-md border-b transition-colors duration-300 ${
              isOverDark
                ? 'bg-black/75 border-white/10 text-white'
                : 'bg-[#F5F2EB]/75 border-black/[0.08] text-black'
            }`}
          >
            {/* Left: Name */}
            <button
              type="button"
              onClick={scrollToTop}
              className="text-base font-bold tracking-tight focus:outline-none"
            >
              Murilo Freitas<span className="opacity-60">.</span>
            </button>

            {/* Right: Language Switcher in place of Resume Button */}
            <div className="flex items-center gap-1 font-mono text-xs opacity-90">
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`hover:opacity-100 px-1 py-0.5 ${
                  language === 'pt' ? 'font-bold underline underline-offset-2' : 'opacity-50'
                }`}
              >
                PT
              </button>
              <span className="opacity-40">/</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`hover:opacity-100 px-1 py-0.5 ${
                  language === 'en' ? 'font-bold underline underline-offset-2' : 'opacity-50'
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
