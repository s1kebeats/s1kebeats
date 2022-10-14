<template>
  <div class="w-full border-y-[1px]">
    <table class="my-5 text-sm text-black">
      <tr>
        <td class="text-left">Опубликован</td>
        <td class="w-full text-right">
          {{ useDateOutput(data.createdAt) }}
        </td>
      </tr>
      <tr>
        <td class="text-left">BPM</td>
        <td class="w-full text-right">
          {{ data.bpm }}
        </td>
      </tr>
      <tr>
        <td class="text-left">Прослушивания</td>
        <td class="w-full text-right">
          {{ data.plays }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: BeatIndividual;
}>();
</script>
