<template>
  <div class="w-full border-t-[1px]">
    <div class="mt-5 text-sm text-black">
      <p class="flex justify-between">
        <span class="text-left">Биты</span>
        <span class="w-full text-right">
          {{ data.beatsCount }}
        </span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Прослушивания</span>
        <span class="w-full text-right">
          {{ data.playsCount }}
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
