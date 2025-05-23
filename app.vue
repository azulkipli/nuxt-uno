<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
    class: "no-scrollbar",
  },
  bodyAttrs: {
    class: import.meta.dev ? "debug-screens no-scrollbar" : "no-scrollbar",
  },
  titleTemplate: (param) => {
    return param ? `${param} - AZ` : "";
  },
  // link: [
  //   { rel: "preconnect", href: "https://connect.facebook.net" },
  //   { rel: "dns-prefetch", href: "https://connect.facebook.net" },
  //   { rel: "preconnect", href: "https://www.facebook.com" },
  //   { rel: "dns-prefetch", href: "https://www.facebook.com" },
  // ],
});

const route = useRoute();
const routeName = route?.name;
console.log("routeName", routeName)
const firstChar = routeName ? String(routeName).charAt(0).toUpperCase() : "";
console.log("firstChar", firstChar)
const titleRoute = routeName
  ? String(routeName).slice(1).replace(/-/g, " ")
  : "";

const titleMeta = `${firstChar}${titleRoute}`;

useSeoMeta({
  title: titleMeta,
  keywords: "nuxt, unocss",
  ogTitle: titleMeta,
  twitterTitle: titleMeta,
  description: "NuxtJS UnoCSS starter",
  ogDescription: "NuxtJS UnoCSS starter",
  ogImage: "https://unocss.dev/logo.svg",
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
