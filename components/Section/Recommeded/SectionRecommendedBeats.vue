<template>
  <SectionItemsList
    class="w-[var(--section-width)]"
    title="Рекоммендуемые биты"
    link-title="Посмотреть все биты"
    link-url="/beats?orderBy=createdAt"
  >
    <MainBeat v-for="item in data" :key="item.id" :data="item" />
  </SectionItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Beat[];
}>();
</script>
