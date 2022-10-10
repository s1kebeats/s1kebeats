<template>
  <div
    class="artist_landing__list flex justify-center flex-wrap overflow-hidden"
  >
    <template v-if="list">
      <BeatstoreArtistLanding
        v-for="artist in list"
        :key="artist.id"
        :artist="artist"
      />
    </template>
    <BaseLoadingShimmer
      v-for="item in [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]"
      v-else
      class="artist_landing rounded-full"
    />
  </div>
</template>
<script setup lang="ts">
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
import BeatstoreArtistLanding from "@/components/ui/__artist/BeatstoreArtistLanding.vue";
const props = defineProps<{
  list: Artist[] | null;
}>();
</script>
