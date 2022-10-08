import eslintPlugin from "vite-plugin-eslint";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    // Will register file from project server-middleware directory to handle /server-api/* requests
    { path: "/api", handler: "~/server_api/index.ts" },
  ],
  // vite: {
  //   plugins: [eslintPlugin()],
  // },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  imports: {
    dirs: ["stores"],
  },
  css: ["@/assets/css/index.scss", "@/assets/css/fonts.css"],
});
