<template>
    <div v-if="!isLoading" class="pb-10">
        <div class="text-lg font-semibold text-black flex items-center mb-5">
            Похожие биты
        </div>
        <BaseItemsList>
            <BeatRelated v-for="item in data.data.filter((item) => item.id !== props.source.id)" :data="item" :key="item.id" />
        </BaseItemsList>
    </div>

</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute()
const props = defineProps<{
    source: BeatIndividual;
}>()
const tagQuery = ref(props.source.tags.map((item: Tag) => item.id).join(','))
const { isLoading, isError, data, error }: any = useQuery(
  "relatedBeatsData",
  () => axios.get(`http://localhost:3000/api/beats/?tags=${tagQuery.value}`)
);
</script>
