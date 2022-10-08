<template>
  <button
    data-test="artist"
    class="flex-1 px-2 h-[24px] text-xs rounded-lg shadow-md text-white flex justify-center items-center min-w-[90px] max-w-[110px] box-border hover:bg-black transition-all"
    @click.prevent="selectArtist(artist.id)"
  >
    {{ artist.name }}
  </button>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: "selectArtist", artist: number): void;
}>();
const props = defineProps<{
  artist: Artist;
}>();
const selectArtist = (id: number): void => {
  emit("selectArtist", id);
};
</script>
