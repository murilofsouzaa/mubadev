import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
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
          aria-label={t.scrollToTop.ariaLabel}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-stone-300 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 shadow-2xl hover:bg-[#EA580C] dark:hover:bg-[#EA580C] hover:border-[#EA580C] dark:hover:border-[#EA580C] hover:text-white dark:hover:text-white flex items-center justify-center group transition-all"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};