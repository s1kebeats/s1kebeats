<template>
  <section class="flex flex-col gap-[var(--section-gap)]">
    <BaseLoadingShimmer class="h-[28px] w-[55px] rounded-[.4vw]" />
    <BaseItemsList class="max-w-[1080px]">
      <BeatAuthoredLoadingShimmer v-for="_ in Array(8)" />
    </BaseItemsList>
  </section>
</template>
