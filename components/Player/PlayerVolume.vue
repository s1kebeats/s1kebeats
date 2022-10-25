<template>
  <div
    class="flex items-center gap-[4px]"
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
  >
    <BaseRangeInput
      :thumb-state="thumbState"
      :value="store.getAudioVolume()"
      :max="100"
      class="w-[70px] h-[2px] mx-[4px] rounded-full"
      :colors="{ back: '#a09da7', front: '#FFFFFF' }"
      @toggle-thumb="focusThumb"
      @update-value="setAudioVolume"
    />
    <button @click="toggleAudioVolume">
      <icon
        v-show="store.getAudioVolume()"
        name="material-symbols:volume-down-rounded"
        color="white"
        size="28px"
      />
      <icon
        v-show="!store.getAudioVolume()"
        name="material-symbols:volume-mute-rounded"
        color="white"
        size="28px"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const thumbState = ref(false);
const thumbFocused = ref(false);
const focusThumb = (state: boolean): void => {
  thumbFocused.value = state;
  toggleThumb(false);
};
const toggleThumb = (state: boolean): void => {
  if (thumbFocused.value) {
    thumbState.value = true;
    return;
  }
  thumbState.value = state;
};
const setAudioVolume = (volume: number): void => {
  if (volume) localStorage.setItem("audioVolume", String(volume));
  store.setAudioVolume(volume);
};
const toggleAudioVolume = (): void => {
  if (store.getAudioVolume()) {
    setAudioVolume(0);
  } else {
    store.setAudioVolume(+localStorage.getItem("audioVolume"));
  }
};
onMounted(() => {
  store.setAudioVolume(+localStorage.getItem("audioVolume"));
});
</script>
