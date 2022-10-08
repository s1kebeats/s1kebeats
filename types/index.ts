export {};

declare global {
  interface Author {
    username: string;
    displayedName?: string;
  }
  interface Beat {
    id: number;
    name: string;
    bpm: number;
    author: Author;
    plays: number;
    image: string;
    mp3: string;
    wavePrice: string;
  }
}
