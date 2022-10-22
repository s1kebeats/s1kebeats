<template>
  <div
    class="h-[30px] rounded-full flex-1 border-[1px] max-w-[600px] px-[10px] flex gap-[10px] items-center"
  >
    <Icon name="material-symbols:search" size="20px" @click="submitSearchQuery" class="cursor-pointer" />
    <input
      ref="searchInput"
      type="text"
      class="flex-1 h-[20px] focus:outline-none text-[14px]"
      placeholder="Найди свой звук"
      :value="searchQuery.query"
      autocomplete="off"
      @input="searchQueryInput"
    />
    <BaseSelect :options="searchOptions" @select="changeSearchType" />
  </div>
</template>
<script setup lang="ts">
const searchOptions = [
  { id: 1, value: "beats", text: "Биты", default: true },
  { id: 2, value: "authors", text: "Авторы", default: false },
];
const searchInput = ref();
const searchQuery = reactive<{
  query: string;
  type: string;
}>({
  query: "",
  type: "",
});
const changeSearchType = (value) => {
  searchQuery.type = value;
  if (searchInput.value) {
    searchInput.value.focus();
  }
};
const searchQueryInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  searchQuery.query = target.value;
};
const submitSearchQuery = async () => {
  if (searchQuery.query) {
    await navigateTo(`/${searchQuery.type}?query=${searchQuery.query}`);
  }
};
const submitOnEnter = (e: KeyboardEvent) => {
  if (e.key === "Enter" && document.activeElement === searchInput.value) {
    submitSearchQuery();
  }
};
onMounted(() => {
  document.addEventListener("keyup", submitOnEnter);
});
onUnmounted(() => {
  document.removeEventListener("keyup", submitOnEnter);
});
</script>
