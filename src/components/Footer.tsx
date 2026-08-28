import React from 'react';
import { Link } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Terminal } from 'lucide-react';

export const Footer: React.FC = React.memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-panel/60 border-t border-border/70 dark:border-transparent mt-20 pt-14 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Terminal Status Bar */}
        <div className="mb-10 p-3.5 sm:p-4 rounded-2xl bg-panel-sub border border-border flex flex-col sm:flex-row items-center justify-between gap-2.5 font-mono text-xs text-text-dim">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-orange-1" />
            <span className="text-orange-1 font-bold">murilo@dev:~$</span>
            <span className="text-text font-medium">status --production</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">200 OK</span>
            <span className="text-text-faint">•</span>
            <span className="text-text-faint">deploy: docker + nginx</span>
          </div>
        </div>

        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          
          {/* Column 1: Identity, Tagline, Download CV & Socials (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-text tracking-tight flex items-center">
                {t.footer.name}<span className="text-orange-1">.</span>
              </h3>
              <p className="text-sm text-text-dim mt-2.5 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
            </div>

            {/* Download CV Button with terminal flair */}
            <div>
              <a
                href={t.hero.cvFilePath}
                download={t.hero.cvFileName}
                aria-label={t.hero.downloadAria}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-panel hover:bg-panel-sub border border-border text-text hover:border-orange-1/60 font-semibold text-xs transition-all shadow-sm group font-mono"
              >
                <Download className="w-3.5 h-3.5 text-orange-1 group-hover:scale-110 transition-transform" />
                <span>$ {t.footer.downloadCv}</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com/in/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Murilo Freitas"
                className="w-9 h-9 rounded-xl bg-panel hover:bg-panel-sub border border-border flex items-center justify-center text-text-dim hover:text-orange-1 hover:border-orange-1/60 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Murilo Freitas"
                className="w-9 h-9 rounded-xl bg-panel hover:bg-panel-sub border border-border flex items-center justify-center text-text-dim hover:text-orange-1 hover:border-orange-1/60 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:onemurilo@gmail.com"
                aria-label="E-mail de Murilo Freitas"
                className="w-9 h-9 rounded-xl bg-panel hover:bg-panel-sub border border-border flex items-center justify-center text-text-dim hover:text-orange-1 hover:border-orange-1/60 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-text uppercase tracking-wider font-mono">
              // {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-text-dim hover:text-orange-1 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-1 font-mono text-xs">&gt;</span>
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-text-dim hover:text-orange-1 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-1 font-mono text-xs">&gt;</span>
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-text-dim hover:text-orange-1 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-1 font-mono text-xs">&gt;</span>
                  <span>{t.nav.projects}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-text-dim hover:text-orange-1 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-1 font-mono text-xs">&gt;</span>
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-text uppercase tracking-wider font-mono">
              // {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-text-dim">
                <Mail className="w-4 h-4 text-orange-1 shrink-0" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-orange-1 transition-colors font-mono text-xs"
                >
                  {t.footer.email}
                </a>
              </li>

              <li className="flex items-center gap-3 text-text-dim">
                <Phone className="w-4 h-4 text-orange-1 shrink-0" />
                <a
                  href="https://wa.me/5531983175784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-1 transition-colors font-mono text-xs"
                >
                  {t.footer.phone}
                </a>
              </li>

              <li className="flex items-center gap-3 text-text-dim">
                <MapPin className="w-4 h-4 text-orange-1 shrink-0" />
                <span>{t.footer.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-border/60 dark:border-transparent pt-8 text-center text-xs text-text-faint font-mono">
          <p>$ {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';