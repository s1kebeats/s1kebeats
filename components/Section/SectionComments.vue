<template>
    <div class="flex flex-col gap-5 flex-1">
        <div class="text-lg font-semibold text-black flex items-center h-[40px]">Комментарии</div>
        <CommentsForm />
        <CommentsListLoadingShimmer v-if="isLoading" />
        <CommentsList v-else :list="data.data" />
    </div>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute()
const { isLoading, isError, data, error }: any = useQuery(
  "commentsData",
  () => axios.get(`http://localhost:3000/api/comments/${route.params.id}`)
);
</script>
