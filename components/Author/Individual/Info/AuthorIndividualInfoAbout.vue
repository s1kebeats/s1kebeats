<template>
  <div class="w-full flex flex-col gap-2 border-t-[1px] pt-5">
    <p class="text-sm text-black text-left font-semibold">Описание</p>
    <p class="text-sm text-black text-left">{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
</script>
