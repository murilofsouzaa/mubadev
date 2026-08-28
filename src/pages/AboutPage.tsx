import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION_DATA } from '../data/education';
import { GraduationCap, MapPin, Calendar, Globe, Terminal } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, resolveText } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP cascading animation on mount
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.gsap-about-header', {
        y: 25,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.gsap-about-bio',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.gsap-about-lang',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          '.gsap-edu-item',
          {
            x: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
          },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
      
      {/* Header: Centered on mobile, Left-aligned on sm+ */}
      <div className="gsap-about-header space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="font-mono text-xs text-orange-1 font-bold flex items-center gap-1.5 px-3 py-1 rounded-lg bg-panel-sub border border-border">
          <Terminal className="w-3.5 h-3.5" />
          <span>$ cat developer_profile.md</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-text tracking-tight">
          {t.about.title}<span className="text-orange-1">.</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-text-faint font-mono pt-1">
          <span className="text-text font-semibold">{t.about.name}</span>
          <span>•</span>
          <span>{t.about.age}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-orange-1" />
            <span>{t.about.location}</span>
          </span>
        </div>
      </div>

      {/* Trajetória & Atuação (Biografia Real): Centered on mobile, Left-aligned on sm+ */}
      <section className="gsap-about-bio space-y-4 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="font-mono text-xs text-orange-1 font-bold">// 01.trajectory</span>
          <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
            {t.about.objectiveTitle}
          </h2>
        </div>

        <div className="space-y-3.5 text-base sm:text-lg text-text-dim leading-relaxed">
          <p>
            {t.about.objectiveText1}
          </p>
          <p>
            {t.about.objectiveText2}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      {/* Idiomas */}
      <section className="gsap-about-lang space-y-4">
        <div className="flex items-center justify-center sm:justify-start gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-1/10 flex items-center justify-center text-orange-1">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-xs text-orange-1 font-bold block sm:inline mr-2">// 02.languages</span>
            <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight inline">
              {t.about.languagesTitle}
            </h2>
          </div>
        </div>

        {/* Clean Vertical Rows */}
        <div className="flex flex-col gap-3 max-w-md mx-auto sm:mx-0 pt-1 font-mono">
          {/* Inglês */}
          <div className="flex items-center justify-between py-1.5 border-b border-border/40">
            <span className="font-bold text-sm sm:text-base text-text">{t.about.englishLabel}</span>
            <span className="text-xs sm:text-sm font-semibold text-orange-1">{t.about.englishLevel}</span>
          </div>

          {/* Português */}
          <div className="flex items-center justify-between py-1.5 border-b border-border/40">
            <span className="font-bold text-sm sm:text-base text-text">{t.about.portugueseLabel}</span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-400">{t.about.portugueseLevel}</span>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Formação Acadêmica Real (Timeline com bolinhas 100% centralizadas) */}
      <section className="space-y-8">
        <div className="flex items-center justify-center sm:justify-start gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-1/10 flex items-center justify-center text-orange-1">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-xs text-orange-1 font-bold block sm:inline mr-2">// 03.education</span>
            <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight inline">
              {t.about.educationTitle}
            </h2>
          </div>
        </div>

        {/* Timeline Container with Dead-Center Mathematical Alignment */}
        <div className="relative pl-7 sm:pl-8 space-y-9">
          {/* Continuous vertical timeline line */}
          <div className="absolute left-[7px] top-2.5 bottom-2.5 w-[2px] bg-border" />

          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="gsap-edu-item relative space-y-2">
              {/* Perfectly Centered Dot right on top of the vertical line */}
              <div className="absolute left-[-24.5px] sm:left-[-28.5px] top-1.5 w-3 h-3 rounded-full bg-orange-1 ring-4 ring-bg shadow-sm" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text">
                    {edu.institution}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-orange-1">
                    {resolveText(edu.field)} — {resolveText(edu.degree)}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-text-faint font-medium flex items-center gap-1.5 shrink-0 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-orange-1" />
                  <span>{resolveText(edu.status) || edu.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-dim leading-relaxed pt-1">
                {resolveText(edu.description)}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-2 font-mono">
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-panel-sub text-text-dim border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
