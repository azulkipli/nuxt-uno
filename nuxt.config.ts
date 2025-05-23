// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  router: {
    options: {
      linkActiveClass: "active",
      scrollBehaviorType: "smooth",
    },
  },
  features:{
    inlineStyles: true
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/': { prerender: true }
    },
    prerender: {
      autoSubfolderIndex: false,
    },
    esbuild: {
      options: {
        drop:
          process.env.NODE_ENV === "production" &&
          process.env.APP_DEBUG === "on"
            ? []
            : ["console"],
      },
    },
  },
  vite: {
    esbuild: {
      drop: process.env.APP_DEBUG === "on" ? [] : ["debugger", "console"],
    },
    define: {
      __VUE_PROD_DEVTOOLS__: process.env.APP_DEBUG === "on",
    },
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
