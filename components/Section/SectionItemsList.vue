<template>
  <section class="flex flex-col gap-[20px]">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-[18px] font-semibold text-black">
        {{ title }}
      </h1>
      <NuxtLink
        v-if="linkTitle && linkUrl"
        class="hover:text-black transition-all text-[16px]"
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
