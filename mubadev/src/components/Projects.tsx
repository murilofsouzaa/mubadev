import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { ProjectItem } from '../types/portfolio';

// Certifique-se de que cada projeto possui todos os campos
const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '1',
    title: 'Sistema de Gestão',
    description: 'Aplicação full-stack desenvolvida para automação de processos.',
    fullDescription: 'Descrição detalhada do projeto aqui...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    tags: ['React', 'Node.js', 'TypeScript'],
    githubUrl: 'https://github.com/seu-usuario/projeto-1',
    deployUrl: 'https://meu-projeto.com',
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projetos" className="py-12 sm:py-[70px]">
      <div className="mb-9 font-mono">
        <div className="flex items-center gap-2 text-[12px] text-text-dim mb-2">
          <span className="text-orange-1 font-bold">root@fedora</span>
          <span className="text-text-faint">:</span>
          <span className="text-orange-3">~/projetos$</span>
          <span className="text-text font-semibold">ls -la</span>
        </div>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-text font-mono">
          Projetos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Renderização do Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};