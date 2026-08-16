import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Trava o scroll da página enquanto o modal estiver aberto
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 font-mono cursor-none">
          {/* Backdrop Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-none"
          />

          {/* Janela Modal do Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl bg-panel border border-border rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] cursor-none"
          >
            {/* Header / Barra de Janela */}
            <div className="flex items-center justify-between px-4 py-3 bg-panel-2 border-b border-border-soft shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-none" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-text-faint text-[12px]">
                  ./projetos/{project.title.toLowerCase().replace(/\s+/g, '-')}.sh
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-text-faint hover:text-orange-1 text-sm font-bold px-2 py-0.5 rounded border border-transparent hover:border-border transition-all cursor-none"
              >
                [ESC / X]
              </button>
            </div>

            {/* Conteúdo Grid de 2 Colunas */}
            <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto cursor-none">
              {/* LADO ESQUERDO: Vídeo do YouTube / Mídia */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[12px] text-text-dim">
                  <span className="text-orange-1">&gt;</span>
                  <span>PREVIEW_DEMO.mp4</span>
                </div>

                {/* Adicionado cursor-none no container da mídia */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-black cursor-none">
                  {project.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
                      title={`Demonstração do projeto ${project.title}`}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-text-faint gap-2 p-4 text-center cursor-none">
                      <svg className="w-10 h-10 text-orange-2/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[12px]">[ NENHUM VÍDEO CADASTRADO ]</span>
                    </div>
                  )}
                </div>
              </div>

              {/* LADO DIREITO: Informações Detalhadas */}
              <div className="flex flex-col justify-between gap-4 font-mono cursor-none">
                <div>
                  {/* Título & Status */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-2 text-[12px]">$</span>
                    <h3 className="text-xl font-bold text-text uppercase tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  {/* Descrição Longa */}
                  <div className="text-[16px] text-text-dim leading-relaxed mb-5 bg-panel-2 border border-border-soft p-3.5 rounded-lg">
                    {project.fullDescription || project.description}
                  </div>

                  {/* Tags de Tecnologias */}
                  <div className="mb-5">
                    <span className="text-[11px] text-text-faint block mb-2 uppercase tracking-wider">
                      // TECH_STACK:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[13px] bg-panel-2 border border-border text-orange-1 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links / Repositório */}
                <div className="pt-4 border-t border-border flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-[12px] px-4 py-2.5 rounded bg-panel-2 border border-border text-text font-bold text-center transition-all duration-150 hover:border-orange-1 hover:text-orange-1 flex items-center justify-center gap-2 cursor-none"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      git show /repo
                    </a>
                  )}

                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-[12px] px-4 py-2.5 rounded bg-orange-1 text-black font-bold text-center transition-all duration-150 hover:bg-orange-2 flex items-center justify-center gap-2 cursor-none"
                    >
                      <span>./ver_site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};