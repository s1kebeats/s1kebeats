<template>
  <audio id="mainAudio">
    <source src="" type="audio/mpeg" />
  </audio>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
useHead({
  bodyAttrs: {
    id: "body",
  },
});
</script>
