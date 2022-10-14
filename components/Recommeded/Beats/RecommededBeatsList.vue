<template>
  <BaseItemsList>
    <MainBeat v-for="item in list" :key="item.id" :data="item" />
  </BaseItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  list: Beat[];
}>();
</script>
