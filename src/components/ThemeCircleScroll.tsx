import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ThemeCircleScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop values: completely untouched runway across 260vh
  const desktopScale = useTransform(scrollYProgress, [0.05, 0.65], [1, 650]);
  const desktopOpacity = useTransform(scrollYProgress, [0.46, 0.65], [0, 1]);

  // Mobile values: smooth, progressive, natural momentum across 195vh
  const mobileScale = useTransform(scrollYProgress, [0.03, 0.58], [1, 450]);
  const mobileOpacity = useTransform(scrollYProgress, [0.28, 0.58], [0, 1]);

  const scale = isMobile ? mobileScale : desktopScale;
  const contentOpacity = isMobile ? mobileOpacity : desktopOpacity;

  return (
    <div
      ref={containerRef}
      id="circulo-tema"
      className="relative w-full h-[195vh] sm:h-[260vh] bg-[#F5F2EB] select-none"
    >
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#F5F2EB] flex items-center justify-center">
        
        {/* The expanding black circle positioned near the top (22%) centered horizontally */}
        <motion.div
          style={{ scale }}
          className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#000000] pointer-events-none z-10 origin-center will-change-transform transform-gpu"
        />

        {/* Somente o texto "Depois do trabalho." flutuando com pureza no centro da tela escura */}
        <motion.div
          style={{
            opacity: contentOpacity,
          }}
          className="relative z-20 max-w-4xl w-full text-center px-6 sm:px-12 text-white pointer-events-auto flex flex-col items-center justify-center will-change-opacity"
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
