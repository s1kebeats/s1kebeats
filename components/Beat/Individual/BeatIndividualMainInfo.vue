<template>
  <div v-if="beat">
    <img
      data-test="beatWrap"
      :src="beat.wrap"
      class="rounded-lg object-cover h-[200px] w-[200px] shadow-lg"
    />
    <div class="mt-3">
      <div class="text-black text-center font-semibold text-2xl">
        {{ beat.name }}
      </div>
      <div class="text-black text-center text-sm">
        {{ beat.artist.name }}
      </div>
    </div>
  </div>
  <div v-else>
    <LoadingShimmer class="rounded-lg h-[200px] w-[200px]" />
    <div class="mt-3 flex flex-col items-center">
      <LoadingShimmer class="h-[28px] w-full mb-[4px] rounded-lg" />
      <LoadingShimmer class="h-[20px] w-[85px] rounded-lg" />
    </div>
  </div>
</template>
<script setup lang="ts">
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
const props = defineProps<{
  beat: Beat;
}>();
</script>
