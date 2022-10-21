<template>
  <div class="border-[1px] rounded-[.6vw] p-5 flex flex-col gap-[var(--section-gap)]">
    <div class="flex justify-between">
      <p class="text-lg font-semibold text-black flex items-center">Покупка</p>
      <BeatIndividualCartControls :data="data" />
    </div>
    <BeatIndividualPricesSelect :data="data" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
