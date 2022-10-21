<template>
  <div class="w-full flex flex-col gap-[.6vw] items-center">
    <img
      :src="data.image"
      class="rounded-full object-cover h-[5.5vw] w-[5.5vw] shadow-lg"
    />
    <p
      class="w-full text-black text-center font-semibold text-[.95vw] w-full truncate"
    >
      {{ data.displayedName ? data.displayedName : data.username }}
    </p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
