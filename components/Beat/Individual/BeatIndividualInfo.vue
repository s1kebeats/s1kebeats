<template>
  <div
    class="border-base-200 border-[1px] rounded-lg w-[300px] flex flex-col items-center py-8 px-7"
  >
    <BeatstoreBeatIndividualMainInfoVue :beat="beat" />
    <a
      v-if="beat"
      :href="beat.wave"
      class="shadow-md w-full h-[30px] bg-green-500 rounded-md text-white text-sm gap-[5px] mt-3 flex items-center justify-center transition-all hover:bg-green-600"
      @click="downloadIncrement"
    >
      <DownloadCloudSVG />
      Free download
    </a>
    <LoadingShimmer v-else class="w-full h-[30px] mt-3 rounded-md" />
    <BeatstoreBeatIndividualAdditionalInfoVue :beat="beat" />
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import BeatstoreBeatIndividualMainInfoVue from "@/components/ui/__beatIndividual/BeatstoreBeatIndividualMainInfo.vue";
import BeatstoreBeatIndividualAdditionalInfoVue from "@/components/ui/__beatIndividual/BeatstoreBeatIndividualAdditionalInfoVue.vue";
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
import DownloadCloudSVG from "@/components/ui/__svg/DownloadCloudSVG.vue";
const props = defineProps<{
  beat: Beat;
}>();
const downloadIncrement = () => {
  axios.get(`http://localhost:8000/api/beat/${props.beat.id}/download`);
};
</script>
<style lang="scss"></style>
