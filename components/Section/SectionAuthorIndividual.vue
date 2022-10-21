<template>
  <section class="flex-1 responsive flex justify-center gap-5">
    <AuthorIndividualInfo :data="data" />
    <AuthorBeats v-if="data.beats.length" :data="data.beats" />
    <div
      v-else
      class="flex-1 flex items-center justify-center text-black font-semibold"
    >
      <div class="flex flex-col items-center justify-center gap-2 text-lg">
        <img src="~/assets/images/radio.svg" class="w-[45px]" />
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
