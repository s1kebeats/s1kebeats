<template>
  <section class="flex flex-col gap-5">
    <BaseLoadingShimmer class="h-[28px] w-[55px] rounded-md" />
    <BaseItemsList class="max-w-[1080px]">
      <BeatAuthoredLoadingShimmer v-for="_ in Array(8)" />
    </BaseItemsList>
  </section>
</template>
