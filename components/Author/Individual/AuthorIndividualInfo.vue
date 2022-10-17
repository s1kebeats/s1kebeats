<template>
  <div
    class="self-start border-base-200 border-[1px] rounded-lg w-[380px] flex flex-col items-center gap-5 py-8 px-7"
  >
    <AuthorIndividualInfoBase :data="data" />
    <AuthorIndividualInfoChars :data="data" />
    <AuthorIndividualInfoAbout v-if="data.about" :data="data.about" />
    <AuthorIndividualInfoSocials v-if="data.vkLink || data.youtubeLink || data.instagramLink" :data="data" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
