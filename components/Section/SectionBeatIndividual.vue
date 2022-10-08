<template>
  <section class="responsive py-5">
    <span v-if="isError">Error: {{ error }}</span>
    <div v-else class="flex items-start gap-5">
      <BeatstoreBeatIndividualInfo :beat="!isLoading ? data!.data : null" />
      <BeatstorePrices :beat="!isLoading ? data!.data : null" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import axios from "axios";
import { useQuery } from "vue-query";
import BeatstoreBeatIndividualInfo from "@/components/ui/__beatIndividual/BeatstoreBeatIndividualInfo.vue";
import BeatstorePrices from "@/components/ui/__beatIndividual/BeatstorePrices.vue";

const route = useRoute();
// fetch artists data
const { isLoading, isError, data, error } = useQuery(
  `beat/${route.params.id}`,
  () => axios.get(`http://localhost:8000/api/beat/${route.params.id}`)
);
</script>
