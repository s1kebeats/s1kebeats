<template>
  <div
    class="cursor-pointer rounded-lg border-[1px] text-black py-2 px-3 w-[300px] transition-all"
    :class="
      store.getSelected() === data.value
        ? 'border-primary bg-[rgba(121,69,252,.15)]'
        : 'hover:border-primary'
    "
    @click="select"
  >
    <div class="text-lg font-semibold pb-1">{{ data.title }}</div>
    <div class="text-sm font-semibold text-primary">{{ data.price }}руб.</div>
    <div class="text-xs">{{ data.desc }}</div>
  </div>
</template>
<script setup lang="ts">
const store = useCart();
const props = defineProps<{
  data: {
    title: string;
    price: number;
    desc: string;
    value: "wavePrice" | "stemsPrice";
  };
}>();
const select = () => {
  store.setSelected(props.data.value);
};
</script>
