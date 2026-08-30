import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const GothamLeftTower: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    mass: 0.6,
    restDelta: 0.001,
  });

  const towerY = useTransform(smoothProgress, [0, 1], ['0%', '-16%']);

  // Hidden on Mobile and hidden in Light Mode to preserve 100% clean canvas and mobile legibility
  return (
    <div className="hidden md:dark:block fixed left-0 -bottom-48 sm:-bottom-72 pointer-events-none z-0 overflow-hidden select-none w-[200px] sm:w-[260px] lg:w-[320px] h-[155vh] opacity-90 transition-opacity">
      
      {/* Vertical Atmospheric Backlight: Neutral/Cool Slate at Top -> Deep Crimson at Base */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-b from-transparent via-[#8B0000]/15 to-[#EA580C]/25 blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: towerY }}
        className="w-full h-full flex items-end relative z-10 blur-[2px]"
      >
        <svg
          viewBox="0 0 300 1500"
          preserveAspectRatio="none"
          className="w-full h-full object-cover"
        >
          <defs>
            {/* Vertical Skyscraper Gradient: Monochromatic Obsidian Top -> Deep Ruby Noir Base */}
            <linearGradient id="gothamTowerGrad" x1="0" y1="0" x2="0" y2="1">
              {/* Top / Hero Level: Pure Monochromatic Noir */}
              <stop offset="0%" stopColor="#0a0a0c" />
              <stop offset="25%" stopColor="#141418" />
              <stop offset="45%" stopColor="#1a181e" />
              {/* Mid Page Transition: Subtle Wine / Slate Blend */}
              <stop offset="70%" stopColor="#220a12" />
              {/* Footer / Street Level: Rich Dark Burgundy Noir */}
              <stop offset="100%" stopColor="#300a10" />
            </linearGradient>

            {/* Glowing Warm Amber Windows */}
            <linearGradient id="gothamWinGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* Background Secondary Needle Spire (Monochromatic Top) */}
          <polygon
            points="35,1500 35,260 48,190 54,120 56,75 58,120 64,190 77,260 77,1500"
            fill="#0f0f13"
            stroke="#27272a"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* MAIN ART DECO SKYSCRAPER (Monochromatic at Top, Warming to Crimson at Base) */}
          <polygon
            points="0,1500 0,420 50,420 75,330 105,330 120,240 135,160 138,90 142,160 157,240 172,330 202,330 227,420 270,420 270,1500"
            fill="url(#gothamTowerGrad)"
            stroke="#27272a"
            strokeWidth="1.5"
          />

          {/* Stepped Architectural Setback Ledge Highlights */}
          {/* Top Tiers: Cool Slate / Monochromatic */}
          <line x1="120" y1="240" x2="157" y2="240" stroke="#3f3f46" strokeWidth="2" />
          <line x1="105" y1="330" x2="172" y2="330" stroke="#3f3f46" strokeWidth="2" />
          <line x1="50" y1="420" x2="227" y2="420" stroke="#3f3f46" strokeWidth="2" />
          
          {/* Mid Tiers: Transitioning to Warm Plum/Crimson Tone */}
          <line x1="0" y1="520" x2="270" y2="520" stroke="#2d131e" strokeWidth="2" />
          <line x1="0" y1="680" x2="270" y2="680" stroke="#3a111c" strokeWidth="2" />
          
          {/* Bottom Tiers: Deep Wine / Carmine */}
          <line x1="0" y1="860" x2="270" y2="860" stroke="#48121f" strokeWidth="2" />
          <line x1="0" y1="1060" x2="270" y2="1060" stroke="#521523" strokeWidth="2" />

          {/* Vertical Deco Pinstripe Pilasters */}
          <line x1="90" y1="420" x2="90" y2="1500" stroke="#221b22" strokeWidth="1.5" />
          <line x1="138" y1="240" x2="138" y2="1500" stroke="#2a1e28" strokeWidth="2" />
          <line x1="185" y1="420" x2="185" y2="1500" stroke="#221b22" strokeWidth="1.5" />

          {/* Clean Lit Amber Slit Windows */}
          <g>
            {/* Spire Pinnacle Window Pair */}
            <rect x="133" y="185" width="4" height="18" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="141" y="185" width="4" height="18" fill="url(#gothamWinGlow)" rx="1" />

            {/* Mid Pinnacle Windows */}
            <rect x="123" y="275" width="4.5" height="22" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="150" y="275" width="4.5" height="22" fill="url(#gothamWinGlow)" rx="1" />

            {/* Tier 3 Windows */}
            <rect x="95" y="365" width="5" height="24" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="178" y="365" width="5" height="24" fill="url(#gothamWinGlow)" rx="1" />

            {/* Main Body Windows */}
            <rect x="65" y="460" width="5" height="24" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="205" y="460" width="5" height="24" fill="url(#gothamWinGlow)" rx="1" />

            <rect x="110" y="580" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="160" y="580" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />

            <rect x="65" y="740" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="205" y="740" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />

            <rect x="110" y="920" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="160" y="920" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />

            <rect x="65" y="1120" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />
            <rect x="205" y="1120" width="5" height="26" fill="url(#gothamWinGlow)" rx="1" />
          </g>
        </svg>
      </motion.div>

    </div>
  );
};
