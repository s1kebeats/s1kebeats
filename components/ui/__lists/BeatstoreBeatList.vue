<template>
  <div data-test="beatList" class="flex flex-col responsive">
    <div v-show="list.length" class="flex flex-wrap gap-5">
      <BeatstoreBeat
        v-for="item in list"
        :key="item.id ? item.id : 0"
        :beat="item"
      />
    </div>
    <p
      v-show="!list.length"
      data-test="nothingFound"
      class="text-md text-black text-center pt-2"
    >
      Nothing was found
    </p>
  </div>
</template>
<script setup lang="ts">
import BeatstoreBeat from "@/components/ui/__beat/BeatstoreBeat.vue";
const props = defineProps<{
  list: Beat[];
}>();
</script>
<style lang="scss">
.list-enter-active {
  animation: bounce-in 0.1s;
}
.list-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
