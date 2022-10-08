<template>
  <div
    data-test="beat"
    class="flex flex-col w-[230px] 930:w-[145px] rounded-lg"
  >
    <div class="w-full h-[230px] 930:h-[145px] mb-3">
      <BaseLoadingShimmer class="rounded-lg mb-3 w-full h-full" />
    </div>
    <BaseLoadingShimmer class="rounded-lg h-[20px] w-full mb-[1px]" />
    <BaseLoadingShimmer class="rounded-lg h-[52px] w-full" />
  </div>
</template>
