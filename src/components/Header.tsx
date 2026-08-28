import React, { useState } from 'react';
import { NavLink, Link } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

export const Header: React.FC = React.memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  const navLinks = [
    { to: '/', label: t.nav.home, code: '00_home' },
    { to: '/sobre', label: t.nav.about, code: '01_about' },
    { to: '/projetos', label: t.nav.projects, code: '02_projects' },
    { to: '/contato', label: t.nav.contact, code: '03_contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 w-full bg-bg/90 backdrop-blur-md border-b border-border transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Brand Identity with Dog Avatar & Subtle Terminal Prompt */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3.5 select-none text-text focus:outline-none shrink-0 group min-w-0"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="relative shrink-0"
          >
            <img
              src="/favicon.jpg"
              alt="Avatar de Murilo Freitas"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-orange-1 shadow-sm transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-bg animate-pulse" />
          </motion.div>

          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm sm:text-lg tracking-tight text-text flex items-center group-hover:text-orange-1 transition-colors truncate">
              Murilo Freitas<span className="text-orange-1">.</span>
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-text-faint font-medium -mt-0.5 flex items-center gap-1 truncate">
              <span className="text-orange-1 font-bold">&gt;</span>
              <span>{t.header.role}</span>
              <span className="w-1.5 h-3 bg-orange-1 animate-pulse inline-block ml-0.5" />
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links Pill with Subtle Terminal Numbering (Desktop only) */}
        <nav className="hidden md:flex items-center gap-1 bg-panel border border-border rounded-full p-1.5 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 select-none flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-orange-1 text-white shadow-sm font-bold'
                    : 'text-text-dim hover:text-text hover:bg-panel-sub'
                }`
              }
            >
              <span className="font-mono text-[10px] text-orange-1">/</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right: Desktop Controls */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            type="button"
            aria-label={`${t.header.langAria} (${language.toUpperCase()})`}
            className="flex items-center bg-panel border border-border rounded-full p-1 text-xs font-bold transition-all hover:border-orange-1/60 shadow-sm font-mono"
          >
            <span
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'pt'
                  ? 'bg-orange-1 text-white shadow-sm font-extrabold'
                  : 'text-text-faint hover:text-text'
              }`}
            >
              PT
            </span>
            <span
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-orange-1 text-white shadow-sm font-extrabold'
                  : 'text-text-faint hover:text-text'
              }`}
            >
              EN
            </span>
          </button>

          {/* Animated Theme Switch */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            type="button"
            aria-label={`${t.header.themeAria} ${isDark ? 'light' : 'dark'}`}
            className="w-10 h-10 rounded-full bg-panel border border-border flex items-center justify-center text-text-dim hover:text-orange-1 hover:border-orange-1/80 transition-all shadow-sm overflow-hidden"
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
                  <Sun className="w-4 h-4 text-orange-2" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-orange-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Direct CTA Link with terminal prompt chevron */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contato"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs transition-all shadow-sm group"
            >
              <Terminal className="w-3.5 h-3.5 text-white" />
              <span>{t.header.talkBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Mobile Controls (Theme Toggle & Animated Hamburger) */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            type="button"
            aria-label={`${t.header.themeAria} ${isDark ? 'light' : 'dark'}`}
            className="w-9 h-9 rounded-xl bg-panel border border-border flex items-center justify-center text-text-dim hover:text-orange-1 transition-all shadow-sm"
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
                  <Sun className="w-4 h-4 text-orange-2" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-mobile"
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-orange-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Menu"
            className="w-9 h-9 rounded-xl bg-panel border border-border flex items-center justify-center text-text shadow-sm"
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
                  <X className="w-5 h-5 text-orange-1" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

      </div>

      {/* Mobile Dropdown Menu with Fluid Expand Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden border-t border-border bg-panel px-5 py-5 space-y-4 shadow-xl overflow-hidden"
          >
            {/* Navigation Links with Monospace Prompt Prefixes */}
            <nav className="flex flex-col gap-1.5 font-mono">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-orange-1 text-white'
                        : 'text-text hover:bg-panel-sub'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-orange-1">
                    {link.code}
                  </span>
                </NavLink>
              ))}
            </nav>

            {/* Controls Bar inside mobile menu */}
            <div className="pt-2 border-t border-border/80 flex items-center justify-between gap-3">
              {/* Language Switch */}
              <div className="flex items-center gap-1 bg-panel-sub border border-border rounded-xl p-1 text-xs font-bold font-mono">
                <button
                  type="button"
                  onClick={() => {
                    if (language !== 'pt') toggleLanguage();
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    language === 'pt'
                      ? 'bg-orange-1 text-white font-extrabold shadow-sm'
                      : 'text-text-faint hover:text-text'
                  }`}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (language !== 'en') toggleLanguage();
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    language === 'en'
                      ? 'bg-orange-1 text-white font-extrabold shadow-sm'
                      : 'text-text-faint hover:text-text'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Direct CTA Link in mobile */}
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs transition-all shadow-sm font-mono"
              >
                <span>$ {t.header.talkBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});

Header.displayName = 'Header';