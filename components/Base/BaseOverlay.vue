<template>
  <transition name="overlay">
    <section
      v-show="active"
      class="absolute z-[999] w-full h-screen bg-[rgba(0,0,0,.99)] flex items-center justify-center flex-col"
      data-test="overlay"
    >
      <slot />
    </section>
  </transition>
</template>
<script setup lang="ts">
const props = defineProps({
  active: Boolean,
});
</script>
