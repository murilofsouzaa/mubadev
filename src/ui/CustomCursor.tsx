import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updatePosition = (e: MouseEvent) => {
      // Posiciona instantaneamente sem passar por re-renderizações do React
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
          cursor.classList.remove('scale-10');
        }
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-[#ff6b00] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform"
    />
  );
};