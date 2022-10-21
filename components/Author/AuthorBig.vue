<template>
    <article class="flex flex-col gap-2">
      <NuxtLink :to="`/${data.username}`" class="w-[calc(var(--variable-width)/6)] h-[calc(var(--variable-width)/6)] rounded-full">
        <img
          :src="data.image"
          class="w-full h-full rounded-full hover:brightness-[60%] transition-all"
          alt="Author image"
        />
      </NuxtLink>
      <NuxtLink
        :to="`/${data.username}`"
        class="text-black text-2xl text-center font-semibold truncate link link-hover"
      >
        {{ data.displayedName ? data.displayedName : data.username }}
      </NuxtLink>
    </article>
  </template>
  <script setup lang="ts">
  const props = defineProps<{
    data: Author;
  }>();
  </script>
  