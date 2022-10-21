<template>
  <div
    data-test="beat"
    class="flex flex-col w-[204px] gap-3 bg-base-100 rounded-lg"
  >
    <BeatControlledImage :data="data" class="w-full h-[204px]" />
    <div class="flex flex-col">
      <div class="flex gap-2">
      <span
        class="flex items-center text-sm text-primary font-semibold truncate h-[20px]"
      >
        {{ data.wavePrice }}руб.
      </span>
      <span
        class="flex items-center text-sm text-black font-semibold truncate h-[20px]"
      >
        {{ data.bpm }}BPM
      </span>
    </div>
    <NuxtLink
      :to="`/beat/${data.id}`"
      class="text-black font-semibold text-2xl link link-hover truncate h-[32px]"
    >
      {{ data.name }}
    </NuxtLink>
    <NuxtLink
      :to="`/${data.author.username}`"
      class="text-black text-sm link link-hover truncate h-[20px]"
    >
      {{
        data.author.displayedName
          ? data.author.displayedName
          : data.author.username
      }}
    </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ data: Beat }>();
</script>
