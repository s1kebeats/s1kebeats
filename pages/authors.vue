<template>
  <main class="grow flex flex-col items-center gap-10 py-10">
    <h1 v-if="isError">{{ error }}</h1>
    <template v-else>
      <SectionAuthorsLoadingShimmer v-if="isLoading" key="shimmer" />
      <SectionAuthors v-else key="main" :data="data.data" />
    </template>
  </main>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute();
const { isLoading, data, isError, error, refetch } = await useQuery(
  route.query.query ? `authors-${route.query.query}` : 'authors',
  () => axios.get(route.query.query ? `http://localhost:3000/api/users?query=${route.query.query}` : 'http://localhost:3000/api/users/')
);
onUpdated(() => {
  refetch.value()
})
</script>
