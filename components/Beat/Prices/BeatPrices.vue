<template>
  <div class="border-[1px] flex-1 rounded-lg p-5 flex flex-col gap-5">
    <div class="border-b-[1px] pb-5 mb-5d flex justify-between">
      <div class="text-lg font-semibold text-black flex items-center">
        Distribution
      </div>
      <div class="flex items-center gap-5">
        <div class="text-black text-left">
          <p class="text-xs">TOTAL:</p>
          <p class="font-semibold">${{ selected.price }}</p>
        </div>
        <button
          class="bg-primary text-white text-sm px-3 rounded-lg h-[40px] shadow-md flex items-center gap-2"
          @click="store.addToCart"
        >
          <CartSVG />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
    <BeatstorePriceCardList />
    <BeatstoreUsage />
  </div>
</template>
<script setup lang="ts">
const store = useStore()
const props = defineProps<{
  beat: Beat;
}>();
const selected = {
  price: 10,
};
</script>
