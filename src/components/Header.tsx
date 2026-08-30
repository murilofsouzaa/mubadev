import React, { useState, useEffect } from 'react';
import { NavLink, Link } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = React.memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  // Manage background blur and brightness decrease on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.classList.remove('mobile-menu-open');
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/sobre', label: t.nav.about },
    { to: '/projetos', label: t.nav.projects },
    { to: '/contato', label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        mobileMenuOpen
          ? 'bg-[#F8F7F4] dark:bg-[#09090b] border-stone-200 dark:border-white/10'
          : 'bg-[#F8F7F4]/80 dark:bg-[#09090b]/40 border-stone-200/40 dark:border-white/[0.04] backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity */}
        <Link
          to="/"
          className="flex items-center gap-3 sm:gap-3.5 select-none text-text focus:outline-none shrink-0 group min-w-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative shrink-0"
          >
            {/* Clean Avatar Ring */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2px] ring-1 ring-stone-300 dark:ring-[#EA580C]/40 overflow-hidden bg-white dark:bg-zinc-900">
              <img
                src="/favicon.jpg"
                alt="Avatar de Murilo Freitas"
                className="w-full h-full rounded-full object-cover grayscale-[15%] contrast-115"
              />
            </div>
          </motion.div>

          <div className="flex flex-col min-w-0">
            <span className="font-sans font-bold text-base text-stone-950 dark:text-zinc-100 group-hover:text-[#EA580C] transition-colors truncate tracking-tight">
              Murilo Freitas<span className="text-[#EA580C] font-black">.</span>
            </span>

            <span className="text-xs text-stone-600 dark:text-zinc-400 font-mono truncate">
              {t.header.role}
            </span>
          </div>
        </Link>

        {/* Center: Floating Navigation Pill (Desktop only) */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-stone-300/80 dark:border-[#EA580C]/30 bg-white/80 dark:bg-[#120507]/80 backdrop-blur-md p-1.5 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full transition-all duration-150 select-none flex items-center gap-1 font-sans ${
                  isActive
                    ? 'bg-[#EA580C] text-white px-4 py-1.5 text-xs md:text-sm font-semibold shadow-sm'
                    : 'text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-white/5 px-3.5 py-1.5 text-xs md:text-sm font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'text-white font-black' : 'text-[#EA580C] font-bold'}>/</span>
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Desktop Controls (Language, Theme & CTA) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            type="button"
            aria-label={`${t.header.langAria} (${language.toUpperCase()})`}
            className="rounded-full border border-stone-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-1 flex items-center gap-1 text-xs font-mono backdrop-blur-md shadow-sm"
          >
            <span
              className={`rounded-full transition-colors px-2.5 py-0.5 text-xs ${
                language === 'pt'
                  ? 'bg-[#EA580C] text-white font-bold shadow-sm'
                  : 'text-stone-700 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              PT
            </span>
            <span
              className={`rounded-full transition-colors px-2.5 py-0.5 text-xs ${
                language === 'en'
                  ? 'bg-[#EA580C] text-white font-bold shadow-sm'
                  : 'text-stone-700 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              EN
            </span>
          </button>

          {/* Theme Rotary Switch */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            type="button"
            aria-label={`${t.header.themeAria} ${isDark ? 'light' : 'dark'}`}
            className="w-9 h-9 rounded-full border border-stone-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-stone-700 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white transition-all shadow-sm overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-[#EA580C]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-stone-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Direct CTA Link */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contato"
              className="bg-[#EA580C] hover:bg-[#D9480F] text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 group font-sans"
            >
              <span>{t.header.talkBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Mobile Controls (Theme Toggle & Hamburger) */}
        <div className="flex md:hidden items-center gap-2 shrink-0">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            type="button"
            aria-label={`${t.header.themeAria} ${isDark ? 'light' : 'dark'}`}
            className="w-9 h-9 rounded-xl border border-stone-300 dark:border-zinc-700 bg-transparent flex items-center justify-center text-stone-800 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white transition-all shadow-sm"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun-mobile"
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-zinc-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-mobile"
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-stone-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Hamburger Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 rounded-xl border border-stone-300 dark:border-zinc-700 bg-transparent flex items-center justify-center text-stone-800 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white hover:border-stone-500 dark:hover:border-zinc-500 transition-all focus:outline-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5 text-stone-800 dark:text-zinc-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5 text-stone-800 dark:text-zinc-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

      </div>

      {/* Mobile Dropdown Menu with Complete Contrast and Sync with Active Theme */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden border-t border-stone-300/80 dark:border-[#EA580C]/20 bg-[#F8F7F4]/95 dark:bg-[#12080a]/95 backdrop-blur-md px-5 py-5 space-y-4 shadow-lg dark:shadow-xl overflow-hidden relative z-50"
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#EA580C] text-white font-semibold shadow-sm'
                        : 'text-stone-800 hover:text-stone-950 dark:text-zinc-300 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Controls Bar inside mobile menu */}
            <div className="pt-3 border-t border-stone-300 dark:border-zinc-800 flex items-center justify-between gap-3">
              {/* Language Switch */}
              <div className="flex items-center gap-1 bg-stone-200/80 dark:bg-zinc-900/80 border border-stone-300 dark:border-zinc-700 rounded-xl p-1 text-xs font-bold font-mono">
                <button
                  type="button"
                  onClick={() => {
                    if (language !== 'pt') toggleLanguage();
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    language === 'pt'
                      ? 'bg-[#EA580C] text-white font-bold shadow-sm'
                      : 'text-stone-800 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (language !== 'en') toggleLanguage();
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    language === 'en'
                      ? 'bg-[#EA580C] text-white font-bold shadow-sm'
                      : 'text-stone-800 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Direct CTA Link in mobile */}
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#D9480F] text-white font-semibold text-xs transition-all shadow-sm font-sans"
              >
                <span>{t.header.talkBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop to catch outside clicks and dim background */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-20 sm:top-24 bg-black/40 z-30 md:hidden pointer-events-auto backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
});

Header.displayName = 'Header';