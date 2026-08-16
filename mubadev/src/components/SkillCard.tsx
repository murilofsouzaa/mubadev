import React from 'react';
import { motion } from 'framer-motion';
import type { SkillItem } from '../types/portfolio';

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

const renderIcon = (icon: SkillItem['icon']) => {
  switch (icon) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M8 6L2 12L8 18" /><path d="M16 6L22 12L16 18" />
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2.5" y="3.5" width="19" height="6" rx="1.2" />
          <rect x="2.5" y="14.5" width="19" height="6" rx="1.2" />
          <circle cx="6.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="6.5" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5V18.5C4 20.15 7.58 21.5 12 21.5C16.42 21.5 20 20.15 20 18.5V5.5" />
          <path d="M4 12C4 13.65 7.58 15 12 15C16.42 15 20 13.65 20 12" />
        </svg>
      );
    case 'terminal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2.5" y="4" width="19" height="16" rx="1.6" />
          <path d="M6 9.5L10 12.5L6 15.5" />
          <line x1="12" y1="15.5" x2="18" y2="15.5" />
        </svg>
      );
    case 'file-text':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M6 2.5H14L19 7.5V21.5H6V2.5Z" />
          <path d="M14 2.5V7.5H19" />
          <line x1="8.5" y1="12" x2="15.5" y2="12" />
          <line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />
          <line x1="8.5" y1="19" x2="13" y2="19" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-panel border border-border rounded-lg p-5 flex gap-3.5 items-start transition-all duration-200 hover:border-orange-3 hover:-translate-y-0.5 hover:shadow-card group"
    >
      <div className="w-10 h-10 shrink-0 rounded-lg bg-panel-2 border border-border-soft flex items-center justify-center text-orange-1">
        {renderIcon(skill.icon)}
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[1px] text-text-faint mb-1">
          {skill.category}
        </div>
        <div className="text-[14px] text-text leading-[1.5]">
          {skill.items.map((item, idx) => (
            <React.Fragment key={item}>
              {item}
              {idx < skill.items.length - 1 && <span className="text-text-dim mx-1">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';