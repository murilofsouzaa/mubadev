import React, { Fragment, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import type { ProjectItemExtended } from '../../data/projects';
import { X, ExternalLink, Github, Sparkles, Cpu, Layers, Server } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItemExtended | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const isOpen = Boolean(project);

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
              <DialogPanel className="relative w-full h-full sm:h-auto lg:h-[86vh] sm:max-w-5xl sm:max-h-[90vh] bg-panel sm:border sm:border-border sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row text-left align-middle transform transition-all">
                
                {/* Left Side: Video Player Showcase */}
                <div className="w-full lg:w-[52%] bg-black flex flex-col justify-center relative overflow-hidden shrink-0 border-b lg:border-b-0 lg:border-r border-border">
                  {/* Mobile Top Bar with Close Button */}
                  <div className="flex sm:hidden items-center justify-between px-4 py-3 bg-panel border-b border-border z-20">
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

                  {project.youtubeId ? (
                    <div className="relative w-full aspect-video lg:h-full lg:aspect-auto overflow-hidden bg-black flex items-center justify-center">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
                        title={`Demonstração de ${project.title}`}
                        className="w-full h-full min-h-[220px] sm:min-h-[320px] lg:min-h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full min-h-[240px] overflow-hidden bg-panel-sub">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Right Side: Scrollable Feed of Information & Action Bar */}
                <div className="w-full lg:w-[48%] flex-1 flex flex-col justify-between bg-panel overflow-hidden">
                  
                  {/* Desktop Header */}
                  <div className="hidden sm:flex items-center justify-between px-6 py-4 bg-panel-sub/80 border-b border-border shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-1 animate-pulse" />
                      <DialogTitle as="h3" className="font-extrabold text-lg text-text">
                        {project.title}
                      </DialogTitle>
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      aria-label={t.projects.modalClose}
                      className="w-8 h-8 rounded-full bg-panel hover:bg-panel-sub flex items-center justify-center text-text-dim hover:text-text transition-colors border border-border"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Scrollable Details Body */}
                  <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 flex-1">
                    
                    {/* About Project */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-text uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-1" />
                        <span>{t.projects.aboutTitle}</span>
                      </h4>
                      <div className="text-xs sm:text-sm text-text-dim leading-relaxed bg-panel-sub/60 p-4 rounded-2xl space-y-2.5">
                        <p>
                          {t.projects.aboutText}
                        </p>
                        <p className="text-text font-medium">
                          {t.projects.aboutMotto}
                        </p>
                        <p className="text-[11px] sm:text-xs text-text-faint pt-1">
                          <strong className="text-orange-1">{t.projects.conceptsLabel} </strong>
                          {t.projects.conceptsList}
                        </p>
                      </div>
                    </div>

                    {/* Production Execution Flow */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-text uppercase tracking-wider flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-orange-1" />
                        <span>{t.projects.productionFlowTitle}</span>
                      </h4>
                      <div className="bg-panel-sub/60 p-4 rounded-2xl space-y-2 text-xs text-text-dim">
                        <p className="text-text font-semibold">
                          {t.projects.productionFlowSubtitle}
                        </p>
                        <ul className="space-y-1.5 list-disc list-inside text-text-faint">
                          {t.projects.productionFlowItems.map((flow, idx) => (
                            <li key={idx}>
                              <span>{flow}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Stack Tags */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-text-faint uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-orange-1" />
                        <span>{t.projects.techStack}</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-panel-sub text-text hover:text-orange-1 transition-colors border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Buttons (with white text on orange) */}
                  <div className="p-4 sm:p-5 bg-panel-sub/80 border-t border-border flex flex-wrap gap-2.5 shrink-0">
                    {project.deployUrl && (
                      <a
                        href={edenProjectUrl(project.deployUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs transition-all shadow-sm"
                      >
                        <span>{t.projects.visitSiteBtn}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}

                    <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-panel hover:bg-panel-sub text-text font-bold text-xs transition-all shadow-sm border border-border"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>{t.projects.gitRepoBtn}</span>
                        </a>
                      )}

                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-panel hover:bg-panel-sub text-text font-bold text-xs transition-all shadow-sm border border-border"
                        >
                          <Layers className="w-3.5 h-3.5 text-orange-1" />
                          <span>{t.projects.figmaBtn}</span>
                        </a>
                      )}
                    </div>
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

function edenProjectUrl(url: string) {
  return url;
}