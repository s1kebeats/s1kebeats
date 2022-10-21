<template>
  <div class="w-full flex flex-col gap-[.4vw] border-t-[1px] pt-[1vw] text-[.75vw] text-black text-left">
    <p class="font-semibold">Описание</p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
</script>
