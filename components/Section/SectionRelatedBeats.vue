<template>
  <div v-if="isLoading" class="flex flex-col gap-[20px]">
    <BaseLoadingShimmer class="w-[135px] h-[21px] rounded-[6px]" />
    <BaseItemsList class="h-[299px]">
      <BeatRelatedLoadingShimmer v-for="_ in Array(5)" />
    </BaseItemsList>
  </div>
  <div v-else class="flex flex-col gap-[20px]">
    <p class="text-lg font-semibold text-black flex items-center">
      Похожие биты
    </p>
    <BaseItemsList>
      <BeatRelated
        v-for="item in data.data.filter((item) => item.id !== props.source.id)"
        :key="item.id"
        :data="item"
      />
    </BaseItemsList>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const props = defineProps<{
  source: BeatIndividual;
}>();
const tagQuery = ref(props.source.tags.map((item: Tag) => item.id).join(","));
const { isLoading, isError, data, error } = useQuery(
  `${props.source.id}-related`,
  () => axios.get(`http://localhost:3000/api/beats/?tags=${tagQuery.value}`)
);
</script>
