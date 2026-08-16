import React from 'react';
import { motion } from 'framer-motion';
import { TerminalCard } from './TerminalCard';

export const Hero: React.FC = React.memo(() => {
  return (
    <section id="inicio" className="py-[60px] md:py-[90px] grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-10 md:gap-[56px] items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 font-mono text-[12px] text-orange-1 border border-border bg-panel-2 px-3 py-1.5 rounded-[20px] mb-[26px]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-2 shadow-[0_0_8px_var(--orange-glow)] animate-dot-pulse" />
          bem-vindo(a) ao meu portfólio
        </div>

        <h1 className="text-[38px] sm:text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-[-1.5px] mb-5">
          <span className="text-text-dim font-medium text-[0.5em] block mb-1.5">Olá, eu sou</span>
          <span className="text-orange-1">Murilo</span>
        </h1>

        <p className="text-[17px] text-text-dim max-w-[520px] mb-[34px] leading-[1.65]">
          Sou <strong className="text-text font-semibold">desenvolvedor full-stack</strong>, estudante de Engenharia de Software na PUC Minas.
          Gosto de resolver o problemas das pessoas através de softwares.
        </p>

        <p className="text-[17px] text-text-dim max-w-[520px] mb-[34px] leading-[1.65]">Fique à vontade para explorar meus projetos e conhecer um pouco mais do meu trabalho.</p>

        <div className="flex gap-3.5 flex-wrap">
          <a
            href="#projetos"
            className="font-mono text-[13px] px-5 py-[13px] rounded bg-orange-2 text-[#0a0a0a] font-semibold border border-orange-2 inline-flex items-center gap-2 transition-all duration-200 hover:bg-orange-1 hover:border-orange-1 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-2"
          >
            Ver projetos →
          </a>
          <a
            href="#contato"
            className="font-mono text-[13px] px-5 py-[13px] rounded border border-border text-text inline-flex items-center gap-2 transition-all duration-200 hover:border-orange-3 hover:text-orange-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-2"
          >
            Entrar em contato
          </a>
        </div>
      </motion.div>

      <div className="flex justify-start md:justify-end">
        <TerminalCard />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';