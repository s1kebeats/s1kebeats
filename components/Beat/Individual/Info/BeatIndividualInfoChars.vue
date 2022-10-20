<template>
    <div class="w-full border-y-[1px] py-5 text-sm text-black">
      <p class="flex justify-between">
        <span class="text-left">Опубликован</span>
        <span class="w-full text-right">
          {{ useDateOutput(data.createdAt) }}
        </span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">BPM</span>
        <span class="w-full text-right">
          {{ data.bpm }}
        </span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Прослушивания</span>
        <span class="w-full text-right">
          {{ data.plays }}
        </span>
      </p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
