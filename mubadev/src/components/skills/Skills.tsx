import React from 'react';
import { SkillCard } from './SkillCard';
import type { SkillItem } from '../../types/portfolio';

const SKILLS_DATA: SkillItem[] = [
  { id: '1', category: 'Frontend', items: ['React', 'Tailwind', 'JavaScript'], icon: 'code' },
  { id: '2', category: 'Backend', items: ['Node.js', 'Express'], icon: 'server' },
  { id: '3', category: 'Dados', items: ['SQL Server', 'Supabase'], icon: 'database' },
  { id: '4', category: 'Linguagens', items: ['JavaScript', 'Java'], icon: 'terminal' },
  { id: '5', category: 'Infra & Docs', items: ['Sistemas', 'Playbooks TI'], icon: 'file-text' },
  { id: '6', category: 'Outros', items: ['Git', 'LaTeX (ABNT)'], icon: 'git' },
];

export const Skills: React.FC = React.memo(() => {
  return (
    <section id="sobre" className="py-12 sm:py-[70px]">
      {/* Título Principal Estilo CLI/Terminal */}
      <div className="mb-9 font-mono">
        <div className="flex items-center gap-2 text-[12px] text-text-dim mb-2">
          <span className="text-orange-1 font-bold">root@fedora</span>
          <span className="text-text-faint">:</span>
          <span className="text-orange-3">~/sobre$</span>
          <span className="text-text font-semibold">cat ~/.skills</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-orange-1 text-[24px] sm:text-[30px] font-bold">&gt;</span>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.5px] text-text font-mono">
            Habilidades
          </h2>
          <span className="text-[11px] text-text-faint border border-border px-2 py-0.5 rounded bg-panel">
            {SKILLS_DATA.length} módulos
          </span>
        </div>
      </div>

      {/* Grid de Mini Terminais */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-4">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';