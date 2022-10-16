<template>
    <div class="w-[55px] h-[55px] flex items-center justify-center">
      <BaseVerticalRangeInput :value="store.getAudioVolume()" :max="100" @update-value="setAudioVolume" />
    </div>
</template>
<script setup lang="ts">
const store = useStore()
const setAudioVolume = (volume: number): void => {
  if (volume) localStorage.setItem("audioVolume", String(volume));
  store.setAudioVolume(volume);
};
onMounted(() => {
  store.setAudioVolume(+localStorage.getItem("audioVolume"));
})
</script>

