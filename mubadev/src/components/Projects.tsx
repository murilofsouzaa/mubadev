import React from 'react';
import { ProjectCard } from './ProjectCard';
import type { ProjectItem } from '../types/portfolio';

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '1',
    number: '01',
    title: 'Dashboard de Ranking',
    description: 'Pódio dinâmico com destaques visuais por posição, tema claro/escuro dedicado e componentes reutilizáveis em React.',
    tags: ['React', 'Tailwind'],
    repoUrl: '#',
    demoUrl: '#',
  },
  {
    id: '2',
    number: '02',
    title: 'Central de Chamados',
    description: 'Sistema de suporte com anexos via Supabase Storage, corrigindo falhas silenciosas de upload e duplicidade.',
    tags: ['React', 'Node.js', 'Supabase'],
    repoUrl: '#',
  },
  {
    id: '3',
    number: '03',
    title: 'Playbook de TI — AFFEMG',
    description: 'Documentação técnica estruturada para operação de TI, com padronização de seções e formatação consistente.',
    tags: ['Documentação', 'Processos'],
    detailsUrl: '#',
  },
  {
    id: '4',
    number: '04',
    title: 'Concorrência em Java',
    description: 'Trabalho prático de Sistemas Operacionais: Produtor-Consumidor, Barbeiro Dorminhoco e Leitores-Escritores.',
    tags: ['Java', 'Acadêmico'],
    repoUrl: '#',
  },
];

export const Projects: React.FC = React.memo(() => {
  return (
    <section id="projetos" className="py-12 sm:py-[70px]">
      <div className="mb-9">
        <span className="font-mono text-[12px] text-orange-2 mb-2.5 block">~/projetos</span>
        <h2 className="text-[30px] font-bold tracking-[-0.5px]">Projetos</h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';