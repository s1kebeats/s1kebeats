<template>
  <main class="grow flex flex-col items-center gap-[40px] pt-[20px] pb-[40px]">
    <h1 v-if="isError">{{ error }}</h1>
    <template v-else>
      <SectionAuthorIndividualLoadingShimmer v-if="isLoading" key="shimmer" />
      <SectionAuthorIndividual v-else key="main" :data="data.data" />
    </template>
  </main>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute();
const { isLoading, isError, data, error } = useQuery(
  `${route.params.username}-profile`,
  () => axios.get(`http://localhost:3000/api/users/${route.params.username}`)
);
</script>
