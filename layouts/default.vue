<template>
  <section id="defLayout" class="p-8">
    <slot />

    <footer class="flex gap-3">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </footer>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
