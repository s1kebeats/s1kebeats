<template>
  <div class="w-full flex flex-col gap-[8px]">
    <p class="text-[14px] text-black text-left font-semibold">Теги</p>
    <BeatIndividualTagList :list="data" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Tag[];
}>();
</script>
