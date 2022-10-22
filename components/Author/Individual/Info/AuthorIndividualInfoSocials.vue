<template>
  <div class="w-full border-t-[1px] flex flex-col gap-[.40px] pt-[20px] text-[14px] text-black">
    <a
      v-if="data.youtubeLink"
      :href="data.youtubeLink"
      class="w-full flex items-center gap-[10px]"
    >
      <Icon name="mdi:youtube" size="25px" color="black" />
      YouTube
    </a>
    <a
      v-if="data.vkLink"
      :href="data.vkLink"
      class="w-full flex items-center gap-[10px]"
    >
      <Icon name="mdi:vk" size="25px" color="black" />
      Вконтакте
    </a>
    <a
      v-if="data.instagramLink"
      :href="data.instagramLink"
      class="w-full flex items-center gap-[10px]"
    >
    <Icon name="mdi:instagram" size="25px" color="black" />
      Instagram
    </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
