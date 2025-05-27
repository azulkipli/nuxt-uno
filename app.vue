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
});

const route = useRoute();
const titleMeta = String(route?.meta?.title) || "";

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
h1.page-title {
  @apply text-3xl text-left;
  @apply flex flex-row items-center;
}
</style>
