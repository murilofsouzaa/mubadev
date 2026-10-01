import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BOOKS_DATA } from '../data/books';

export const BooksPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
  }, []);

  const readBooks = BOOKS_DATA.filter((b) => b.status === 'read');
  const readingBooks = BOOKS_DATA.filter((b) => b.status === 'reading');

  return (
    <div data-theme="light" className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#000000]">
      {/* Header */}
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-40 pb-20 sm:pb-32 select-none">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-text-dim hover:text-text transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'pt' ? 'Voltar para o início' : 'Back to home'}</span>
          </a>
        </motion.div>

        {/* Page Title: Left-aligned 5xl text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 space-y-3"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-text leading-[1.08]">
            {language === 'pt' ? 'Livros' : 'Books'}
            <span>.</span>
          </h1>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {/* Livros Lidos */}
          <section className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-border/80 pb-3">
              <CheckCircle2 className="w-4 h-4 text-text-dim" />
              <h2 className="text-sm font-sans font-bold tracking-tight uppercase text-text">
                {language === 'pt' ? 'Livros Lidos' : 'Books Read'}
              </h2>
              <span className="text-xs font-sans text-text-faint">({readBooks.length})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {readBooks.map((book) => (
                <motion.article
                  key={book.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col space-y-4"
                >
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative w-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="relative aspect-[1/1.42] w-full rounded overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </a>

                  <div className="space-y-2">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5"
                    >
                      <h3 className="text-lg font-sans font-bold text-text tracking-tight group-hover:text-red-600 transition-colors">
                        {book.title}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-text-dim group-hover:text-red-600 opacity-60 group-hover:opacity-100 transition-all" />
                    </a>

                    <p className="text-xs font-sans font-medium text-text-dim">
                      {book.author}
                    </p>

                    {book.subtitle && (
                      <p className="text-xs font-sans text-text-faint leading-relaxed">
                        {language === 'pt' ? book.subtitle.pt : book.subtitle.en}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Próximos a serem absorvidos */}
          <section className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-border/80 pb-3">
              <Clock className="w-4 h-4 text-text-dim" />
              <h2 className="text-sm font-sans font-bold tracking-tight uppercase text-text">
                {language === 'pt' ? 'Próximos a serem absorvidos' : 'Next to be absorbed'}
              </h2>
              <span className="text-xs font-sans text-text-faint">({readingBooks.length})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {readingBooks.map((book) => (
                <motion.article
                  key={book.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col space-y-4"
                >
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative w-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="relative aspect-[1/1.42] w-full rounded overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </a>

                  <div className="space-y-2">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5"
                    >
                      <h3 className="text-lg font-sans font-bold text-text tracking-tight group-hover:text-red-600 transition-colors">
                        {book.title}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-text-dim group-hover:text-red-600 opacity-60 group-hover:opacity-100 transition-all" />
                    </a>

                    <p className="text-xs font-sans font-medium text-text-dim">
                      {book.author}
                    </p>

                    {book.subtitle && (
                      <p className="text-xs font-sans text-text-faint leading-relaxed">
                        {language === 'pt' ? book.subtitle.pt : book.subtitle.en}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default BooksPage;
