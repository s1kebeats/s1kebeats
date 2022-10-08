<template>
    <div class="h-[30px] rounded-full flex-1 border-[1px] max-w-[600px] px-3 flex gap-2 items-center" >
        <img src="~/assets/images/search.svg" class="w-[18px] cursor-pointer" alt="Поиск" @click="submitSearchQuery">
        <input ref="searchInput" type="text" class="flex-1 h-[20px] focus:outline-none text-sm" placeholder="Найди свой звук" :value="searchQuery.query" @input="searchQueryInput">
        <BaseSelect @select="changeSearchType" :options="searchOptions" />
    </div>
</template>
<script setup lang="ts">

const searchOptions = [
    {id: 1, value: 'beats', text: 'Биты', default: true},
    {id: 2, value: 'authors', text: 'Авторы', default: false},
]
const searchInput = ref()
const searchQuery = reactive<{
    query: string;
    type: string;
}>({
    query: '',
    type: ''
})
const changeSearchType = (value) => {
    searchQuery.type = value
    if (searchInput.value) {
        searchInput.value.focus()
    }
}
const searchQueryInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  searchQuery.query = target.value;
}
const submitSearchQuery = async () => {
    if (!searchQuery.query) delete searchQuery.query
    await navigateTo(`/search?${new URLSearchParams(searchQuery).toString()}`)
}
const submitOnEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && document.activeElement === searchInput.value) {submitSearchQuery()}
}
onMounted(() => {
    document.addEventListener('keyup', submitOnEnter)
})
onUnmounted(() => {
    document.removeEventListener('keyup', submitOnEnter)
})
</script>