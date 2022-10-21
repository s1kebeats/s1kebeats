<template>
  <SectionItemsList class="w-[var(--section-width)]" title="Рекоммендуемые авторы" link-title="Посмотреть всех авторов" link-url="/authors">
    <MainAuthor v-for="item in data" :key="item.username" :data="item" />
  </SectionItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Author[];
}>();
</script>
