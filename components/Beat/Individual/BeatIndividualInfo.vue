<template>
  <div
    class="border-base-200 border-[1px] rounded-lg w-[400px] flex flex-col items-center py-8 px-7"
  >
    <BeatIndividualInfoTop :beat="beat" />
    <!-- <a
      v-if="beat"
      :href="beat.wave"
      class="shadow-md w-full h-[30px] bg-green-500 rounded-md text-white text-sm gap-[5px] mt-3 flex items-center justify-center transition-all hover:bg-green-600"
      @click="downloadIncrement"
    >
      <DownloadCloudSVG />
      Free download
    </a> -->
    <!-- <BaseLoadingShimmer v-else class="w-full h-[30px] mt-3 rounded-md" /> -->
    <BeatIndividualInfoBottom :beat="beat" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  beat: BeatIndividual;
}>();
</script>
<style lang="scss"></style>
