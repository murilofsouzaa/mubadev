import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-[100] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[10px] border-b border-border-soft">
      <div className="max-w-[1080px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono font-semibold text-[15px] tracking-[0.5px]">
          <span className="text-orange-2">&lt;/</span>
          murilo
          <span className="text-orange-2">&gt;</span>
        </div>

        <nav className="hidden sm:flex gap-[2px]">
          <a href="#inicio" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> ~/inicio
          </a>
          <a href="#sobre" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> ~/sobre
          </a>
          <a href="#projetos" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> ~/projetos
          </a>
          <a href="#contato" className="font-mono text-[13px] text-text-dim px-3.5 py-2 rounded-[3px] transition-all duration-150 hover:text-orange-1 hover:bg-panel-2 group">
            <span className="text-orange-4 group-hover:text-orange-2">cd</span> ~/contato
          </a>
        </nav>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-panel-2 border border-border text-text-dim font-mono text-[11px] px-3 py-[7px] cursor-pointer rounded transition-all duration-200 hover:border-orange-3 hover:text-orange-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-2 focus-visible:outline-offset-2"
          aria-label="Alternar tema"
        >
          <span className="text-orange-2">--tema</span>
          <span>{theme}</span>
        </button>
      </div>
    </header>
  );
});

Header.displayName = 'Header';