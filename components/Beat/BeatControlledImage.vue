<template>
  <div
    class="relative select-none cursor-pointer"
    @click="playBeat"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
  >
    <transition-group name="overlay">
      <div
        v-show="
          hovered &&
          store.getCurrentBeat().id === data.id &&
          store.getAudioPlaying()
        "
        key="pause"
        data-test="hovered"
        class="absolute bg-black bg-opacity-80 w-full h-full rounded-[10px] flex justify-center items-center"
      >
        <icon
          name="material-symbols:pause-circle-rounded"
          color="white"
          size="60px"
        />
      </div>
      <div
        v-show="
          !hovered &&
          store.getCurrentBeat().id === data.id &&
          store.getAudioPlaying()
        "
        key="playing"
        data-test="hovered"
        class="absolute bg-black bg-opacity-80 w-full h-full rounded-[10px] flex justify-center items-center"
      >
        <icon
          name="material-symbols:volume-down-rounded"
          color="white"
          size="60px"
        />
      </div>
      <div
        v-show="
          (hovered &&
            (store.getCurrentBeat().id !== data.id ||
              (!store.getAudioPlaying() &&
                store.getCurrentBeat().id === data.id))) ||
          (!store.getAudioPlaying() &&
            !hovered &&
            store.getCurrentBeat().id === data.id)
        "
        key="play"
        data-test="hovered"
        class="absolute bg-black bg-opacity-80 w-full h-full rounded-[10px] flex justify-center items-center"
      >
        <icon
          name="material-symbols:play-circle-rounded"
          color="white"
          size="60px"
        />
      </div>
    </transition-group>
    <img
      data-test="beatWrap"
      :src="data.image"
      class="rounded-[10px] object-cover w-full h-full shadow-lg"
    />
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const props = defineProps<{
  data: Beat;
}>();
const hovered = ref(false);
// on hover function
const showOverlay = (): void => {
  hovered.value = true;
};
// on unhover function
const hideOverlay = (): void => {
  hovered.value = false;
};
// changes global beat value or pauses beat if it's currenty playing
const playBeat = (): void => {
  // pause
  if (store.getCurrentBeat().id === props.data.id) {
    store.toggleAudioPlaying();
    return;
  }
  store.setCurrentBeat(props.data);
  if (!store.getAudioPlaying()) {
    store.toggleAudioPlaying();
  }
};
</script>
