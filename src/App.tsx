import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/tech/Technologies';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/Footer';
import { CustomCursor } from './ui/CustomCursor';
import { ScrollToTop } from './ui/ScrollToTop';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomCursor />
        <div className="min-h-screen bg-bg text-text selection:bg-orange-2 selection:text-[#0a0a0a]">
          <Header />
          <main className="max-w-[1080px] mx-auto px-6">
            <Hero />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;