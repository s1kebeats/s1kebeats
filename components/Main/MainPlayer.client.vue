<template>
  <section
    id="player"
    data-test="player"
    class="bg-black w-full h-[40px] flex flex-col items-center fixed bottom-0"
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
  >
    <BaseRangeInput
      :thumb-state="thumbState"
      :max="store.getAudioDuration() - 1"
      :value="
        store.getFakeAudioTime()
          ? store.getFakeAudioTime()
          : store.getAudioTime()
      "
      :colors="{ back: '#a09da7', front: '#745fc7' }"
      @toggle-thumb="focusThumb"
      @update-value="setFakeAudioTime"
      @set-value="setAudioTime"
    />
    <div class="w-[80%] flex flex-1 items-center">
      <div class="flex h-full items-center gap-[8px]">
        <button @click="store.toggleAudioPlaying()">
          <icon
            v-show="!store.getAudioPlaying()"
            name="material-symbols:play-circle-rounded"
            color="white"
            size="25px"
          />
          <icon
            v-show="store.getAudioPlaying()"
            name="material-symbols:pause-circle-rounded"
            color="white"
            size="25px"
          />
        </button>
        <div
          class="flex items-center justify-center h-full text-[11px] text-white"
        >
          <span class="text-center w-[30px]">
            {{
              useTimeOutput(
                store.getFakeAudioTime()
                  ? store.getFakeAudioTime()
                  : store.getAudioTime()
              )
            }}
          </span>
          /
          <span class="text-center w-[30px]">
            {{ useTimeOutput(store.getAudioDuration()) }}
          </span>
        </div>
      </div>
      <PlayerInfo :data="store.getCurrentBeat()" />
      <div class="flex h-full items-center justify-end">
        <PlayerVolume />
      </div>
    </div>
  </section>
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
<style lang="scss">
.player-enter-active,
.player-leave-active {
  transition: 0.2s;
}

.player-enter-from {
  transform: translateY(63px);
}
.player-leave-to {
  transform: translateY(0px);
}
</style>
