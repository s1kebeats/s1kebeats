<template>
  <div class="flex flex-wrap gap-5 h-[322px] 930:h-[237px] overflow-hidden">
    <template v-if="list">
      <MainBeat v-for="beat in list" :key="beat.id" :beat="beat" />
    </template>
    <template v-else>
      <BeatLoadingShimmer v-for="beat in [{}, {}, {}, {}, {}, {}, {}]" />
    </template>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  list: Beat[] | null;
}>();
</script>
