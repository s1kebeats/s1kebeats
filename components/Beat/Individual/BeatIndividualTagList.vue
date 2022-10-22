<template>
  <BaseItemsList class="gap-[4px]">
    <NuxtLink v-for="item in list" :to="`/search?tags=${item.id}`">
      <MainTag :data="item" />
    </NuxtLink>
  </BaseItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  list: Tag[];
}>();
</script>
