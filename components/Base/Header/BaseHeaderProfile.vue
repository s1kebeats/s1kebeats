<template>
  <button
    class="relative cursor-pointer border-l-[1px] border-base-200 pl-5"
    @focusout="hideDialog"
    @click="toggleProfileDialog"
  >
    <div class="flex items-center gap-1">
      <img
        class="w-[24px] rounded-full"
        src="~/assets/images/profile-default.svg"
        alt="Profile Picture"
      />
      <img
        src="~/assets/images/chevron-down.svg"
        class="w-[15px] transition-all"
        :class="showDialog ? 'rotate-180 pb-[3px]' : ''"
      />
    </div>
    <transition name="modal">
        <div
            v-show="showDialog"
            ref="dialogPanel"
            class="absolute z-[2] bg-white rounded-md p-2 border-[1px] flex flex-col gap-2 shadow-md right-0 top-[34px]"
        >
        <button
            class="bg-primary rounded-md px-3 py-1 min-w-[60px] text-sm text-white"
            @click="loginNavigation"
        >
            Sign In
        </button>
        <button
            class="bg-base-200 rounded-md px-3 py-1 min-w-[60px] text-sm text-black"
            @click="registrationNavigation"
        >
            Register
        </button>
        </div>
    </transition>

  </button>
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
