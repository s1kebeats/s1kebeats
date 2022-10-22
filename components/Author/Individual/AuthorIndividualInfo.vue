<template>
  <article
    class="self-start border-[1px] rounded-[10px] w-[19vw] flex flex-col items-center gap-[20px] p-[25px]"
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
