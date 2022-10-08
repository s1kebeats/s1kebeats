<template>
  <section class="flex flex-col items-center py-[50px] 600:py-[10px]">
    <h1 class="text-xl my-5 text-black font-semibold select-none">
      Latest on Youtube
    </h1>
    <div
      class="h-[300px] w-[640px] bg-base-300 rounded-lg 700:w-[90%] 700:h-[25vh]"
    >
      <iframe
        v-show="!loading"
        data-test="iframe"
        :src="videoUrl"
        alt="youtube player"
        title="YouTube video player"
        class="shadow-lg w-full h-full rounded-lg"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
      <LoadingShimmer v-if="loading" class="rounded-lg" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
const YOUTUBE_API_KEY = "AIzaSyDK5cSuQLy3-Q2rYXDSEa4K4PJU5mGLV_0";
const apiUrl = `https://www.googleapis.com/\
    youtube/v3/playlistItems?part=snippet\
    &playlistId=UUwiS4Xhzg6LH_tmIMsfQRcA\
    &maxResults=1\
    &key=${YOUTUBE_API_KEY}`
  .split(" ")
  .join("");
const videoUrl = ref("");
const loading = ref(true);
// iframe src
onMounted(async () => {
  loading.value = true;
  const {
    data,
  }: {
    data: { items: { snippet: { resourceId: { videoId: string } } }[] };
  } = await axios.get(apiUrl);
  videoUrl.value = `https://www.youtube.com/embed/${data.items[0].snippet.resourceId.videoId}`;
  loading.value = false;
});
</script>
