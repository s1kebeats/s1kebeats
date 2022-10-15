import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    showOverlay: false,
    _currentBeat: <Beat>{},
    _audioPlaying: false,
    _audioDuration: 0,
    _audioTime: 0,
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
    setCurrentBeat(beat: Beat): void {
      const audio = document.querySelector("#mainAudio") as HTMLAudioElement;
      audio.src = beat.mp3;
      Object.assign(this._currentBeat, beat);
    },
    setAudioDuration(duration: number): void {
      this._audioDuration = duration;
    },
    getAudioDuration(): number {
      return this._audioDuration;
    },
    toggleAudioPlaying(): void {
      let interval: any;
      if (this._audioPlaying) {
        this.getMainAudio().pause();
        this._audioPlaying = false;
        clearInterval(interval);
      } else {
        this.getMainAudio().play();
        this._audioPlaying = true;
        interval = setInterval(() => {
          this.updateAudioTime(Math.ceil(this.getMainAudio().currentTime));
        }, 1000);
      }
    },
    setAudioTime(time: number): void {
      this.getMainAudio().currentTime = time;
      this._audioTime = time;
    },
    updateAudioTime(time: number): void {
      this._audioTime = time;
    },
    getAudioTime(): number {
      return this._audioTime;
    },
    getAudioPlaying(): boolean {
      return this._audioPlaying;
    },
    getMainAudio(): HTMLAudioElement {
      return document.querySelector("#mainAudio");
    },
  },
});
