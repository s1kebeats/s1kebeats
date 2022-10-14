<template>
  <div
    class="h-[70px] rounded-full bg-gradient-to-r from-black to-primary shadow-md flex items-center p-[7.5px] gap-[7.5px]"
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
  >
    <button
      class="h-full w-[55px] flex items-center justify-center"
      @click="store.setAudioPlaying()"
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
        :max="audioDuration - 1"
        :value="timelineUp ? audioTimeOnUp : audioTimeOnDown"
        @toggle-thumb="focusThumb"
        @update-value="updateAudioTime"
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
import { storeToRefs } from "pinia";
const store = useStore();
// global beat and playing values
const { _currentBeat: beat, _audioPlaying: playing } = storeToRefs(store);
// audio
const audio = store.getMainAudio();
// needed audio values
const timelineUp = ref(true);
const audioTimeOnUp = ref(audio.currentTime);
const audioTimeOnDown = ref(audio.currentTime);
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
      store.setAudioPlaying();
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
  store.setAudioPlaying(true);
}
// watching global beat instance to maintain its changing
watch(
  beat,
  (): void => {
    // pausing audio when global beat changes
    store.setAudioPlaying(false);
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
        store.setAudioPlaying(false);
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
  return useTimeOutput(
    timelineUp.value ? audioTimeOnUp.value : audioTimeOnDown.value
  );
});
// computed property for audio duration output
const audioDurationOutput = computed((): string => {
  return useTimeOutput(audioDuration.value);
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
