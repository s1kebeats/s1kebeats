<template>
  <template v-if="list">
    <BeatstoreArtist
      v-for="artist in list"
      :key="artist.id"
      :artist="artist"
      :class="artistQuery.includes(artist.id) ? 'bg-black' : 'bg-primary'"
      @select-artist="selectArtist"
    />
  </template>
  <template v-else>
    <BaseLoadingShimmer
      v-for="item in [{}, {}, {}, {}]"
      class="rounded-lg border-none min-w-[90px] max-w-[110px] h-[24px] flex-1"
    />
  </template>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BeatstoreArtist from "@/components/ui/__artist/BeatstoreArtist.vue";
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
const route = useRoute();
const emit = defineEmits<{
  (e: "selectArtist", artist: number): void;
}>();
const props = defineProps<{
  list: Artist[] | null;
}>();
const artistQuery = computed((): number[] => {
  // updating artist query based on route query
  if (route.query.artist && typeof route.query.artist === "string")
    return route.query.artist.split(",").map((item: string): number => +item);
  return [];
});
const selectArtist = (id: number): void => {
  emit("selectArtist", id);
};
</script>
