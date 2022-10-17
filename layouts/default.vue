<template>
  <div id="default">
    <!-- <SectionOverlay /> -->
    <BaseHeader />
    <slot />
    <!-- <BaseFooter /> -->
    <MainPlayer v-if="store.getAudioDuration()" />
  </div>
</template>
<script setup lang="ts">
const store = useStore();
</script>
