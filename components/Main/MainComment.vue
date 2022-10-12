<template>
    <div class="flex items-start gap-4 w-full">
        <img :src="data.author.image" class="w-[35px] h-[35px] rounded-full" width="35px" height="35px">
        <div class="flex-1 h-full">
            <div class="flex items-center space-between text-sm text-black gap-1">
                <NuxtLink :to="`/${data.author.username}`" class="font-semibold text-primary link link-hover">{{ data.author.displayedName ? data.author.displayedName : data.author.username }}</NuxtLink>
                <!-- <div class="text-xs">{{ data.createdAt }}</div> -->
                <div class="text-xs">{{ useCommentTimeOutput(data.createdAt) }}</div>
            </div>
            <div class="text-black text-sm font-semibold">{{ data.content }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    data: Comment;
}>()
</script>
