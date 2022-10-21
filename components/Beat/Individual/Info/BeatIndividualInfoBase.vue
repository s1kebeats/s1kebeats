<template>
  <div class="w-full flex flex-col items-center">
    <img
      data-test="beatWrap"
      :src="data.image"
      class="rounded-[.6vw] object-cover h-[230px] w-[230px] shadow-lg"
    />
    <div class="mt-3 w-full flex flex-col items-center">
      <div
        class="text-black text-center font-semibold text-2xl w-full truncate"
      >
        {{ data.name }}
      </div>
      <NuxtLink
        :to="`/${data.author.username}`"
        class="text-black text-center text-sm truncate w-full link link-hover"
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
