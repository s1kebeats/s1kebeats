<template>
  <nav class="flex gap-[0.8vw] justify-end">
    <NuxtLink
      title="На главную"
      to="/"
      class="font-medium transition-all"
      data-test="link"
    >
      Главная
    </NuxtLink>
    <NuxtLink
      title="К битам"
      to="/beats"
      class="font-medium transition-all"
      data-test="link"
    >
      Биты
    </NuxtLink>
  </nav>
</template>
