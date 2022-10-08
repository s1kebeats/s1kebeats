<template>
  <div
    class="flex items-center gap-1 710:hidden"
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
  >
    <CustomRange
      :thumb-state="thumbState"
      :value="audioVolume"
      :max="100"
      class="w-[65px] h-[2px] mx-[6px]"
      @toggle-thumb="focusThumb"
      @update-value="updateAudioVolume"
    />
    <button
      data-test="volumeButton"
      class="block w-[26px] h-[26px] volume"
      :class="audioVolume ? '' : 'muted'"
      @click="toggleAudioVolume"
    ></button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import CustomRange from "@/components/ui/CustomRange.vue";
const emit = defineEmits<{
  (e: "updateAudioVolume", value: number): void;
}>();
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
const audioVolume = ref(
  localStorage.getItem("volume") !== null
    ? +localStorage.getItem("volume")!
    : 100
);
onMounted(() => {
  emit("updateAudioVolume", audioVolume.value);
});
const updateAudioVolume = (value: number): void => {
  audioVolume.value = value;
  emit("updateAudioVolume", audioVolume.value);
};
const toggleAudioVolume = (): void => {
  // mute
  if (audioVolume.value) audioVolume.value = 0;
  // unmute
  else
    audioVolume.value =
      localStorage.getItem("volume") !== null
        ? +localStorage.getItem("volume")!
        : 100;
  emit("updateAudioVolume", audioVolume.value);
};
// changing local storage volume value
watch(audioVolume, (value) => {
  // not setting muted value
  if (value) localStorage.setItem("volume", String(value));
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
