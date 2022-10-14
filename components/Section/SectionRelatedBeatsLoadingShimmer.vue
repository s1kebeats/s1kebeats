<template>
  <div class="pb-10">
    <BaseLoadingShimmer class="w-[135px] h-[21px] mb-5 rounded-md" />
    <BaseItemsList class="h-[299px]">
      <BeatRelatedLoadingShimmer v-for="item in Array(5)" />
    </BaseItemsList>
  </div>
</template>
