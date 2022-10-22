<template>
  <div
    class="cursor-pointer rounded-[10px] border-[1px] text-black py-[8px] px-[10px] w-[300px] transition-all"
    :class="
      store.getSelected() === data.value
        ? 'border-primary bg-[rgba(121,69,252,.15)]'
        : 'hover:border-primary'
    "
    @click="select"
  >
    <p class="text-[18px] font-semibold pb-[4px]">{{ data.title }}</p>
    <p class="text-[14px] font-semibold text-primary">{{ data.price }}руб.</p>
    <p class="text-[12px]">{{ data.desc }}</p>
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
