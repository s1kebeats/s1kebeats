<template>
  <div class="border-[1px] rounded-lg p-5 flex flex-col gap-5">
    <div class="text-lg font-semibold text-black flex items-center h-[40px]">
      Комментарии
    </div>
    <BeatIndividualCommentsForm />
    <BaseLoadingShimmer v-if="isLoading" class="h-[117px] rounded-lg my-5" />
    <BeatIndividualCommentsList v-else :list="data.data" />
  </div>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute();
const { isLoading, isError, data, error }: any = useQuery("commentsData", () =>
  axios.get(`http://localhost:3000/api/comments/${route.params.id}`)
);
</script>
