<template>
  <section id="centerLayout" class="p-8 items-center grid place-items-center">
    <slot />
    <footer class="mt-5 flex gap-3">
      <NLink active-class="text-success" to="/">Home</NLink>
      <NLink active-class="text-success" to="/una-ui">UnaUI</NLink>
    </footer>
  </section>
</template>
