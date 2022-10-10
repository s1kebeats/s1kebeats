import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
    state: () => ({
        license: {},
    })
})