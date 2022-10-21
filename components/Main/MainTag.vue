<template>
  <div
    class="rounded-[100vw] bg-primary text-[.65vw] text-white py-[.2vw] px-[.6vw] max-w-[6vw] truncate hover:bg-black transition-all"
  >
    #{{ data.name }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Tag;
}>();
</script>
