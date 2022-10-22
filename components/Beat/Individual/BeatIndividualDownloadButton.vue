<template>
  <a
    :href="url"
    download=""
    class="shadow-md w-full h-[30px] bg-green-500 rounded-[6px] text-white text-[14px] gap-[8px] flex items-center justify-center transition-all hover:bg-green-600"
  >
    Скачать бесплатно
    <img src="~/assets/images/download-cloud.svg" class="w-[.85vw]" />
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();
</script>
