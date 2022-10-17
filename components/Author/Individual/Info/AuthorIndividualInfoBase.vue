<template>
  <div class="w-full flex flex-col items-center">
    <img
      :src="data.image"
      class="rounded-full object-cover h-[100px] w-[100px] shadow-lg"
    />
    <div class="mt-3 w-full flex flex-col items-center">
      <div class="text-black text-center font-semibold text-xl w-full truncate">
        {{ data.displayedName ? data.displayedName : data.username }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
