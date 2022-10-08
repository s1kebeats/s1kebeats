<template>
  <div>
    <BeatstoreOverlayMain />
    <BaseHeader />
    <main class="grow flex flex-col items-center">
      <slot />
    </main>
    <BaseFooter />
    <Player />
  </div>
</template>
