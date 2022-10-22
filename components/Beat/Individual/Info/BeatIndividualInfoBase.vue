<template>
  <div class="w-full flex flex-col items-center">
    <img
      data-test="beatWrap"
      :src="data.image"
      class="rounded-[10px] object-cover h-[230px] w-[230px] shadow-lg"
    />
    <div class="text-black text-center mt-[10px] w-full flex flex-col items-center">
      <div
        class="font-semibold text-[24px] w-full truncate"
      >
        {{ data.name }}
      </div>
      <NuxtLink
        :to="`/${data.author.username}`"
        class="text-[14px] truncate w-full link link-hover"
      >
        {{
          data.author.displayedName
            ? data.author.displayedName
            : data.author.username
        }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
