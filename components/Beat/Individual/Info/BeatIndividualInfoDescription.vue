<template>
  <div class="w-full flex flex-col gap-[.6vw] border-t-[1px] pt-[var(--section-gap)] text-[.75vw] text-black text-left">
    <p class="font-semibold">Описание</p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
</script>
