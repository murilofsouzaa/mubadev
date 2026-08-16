import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA } from '../data/projects'; 
import type { ProjectItem } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projetos" className="py-12 sm:py-[70px]">
      {/* Cabeçalho CLI / Terminal Refinado */}
      <div className="mb-10 font-mono">
        {/* Linha de Prompt */}
        <div className="flex items-center gap-2 text-[12px] text-text-dim mb-3">
          <span className="text-orange-1 font-bold">root@fedora</span>
          <span className="text-text-faint">:</span>
          <span className="text-orange-3">~/projetos$</span>
          <span className="text-text font-semibold">ls -la --sort=date</span>
          <span className="inline-block w-1.5 h-3.5 bg-orange-1 animate-pulse ml-1" />
        </div>

        {/* Bloco de Título com Borda e Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-soft pb-4">
          <div className="flex items-center gap-3">
            <span className="text-orange-1 text-[26px] sm:text-[32px] font-bold">&gt;</span>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight text-text font-mono uppercase">
              Meus projetos
            </h2>
          </div>

          {/* Status Bar / Metadata */}
          <div className="flex items-center gap-2 text-[11px] text-text-faint">
            <span className="bg-panel-2 border border-border px-2.5 py-1 rounded flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>{PROJECTS_DATA.length} APPS_LOADED</span>
            </span>
            <span className="hidden sm:inline-block bg-panel-2 border border-border px-2.5 py-1 rounded">
              PERM: drwxr-xr-x
            </span>
          </div>
        </div>

        {/* Subtítulo / Saída de Logs CLI */}
        <p className="mt-3 text-[13px] text-text-dim max-w-2xl leading-relaxed">
          <span className="text-orange-2 mr-1.5">//</span>
          Coleção de aplicações full-stack, sistemas web em produção. Clique em qualquer card para ver a demonstração em vídeo e detalhes de arquitetura.
        </p>
      </div>

      {/* Grid de Cards dos Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal de Detalhes */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};