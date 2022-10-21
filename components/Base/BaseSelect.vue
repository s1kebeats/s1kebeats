<template>
  <div class="relative">
    <button
      ref="selectButton"
      class="flex text-black rounded-lg text-[.75vw] h-[1.25vw] items-center gap-[0.2vw]"
      @click="toggleSelect"
      @focusout="hideSelect"
    >
      <span :class="showSelect ? 'text-black' : ''">
        {{ selectedOption.text }}
      </span>
      <img
        src="~/assets/images/chevron-down.svg"
        class="w-[.8vw] transition-all"
        :class="showSelect ? 'rotate-180 pb-[0.2vw]' : ''"
      />
    </button>
    <transition name="modal">
      <div
        v-show="showSelect"
        ref="orderingsPanel"
        class="absolute z-[2] border-full border-[1px] bg-base-100 rounded-[.4vw] py-[0.2vw] px-[0.6vw] flex flex-col gap-[0.2vw] shadow-md right-0 top-[1.55vw]"
      >
        <button
          v-for="option in options"
          :key="option.id"
          ref="orderOption1"
          class="w-full flex hover:text-black text-[.75vw] items-center gap-[0.2vw]"
          :class="selectedOption.id == option.id ? 'text-black' : ''"
          @click="selectOption(option)"
        >
          <!-- odd:border-b-[1px] odd:pb-1 last:border-none last:pb-0 -->
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
