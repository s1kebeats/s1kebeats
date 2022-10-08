<template>
  <button
    class="border-[1px] text-black cursor-pointer rounded-lg min-w-[300px] transition-all py-3 px-5 hover:bg-black hover:text-white hover:border-black"
    @click="selectCard"
  >
    <p class="text-left font-semibold">{{ card.title }}</p>
    <p v-if="+card.price" class="text-left text-sm">
      {{ card.price }}<span class="font-semibold!"> RUB</span>
    </p>
    <p v-else class="text-left text-sm">Free</p>
    <p class="text-left text-xs mt-1">{{ card.description }}</p>
    <!-- <div
      class="bg-primary rounded-r-lg flex items-center justify-center w-[80px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
        width="24px"
      >
        <path
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M112 268l144 144 144-144M256 392V100"
        />
      </svg>
    </div> -->
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  card: PriceCard;
}>();
const emit = defineEmits<{
  (e: "selectCard", card: PriceCard): void;
}>();
const selectCard = () => {
  emit("selectCard", props.card);
};
</script>
