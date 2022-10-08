<template>
  <nav
    class="flex gap-4 grow justify-end"
    data-test="main"
  >
    <NuxtLink
      title="Home"
      to="/"
      class="font-medium transition-all"
      data-test="link"
    >
      Home
    </NuxtLink>
    <NuxtLink
      title="Beats"
      to="/beats"
      class="font-medium transition-all"
      data-test="link"
    >
      Beats
    </NuxtLink>
  </nav>
</template>
<!-- <script setup lang="ts">
const props = defineProps<{
  classes: {
    main: string;
    link: string;
  };
}>();
</script> -->
