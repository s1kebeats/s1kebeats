<template>
  <div
    class="flex justify-center transition-all"
    :class="store.overlay ? ' text-white' : ' text-black'"
    data-test="logo"
  >
    <NuxtLink title="Home" to="/" class="flex items-center gap-2">
      <img class="h-[26px] drop-shadow-sm" src="~/assets/images/logo.svg" />
      <span class="text-[23px] font-['Poppins']"> s1kebeats </span>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const store = useStore();
</script>
