<template>
  <div class="flex flex-col gap-[20px] items-center my-5 flex-1">
    <template v-if="list.length">
      <MainComment v-for="item in list" :key="item.id" :data="item" />
    </template>
    <div
      v-else
      class="flex flex-col items-center justify-center gap-2 flex-1 py-5"
    >
      <img src="~/assets/images/no-comments.svg" class="w-[45px]" />
      <div class="font-semibold text-black text-md">Комментариев еще нет.</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  list: Comment[];
}>();
</script>
