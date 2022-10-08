<template>
  <div class="relative">
    <button
      ref="selectButton"
      class="flex text-black rounded-lg text-sm h-[24px] items-center gap-[3px]"
      @click="toggleSelect"
      @focusout="hideSelect"
    >
      <span :class="showSelect ? 'text-black' : ''">
        {{ selectedOption.text }}
      </span>
      <img
        src="~/assets/images/chevron-down.svg"
        class="w-[15px] transition-all"
        :class="showSelect ? 'rotate-180 pb-[3px]' : ''"
      />
    </button>
    <div
      v-show="showSelect"
      ref="orderingsPanel"
      class="absolute z-[2] border-full border-[1px] bg-base-100 rounded-md py-1 flex flex-col gap-1 shadow-md right-0"
    >
      <button
        v-for="option in options"
        :key="option.id"
        ref="orderOption1"
        class="selectOption w-full flex hover:text-black px-3 rounded-lg text-sm items-center gap-1"
        :class="selectedOption.id == option.id ? 'text-black' : ''"
        @click="selectOption(option)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  options: { id: number; value: number | string; text: string; default: boolean; }[];
}>();
const emit = defineEmits<{
  (e: "select", value: number | string): void;
}>();
const selectButton = ref();
const showSelect = ref(false);
const selectedOption = ref<{ id: number; value: number | string; text: string; default: boolean; }>({
  id: null, value: null, text: null, default: null
});
// changing value
const selectOption = (option: {
  id: number;
  value: number | string;
  text: string;
  default: boolean;
}): void => {
  if (selectedOption.value.id === option.id) {
    return;
  }
  Object.assign(selectedOption.value, option);
  // emitting new value
  emit("select", selectedOption.value.value);
};
const toggleSelect = () => {
  showSelect.value = !showSelect.value;
};
const hideSelect = () => {
  if (!document.activeElement.classList.contains("selectOption")) {
    // need timeout to be able to change order
    setTimeout(() => {
      showSelect.value = false;
    }, 100);
  }
};
onBeforeMount(() => {
  selectOption(props.options.filter(item => item.default)[0])
})
</script>
