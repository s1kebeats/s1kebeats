<template>
  <div class="flex items-start gap-4 w-full">
    <NuxtLink class="rounded-full" :to="`/${data.author.username}`">
      <img
        :src="data.author.image"
        class="w-[35px] h-[35px] rounded-full hover:brightness-[60%] transition-all"
        width="35px"
        height="35px"
      />
    </NuxtLink>
    <div class="flex-1 h-full">
      <div class="flex items-center space-between text-sm text-black gap-2">
        <NuxtLink
          :to="`/${data.author.username}`"
          class="font-semibold text-primary link link-hover"
          >{{
            data.author.displayedName
              ? data.author.displayedName
              : data.author.username
          }}</NuxtLink
        >
        <div class="text-xs">{{ useCommentTimeOutput(data.createdAt) }}</div>
      </div>
      <div class="text-black text-sm font-semibold">{{ data.content }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Comment;
}>();
</script>
