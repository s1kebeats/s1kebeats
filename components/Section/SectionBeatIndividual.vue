<template>
  <section class="responsive pt-5 flex justify-center gap-5">
    <BeatIndividualInfo :data="data" />
    <BeatPrices :data="data" />
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual
}>()
</script>
