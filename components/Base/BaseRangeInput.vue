<template>
  <div
    ref="range"
    data-test="customRange"
    tabindex="0"
    class="custom-range relative cursor-pointer h-[3px] w-full box-border flex items-center bg-base-300 focus:outline-none"
    @mousedown.prevent="thumbHandler"
    @focus="toggleThumb(true)"
    @focusout="toggleThumb(false)"
  >
    <div
      ref="beforethumb"
      data-test="beforeThumb"
      class="beforethumb h-full w-0 bg-primary"
    />
    <transition name="overlay">
      <div
        v-show="thumbState"
        ref="thumb"
        data-test="thumb"
        class="thumb absolute w-[12px] h-[12px] rounded-full bg-primary"
      />
    </transition>
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
const emit = defineEmits<{
  (e: "updateValue", value: number): void;
  (e: "setValue", value: number): void;
  (e: "toggleThumb", state: boolean): void;
}>();
const props = defineProps({
  max: Number,
  value: Number,
  thumbState: Boolean,
});
const movePrice = ref(0);
const locaValue = ref(0);
const range = ref() as Ref<HTMLDivElement>;
const beforethumb = ref() as Ref<HTMLDivElement>;
const thumb = ref() as Ref<HTMLDivElement>;
// thumb state depends on prop (made for handling hover on a whole player)
const toggleThumb = (state: boolean): void => {
  emit("toggleThumb", state);
};
const moveThumb = (value: number): void => {
  // width for colored part before thumb
  beforethumb.value!.style.width = Math.ceil(value * movePrice.value) + "px";
  // if thumb isn't visible and has no width
  if (thumb.value!.offsetWidth) {
    // updating thumb position
    thumb.value!.style.left =
      Math.ceil(value * movePrice.value) - thumb.value!.offsetWidth / 2 + "px";
  } else {
    // updating thumb position
    thumb.value!.style.left = Math.ceil(value * movePrice.value) - 6 + "px";
  }
};
const updateValue = (event: MouseEvent): void => {
  // updating move price to handle range resizing
  movePrice.value = +(range.value!.clientWidth / props.max!).toFixed(2);
  // new thumb position (left: Xpx)
  let newLeft =
    event.clientX -
    range.value!.getBoundingClientRect().left -
    thumb.value!.offsetWidth / 2;
  // right side thumb limit
  const rightEdge = range.value!.clientWidth - thumb.value!.offsetWidth / 2;
  // limiting left side
  if (newLeft < -(thumb.value!.offsetWidth / 2)) {
    newLeft = -(thumb.value!.offsetWidth / 2);
  }
  // limiting right side
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }
  // counting new range value and emitting it
  const newValue = +(
    (newLeft + thumb.value!.offsetWidth / 2) /
    movePrice.value
  ).toFixed(0);
  locaValue.value = newValue;
  emit("updateValue", newValue);
};
const thumbHandler = (event: MouseEvent): void => {
  // focusing range to keep thumb visible
  range.value!.focus();
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
    moveThumb(value!);
  }
);
// setting initial movePrice value for DYNAMIC value change
watch(
  () => props.max,
  (value) => {
    movePrice.value = +(range.value!.clientWidth / value!).toFixed(2);
  }
);
// setting initial STATIC thumb position
onMounted(() => {
  // updating move price to handle range resizing
  movePrice.value = +(range.value!.clientWidth / props.max!).toFixed(2);
  moveThumb(props.value!);
});
</script>
