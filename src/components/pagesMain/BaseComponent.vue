<template>
    <div class="text-3xl w-full h-full bg-white rounded-t-lg flex justify-between items-center  py-6 px-4  flex-col">
        <div class="flex justify-center items-center flex-col gap-2  w-full">
            <span class="font-Manrope_Bold text-[24px]">База знаний</span>
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
            <div
                class="font-Manrope_Medium text-[16px] w-full border border-[#6BACE4] rounded-lg flex justify-center items-center flex-col">
                <span class="w-full py-2 bg-[#6BACE4] text-white rounded-t-lg px-4 " @click="openLineChart('bar')">
                    Процент дефектных швов
                </span>
                <div id="bar" class="hidden ">
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
                    <ChartComponent typechart="bar" />
                </div>
                <div
                    class="font-Manrope_Medium text-[16px] w-full border border-[#6BACE4] rounded-lg flex justify-center items-center flex-col">
                    <span class="w-full py-2 bg-[#6BACE4] text-white rounded-t-lg px-4 "
                        @click="openLineChart('doughnut')">
                        Процент дефектных швов
                    </span>
                    <div id="doughnut" class="hidden ">
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
                        <ChartComponent typechart="doughnut" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import ChartComponent from "./charts/ChartComponent.vue";

const openLineChart = (chart) => {
    document.getElementById(chart).classList.toggle("hidden");
}


</script>