<template>
  <div class="flex gap-5">
    <BeatstorePriceCard v-for="card in list" :card="card" />
  </div>
</template>
<script setup lang="ts">
import BeatstorePriceCard from "@/components/ui/__prices/BeatstorePriceCard.vue";
const props = defineProps<{
  list: PriceCard[];
}>();
</script>
<style lang="scss"></style>
