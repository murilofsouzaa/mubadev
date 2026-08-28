import React, { useRef, useState, useEffect } from 'react';
import { Link } from '../context/RouterContext';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import { Technologies } from '../components/tech/Technologies';
import { Download, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';

const HERO_NAMES = ['Murilo Freitas', 'Mura'];

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // Terminal typewriter animation switching between "Murilo Freitas" and "Mura"
  const [nameIndex, setNameIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState('Murilo Freitas');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTarget = HERO_NAMES[nameIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedName === currentTarget) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayedName === '') {
      // Move to next name when deleted
      setIsDeleting(false);
      setNameIndex((prev) => (prev + 1) % HERO_NAMES.length);
    } else {
      // Typing / deleting character speed
      const speed = isDeleting ? 65 : 110;
      timer = setTimeout(() => {
        setDisplayedName((prev) =>
          isDeleting
            ? currentTarget.substring(0, prev.length - 1)
            : currentTarget.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedName, isDeleting, nameIndex]);

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
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.gsap-hero-terminal',
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
      
      {/* Hero Section: Centered on Mobile, Left-aligned on Desktop */}
      <section ref={heroRef} className="pt-2 sm:pt-10 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Greeting & Expressive Mixed Font Headline with Terminal Name Switcher */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="space-y-2 sm:space-y-3 gsap-hero-title">
              <div className="text-lg sm:text-2xl font-bold text-text-dim flex items-center justify-center lg:justify-start gap-2 tracking-tight flex-wrap">
                <span>{t.hero.greeting}</span>
                <span className="font-zeyada text-text font-bold text-2xl sm:text-4xl inline-flex items-center bg-panel-sub border border-border px-3 py-0.5 rounded-lg shadow-sm tracking-wide">
                  <span className="text-orange-1 mr-1.5 font-mono font-bold text-base sm:text-lg">&gt;</span>
                  <span className="text-text">{displayedName}</span>
                  <span className="inline-block w-2 h-4 sm:w-2.5 sm:h-5 bg-orange-1 ml-1 animate-pulse" />
                </span>
              </div>

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

          {/* Right Column: Detailed Information, Server/Terminal Telemetry & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 lg:pl-6 lg:pt-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Description with key terms highlighted in bold */}
            <p className="gsap-hero-desc text-base sm:text-lg text-text-dim leading-[1.8] tracking-normal max-w-xl">
              {language === 'pt' ? (
                <>
                  Desenvolvimento de <span className="font-bold text-text">sistemas web completos</span>,{' '}
                  <span className="font-bold text-text">plataformas escaláveis</span> e{' '}
                  <span className="font-bold text-text">produtos digitais sob medida</span>. Do design de interfaces reativas e intuitivas até{' '}
                  <span className="font-bold text-text">arquiteturas de backend robustas em produção</span>.
                </>
              ) : (
                <>
                  <span className="font-bold text-text">End-to-end web system development</span>,{' '}
                  <span className="font-bold text-text">scalable platforms</span>, and{' '}
                  <span className="font-bold text-text">custom digital products</span>. From reactive, intuitive UI design to{' '}
                  <span className="font-bold text-text">robust backend architectures in production</span>.
                </>
              )}
            </p>

            {/* Server / Terminal Telemetry Card */}
            <div className="gsap-hero-terminal w-full max-w-xl p-3.5 sm:p-4 rounded-2xl bg-panel-sub border border-border font-mono text-xs text-text-dim space-y-2.5 text-left shadow-sm">
              <div className="flex items-center justify-between border-b border-border/60 pb-2 text-[11px] text-text-faint">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-1.5 font-medium text-text-dim">systemctl status server.service</span>
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px] sm:text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE (RUNNING)
                </span>
              </div>
              <div className="space-y-1.5 text-xs font-mono pt-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-orange-1 font-bold">&gt;</span>
                  <span className="text-text-faint">$ loc:</span>
                  <span className="text-text font-medium">{t.hero.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-1 font-bold">&gt;</span>
                  <span className="text-text-faint">$ status:</span>
                  <span className="text-text font-medium">{t.hero.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-1 font-bold">&gt;</span>
                  <span className="text-text-faint">$ {language === 'pt' ? 'estudando:' : 'studying:'}</span>
                  <span className="text-emerald-400 font-semibold">{language === 'pt' ? 'sistemas operacionais' : 'operating systems'}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons with Framer Motion interactive feedback & Terminal Styling */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-1 w-full font-mono">
              {/* View Projects Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="gsap-hero-btn">
                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-orange-glow group"
                >
                  <span className="text-white/80 font-normal">$</span>
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-panel hover:bg-panel-sub text-text font-bold text-xs sm:text-sm transition-all shadow-sm group border border-border"
                >
                  <Download className="w-4 h-4 text-orange-1 group-hover:scale-110 transition-transform" />
                  <span className="text-orange-1 font-bold">$</span>
                  <span>{t.hero.downloadCv}</span>
                </a>
              </motion.div>

              {/* Contact Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="gsap-hero-btn">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl text-text-dim hover:text-text font-semibold text-xs sm:text-sm transition-all hover:bg-panel border border-border/60"
                >
                  <span className="text-orange-1 font-bold">&gt;</span>
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
