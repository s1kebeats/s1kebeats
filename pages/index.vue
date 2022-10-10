<template>
  <SectionLanding />
  <SectionItemsList title="Рекоммендуемые биты" link-title="Посмотреть все биты" link-url="/beats?orderBy=createdAt">
    <template v-if="recommendedBeatsData.pending || recommendedAuthorsData.pending">
      <BeatLoadingShimmer v-for="_ in Array(6)" />
    </template>
    <RecommededBeatsList v-else :list="recommendedBeatsData.data" />
  </SectionItemsList>
  <SectionItemsList title="Рекоммендуемые авторы">
    <template v-if="recommendedBeatsData.pending || recommendedAuthorsData.pending">
      <AuthorLoadingShimmer v-for="_ in Array(8)" />
    </template>
    <RecommededAuthorsList v-else :list="recommendedAuthorsData.data" />
  </SectionItemsList>
</template>
<script setup lang="ts">
const recommendedBeatsData: any = reactive(await useFetch('http://localhost:3000/api/beats'))
const recommendedAuthorsData: any = reactive(await useFetch('http://localhost:3000/api/users/')) 
</script>