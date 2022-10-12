<template>
  <section class="responsive pt-5 flex justify-center items-start gap-5">
    <BeatIndividualInfo :data="data" />
    <div class="border-[1px] flex-1 rounded-lg p-5 flex flex-col gap-5">
      <BeatPrices :data="data" /> 
      <SectionComments />
    </div>
    <SectionRelatedBeats />
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual
}>()
</script>
