<template>
  <a
    :href="url"
    download=""
    class="shadow-md w-full h-[30px] bg-green-500 rounded-md text-white text-sm gap-2 flex items-center justify-center transition-all hover:bg-green-600"
  >
    Скачать бесплатно
    <img src="~/assets/images/download-cloud.svg" class="w-[17px]" />
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();
</script>
