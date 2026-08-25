import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const Header: React.FC = React.memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-[100] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[10px] border-b border-border-soft">
      <div className="max-w-[1080px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-shareTech font-semibold text-[16px] tracking-[0.5px] text-text text-orange-2">
          murilo@fedora/~#
        </div>

        <nav className="hidden sm:flex gap-[2px]">
          <a href="#inicio" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> {t.nav.home}
          </a>
          <a href="#sobre" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> {t.nav.about}
          </a>
          <a href="#projetos" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> {t.nav.projects}
          </a>
          <a href="#contato" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Botão de Idioma */}
          <button
            onClick={toggleLanguage}
            type="button"
            aria-label={`${t.header.langAria} (${language.toUpperCase()})`}
            className="group flex items-center gap-2 bg-panel-2 border border-border text-text font-mono text-[11px] px-2.5 py-1.5 cursor-pointer rounded transition-all duration-200 hover:border-orange-1 hover:shadow-[0_0_10px_rgba(255,107,0,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-2"
          >
            <span className="text-orange-2 font-semibold group-hover:text-orange-1">--lang</span>
            <div className="flex items-center gap-1 bg-panel border border-border px-1.5 py-0.5 rounded text-[10px]">
              <Globe className="w-3 h-3 text-orange-2" />
              <span className="text-text-dim group-hover:text-text font-bold uppercase tracking-wider">
                {language.toUpperCase()}
              </span>
            </div>
          </button>

          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`${t.header.themeAria} ${isDark ? 'light' : 'dark'}`}
            className="group flex items-center gap-2 bg-panel-2 border border-border text-text font-mono text-[11px] px-2.5 py-1.5 cursor-pointer rounded transition-all duration-200 hover:border-orange-1 hover:shadow-[0_0_10px_rgba(255,107,0,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-2"
          >
            {/* Flag e Ícone */}
            <span className="text-orange-2 font-semibold group-hover:text-orange-1">--theme</span>

            {/* Toggle Visual do Terminal */}
            <div className="flex items-center gap-1.5 bg-panel border border-border px-1.5 py-0.5 rounded text-[10px]">
              {/* Ícone Sol / Lua */}
              {isDark ? (
                <svg className="w-3 h-3 text-orange-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-3 h-3 text-orange-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}

              {/* Badge com estado do modo */}
              <span className="text-text-dim group-hover:text-text font-bold uppercase tracking-wider">
                {theme}
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';