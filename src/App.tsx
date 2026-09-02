import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsList } from './components/projects/ProjectsList';
import { ThemeCircleScroll } from './components/ThemeCircleScroll';
import { AboutSection } from './components/AboutSection';
import { BeyondWorkSection } from './components/BeyondWorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  // Ultra-smooth river glide momentum scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // River-smooth glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen relative flex flex-col bg-[#F5F2EB]">
      {/* Top minimal header */}
      <Header />

      {/* Ultra-minimal Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white mix-blend-difference origin-left z-50 pointer-events-none"
      />

      {/* 1. TOP PART: Paper Background Canvas */}
      <div data-theme="light" className="w-full bg-[#F5F2EB] text-[#000000]">
        <main className="max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-12">
          {/* Centered Hero Section */}
          <Hero />

          {/* Streamlined Projects Section */}
          <ProjectsList />

          {/* Professional & Academic About Me Section */}
          <AboutSection />
        </main>
      </div>

      {/* 2. THE SCROLL EXPANDING CIRCLE: Expands to black with 'Além do trabalho' */}
      <ThemeCircleScroll />

      {/* 3. LOWER PART: Pure Black Canvas filled by the circle */}
      <div data-theme="dark" className="w-full bg-[#000000] text-[#FFFFFF]">
        <main className="max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-12">
          {/* Beyond Work (Personal passions, study, gym, games, literature, cinema) */}
          <BeyondWorkSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
