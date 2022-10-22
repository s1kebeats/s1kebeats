<template>
  <main class="grow flex flex-col items-center gap-[20px] pb-[40px]" :class="store.getAudioDuration() ? 'pb-[80px]' : ''">
    <SectionLanding />
    <SectionRecommendedBeats :data="recommendedBeatsData.data" />
    <SectionRecommendedAuthors :data="recommendedAuthorsData.data" />
  </main>
</template>
<script setup lang="ts">
const store = useStore()
const recommendedBeatsData: any = reactive(
  await useFetch("http://localhost:3000/api/beats")
);
const recommendedAuthorsData: any = reactive(
  await useFetch("http://localhost:3000/api/users/")
);
</script>
