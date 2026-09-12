import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectItemExtended } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { Play, ExternalLink, Github, Layers, X, Loader2, ChevronLeft, ChevronRight, Images } from 'lucide-react';

export const ProjectsList: React.FC = () => {
  const { language, resolveText } = useLanguage();
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItemExtended | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Close modal on Escape and navigate screenshots with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideoProject(null);
      if (activeVideoProject?.screenshots) {
        const len = activeVideoProject.screenshots.length;
        if (e.key === 'ArrowRight') setActiveScreenshot((prev) => (prev + 1) % len);
        if (e.key === 'ArrowLeft') setActiveScreenshot((prev) => (prev - 1 + len) % len);
      }
    };
    if (activeVideoProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      const lenis = (window as any).__lenis;
      if (lenis) lenis.stop();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      const lenis = (window as any).__lenis;
      if (lenis) lenis.start();
    };
  }, [activeVideoProject]);

  const handleOpen = (project: ProjectItemExtended) => {
    setIsVideoLoading(true);
    setActiveScreenshot(0);
    setActiveVideoProject(project);
  };

  return (
    <section id="projetos" className="py-16 sm:py-24 max-w-4xl mx-auto select-none">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 sm:mb-20 space-y-2"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.08]">
          {language === 'pt' ? 'Projetos' : 'Projects'}
          <span>.</span>
        </h2>
        <p className="text-base sm:text-lg text-text-dim max-w-xl leading-relaxed">
          {language === 'pt'
            ? 'Sistemas em produção, arquitetura e engenharia de software.'
            : 'Production systems, architecture, and software engineering.'}
        </p>
      </motion.div>

      {/* Projects Editorial Stream */}
      <div className="space-y-20 sm:space-y-28">
        {PROJECTS_DATA.map((project) => {
          const descriptionText = resolveText(project.description || project.subtitle);
          const hasScreenshots = project.screenshots && project.screenshots.length > 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 sm:pt-12 border-t border-border/80 first:border-t-0 first:pt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                {/* Left Column: Project Details (7 cols) */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                    {project.title}
                  </h3>

                  <p className="text-base sm:text-lg text-text-dim leading-relaxed font-normal">
                    {descriptionText}
                  </p>

                  {/* Architecture & Engineering Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-text-faint">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-border/60 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-5 pt-3 text-xs sm:text-sm font-semibold">
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-text underline underline-offset-4 hover:opacity-60 transition-opacity"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{language === 'pt' ? 'Ver aplicação' : 'View live'}</span>
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

                {/* Right Column: Preview Box (5 cols) */}
                <div className="md:col-span-5">
                  <div
                    onClick={() => handleOpen(project)}
                    className="group relative aspect-video w-full rounded-xl overflow-hidden cursor-pointer bg-black shadow-md border border-border/60"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                    {/* Centered button icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg transition-transform group-hover:bg-white group-hover:scale-105"
                      >
                        {hasScreenshots
                          ? <Images className="w-5 h-5" />
                          : <Play className="w-5 h-5 fill-current ml-0.5" />
                        }
                      </motion.div>
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white/90 drop-shadow">
                      {hasScreenshots
                        ? (language === 'pt' ? 'Ver fotos' : 'View photos')
                        : (language === 'pt' ? 'Assistir vídeo' : 'Watch video')}
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Lightbox Modal via Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activeVideoProject && (activeVideoProject.youtubeId || activeVideoProject.screenshots) && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                {/* Black Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveVideoProject(null)}
                  className="fixed inset-0 bg-[#000000] cursor-pointer"
                />

                {/* Modal Box */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 30 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  className="relative w-full max-w-4xl z-10 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a0a0a] text-white border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base tracking-tight">
                        {activeVideoProject.title}
                      </span>
                      {activeVideoProject.screenshots && (
                        <span className="text-xs font-mono text-white/40">
                          {activeScreenshot + 1} / {activeVideoProject.screenshots.length}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveVideoProject(null)}
                      aria-label="Fechar"
                      className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content: Screenshot Carousel OR Video */}
                  {activeVideoProject.screenshots && activeVideoProject.screenshots.length > 0 ? (
                    <div className="relative aspect-video w-full bg-black overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeScreenshot}
                          src={activeVideoProject.screenshots[activeScreenshot]}
                          alt={`${activeVideoProject.title} screenshot ${activeScreenshot + 1}`}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="w-full h-full object-cover object-top"
                        />
                      </AnimatePresence>

                      {activeVideoProject.screenshots.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const len = activeVideoProject.screenshots!.length;
                              setActiveScreenshot((prev) => (prev - 1 + len) % len);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const len = activeVideoProject.screenshots!.length;
                              setActiveScreenshot((prev) => (prev + 1) % len);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Dot indicators */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {activeVideoProject.screenshots.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setActiveScreenshot(i); }}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  i === activeScreenshot ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="relative aspect-video w-full bg-black overflow-hidden">
                      {isVideoLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black">
                          <img
                            src={activeVideoProject.image}
                            alt={activeVideoProject.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
                          />
                          <div className="relative z-20 flex flex-col items-center gap-3 text-white">
                            <Loader2 className="w-8 h-8 animate-spin text-white/80" />
                            <span className="text-xs font-mono text-white/70 tracking-widest uppercase">
                              {language === 'pt' ? 'Carregando prévia...' : 'Loading preview...'}
                            </span>
                          </div>
                        </div>
                      )}
                      <iframe
                        src={`https://www.youtube.com/embed/${activeVideoProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title={activeVideoProject.title}
                        className={`w-full h-full border-0 relative z-20 transition-opacity duration-300 ${
                          isVideoLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIsVideoLoading(false)}
                      />
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};
