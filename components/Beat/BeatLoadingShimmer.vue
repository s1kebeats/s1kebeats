<template>
  <div
    data-test="beat"
    class="flex flex-col w-[230px] 930:w-[145px] rounded-[10px]"
  >
    <div class="w-full h-[230px] 930:h-[145px] mb-3">
      <BaseLoadingShimmer class="rounded-[10px] mb-3 w-full h-full" />
    </div>
    <div class="flex flex-col gap-[3px]">
      <BaseLoadingShimmer class="rounded-[10px] h-[18px] w-[110px]" />
      <BaseLoadingShimmer class="rounded-[10px] h-[30px] w-[200px]" />
      <BaseLoadingShimmer class="rounded-[10px] h-[18px] w-[90px]" />
    </div>
  </div>
</template>
