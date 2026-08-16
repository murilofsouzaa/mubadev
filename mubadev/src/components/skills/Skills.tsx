import React from 'react';
import { motion } from 'framer-motion';
import {SKILLS_DATA} from '../../data/skills'
import { SkillCard } from './SkillCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const Skills: React.FC = React.memo(() => {
  return (
    <section id="sobre" className="py-12 sm:py-[70px]">
      <div className="flex items-center gap-2 text-[12px] text-text-dim mb-3">
          <span className="text-orange-1 font-bold">root@fedora</span>
          <span className="text-text-faint">:</span>
          <span className="text-orange-3">~/technologies$</span>
          <span className="text-text font-semibold">ls -la --sort=expertise</span>
          <span className="inline-block w-1.5 h-3.5 bg-orange-1 animate-pulse ml-1" />
        </div>
      {/* Título Padronizado no Estilo Projetos */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-soft pb-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-orange-1 text-[26px] sm:text-[32px] font-bold">&gt;</span>
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight text-text font-mono uppercase">
            Tecnologias
          </h2>
        </div>
        <span className="text-[11px] font-mono text-text-faint border border-border px-2.5 py-1 rounded bg-panel">
          {SKILLS_DATA.reduce((acc, curr) => acc + curr.items.length, 0)} tecnologias
        </span>
      </div>

      {/* Grid de Cards Estilo Lista do Terminal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
      >
        {SKILLS_DATA.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
});

Skills.displayName = 'Skills';