<template>
  <div class="border-t-[1px] pt-[20px] flex gap-[20px]">
    <BeatIndividualPricesCard
      :data="{
        title: 'WAV Неогранич.',
        price: data.wavePrice,
        desc: 'MP3 + WAV',
        value: 'wavePrice',
      }"
    />
    <BeatIndividualPricesCard
      v-if="data.stemsPrice"
      :data="{
        title: 'Track-out Неогранич.',
        price: data.stemsPrice,
        desc: 'MP3 + WAV + Дорожки',
        value: 'stemsPrice',
      }"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
