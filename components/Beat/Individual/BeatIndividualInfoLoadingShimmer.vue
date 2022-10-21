<template>
  <div
    class="border-base-200 border-[1px] rounded-lg w-[360px] flex flex-col gap-[var(--section-gap)] items-center py-8 px-7"
  >
    <BeatIndividualInfoBaseLoadingShimmer />
    <BaseLoadingShimmer class="w-full h-[30px] rounded-[.4vw]" />
    <BeatIndividualInfoCharsLoadingShimmer />
    <BeatIndividualInfoTagsLoadingShimmer />
  </div>
</template>
