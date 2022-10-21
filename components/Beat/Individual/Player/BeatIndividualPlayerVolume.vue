<template>
  <div class="w-[2.75vw] h-[2.75vw] flex items-center justify-center">
    <BaseVerticalRangeInput
      class="shadow-lg"
      :value="store.getAudioVolume()"
      :max="100"
      @update-value="setAudioVolume"
    />
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const setAudioVolume = (volume: number): void => {
  if (volume) localStorage.setItem("audioVolume", String(volume));
  store.setAudioVolume(volume);
};
onMounted(() => {
  store.setAudioVolume(+localStorage.getItem("audioVolume"));
});
</script>
