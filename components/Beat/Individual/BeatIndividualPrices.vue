<template>
  <div class="border-[1px] rounded-[10px] p-[20px] flex flex-col gap-[20px]">
    <div class="flex justify-between">
      <p class="text-[18px] font-semibold text-black flex items-center">
        Покупка
      </p>
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
