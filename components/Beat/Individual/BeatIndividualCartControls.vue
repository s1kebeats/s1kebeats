<template>
  <div class="flex items-center gap-5">
    <div class="text-black text-left text-sm">
      TOTAL:
      <span class="font-semibold">{{ data[store.getSelected()] }}руб.</span>
    </div>
    <button
      class="text-white text-sm px-3 rounded-lg h-[40px] w-[200px] shadow-md flex items-center gap-2 transition-all bg-green-500 hover:bg-green-600"
      @click="store.addItem(data.id, store.getSelected())"
    >
      <img src="~/assets/images/cart.svg" />
      <span class="w-full text-center">{{
        store.checkItem(data.id, store.getSelected())
          ? "Посмотреть корзину"
          : "Добавить в корзину"
      }}</span>
    </button>
  </div>
</template>
<script setup lang="ts">
const store = useCart();
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
