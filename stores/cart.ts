import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    items: <
      {
        [key: number]: "wavePrice" | "stemsPrice";
      }
    >{},
    selected: <"wavePrice" | "stemsPrice">"wavePrice",
  }),
  actions: {
    addItem(id: number, ver: "wavePrice" | "stemsPrice") {
      this.items[id] = ver;
    },
    removeItem(id: number) {
      delete this.items[id];
    },
    checkItem(id: number, ver: "wavePrice" | "stemsPrice"): boolean {
      return this.items[id] === ver;
    },
    setSelected(ver: "wavePrice" | "stemsPrice"): void {
      this.selected = ver;
    },
    getSelected(): "wavePrice" | "stemsPrice" {
      return this.selected;
    },
  },
});
