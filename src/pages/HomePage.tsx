import React, { useRef } from 'react';
import { Link } from '../context/RouterContext';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import { Technologies } from '../components/tech/Technologies';
import { Download, ArrowRight, MapPin, ArrowUpRight, Code2, Briefcase } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP Smooth Stagger Entry Animation on Mount
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
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.5'
        )
        .from(
          '.gsap-hero-meta',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
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
      
      {/* Hero Section: Centered on Mobile, Left-aligned on Desktop */}
      <section ref={heroRef} className="pt-2 sm:pt-10 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Greeting & Expressive Mixed Font Headline */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-2 sm:space-y-3 gsap-hero-title">
              <span className="text-lg sm:text-2xl font-bold text-text-dim block tracking-tight">
                {t.hero.greeting} <span className="text-text font-extrabold">Murilo Freitas</span>
              </span>

              {/* Expressive Mixed Font Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-text tracking-tight leading-[1.28] sm:leading-[1.24]">
                {language === 'pt' ? (
                  <>
                    Engenheiro de Software para tirar o{' '}
                    <span className="font-serif-italic text-4xl sm:text-6xl lg:text-[66px] text-orange-1 font-normal block sm:inline my-1 sm:my-0">
                      sistema da sua empresa
                    </span>{' '}
                    do papel.
                  </>
                ) : (
                  <>
                    Software Engineer to bring your{' '}
                    <span className="font-serif-italic text-4xl sm:text-6xl lg:text-[66px] text-orange-1 font-normal block sm:inline my-1 sm:my-0">
                      company's digital vision
                    </span>{' '}
                    to life.
                  </>
                )}
              </h1>
            </div>
          </div>

          {/* Right Column: Detailed Information, Focus & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 lg:pl-6 lg:pt-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Description */}
            <p className="gsap-hero-desc text-base sm:text-lg text-text-dim leading-[1.8] tracking-normal max-w-xl">
              {t.hero.description}
            </p>

            {/* Meta Tags with subtle terminal styling */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-text-faint font-mono">
              <div className="gsap-hero-meta flex items-center gap-2 px-3.5 py-2 rounded-xl bg-panel-sub border border-border">
                <MapPin className="w-3.5 h-3.5 text-orange-1" />
                <span>$ loc: {t.hero.location}</span>
              </div>
              <div className="gsap-hero-meta flex items-center gap-2 px-3.5 py-2 rounded-xl bg-panel-sub border border-border">
                <Briefcase className="w-3.5 h-3.5 text-orange-1" />
                <span>$ status: {t.hero.status}</span>
              </div>
            </div>

            {/* Action Buttons with Framer Motion interactive feedback */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2 w-full">
              {/* View Projects Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="gsap-hero-btn">
                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-sm transition-all shadow-sm hover:shadow-orange-glow group"
                >
                  <span>{t.hero.viewProjects}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Download CV Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="gsap-hero-btn">
                <a
                  href={t.hero.cvFilePath}
                  download={t.hero.cvFileName}
                  aria-label={t.hero.downloadAria}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-panel hover:bg-panel-sub text-text font-bold text-sm transition-all shadow-sm group border border-border"
                >
                  <Download className="w-4 h-4 text-orange-1 group-hover:scale-110 transition-transform" />
                  <span>{t.hero.downloadCv}</span>
                </a>
              </motion.div>

              {/* Contact Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="gsap-hero-btn">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl text-text-dim hover:text-text font-semibold text-sm transition-all hover:bg-panel border border-border/60"
                >
                  <span>{t.hero.contactMe}</span>
                  <ArrowUpRight className="w-4 h-4" />
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative p-6 sm:p-14 rounded-3xl bg-gradient-to-br from-panel via-panel-sub to-panel shadow-clean-card overflow-hidden border-0"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-1/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 max-w-2xl space-y-5 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="w-12 h-12 rounded-2xl bg-orange-1/10 flex items-center justify-center text-orange-1 mb-2">
            <Code2 className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight leading-[1.3]">
            {language === 'pt' ? (
              <>
                Precisa de um sistema sob medida para tirar sua{' '}
                <span className="font-serif-italic text-3xl sm:text-5xl text-orange-1 font-normal block sm:inline my-1 sm:my-0">
                  ideia do papel?
                </span>
              </>
            ) : (
              <>
                Need a custom web platform to turn your{' '}
                <span className="font-serif-italic text-3xl sm:text-5xl text-orange-1 font-normal block sm:inline my-1 sm:my-0">
                  vision into reality?
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-text-dim leading-relaxed">
            {t.homeCta.subtitle}
          </p>

          <div className="pt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-sm transition-all shadow-sm hover:shadow-orange-glow group"
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
