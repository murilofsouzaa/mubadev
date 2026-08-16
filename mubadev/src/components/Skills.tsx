import React from 'react';
import { SkillCard } from './SkillCard';
import type { SkillItem } from '../types/portfolio';

const SKILLS_DATA: SkillItem[] = [
  { 
    id: '1', 
    category: 'Frontend', 
    items: ['React', 'Tailwind CSS', 'TypeScript', 'JavaScript'], 
    icon: 'code' 
  },
  { 
    id: '2', 
    category: 'Backend', 
    items: ['Java', 'Spring Boot', 'Node.js', 'TypeScript'], 
    icon: 'server' 
  },
  { 
    id: '3', 
    category: 'Bancos de Dados', 
    items: ['PostgreSQL', 'MySQL', 'MongoDB'], 
    icon: 'database' 
  },
  { 
    id: '4', 
    category: 'DevOps & Infra', 
    items: ['Docker', 'Nginx', 'Linux', 'Git'], 
    icon: 'terminal' 
  },
];

export const Skills: React.FC = React.memo(() => {
  return (
    <section id="sobre" className="py-12 sm:py-[70px]">
      <div className="mb-9">
        <span className="font-mono text-[12px] text-orange-2 mb-2.5 block">~/sobre</span>
        <h2 className="text-[30px] font-bold tracking-[-0.5px]">Habilidades</h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-[14px]">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';