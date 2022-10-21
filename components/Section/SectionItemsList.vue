<template>
  <section class="flex flex-col gap-[1vw]">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-[1vw] font-semibold text-black">
        {{ title }}
      </h1>
      <NuxtLink
        v-if="linkTitle && linkUrl"
        class="hover:text-black transition-all text-[.85vw]"
        :to="linkUrl"
      >
        {{ linkTitle }}
      </NuxtLink>
    </div>
    <BaseItemsList>
      <slot />
    </BaseItemsList>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  linkTitle?: string;
  linkUrl?: string;
}>();
</script>
