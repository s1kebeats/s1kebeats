<template>
  <article
    data-test="beat"
    class="flex flex-col gap-3 w-[230px] 930:w-[145px] bg-base-100 rounded-lg"
  >
    <BeatControlledImage :data="data" class="w-full h-[230px]" />
    <div class="flex flex-col">
      <p class="flex gap-2">
        <span
          class="flex items-center text-sm text-primary font-semibold truncate h-[20px]"
        >
          {{ data.wavePrice }}руб.
        </span>
        <span
          class="flex items-center text-sm text-black font-semibold truncate h-[20px]"
        >
          {{ data.bpm }}BPM
        </span>
      </p>
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
