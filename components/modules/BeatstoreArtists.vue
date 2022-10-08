<template>
  <span v-if="isError">Error: {{ error }}</span>
  <BeatstoreArtistList
    v-else
    :list="!isLoading ? data!.data.results : null"
    @select-artist="updateArtistQuery"
  />
</template>
<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useQuery } from "vue-query";
import BeatstoreArtistList from "@/components/ui/__lists/BeatstoreArtistList.vue";
const route = useRoute();
const emit = defineEmits<{ (e: "updateArtistQuery", query: number[]): void }>();
const artistQuery = ref<number[]>(
  route.query.artist && typeof route.query.artist === "string"
    ? route.query.artist.split(",").map((item: string) => +item)
    : []
);
const updateArtistQuery = (id: number) => {
  // remove artist from query if query already includes it
  if (artistQuery.value.includes(id))
    artistQuery.value = artistQuery.value.filter((item) => item !== id);
  // add artist to the query
  else {
    artistQuery.value.push(id);
  }
  // send query
  emit("updateArtistQuery", artistQuery.value);
};
// fetch artists data
onMounted(() => {
  if (artistQuery.value.length) emit("updateArtistQuery", artistQuery.value);
});

const { isLoading, isError, data, error } = useQuery(
  "artists",
  () => axios.get("http://localhost:8000/api/artists/"),
  { staleTime: 1000 * 60 * 5 }
);
</script>
