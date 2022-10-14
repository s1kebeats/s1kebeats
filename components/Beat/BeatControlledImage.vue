<template>
  <div
    class="relative mb-3 select-none cursor-pointer"
    @click="playBeat"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
  >
    <transition name="overlay">
      <div
        v-show="hovered"
        data-test="hovered"
        class="absolute bg-black bg-opacity-80 w-full h-full rounded-lg flex justify-center items-center"
      >
        <img
          v-show="
            store.getCurrentBeat().id === data.id &&
            copyHovered &&
            store.getAudioPlaying()
          "
          src="~/assets/images/pause.svg"
          class="w-[60px]"
        />
      </div>
      <div
        v-show="hovered"
        data-test="hovered"
        class="absolute bg-black bg-opacity-80 w-full h-full rounded-lg flex justify-center items-center"
      >
        <img
          v-show="
            store.getCurrentBeat().id === data.id &&
            !copyHovered &&
            store.getAudioPlaying()
          "
          src="~/assets/images/volume-medium.svg"
          class="w-[50px]"
        />
      </div>
      <div
        v-show="hovered"
        data-test="hovered"
        class="absolute bg-black bg-opacity-80 w-full h-full rounded-lg flex justify-center items-center"
      >
        <img
          v-show="
            (store.getCurrentBeat().id &&
              store.getCurrentBeat().id !== data.id) ||
            !store.getAudioPlaying()
          "
          src="~/assets/images/play.svg"
          class="w-[60px]"
        />
      </div>
    </transition>
    <img
      data-test="beatWrap"
      :src="data.image"
      class="rounded-lg object-cover w-full h-full shadow-lg"
    />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
const store = useStore();
const { _audioPlaying: playing } = storeToRefs(store);
const props = defineProps<{
  data: Beat;
}>();
const hovered = ref(false);
// overlay inside overlay value (was made to be able to change icons when beat is playing)
const copyHovered = ref(false);
// on hover function
const showOverlay = (): void => {
  hovered.value = true;
  copyHovered.value = true;
};
// on unhover function
const hideOverlay = (): void => {
  // if beat is currently playing, we turn of only nested overlay, but keep main one, to be able to show volume icon
  if (store.getCurrentBeat().id === props.data.id) {
    copyHovered.value = false;
    return;
  }
  // if beat is not playing
  hovered.value = false;
  copyHovered.value = false;
};
// changes global beat value or pauses beat if it's currenty playing
const playBeat = (): void => {
  // pause
  if (store.getCurrentBeat().id === props.data.id) {
    store.setAudioPlaying();
    return;
  }
  store.setCurrentBeat(props.data);
};
watch(playing, (newValue) => {
  if (!newValue) {
    hovered.value = false;
  }
});
</script>
