<template>
  <div class="w-full flex flex-col items-center">
    <img
      :src="data.image"
      class="rounded-full object-cover h-[100px] w-[100px] shadow-lg"
    />
    <p class="mt-3 w-full text-black text-center font-semibold text-xl w-full truncate">
        {{ data.displayedName ? data.displayedName : data.username }}
    </p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
