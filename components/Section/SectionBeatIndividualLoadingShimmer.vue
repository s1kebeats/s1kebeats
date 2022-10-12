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
        
        <div class="w-full border-t-[1px] pt-5">
            <table class="w-full text-sm text-black flex flex-col gap-[3px]">
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
        <div class="w-full flex flex-col gap-2 border-t-[1px] pt-5" >
            <BaseLoadingShimmer class="h-[20px] w-[50px] rounded-md" />
            <BaseItemsList class="gap-1">
                <BaseLoadingShimmer class="h-[24px] w-[90px] rounded-full" />
                <BaseLoadingShimmer class="h-[24px] w-[60px] rounded-full" />
                <BaseLoadingShimmer class="h-[24px] w-[110px] rounded-full" />
                <BaseLoadingShimmer class="h-[24px] w-[80px] rounded-full" />
            </BaseItemsList>
        </div>
    </div>
    <div class="border-[1px] flex-1 rounded-lg p-5 flex flex-col gap-5">
        <div class="flex justify-between items-center">
            <BaseLoadingShimmer class="h-[21px] w-[80px] rounded-lg" />
            <div class="flex items-center gap-5">
                <BaseLoadingShimmer class="h-[20px] w-[110px] rounded-lg" />
                <BaseLoadingShimmer class="h-[40px] w-[200px] rounded-lg" />
            </div>
        </div>
        <div class="border-y-[1px] py-5 flex gap-5">
            <BaseLoadingShimmer class="h-[86px] rounded-lg w-[300px]" />
            <BaseLoadingShimmer class="h-[86px] rounded-lg w-[300px]" />
        </div>
        
        <div class="flex flex-col gap-5">
            <div class="h-[40px] w-full">
                <BaseLoadingShimmer class="h-[21px] w-[125px] rounded-lg" />
            </div>
            <BaseLoadingShimmer class="w-full rounded-lg h-[35px]" />
        </div>



    </div>
  </section>
</template>