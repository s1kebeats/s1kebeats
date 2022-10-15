<template>
  <audio id="mainAudio" preload="metadata" @loadedmetadata="setAudioDuration">
    <source src="" type="audio/mpeg" />
  </audio>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const store = useStore();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
useHead({
  bodyAttrs: {
    id: "body",
  },
});
const setAudioDuration = (e) => {
  store.setAudioDuration(Math.ceil(e.target.duration));
};
</script>
