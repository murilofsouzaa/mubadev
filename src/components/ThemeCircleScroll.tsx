import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ThemeCircleScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // The circle scales gradually and slowly between 0.05 and 0.65 over a generous runway
  const scale = useTransform(scrollYProgress, [0.05, 0.65], [1, 650]);

  // Somente opacidade pura no titulo "Sobre mim."
  const contentOpacity = useTransform(scrollYProgress, [0.46, 0.65], [0, 1]);

  return (
    <div
      ref={containerRef}
      id="depois-do-trabalho"
      className="relative w-full h-[260vh] bg-[#F5F2EB] select-none"
    >
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#F5F2EB] flex items-center justify-center">
        
        {/* The expanding black circle positioned near the top (22%) centered horizontally */}
        <motion.div
          style={{ scale }}
          className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#000000] pointer-events-none z-10 origin-center"
        />

        {/* Somente o texto "Além do trabalho." flutuando com pureza no centro da tela escura */}
        <motion.div
          style={{
            opacity: contentOpacity,
          }}
          className="relative z-20 max-w-4xl w-full text-center px-6 sm:px-12 text-white pointer-events-auto flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08]">
            {t.beyondWork.title}
            <span>.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
};
