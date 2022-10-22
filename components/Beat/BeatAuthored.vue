<template>
  <article
    class="flex flex-col gap-[10px] w-[var(--section-60-item-5)]"
  >
    <BeatControlledImage :data="data" class="w-full h-[var(--section-60-item-5)]" />
    <div class="flex flex-col">
      <p class="flex gap-[8px] font-semibold text-[14px]">
        <span
          class="flex items-center text-primary truncate"
        >
          {{ data.wavePrice }}руб.
        </span>
        <span
          class="flex items-center text-black truncate"
        >
          {{ data.bpm }}BPM
        </span>
      </p>
      <NuxtLink
        :to="`/beat/${data.id}`"
        class="text-black font-semibold text-[24px] link link-hover truncate"
      >
        {{ data.name }}
      </NuxtLink>
    </div>
  </article>
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
