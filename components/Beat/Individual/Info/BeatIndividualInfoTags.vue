<template>
  <div class="w-full flex flex-col gap-[0.4vw]">
    <p class="text-[.75vw] text-black text-left font-semibold">Теги</p>
    <BeatIndividualTagList :list="data" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Tag[];
}>();
</script>
