import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './ui/ScrollToTop';
import { MiniPlayer } from './components/player/MiniPlayer';
import { GothamCityscape } from './components/scene/GothamCityscape';

const AppContent: React.FC = () => {
  const { pathname } = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  // Clean route matching by endpoint
  const renderCurrentPage = () => {
    const clean = pathname.toLowerCase();

    if (clean === '/projetos' || clean === '/projects' || clean.startsWith('/projetos') || clean.startsWith('/projects')) {
      return <ProjectsPage />;
    }

    if (clean === '/sobre' || clean === '/about' || clean.startsWith('/sobre') || clean.startsWith('/about')) {
      return <AboutPage />;
    }

    if (clean === '/contato' || clean === '/contact' || clean.startsWith('/contato') || clean.startsWith('/contact')) {
      return <ContactPage />;
    }

    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-gradient-to-b dark:from-[#09090b] dark:via-[#060608] dark:to-[#000000] text-text selection:bg-[#EA580C] selection:text-white relative flex flex-col justify-between transition-colors overflow-x-hidden">
      {/* Restored Art Deco Cityscape Framing the Hero Section */}
      <GothamCityscape />

      {/* Retro Noir Ambient Red Glows, Seamless Infinite Clouds & Depth Elements (Dark Mode Only) */}
      <div className="hidden dark:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Seamless Continuous Atmospheric Cloud Conveyor */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          
          {/* Layer 1: Foreground Slow Drift Stream (Translates 0 to -50% infinitely) */}
          <div className="animate-clouds-layer-1 absolute top-0 left-0 h-[520px]">
            {/* Unit A */}
            <div className="w-1/2 h-full relative flex-shrink-0">
              <div className="absolute top-4 left-[10%] w-[550px] h-[340px] rounded-full bg-gradient-to-r from-transparent via-[#EA580C]/12 to-transparent blur-[75px]" />
              <div className="absolute top-28 left-[50%] w-[600px] h-[280px] rounded-full bg-gradient-to-r from-transparent via-[#8B0000]/14 to-transparent blur-[85px]" />
              <div className="absolute -top-10 left-[80%] w-[450px] h-[320px] rounded-full bg-gradient-to-r from-transparent via-[#EA580C]/8 to-transparent blur-[65px]" />
            </div>
            {/* Unit A Duplicated Seamlessly */}
            <div className="w-1/2 h-full relative flex-shrink-0">
              <div className="absolute top-4 left-[10%] w-[550px] h-[340px] rounded-full bg-gradient-to-r from-transparent via-[#EA580C]/12 to-transparent blur-[75px]" />
              <div className="absolute top-28 left-[50%] w-[600px] h-[280px] rounded-full bg-gradient-to-r from-transparent via-[#8B0000]/14 to-transparent blur-[85px]" />
              <div className="absolute -top-10 left-[80%] w-[450px] h-[320px] rounded-full bg-gradient-to-r from-transparent via-[#EA580C]/8 to-transparent blur-[65px]" />
            </div>
          </div>

          {/* Layer 2: Deep Atmospheric Counter-Drift (Translates in reverse infinitely) */}
          <div className="animate-clouds-layer-2 absolute top-12 left-0 h-[480px]">
            {/* Unit B */}
            <div className="w-1/2 h-full relative flex-shrink-0">
              <div className="absolute top-8 left-[25%] w-[650px] h-[350px] rounded-full bg-gradient-to-r from-transparent via-[#180406]/35 to-transparent blur-[90px]" />
              <div className="absolute top-36 left-[65%] w-[500px] h-[260px] rounded-full bg-gradient-to-r from-transparent via-[#EA580C]/10 to-transparent blur-[70px]" />
            </div>
            {/* Unit B Duplicated Seamlessly */}
            <div className="w-1/2 h-full relative flex-shrink-0">
              <div className="absolute top-8 left-[25%] w-[650px] h-[350px] rounded-full bg-gradient-to-r from-transparent via-[#180406]/35 to-transparent blur-[90px]" />
              <div className="absolute top-36 left-[65%] w-[500px] h-[260px] rounded-full bg-gradient-to-r from-transparent via-[#EA580C]/10 to-transparent blur-[70px]" />
            </div>
          </div>

        </div>

        {/* Top-Right Moody Red-Amber Spotlight */}
        <div className="absolute -top-40 right-[-10%] w-[650px] h-[650px] rounded-full bg-[#EA580C]/15 blur-[140px] pointer-events-none" />
        {/* Mid-Left Deep Carmine Noir Glow */}
        <div className="absolute top-[30%] -left-32 w-[600px] h-[600px] rounded-full bg-[#8B0000]/20 blur-[160px] pointer-events-none" />
        {/* Bottom Ambient Red Horizon */}
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[450px] bg-[#4a0d14]/25 blur-[160px] pointer-events-none" />
        {/* Vintage Analog Grain Texture */}
        <div className="absolute inset-0 vintage-grain opacity-50 pointer-events-none" />
      </div>

      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#EA580C] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(188,57,8,0.6)]"
      />

      {/* Navigation Header (Outside of blurred content so it stays 100% crisp on mobile dropdown) */}
      <Header />

      {/* Main Page Content Wrapper (Blurred when Modal or Mobile Menu opens) */}
      <div id="page-content" className="flex-1 flex flex-col justify-between min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] w-full relative z-10">
        {/* Main Content Area per Endpoint with generous mobile margins */}
        <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-10">
          {renderCurrentPage()}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Persistent Floating Mini Jazz Audio Player */}
      <MiniPlayer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider>
          <AudioPlayerProvider>
            <AppContent />
          </AudioPlayerProvider>
        </RouterProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;