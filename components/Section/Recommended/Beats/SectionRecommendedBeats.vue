<template>
  <section class="py-5 responsive">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-xl font-semibold my-5 text-black">
        Рекоммендуемые биты
      </h1>
      <NuxtLink
        class="hover:text-black transition-all"
        to="/beats?orderBy=createdAt"
      >
        Посмотреть все биты
      </NuxtLink>
    </div>
    <h1 v-if="error">Возникла ошибка.</h1>
    <SectionRecommendedBeatsList
      v-else
      :list="!pending ? data : null"
    />
  </section>
</template>
<script setup lang="ts">
// const{ data, pending, error, refresh } = await useFetch('http://localhost:3000/api/beats')
const error = ref(false)
const pending = ref(false)
const data = ref<Beat[]>([
    {id: 1, name: 'Flexin on this bih hold up', bpm: 90, author: {
      username: 'sbeats', displayedName: 's1kebeats',
    }, image: '/sample.jpg', mp3: '/sample.mp3', wavePrice: 1099},
    {id: 2, name: 'Get dripped', bpm: 120, author: {
      username: 'earlonthebeat'
    }, image: '/sample.jpg', mp3: '/sample.mp3', wavePrice: 3599},
    {id: 3, name: 'Solid', bpm: 140, author: {
      username: 'jpbeats', displayedName: 'JP',
    }, image: '/sample.jpg', mp3: '/sample.mp3', wavePrice: 799},
])
</script>
