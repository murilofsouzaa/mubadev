import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updatePosition = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, [role="button"], #projetos .group, #projetos article, .project-card') ||
          window.getComputedStyle(target).cursor === 'pointer'
        );

        if (isInteractive) {
          cursor.classList.add('is-pointer');
        } else {
          cursor.classList.remove('is-pointer');
        }
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-transform duration-75 ease-out origin-top-left"
    >
      {/* Seta Padrão Laranja */}
      <svg
        className="w-6 h-6 text-[#ff6b00] drop-shadow-md [.is-pointer_&]:hidden -translate-x-[2px] -translate-y-[1px]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 3l7 18 3-7 7-3L3 3z" />
      </svg>

      {/* Ícone de Pointer Branco ao passar em botões ou cards de projetos */}
      <svg
        className="w-6 h-6 text-black drop-shadow-md hidden [.is-pointer_&]:block -translate-x-[6px] -translate-y-[2px]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a1 1 0 0 0-1 1v7.17l-1.59-1.59a1 1 0 0 0-1.41 1.41l3.5 3.5a1 1 0 0 0 1.41 0l3.5-3.5a1 1 0 0 0-1.41-1.41L13 10.17V3a1 1 0 0 0-1-1z" />
        <path d="M19.5 11h-2.07A6.974 6.974 0 0 0 13 8.5V6a3 3 0 0 0-6 0v7.17l-1.39-1.39a2 2 0 0 0-2.82 2.82l3.71 3.71A7.002 7.002 0 0 0 13 22h1.5a7.502 7.502 0 0 0 7.5-7.5v-1a2 2 0 0 0-2-2.5z" />
      </svg>
    </div>
  );
};