<template>
    <SectionBeatIndividualLoadingShimmer v-if="beatData.pending" />
    <SectionBeatIndividual v-else :data="beatData.data" />
</template>
<script setup lang="ts">
const route = useRoute()
const beatData: any = reactive(await useFetch(`http://localhost:3000/api/beats/${route.params.id}`))
</script>