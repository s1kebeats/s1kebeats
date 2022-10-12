<template>
  <section class="responsive pt-5 flex justify-center items-start gap-5">
    <BeatIndividualInfo :data="data" />
    <div class="flex-1 flex flex-col gap-5">
      <div class="border-[1px] rounded-lg p-5 flex flex-col gap-5">
        <BeatPrices :data="data" /> 
        <SectionComments />
      </div>
      <SectionRelatedBeats :source="data" />
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual
}>()
</script>
