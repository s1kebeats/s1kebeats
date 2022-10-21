<template>
  <div
    class="cursor-pointer rounded-[.6vw] border-[1px] text-black py-2 px-3 w-[300px] transition-all"
    :class="
      store.getSelected() === data.value
        ? 'border-primary bg-[rgba(121,69,252,.15)]'
        : 'hover:border-primary'
    "
    @click="select"
  >
    <p class="text-lg font-semibold pb-1">{{ data.title }}</p>
    <p class="text-sm font-semibold text-primary">{{ data.price }}руб.</p>
    <p class="text-xs">{{ data.desc }}</p>
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
