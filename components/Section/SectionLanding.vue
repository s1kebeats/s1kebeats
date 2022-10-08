<template>
  <section
    class="landing select-none border-b flex items-center justify-center w-full py-[200px] 930:py-[100px]"
  >
    <div class="landing__text responsive flex items-center justify-center">
      <h1 class="text-5xl text-black font-semibold 930:text-3xl">
        Free type beats by
      </h1>
      <div class="flex-1 flex justify-center items-center gap-4 930:gap-3">
        <img
          class="h-[80px] drop-shadow-sm 930:h-[60px]"
          src="~/assets/images/logo.svg"
        />
        <span class="text-black text-7xl font-['Poppins'] 930:text-5xl">
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
  &__text {
    @media screen and (max-width: 1150px) {
      gap: 56px;
      flex-direction: column;
    }
    @media screen and (max-width: 930px) {
      gap: 25px;
    }
  }
}
</style>
