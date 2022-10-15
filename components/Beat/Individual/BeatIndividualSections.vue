<template>
  <div class="flex-1 flex flex-col gap-5">
    <BeatIndividualPlayer v-if="store.getAudioDuration()" />
    <BaseLoadingShimmer v-else class="h-[70px] rounded-full" />
    <BeatIndividualPrices :data="data" />
    <BeatIndividualComments />
    <SectionRelatedBeats :source="data" />
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
