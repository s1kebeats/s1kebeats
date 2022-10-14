<template>
  <BaseItemsList>
    <MainAuthor v-for="item in list" :key="item.username" :data="item" />
  </BaseItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  list: AuthorIndividual[];
}>();
</script>
