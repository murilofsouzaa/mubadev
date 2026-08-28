import React from 'react';
import { Link } from '../context/RouterContext';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Download, ArrowRight, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = React.memo(() => {
  const { t } = useLanguage();

  return (
    <section className="pt-4 sm:pt-8 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-8"
      >
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-panel border border-border/80 shadow-sm text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-text-dim">{t.hero.badge}</span>
        </div>

        {/* Title & Introduction */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-[1.15]">
            <span className="text-text-dim font-medium text-xl sm:text-2xl block mb-2">
              {t.hero.greeting}
            </span>
            {t.hero.name}
            <span className="text-orange-1">.</span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-orange-1 leading-snug">
            {t.hero.role}
          </p>

          <p className="text-base sm:text-lg text-text-dim leading-relaxed pt-1">
            {t.hero.description}
          </p>
        </div>

        {/* Quick Location & Status Info */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-faint">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel border border-border">
            <MapPin className="w-3.5 h-3.5 text-orange-1" />
            <span>{t.hero.location}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel border border-border">
            <Sparkles className="w-3.5 h-3.5 text-orange-1" />
            <span>{t.hero.status}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          {/* View Projects */}
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-1 hover:bg-orange-2 text-black font-bold text-sm transition-all shadow-sm hover:shadow-orange-glow group"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Download CV */}
          <a
            href={t.hero.cvFilePath}
            download={t.hero.cvFileName}
            aria-label={t.hero.downloadAria}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-panel hover:bg-panel-sub border border-border hover:border-orange-1/60 text-text font-bold text-sm transition-all shadow-sm group"
          >
            <Download className="w-4 h-4 text-orange-1 group-hover:scale-110 transition-transform" />
            <span>{t.hero.downloadCv}</span>
          </a>

          {/* Contact Link */}
          <Link
            to="/contato"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-2xl bg-transparent hover:bg-panel border border-transparent hover:border-border text-text-dim hover:text-text font-semibold text-sm transition-all"
          >
            <span>{t.hero.contactMe}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';