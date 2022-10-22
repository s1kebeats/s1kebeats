<template>
  <div class="border-[1px] flex-1 rounded-[10px] p-5 flex flex-col gap-[20px]">
    <div class="flex justify-between items-center">
      <BaseLoadingShimmer class="h-[21px] w-[80px] rounded-[10px]" />
      <div class="flex items-center gap-[20px]">
        <BaseLoadingShimmer class="h-[20px] w-[110px] rounded-[10px]" />
        <BaseLoadingShimmer class="h-[40px] w-[200px] rounded-[10px]" />
      </div>
    </div>
    <div class="border-t-[1px] pt-5 flex gap-[20px]">
      <BaseLoadingShimmer class="h-[86px] rounded-[10px] w-[300px]" />
      <BaseLoadingShimmer class="h-[86px] rounded-[10px] w-[300px]" />
    </div>
  </div>
</template>
