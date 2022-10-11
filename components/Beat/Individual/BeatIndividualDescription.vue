<template>
    <div class="w-full flex flex-col gap-2 border-t-[1px]" >
        <div class="text-sm text-black text-left font-semibold mt-5 mb-!">Описание</div>
        <p class="text-sm text-black text-left">{{ data }}</p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    data: string;
}>()
</script>