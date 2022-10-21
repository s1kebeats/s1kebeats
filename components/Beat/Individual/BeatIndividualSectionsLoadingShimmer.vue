<template>
  <div class="flex-1 flex flex-col gap-[var(--section-gap)]">
    <BaseLoadingShimmer class="h-[70px] rounded-full" />
    <BeatIndividualPricesLoadingShimmer />
    <BeatIndividualCommentsLoadingShimmer />
    <SectionRelatedBeatsLoadingShimmer />
  </div>
</template>
