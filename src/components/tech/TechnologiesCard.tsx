import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SkillItemEnhanced } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';

interface SkillCardProps {
  skill: SkillItemEnhanced;
}

// Renderizador dinâmico de ícones da Lucide com fallback
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-4 h-4' }) => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.FC<{ className?: string }>>)[name] || LucideIcons.Code2;
  return <IconComponent className={className} />;
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const SkillCard: React.FC<SkillCardProps> = React.memo(({ skill }) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const categoryName = language === 'en' && skill.categoryEn ? skill.categoryEn : skill.category;

  // Efeito 3D Tilt Sutil
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-4deg', '4deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="group relative bg-panel border border-border rounded-lg p-4 font-mono transition-all duration-200 hover:border-orange-1 hover:shadow-[0_4px_20px_rgba(249,115,22,0.08)] flex flex-col justify-between cursor-none"
    >
      <div>
        {/* Cabeçalho da Categoria com Estilo Prompt */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-border-soft">
          <div className="flex items-center gap-2">
            <span className="text-orange-1 font-bold text-xs">$</span>
            <h3 className="text-md font-bold uppercase tracking-wider text-text group-hover:text-orange-1 transition-colors">
              {categoryName}
            </h3>
          </div>
          <span className="text-[13px] text-text-faint">
            [{skill.items.length}]
          </span>
        </div>

        {/* Lista Estilo Output Terminal (`ls -l`) */}
        <ul className="space-y-1.5">
          {skill.items.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center justify-between text-sm py-1 px-2 rounded hover:bg-panel-2 transition-colors duration-150"
            >
              <div className="flex items-center gap-2">
                <span className="text-orange-1/70 group-hover:text-orange-1 transition-colors">
                  <DynamicIcon name={tech.icon} className="w-3.5 h-3.5" />
                </span>
                <span className="text-text font-medium">{tech.name}</span>
              </div>

              {tech.level && (
                <span className="text-[10px] text-text-faint group-hover:text-text-dim transition-colors">
                  {tech.level}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Rodapé do Card com Status */}
      <div className="pt-3 mt-3 border-t border-border-soft/60 flex items-center justify-between text-[10px] text-text-faint">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
          <span>ready</span>
        </span>
        <span className="text-orange-1/60 group-hover:text-orange-1 transition-colors font-bold">
          OK
        </span>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';