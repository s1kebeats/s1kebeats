<template>
  <article
    class="flex flex-col gap-[10px] w-[var(--section-item-6)]"
  >
    <BeatControlledImage :data="data" class="w-full h-[var(--section-item-6)]" />
    <div class="flex flex-col text-black">
      <p class="items-center flex gap-[6px] font-semibold text-[14px]">
        <span
          class="text-primary truncate"
        >
          {{ data.wavePrice }}руб.
        </span>
        <span
          class="text-black truncate"
        >
          {{ data.bpm }}BPM
        </span>
      </p>
      <NuxtLink
        :to="`/beat/${data.id}`"
        class="font-semibold text-[24px] link link-hover truncate"
      >
        {{ data.name }}
      </NuxtLink>
      <NuxtLink
        :to="`/${data.author.username}`"
        class="text-[14px] link link-hover truncate"
      >
        {{
          data.author.displayedName
            ? data.author.displayedName
            : data.author.username
        }}
      </NuxtLink>
    </div>
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{ data: Beat }>();
</script>
