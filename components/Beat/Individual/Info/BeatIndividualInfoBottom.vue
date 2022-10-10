<template>
  <div class="w-full mt-5 border-t-[1px]">
    <div class="pt-5 text-sm text-black">
      <table v-if="beat">
        <tr>
          <td class="text-left">Опубликован</td>
          <td class="w-full text-right">
            {{ useDateOutput(beat.createdAt) }}
          </td>
        </tr>
        <tr>
          <td class="text-left">BPM</td>
          <td class="w-full text-right">
            {{ beat.bpm }}
          </td>
        </tr>
        <tr>
          <td class="text-left">Прослушивания</td>
          <td class="w-full text-right">
            {{ beat.plays }}
          </td>
        </tr>
      </table>
      <table v-else class="w-full">
        <tr>
          <td class="text-left">
            <BaseLoadingShimmer class="h-[20px] w-[40px] rounded-lg" />
          </td>
          <td class="w-full flex justify-end">
            <BaseLoadingShimmer class="h-[20px] w-[30px] rounded-lg" />
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <BaseLoadingShimmer class="h-[20px] w-[85px] rounded-lg" />
          </td>
          <td class="w-full flex justify-end">
            <BaseLoadingShimmer class="h-[20px] w-[45px] rounded-lg" />
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <BaseLoadingShimmer class="h-[20px] w-[90px] rounded-lg" />
          </td>
          <td class="w-full flex justify-end">
            <BaseLoadingShimmer class="h-[20px] w-[35px] rounded-lg" />
          </td>
        </tr>
      </table>
      <!-- <BaseLoadingShimmer v-else class="h-[66px] w-full rounded-lg" /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
const props = defineProps<{
  beat: BeatIndividual;
}>();
</script>
