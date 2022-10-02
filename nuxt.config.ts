// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    serverMiddleware: [
        // Will register file from project server-middleware directory to handle /server-api/* requests
        { path: "/api", handler: "~/server_api/index.ts" },
    ],
})
