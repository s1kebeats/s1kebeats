<template>
  <div
    class="rounded-full bg-primary text-[12px] text-white py-[4px] px-[10px] max-w-[100px] truncate hover:bg-black transition-all"
  >
    #{{ data.name }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Tag;
}>();
</script>
