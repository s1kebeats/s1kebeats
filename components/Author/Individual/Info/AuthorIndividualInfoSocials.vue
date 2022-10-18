<template>
  <div class="w-full border-t-[1px] flex flex-col gap-1 pt-5">
    <a
      v-if="data.youtubeLink"
      :href="data.youtubeLink"
      class="w-full text-sm text-black flex items-center gap-3"
    >
      <img src="~/assets/images/logo-youtube.svg" class="w-[20px]" />
      YouTube
    </a>
    <a
      v-if="data.vkLink"
      :href="data.vkLink"
      class="w-full text-sm text-black flex items-center gap-3"
    >
      <img src="~/assets/images/logo-vk.svg" class="w-[20px]" />
      Вконтакте
    </a>
    <a
      v-if="data.instagramLink"
      :href="data.instagramLink"
      class="w-full text-sm text-black flex items-center gap-3"
    >
      <img src="~/assets/images/logo-instagram.svg" class="w-[20px]" />
      Instagram
    </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
