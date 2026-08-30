import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Disc3,
  X,
} from 'lucide-react';

export const MiniPlayer: React.FC = () => {
  const {
    playlist,
    currentTrackIndex,
    currentTrack,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    nextTrack,
    prevTrack,
    setVolume,
    toggleMute,
  } = useAudioPlayer();

  const [isExpanded, setIsExpanded] = useState(false);
  const [showVolumePopup, setShowVolumePopup] = useState(false);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const volumeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close player or volume popup on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      
      // Close volume popup if clicked outside popup & volume button
      if (
        showVolumePopup &&
        popupRef.current &&
        !popupRef.current.contains(target) &&
        volumeBtnRef.current &&
        !volumeBtnRef.current.contains(target)
      ) {
        setShowVolumePopup(false);
      }

      // Close expanded player card if clicked outside the entire container
      if (
        isExpanded &&
        containerRef.current &&
        !containerRef.current.contains(target)
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded || showVolumePopup) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [isExpanded, showVolumePopup]);

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-50 select-none">
      
      {/* 1. Expanded Player Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-16 left-0 mb-2 w-72 sm:w-80 rounded-2xl bg-zinc-950/95 dark:bg-zinc-950/95 border border-zinc-800 shadow-2xl p-4 space-y-3.5 backdrop-blur-xl text-zinc-100 font-sans"
          >
            {/* Header: Status and Close Button */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <Disc3
                  className={`w-4 h-4 text-[#EA580C] ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ animationDuration: '3s' }}
                />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  Jazz Player • {currentTrackIndex + 1}/{playlist.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="w-6 h-6 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 flex items-center justify-center transition-colors"
                aria-label="Minimizar player"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Track Info */}
            <div className="flex items-center gap-3">
              {/* Spinning Mini Vinyl */}
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ repeat: isPlaying ? Infinity : 0, duration: 4, ease: 'linear' }}
                onClick={togglePlay}
                className="w-11 h-11 rounded-full bg-black border border-[#EA580C]/50 flex items-center justify-center cursor-pointer shrink-0 shadow-md group"
                title={isPlaying ? 'Pausar música' : 'Tocar jazz'}
              >
                <div className="w-4 h-4 rounded-full bg-[#EA580C] border border-[#EA580C]/80 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
              </motion.div>

              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold text-zinc-100 truncate">
                  {currentTrack.title}
                </p>
                <p className="text-[11px] text-[#EA580C] font-mono truncate">
                  {currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between pt-1">
              {/* Audio Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevTrack}
                  className="w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Faixa anterior"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
                  aria-label={isPlaying ? 'Pausar' : 'Tocar'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                  ) : (
                    <Play className="w-4 h-4 fill-zinc-950 text-zinc-950 ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={nextTrack}
                  className="w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Próxima faixa"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Volume Button (Toggles Pop-up) */}
              <div className="relative">
                <button
                  ref={volumeBtnRef}
                  type="button"
                  onClick={() => setShowVolumePopup((prev) => !prev)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    showVolumePopup
                      ? 'bg-zinc-800 text-[#EA580C] border border-zinc-700'
                      : 'hover:bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                  aria-label="Controle de volume"
                  title="Ajustar volume"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                {/* Volume Popover Flyout */}
                <AnimatePresence>
                  {showVolumePopup && (
                    <motion.div
                      ref={popupRef}
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full right-0 mb-3 w-56 p-3 rounded-xl backdrop-blur-md bg-zinc-900 border border-zinc-700 shadow-2xl space-y-2.5 z-50 text-zinc-100 font-sans"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                          Volume
                        </span>
                        <span className="text-[#EA580C] font-bold text-xs">
                          {isMuted ? 'Mudo (0%)' : `${Math.round(volume * 100)}%`}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-[#EA580C] border border-zinc-700 flex items-center justify-center transition-colors shrink-0"
                          aria-label={isMuted ? 'Desmutar' : 'Mutar'}
                        >
                          {isMuted || volume === 0 ? (
                            <VolumeX className="w-3.5 h-3.5 text-red-400" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5 text-[#EA580C]" />
                          )}
                        </button>

                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={isMuted ? 0 : volume}
                          onChange={(e) => setVolume(parseFloat(e.target.value))}
                          className="flex-1 h-1.5 rounded-lg appearance-none bg-zinc-800 cursor-pointer accent-[#EA580C] border border-zinc-700"
                          aria-label="Controle de volume"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Compact Floating Trigger Button with <Disc3 /> */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
        aria-label={isExpanded ? 'Recolher player' : 'Abrir player de áudio'}
        className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-zinc-950/90 dark:bg-zinc-950/95 border border-zinc-700 text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md relative group ${
          isExpanded ? 'ring-2 ring-[#EA580C]' : 'hover:border-[#EA580C]'
        }`}
      >
        {/* Spinning Disc3 Icon */}
        <Disc3
          className={`w-6 h-6 text-[#EA580C] transition-transform ${
            isPlaying ? 'animate-spin' : 'group-hover:rotate-45'
          }`}
          style={{ animationDuration: '4s' }}
        />

        {/* Pulsing Dot indicator when audio is active */}
        {isPlaying && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#EA580C] border-2 border-zinc-950 animate-pulse shadow-[0_0_8px_#EA580C]" />
        )}
      </motion.button>

    </div>
  );
};
