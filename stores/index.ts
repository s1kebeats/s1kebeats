import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    showOverlay: false,
    _currentBeat: <Beat>{},
    _audioPlaying: false,
    _audioDuration: 0,
    _audioTime: 0,
    _fakeAudioTime: 0,
    _audioVolume: 100,
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
      if (this.getAudioPlaying()) {
        this.toggleAudioPlaying();
      }
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
          if (
            Math.ceil(this.getMainAudio().currentTime) ===
            this.getAudioDuration()
          ) {
            this.toggleAudioPlaying();
            this.setAudioTime(0);
          }
          this.updateAudioTime(Math.ceil(this.getMainAudio().currentTime));
        }, 1000);
      }
    },
    setAudioTime(time: number): void {
      this.setFakeAudioTime(0);
      this.getMainAudio().currentTime = time;
      this.updateAudioTime(time);
    },
    updateAudioTime(time: number): void {
      this._audioTime = time;
    },
    setFakeAudioTime(time: number): void {
      this._fakeAudioTime = time;
    },
    getAudioTime(): number {
      return this._audioTime;
    },
    getFakeAudioTime(): number {
      return this._fakeAudioTime;
    },
    getAudioPlaying(): boolean {
      return this._audioPlaying;
    },
    getMainAudio(): HTMLAudioElement {
      return document.querySelector("#mainAudio");
    },
    getAudioVolume(): number {
      return this._audioVolume;
    },
    setAudioVolume(volume: number): void {
      this.getMainAudio().volume = volume / 100;
      this._audioVolume = volume;
    },
  },
});
