<template>
  <section class="flex-1 w-[80%] flex justify-center items-start gap-[20px]">
    <BeatIndividualInfo :data="data" />
    <BeatIndividualSections :data="data" />
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
const store = useStore();
onMounted(() => {
  if (!store.getCurrentBeat().id)
    store.setCurrentBeat({
      id: props.data.id,
      name: props.data.name,
      bpm: props.data.bpm,
      author: props.data.author,
      image: props.data.image,
      mp3: props.data.mp3,
      wavePrice: props.data.wavePrice,
      plays: props.data.plays,
    });
});
</script>
