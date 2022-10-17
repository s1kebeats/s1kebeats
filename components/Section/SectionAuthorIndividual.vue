<template>
  <section class="responsive pt-5 flex justify-center items-start gap-5">
    <AuthorIndividualInfo :data="data" />
    <AuthorBeats :data="data.beats" />
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
