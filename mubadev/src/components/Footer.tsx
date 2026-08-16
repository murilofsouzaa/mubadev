import React from 'react';

export const Footer: React.FC = React.memo(() => {
  return (
    <footer id="contato" className="border-t border-border-soft py-[40px] mt-[20px]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="font-mono text-[14px] text-text-dim">
            feito por <strong className="text-orange-1 font-bold">Murilo</strong>
          </div>

          <div className="flex gap-2.5">
            <a
              href="https://github.com/murilofsouzaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-[38px] h-[38px] border border-border rounded-lg flex items-center justify-center text-text-dim transition-all duration-200 hover:border-orange-2 hover:text-orange-1 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              href="www.linkedin.com/in/murilofsouzaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[38px] h-[38px] border border-border rounded-lg flex items-center justify-center text-text-dim transition-all duration-200 hover:border-orange-2 hover:text-orange-1 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.15 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.15 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.35 3.5 5.25 3.5ZM20.5 20.5H17.13V14.65C17.13 13.24 16.62 12.29 15.36 12.29C14.4 12.29 13.83 12.94 13.58 13.57C13.49 13.79 13.47 14.1 13.47 14.42V20.5H10.1S10.14 9.46 10.1 8.5H13.47V9.95C13.92 9.25 14.72 8.26 16.6 8.26C18.93 8.26 20.5 9.77 20.5 13.02V20.5Z" />
              </svg>
            </a>
            <a
              href="mailto:onemurilo@gmail.com"
              aria-label="E-mail"
              className="w-[38px] h-[38px] border border-border rounded-lg flex items-center justify-center text-text-dim transition-all duration-200 hover:border-orange-2 hover:text-orange-1 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px]">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="M3 6.5L12 13L21 6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-[26px] pt-5 border-t border-border-soft text-[12px] text-text-faint flex justify-between flex-wrap gap-2 font-mono">
          <span>© 2026 Murilo. Todos os direitos reservados.</span>
          <span>Belo Horizonte, BR</span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';