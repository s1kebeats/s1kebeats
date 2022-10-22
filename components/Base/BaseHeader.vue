<template>
  <header
    class="w-full h-[55px] border-b-[1px] flex items-center justify-between px-[20px] text-center select-none"
  >
    <BaseHeaderLogo />
    <slot>
      <BaseHeaderSearch />
      <div class="flex gap-[20px] items-center">
        <BaseNav class="text-black text-[14px]" />
        <BaseHeaderProfile />
      </div>
    </slot>
  </header>
</template>
