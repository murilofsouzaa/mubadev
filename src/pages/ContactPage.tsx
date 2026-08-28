import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Linkedin, Github } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('onemurilo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

    try {
      // Using Web3Forms public API endpoint for reliable serverless form submission
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '5f928e46-5db2-4ca3-b68e-28b991307b22',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Novo contato de ${formData.name}`,
          message: formData.message,
          from_name: 'Portfólio Murilo Freitas',
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:onemurilo@gmail.com?subject=${encodeURIComponent(
          formData.subject || 'Contato via Portfólio'
        )}&body=${encodeURIComponent(
          `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
        )}`;
        setStatus('success');
      }
    } catch {
      // Fallback
      window.location.href = `mailto:onemurilo@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Contato via Portfólio'
      )}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      )}`;
      setStatus('success');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
      
      {/* Page Header (No top badge pill) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-text tracking-tight">
          {t.contact.title}<span className="text-orange-1">.</span>
        </h1>
        <p className="text-sm sm:text-base text-text-dim max-w-2xl leading-relaxed">
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
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-panel border border-border shadow-sm"
        >
          {status === 'success' ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text">
                {t.contact.form.successMessage}
              </h3>
              <p className="text-sm text-text-dim max-w-md mx-auto">
                {t.contact.form.successSubtitle}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-orange-1 hover:bg-orange-2 text-white font-bold text-xs transition-all shadow-sm"
              >
                {t.contact.form.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/10 text-red-400 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage || t.contact.form.errorMessage}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-dim uppercase tracking-wider block">
                    {t.contact.form.nameLabel} <span className="text-orange-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl bg-panel-sub border border-border focus:border-orange-1 focus:ring-1 focus:ring-orange-1 text-sm text-text placeholder:text-text-faint outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-dim uppercase tracking-wider block">
                    {t.contact.form.emailLabel} <span className="text-orange-1">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl bg-panel-sub border border-border focus:border-orange-1 focus:ring-1 focus:ring-orange-1 text-sm text-text placeholder:text-text-faint outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-dim uppercase tracking-wider block">
                  {t.contact.form.subjectLabel}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3.5 rounded-2xl bg-panel-sub border border-border focus:border-orange-1 focus:ring-1 focus:ring-orange-1 text-sm text-text placeholder:text-text-faint outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-dim uppercase tracking-wider block">
                  {t.contact.form.messageLabel} <span className="text-orange-1">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-2xl bg-panel-sub border border-border focus:border-orange-1 focus:ring-1 focus:ring-orange-1 text-sm text-text placeholder:text-text-faint outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button (with white text on orange) */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-1 hover:bg-orange-2 disabled:opacity-60 text-white font-bold text-sm transition-all shadow-sm hover:shadow-orange-glow"
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
          <div className="p-6 rounded-3xl bg-panel border border-border shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-text uppercase tracking-wider">
              {t.contact.info.directTitle}
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-panel-sub border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-orange-1/10 flex items-center justify-center text-orange-1 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-text-faint font-semibold">{t.contact.info.emailLabel}</div>
                    <a
                      href="mailto:onemurilo@gmail.com"
                      className="text-sm font-bold text-text hover:text-orange-1 transition-colors truncate block"
                    >
                      onemurilo@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={t.contact.info.copyEmail}
                  className="p-2 rounded-xl bg-panel hover:bg-panel-sub text-text-dim hover:text-text transition-all shrink-0 border border-border"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-panel-sub border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-1/10 flex items-center justify-center text-orange-1 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-faint font-semibold">{t.contact.info.phoneLabel}</div>
                  <a
                    href="https://wa.me/5531983175784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-text hover:text-orange-1 transition-colors"
                  >
                    (31) 98317-5784
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-panel-sub border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-1/10 flex items-center justify-center text-orange-1 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-faint font-semibold">{t.contact.info.locationLabel}</div>
                  <div className="text-sm font-bold text-text">{t.contact.info.locationValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-3xl bg-panel border border-border shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-text uppercase tracking-wider">
              {t.contact.info.socialTitle}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-panel-sub hover:bg-panel border border-border flex items-center gap-3 text-text transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-panel flex items-center justify-center text-text-dim group-hover:text-orange-1 transition-colors border border-border">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold">LinkedIn</span>
              </a>

              <a
                href="https://github.com/murilofsouzaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-panel-sub hover:bg-panel border border-border flex items-center gap-3 text-text transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-panel flex items-center justify-center text-text-dim group-hover:text-orange-1 transition-colors border border-border">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold">GitHub</span>
              </a>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  );
};
