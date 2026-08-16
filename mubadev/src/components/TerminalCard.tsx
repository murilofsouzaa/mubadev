import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const TerminalCard: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      // 1. Aparição do card/container
      tl.from(containerRef.current, {
        opacity: 0,
        y: 12,
        scale: 0.98,
        duration: 0.5,
      })
      // 2. Efeito de digitação no comando "whoami"
      .to(commandRef.current, {
        text: 'whoami',
        duration: 0.6,
        ease: 'none',
      }, '+=0.1')
      // 3. Surgimento sequencial das respostas do terminal
      .from('.terminal-response', {
        opacity: 0,
        x: -8,
        duration: 0.35,
        stagger: 0.12,
      }, '+=0.1')
      // 4. Aparição do prompt final com o cursor
      .from('.terminal-prompt-end', {
        opacity: 0,
        duration: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-panel border border-border rounded-lg shadow-panel overflow-hidden font-mono text-[12.5px] max-w-[380px] w-full"
    >
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-panel-2 border-b border-border-soft">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-orange-3" />
        <span className="ml-1 text-text-faint text-[11px]">whoami.sh</span>
      </div>

      <div className="p-4 text-text-dim">
        {/* Comando inicial */}
        <div className="flex gap-1 mb-2">
          <span className="text-orange-2">$ cat</span>
          <span ref={commandRef} className="text-text" />
          <div className="terminal-response text-text mb-2 font-bold">murilo_f_de_souza.md</div>
        </div>

        {/* Respostas do terminal */}

        <div className="terminal-response mt-3.5 mb-2">
          <span className="text-text-faint">cursando</span> → <span className="text-text">engenharia_de_software</span>
        </div>

        <div className="terminal-response mb-2">
          <span className="text-text-faint">local</span> → <span className="text-text">belo_horizonte</span>
        </div>

        <div className="terminal-response mb-2">
          <span className="text-text-faint">constantemente</span> → <span className="text-text">estudando</span>
        </div>

        {/* Prompt final com o cursor piscando */}
        <div className="terminal-prompt-end mt-3.5 flex items-center">
          <span className="text-orange-2">$</span>
          <span className="inline-block w-[6px] h-[12px] bg-orange-2 ml-1 animate-cursor-blink" />
        </div>
      </div>
    </div>
  );
});

TerminalCard.displayName = 'TerminalCard';