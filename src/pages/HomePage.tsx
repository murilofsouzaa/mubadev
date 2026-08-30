import React, { useRef } from 'react';
import { Link } from '../context/RouterContext';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import { Technologies } from '../components/tech/Technologies';
import {
  Download,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP Smooth Entry Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.gsap-hero-title', {
        y: 35,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          '.gsap-hero-desc',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.gsap-hero-btn',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          '-=0.3'
        );
    },
    { scope: heroRef }
  );

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* Hero Section: 2-Column Layout */}
      <section ref={heroRef} className="pt-2 sm:pt-10 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Prominent Name & Expressive Subheadline (6 cols) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="space-y-2 sm:space-y-3.5 gsap-hero-title">
              {/* Prominent Name in Maximum Evidence */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-stone-950 dark:text-zinc-100 tracking-tight leading-tight">
                Murilo Freitas<span className="text-[#EA580C]">.</span>
              </h1>

              {/* Expressive Mixed Font Sub-Headline */}
              <p className="text-lg sm:text-2xl lg:text-4xl font-bold text-stone-800 dark:text-zinc-200 tracking-tight leading-snug sm:leading-tight max-w-xl">
                {language === 'pt' ? (
                  <>
                    Engenheiro de Software para tirar o{' '}
                    <span className="font-serif-italic text-xl sm:text-3xl lg:text-5xl text-[#EA580C] font-normal drop-shadow-[0_0_20px_rgba(234,88,12,0.25)] inline">
                      sistema da sua empresa
                    </span>{' '}
                    do papel.
                  </>
                ) : (
                  <>
                    Software Engineer to bring your{' '}
                    <span className="font-serif-italic text-xl sm:text-3xl lg:text-5xl text-[#EA580C] font-normal drop-shadow-[0_0_20px_rgba(234,88,12,0.25)] inline">
                      company's digital vision
                    </span>{' '}
                    to life.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Description & Action Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 lg:pl-6 lg:pt-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Description */}
            <p className="gsap-hero-desc text-base sm:text-lg text-stone-700 dark:text-text-dim leading-[1.85] tracking-normal max-w-xl">
              {language === 'pt' ? (
                <>
                  Desenvolvimento de <span className="font-bold text-stone-950 dark:text-text">sistemas web completos</span>,{' '}
                  <span className="font-bold text-stone-950 dark:text-text">plataformas escaláveis</span> e{' '}
                  <span className="font-bold text-stone-950 dark:text-text">produtos digitais sob medida</span>. Do design de interfaces reativas e elegantes até{' '}
                  <span className="font-bold text-stone-950 dark:text-text">arquiteturas de backend robustas em produção</span>.
                </>
              ) : (
                <>
                  <span className="font-bold text-stone-950 dark:text-text">End-to-end web system development</span>,{' '}
                  <span className="font-bold text-stone-950 dark:text-text">scalable platforms</span>, and{' '}
                  <span className="font-bold text-stone-950 dark:text-text">custom digital products</span>. From intuitive, reactive UI design to{' '}
                  <span className="font-bold text-stone-950 dark:text-text">robust backend architectures in production</span>.
                </>
              )}
            </p>

            {/* Action Buttons - Full-width on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2 w-full font-sans font-semibold">
              {/* View Projects Button (Solid Primary) */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto gsap-hero-btn">
                <Link
                  to="/projetos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#EA580C] hover:bg-[#D9480F] text-white font-bold text-xs sm:text-sm transition-all shadow-md group font-sans"
                >
                  <span>{t.hero.viewProjects}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Download CV Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto gsap-hero-btn">
                <a
                  href={t.hero.cvFilePath}
                  download={t.hero.cvFileName}
                  aria-label={t.hero.downloadAria}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/70 dark:bg-[#140608]/40 border border-stone-300 dark:border-[#EA580C]/30 text-stone-900 dark:text-zinc-200 hover:border-stone-400 hover:bg-stone-100/80 hover:text-stone-950 dark:hover:bg-[#EA580C]/15 dark:hover:border-[#EA580C] dark:hover:text-white dark:hover:shadow-[0_0_22px_rgba(188,57,8,0.35)] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm group font-sans"
                >
                  <Download className="w-4 h-4 text-[#EA580C] group-hover:scale-110 group-hover:-translate-y-0.5 transition-all" />
                  <span>{t.hero.downloadCv}</span>
                </a>
              </motion.div>

              {/* Contact Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto gsap-hero-btn">
                <Link
                  to="/contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/70 dark:bg-[#140608]/40 border border-stone-300 dark:border-[#EA580C]/30 text-stone-900 dark:text-zinc-200 hover:border-stone-400 hover:bg-stone-100/80 hover:text-stone-950 dark:hover:bg-gradient-to-r dark:hover:from-[#EA580C]/25 dark:hover:to-[#8B0000]/25 dark:hover:border-[#EA580C] dark:hover:text-white dark:hover:shadow-[0_0_22px_rgba(188,57,8,0.4)] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm group font-sans"
                >
                  <Mail className="w-4 h-4 text-[#EA580C] group-hover:scale-110 transition-transform" />
                  <span>{t.hero.contactMe}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* Infinite Continuous Tech Stack Ribbon */}
      <Technologies />

      {/* Product & Custom Systems Sales CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative p-6 sm:p-14 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800 shadow-sm overflow-hidden backdrop-blur-md"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 max-w-2xl space-y-5 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="w-12 h-12 rounded-2xl bg-stone-100 dark:bg-zinc-800/80 border border-stone-200 dark:border-zinc-700 flex items-center justify-center text-[#EA580C] mb-2 shadow-sm">
            <Code2 className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-950 dark:text-white tracking-tight leading-[1.3]">
            {language === 'pt' ? (
              <>
                Precisa de um sistema sob medida para tirar sua{' '}
                <span className="font-serif-italic text-3xl sm:text-5xl text-[#EA580C] font-normal block sm:inline my-1 sm:my-0 drop-shadow-[0_0_20px_rgba(188,57,8,0.25)]">
                  ideia do papel?
                </span>
              </>
            ) : (
              <>
                Need a custom web platform to turn your{' '}
                <span className="font-serif-italic text-3xl sm:text-5xl text-[#EA580C] font-normal block sm:inline my-1 sm:my-0 drop-shadow-[0_0_20px_rgba(188,57,8,0.25)]">
                  vision into reality?
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-stone-700 dark:text-zinc-300 leading-relaxed">
            {t.homeCta.subtitle}
          </p>

          <div className="pt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#D9480F] text-white font-extrabold text-sm transition-all shadow-md group"
            >
              <span>{t.homeCta.button}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
