<template>
  <div class="flex-1 flex h-full items-center gap-[var(--section-gap)]">
    <div class="flex items-center justify-center flex-1 gap-[0.4vw]">
      <img
        :src="data.image"
        class="rounded-[.3vw] object-cover w-[1.4vw] h-[1.4vw]"
      />
      <div class="flex gap-[0.6vw]">
        <p
          class="flex items-center text-[0.85vw] font-semibold text-white"
          data-test="playerBeatName"
        >
          {{ data.name }}
        </p>
        <div
          class="text-[0.65vw] text-white flex items-center gap-[0.2vw] select-none"
        >
          <NuxtLink
            :to="`/${data.author.username}`"
            data-test="playerBeatArtist"
            class="bg-primary rounded-[.4vw] px-[0.2vw] h-[.95vw] flex items-center transition-all"
          >
            {{
              data.author.displayedName
                ? data.author.displayedName
                : data.author.username
            }}
          </NuxtLink>
          <div
            data-test="playerBeatBpm"
            class="bg-accent rounded-[.4vw] px-[0.2vw] h-[.95vw] flex items-center transition-all"
          >
            {{ data.bpm }}BPM
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Beat;
}>();
</script>
