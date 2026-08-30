import React from 'react';

export const GothamCityscape: React.FC = () => {
  return (
    <div
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 65%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 65%)',
      }}
      className="hidden dark:block absolute left-0 top-0 pointer-events-none z-0 overflow-hidden select-none w-[160px] sm:w-[240px] lg:w-[320px] h-[950px] opacity-35 md:opacity-100 transition-opacity"
    >
      {/* Deep Crimson Backlight Silhouette Glow behind the Skyscraper */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#8B0000]/25 via-[#4a0d14]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full h-full flex items-start relative z-10 blur-[1.5px]">
        <svg
          viewBox="0 0 320 1000"
          preserveAspectRatio="none"
          className="w-full h-full object-cover"
        >
          <defs>
            {/* Vertical Skyscraper Gradient: Monochromatic Obsidian Top -> Deep Ruby Noir Base */}
            <linearGradient id="cityTowerGradLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#141418" />
              <stop offset="25%" stopColor="#181820" />
              <stop offset="50%" stopColor="#201522" />
              <stop offset="75%" stopColor="#2a0d17" />
              <stop offset="100%" stopColor="#360a12" />
            </linearGradient>

            {/* Glowing Warm Amber Windows */}
            <linearGradient id="cityAmberWin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* Background Secondary Needle Spire */}
          <polygon
            points="35,1000 35,220 48,150 54,80 56,35 58,80 64,150 77,220 77,1000"
            fill="#101014"
            stroke="#27272a"
            strokeWidth="1"
            opacity="0.85"
          />

          {/* MAIN ART DECO SKYSCRAPER (Framing the Left Hero Section) */}
          <polygon
            points="0,1000 0,380 50,380 75,290 105,290 120,200 135,120 138,45 142,120 157,200 172,290 202,290 227,380 270,380 270,1000"
            fill="url(#cityTowerGradLeft)"
            stroke="#383844"
            strokeWidth="1.5"
          />

          {/* Stepped Architectural Setback Ledge Highlights */}
          {/* Top Tiers: Cool Slate Monochromatic */}
          <line x1="120" y1="200" x2="157" y2="200" stroke="#4a4a58" strokeWidth="2" />
          <line x1="105" y1="290" x2="172" y2="290" stroke="#4a4a58" strokeWidth="2" />
          <line x1="50" y1="380" x2="227" y2="380" stroke="#4a4a58" strokeWidth="2" />
          
          {/* Mid Tiers: Transitioning to Warm Tone */}
          <line x1="0" y1="480" x2="270" y2="480" stroke="#351a28" strokeWidth="2" />
          <line x1="0" y1="620" x2="270" y2="620" stroke="#421422" strokeWidth="2" />
          <line x1="0" y1="780" x2="270" y2="780" stroke="#501528" strokeWidth="2" />

          {/* Vertical Deco Pinstripe Pilasters */}
          <line x1="90" y1="380" x2="90" y2="1000" stroke="#251e28" strokeWidth="1.5" />
          <line x1="138" y1="200" x2="138" y2="1000" stroke="#2e2232" strokeWidth="2" />
          <line x1="185" y1="380" x2="185" y2="1000" stroke="#251e28" strokeWidth="1.5" />

          {/* Tasteful, Clean Lit Amber Slit Windows */}
          <g>
            {/* Spire Pinnacle Window Pair */}
            <rect x="133" y="145" width="4" height="18" fill="url(#cityAmberWin)" rx="1" />
            <rect x="141" y="145" width="4" height="18" fill="url(#cityAmberWin)" rx="1" />

            {/* Mid Pinnacle Windows */}
            <rect x="123" y="235" width="4.5" height="22" fill="url(#cityAmberWin)" rx="1" />
            <rect x="150" y="235" width="4.5" height="22" fill="url(#cityAmberWin)" rx="1" />

            {/* Tier 3 Windows */}
            <rect x="95" y="325" width="5" height="24" fill="url(#cityAmberWin)" rx="1" />
            <rect x="178" y="325" width="5" height="24" fill="url(#cityAmberWin)" rx="1" />

            {/* Main Body Windows */}
            <rect x="65" y="420" width="5" height="24" fill="url(#cityAmberWin)" rx="1" />
            <rect x="205" y="420" width="5" height="24" fill="url(#cityAmberWin)" rx="1" />

            <rect x="110" y="540" width="5" height="26" fill="url(#cityAmberWin)" rx="1" />
            <rect x="160" y="540" width="5" height="26" fill="url(#cityAmberWin)" rx="1" />

            <rect x="65" y="700" width="5" height="26" fill="url(#cityAmberWin)" rx="1" />
            <rect x="205" y="700" width="5" height="26" fill="url(#cityAmberWin)" rx="1" />
          </g>
        </svg>
      </div>
    </div>
  );
};
