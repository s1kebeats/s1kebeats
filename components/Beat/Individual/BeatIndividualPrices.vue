<template>
  <div class="border-[1px] rounded-lg p-5 flex flex-col gap-5">
    <div class="flex justify-between">
      <div class="text-lg font-semibold text-black flex items-center">
        Покупка
      </div>
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
