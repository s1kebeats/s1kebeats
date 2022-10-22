<template>
  <section class="flex-1 w-[80%] flex justify-center gap-[20px]">
    <AuthorIndividualInfo :data="data" />
    <AuthorBeats v-if="data.beats.length" :data="data.beats" />
    <div
      v-else
      class="flex-1 flex items-center justify-center text-black font-semibold"
    >
      <div class="flex flex-col items-center justify-center gap-[5px] text-[18px]">
        <icon name="material-symbols:nest-true-radiant-rounded" size="60px" />
        Автор еще ничего не опубликовал.
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
