import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    showOverlay: false,
    _currentBeat: <Beat>{},
    _audioPlaying: false,
  }),
  actions: {
    toggleOverlay(): void {
      // making overflow y hidden on body
      document.querySelector("#body")!.classList.toggle("locked");
      // changing overlay state
      this.overlay = !this.overlay;
    },
    getCurrentBeat(): Beat {
      return this._currentBeat;
    },
    async setCurrentBeat(beat: Beat): Promise<void> {
      const audio = document.querySelector("#mainAudio") as HTMLAudioElement;
      audio.src = beat.mp3;
      Object.assign(this._currentBeat, beat);
      audio.load();
    },
    setAudioPlaying(value?: boolean): void {
      if (value !== undefined) {
        this._audioPlaying = value;
      } else {
        this._audioPlaying = !this._audioPlaying;
      }
    },
    getAudioPlaying(): boolean {
      return this._audioPlaying;
    },
    getMainAudio(): HTMLAudioElement {
      return document.querySelector("#mainAudio");
    },
  },
});
