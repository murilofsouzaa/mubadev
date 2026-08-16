import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onOpenDetails(project)}
      /* Adicionamos 'cursor-none' em vez de 'cursor-pointer' para não sobrepor o cursor customizado */
      className="bg-panel border border-border rounded-lg overflow-hidden font-mono flex flex-col justify-between transition-all duration-200 hover:border-orange-1 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,107,0,0.12)] group cursor-none"
    >
      {/* Topo do Terminal Card */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-panel-2 border-b border-border-soft text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-red-500/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-yellow-500/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-orange-3 group-hover:bg-green-500/80 transition-colors" />
        </div>
        <span className="text-text-faint text-[10px]">
          ./{project.title.toLowerCase().replace(/\s+/g, '_')}.app
        </span>
      </div>

      {/* Imagem do Projeto */}
      <div className="relative aspect-video w-full overflow-hidden bg-panel-2 border-b border-border-soft">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel/90 via-transparent to-transparent opacity-80" />

        {/* Badge Online */}
        {project.deployUrl && (
          <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md border border-green-500/50 text-green-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>ONLINE</span>
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[16px] font-bold text-text mb-2 flex items-center gap-2 group-hover:text-orange-1 transition-colors">
            <span className="text-orange-2">&gt;</span>
            {project.title}
          </h3>
          <p className="text-[12px] text-text-dim line-clamp-2 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-panel-2 border border-border text-text-faint px-2 py-0.5 rounded group-hover:border-orange-1/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botões do Card */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
              className="text-[11px] py-2 rounded bg-panel-2 border border-border text-text-dim font-bold transition-all duration-150 hover:border-orange-1 hover:text-orange-1 hover:bg-panel flex items-center justify-center gap-1 cursor-none"
            >
              <span>$ detalhes</span>
            </button>

            {project.deployUrl ? (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] py-2 rounded bg-orange-1 text-black font-bold transition-all duration-150 hover:bg-orange-2 flex items-center justify-center gap-1 shadow-sm cursor-none"
              >
                <span>./ver_site ↗</span>
              </a>
            ) : (
              <div className="text-[11px] py-2 rounded bg-panel-2 border border-border/40 text-text-faint text-center cursor-not-allowed">
                [OFFLINE]
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.displayName = 'ProjectCard';