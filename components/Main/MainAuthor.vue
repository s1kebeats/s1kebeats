<template>
    <div class="flex flex-col gap-2">
        <NuxtLink :to="`/${author.username}`" class="rounded-full">
            <img :src="author.image" class="w-[167.5px] h-[167.5px] rounded-full hover:brightness-[60%] transition-all" alt="Author image">
        </NuxtLink>
        <NuxtLink :to="`/${author.username}`" class="text-black text-md text-center font-semibold truncate link link-hover">
            {{ author.displayedName ? author.displayedName : author.username }}
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    author: AuthorIndividual
}>()
</script>