export type MediaItem = { type: 'image'; src: string; alt?: string } | { type: 'video'; src: string };

export type RegionPage = {
  title: string;
  eyebrow: string;
  intro: string;
  cover: string;
  items: MediaItem[];
};

const hunzaLocal: MediaItem[] = Array.from({ length: 9 }, (_, i) => ({
  type: 'image',
  src: `/images/Hunza ${i + 1}.jpeg`,
  alt: `Hunza ${i + 1}`,
}));

export const REGION_PAGES: Record<string, RegionPage> = {
  'hunza.html': {
    title: 'Hunza Gallery',
    eyebrow: 'Karakoram · Gilgit-Baltistan',
    intro: 'From the orchards of Karimabad to Attabad Lake and the ridges of Eagle’s Nest — the quiet grandeur of the Hunza valley, moment by moment.',
    cover: 'https://images.pexels.com/photos/29543395/pexels-photo-29543395.png',
    items: hunzaLocal,
  },
  'skardu.html': {
    title: 'Skardu Gallery',
    eyebrow: 'Baltistan · Gateway to the eight-thousanders',
    intro: 'Cold-desert plateaus, jade rivers, and the road that opens the Karakoram — Skardu in stillness and in motion.',
    cover: 'https://images.pexels.com/photos/28688793/pexels-photo-28688793.jpeg',
    items: [
      { type: 'video', src: '/images/Skardu 38.mp4' },
      { type: 'image', src: 'https://images.pexels.com/photos/28688793/pexels-photo-28688793.jpeg', alt: 'Skardu vista' },
      { type: 'image', src: '/images/Hunza 1.jpeg', alt: 'On the road to Skardu' },
      { type: 'image', src: '/images/Hunza 3.jpeg', alt: 'Karakoram switchback' },
    ],
  },
  'swat.html': {
    title: 'Swat Gallery',
    eyebrow: 'Malakand · The Switzerland of the East',
    intro: 'Meadows, pine forests, and glacier-fed rivers — a softer, greener face of the north.',
    cover: 'https://images.pexels.com/photos/17740389/pexels-photo-17740389.jpeg',
    items: [
      { type: 'image', src: 'https://images.pexels.com/photos/17740389/pexels-photo-17740389.jpeg', alt: 'Swat valley' },
      ...hunzaLocal,
    ],
  },
  'kashmir.html': {
    title: 'Kashmir Gallery',
    eyebrow: 'Neelum · Leepa · Azad Kashmir',
    intro: 'Terraced villages, wooden mosques, and the mist that lingers over the Neelum river long after dawn.',
    cover: 'https://images.pexels.com/photos/27895672/pexels-photo-27895672.jpeg',
    items: [
      { type: 'image', src: 'https://images.pexels.com/photos/27895672/pexels-photo-27895672.jpeg', alt: 'Kashmir valley in morning mist' },
      { type: 'image', src: 'https://images.pexels.com/photos/3760059/pexels-photo-3760059.jpeg?auto=compress&cs=tinysrgb&w=1260', alt: 'Neelum river bend' },
      { type: 'image', src: '/images/Hunza 6.jpeg', alt: 'Terraced village slopes' },
    ],
  },
  'fairymeadows.html': {
    title: 'Fairy Meadows Gallery',
    eyebrow: 'Chilas · Diamer · Nanga Parbat basecamp',
    intro: 'Alpine grass that runs to the tree line, and — at the end of it — the ninth-tallest mountain on earth watching you back.',
    cover: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260',
    items: [
      { type: 'image', src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260', alt: 'Fairy Meadows plateau' },
      { type: 'image', src: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260', alt: 'Nanga Parbat from the meadows' },
      { type: 'image', src: '/images/Hunza 4.jpeg', alt: 'Pine belt on the climb up' },
    ],
  },
  'narankaghan.html': {
    title: 'Naran & Kaghan Gallery',
    eyebrow: 'Mansehra · Kaghan Valley',
    intro: 'Lake Saif-ul-Malook, the Babusar pass, and forested switchbacks — the classic Kaghan run, unhurried.',
    cover: 'https://images.pexels.com/photos/26221691/pexels-photo-26221691.jpeg',
    items: [
      { type: 'image', src: 'https://images.pexels.com/photos/26221691/pexels-photo-26221691.jpeg', alt: 'Naran valley overlook' },
      { type: 'image', src: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260', alt: 'Kaghan valley floor at dusk' },
      { type: 'image', src: '/images/Hunza 8.jpeg', alt: 'Approach to Babusar top' },
    ],
  },
  'khunjerab.html': {
    title: 'Khunjerab Gallery',
    eyebrow: 'Highest paved border crossing · 4,693 m',
    intro: 'Where the Karakoram Highway meets the sky, and Pakistan touches China at the top of the world.',
    cover: 'https://images.pexels.com/photos/34242360/pexels-photo-34242360.jpeg',
    items: [
      { type: 'image', src: 'https://images.pexels.com/photos/34242360/pexels-photo-34242360.jpeg', alt: 'Khunjerab pass summit at 4,693m' },
      { type: 'image', src: 'https://images.pexels.com/photos/18240251/pexels-photo-18240251.jpeg', alt: '4x4 on the Karakoram Highway' },
      { type: 'image', src: '/images/Hunza 7.jpeg', alt: 'High plateau approach' },
    ],
  },
  'gallery.html': {
    title: 'Gallery',
    eyebrow: 'A wider view',
    intro: 'A short reel from across the northern circuit. For region-specific sets, jump into any of the regional galleries.',
    cover: 'https://images.pexels.com/photos/8450544/pexels-photo-8450544.jpeg',
    items: [
      { type: 'image', src: 'https://images.pexels.com/photos/8450544/pexels-photo-8450544.jpeg', alt: 'Northern landscape' },
      { type: 'image', src: 'https://images.pexels.com/photos/20400392/pexels-photo-20400392.jpeg', alt: 'Karakoram peak' },
      { type: 'image', src: 'https://images.pexels.com/photos/38121708/pexels-photo-38121708.jpeg', alt: 'Alpine roadway' },
      { type: 'image', src: 'https://images.pexels.com/photos/29543395/pexels-photo-29543395.png', alt: 'Hunza valley' },
      { type: 'image', src: 'https://images.pexels.com/photos/28688793/pexels-photo-28688793.jpeg', alt: 'Skardu vista' },
      { type: 'image', src: 'https://images.pexels.com/photos/26221691/pexels-photo-26221691.jpeg', alt: 'Naran & Kaghan' },
    ],
  },
};

export const REGION_LINKS = [
  { slug: 'hunza.html', label: 'Hunza' },
  { slug: 'skardu.html', label: 'Skardu' },
  { slug: 'swat.html', label: 'Swat' },
  { slug: 'kashmir.html', label: 'Kashmir' },
  { slug: 'fairymeadows.html', label: 'Fairy Meadows' },
  { slug: 'narankaghan.html', label: 'Naran & Kaghan' },
  { slug: 'khunjerab.html', label: 'Khunjerab' },
];
