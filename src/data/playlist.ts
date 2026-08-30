export interface JazzTrack {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration?: string;
  src: string;
}

export const JAZZ_PLAYLIST: JazzTrack[] = [
  {
    id: 1,
    title: 'Wayne Manor Lounge',
    artist: '90s Noir Jazz Mix',
    album: 'Gotham After Dark',
    src: '/songs/One more drink, Master Bruce_ — 90s Noir Jazz Mix [wAz66mQUTTs_00_38_45_00_39_24_part2].mp3',
  },
  {
    id: 2,
    title: 'No Rush, Just Jazz (Pt. 1)',
    artist: 'Vintage Noir Ensemble',
    album: 'Late Night Relaxation',
    src: '/songs/No Rush. Just Jazz. – Vintage Noir Jazz for Late Night Relaxation [g4dScvHrXC8_00_07_05_00_10_00_part].mp3',
  },
  {
    id: 3,
    title: 'Gotham Nights',
    artist: 'Cookin Soul',
    album: 'Noir Jazz Remix',
    src: '/songs/Cookin Soul - Gotham Nights - Cookin Soul (youtube).mp3',
  },
  {
    id: 4,
    title: 'Midnight Solitude (Pt. 2)',
    artist: 'Vintage Noir Ensemble',
    album: 'Late Night Relaxation',
    src: '/songs/No Rush. Just Jazz. – Vintage Noir Jazz for Late Night Relaxation [g4dScvHrXC8_00_37_00_00_40_50_part].mp3',
  },
  {
    id: 5,
    title: 'One More Drink, Master Bruce',
    artist: '90s Noir Jazz Mix',
    album: 'Gotham After Dark',
    src: '/songs/One more drink, Master Bruce_ — 90s Noir Jazz Mix [wAz66mQUTTs_00_03_25_00_04_52_part].mp3',
  },
  {
    id: 6,
    title: 'Neon Light Flicker & Atmospheric Hum',
    artist: 'Gotham Street Ambience',
    album: 'Noir Soundscapes',
    src: '/songs/neon-lights-flicker.mp3',
  },
];
