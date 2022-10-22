<template>
  <div class="flex items-center gap-[20px]">
    <p class="text-black text-left text-[14px]">
      ИТОГ:
      <span class="font-semibold">{{ data[store.getSelected()] }}руб.</span>
    </p>
    <button
      class="text-white text-[14px] px-[20px] rounded-[10px] h-[40px] gap-[10px] shadow-md flex items-center transition-all bg-green-500 hover:bg-green-600"
      @click="store.addItem(data.id, store.getSelected())"
    >
      <icon name="material-symbols:shopping-cart-rounded" size="20px" />
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
