<template>
  <div
    class="h-[70px] rounded-full bg-gradient-to-r from-black to-primary shadow-md flex items-center p-[7.5px] gap-[7.5px]"
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
  >
    <button
      class="h-full w-[55px] flex items-center justify-center"
      @click="store.toggleAudioPlaying()"
    >
      <img
        v-show="!store.getAudioPlaying()"
        src="~/assets/images/play.svg"
        class="w-full"
      />
      <img
        v-show="store.getAudioPlaying()"
        src="~/assets/images/pause.svg"
        class="w-full"
      />
    </button>
    <div class="flex-1 h-full flex flex-col gap-1 justify-center">
      <div class="text-xl text-white font-semibold">
        {{ store.getCurrentBeat().name }} -
        <NuxtLink
          :to="`/${store.getCurrentBeat().author.displayedName}`"
          class=""
          >{{
            store.getCurrentBeat().author.displayedName
              ? store.getCurrentBeat().author.displayedName
              : store.getCurrentBeat().author.username
          }}</NuxtLink
        >
      </div>
      <BaseRangeInput
        class="rounded-full bg-[#a09da7] h-[4px]"
        :thumb-state="thumbState"
        :max="store.getAudioDuration() - 1"
        :value="
          store.getFakeAudioTime()
            ? store.getFakeAudioTime()
            : store.getAudioTime()
        "
        @toggle-thumb="focusThumb"
        @update-value="setFakeAudioTime"
        @set-value="setAudioTime"
      />
    </div>
    <div class="w-[55px] h-[55px] flex items-center justify-center">
      <div
        class="cursor-pointer w-[45px] h-[45px] mr-1 rounded-full bg-white flex items-center justify-center text-xs text-[#878787] font-semibold hover:text-black transition-all"
      >
        10%
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const thumbState = ref(false);
const thumbFocused = ref(false);
const toggleThumb = (state: boolean): void => {
  if (thumbFocused.value) {
    thumbState.value = true;
    return;
  }
  thumbState.value = state;
};
const focusThumb = (state: boolean): void => {
  thumbFocused.value = state;
  toggleThumb(false);
};
// play pause on space bind
function spaceDown(e: KeyboardEvent) {
  // prevent scroll
  if (e.key === " ") {
    e.preventDefault();
  }
}
function spaceUp(e: KeyboardEvent) {
  if (e.key === " ") {
    store.toggleAudioPlaying();
  }
}
onMounted(() => {
  document.addEventListener("keydown", spaceDown);
  document.addEventListener("keyup", spaceUp);
});
onUnmounted(() => {
  document.removeEventListener("keydown", spaceDown);
  document.removeEventListener("keyup", spaceUp);
});
const setFakeAudioTime = (value: number) => {
  store.setFakeAudioTime(value);
};
const setAudioTime = (value: number) => {
  store.setAudioTime(value);
};
</script>
