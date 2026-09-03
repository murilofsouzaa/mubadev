import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToProjects = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo('#projetos', { duration: 1.5 });
    } else {
      const el = document.getElementById('projetos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-44 pb-20 sm:pb-32 max-w-4xl mx-auto text-center select-none flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 sm:space-y-8 flex flex-col items-center max-w-3xl"
      >
        {/* Top Centered Status Pill */}
        <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-text-dim">
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>
            {language === 'pt' ? 'ENGENHEIRO DE SOFTWARE' : 'SOFTWARE ENGINEER'}
          </span>
        </div>

        {/* Large Centered Headline (Inverted Bold: base normal + accent bold italic in red) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-text leading-[1.14]">
          {language === 'pt' ? (
            <>
              Tirando sistemas complexos do{' '}
              <span className="font-serif-italic font-bold text-red-600">papel.</span>
            </>
          ) : (
            <>
              Building systems that move{' '}
              <span className="font-serif-italic font-bold text-red-600">forward.</span>
            </>
          )}
        </h1>

        {/* Centered Subtitle Intro */}
        <p className="text-base sm:text-xl text-text-dim leading-relaxed max-w-2xl font-normal">
          {language === 'pt'
            ? 'Olá, sou o Murilo. Desenvolvimento de sistemas web completos, plataformas de alta performance e produtos digitais com arquitetura sólida e escalável.'
            : "Hi, I'm Murilo. Full-stack software engineer building high-performance web platforms, resilient architectures, and tailored digital products."}
        </p>

        {/* Social Links Centered */}
        <div className="flex items-center justify-center gap-5 pt-2 text-text-dim text-xs font-sans font-medium tracking-wide">
          <a
            href="https://github.com/murilofsouzaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-text transition-colors inline-flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/murilofsouzaa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-text transition-colors inline-flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="pt-10 sm:pt-14 flex flex-col items-center">
          <button
            type="button"
            onClick={scrollToProjects}
            aria-label="Rolar para projetos"
            className="group flex flex-col items-center gap-1.5 text-text-dim hover:text-text transition-colors cursor-pointer focus:outline-none"
          >
            {/* Bouncing down arrow */}
            <div className="animate-bounce flex flex-col items-center">
              <ChevronDown className="w-4 h-4 text-current" />
            </div>

            <span className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {language === 'pt' ? 'Role para explorar' : 'Scroll to explore'}
            </span>
          </button>
        </div>

      </motion.div>
    </section>
  );
};
