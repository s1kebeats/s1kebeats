<template>
    <div class="flex-1 flex flex-col gap-5">
      <SectionIndividualPlayer />
      <BeatIndividualPrices :data="data" /> 
      <SectionComments />
      <SectionRelatedBeats :source="data" />
    </div>
</template>
<script setup lang="ts">
const store = useCart()
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>