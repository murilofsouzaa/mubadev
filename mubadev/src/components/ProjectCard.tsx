import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="bg-panel border border-border rounded-[10px] overflow-hidden transition-all duration-250 hover:border-orange-3 hover:-translate-y-1 hover:shadow-card-hover flex flex-col"
    >
      <div className="h-[190px] bg-[repeating-linear-gradient(135deg,var(--img-a),var(--img-a)_10px,var(--img-b)_10px,var(--img-b)_20px)] relative flex items-center justify-center border-b border-border-soft">
        <span className="font-mono text-[11px] text-orange-3 bg-[color-mix(in_srgb,var(--bg)_55%,transparent)] border border-dashed border-orange-4 px-3 py-1.5 rounded">
          imagem do projeto
        </span>
      </div>

      <div className="p-5 sm:p-[22px] flex flex-col flex-1">
        <div className="text-[17px] font-bold mb-2 flex items-center justify-between">
          <span>{project.title}</span>
          <span className="font-mono text-[12px] text-text-faint font-normal">{project.number}</span>
        </div>

        <p className="text-[13.5px] text-text-dim leading-[1.6] mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10.5px] py-1 px-5 border border-border rounded-[20px] text-orange-2">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-[18px] font-mono text-[12.5px]">
          {project.repoUrl && (
            <a href={project.repoUrl} className="text-orange-1 hover:border-b hover:border-orange-1 transition-all">
              repositório →
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} className="text-orange-1 hover:border-b hover:border-orange-1 transition-all">
              demo →
            </a>
          )}
          {project.detailsUrl && (
            <a href={project.detailsUrl} className="text-orange-1 hover:border-b hover:border-orange-1 transition-all">
              ver detalhes →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';