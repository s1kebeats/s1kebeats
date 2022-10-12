<template>
    <div class="flex flex-col gap-5 items-center my-5">
        <MainComment v-for="item in list" :data="item" :key="item.id" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    list: Comment[]
}>()
</script>
