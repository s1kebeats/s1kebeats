<template>
  <div class="relative border-l-[1px] border-base-200 pl-[1vw]">
    <button
      class="flex cursor-pointer items-center gap-[.3vw]"
      @focusout="hideDialog"
      @click="toggleProfileDialog"
    >
      <img
        class="w-[1.35vw] rounded-full"
        src="~/assets/images/profile-default.svg"
        alt="Profile Picture"
      />
      <img
        src="~/assets/images/chevron-down.svg"
        class="w-[.85vw] transition-all"
        :class="showDialog ? 'rotate-180 pb-[0.2vw]' : ''"
      />
    </button>
    <transition name="modal">
      <div
        v-show="showDialog"
        ref="dialogPanel"
        class="absolute z-[2] bg-white rounded-[.4vw] p-2 border-[1px] flex flex-col gap-2 shadow-md right-0 top-[34px]"
      >
        <button
          class="bg-primary rounded-[.4vw] px-3 py-1 min-w-[60px] text-sm text-white"
          @click="loginNavigation"
        >
          Вход
        </button>
        <button
          class="bg-base-200 rounded-[.4vw] px-3 py-1 min-w-[60px] text-sm text-black"
          @click="registrationNavigation"
        >
          Регистрация
        </button>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
const showDialog = ref(false);
const toggleProfileDialog = () => {
  showDialog.value = !showDialog.value;
};
const hideDialog = () => {
  setTimeout(() => {
    showDialog.value = false;
  }, 100);
};
const loginNavigation = async () => {
  await navigateTo("/login");
};
const registrationNavigation = async () => {
  await navigateTo("/register");
};
</script>
