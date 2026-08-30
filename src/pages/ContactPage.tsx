import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Linkedin, Github } from 'lucide-react';
import { sendContactEmail } from '../services/emailService';

export const ContactPage: React.FC = () => {
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
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    return `mailto:onemurilo@gmail.com?subject=${subject}&body=${body}`;
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
    <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-950 dark:text-zinc-100 tracking-tight">
          {t.contact.title}<span className="text-[#EA580C] dark:text-[#EA580C]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-stone-700 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {t.contact.subtitle}
        </p>
      </motion.div>

      {/* Grid: Form (Left) & Direct Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#120708]/60 border border-stone-200/80 dark:border-[#EA580C]/20 backdrop-blur-md shadow-sm"
        >
          {status === 'success' ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-950 dark:text-zinc-100">
                {t.contact.form.successMessage}
              </h3>
              <p className="text-sm text-stone-700 dark:text-zinc-400 max-w-md mx-auto">
                {t.contact.form.successSubtitle}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#D9480F] text-white font-bold text-xs transition-all shadow-sm"
              >
                {t.contact.form.sendAnother}
              </button>
            </div>
          ) : status === 'activation' ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-950 dark:text-zinc-100">
                {t.contact.form.activationTitle}
              </h3>
              <p className="text-sm text-stone-700 dark:text-zinc-400 max-w-md mx-auto">
                {t.contact.form.activationSubtitle}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#D9480F] text-white font-bold text-xs transition-all shadow-sm"
              >
                {t.contact.form.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field */}
              <input
                type="text"
                name="_honey"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage || t.contact.form.errorMessage}</span>
                  </div>
                  <div>
                    <a
                      href={getMailtoUrl()}
                      className="inline-block text-[#EA580C] dark:text-[#EA580C] hover:underline font-bold"
                    >
                      {t.contact.form.fallbackButton} &rarr;
                    </a>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 dark:text-zinc-300 uppercase tracking-wider block font-mono">
                    {t.contact.form.nameLabel} <span className="text-[#EA580C] dark:text-[#EA580C]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#0a0304]/80 border border-stone-300 dark:border-zinc-800 text-sm text-stone-900 dark:text-zinc-100 placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:bg-white dark:focus:bg-[#0f0406] focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 dark:text-zinc-300 uppercase tracking-wider block font-mono">
                    {t.contact.form.emailLabel} <span className="text-[#EA580C] dark:text-[#EA580C]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#0a0304]/80 border border-stone-300 dark:border-zinc-800 text-sm text-stone-900 dark:text-zinc-100 placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:bg-white dark:focus:bg-[#0f0406] focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 dark:text-zinc-300 uppercase tracking-wider block font-mono">
                  {t.contact.form.subjectLabel}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#0a0304]/80 border border-stone-300 dark:border-zinc-800 text-sm text-stone-900 dark:text-zinc-100 placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:bg-white dark:focus:bg-[#0f0406] focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] outline-none transition-all shadow-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 dark:text-zinc-300 uppercase tracking-wider block font-mono">
                  {t.contact.form.messageLabel} <span className="text-[#EA580C] dark:text-[#EA580C]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#0a0304]/80 border border-stone-300 dark:border-zinc-800 text-sm text-stone-900 dark:text-zinc-100 placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:bg-white dark:focus:bg-[#0f0406] focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] outline-none transition-all resize-none shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#EA580C] hover:bg-[#D9480F] disabled:opacity-60 text-white font-bold text-sm transition-all shadow-md"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t.contact.form.sendingButton}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.form.sendButton}</span>
                    <Send className="w-4 h-4 text-white" />
                  </>
                )}
              </button>

            </form>
          )}
        </motion.div>

        {/* Right Contact Info (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#120708]/60 border border-stone-200/80 dark:border-[#EA580C]/20 backdrop-blur-md shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-stone-950 dark:text-zinc-100 uppercase tracking-wider font-mono">
              {t.contact.info.directTitle}
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-zinc-900/40 border border-stone-200 dark:border-zinc-800/60 hover:border-stone-400 dark:hover:border-[#EA580C]/50 hover:bg-stone-100/80 dark:hover:bg-[#EA580C]/5 flex items-center justify-between gap-3 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 dark:bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] dark:text-[#EA580C] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-stone-500 dark:text-zinc-400 font-semibold">{t.contact.info.emailLabel}</div>
                    <a
                      href="mailto:onemurilo@gmail.com"
                      className="text-sm font-bold text-stone-900 dark:text-zinc-100 hover:text-[#EA580C] dark:hover:text-[#EA580C] transition-colors truncate block"
                    >
                      onemurilo@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={t.contact.info.copyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-stone-100 dark:bg-zinc-800/60 dark:hover:bg-zinc-700 border border-stone-200 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white transition-all shrink-0 shadow-sm"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-zinc-900/40 border border-stone-200 dark:border-zinc-800/60 hover:border-stone-400 dark:hover:border-[#EA580C]/50 hover:bg-stone-100/80 dark:hover:bg-[#EA580C]/5 flex items-center gap-3 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 dark:bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] dark:text-[#EA580C] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 dark:text-zinc-400 font-semibold">{t.contact.info.phoneLabel}</div>
                  <a
                    href="https://wa.me/5531983175784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-stone-900 dark:text-zinc-100 hover:text-[#EA580C] dark:hover:text-[#EA580C] transition-colors"
                  >
                    (33) 99902-6628
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-zinc-900/40 border border-stone-200 dark:border-zinc-800/60 hover:border-stone-400 dark:hover:border-[#EA580C]/50 hover:bg-stone-100/80 dark:hover:bg-[#EA580C]/5 flex items-center gap-3 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 dark:bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] dark:text-[#EA580C] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 dark:text-zinc-400 font-semibold">{t.contact.info.locationLabel}</div>
                  <div className="text-sm font-bold text-stone-900 dark:text-zinc-100">{t.contact.info.locationValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#120708]/60 border border-stone-200/80 dark:border-[#EA580C]/20 backdrop-blur-md shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-stone-950 dark:text-zinc-100 uppercase tracking-wider font-mono">
              {t.contact.info.socialTitle}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-stone-50 dark:bg-zinc-900/40 border border-stone-200 dark:border-zinc-800/60 hover:border-stone-400 dark:hover:border-[#EA580C]/50 hover:bg-stone-100/80 dark:hover:bg-[#EA580C]/5 flex items-center gap-3 text-stone-900 dark:text-zinc-100 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-200/80 dark:bg-zinc-800/80 flex items-center justify-center text-stone-700 dark:text-zinc-400 group-hover:text-[#EA580C] dark:group-hover:text-[#EA580C] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold font-mono">LinkedIn</span>
              </a>

              <a
                href="https://github.com/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-stone-50 dark:bg-zinc-900/40 border border-stone-200 dark:border-zinc-800/60 hover:border-stone-400 dark:hover:border-[#EA580C]/50 hover:bg-stone-100/80 dark:hover:bg-[#EA580C]/5 flex items-center gap-3 text-stone-900 dark:text-zinc-100 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-200/80 dark:bg-zinc-800/80 flex items-center justify-center text-stone-700 dark:text-zinc-400 group-hover:text-[#EA580C] dark:group-hover:text-[#EA580C] transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold font-mono">GitHub</span>
              </a>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  );
};
