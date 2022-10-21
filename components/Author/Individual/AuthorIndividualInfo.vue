<template>
  <article
    class="self-start border-[1px] rounded-[.6vw] w-[19vw] flex flex-col items-center gap-[var(--section-gap)] py-[1.4vw] px-[1.2vw]"
  >
    <AuthorIndividualInfoBase :data="data" />
    <AuthorIndividualInfoChars :data="data" />
    <AuthorIndividualInfoAbout v-if="data.about" :data="data.about" />
    <AuthorIndividualInfoSocials
      v-if="data.vkLink || data.youtubeLink || data.instagramLink"
      :data="data"
    />
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
