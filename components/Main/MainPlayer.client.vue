<template>
  <section
    id="player"
    data-test="player"
    class="bg-black w-full h-[2.4vw] flex flex-col items-center fixed bottom-0"
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
    <div class="w-[var(--section-width)] flex flex-1 items-center">
      <div class="flex h-full items-center gap-[0.4vw]">
        <button
          data-test="playPauseButton"
          class="play w-[1.3vw] h-[1.3vw]"
          :class="store.getAudioPlaying() ? 'pause' : ''"
          @click="store.toggleAudioPlaying()"
        />
        <div
          class="flex items-center justify-center h-full text-[.65vw] text-white"
        >
          <span class="text-center w-[1.6vw]">
            {{
              useTimeOutput(
                store.getFakeAudioTime()
                  ? store.getFakeAudioTime()
                  : store.getAudioTime()
              )
            }}
          </span>
          /
          <span class="text-center w-[1.6vw]">
            {{ useTimeOutput(store.getAudioDuration()) }}
          </span>
        </div>
      </div>
      <PlayerInfo :data="store.getCurrentBeat()" />
      <div class="flex h-full items-center justify-end gap-[1vw]">
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
<style lang="scss" scoped>
.play {
  background: center no-repeat url("~/assets/images/play.svg");
  background-size: 30px;
  &.pause {
    background: center no-repeat url("~/assets/images/pause.svg");
    background-size: 30px;
  }
}
.download {
  background: center no-repeat url("~/assets/images/download.svg");
  background-size: 30px;
}

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
