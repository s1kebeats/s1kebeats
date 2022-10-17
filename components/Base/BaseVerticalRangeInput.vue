<template>
  <div
    ref="rangeWrapper"
    data-test="customRange"
    tabindex="0"
    class="focus:outline-none overflow-hidden relative cursor-pointer w-[45px] h-[45px] mr-1 rounded-full bg-white flex items-center justify-center text-xs text-black font-semibold"
    @mousedown.prevent="rangeHandler"
  >
    <span class="absolute z-[1]">{{ value }}%</span>
    <div
      ref="nodeValue"
      data-test="beforeThumb"
      class="absolute h-0 w-full gradi bottom-0"
    />
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
const emit = defineEmits<{
  (e: "updateValue", value: number): void;
  (e: "setValue", value: number): void;
}>();
const props = defineProps({
  max: Number,
  value: Number,
  thumbState: Boolean,
});
const heightPrice = ref(0);
const locaValue = ref(0);
const rangeWrapper = ref() as Ref<HTMLDivElement>;
const nodeValue = ref() as Ref<HTMLDivElement>;
const setHeight = (value: number): void => {
  // width for colored part before thumb
  nodeValue.value!.style.height = Math.ceil(value * heightPrice.value) + "px";
};
const updateValue = (event: MouseEvent): void => {
  // updating move price to handle range resizing
  heightPrice.value = +(rangeWrapper.value!.clientHeight / props.max!).toFixed(
    2
  );
  // new thumb position (left: Xpx)
  let newHeight =
    rangeWrapper.value!.getBoundingClientRect().bottom - event.clientY;
  // right side thumb limit
  const maxHeight = rangeWrapper.value!.clientHeight;
  // limiting left side
  if (newHeight < 0) {
    newHeight = 0;
  }
  // limiting right side
  if (newHeight > maxHeight) {
    newHeight = maxHeight;
  }
  // counting new range value and emitting it
  const newValue = +(newHeight / heightPrice.value).toFixed(0);
  locaValue.value = newValue;
  emit("updateValue", newValue);
};
const rangeHandler = (event: MouseEvent): void => {
  // focusing range to keep thumb visible
  rangeWrapper.value!.focus();
  // updating range value (emit('updateValue'))
  updateValue(event);
  // handlers for mouse move
  document.addEventListener("mousemove", updateValue);
  document.addEventListener("mouseup", onMouseUp);
  function onMouseUp() {
    // setting value on mouseUp (to handle time update while audio is playing)
    emit("setValue", locaValue.value);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", updateValue);
  }
};
// watching value and moving the thumb
watch(
  () => props.value,
  (value) => {
    setHeight(value!);
  }
);
// setting initial movePrice value for DYNAMIC value change
watch(
  () => props.max,
  (value) => {
    heightPrice.value = +(rangeWrapper.value!.clientWidth / value!).toFixed(2);
  }
);
// setting initial STATIC thumb position
onMounted(() => {
  // updating move price to handle range resizing
  heightPrice.value = +(rangeWrapper.value!.clientWidth / props.max!).toFixed(
    2
  );
  setHeight(props.value!);
});
</script>
<style lang="scss" scoped>
.gradi {
  background: linear-gradient(
    0deg,
    rgba(160, 157, 167, 0.5),
    rgba(116, 95, 199, 0.5)
  );
}
</style>
