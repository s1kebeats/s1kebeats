<template>
  <div class="relative border-l-[1px] border-base-200 pl-[20px]">
    <button
      class="flex cursor-pointer items-center gap-[4px]"
      @focusout="hideDialog"
      @click="toggleProfileDialog"
    >
      <img
        class="w-[25px] rounded-full"
        src="~/assets/images/profile-default.svg"
        alt="Profile Picture"
      />
      <Icon name="mdi:chevron-down" size="18px" class="cursor-pointer transition-all" :class="showDialog ? 'rotate-180' : ''" />
    </button>
    <transition name="modal">
      <div
        v-show="showDialog"
        ref="dialogPanel"
        class="absolute z-[2] bg-white rounded-[6px] p-[6px] border-[1px] flex flex-col gap-[6px] shadow-md right-0 top-[45px] text-[14px]"
      >
        <button
          class="bg-primary rounded-[6px] px-[8px] py-[4px] text-white"
          @click="loginNavigation"
        >
          Вход
        </button>
        <button
          class="bg-base-200 rounded-[6px] px-[8px] py-[4px] text-black"
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
