<template>
  <main class="grow flex flex-col items-center gap-10 pb-10">
    <SectionLanding />
    <SectionRecommendedBeats :data="recommendedBeatsData.data" />
    <SectionRecommendedAuthors :data="recommendedAuthorsData.data" />
  </main>
</template>
<script setup lang="ts">
const recommendedBeatsData: any = reactive(
  await useFetch("http://localhost:3000/api/beats")
);
const recommendedAuthorsData: any = reactive(
  await useFetch("http://localhost:3000/api/users/")
);
</script>
