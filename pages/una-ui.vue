<script setup lang="ts">
definePageMeta({
  title: "Una UI",
  description: "Una UI Components Demo",
  layout: "una-centered",
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Una UI Components Demo</h1>

    <NDialog title="Edit Profile" description="Edit your profile information">
      <template #trigger>
        <NButton class="mt-5" label="Open Dialog" btn="outline" />
      </template>

      <div class="grid gap-4 py-4">
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <NLabel for="name"> Name </NLabel>
            <NInput
              id="name"
              :una="{
                inputWrapper: 'col-span-2',
              }"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <NLabel for="email"> Email </NLabel>
            <NInput
              id="email"
              type="email"
              :una="{
                inputWrapper: 'col-span-2',
              }"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <NLabel for="password"> Current Password </NLabel>
            <NInput
              id="password"
              type="password"
              :una="{
                inputWrapper: 'col-span-2',
              }"
            />
          </div>
        </div>
      </div>

      <template #footer>
        <NButton btn="solid" label="Save Changes" />
      </template>
    </NDialog>
  </div>
</template>
