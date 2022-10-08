<template>
  <div
    data-test="searchPanel"
    class="flex justify-center box-border responsive pb-5"
  >
    <form class="w-full flex flex-wrap gap-3">
        <fieldset class="flex items-center gap-1 bpm w-[100px]">
          <input
            id="bpm"
            data-test="bpmInput"
            type="number"
            size="3"
            name="bpm"
            min="1"
            max="300"
            placeholder="1"
            :value="searchQuery.bpm"
            @input.prevent="debounceInputBpm"
            class="w-full input input-xs input-bordered focus:outline-none text-black"
          />
          <label
            for="bpm"
            class="text-sm text-black"
          >
            BPM
          </label>
        </fieldset>
        <fieldset class="flex items-center gap-2 flex-1 min-w-[170px] max-w-[200px]">
          <input
            id="name"
            data-test="nameInput"
            type="text"
            placeholder="name"
            name="nm"
            :value="searchQuery.name"
            @input="debounceInputName"
            class="w-full input input-xs input-bordered input-primar focus:outline-none focus:border-base-300 text-black"
          />
        </fieldset>
      <BeatstoreArtists @update-artist-query="updateArtistQuery" />
    </form>
  </div>
</template>
<script lang="ts">
type id = number | null;
interface searchQuery {
  name?: string;
  bpm?: string;
  artist?: id[];
}
interface stringQuery {
  name?: string;
  bpm?: string;
  artist?: string;
}
</script>
<script setup lang="ts">
import BeatstoreArtists from "@/components/modules/BeatstoreArtists.vue";
import { useRoute } from "vue-router";
import { reactive, watch } from "vue";
const route = useRoute();
const emit = defineEmits<{
  (e: "updateSearchQuery", query: stringQuery): void;
}>();
// search query object
const searchQuery = reactive<searchQuery>({
  bpm: route.query.bpm ? String(route.query.bpm) : '',
  name: route.query.name ? String(route.query.name) : '',
  artist: [],
});
// fires on emit from ArtistList, updates local search query with new artists list
function updateArtistQuery(list: number[] | []): void {
  searchQuery.artist = list;
}
// interval for debouncing bpm input
let debounceBpm: number;
function debounceInputBpm(e: Event): void {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/[^\d,]/g, "");
  clearTimeout(debounceBpm);
  debounceName = setTimeout(() => {
    searchQuery.bpm = target.value;
  }, 500);
}
// interval for debouncing name input
let debounceName: number;
function debounceInputName(e: Event): void {
  const target = e.target as HTMLInputElement;
  clearTimeout(debounceName);
  debounceName = setTimeout(() => {
    searchQuery.name = target.value;
  }, 750);
}
// emit new search query on every update
watch(searchQuery, () => {
  const query = <stringQuery>{};
  if (searchQuery.bpm) query.bpm = searchQuery.bpm;
  if (searchQuery.name) query.name = searchQuery.name;
  if (searchQuery.artist.length) query.artist = searchQuery.artist.join(",");
  emit("updateSearchQuery", query);
});
</script>