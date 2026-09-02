import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { Play, ExternalLink, Github, Layers, X } from 'lucide-react';

export const ProjectsList: React.FC = () => {
  const { language, resolveText } = useLanguage();
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="projetos" className="py-16 sm:py-24 max-w-4xl mx-auto select-none">
      {/* Section Header with Scroll Opacity Reveal */}
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

      {/* Projects Editorial Stream with Scroll Opacity Reveal */}
      <div className="space-y-20 sm:space-y-28">
        {PROJECTS_DATA.map((project) => {
          const descriptionText = resolveText(project.subtitle || project.description);

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

                  {/* Action Links (Live URL, GitHub, Figma) */}
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

                {/* Right Column: Seamless Inline Video Box (5 cols) */}
                <div className="md:col-span-5">
                  {playingVideoId === project.id && project.youtubeId ? (
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-md border border-border/60">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                        title={project.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(null)}
                        aria-label="Fechar prévia"
                        className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-black/80 text-white hover:bg-black transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setPlayingVideoId(project.id)}
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
                  )}
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
