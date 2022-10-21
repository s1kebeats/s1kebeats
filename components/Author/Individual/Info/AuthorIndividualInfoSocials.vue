<template>
  <div class="w-full border-t-[1px] flex flex-col gap-[.2vw] pt-[1vw] text-[.75vw] text-black">
    <a
      v-if="data.youtubeLink"
      :href="data.youtubeLink"
      class="w-full flex items-center gap-[.6vw]"
    >
      <Icon name="mdi:youtube" size="1.3vw" color="black" />
      YouTube
    </a>
    <a
      v-if="data.vkLink"
      :href="data.vkLink"
      class="w-full flex items-center gap-[.6vw]"
    >
      <Icon name="mdi:vk" size="1.3vw" color="black" />
      Вконтакте
    </a>
    <a
      v-if="data.instagramLink"
      :href="data.instagramLink"
      class="w-full flex items-center gap-[.6vw]"
    >
    <Icon name="mdi:instagram" size="1.3vw" color="black" />
      Instagram
    </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
