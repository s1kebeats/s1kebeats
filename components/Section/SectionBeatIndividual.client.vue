<template>
  <section class="responsive pt-5 flex justify-center items-start gap-5">
    <BeatIndividualInfo :data="data" />
    <BeatIndividualSections :data="data" />
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
