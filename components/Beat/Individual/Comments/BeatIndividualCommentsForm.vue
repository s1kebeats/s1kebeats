<template>
  <div class="flex gap-[.8vw] items-end">
    <img
      src="~/assets/images/profile-default.svg"
      class="rounded-full h-[35px] w-[35px]"
    />
    <input
      :value="value"
      type="text"
      class="transition-all border-b-[1px] pb-[8px] flex-1 focus:outline-none text-[14px] focus:border-primary"
      placeholder="Написать комментарий..."
      @input="changeValue"
    />
    <button
      class="transition-all rounded-full h-[35px] w-[35px] flex items-center justify-center"
      :disabled="!value"
      :class="!value ? 'cursor-not-allowed' : ''"
      @click="loginRedirect"
    >
      <icon
        name="mdi:send-circle"
        size="35px"
        class="transition-all"
        :color="value ? '#745fc7' : '#cfcfcf'"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
const value = ref("");
const changeValue = (e: InputEvent): void => {
  const input = e.target as HTMLInputElement;
  value.value = input.value;
};
const loginRedirect = (): void => {
  navigateTo("/login");
};
</script>
