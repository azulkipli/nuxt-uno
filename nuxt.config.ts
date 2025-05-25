// https://nuxt.com/docs/api/configuration/nuxt-config
const isDebug = process.env.APP_DEBUG === "on";
const isProduction = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  router: {
    options: {
      linkActiveClass: "active",
      scrollBehaviorType: "smooth",
    },
  },

  features: {
    inlineStyles: true,
  },

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      "/": { prerender: true },
    },
    prerender: {
      autoSubfolderIndex: false,
    },
    esbuild: {
      options: {
        drop: isProduction && isDebug ? [] : ["console"],
      },
    },
  },

  vite: {
    esbuild: {
      drop: isProduction && isDebug ? [] : ["debugger", "console"],
    },
    define: {
      __VUE_PROD_DEVTOOLS__: isDebug,
    },
  },

  // hooks: {
  //   "build:manifest": (manifest) => {
  //     // find the app entry, css list
  //     const css = manifest["node_modules/nuxt/dist/app/entry.js"]?.css;
  //     if (css) {
  //       // start from the end of the array and go to the beginning
  //       for (let i = css.length - 1; i >= 0; i--) {
  //         // if it starts with 'entry', remove it from the list
  //         if (css[i].startsWith("entry")) css.splice(i, 1);
  //       }
  //     }
  //   },
  // },

  // enabled modules
  modules: ["@nuxt/eslint", "@unocss/nuxt"],

  // uncoCSS config
  unocss: {
    nuxtLayers: true,
    configFile: "./unocss.config.ts",
  },

});