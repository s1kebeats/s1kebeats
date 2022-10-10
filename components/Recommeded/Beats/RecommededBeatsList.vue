<template>
    <BaseItemsList>
        <MainBeat v-for="item in list" :data="item" :key="item.id" />
    </BaseItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
    list: Beat[]
}>()
</script>