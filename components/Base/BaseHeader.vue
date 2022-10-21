<template>
  <header
    class="w-full h-[3vw] border-base-200 flex items-center justify-between px-[1vw] text-center select-none"
  >
    <BaseHeaderLogo />
    <slot>
      <BaseHeaderSearch />
      <div class="flex gap-[var(--section-gap)] items-center">
        <BaseNav class="text-black text-[.75vw]" />
        <BaseHeaderProfile />
      </div>
    </slot>
  </header>
</template>
