<template>
  <section
    class="landing select-none border-b flex items-center justify-center w-full h-[25vw]"
  >
    <div class="text-black w-[var(--section-width)] flex items-center justify-center">
      <h1 class="text-[2.5vw] font-semibold">
        Продавай и покупай биты
      </h1>
      <div class="flex-1 flex justify-center items-center gap-[0.8vw]">
        <img
          class="h-[4.2vw]"
          src="~/assets/images/logo.svg"
        />
        <span class="text-[3.4vw] font-['Poppins']">
          s1kebeats
        </span>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.landing {
  background: linear-gradient(
    70deg,
    rgb(243, 239, 252) 10%,
    rgba(243, 239, 252, 1) 60%,
    rgba(121, 69, 252, 1) 100%
  );
}
</style>
