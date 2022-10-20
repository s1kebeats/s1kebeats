<template>
  <main class="grow flex flex-col items-center gap-10 pb-10">
    <h1 v-if="isError">{{ error }}</h1>
    <template v-else>
      <SectionAuthorIndividualLoadingShimmer v-if="isLoading" key="shimmer" />
      <SectionAuthorIndividual v-else key="main" :data="data.data" />
    </template>
  </main>
</template>
<script setup lang="ts">
import { useQuery } from 'vue-query';
import axios from "axios";
const route = useRoute();
const { isLoading, data, isError, error } = await useQuery(
    `authors-${route.query.query}`,
    () => axios.get(`http://localhost:3000/api/users/query=${route.query.query}`)  
)
</script>