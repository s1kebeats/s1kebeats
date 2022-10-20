<template>
  <article class="flex flex-col gap-2">
    <NuxtLink :to="`/${data.username}`" class="rounded-full">
      <img
        :src="data.image"
        class="w-[167.5px] h-[167.5px] rounded-full hover:brightness-[60%] transition-all"
        alt="Author image"
      />
    </NuxtLink>
    <NuxtLink
      :to="`/${data.username}`"
      class="text-black text-md text-center font-semibold truncate link link-hover"
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
