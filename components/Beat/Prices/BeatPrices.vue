<template>
    <div class="flex justify-between">
      <div class="text-lg font-semibold text-black flex items-center">
        Покупка
      </div>
      <div class="flex items-center gap-5">
        <div class="text-black text-left text-sm">
          TOTAL:
          <span class="font-semibold">{{ data[store.getSelected()] }}руб.</span>
        </div>
        <button
          class="bg-primary text-white text-sm px-3 rounded-lg h-[40px] w-[200px] shadow-md flex items-center gap-2"
          @click="store.checkItem(data.id, store.getSelected()) ? store.removeItem(data.id) : store.addItem(data.id, store.getSelected())"
        >
          <img src="~/assets/images/cart.svg">
          <span class="w-full text-center">{{ store.checkItem(data.id, store.getSelected()) ? 'Посмотреть корзину' : 'Добавить в корзину' }}</span>
        </button>
      </div>
    </div>
    <BeatPricesSelect :prices="data.stemsPrice ? [data.wavePrice, data.stemsPrice ] : [data.wavePrice]" />
</template>
<script setup lang="ts">
const store = useCart()
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
