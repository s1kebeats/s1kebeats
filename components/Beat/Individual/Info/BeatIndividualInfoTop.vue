<template>
  <div v-if="beat" class="w-full flex flex-col items-center">
    <img
      data-test="beatWrap"
      :src="beat.image"
      class="rounded-lg object-cover h-[230px] w-[230px] shadow-lg"
    />
    <div class="mt-3 w-full flex flex-col items-center">
      <div class="text-black text-center font-semibold text-2xl w-full truncate">
        {{ beat.name }}
      </div>
      <NuxtLink :to="`/${beat.author.username}`"  class="text-black text-center text-sm truncate w-full link link-hover">
        {{ beat.author.displayedName ? beat.author.displayedName : beat.author.username }}
      </NuxtLink>
    </div>
  </div>
  <div v-else>
    <BaseLoadingShimmer class="rounded-lg h-[230px] w-[230px]" />
    <div class="mt-3 flex flex-col items-center">
      <BaseLoadingShimmer class="h-[28px] w-full mb-[4px] rounded-lg" />
      <BaseLoadingShimmer class="h-[20px] w-[85px] rounded-lg" />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  beat: Beat;
}>();
</script>
