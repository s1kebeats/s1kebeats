<template>
  <div class="pb-[.40px]0">
    <BaseLoadingShimmer class="w-[135px] h-[21px] mb-5 rounded-[6px]" />
    <BaseItemsList class="h-[299px]">
      <BeatRelatedLoadingShimmer v-for="item in Array(5)" />
    </BaseItemsList>
  </div>
</template>
