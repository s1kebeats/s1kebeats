<template>
  <article
    class="border-base-200 border-[1px] rounded-[10px] w-[400px] flex flex-col items-center gap-[20px] p-[25px]"
  >
    <BeatIndividualInfoBase :data="data" />
    <BeatIndividualDownloadButton :url="data.mp3" />
    <BeatIndividualInfoChars :data="data" />
    <BeatIndividualInfoTags v-if="data.tags.length" :data="data.tags" />
    <BeatIndividualInfoDescription
      v-if="data.description"
      :data="data.description"
    />
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
