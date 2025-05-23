<template>
  <div id="pageHome">
    <!-- <h1><Icon name="uil:home-alt" /> <span>HOME</span></h1> -->
    <!-- <h1><Icon name="uil:github" /> <span>Github</span></h1> -->
    <h1>HOME</h1>
    <NuxtLink to="/about">Go to About</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Home",
  name: "home",
});
</script>
