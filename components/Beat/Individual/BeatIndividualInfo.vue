<template>
  <article
    class="border-base-200 border-[1px] rounded-[.6vw] w-[360px] flex flex-col items-center gap-[var(--section-gap)] py-8 px-7"
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
