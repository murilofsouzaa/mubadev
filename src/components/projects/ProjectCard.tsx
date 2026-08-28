import React from 'react';
import type { ProjectItem } from '../../types/portfolio';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github, Play } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { resolveText, t } = useLanguage();

  return (
    <div className="group rounded-3xl bg-panel border border-border/80 hover:border-orange-1/60 shadow-clean-card hover:shadow-clean-hover overflow-hidden transition-all duration-300 flex flex-col justify-between">
      <div onClick={onClick} className="relative aspect-video overflow-hidden bg-black cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
      </div>

      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-text group-hover:text-orange-1 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-dim leading-relaxed line-clamp-3">
            {resolveText(project.description)}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-panel-sub border border-border text-text-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border/80">
          <button
            type="button"
            onClick={onClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-panel-sub hover:bg-panel border border-border hover:border-orange-1/50 text-text font-bold text-xs transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t.projects.viewDemoBtn}</span>
          </button>

          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-panel-sub hover:bg-panel border border-border flex items-center justify-center text-text-dim hover:text-text transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="w-9 h-9 rounded-xl bg-panel-sub hover:bg-panel border border-border flex items-center justify-center text-text-dim hover:text-text transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};