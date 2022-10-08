<template>
  <section class="py-5 responsive">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-xl font-semibold my-5 text-black">
        Most popular
      </h1>
      <NuxtLink
        class="hover:text-black transition-all"
        to="/beats?orderBy=createdAt"
      >
        See all beats
      </NuxtLink>
    </div>
    <h1 v-if="error">An error occured.</h1>
    <SectionMostPopularList
      v-else
      :list="!pending ? data : null"
    />
  </section>
</template>
<script setup lang="ts">
const{ data, pending, error, refresh } = await useFetch('http://localhost:3000/api/beats')
</script>
