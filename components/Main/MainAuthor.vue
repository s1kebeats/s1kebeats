<template>
  <article class="flex flex-col gap-[0.4vw]">
    <NuxtLink :to="`/${data.username}`" class="rounded-[100%]">
      <img
        :src="data.image"
        class="h-[var(--section-item-7)] w-[var(--section-item-7)] rounded-[100%] hover:brightness-[60%] transition-all"
        alt="Author image"
      />
    </NuxtLink>
    <NuxtLink
      :to="`/${data.username}`"
      class="text-black text-[.85vw] text-center font-semibold truncate link link-hover"
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
