<template>
  <div class="flex justify-between items-center responsive">
    <h1 class="text-left text-xl font-semibold mt-5 mb-4 text-black">Beats</h1>
    <div class="flex items-center gap-1">
      <BeatstoreOrderings @change-ordering="changeOrdering" />

      <button
        data-test="searchButton"
        class="flex hover:text-black px-2 rounded-[.6vw] text-sm h-[24px] items-center gap-[6px]"
        @click="toggleSearch"
      >
        Filters
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon w-[14px]"
          viewBox="0 -30 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M32 144h448M112 256h288M208 368h96"
          />
        </svg>
      </button>
    </div>
  </div>
  <BeatstoreSearchPanel
    v-show="showSearch"
    @update-search-query="updateSearchQuery"
  />
</template>
<script lang="ts"></script>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { useClasslistToggle } from "@/composables/useClasslistToggle";
import BeatstoreSearchPanel from "@/components/modules/BeatstoreSearchPanel.vue";
import BeatstoreOrderings from "@/components/ui/BeatstoreOrderings.vue";
interface searchQuery {
  name?: string;
  bpm?: string;
  artist?: string;
  ordering: string;
}
interface stringQuery {
  name?: string;
  bpm?: string;
  artist?: string;
}
// route
const route = useRoute();
const emit = defineEmits<{ (e: "search", query: string): void }>();
// search panel show state
const showSearch = ref(false);
const toggleSearch = (e: Event): void => {
  const target = e.target as HTMLElement;
  showSearch.value = !showSearch.value;
  // change filters button styles
  useClasslistToggle(target, ["text-black"]);
};
// search query object
const searchQuery = reactive<searchQuery>({
  ordering: route.query.ordering ? String(route.query.ordering) : "-id",
});
const changeOrdering = (ordering: "-listenings" | "-id") => {
  searchQuery.ordering = ordering;
  emit("search", `?${new URLSearchParams(searchQuery).toString()}`);
};
// forming and submitting search query
const updateSearchQuery = (newQuery: stringQuery): void => {
  // cleaning previous search query values
  if (!("bpm" in newQuery)) delete searchQuery.bpm;
  if (!("name" in newQuery)) delete searchQuery.name;
  if (!("artist" in newQuery)) delete searchQuery.artist;
  // adding new values
  Object.assign(searchQuery, newQuery);
  emit("search", `?${new URLSearchParams(searchQuery).toString()}`);
};
</script>
