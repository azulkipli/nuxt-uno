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
    payloadExtraction: true,
  },
  features:{
    inlineStyles: true
  },
  nitro: {
    routeRules: {
      '/**': { prerender: true }
    }
  },
  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    },
  },
});
