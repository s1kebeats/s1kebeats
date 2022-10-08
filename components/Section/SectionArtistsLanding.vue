<template>
  <section class="responsive py-5 mb-12">
    <h1 class="text-left text-xl font-semibold my-5 text-black">Artists</h1>
    <span v-if="isError">Error: {{ error }}</span>
    <BeatstoreArtistListLanding
      v-else
      :list="!isLoading ? data!.data.results.slice(0, 10) : null"
    />
  </section>
</template>
<script setup lang="ts">
import axios from "axios";
import { useQuery } from "vue-query";
import BeatstoreArtistListLanding from "@/components/ui/__lists/BeatstoreArtistListLanding.vue";
// fetch artists data
const { isLoading, isError, data, error } = useQuery(
  "artists",
  () => axios.get("http://localhost:8000/api/artists/"),
  { staleTime: 1000 * 60 * 5 }
);
</script>
