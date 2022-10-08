import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    showOverlay: false,
    _currentBeat: <Beat>{},
    audioPlaying: false,
  }),
  actions: {
    toggleOverlay(): void {
      // making overflow y hidden on body
      document.querySelector("#body")!.classList.toggle("locked");
      // changing overlay state
      this.overlay = !this.overlay;
    },
    getCurrentBeat(): Beat {
      return this._currentBeat
    },
    setCurrentBeat(beat: Beat): void {
      Object.assign(this._currentBeat, beat)
    },
    playPause(): void {
      this.audioPlaying = !this.audioPlaying
    }
  },
});
