import React from 'react';
import { SKILLS_DATA } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { TechIcon } from './TechIcons';

export const Technologies: React.FC = React.memo(() => {
  const { t } = useLanguage();

  // Extract all unique skills into a single flat array
  const allSkills = SKILLS_DATA.flatMap((cat) => cat.items);

  // Duplicate list to create a seamless infinite loop
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="py-8 w-full overflow-hidden select-none">
      {/* Subtle Top Label */}
      <div className="text-center mb-5">
        <span className="text-xs font-bold uppercase tracking-widest text-text-faint">
          {t.tech.title}
        </span>
      </div>

      {/* Infinite Continuous Ribbon Container with Left & Right Gradient Fade */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right subtle fade mask for smooth entry and exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Infinite Moving Track */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {marqueeSkills.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 group cursor-default transition-all opacity-80 hover:opacity-100"
            >
              {/* Bullet Dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-orange-1 shrink-0" />

              {/* Tech Icon */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TechIcon name={tech.name} className="w-full h-full object-contain" />
              </div>

              {/* Tech Name */}
              <span className="text-sm sm:text-base font-semibold text-text-dim group-hover:text-text tracking-tight transition-colors">
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