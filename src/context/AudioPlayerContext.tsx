import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { JAZZ_PLAYLIST, type JazzTrack } from '../data/playlist';

interface AudioPlayerContextType {
  playlist: JazzTrack[];
  currentTrackIndex: number;
  currentTrack: JazzTrack;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  playTrack: (index: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  seek: (time: number) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.2);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isFirstMount = useRef(true);

  const currentTrack = JAZZ_PLAYLIST[currentTrackIndex] || JAZZ_PLAYLIST[0];

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % JAZZ_PLAYLIST.length);
  }, []);

  const prevTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev - 1 + JAZZ_PLAYLIST.length) % JAZZ_PLAYLIST.length);
  }, []);

  const playTrack = useCallback((index: number) => {
    setCurrentTrackIndex(index % JAZZ_PLAYLIST.length);
    setIsPlaying(true);
  }, []);

  // Initialize HTML Audio element and start autoplaying at 2% volume
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.preload = 'auto';
    audio.src = encodeURI(currentTrack.src);
    audio.volume = isMuted ? 0 : 0.2;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % JAZZ_PLAYLIST.length);
    };

    const handleError = (e: Event) => {
      console.warn('Audio playback notice:', e);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Attempt instant playback at 2% volume
    const startAudio = () => {
      audio.volume = isMuted ? 0 : 0.2;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser blocks instant un-prompted audio, unlock on the very first user interaction
            const unlockAudio = () => {
              if (audioRef.current) {
                audioRef.current.volume = isMuted ? 0 : 0.2;
                audioRef.current
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch(() => {});
              }
              window.removeEventListener('pointerdown', unlockAudio);
              window.removeEventListener('click', unlockAudio);
              window.removeEventListener('keydown', unlockAudio);
              window.removeEventListener('touchstart', unlockAudio);
              window.removeEventListener('scroll', unlockAudio);
              window.removeEventListener('wheel', unlockAudio);
            };

            window.addEventListener('pointerdown', unlockAudio, { once: true, passive: true });
            window.addEventListener('click', unlockAudio, { once: true, passive: true });
            window.addEventListener('keydown', unlockAudio, { once: true, passive: true });
            window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
            window.addEventListener('scroll', unlockAudio, { once: true, passive: true });
            window.addEventListener('wheel', unlockAudio, { once: true, passive: true });
          });
      }
    };

    startAudio();

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Sync track src whenever currentTrack changes (skipping initial mount)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    audio.src = encodeURI(currentTrack.src);
    audio.currentTime = 0;
    setCurrentTime(0);
    audio.volume = isMuted ? 0 : volume;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Autoplay prevented or audio loading:', err);
        });
      }
    }
  }, [currentTrackIndex, currentTrack.src]);

  // Sync volume & mute
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle Play/Pause
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Playback error on toggle:', err);
        });
      }
    }
  }, [isPlaying]);

  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        playlist: JAZZ_PLAYLIST,
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
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
