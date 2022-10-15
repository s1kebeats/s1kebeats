<template>
  <main class="grow flex flex-col items-center gap-10">
    <!-- <transition-group name="overlay"> -->
    <SectionBeatIndividualLoadingShimmer v-if="isLoading" key="shimmer" />
    <SectionBeatIndividual v-else key="main" :data="data.data" />
    <!-- </transition-group> -->
  </main>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const store = useStore();
const route = useRoute();
const { isLoading, isError, data, error } = useQuery(
  `${route.params.id}-beat`,
  () => axios.get(`http://localhost:3000/api/beats/${route.params.id}`)
);
definePageMeta({ layout: "beat" });
</script>
