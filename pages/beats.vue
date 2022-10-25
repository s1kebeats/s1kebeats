<template>
  <main class="grow flex flex-col items-center gap-[40px] py-[40px]">
    <h1 v-if="isError">{{ error }}</h1>
    <template v-else>
      <SectionAuthorsLoadingShimmer v-if="isLoading" key="shimmer" />
      <SectionBeats v-else key="main" :data="data.data" />
    </template>
  </main>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute();
const { isLoading, data, isError, error, refetch } = await useQuery(
  route.query.q ? `beats-${route.query.q}` : 'beats',
  () =>
    axios.get(
      route.query.q
        ? `http://localhost:3000/api/beats?q=${route.query.q}`
        : "http://localhost:3000/api/beats/"
    )
);

onUpdated(() => {
  refetch.value();
});
</script>
