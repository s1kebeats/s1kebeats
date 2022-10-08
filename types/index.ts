export {};

declare global {
  interface Artist {
    id: number;
    name: string;
  }
  interface Beat {
    id: number;
    name: string;
    bpm: number;
    artist: Artist;
    mp3: string;
    wave: string;
    wrap: string;

    downloads: number;
    listenings: number;
  }
  interface PriceCard {
    id: number;
    title: string;
    description: string;
    price: string;
  }
}
