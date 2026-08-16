import React from 'react';
import { motion } from 'framer-motion';
import type { SkillItem } from '../../types/portfolio';

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

const renderIcon = (icon: SkillItem['icon']) => {
  switch (icon) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M8 6L2 12L8 18" /><path d="M16 6L22 12L16 18" />
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2.5" y="3.5" width="19" height="6" rx="1.2" />
          <rect x="2.5" y="14.5" width="19" height="6" rx="1.2" />
          <circle cx="6.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="6.5" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5V18.5C4 20.15 7.58 21.5 12 21.5C16.42 21.5 20 20.15 20 18.5V5.5" />
          <path d="M4 12C4 13.65 7.58 15 12 15C16.42 15 20 13.65 20 12" />
        </svg>
      );
    case 'terminal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2.5" y="4" width="19" height="16" rx="1.6" />
          <path d="M6 9.5L10 12.5L6 15.5" />
          <line x1="12" y1="15.5" x2="18" y2="15.5" />
        </svg>
      );
    case 'file-text':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M6 2.5H14L19 7.5V21.5H6V2.5Z" />
          <path d="M14 2.5V7.5H19" />
          <line x1="8.5" y1="12" x2="15.5" y2="12" />
          <line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />
          <line x1="8.5" y1="19" x2="13" y2="19" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="6" cy="6" r="2.3" />
          <circle cx="6" cy="18" r="2.3" />
          <circle cx="18" cy="6" r="2.3" />
          <path d="M6 8.3V15.7" />
          <path d="M8.3 6H15.7C16.9 6 18 7.1 18 8.3V15.7" />
        </svg>
      );
  }
};

export const SkillCard: React.FC<SkillCardProps> = React.memo(({ skill, index }) => {
  const fileName = skill.category.toLowerCase().replace(/[^a-z0-9]/g, '_');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-panel border border-border rounded-lg overflow-hidden font-mono transition-all duration-200 hover:border-orange-1 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] group flex flex-col"
    >
      {/* Terminal Window Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-panel-2 border-b border-border-soft text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <span className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <span className="text-text-faint text-[10px] tracking-wide flex items-center gap-1">
          <span className="text-orange-2">{renderIcon(skill.icon)}</span>
          ./{fileName}.conf
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="mb-3">
          <div className="text-[10px] uppercase tracking-[1.5px] text-orange-2 font-bold mb-2 flex items-center gap-1.5">
            <span>[CATEGORY]</span>
            <span className="text-text-dim">{skill.category}</span>
          </div>

          {/* Badges para cada tecnologia */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="text-[12px] bg-panel-2 border border-border text-text px-2 py-0.5 rounded font-mono group-hover:border-orange-1/40 transition-colors duration-150"
              >
                <span className="text-text-faint mr-1">$</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="text-[10px] text-text-faint pt-2 border-t border-border-soft/60 flex justify-between items-center">
          <span>status: active</span>
          <span className="text-orange-3">OK</span>
        </div>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';