// src/components/Projects.tsx
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA } from '../data/projects'; 
import type { ProjectItem } from '../types/portfolio';

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
            onOpenDetails={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};