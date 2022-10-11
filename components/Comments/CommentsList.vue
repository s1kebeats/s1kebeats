<template>
    <div class="">
        <MainComment v-for="item in list" :data="item" :key="item.id" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    list: Comment[]
}>()
</script>
