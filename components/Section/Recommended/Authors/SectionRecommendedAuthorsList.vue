<template>
    <div class="flex flex-wrap gap-5 h-[199.5px] 930:h-[237px] overflow-hidden">
      <template v-if="list">
        <MainAuthor v-for="author in list" :key="author.username" :author="author" />
      </template>
      <template v-else>
        <AuthorLoadingShimmer v-for="author in [{}, {}, {}, {}, {}, {}, {}, {}]" />
      </template>
    </div>
  </template>
  <script setup lang="ts">
  const props = defineProps<{
    list: AuthorIndividual[] | null;
  }>();
  </script>
  