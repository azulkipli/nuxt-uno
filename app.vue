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
const titleMeta = String(route?.meta?.title) || ""

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

<style>
h1 {
  font-size: 2rem;
  line-height: 2.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
}
h1 span.iconify {
  margin-right: 0.25rem;
}
</style>
