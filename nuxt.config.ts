// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/fonts", '@nuxt/ui', "@nuxt/image", "@nuxt/icon"],
    css: ['~/assets/css/main.css'],
    fonts: {
        provider: "bunny",
    },
    app: {}
});