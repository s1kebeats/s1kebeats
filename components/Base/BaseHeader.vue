<template>
  <header
    class="w-full h-[60px] box-border border-base-200 flex items-center justify-between gap-5 px-5 text-center select-none"
    :class="!store.showOverlay ? 'border-b' : ''"
  >
    <BaseHeaderLogo class="525:flex-1" />
    <slot>
      <BaseHeaderSearch />
      <BaseNav
        class="525:hidden text-black text-sm"
      />
      <BaseOverlayButton />
    </slot>
  </header>
</template>
<script setup lang="ts">
const store = useStore();
</script>
