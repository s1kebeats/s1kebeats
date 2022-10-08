<template>
  <section class="py-5 responsive">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-xl font-semibold my-5 text-black">
        Самые популярные
      </h1>
      <NuxtLink
        class="hover:text-black transition-all"
        to="/beats?orderBy=createdAt"
      >
        Посмотреть все биты
      </NuxtLink>
    </div>
    <h1 v-if="error">Возникла ошибка.</h1>
    <SectionNewestBeatsList
      v-else
      :list="!pending ? data : null"
    />
  </section>
</template>
<script setup lang="ts">
const{ data, pending, error, refresh } = await useFetch('http://localhost:3000/api/beats')
</script>
