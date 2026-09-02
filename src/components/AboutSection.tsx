import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION_DATA } from '../data/education';

export const AboutSection: React.FC = () => {
  const { t, language, resolveText } = useLanguage();

  return (
    <section id="sobre" className="py-16 sm:py-24 max-w-4xl mx-auto select-none border-t border-border/80">
      <div className="space-y-16 sm:space-y-20">
        
        {/* Section Header with Download CV Button & Scroll Opacity Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.08]">
              {t.about.title}
              <span>.</span>
            </h2>
            <p className="text-base sm:text-lg text-text-dim font-mono">
              {t.about.name} • {t.about.location}
            </p>
          </div>

          <a
            href={t.hero.cvFilePath}
            download={t.hero.cvFileName}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-text text-text hover:bg-text hover:text-bg transition-all text-xs sm:text-sm font-semibold w-fit cursor-pointer shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{language === 'pt' ? 'Baixar Currículo' : 'Download CV'}</span>
          </a>
        </motion.div>

        {/* Trajectory Bio with Scroll Opacity Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
            {t.about.objectiveTitle}
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-text-dim leading-relaxed font-normal">
            <p>{t.about.objectiveText1}</p>
            <p>{t.about.objectiveText2}</p>
          </div>
        </motion.div>

        {/* Academic Education with Scroll Opacity Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-3xl border-t border-border/80 pt-12 sm:pt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
            {t.about.educationTitle}
          </h3>

          <div className="space-y-8 divide-y divide-border/60">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="pt-8 first:pt-0 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                  <h4 className="text-lg sm:text-xl font-semibold text-text tracking-tight">
                    {resolveText(edu.degree)} — {resolveText(edu.field)}
                  </h4>
                  <span className="text-xs sm:text-sm font-mono text-text-faint">{edu.period}</span>
                </div>
                <p className="text-sm sm:text-base text-text-dim font-medium">{edu.institution}</p>
                <p className="text-xs sm:text-sm text-text-faint leading-relaxed pt-1">
                  {resolveText(edu.description)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages with Scroll Opacity Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-3xl border-t border-border/80 pt-12 sm:pt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
            {t.about.languagesTitle}
          </h3>

          <div className="flex flex-wrap gap-10 text-sm sm:text-base text-text-dim font-mono">
            <div className="flex items-center gap-2">
              <span className="text-text font-semibold">{t.about.portugueseLabel}:</span>
              <span>{t.about.portugueseLevel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text font-semibold">{t.about.englishLabel}:</span>
              <span>{t.about.englishLevel}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
