<template>
    <BaseItemsList class="gap-1">
        <NuxtLink :to="`/search?tags=${item.id}`" v-for="item in list">
            <MainTag :data="item" />
        </NuxtLink>
    </BaseItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
    list: Tag[]
}>()
</script>