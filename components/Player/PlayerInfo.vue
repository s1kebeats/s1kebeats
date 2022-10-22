<template>
  <div class="flex-1 flex h-full items-center gap-[20px]">
    <div class="flex items-center justify-center flex-1 gap-[10px]">
      <img
        :src="data.image"
        class="rounded-[.3vw] object-cover w-[24px] h-[24px]"
      />
      <div class="flex gap-[10px]">
        <p
          class="flex items-center text-[15px] font-semibold text-white"
        >
          {{ data.name }}
        </p>
        <div
          class="text-[12px] text-white flex items-center gap-[0.40px] select-none"
        >
          <NuxtLink
            :to="`/${data.author.username}`"
            class="bg-primary rounded-[6px] px-[4px] h-[18px] flex items-center transition-all"
          >
            {{
              data.author.displayedName
                ? data.author.displayedName
                : data.author.username
            }}
          </NuxtLink>
          <div
            class="bg-accent rounded-[6px] px-[4px] h-[18px] flex items-center transition-all"
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
