<template>
  <section
    class="flex-1 flex flex-col items-center pt-5 pb-[75px] min-h-[calc(100vh-85px)]"
  >
    <BeatstoreSearch @search="updateQuery" />
    <BeatList v-show="!loading" class="flex-1" :list="beatList" />
    <BeatstoreBeatShimmer v-show="loading" class="self-start" />
    <button
      v-show="next"
      data-test="loadmoreButton"
      class="btn bg-black text-white hover:bg-black btn-xs shadow-lg hover:brightness-95 transition-all mt-5"
      @click="loadMoreBeats"
    >
      Load more
    </button>
  </section>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import BeatList from "@/components/ui/__lists/BeatstoreBeatList.vue";
import BeatstoreSearch from "@/components/modules/BeatstoreSearch.vue";
import BeatstoreBeatShimmer from "@/components/ui/__beat/BeatstoreBeatShimmer.vue";

const router = useRouter();
const route = useRoute();

// loading state
const loading = ref(true);
const next = ref("");
const beatList = ref<Beat[]>([]);

// fetching data
const customFetch = async (url: string, mode?: boolean) => {
  // loading state on
  loading.value = true;
  // type for api response
  const data: { count: number; next: string; previous: string; results: [] } = (
    await axios.get(url)
  ).data;
  // update beatList
  if (mode) {
    beatList.value.push(...data.results);
  } else {
    beatList.value = [...data.results];
  }
  // save next page url
  next.value = data.next;
  // loading state off
  loading.value = false;
};
// update query and fetch data
const updateQuery = async (newValue: string) => {
  router.push(`/beats${newValue}`);
};
// load next page content and add it to the list
const loadMoreBeats = () => {
  customFetch(next.value, true);
};
// data laod on search
watch(
  () => route.query,
  () => {
    const query = route.query as Record<string, string>;
    customFetch(
      `http://localhost:8000/api/beats/?${new URLSearchParams(
        query
      ).toString()}`
    );
  }
);
// first data load
onMounted(() => {
  const query = route.query as Record<string, string>;
  customFetch(
    `http://localhost:8000/api/beats/?${new URLSearchParams(query).toString()}`
  );
});
</script>
