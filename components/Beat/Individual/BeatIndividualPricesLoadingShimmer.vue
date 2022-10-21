<template>
  <div class="border-[1px] flex-1 rounded-lg p-5 flex flex-col gap-[var(--section-gap)]">
    <div class="flex justify-between items-center">
      <BaseLoadingShimmer class="h-[21px] w-[80px] rounded-lg" />
      <div class="flex items-center gap-[var(--section-gap)]">
        <BaseLoadingShimmer class="h-[20px] w-[110px] rounded-lg" />
        <BaseLoadingShimmer class="h-[40px] w-[200px] rounded-lg" />
      </div>
    </div>
    <div class="border-t-[1px] pt-5 flex gap-[var(--section-gap)]">
      <BaseLoadingShimmer class="h-[86px] rounded-lg w-[300px]" />
      <BaseLoadingShimmer class="h-[86px] rounded-lg w-[300px]" />
    </div>
  </div>
</template>
