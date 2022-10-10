<template>
  <section class="py-5 responsive">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-xl font-semibold my-5 text-black">
        Рекоммендуемые авторы
      </h1>
    </div>
    <h1 v-if="error">Возникла ошибка.</h1>
    <SectionRecommendedAuthorsList
      v-else
      :list="!pending ? data : null"
    />
  </section>
</template>
<script setup lang="ts">
// const{ data, pending, error, refresh } = await useFetch('http://localhost:3000/api/users/')
const error = ref(false)
const pending = ref(false)
const data = ref<AuthorIndividual[]>([
    {username: 'sbeats', displayedName: 's1kebeats', image: '/sample.jpg'},
    {username: 'jpbeats', displayedName: 'JP', image: '/sample.jpg'},
    {username: 'earlonthebeat', image: '/sample.jpg'},
])
</script>
