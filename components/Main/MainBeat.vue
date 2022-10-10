<template>
  <div
    data-test="beat"
    class="flex flex-col w-[230px] 930:w-[145px] bg-base-100 rounded-lg"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
  >
    <div
      class="w-full h-[230px] 930:h-[145px] relative mb-3 select-none cursor-pointer"
      @click="playBeat"
    >
      <transition name="overlay">
        <div
          v-show="hovered"
          data-test="hovered"
          class="absolute bg-black bg-opacity-80 w-full h-full rounded-lg flex justify-center items-center"
        >
          <svg
            v-show="store.getCurrentBeat().mp3 === data.mp3 && copyHovered && store.audioPlaying"
            data-test="pauseIcon"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[60px]"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
          >
            <title>Pause audio</title>
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 01-32 0V192a16 16 0 0132 0zm96 0a16 16 0 01-32 0V192a16 16 0 0132 0z"
            />
          </svg>
          <svg
            v-show="
              store.getCurrentBeat().mp3 === data.mp3 && !copyHovered && store.audioPlaying
            "
            data-test="playingIcon"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[50px]"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
          >
            <title>Currently playing</title>
            <path
              d="M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z"
            />
            <path
              d="M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z"
            />
          </svg>
          <svg
            v-show="
              (store.getCurrentBeat().mp3 && store.getCurrentBeat().mp3 !== data.mp3) || !store.audioPlaying
            "
            data-test="playIcon"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[60px]"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
          >
            <title>Play audio</title>
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z"
            />
          </svg>
        </div>
      </transition>
      <img
        data-test="beatWrap"
        :src="data.image"
        class="rounded-lg object-cover w-full h-full shadow-lg"
      />
    </div>
    <div class="flex gap-2">
      <div class="flex items-center text-sm text-primary font-semibold truncate h-[20px]">{{ data.wavePrice }}руб.</div>
      <div
        class="flex items-center text-sm text-black font-semibold truncate h-[20px]"
      >
        {{ data.bpm }}BPM
      </div>
    </div>
    <NuxtLink
      :to="`beat/${data.id}`"
      class="text-black font-semibold text-2xl link link-hover truncate h-[32px]"
    >
      {{ data.name }}
    </NuxtLink>
    <NuxtLink :to="data.author.username" class="text-black text-sm link link-hover truncate h-[20px]">
      {{ data.author.displayedName ? data.author.displayedName : data.author.username}}
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
// global store
import { storeToRefs } from "pinia";
const store = useStore();
const router = useRouter();
const props = defineProps<{ data: Beat }>();
// global playing state
const { audioPlaying } = storeToRefs(store);
// overlay value
const hovered = ref(false);
// overlay inside overlay value (was made to be able to change icons when beat is playing)
const copyHovered = ref(false);
onMounted((): void => {
  // indicate if beat if playing when we change page
  if (store.getCurrentBeat().mp3 === props.data.mp3) {
    hovered.value = true;
  }
});
watch(audioPlaying, (): void => {
  // set hovered value to show volume icon when playing
  if (store.getCurrentBeat().mp3 === props.data.mp3) {
    hovered.value = true;
    return;
  }
  // if beat is not currently playing
  hovered.value = false;
});
// on hover function
const showOverlay = (): void => {
  hovered.value = true;
  copyHovered.value = true;
};
// on unhover function
const hideOverlay = (): void => {
  // if beat is currently playing, we turn of only nested overlay, but keep main one, to be able to show volume icon
  if (store.getCurrentBeat().mp3 === props.data.mp3) {
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
  if (store.getCurrentBeat().mp3 === props.data.mp3) {
    store.playPause();
    return;
  }
  store.setCurrentBeat(props.data);
};
</script>
