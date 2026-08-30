import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Volume2, VolumeX } from 'lucide-react';

export const Footer: React.FC = React.memo(() => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const footerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(footerRef, { margin: '0px 0px -50px 0px' });

  const flickerAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isMutedByChoice, setIsMutedByChoice] = useState(false);
  const [isPlayingFlicker, setIsPlayingFlicker] = useState(false);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio('/sounds/lamp-flicker.mp3');
    audio.loop = true;
    audio.volume = 0.25;
    flickerAudioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Play ONLY when lamp is visible in viewport and dark mode is active
  useEffect(() => {
    if (!flickerAudioRef.current) return;

    if (isInView && theme === 'dark' && !isMutedByChoice) {
      flickerAudioRef.current.play().then(() => {
        setIsPlayingFlicker(true);
      }).catch(() => {
        // Handle autoplay policy
      });
    } else {
      flickerAudioRef.current.pause();
      setIsPlayingFlicker(false);
    }
  }, [isInView, theme, isMutedByChoice]);

  const toggleFlickerSound = () => {
    if (!flickerAudioRef.current) return;
    if (isPlayingFlicker) {
      flickerAudioRef.current.pause();
      setIsMutedByChoice(true);
      setIsPlayingFlicker(false);
    } else {
      setIsMutedByChoice(false);
      flickerAudioRef.current.play().then(() => {
        setIsPlayingFlicker(true);
      }).catch(() => {});
    }
  };

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full dark:bg-gradient-to-b dark:from-transparent dark:to-[#000000] bg-transparent mt-20 pt-16 pb-6 transition-colors relative overflow-hidden"
    >
      
      {/* Background Soft Atmospheric Ambient Noir Glow (Dark Mode only) */}
      {theme === 'dark' && (
        <div className="hidden dark:block absolute bottom-0 right-1/4 w-[450px] h-[280px] bg-[#EA580C]/8 blur-[150px] pointer-events-none" />
      )}

      {/* ======================================================== */}
      {/* DESKTOP STREET LAMP (>= md, Dark Mode Only)              */}
      {/* ======================================================== */}
      {theme === 'dark' && (
        <div className="hidden md:block absolute right-6 xl:right-14 bottom-0 w-72 sm:w-80 lg:w-[380px] h-[440px] z-20 select-none">
          
          {/* Sound Toggle Button (Well-positioned on left, never cropped) */}
          <div className="absolute top-8 left-4 z-30">
            <button
              type="button"
              onClick={toggleFlickerSound}
              aria-label={isMutedByChoice ? 'Ativar som da luminária' : 'Silenciar som da luminária'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 border border-zinc-700 hover:border-[#EA580C] text-zinc-300 hover:text-white text-xs font-mono backdrop-blur-md shadow-xl transition-all cursor-pointer"
            >
              {isPlayingFlicker ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#EA580C] animate-pulse" />
                  <span>Som da Luz</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Mudo</span>
                </>
              )}
            </button>
          </div>

          <div 
            onClick={toggleFlickerSound}
            className="w-full h-full cursor-pointer"
          >
            <svg
              viewBox="0 0 260 440"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
            >
              <defs>
                <linearGradient id="footerConeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                  <stop offset="18%" stopColor="#fef08a" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#ea580c" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                </linearGradient>

                <radialGradient id="footerBulbGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="90%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {/* DUAL VOLUMETRIC CONES OF LIGHT */}
              <g className="animate-cone-flicker pointer-events-none">
                <polygon points="44,108 66,108 155,440 -45,440" fill="url(#footerConeGrad)" />
                <polygon points="194,108 216,108 305,440 105,440" fill="url(#footerConeGrad)" />
                <ellipse cx="55" cy="440" rx="100" ry="20" fill="#fef08a" fillOpacity="0.18" className="blur-md" />
                <ellipse cx="205" cy="440" rx="100" ry="20" fill="#fef08a" fillOpacity="0.18" className="blur-md" />
              </g>

              {/* CAST-IRON DOUBLE SWAN-NECK STRUCTURE */}
              <g className="fill-[#120610] stroke-[#180a14]">
                <path d="M 104,440 L 156,440 L 148,400 L 138,358 L 122,358 L 112,400 Z" strokeWidth="1.5" />
                <rect x="120" y="352" width="20" height="6" rx="2" strokeWidth="1" />
                <rect x="126" y="86" width="8" height="266" rx="1" strokeWidth="1" />
                <rect x="123" y="218" width="14" height="5" rx="1.5" strokeWidth="1" />
                <rect x="122" y="82" width="16" height="6" rx="2" strokeWidth="1" />
                <path d="M 126,82 Q 130,56 130,52 Q 130,56 134,82 Z" strokeWidth="1" />
                <path d="M 130,112 C 130,68 65,68 55,96" fill="none" strokeWidth="5" strokeLinecap="round" />
                <rect x="51" y="94" width="8" height="4" rx="1" strokeWidth="1" />
                <path d="M 38,108 C 44,96 66,96 72,108 Z" strokeWidth="1.5" />
                <path d="M 130,112 C 130,68 195,68 205,96" fill="none" strokeWidth="5" strokeLinecap="round" />
                <rect x="201" y="94" width="8" height="4" rx="1" strokeWidth="1" />
                <path d="M 188,108 C 194,96 216,96 222,108 Z" strokeWidth="1.5" />
              </g>

              {/* GLASS LIGHT BULBS */}
              <circle cx="55" cy="114" r="7.5" className="fill-[url(#footerBulbGlow)] animate-lamp-flicker" />
              <circle cx="205" cy="114" r="7.5" className="fill-[url(#footerBulbGlow)] animate-lamp-flicker" />
            </svg>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-8">
          
          {/* Column 1: Identity, Tagline, Download CV & Socials (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h3 className="font-sans font-bold text-xl text-stone-950 dark:text-zinc-100 tracking-tight flex items-center">
                {t.footer.name}<span className="text-[#EA580C]">.</span>
              </h3>
              <p className="text-sm text-stone-700 dark:text-zinc-300 mt-2.5 leading-relaxed max-w-sm font-sans">
                {t.footer.tagline}
              </p>
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href={t.hero.cvFilePath}
                download={t.hero.cvFileName}
                aria-label={t.hero.downloadAria}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/70 dark:bg-transparent border border-stone-300 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 hover:border-[#EA580C] hover:text-[#EA580C] dark:hover:border-[#EA580C] dark:hover:text-[#EA580C] font-bold text-xs transition-all shadow-sm group"
              >
                <Download className="w-3.5 h-3.5 text-[#EA580C] group-hover:scale-110 transition-transform" />
                <span>{t.footer.downloadCv}</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com/in/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Murilo Freitas"
                className="w-9 h-9 rounded-full bg-white/70 dark:bg-transparent border border-stone-300 dark:border-zinc-700 flex items-center justify-center text-stone-800 dark:text-zinc-300 hover:text-[#EA580C] dark:hover:text-[#EA580C] hover:border-[#EA580C] dark:hover:border-[#EA580C] transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Murilo Freitas"
                className="w-9 h-9 rounded-full bg-white/70 dark:bg-transparent border border-stone-300 dark:border-zinc-700 flex items-center justify-center text-stone-800 dark:text-zinc-300 hover:text-[#EA580C] dark:hover:text-[#EA580C] hover:border-[#EA580C] dark:hover:border-[#EA580C] transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:onemurilo@gmail.com"
                aria-label="E-mail de Murilo Freitas"
                className="w-9 h-9 rounded-full bg-white/70 dark:bg-transparent border border-stone-300 dark:border-zinc-700 flex items-center justify-center text-stone-800 dark:text-zinc-300 hover:text-[#EA580C] dark:hover:text-[#EA580C] hover:border-[#EA580C] dark:hover:border-[#EA580C] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-stone-950 dark:text-zinc-100 uppercase tracking-wider font-mono">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-stone-700 hover:text-[#EA580C] dark:text-zinc-300 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-stone-700 hover:text-[#EA580C] dark:text-zinc-300 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-stone-700 hover:text-[#EA580C] dark:text-zinc-300 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>{t.nav.projects}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-stone-700 hover:text-[#EA580C] dark:text-zinc-300 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-stone-950 dark:text-zinc-100 uppercase tracking-wider font-mono">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-stone-700 dark:text-zinc-300 group">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="text-stone-700 hover:text-[#EA580C] dark:text-zinc-300 dark:hover:text-[#EA580C] transition-colors text-xs font-medium"
                >
                  {t.footer.email}
                </a>
              </li>

              <li className="flex items-center gap-3 text-stone-700 dark:text-zinc-300 group">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="https://wa.me/5531983175784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-[#EA580C] dark:text-zinc-300 dark:hover:text-[#EA580C] transition-colors text-xs font-medium"
                >
                  {t.footer.phone}
                </a>
              </li>

              <li className="flex items-center gap-3 text-stone-700 dark:text-zinc-300">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span className="text-xs font-medium">{t.footer.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-stone-300 dark:border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600 dark:text-zinc-400 font-mono">
          <p>{t.footer.rights}</p>
          <p className="flex items-center gap-2 text-stone-950 dark:text-zinc-200 font-medium">
            <span>{t.footer.authorRole}</span>
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE STREET LAMP: ISOLATED AS LAST ELEMENT (< md)      */}
        {/* ======================================================== */}
        {theme === 'dark' && (
          <div className="flex md:hidden flex-col items-center justify-center w-full pt-8 pb-1 select-none z-0">
            {/* Mobile Audio Toggle Button */}
            <div className="mb-2">
              <button
                type="button"
                onClick={toggleFlickerSound}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 border border-zinc-700 text-zinc-300 text-xs font-mono shadow-md"
              >
                {isPlayingFlicker ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#EA580C] animate-pulse" />
                    <span>Som da Luz</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Mudo</span>
                  </>
                )}
              </button>
            </div>

            <div 
              onClick={toggleFlickerSound}
              className="w-56 h-44 relative cursor-pointer"
            >
              <svg
                viewBox="0 0 260 440"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
              >
                <defs>
                  <linearGradient id="footerConeGradMob" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="18%" stopColor="#fef08a" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#ea580c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                  </linearGradient>

                  <radialGradient id="footerBulbGlowMob" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#fef08a" />
                    <stop offset="70%" stopColor="#f59e0b" />
                    <stop offset="90%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                {/* DUAL VOLUMETRIC CONES OF LIGHT */}
                <g className="animate-cone-flicker pointer-events-none">
                  <polygon points="44,108 66,108 155,440 -45,440" fill="url(#footerConeGradMob)" />
                  <polygon points="194,108 216,108 305,440 105,440" fill="url(#footerConeGradMob)" />
                  <ellipse cx="55" cy="440" rx="100" ry="20" fill="#fef08a" fillOpacity="0.18" className="blur-md" />
                  <ellipse cx="205" cy="440" rx="100" ry="20" fill="#fef08a" fillOpacity="0.18" className="blur-md" />
                </g>

                {/* Structure */}
                <g className="fill-[#120610] stroke-[#180a14]">
                  <path d="M 104,440 L 156,440 L 148,400 L 138,358 L 122,358 L 112,400 Z" strokeWidth="1.5" />
                  <rect x="120" y="352" width="20" height="6" rx="2" strokeWidth="1" />
                  <rect x="126" y="86" width="8" height="266" rx="1" strokeWidth="1" />
                  <rect x="123" y="218" width="14" height="5" rx="1.5" strokeWidth="1" />
                  <rect x="122" y="82" width="16" height="6" rx="2" strokeWidth="1" />
                  <path d="M 126,82 Q 130,56 130,52 Q 130,56 134,82 Z" strokeWidth="1" />
                  <path d="M 130,112 C 130,68 65,68 55,96" fill="none" strokeWidth="5" strokeLinecap="round" />
                  <rect x="51" y="94" width="8" height="4" rx="1" strokeWidth="1" />
                  <path d="M 38,108 C 44,96 66,96 72,108 Z" strokeWidth="1.5" />
                  <path d="M 130,112 C 130,68 195,68 205,96" fill="none" strokeWidth="5" strokeLinecap="round" />
                  <rect x="201" y="94" width="8" height="4" rx="1" strokeWidth="1" />
                  <path d="M 188,108 C 194,96 216,96 222,108 Z" strokeWidth="1.5" />
                </g>

                {/* Bulbs */}
                <circle cx="55" cy="114" r="7.5" className="fill-[url(#footerBulbGlowMob)] animate-lamp-flicker" />
                <circle cx="205" cy="114" r="7.5" className="fill-[url(#footerBulbGlowMob)] animate-lamp-flicker" />
              </svg>
            </div>
          </div>
        )}

      </div>

    </motion.footer>
  );
});

Footer.displayName = 'Footer';