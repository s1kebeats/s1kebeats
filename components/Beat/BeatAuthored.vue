<template>
  <article class="flex flex-col gap-[10px] w-[var(--section-60-item-5)]">
    <BeatControlledImage
      :data="data"
      class="w-full h-[var(--section-60-item-5)]"
    />
    <div class="flex flex-col">
      <p class="flex gap-[8px] font-semibold text-[14px]">
        <span class="flex items-center text-primary truncate">
          {{ data.wavePrice }}руб.
        </span>
        <span class="flex items-center text-black truncate">
          {{ data.bpm }}BPM
        </span>
      </p>
      <NuxtLink
        :to="`/beat/${data.id}`"
        class="text-black font-semibold text-[24px] link link-hover truncate"
      >
        {{ data.name }}
      </NuxtLink>
    </div>
  </article>
</template>
