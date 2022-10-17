<template>
  <SectionItemsList class="flex-1" title="Биты">
    <BaseItemsList>
      <BeatAuthored v-for="item in data" :key="item.id" :data="item" />
    </BaseItemsList>
  </SectionItemsList>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: Beat[];
}>();
</script>
