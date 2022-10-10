<template>
  <section class="responsive pt-5 flex justify-center gap-5">
    <div
        class="border-base-200 border-[1px] rounded-lg w-[360px] flex flex-col gap-5 items-center py-8 px-7"
    >
        <div class="w-full flex flex-col items-center">
            <BaseLoadingShimmer
                class="rounded-lg h-[230px] w-[230px]"
            />
            <div class="mt-3 w-full flex flex-col gap-1 items-center">
                <BaseLoadingShimmer class="w-[200px] h-[30px] rounded-lg" />
                <BaseLoadingShimmer class="w-[120px] h-[18px] rounded-lg" />
            </div>
        </div>
        <BaseLoadingShimmer
            class="w-full h-[30px] rounded-md"
        />
        
        <div class="w-full border-t-[1px]">
            <table class="w-full mt-5 text-sm text-black flex flex-col gap-[3px]">
                <tr class="flex justify-between h-[20px]">
                    <BaseLoadingShimmer class="w-[80px] h-full rounded-md" />
                    <BaseLoadingShimmer class="w-[120px] h-full rounded-md" />
                </tr>
                <tr class="flex justify-between h-[20px]">
                    <BaseLoadingShimmer class="w-[60px] h-full rounded-md" />
                    <BaseLoadingShimmer class="w-[80px] h-full rounded-md" />
                </tr>
                <tr class="flex justify-between h-[20px]">
                    <BaseLoadingShimmer class="w-[100px] h-full rounded-md" />
                    <BaseLoadingShimmer class="w-[70px] h-full rounded-md" />
                </tr>
            </table>
        </div>


    </div>
    <BeatPrices :data="data" />
  </section>
</template>