<template>
    <BaseItemsList>
        <MainAuthor v-for="item in list" :data="item" :key="item.username" />
    </BaseItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
    list: AuthorIndividual[]
}>()
</script>