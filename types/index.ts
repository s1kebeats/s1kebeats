export {};

declare global {
  interface Author {
    displayedName?: string;
    username: string;
    image: string;
  }
  interface AuthorForBeat {
    username: string;
    displayedName?: string;
  }
  interface Beat {
    id: number;
    name: string;
    bpm: number;
    author: AuthorForBeat;
    image: string;
    mp3: string;
    wavePrice: number;
  }
  interface AuthorIndividual {
    displayedName?: string;
    username: string;
    image: string;
    createdAt: string;
    about: string;
    beats: Beat[];
    playsCount: number;
    beatsCount: number;
    youtubeLink?: string;
    vkLink?: string;
    instagramLink?: string;
  }
  interface Tag {
    id: number;
    name: string;
    beats: Beat[];
  }
  interface Like {
    id: number;
    authorId: string;
    beatId: number;
    createdAt: string;
  }
  interface Comment {
    id: number;
    author: AuthorIndividual;
    beatId: number;
    content: string;
    createdAt: string;
  }
  interface BeatIndividual {
    id: number;
    name: string;
    bpm: number;
    description?: string;
    createdAt: string;
    downloads: number;
    plays: number;
    image: string;
    mp3: string;
    wavePrice: number;
    stemsPrice?: number;
    likes: Like[];
    // comments: Comment[];
    tags: Tag[];
    author: AuthorIndividual;
  }
}
