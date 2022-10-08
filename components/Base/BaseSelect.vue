<template>
  <div class="relative">
    <button
      ref="selectButton"
      class="flex hover:text-black px-2 rounded-lg text-sm h-[24px] items-center gap-1"
      @click="toggleSelect"
      @focusout="hideSelect"
    >
      <span :class="showSelect ? 'text-black' : ''">
        {{ selectedValue.text }}
      </span>
      <img src="~/assets/chevron-down.svg" class="w-[16px] transition-all" :class="showSelect ? 'rotate-180' : ''">
    </button>
    <div
      v-show="showSelect"
      ref="orderingsPanel"
      class="absolute z-[2] w-[115px] border-full border-[1px] bg-base-100 rounded-md p-2 flex flex-col gap-1 shadow-md right-0"
    >
      <button
        v-for="option in options"
        :key="option.id"
        ref="orderOption1"
        class="selectOption w-full flex hover:text-black px-2 rounded-lg text-sm items-center gap-1"
        :class="selectedValue.id == option.id ? 'text-black' : ''"
        @click="selectOption(option)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  options: { id: number; value: number | string; text: string }[];
}>();
const emit = defineEmits<{
  (e: "select", value: number | string): void;
}>();
const selectButton = ref();
const showSelect = ref(false);
const selectedValue = ref();
// changing value
const selectOption = (option: {
  id: number;
  value: number | string;
  text: string;
}): void => {
  if (selectedValue.value.id === option.id) {
    return;
  }
  Object.assign(selectedValue.value, option);
  // hiding options after click
  showSelect.value = false;
  // emitting new value
  emit("select", selectedValue.value);
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
</script>
