import React from 'react';
import { SKILLS_DATA } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { TechIcon } from './TechIcons';

export const Technologies: React.FC = React.memo(() => {
  const { t } = useLanguage();

  // Extract all unique skills into a single flat array
  const allSkills = SKILLS_DATA.flatMap((cat) => cat.items);

  // Duplicate list to create a seamless 50% translation infinite loop
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section className="py-8 w-full overflow-hidden select-none">
      {/* Header Centered */}
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400 font-bold">
          {t.tech.title}
        </span>
      </div>

      {/* Marquee Track Container with pure CSS gradient mask */}
      <div
        className="relative w-full overflow-hidden py-3 bg-transparent"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        {/* Infinite Moving Track */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {marqueeSkills.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-2.5 group cursor-default transition-all opacity-100 hover:scale-105"
            >
              {/* Dot Separator */}
              <span className="text-[#EA580C] text-xs font-bold mr-1">•</span>

              {/* Tech Icon */}
              <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 flex items-center justify-center filter group-hover:drop-shadow-[0_0_8px_rgba(188,57,8,0.4)] transition-all">
                <TechIcon name={tech.name} className="w-full h-full object-contain" />
              </div>

              {/* Tech Name - High Contrast in Light & Dark Mode */}
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white tracking-tight transition-colors font-sans">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Technologies.displayName = 'Technologies';