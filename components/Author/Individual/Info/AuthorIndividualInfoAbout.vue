<template>
  <div
    class="w-full flex flex-col gap-[8px] border-t-[1px] pt-[20px] text-[14px] text-black text-left"
  >
    <p class="font-semibold">Описание</p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
</script>
