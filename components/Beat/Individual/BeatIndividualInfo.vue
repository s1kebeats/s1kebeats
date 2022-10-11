<template>
  <div
    class="border-base-200 border-[1px] rounded-lg w-[360px] flex flex-col items-center gap-5 py-8 px-7"
  >
    <BeatIndividualBase :data="data" />
    <a
      :href="data.mp3"
      download=""
      class="shadow-md w-full h-[30px] bg-green-500 rounded-md text-white text-sm gap-2 flex items-center justify-center transition-all hover:bg-green-600"
    >
      Скачать бесплатно
      <img src="~/assets/images/download-cloud.svg" class="w-[17px]">
    </a>
    <BeatIndividualChars :data="data" />
    <BeatIndividualTags v-if="data.tags.length" :data="data" />
    <BeatIndividualDescription v-if="data.description" :data="data.description" />
  </div>
</template>
<script setup lang="ts">
import BeatIndividualDescription from './BeatIndividualDescription.vue';
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
