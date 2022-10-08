<template>
  <transition name="player">
    <div
      v-if="store.currentBeat.mp3"
      id="player"
      data-test="player"
      class="bg-black w-full h-[45px] flex flex-col items-center fixed bottom-0"
      @mouseenter="toggleThumb(true)"
      @mouseleave="toggleThumb(false)"
    >
      <BaseRangeInput
        :thumb-state="thumbState"
        :max="audioDuration - 1"
        class="player__timeline"
        :value="timelineUp ? audioTimeOnUp : audioTimeOnDown"
        @toggle-thumb="focusThumb"
        @update-value="updateAudioTime"
        @set-value="setAudioTime"
      />
      <div
        class="responsive flex h-[42px] items-center 525:max-w-full 525:px-2"
      >
        <div class="flex h-full items-center gap-2">
          <button
            data-test="playPauseButton"
            class="play w-[25px] h-[25px]"
            :class="store.playing ? 'pause' : ''"
            @click="store.playPause()"
          />
          <div
            class="flex items-center justify-center h-full w-[65px] text-xs text-white 710:text-[11px] 710:w-[55px]"
          >
            <span class="text-center w-[30px] 710:w-[25px]">
              {{ audioCurrentTimeOutput }}
            </span>
            <span class="text-center w-[5px]"> / </span>
            <span class="text-center w-[30px] 710:w-[25px]">
              {{ audioDurationOutput }}
            </span>
          </div>
        </div>
        <PlayerInfo :beat="beat" />
        <div class="flex h-full items-center justify-end gap-5 710:w-[88px]">
          <PlayerVolume @update-audio-volume="setAudioVolume" />
          <a
            data-test="downloadLink"
            download=""
            class="block w-[25px] h-[25px] download"
            :href="beat.wave"
            @click="downloadIncrement"
          />
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
const store = useStore();
// global beat and playing values
const { beat, playing } = storeToRefs(store);
// audio
const audio = new Audio();
// needed audio values
const timelineUp = ref(true);
const audioTimeOnUp = ref(0);
const audioTimeOnDown = ref(0);
const audioDuration = ref(0);
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
onMounted(() => {
  document.addEventListener("keydown", (e: KeyboardEvent): void => {
    // prevent scroll
    if (e.key === " ") {
      e.preventDefault();
    }
  });
  document.addEventListener("keyup", (e: KeyboardEvent): void => {
    if (e.key === " ") {
      store.playPause();
    }
  });
});
// update refs and play audio when metadata is loaded
function audioInit(): void {
  // update local audioDuration state
  audioDuration.value = Math.ceil(audio.duration);
  // update local current time
  audioTimeOnUp.value = audio.currentTime;
  // play audio
  store.playPause(true);
}
// watching global beat instance to maintain its changing
watch(
  beat,
  (): void => {
    // pausing audio when global beat changes
    store.playPause(false);
    // changing audio source
    if (typeof beat.value.mp3 === "string") {
      audio.src = beat.value.mp3;
    }
    // firing audioInit when audio metadata's loaded, turning audio on
    audio.addEventListener("loadedmetadata", audioInit);
  },
  { deep: true }
);
// current time output interval
let int: number;
// watching global playing value to play and pause audio
watch(playing, (newValue: boolean): void => {
  // if audio is being turned on
  if (newValue) {
    // play
    audio.play().catch((error) => console.log(error));
    // interval which updates current time nad its output
    int = setInterval(() => {
      // if audio ended
      if (Math.ceil(audio.currentTime) === audioDuration.value) {
        // setting audio time to zero and pausing the audio
        setAudioTime(0);
        store.playing = false;
      }
      // doesn't update current time if we are choosing it while audio is playing
      audioTimeOnUp.value = Math.ceil(audio.currentTime);
    }, 100);
    return;
  }
  // if audio is being paused
  clearInterval(int);
  audio.pause();
});
// computed property for current time output
const audioCurrentTimeOutput = computed((): string => {
  // watch for store.copy to be able to select time when audio is playing
  return timeOutput(
    timelineUp.value ? audioTimeOnUp.value : audioTimeOnDown.value
  );
});
// computed property for audio duration output
const audioDurationOutput = computed((): string => {
  return timeOutput(audioDuration.value);
});
// function is used to update current time output, not the value itself!
const updateAudioTime = (newValue: number): void => {
  timelineUp.value = false;
  audioTimeOnDown.value = newValue;
};
// function updates audio.currentTime itself
const setAudioTime = (newValue: number): void => {
  timelineUp.value = true;
  audioTimeOnUp.value = audio.currentTime = newValue;
};
// function sets audio volume
const setAudioVolume = (newValue: number) => {
  // volume range has max=100 for the ease of perception
  audio.volume = +(newValue / 100).toFixed(2);
};
// const downloadIncrement = () => {
//   axios.get(`http://localhost:8000/api/beat/${beat.value.id}/download`);
// };
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
