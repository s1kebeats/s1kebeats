<template>
  <div class="w-full flex flex-col gap-2">
    <div class="text-sm text-black text-left font-semibold">Теги</div>
    <BeatIndividualTagList :list="data" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Tag[];
}>();
</script>
