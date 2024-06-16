<template>
    <div
        class="font-Manrope_Medium text-[16px] w-full border border-[#6BACE4] rounded-lg flex justify-center items-center flex-col">
        <span class="w-full py-2 bg-[#6BACE4] text-white rounded-t-lg px-4 " @click="openChart()">
            {{ name }}
        </span>
        <div :id="typeChart" class="hidden ">
            <div class="flex flex-col px-4 font-Manrope_Medium text-[16px] text-[#5F5F5F]">
                <span>
                    <!-- {{ valueSumm }} -->
                    {{ data.stroke1 }} <br>{{ data.stroke2 }} </span><span>{{
                        data.stroke3 }}</span>
            </div>
            <ChartComponent :typechart="typeChart" class="h-[200px]" />
        </div>
    </div>
</template>

<script setup>
import ChartComponent from "./ChartComponent.vue";
const props = defineProps({
    name: String,
    typeChart: String,
    data: Array,
    adj: Number,
    int: Number,
    geo: Number,
    pro: Number,
    non: Number,
    valueSumm: Number
})
const openChart = () => {
    document.getElementById(props.typeChart).classList.toggle("hidden");
}

</script>