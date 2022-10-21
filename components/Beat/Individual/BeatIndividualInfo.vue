<template>
  <article
    class="border-base-200 border-[1px] rounded-[.6vw] w-[20vw] flex flex-col items-center gap-[var(--section-gap)] py-[1.4vw] px-[1.2vw]"
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
