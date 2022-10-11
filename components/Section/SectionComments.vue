<template>
    <div class="flex flex-col gap-5">
        <div class="text-lg font-semibold text-black flex items-center h-[40px]">Комментарии</div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const commentsData = reactive(await useFetch(`/api/comments/${route.params.id}`))
</script>
