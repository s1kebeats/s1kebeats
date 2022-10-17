<template>
  <main class="grow flex flex-col items-center gap-10">
    <SectionLanding />
    <SectionItemsList
      class="responsive"
      title="Рекоммендуемые биты"
      link-title="Посмотреть все биты"
      link-url="/beats?orderBy=createdAt"
    >
      <RecommededBeatsList :list="recommendedBeatsData.data" />
    </SectionItemsList>
    <SectionItemsList class="responsive" title="Рекоммендуемые авторы">
      <RecommededAuthorsList :list="recommendedAuthorsData.data" />
    </SectionItemsList>
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
