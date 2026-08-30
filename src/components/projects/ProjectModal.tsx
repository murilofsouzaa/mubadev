import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import type { ProjectItemExtended } from '../../data/projects';
import { X, ExternalLink, Terminal, Copy, Check, Github, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItemExtended | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, language, resolveText } = useLanguage();
  const isOpen = Boolean(project);
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Apply blur to background page and handle lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999999]" onClose={onClose}>
        {/* Backdrop overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 sm:p-4 lg:p-6 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <DialogPanel className="relative w-full h-full sm:h-auto lg:h-[86vh] sm:max-w-5xl sm:max-h-[90vh] bg-panel sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row text-left align-middle transform transition-all">
                
                {/* Left Side: Video Player Showcase */}
                <div className="w-full lg:w-[52%] bg-black flex flex-col justify-center relative overflow-hidden shrink-0">
                  {/* Mobile Top Bar with Close Button */}
                  <div className="flex sm:hidden items-center justify-between px-4 py-3 bg-panel z-20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-1 animate-pulse" />
                      <DialogTitle as="h3" className="font-extrabold text-base text-text">
                        {project.title}
                      </DialogTitle>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      aria-label={t.projects.modalClose}
                      className="w-8 h-8 rounded-full bg-panel-sub flex items-center justify-center text-text"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative w-full aspect-video lg:h-full lg:aspect-auto overflow-hidden bg-black flex items-center justify-center">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId || (project.id === 'strucx' ? 'dyDJiA3XHEQ' : 'ohn5Kagjs8s')}?autoplay=0&rel=0`}
                      title={`Demonstração de ${project.title}`}
                      className="w-full h-full min-h-[220px] sm:min-h-[320px] lg:min-h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Right Side: Scrollable Feed of Information & Action Bar */}
                <div className="w-full lg:w-[48%] flex-1 flex flex-col justify-between bg-panel overflow-hidden">
                  
                  {/* Desktop Header with Terminal Window Aesthetics */}
                  <div className="hidden sm:flex items-center justify-between px-6 py-4 bg-panel-sub/90 shrink-0">
                    {/* Terminal Window Controls & Prompt */}
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Window Action Dots */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>

                      {/* Terminal Command Line Title */}
                      <div className="flex items-center gap-1.5 font-mono text-xs text-text truncate">
                        <Terminal className="w-3.5 h-3.5 text-orange-1 shrink-0" />
                        <span className="text-text-faint truncate">
                          <span className="text-orange-1 font-bold">muba@dev</span>:<span className="text-text-dim">~/projects/{project.id}</span>$
                        </span>
                        <DialogTitle as="h3" className="font-bold text-text truncate ml-1">
                          cat {project.title.toLowerCase()}.md
                        </DialogTitle>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={onClose}
                      aria-label={t.projects.modalClose}
                      className="w-8 h-8 rounded-full bg-panel hover:bg-panel-sub flex items-center justify-center text-text-dim hover:text-text transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Scrollable Details Body */}
                  <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 flex-1">
                    
                    {/* About Project */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-text uppercase tracking-wider">
                          {t.projects.aboutTitle}
                        </h4>
                        <span className="hidden sm:inline-block font-mono text-[11px] text-orange-1 font-bold">
                          $ cat overview.md
                        </span>
                      </div>
                      <div className="text-sm sm:text-[15px] text-text-dim leading-relaxed bg-panel-sub/60 p-4 sm:p-5 rounded-2xl space-y-3">
                        <p className="text-text whitespace-pre-line">
                          {resolveText(project.fullDescription || project.description) || t.projects.aboutText}
                        </p>
                        {(project.motto || (project.id === 'eden' && t.projects.aboutMotto)) && (
                          <p className="text-text font-semibold">
                            {project.motto ? resolveText(project.motto) : t.projects.aboutMotto}
                          </p>
                        )}
                        {(project.concepts || (project.id === 'eden' && t.projects.conceptsList)) && (
                          <p className="text-xs sm:text-sm text-text-faint pt-1">
                            <strong className="text-orange-1">{t.projects.conceptsLabel} </strong>
                            {project.concepts ? resolveText(project.concepts) : t.projects.conceptsList}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Production Execution Flow */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-text uppercase tracking-wider">
                          {t.projects.productionFlowTitle}
                        </h4>
                        <span className="hidden sm:inline-block font-mono text-[11px] text-orange-1 font-bold">
                          $ ./deploy.sh
                        </span>
                      </div>
                      <div className="bg-panel-sub/60 p-4 sm:p-5 rounded-2xl space-y-3 font-mono">
                        {/* AI Chat Style Copyable Code Snippet */}
                        <div className="rounded-xl overflow-hidden bg-panel border border-border/40 shadow-sm">
                          <div className="flex items-center justify-between px-3.5 py-1.5 bg-panel-sub/80 text-[11px] text-text-faint font-mono border-b border-border/40">
                            <div className="flex items-center gap-1.5">
                              <Terminal className="w-3 h-3 text-orange-1" />
                              <span>bash</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopyCommand(project.architectureDetails?.commandSnippet || 'docker compose up -d')}
                              className="inline-flex items-center gap-1 text-[11px] text-text-dim hover:text-text hover:bg-panel px-2 py-0.5 rounded transition-all"
                            >
                              {copied ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400 font-semibold">{language === 'pt' ? 'Copiado!' : 'Copied!'}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>{language === 'pt' ? 'Copiar' : 'Copy'}</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="px-3.5 py-2.5 text-xs sm:text-sm font-mono overflow-x-auto text-text flex items-center justify-between gap-2">
                            <code>
                              <span className="text-orange-1 font-bold select-none">$ </span>
                              <span className="text-emerald-400 font-semibold">{project.architectureDetails?.commandSnippet || 'docker compose up -d'}</span>
                              {project.architectureDetails?.commandComment && (
                                <span className="text-text-faint ml-2 select-none">{project.architectureDetails.commandComment}</span>
                              )}
                            </code>
                          </div>
                        </div>
                        
                        <div className="space-y-2 pt-1 text-xs sm:text-sm text-text">
                          {(project.architectureDetails?.productionFlow || t.projects.productionFlowItems).map((flow, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0 mt-2" />
                              <span className="text-text leading-relaxed">{resolveText(flow)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies Stack Tags */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-text-faint uppercase tracking-wider">
                          {t.projects.techStack}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs sm:text-sm font-mono font-semibold px-3 py-1.5 rounded-xl bg-panel-sub text-text hover:text-orange-1 transition-colors border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="p-4 sm:p-5 bg-panel-sub flex flex-col sm:flex-row gap-3 w-full shrink-0 border-t border-border/40 font-mono">
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs sm:text-sm transition-all shadow-md h-11"
                      >
                        <span className="text-white/80 font-normal">$</span>
                        <span>{t.projects.visitSiteBtn}</span>
                        <ExternalLink className="w-4 h-4 text-white shrink-0" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-panel hover:bg-panel-sub text-white hover:text-orange-1 font-bold text-xs sm:text-sm transition-all border border-border/80 shadow-md h-11"
                      >
                        <Github className="w-4 h-4 text-white shrink-0" />
                        <span className="text-orange-1 font-bold">$</span>
                        <span>{t.projects.gitRepoBtn}</span>
                      </a>
                    )}

                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-panel hover:bg-panel-sub text-white hover:text-orange-1 font-bold text-xs sm:text-sm transition-all border border-border/80 shadow-md h-11"
                      >
                        <Layers className="w-4 h-4 text-orange-1 shrink-0" />
                        <span className="text-orange-1 font-bold">$</span>
                        <span>{t.projects.figmaBtn || 'Figma'}</span>
                      </a>
                    )}
                  </div>

                </div>

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};