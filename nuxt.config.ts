// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon"],
  router: {
    options: {
      linkActiveClass: "active",
      scrollBehaviorType: "smooth",
    },
  },
  experimental: {
    renderJsonPayloads: true
  },
  features:{
    inlineStyles: true
  },
  nitro: {
    routeRules: {
      '/**': { prerender: true }
    }
  }
});
