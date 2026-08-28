import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      const target = e.target as HTMLElement;
      if (target) {
        const computed = window.getComputedStyle(target);
        isHovered =
          computed.cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null;
      }
    };

    let animId: number;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      const scale = isHovered ? 1.5 : 1.0;
      const opacity = isHovered ? 0.9 : 0.45;
      ring.style.transform = `translate3d(${ringX - 12}px, ${ringY - 12}px, 0) scale(${scale})`;
      ring.style.opacity = `${opacity}`;

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full border border-orange-1 pointer-events-none z-[9998] will-change-transform transition-transform duration-75"
      />
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 bg-orange-1 rounded-full pointer-events-none z-[9999] will-change-transform shadow-[0_0_8px_#ff6b00]"
      />
    </>
  );
};