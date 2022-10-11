<template>
  <section id="usage" class="flex flex-col items-start">
    <h1
      class="cursor-pointer flex items-center gap-[3px] text-left text-md text-black w-full"
      @click="toggleUsage"
    >
      
      <img width="16px" class="transition-all" :class="showUsage ? 'rotate-180 pb-[3px]' : ''" src="~/assets/images/chevron-down.svg">
    </h1>
    <p v-show="showUsage" class="text-sm text-black w-[300px] mt-2">
      All beats are free to use, must credit me in the name of your song:
      <span class="font-semibold">"prod. by s1kebeats"</span>
    </p>
  </section>
</template>
<script setup lang="ts">
const showUsage = ref(false);
const toggleUsage = () => {
  showUsage.value = !showUsage.value;
};
</script>
