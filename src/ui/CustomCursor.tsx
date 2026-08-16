import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Em dispositivos estritamente touch, nem precisa adicionar o listener de mouse se preferir,
    // mas o CSS já vai esconder o elemento visualmente.
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updatePosition = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;

      const target = e.target as HTMLElement;
      if (target) {
        const computed = window.getComputedStyle(target);
        const isInteractive =
          computed.cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON';

        if (isInteractive) {
          cursor.classList.add('scale-110');
        } else {
          cursor.classList.remove('scale-110'); // Corrigido de scale-10 para scale-110 (ou sua classe anterior)
        }
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-5 h-5 bg-[#ff6b00] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform"
    />
  );
};