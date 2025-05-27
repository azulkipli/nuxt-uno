<template>
  <footer class="flex gap-3">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/register">Register</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <NuxtLink to="/una-ui">UnaUI</NuxtLink>
  </footer>
</template>
<style scoped>
a {
  @apply no-underline hover:opacity-60;
  @apply text-blue-9 font-400;
}
a.active {
  @apply underline;
}
</style>
