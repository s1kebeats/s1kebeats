<template>
  <div class="border-[1px] rounded-[10px] p-[20px] flex flex-col gap-[20px]">
    <p class="text-[18px] font-semibold text-black flex items-center h-[40px]">
      Комментарии
    </p>
    <BeatIndividualCommentsForm />
    <BaseLoadingShimmer
      v-if="isLoading"
      class="h-[117px] rounded-[10px] my-5"
    />
    <BeatIndividualCommentsList v-else :list="data.data" />
  </div>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute();
const { isLoading, isError, data, error } = useQuery("commentsData", () =>
  axios.get(`http://localhost:3000/api/comments/${route.params.id}`)
);
</script>
