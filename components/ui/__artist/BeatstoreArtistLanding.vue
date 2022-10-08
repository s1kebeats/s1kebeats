<template>
  <NuxtLink
    :to="`/beats?ordering=-id&artist=${artist.id}`"
    class="artist_landing select-none rounded-full bg-gradient-to-tr from-[#f3effc] to-primary flex items-center justify-center text-white text-lg shadow-lg hover:from-black hover:to-primary transition-all 930:text-sm"
  >
    {{ artist.name }}
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
  artist: Artist;
}>();
</script>
