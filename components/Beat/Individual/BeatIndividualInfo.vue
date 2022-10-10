<template>
  <div
    class="border-base-200 border-[1px] rounded-lg w-[360px] flex flex-col items-center gap-5 py-8 px-7"
  >
    <BeatIndividualInfoTop :data="data" />
    <a
      :href="data.mp3"
      download=""
      class="shadow-md w-full h-[30px] bg-green-500 rounded-md text-white text-sm gap-2 flex items-center justify-center transition-all hover:bg-green-600"
    >
      Скачать бесплатно
      <img src="~/assets/images/download_indi.svg" class="w-[17px]">
    </a>
    <BeatIndividualInfoBottom :data="data" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
