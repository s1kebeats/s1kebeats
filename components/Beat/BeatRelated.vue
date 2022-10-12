<template>
  <div
    data-test="beat"
    class="flex flex-col w-[215px] 930:w-[145px] bg-base-100 rounded-lg"
  >
    <div
      class="w-full h-[215px] 930:h-[145px] relative mb-3 select-none cursor-pointer"
    >
      <img
        data-test="beatWrap"
        :src="data.image"
        class="rounded-lg object-cover w-full h-full shadow-lg"
      />
    </div>
    <div class="flex gap-2">
      <div class="flex items-center text-sm text-primary font-semibold truncate h-[20px]">{{ data.wavePrice }}руб.</div>
      <div
        class="flex items-center text-sm text-black font-semibold truncate h-[20px]"
      >
        {{ data.bpm }}BPM
      </div>
    </div>
    <NuxtLink
      :to="`beat/${data.id}`"
      class="text-black font-semibold text-2xl link link-hover truncate h-[32px]"
    >
      {{ data.name }}
    </NuxtLink>
    <NuxtLink :to="data.author.username" class="text-black text-sm link link-hover truncate h-[20px]">
      {{ data.author.displayedName ? data.author.displayedName : data.author.username}}
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ data: Beat }>();
</script>