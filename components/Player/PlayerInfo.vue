<template>
  <div class="flex-1 flex h-full items-center gap-5">
    <div class="flex items-center justify-center flex-1 gap-2">
      <img
        data-test="playerBeatWrap"
        :src="beat.wrap"
        width="26px"
        height="26px"
        alt="wrap-image"
        class="rounded-lg object-cover w-[26px] h-[26px]"
      />
      <div class="flex gap-3">
        <div
          class="flex items-center text-md font-semibold text-white"
          data-test="playerBeatName"
        >
          {{ beat.name }}
        </div>
        <div
          class="text-xs text-white flex items-center gap-1 select-none 710:hidden"
        >
          <div
            title="Type"
            data-test="playerBeatArtist"
            class="bg-primary rounded-md px-1 h-[18px] flex items-center transition-all"
          >
            {{ beat.artist.name }}
          </div>
          <div
            title="BPM"
            data-test="playerBeatBpm"
            class="bg-accent rounded-md px-1 h-[18px] flex items-center transition-all"
          >
            {{ beat.bpm }}BPM
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  beat: Beat;
}>();
</script>
