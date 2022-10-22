<template>
  <div class="w-full flex flex-col gap-[10px] items-center">
    <img
      :src="data.image"
      class="rounded-full object-cover h-[110px] w-[110px] shadow-lg"
    />
    <p
      class="w-full text-black text-center font-semibold text-[18px] w-full truncate"
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
