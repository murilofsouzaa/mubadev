import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Exibe o botão após rolar 300px para baixo
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          type="button"
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-[100] p-3 rounded-lg bg-panel-2 border border-border text-orange-1 hover:border-orange-1 hover:bg-panel shadow-lg font-mono text-xs flex items-center gap-2 group cursor-none transition-all"
        >
          <span className="group-hover:-translate-y-0.5 transition-transform font-bold">▲</span>
          <span className="hidden sm:inline text-text-dim group-hover:text-orange-1">[TOP]</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};