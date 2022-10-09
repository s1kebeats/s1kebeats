export {};

declare global {
  interface AuthorIndividual {
    displayedName?: string;
    username: string;
    image: string;
  }
  interface Author {
    username: string;
    displayedName?: string;
  }
  interface Beat {
    id: number;
    name: string;
    bpm: number;
    author: Author;
    image: string;
    mp3: string;
    wavePrice: number;
  }
}
