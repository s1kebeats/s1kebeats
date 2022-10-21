<template>
    <article class="flex flex-col gap-[0.4vw]">
      <NuxtLink :to="`/${data.username}`" class="w-[var(--section-item-7)] h-[var(--section-item-7)] rounded-full">
        <img
          :src="data.image"
          class="w-full h-full rounded-full hover:brightness-[60%] transition-all"
          alt="Author image"
        />
      </NuxtLink>
      <NuxtLink
        :to="`/${data.username}`"
        class="text-black text-[1.25vw] text-center font-semibold truncate link link-hover"
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
  