<template>
  <SectionItemsList class="self-start flex-1 w-[var(--section-60-width)]" title="Биты">
    <BeatAuthored v-for="item in data" :key="item.id" :data="item" />
  </SectionItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Beat[];
}>();
</script>
