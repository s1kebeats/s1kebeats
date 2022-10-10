<template>
  <section class="responsive py-5">
    <span v-if="error">Возникла ошибка.</span>
    <div v-else class="flex justify-center gap-5">
      <BeatIndividualInfo :beat="!pending ? data : null" />
      <BeatPrices :beat="!pending ? data : null" />
    </div>
  </section>
</template>
<script setup lang="ts">
const route = useRoute();
// const{ data, pending, error, refresh } = await useFetch(`http://localhost:3000/api/beat/${route.params.id}`)
const error = ref(false)
const pending = ref(false)
const data = ref<BeatIndividual>({
  id: 1,
  name: 'Sum fire asfdsafsdfasddfaf beat',
  bpm: 140,
  createdAt: "2022-10-05T14:43:45.748Z",
  downloads: 9,
  plays: 10000,
  image: '/sample.jpg',
  mp3: '/sample.mp3',
  wavePrice: 1499,
  stemsPrice: 3099,
  likes: [],
  comments: [],
  tags: [],
  author: {
    displayedName: 'sikebeats',
    username: 'sbeats',
    image: '/sample.jpg'
  }
})
</script>
