<template>
  <div
    class="rounded-full bg-primary text-xs text-white py-1 px-3 max-w-[120px] truncate hover:bg-black transition-all"
  >
    #{{ data.name }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Tag;
}>();
</script>
