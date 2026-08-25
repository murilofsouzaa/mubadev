import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TerminalCard } from './TerminalCard';
import { useLanguage } from '../context/LanguageContext';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';
const COMMAND_TEXT = 'whoami --verbose';

export const Hero: React.FC = React.memo(() => {
  const { t } = useLanguage();
  const words = t.hero.words;

  const [typedCommand, setTypedCommand] = useState('');
  const [isCommandDone, setIsCommandDone] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const animationFrameRef = useRef<number | null>(null);

  // 1. Efeito de digitação suave do comando inicial
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < COMMAND_TEXT.length) {
        setTypedCommand(COMMAND_TEXT.slice(0, index + 1));
        index++;
      } else {
        setIsCommandDone(true);
        clearInterval(timer);
      }
    }, 65);

    return () => clearInterval(timer);
  }, []);

  // 2. Animação de Scramble / Glitch
  useEffect(() => {
    if (!isCommandDone) return;

    const currentWords = words;
    const targetWord = currentWords[textIndex % currentWords.length] || currentWords[0];
    const totalFrames = 22;
    let frame = 0;
    let lastFrameTime = performance.now();
    const frameInterval = 35;

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        frame++;
        lastFrameTime = currentTime;

        const progress = frame / totalFrames;
        const scrambled = targetWord
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < targetWord.length * progress) {
              return targetWord[idx];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        setDisplayText(scrambled);
      }

      if (frame < totalFrames) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetWord);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const switchTimeout = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % currentWords.length);
    }, 3800);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(switchTimeout);
    };
  }, [textIndex, isCommandDone, words]);

  return (
    <section id="inicio" className="py-[60px] md:py-[90px] grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-[48px] items-center">
      {/* LADO ESQUERDO: Terminal Card */}
      <div className="flex justify-start w-full order-2 md:order-1">
        <TerminalCard />
      </div>

      {/* LADO DIREITO: Apresentação Terminal UX */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="font-mono order-1 md:order-2"
      >
        {/* Prompt & Glitch Title */}
        <div className="mb-6 select-none">
          <div className="text-[13px] mb-2 flex items-center gap-2 font-bold text-text-dim">
            <span className="text-orange-1">root@fedora</span>
            <span className="text-text-faint">:</span>
            <span className="text-orange-3">~#</span>
            <span className="text-text tracking-wide">{typedCommand}</span>

            {/* Cursor piscante durante a digitação */}
            {!isCommandDone && (
              <span className="inline-block w-2 h-4 bg-orange-1 animate-[ping_0.8s_steps(1)_infinite]" />
            )}

            {/* Status de execução */}
            {isCommandDone && (
              <span className="ml-auto text-[10px] text-text-faint border border-border px-1.5 py-0.5 rounded bg-panel/60 font-normal">
                exit: 0
              </span>
            )}
          </div>

          <div className="relative overflow-hidden bg-panel border-l-2 border-orange-1 pl-4 py-3 min-h-[76px] flex items-center rounded-r shadow-sm">
            {/* Linhas de varredura CRT */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.05)_50%)] dark:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />

            <h1 className="text-[28px] sm:text-[38px] md:text-[44px] font-bold leading-none tracking-tight flex items-center relative z-10">
              <span className="text-orange-1 mr-3">&gt;</span>
              <span className="text-text uppercase font-mono">
                {isCommandDone ? displayText : ''}
              </span>
            </h1>
          </div>
        </div>

        {/* System Info Bar */}
        <div className="border border-border bg-panel p-3 rounded-md mb-6 text-[11px] text-text-dim backdrop-blur-sm">
          <div className="flex justify-between items-center border-b border-border pb-2 mb-2">
            <span className="text-orange-1 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-1 animate-ping inline-block" />
              {t.hero.status}
            </span>
            <span className="text-text-faint tracking-wider">BAUD: 115200</span>
          </div>
          <div className="flex justify-between text-text-faint">
            <span>OS: Fedora Linux x86_64</span>
            <span>HOST: muba-workstation</span>
          </div>
        </div>

        {/* Botão de Download estilizado com o tema terminal */}
        <a
          href={t.hero.cvFilePath} 
          download={t.hero.cvFileName}
          aria-label={t.hero.downloadAria}
          className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-orange-1 border border-orange-400 bg-panel hover:bg-orange-1/10 transition-all rounded cursor-pointer"
        >
          <span>&gt;</span>
          <span>{t.hero.downloadCv}</span>
        </a>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';