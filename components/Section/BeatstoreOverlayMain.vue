<template>
  <BeatstoreOverlay
    data-test="mainOverlay"
    class="main-overlay"
    :active="store.overlay"
  >
    <BeatstoreHeader class="min-h-[60px]">
      <button
        title="Close overlay"
        class="btn btn-primary btn-square btn-xs absolute right-5 hover:bg-primary hover:border-primary overlay-btn_close"
        @click="store.toggleOverlay"
      ></button>
    </BeatstoreHeader>
    <main class="grow flex items-center justify-center flex-col h-full w-full">
      <BeatstoreNav
        :classes="{
          main: 'grow-0 flex flex-col gap-[5px]',
          link: 'text-white text-xl',
        }"
        @click="store.toggleOverlay"
      />
    </main>
    <BeatstoreFooter />
  </BeatstoreOverlay>
</template>
<script setup lang="ts">
import BeatstoreOverlay from "@/components/ui/BeatstoreOverlay.vue";
import BeatstoreHeader from "@/components/sections/BeatstoreHeader.vue";
import BeatstoreNav from "@/components/ui/BeatstoreNav.vue";
import BeatstoreFooter from "@/components/sections/BeatstoreFooter.vue";
// global store
import { useStore } from "@/stores/index";
const store = useStore();
</script>
<style lang="scss">
.overlay-btn_close {
  background-image: url("~/assets/images/close.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px;
}
</style>
