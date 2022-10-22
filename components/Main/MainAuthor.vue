<template>
  <article class="flex flex-col gap-[10px]">
    <NuxtLink :to="`/${data.username}`" class="rounded-full">
      <img
        :src="data.image"
        class="h-[var(--section-item-7)] w-[var(--section-item-7)] rounded-full hover:brightness-[60%] transition-all"
      />
    </NuxtLink>
    <NuxtLink
      :to="`/${data.username}`"
      class="text-black text-[18px] text-center font-semibold truncate link link-hover"
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
