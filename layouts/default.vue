<template>
  <div id="default">
    <SectionOverlay />
    <BaseHeader />
    <main class="grow flex flex-col items-center gap-10">
      <slot />
    </main>
    <BaseFooter />
    <MainPlayer />
  </div>
</template>
