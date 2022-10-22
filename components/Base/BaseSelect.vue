<template>
  <div class="relative">
    <button
      ref="selectButton"
      class="flex text-black rounded-[10px] text-[14px] items-center gap-[4px]"
      @click="toggleSelect"
      @focusout="hideSelect"
    >
      <span :class="showSelect ? 'text-black' : ''">
        {{ selectedOption.text }}
      </span>
      <Icon name="mdi:chevron-down" size="18px" class="cursor-pointer transition-all" :class="showSelect ? 'rotate-180' : ''" />
    </button>
    <transition name="modal">
      <div
        v-show="showSelect"
        ref="orderingsPanel"
        class="absolute z-[2] border-full border-[1px] bg-base-100 rounded-[6px] py-[2px] px-[8px] flex flex-col gap-[2px] shadow-md right-0 top-[30px]"
      >
        <button
          v-for="option in options"
          :key="option.id"
          ref="orderOption1"
          class="w-full text-left hover:text-black text-[14px]"
          :class="selectedOption.id == option.id ? 'text-black' : ''"
          @click="selectOption(option)"
        >
          <!-- odd:border-b-[1px] odd:pb-[.40px] last:border-none last:pb-0 -->
          {{ option.text }}
        </button>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  options: {
    id: number;
    value: number | string;
    text: string;
    default: boolean;
  }[];
}>();
const emit = defineEmits<{
  (e: "select", value: number | string): void;
}>();
const selectButton = ref();
const showSelect = ref(false);
const selectedOption = ref<{
  id: number;
  value: number | string;
  text: string;
  default: boolean;
}>({
  id: null,
  value: null,
  text: null,
  default: null,
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
  setTimeout(() => {
    showSelect.value = false;
  }, 100);
};
selectOption(props.options.filter((item) => item.default)[0]);
</script>
