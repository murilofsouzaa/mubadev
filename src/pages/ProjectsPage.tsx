import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/projects';
import type { ProjectItemExtended } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from '../components/projects/ProjectModal';
import { Play, ExternalLink, Github, Layers, Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { t, resolveText, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItemExtended | null>(null);

  // The single featured project (marked with featured: true, or the first item)
  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  // Remaining projects displayed in rows of 2 by 2
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== featuredProject?.id);

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

      {/* Featured Project Showcase (Somente um em Destaque) */}
      {featuredProject && (
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
              src={featuredProject.image}
              alt={featuredProject.title}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90"
            />

            {/* Dark Gradient Overlay for 100% Crisp Visibility & Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/45 group-hover:via-black/65 transition-colors duration-300 pointer-events-none" />

            {/* Content Overlaid Directly on Top of Photo */}
            <div className="relative z-10 w-full h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 space-y-6">
              
              {/* Top Row: Destaque Badge, Status Badge & Direct Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-orange-1/20 border border-orange-1/40 text-orange-1 font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-orange-1" />
                    <span>{language === 'pt' ? 'DESTAQUE' : 'FEATURED'}</span>
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 font-mono font-bold text-xs flex items-center gap-2 border border-white/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.projects.onlineBadge}</span>
                  </span>
                </div>

                {/* Top Direct Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  {featuredProject.deployUrl && (
                    <a
                      href={featuredProject.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                    >
                      <span>{t.projects.visitSiteBtn}</span>
                      <ExternalLink className="w-4 h-4 text-white shrink-0" />
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition-all border border-white/15 shadow-sm"
                    >
                      <Github className="w-4 h-4 text-white shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {featuredProject.figmaUrl && (
                    <a
                      href={featuredProject.figmaUrl}
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

              {/* Centered Floating Play/Details Button (Opens Video & Documentation Modal) */}
              <div className="flex items-center justify-center w-full my-auto py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-orange-1 hover:bg-orange-2 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-2xl hover:shadow-orange-glow transform hover:scale-105 transition-all"
                >
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  <span>
                    {language === 'pt' ? 'Ver Detalhes do Projeto' : 'View Project Details'}
                  </span>
                </button>
              </div>

              {/* Bottom Information (High Contrast on Dark Backdrop) */}
              <div className="space-y-3 pt-2">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-orange-1 transition-colors">
                    {featuredProject.title}
                  </h2>
                  <p className="text-xs sm:text-base text-gray-200 mt-2 max-w-2xl drop-shadow leading-relaxed">
                    {resolveText(featuredProject.subtitle || featuredProject.description)}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {featuredProject.tags.map((tag) => (
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

      {/* Other Projects: Fileira de 2 em 2 */}
      {otherProjects.length > 0 && (
        <div className="space-y-6 pt-6 sm:pt-8 border-t border-border/70">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-text tracking-tight flex items-center gap-2.5">
              <span>{language === 'pt' ? 'Outros Projetos' : 'Other Projects'}</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-panel-sub border border-border text-text-dim">
                {otherProjects.length}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="group relative rounded-3xl bg-panel border border-border hover:border-orange-1/50 shadow-clean-card hover:shadow-clean-hover overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />

                  {/* Top Status Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 font-mono font-bold text-[11px] flex items-center gap-1.5 border border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{t.projects.onlineBadge}</span>
                    </span>
                  </div>

                  {/* Hover Overlay with Quick Action Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-1 text-white font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{language === 'pt' ? 'Ver Detalhes' : 'View Details'}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-3">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl sm:text-2xl font-extrabold text-text group-hover:text-orange-1 transition-colors cursor-pointer tracking-tight"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-dim leading-relaxed line-clamp-3">
                      {resolveText(project.subtitle || project.description)}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-panel-sub border border-border text-text-dim"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="text-[11px] font-medium px-2 py-1 rounded-lg bg-panel-sub border border-border text-text-faint">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-border/80">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-panel-sub hover:bg-orange-1 hover:text-white border border-border hover:border-orange-1 text-text font-bold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>
                        {project.youtubeId
                          ? (language === 'pt' ? 'Demonstração' : 'Watch Demo')
                          : (language === 'pt' ? 'Ver Detalhes' : 'View Details')}
                      </span>
                    </button>

                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.projects.visitSiteBtn}
                        className="w-10 h-10 rounded-xl bg-panel-sub hover:bg-panel border border-border hover:border-orange-1/60 flex items-center justify-center text-text-dim hover:text-orange-1 transition-all shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-10 h-10 rounded-xl bg-panel-sub hover:bg-panel border border-border hover:border-orange-1/60 flex items-center justify-center text-text-dim hover:text-orange-1 transition-all shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Figma"
                        className="w-10 h-10 rounded-xl bg-panel-sub hover:bg-panel border border-border hover:border-orange-1/60 flex items-center justify-center text-text-dim hover:text-orange-1 transition-all shadow-sm"
                      >
                        <Layers className="w-4 h-4 text-orange-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Project Video/Architecture Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};
