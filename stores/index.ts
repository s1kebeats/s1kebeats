import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    showOverlay: false,
    currentBeat: <Beat>{},
  }),
  actions: {
    toggleOverlay(): void {
      // making overflow y hidden on body
      document.querySelector("#body")!.classList.toggle("locked");
      // changing overlay state
      this.overlay = !this.overlay;
    },
  },
});
