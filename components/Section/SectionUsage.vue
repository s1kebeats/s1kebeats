<template>
  <section id="usage" class="flex flex-col items-start">
    <h1
      class="cursor-pointer flex items-center gap-[3px] text-left text-md text-black w-full"
      @click="toggleUsage"
    >
      Terms of use
      <ChevronSVG />
    </h1>
    <p v-show="showUsage" class="text-sm text-black w-[300px] mt-2">
      All beats are free to use, must credit me in the name of your song:
      <span class="font-semibold">"prod. by s1kebeats"</span>
    </p>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ChevronSVG from "@/components/ui/__svg/ChevronSVG.vue";
const showUsage = ref(false);
const icon = ref();
const toggleUsage = () => {
  showUsage.value = !showUsage.value;
  icon.value.classList.toggle("rotate-90");
};
</script>
