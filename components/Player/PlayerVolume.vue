<template>
  <div
    class="flex items-center gap-[0.2vw]"
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
  >
    <BaseRangeInput
      :thumb-state="thumbState"
      :value="store.getAudioVolume()"
      :max="100"
      class="w-[3.5vw] h-[2px] mx-[.2vw] rounded-[100%]"
      :colors="{ back: '#a09da7', front: '#FFFFFF' }"
      @toggle-thumb="focusThumb"
      @update-value="setAudioVolume"
    />
    <button @click="toggleAudioVolume">
      <icon v-show="store.getAudioVolume()" name="material-symbols:volume-down-rounded" color="white" size="1.4vw" />
      <icon v-show="!store.getAudioVolume()" name="material-symbols:volume-mute-rounded" color="white" size="1.4vw" />
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
<style lang="scss">
.volume {
  background: center no-repeat url("~/assets/images/volume-medium.svg");
  background-size: 26px;
  &.muted {
    background: -3px center no-repeat url("~/assets/images/volume-off.svg");
    background-size: 26px;
  }
}
</style>
