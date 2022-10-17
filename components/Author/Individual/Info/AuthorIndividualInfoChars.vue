<template>
  <div class="w-full border-t-[1px]">
    <table class="mt-5 text-sm text-black">
      <tr>
        <td class="text-left">Биты</td>
        <td class="w-full text-right">
          {{ data.beatsCount }}
        </td>
      </tr>
      <tr>
        <td class="text-left">Прослушивания</td>
        <td class="w-full text-right">
          {{ data.playsCount }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: AuthorIndividual;
}>();
</script>
