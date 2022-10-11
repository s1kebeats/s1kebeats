<template>
    <div class="flex items-center">
        <img :src="data.author.image" width="40px" height="40px">
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    data: Comment;
}>()
</script>
