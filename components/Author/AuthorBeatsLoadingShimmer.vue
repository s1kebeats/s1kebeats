<template>
  <section class="flex flex-col gap-[20px]">
    <BaseLoadingShimmer class="h-[28px] w-[55px] rounded-[6px]" />
    <BaseItemsList class="max-w-[1080px]">
      <BeatAuthoredLoadingShimmer v-for="_ in Array(8)" />
    </BaseItemsList>
  </section>
</template>
