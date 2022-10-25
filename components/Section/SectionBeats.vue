<template>
  <SectionItemsList v-if="data.length" class="w-[80%]" title="Биты">
    <MainBeat v-for="item in data" :key="item.id" :data="item" />
  </SectionItemsList>
  <section v-else class="flex flex-col w-[80%] grow">
    <h1 class="text-left text-[18px] font-semibold text-black">Биты</h1>
    <div class="flex items-center justify-center grow text-black font-semibold">
      <div
        class="flex flex-col items-center justify-center gap-[5px] text-[18px]"
      >
        <Icon name="mdi:music-note-off" size="60px" color="black" />
        Ничего не найдено
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Beat[];
}>();
</script>
