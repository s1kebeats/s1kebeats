<template>
  <BaseOverlay
    data-test="mainOverlay"
    class="main-overlay"
    :active="store.showOverlay"
  >
    <BaseHeader class="min-h-[60px]">
      <button
        title="Close overlay"
        class="btn btn-primary btn-square btn-xs absolute right-5 hover:bg-primary hover:border-primary overlay-btn_close"
        @click="store.toggleOverlay"
      ></button>
    </BaseHeader>
    <main class="grow flex items-center justify-center flex-col h-full w-full">
      <BaseNav
        :classes="{
          main: 'grow-0 flex flex-col gap-[5px]',
          link: 'text-white text-xl',
        }"
        @click="store.toggleOverlay"
      />
    </main>
    <BaseFooter />
  </BaseOverlay>
</template>
<script setup lang="ts">
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
