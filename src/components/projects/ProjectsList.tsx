import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectItemExtended } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { Play, ExternalLink, Github, Layers, X } from 'lucide-react';

export const ProjectsList: React.FC = () => {
  const { language, resolveText } = useLanguage();
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItemExtended | null>(null);

  // Close video modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideoProject(null);
      }
    };
    if (activeVideoProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideoProject]);

  return (
    <section id="projetos" className="py-16 sm:py-24 max-w-4xl mx-auto select-none">
      {/* Section Header */}
      <div className="mb-14 sm:mb-20 space-y-2">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.08]">
          {language === 'pt' ? 'Projetos' : 'Projects'}
          <span>.</span>
        </h2>
        <p className="text-base sm:text-lg text-text-dim max-w-xl leading-relaxed">
          {language === 'pt'
            ? 'Sistemas em produção, arquitetura e engenharia de software.'
            : 'Production systems, architecture, and software engineering.'}
        </p>
      </div>

      {/* Projects Editorial Stream (No separate cards) */}
      <div className="space-y-20 sm:space-y-28">
        {PROJECTS_DATA.map((project) => {
          const descriptionText = resolveText(project.subtitle || project.description);

          return (
            <article
              key={project.id}
              className="pt-8 sm:pt-12 border-t border-border/80 first:border-t-0 first:pt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Project Details (7 cols) */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                    {project.title}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-sm sm:text-base text-text-dim leading-relaxed font-normal">
                    {descriptionText}
                  </p>

                  {/* Technologies (Clean list) */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded bg-panel-sub text-text-dim border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm font-medium">
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-text hover:opacity-60 transition-opacity"
                      >
                        <span>{language === 'pt' ? 'Ver aplicação' : 'Live Preview'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-text hover:opacity-60 transition-opacity"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-text hover:opacity-60 transition-opacity"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Figma</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Compact Video Preview Box (5 cols) */}
                <div className="md:col-span-5">
                  <div
                    onClick={() => setActiveVideoProject(project)}
                    className="group relative aspect-video w-full rounded-xl overflow-hidden cursor-pointer bg-black shadow-md border border-border/60"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg transition-transform group-hover:bg-white group-hover:scale-105"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white/90 drop-shadow">
                      {language === 'pt' ? 'Assistir vídeo' : 'Watch video'}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* Centered Scaled Video Modal */}
      <AnimatePresence>
        {activeVideoProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveVideoProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Video Container scaling from small to large in the center */}
            <motion.div
              initial={{ scale: 0.65, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.65, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl z-10 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/15"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-black text-white border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="font-bold text-sm sm:text-base tracking-tight">
                    {activeVideoProject.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideoProject(null)}
                  aria-label="Fechar vídeo"
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube Embed Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoProject.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideoProject.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
