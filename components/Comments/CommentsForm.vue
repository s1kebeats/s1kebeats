<template>
    <div class="flex gap-4 items-end">
        <img src="~/assets/images/profile-default.svg" class="rounded-full h-[35px] w-[35px]" width="35px" height="35px">
        <input @input="changeValue" :value="value"  type="text" class="transition-all border-b-[1px] pb-2 flex-1 focus:outline-none text-sm focus:border-primary" placeholder="Написать комментарий...">
        <button class="transition-all rounded-full h-[35px] w-[35px] bg-base-300 flex items-center justify-center" @click="loginRedirect" :disabled="!value" :class="value ? 'bg-primary' : 'cursor-not-allowed'" >
            <img src="~/assets/images/send.svg" class="w-[15px]">
        </button>
    </div>
</template>
<script setup lang="ts">
const value = ref('')
const changeValue = (e: InputEvent): void => {
    const input = e.target as HTMLInputElement
    value.value = input.value
}
const loginRedirect = (): void => {
    navigateTo('/login')
}
</script>