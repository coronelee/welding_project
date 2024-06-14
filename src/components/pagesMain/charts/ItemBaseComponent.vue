<template>
    <div
        class="font-Manrope_Medium text-[16px] w-full border border-[#6BACE4] rounded-lg flex justify-center items-center flex-col">
        <span class="w-full py-2 bg-[#6BACE4] text-white rounded-t-lg px-4 " @click="openLineChart('line')">
            Процент дефектных швов
        </span>
        <div id="line" class="hidden ">
            <div class="flex flex-col px-4 font-Manrope_Medium text-[16px] text-[#5F5F5F]">
                <span class="">
                    Проверки - $число
                </span>
                <span>
                    Общее кол-во не дефектых - $число
                </span>
                <span>
                    Кол-во дефектных - $число
                </span>
                <span>
                    Процент дефектов - $число
                </span>
            </div>
            <ChartComponent typechart="line" />
        </div>
    </div>

</template>