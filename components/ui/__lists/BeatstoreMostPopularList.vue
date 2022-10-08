<template>
  <div class="flex flex-wrap gap-5 h-[292px] 930:h-[237px] overflow-hidden">
    <template v-if="list">
      <BeatstoreBeat v-for="beat in list" :key="beat.id" :beat="beat" />
    </template>
    <template v-else>
      <BeatstoreBeatShimmer v-for="beat in [{}, {}, {}, {}, {}, {}, {}]" />
    </template>
  </div>
</template>
<script setup lang="ts">
import BeatstoreBeat from "@/components/ui/__beat/BeatstoreBeat.vue";
import BeatstoreBeatShimmer from "@/components/ui/__beat/BeatstoreBeatShimmer.vue";
const props = defineProps<{
  list: Beat[] | null;
}>();
</script>
