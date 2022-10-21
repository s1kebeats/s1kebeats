<template>
  <div
    data-test="beat"
    class="flex flex-col w-[230px] gap-3 bg-base-100 rounded-lg"
  >
    <BeatControlledImage :data="data" class="w-full h-[230px]" />
    <div class="flex flex-col">
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
    </div>

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
</script>
