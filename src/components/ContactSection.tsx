import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Copy, Check, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '../services/emailService';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'activation' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('onemurilo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(t.contact.form.fillRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage(t.contact.form.invalidEmail);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const result = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      honey,
    });

    if (result.success) {
      if (result.needsActivation) {
        setStatus('activation');
      } else {
        setStatus('success');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      setHoney('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || t.contact.form.errorMessage);
    }
  };

  return (
    <section id="contato" className="py-16 sm:py-24 max-w-4xl mx-auto select-none border-t border-border/80">
      <div className="space-y-12 sm:space-y-16">
        
        {/* Header with commanding scale & clear hierarchy & scroll opacity reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.08]">
            {t.contact.title}
            <span>.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-dim max-w-2xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Form and Direct Info Grid with scroll opacity reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14"
        >
          
          {/* Left Column: Minimal Form (7 cols) */}
          <div className="md:col-span-7">
            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-panel-sub border border-border space-y-3">
                <div className="flex items-center gap-2 text-text">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-bold text-sm">{t.contact.form.successMessage}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-dim">
                  {t.contact.form.successSubtitle}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs font-mono text-text underline pt-2"
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : status === 'activation' ? (
              <div className="p-6 rounded-xl bg-panel-sub border border-border space-y-3">
                <div className="flex items-center gap-2 text-text">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-bold text-sm">{t.contact.form.activationTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-dim">
                  {t.contact.form.activationSubtitle}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs font-mono text-text underline pt-2"
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-text-dim uppercase tracking-wider">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-border text-text placeholder:text-text-faint/60 text-sm focus:outline-none focus:border-text transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-text-dim uppercase tracking-wider">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-border text-text placeholder:text-text-faint/60 text-sm focus:outline-none focus:border-text transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-text-dim uppercase tracking-wider">
                    {t.contact.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-border text-text placeholder:text-text-faint/60 text-sm focus:outline-none focus:border-text transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-text-dim uppercase tracking-wider">
                    {t.contact.form.messageLabel} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-border text-text placeholder:text-text-faint/60 text-sm focus:outline-none focus:border-text transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-text border border-border p-2 rounded">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-text text-bg hover:opacity-90 font-medium text-xs sm:text-sm transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'submitting' ? t.contact.form.sendingButton : t.contact.form.sendButton}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info (5 cols) */}
          <div className="md:col-span-5 space-y-6 text-sm">
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-dim">
                {t.contact.info.directTitle}
              </h3>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="mailto:onemurilo@gmail.com"
                  className="font-medium text-text hover:opacity-60 transition-opacity"
                >
                  onemurilo@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copiar email"
                  className="p-1 rounded hover:bg-panel-sub text-text-dim hover:text-text transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-text" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-dim">
                {t.contact.info.locationLabel}
              </h3>
              <p className="text-text font-medium">
                {t.contact.info.locationValue}
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-dim">
                {t.contact.info.socialTitle}
              </h3>
              <div className="flex items-center gap-4 pt-1 font-medium">
                <a
                  href="https://github.com/murilofsouzaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:opacity-60 transition-opacity"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/murilofsouza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:opacity-60 transition-opacity"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
