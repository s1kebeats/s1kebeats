<template>
  <BaseVerticalRangeInput
    class="shadow-lg mr-[5px]"
    :value="store.getAudioVolume()"
    :max="100"
    @update-value="setAudioVolume"
  />
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
