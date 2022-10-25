<template>
  <SectionItemsList v-if="data.length" class="w-[80%]" title="Авторы">
    <AuthorBig v-for="item in data" :key="item.username" :data="item" />
  </SectionItemsList>
  <section v-else class="flex flex-col w-[80%] grow">
    <h1 class="text-left text-[18px] font-semibold text-black">Авторы</h1>
    <div class="flex items-center justify-center grow text-black font-semibold">
      <div
        class="flex flex-col items-center justify-center gap-[5px] text-[18px]"
      >
        <Icon name="mdi:account-remove" size="60px" color="black" />
        Ничего не найдено
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Author[];
}>();
</script>
