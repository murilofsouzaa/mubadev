import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/projects';
import type { ProjectItemExtended } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from '../components/projects/ProjectModal';
import { Play, ExternalLink, Github, Layers } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { t, resolveText } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItemExtended | null>(null);

  const edenProject = PROJECTS_DATA[0];

  return (
    <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
      
      {/* Page Header: Centered on Mobile, Left-aligned on Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2 sm:space-y-3 text-center sm:text-left"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-text tracking-tight">
          {t.projects.title}<span className="text-orange-1">.</span>
        </h1>
        <p className="text-sm sm:text-base text-text-dim max-w-2xl mx-auto sm:mx-0 leading-relaxed">
          {t.projects.subtitle}
        </p>
      </motion.div>

      {/* Flagship Project Card with Full Background Photo & Highly Legible Overlaid Content */}
      {edenProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="group relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 select-none flex flex-col justify-between border border-border"
          >
            {/* Full Background Photo */}
            <img
              src={edenProject.image}
              alt={edenProject.title}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90"
            />

            {/* Dark Gradient Overlay for 100% Crisp Visibility & Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/45 group-hover:via-black/65 transition-colors duration-300 pointer-events-none" />

            {/* Content Overlaid Directly on Top of Photo */}
            <div className="relative z-10 w-full h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 space-y-6">
              
              {/* Top Row: Status Badge & Direct Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Single Clean Status Badge */}
                <div className="flex items-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 font-mono font-bold text-xs flex items-center gap-2 border border-white/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.projects.onlineBadge}</span>
                  </span>
                </div>

                {/* Top Direct Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  {edenProject.deployUrl && (
                    <a
                      href={edenProject.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                    >
                      <span>{t.projects.visitSiteBtn}</span>
                      <ExternalLink className="w-4 h-4 text-white shrink-0" />
                    </a>
                  )}

                  {edenProject.githubUrl && (
                    <a
                      href={edenProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition-all border border-white/15 shadow-sm"
                    >
                      <Github className="w-4 h-4 text-white shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {edenProject.figmaUrl && (
                    <a
                      href={edenProject.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition-all border border-white/15 shadow-sm"
                    >
                      <Layers className="w-4 h-4 text-orange-1 shrink-0" />
                      <span>Figma</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Centered Floating Play Button (Opens Video & Documentation Modal) */}
              <div className="flex items-center justify-center w-full my-auto py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => setSelectedProject(edenProject)}
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-orange-1 hover:bg-orange-2 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-2xl hover:shadow-orange-glow transform hover:scale-105 transition-all"
                >
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  <span>{t.projects.viewDemoBtn}</span>
                </button>
              </div>

              {/* Bottom Information (High Contrast on Dark Backdrop) */}
              <div className="space-y-3 pt-2">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-orange-1 transition-colors">
                    {edenProject.title}
                  </h2>
                  <p className="text-xs sm:text-base text-gray-200 mt-2 max-w-2xl drop-shadow leading-relaxed">
                    {resolveText(edenProject.subtitle || edenProject.description)}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {edenProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md text-gray-100 border border-white/15 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      )}

      {/* Project Video/Architecture Details Modal (Untouched) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};
