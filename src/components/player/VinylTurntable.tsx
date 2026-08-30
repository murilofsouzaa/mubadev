import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Disc, Music, ListMusic } from 'lucide-react';

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export const VinylTurntable: React.FC = () => {
  const {
    playlist,
    currentTrackIndex,
    currentTrack,
    isPlaying,
    volume,
    isMuted,
    currentTime,
    duration,
    togglePlay,
    playTrack,
    nextTrack,
    prevTrack,
    setVolume,
    toggleMute,
    seek,
  } = useAudioPlayer();

  const [showPlaylist, setShowPlaylist] = useState(false);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercent = parseFloat(e.target.value);
    const newTime = (newPercent / 100) * duration;
    seek(newTime);
  };

  return (
    <div className="w-full relative rounded-3xl bg-gradient-to-b from-panel via-panel-sub to-panel p-6 sm:p-8 border border-border-brass shadow-[0_15px_45px_rgba(0,0,0,0.5)] overflow-hidden select-none">
      {/* Ambient Spotlight / Tube Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-1/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-crimson-1/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Deck Banner */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-1 shadow-[0_0_10px_#ffaa2b] animate-pulse" />
          <span className="font-bold text-text tracking-wider text-[11px] sm:text-xs">
            MUBA HI-FI STEREO • 33⅓ RPM
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowPlaylist(!showPlaylist)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-panel border border-border-brass hover:border-amber-1 text-text-dim hover:text-amber-1 transition-all text-[11px] font-semibold"
            aria-label="Abrir playlist de jazz"
          >
            <ListMusic className="w-3.5 h-3.5 text-amber-1" />
            <span>PLAYLIST ({playlist.length})</span>
          </button>
        </div>
      </div>

      {/* Turntable Body: Vinyl Disc & Tonearm */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
        
        {/* Left: Interactive Vinyl Record Disc (7 cols) */}
        <div className="md:col-span-7 flex items-center justify-center relative">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
            
            {/* Turntable Platter Base */}
            <div className="absolute inset-0 rounded-full bg-black/60 border-4 border-panel-sub shadow-2xl" />

            {/* Spinning Vinyl Record Disc */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                duration: 3.5,
                ease: 'linear',
              }}
              className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-[#0a0a0c] shadow-[inset_0_0_20px_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.8)] border border-neutral-800 flex items-center justify-center cursor-pointer group"
              onClick={togglePlay}
              title={isPlaying ? 'Clique para pausar' : 'Clique para tocar'}
            >
              {/* Concentric Grooves */}
              <div className="absolute inset-2 rounded-full border border-neutral-800/80 pointer-events-none" />
              <div className="absolute inset-5 rounded-full border border-neutral-800/60 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-neutral-800/70 pointer-events-none" />
              <div className="absolute inset-11 rounded-full border border-neutral-800/50 pointer-events-none" />
              <div className="absolute inset-14 rounded-full border border-neutral-800/60 pointer-events-none" />

              {/* Vinyl Sheen Light Reflection */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

              {/* Center Record Label */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-crimson-1 via-crimson-2 to-amber-2 p-1 shadow-md flex flex-col items-center justify-center text-center text-white border-2 border-amber-1/40">
                <Disc className="w-4 h-4 text-white mb-0.5 opacity-90" />
                <span className="text-[8px] sm:text-[9px] font-mono font-black tracking-widest leading-none uppercase">
                  MUBA
                </span>
                <span className="text-[7px] font-mono text-amber-2 font-bold tracking-tighter leading-none mt-0.5">
                  SIDE A • 33 RPM
                </span>
                {/* Spindle Center Hole */}
                <div className="w-3 h-3 rounded-full bg-black border border-white/20 mt-1 shadow-inner" />
              </div>
            </motion.div>

            {/* Tonearm / Stylus Needle */}
            <motion.div
              animate={{
                rotate: isPlaying ? 24 : 0,
                originX: '85%',
                originY: '15%',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="absolute top-2 right-2 w-20 sm:w-24 h-32 pointer-events-none z-20"
            >
              {/* Tonearm Base Pivot */}
              <div className="absolute top-0 right-1 w-6 h-6 rounded-full bg-neutral-700 border-2 border-amber-1/80 shadow-md" />
              {/* Metallic Arm */}
              <div className="absolute top-3 right-3 w-1.5 h-24 bg-gradient-to-b from-neutral-300 to-neutral-500 rounded shadow transform -rotate-12 origin-top" />
              {/* Cartridge Head & Needle */}
              <div className="absolute bottom-4 left-6 w-4 h-6 bg-amber-1 rounded-sm shadow-md border border-black/40 transform rotate-12" />
            </motion.div>

          </div>
        </div>

        {/* Right: Track Information & Audio Spectrum (5 cols) */}
        <div className="md:col-span-5 space-y-4 text-center md:text-left">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-1/15 border border-amber-1/30 text-[10px] font-mono text-amber-1 font-bold uppercase tracking-wider mb-2">
              <Music className="w-3 h-3" />
              <span>FAIXA {currentTrackIndex + 1} DE {playlist.length}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-text tracking-tight truncate">
              {currentTrack.title}
            </h3>

            <p className="text-sm font-medium text-amber-1/90 truncate mt-0.5">
              {currentTrack.artist}
            </p>
            <p className="text-xs text-text-dim truncate">
              {currentTrack.album}
            </p>
          </div>

          {/* Equalizer Visualizer Spectrum */}
          <div className="h-10 w-full flex items-end justify-center md:justify-start gap-1 p-2 bg-black/40 rounded-xl border border-white/5">
            {[35, 75, 45, 90, 60, 100, 50, 85, 40, 70, 95, 30, 80, 65, 90, 55].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [`${Math.max(15, h * 0.3)}%`, `${h}%`, `${Math.max(20, h * 0.4)}%`] : '15%',
                  backgroundColor: i % 3 === 0 ? 'var(--crimson-1)' : 'var(--amber-1)',
                }}
                transition={{
                  duration: 0.7 + (i % 4) * 0.2,
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className="w-1.5 rounded-t-sm opacity-85"
                style={{ minHeight: '4px' }}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Progress Bar & Seek Scrub */}
      <div className="space-y-1.5 mb-5 font-mono text-xs">
        <div className="relative w-full flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={progressPercent || 0}
            onChange={handleSeekChange}
            className="w-full h-2 rounded-lg appearance-none bg-panel-sub cursor-pointer accent-amber-1 focus:outline-none border border-border"
            aria-label="Progresso da música"
          />
        </div>
        <div className="flex justify-between text-[11px] text-text-dim">
          <span>{formatTime(currentTime)}</span>
          <span className="text-text-faint">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls & Volume Slider */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/80">
        
        {/* Transport Buttons: Prev, Play/Pause, Next */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prevTrack}
            className="p-2.5 rounded-full bg-panel hover:bg-panel-sub border border-border text-text-dim hover:text-amber-1 hover:border-amber-1/50 transition-all"
            aria-label="Faixa anterior"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="px-5 py-3 rounded-full bg-amber-1 hover:bg-amber-2 text-black font-mono font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(255,170,43,0.4)] hover:shadow-[0_0_30px_rgba(255,170,43,0.6)] transition-all scale-105"
            aria-label={isPlaying ? 'Pausar reprodução' : 'Iniciar reprodução'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-black" />
                <span>PAUSAR</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-black" />
                <span>TOCAR JAZZ</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={nextTrack}
            className="p-2.5 rounded-full bg-panel hover:bg-panel-sub border border-border text-text-dim hover:text-amber-1 hover:border-amber-1/50 transition-all"
            aria-label="Próxima faixa"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume & Mute Controls */}
        <div className="flex items-center gap-2.5 font-mono text-xs text-text-dim">
          <button
            type="button"
            onClick={toggleMute}
            className="p-2 rounded-lg hover:bg-panel-sub text-text-dim hover:text-amber-1 transition-colors"
            aria-label={isMuted ? 'Desmutar som' : 'Mutar som'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-crimson-1" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-1" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 sm:w-28 h-1.5 rounded-lg appearance-none bg-panel-sub cursor-pointer accent-amber-1 border border-border"
            aria-label="Controle de volume"
          />

          <span className="text-[11px] font-bold text-amber-1 w-8 text-right">
            {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
          </span>
        </div>

      </div>

      {/* Collapsible Playlist Drawer */}
      <AnimatePresence>
        {showPlaylist && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-4 border-t border-border/80 overflow-hidden"
          >
            <h4 className="text-xs font-mono font-bold text-text-dim uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>SELECIONAR FAIXA DO ÁLBUM</span>
              <span className="text-[10px] text-text-faint">PASTA /public/*.mp3</span>
            </h4>

            <div className="space-y-1.5">
              {playlist.map((track, idx) => {
                const isSelected = idx === currentTrackIndex;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => playTrack(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-1/15 border border-amber-1/50 text-amber-1 font-bold shadow-sm'
                        : 'bg-panel-sub/60 hover:bg-panel-sub text-text-dim hover:text-text border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span className={`text-[11px] ${isSelected ? 'text-amber-1' : 'text-text-faint'}`}>
                        0{track.id}.
                      </span>
                      <div className="truncate">
                        <div className="font-sans font-bold text-text truncate">{track.title}</div>
                        <div className="text-[10px] text-text-dim truncate">{track.artist}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-[11px] text-text-faint">{track.duration}</span>
                      {isSelected && isPlaying && (
                        <span className="w-2 h-2 rounded-full bg-amber-1 animate-ping" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
