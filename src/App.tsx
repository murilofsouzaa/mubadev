import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './ui/ScrollToTop';

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
    <div className="min-h-screen bg-bg text-text selection:bg-orange-1 selection:text-white relative flex flex-col justify-between transition-colors">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-orange-1 origin-left z-50 pointer-events-none"
      />

      {/* Main Page Content Wrapper (Blurred when Modal opens) */}
      <div id="page-content" className="flex-1 flex flex-col justify-between min-h-screen w-full">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Area per Endpoint with generous mobile margins */}
        <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-10">
          {renderCurrentPage()}
        </main>

        {/* Footer */}
        <Footer />
      </div>

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
          <AppContent />
        </RouterProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;