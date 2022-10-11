<template>
  <div class="border-y-[1px] py-5 flex gap-5">
    <BeatPricesCard :data="{ title: 'WAV Неогранич.', price: prices[0], desc: 'MP3 + WAV', value: 'wavePrice' }"  />
    <BeatPricesCard v-if="prices[1]" :data="{ title: 'Track-out Неогранич.', price: prices[1], desc: 'MP3 + WAV + Дорожки', value: 'stemsPrice' }" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  prices: [number, number?];
}>();
</script>
