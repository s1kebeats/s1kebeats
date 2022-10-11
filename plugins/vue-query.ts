import { VueQueryPlugin } from "vue-query";
import type { VueQueryPluginOptions } from "vue-query";

const vueQueryPluginOptions: VueQueryPluginOptions = {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueQueryPlugin,vueQueryPluginOptions)
})