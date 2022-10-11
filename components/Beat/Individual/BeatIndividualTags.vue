<template>
    <div class="w-full flex flex-col gap-2" >
        <div class="text-sm text-black text-left font-semibold">Теги</div>
        <BaseItemsList class="gap-1">
            <NuxtLink :to="`/search?tags=${item.id}`" v-for="item in data.tags">
                <MainTag :data="item" />
            </NuxtLink>
        </BaseItemsList>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    data: BeatIndividual
}>()
</script>