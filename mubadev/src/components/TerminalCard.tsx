import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const TerminalCard: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.terminal-line', {
        opacity: 0,
        x: -10,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, containerRef);

    // Limpeza rigorosa do GSAP na desmontagem
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-panel border border-border rounded-lg shadow-panel overflow-hidden font-mono text-[12.5px] max-w-[380px] w-full"
    >
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-panel-2 border-b border-border-soft">
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-orange-3" />
        <span className="ml-1 text-text-faint text-[11px]">whoami.sh</span>
      </div>
      <div className="p-4 text-text-dim">
        <div className="terminal-line mb-2">
          <span className="text-orange-2">$</span> whoami
        </div>
        <div className="terminal-line text-text mb-2">murilo</div>
        <div className="terminal-line mt-3.5 mb-2">
          <span className="text-text-faint">status</span> → <span className="text-text">disponível</span>
        </div>
        <div className="terminal-line mb-2">
          <span className="text-text-faint">local</span> → <span className="text-text">Belo Horizonte, BR</span>
        </div>
        <div className="terminal-line mb-2">
          <span className="text-text-faint">foco</span> → <span className="text-text">full-stack</span>
        </div>
        <div className="terminal-line mt-3.5">
          <span className="text-orange-2">$</span>
          <span className="inline-block w-[6px] h-[12px] bg-orange-2 ml-1 align-text-bottom animate-cursor-blink" />
        </div>
      </div>
    </div>
  );
});

TerminalCard.displayName = 'TerminalCard';