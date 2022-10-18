<template>
  <MainBeat v-for="item in list" :key="item.id" :data="item" />
</template>
<script setup lang="ts">
const props = defineProps<{
  list: Beat[];
}>();
</script>
