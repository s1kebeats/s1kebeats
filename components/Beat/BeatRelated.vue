<template>
  <div
    data-test="beat"
    class="flex flex-col w-[204px] 930:w-[145px] bg-base-100 rounded-lg"
  >
    <BeatControlledImage :data="data" class="w-full h-[204px]" />
    <div class="flex gap-2">
      <div
        class="flex items-center text-sm text-primary font-semibold truncate h-[20px]"
      >
        {{ data.wavePrice }}руб.
      </div>
      <div
        class="flex items-center text-sm text-black font-semibold truncate h-[20px]"
      >
        {{ data.bpm }}BPM
      </div>
    </div>
    <NuxtLink
      :to="`/beat/${data.id}`"
      class="text-black font-semibold text-2xl link link-hover truncate h-[32px]"
    >
      {{ data.name }}
    </NuxtLink>
    <NuxtLink
      :to="`/${data.author.username}`"
      class="text-black text-sm link link-hover truncate h-[20px]"
    >
      {{
        data.author.displayedName
          ? data.author.displayedName
          : data.author.username
      }}
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
const { _audioPlaying: audioPlaying } = storeToRefs(store);
// overlay value
const hovered = ref(false);
// overlay inside overlay value (was made to be able to change icons when beat is playing)
const copyHovered = ref(false);
onMounted((): void => {
  // indicate if beat if playing when we change page
  if (store.getCurrentBeat().id === props.data.id) {
    hovered.value = true;
  }
});
watch(audioPlaying, (): void => {
  // set hovered value to show volume icon when playing
  if (store.getCurrentBeat().id === props.data.id) {
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
</script>
