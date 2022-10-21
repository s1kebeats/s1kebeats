<template>
  <main class="grow flex flex-col items-center gap-10 pt-5 pb-10">
    <h1 v-if="isError">{{ error }}</h1>
    <template v-else>
      <SectionBeatIndividualLoadingShimmer v-if="isLoading" />
      <SectionBeatIndividual v-else :data="data.data" />
    </template>
  </main>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute();
const { isLoading, isError, data, error } = useQuery(
  `${route.params.id}-beat`,
  () => axios.get(`http://localhost:3000/api/beats/${route.params.id}`)
);
definePageMeta({ layout: "beat" });
</script>
