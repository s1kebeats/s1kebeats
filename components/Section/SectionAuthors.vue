<template>
  <SectionItemsList class="responsive" title="Авторы">
    <AuthorBig v-for="item in data" :key="item.username" :data="item" />
  </SectionItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Author[];
}>();
</script>
