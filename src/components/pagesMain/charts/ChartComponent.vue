<script setup>
import { ref, onMounted, reactive, toRaw } from 'vue';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { computed } from 'vue';
import { LineChart, BarChart, DoughnutChart } from 'vue-chart-3';

const props = defineProps({
    typechart: String
})

Chart.register(...registerables);

const dataBase = ref(null);
const quantity = reactive([])
const description = ref([]);
onMounted(() => {
    if (props.typechart == 'doughnut') {
        axios.get('http://localhost:8081/api/v1/text-stats/most-common')
            .then((response) => {
                dataBase.value = response.data;
                let arr = []
                for (let i = 0; i < dataBase.value.length; i++) {
                    arr[i] = dataBase.value[i].quantity
                }
                quantity.value = arr
                for (let i = 0; i < dataBase.value.length; i++) {
                    arr[i] = dataBase.value[i].description
                }
                description.value = arr
            })
    }
    if (props.typechart == 'bar') {
        axios.get('http://localhost:8081/api/v1/text-stats/most-common')
            .then((response) => {

                dataBase.value = response.data;
                let arr = []
                for (let i = 0; i < dataBase.value.length; i++) {
                    arr[i] = dataBase.value[i].quantity
                }
                quantity.value = arr
            })
    }
    if (props.typechart == 'line') {
        axios.get('http://localhost:8081/api/v1/text-stats/most-common')
            .then((response) => {

                dataBase.value = response.data;
                let arr = []
                for (let i = 0; i < dataBase.value.length; i++) {
                    arr[i] = dataBase.value[i].quantity
                }
                quantity.value = arr

            })
    }
})



const chartData = computed(() => ({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            data: [6, 5, 4, 3, 2],
            backgroundColor: '#2C50CC',
            borderColor: '#77CEFF',
            borderWidth: 2,
            borderRadius: 2,
            hoverOffset: 2,
            barThickness: 2,
        },
    ],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 10,
                    color: 'white',
                    font: {
                        size: 12,
                        family: 'Manrope_Bold',
                    },
                },
            },
        },
    }
}));



const chartOptions = computed(() => ({

    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'y',
    scales: {
        x: {
            ticks: {
                color: 'white',
                font: {
                    size: 12,
                    family: 'Manrope_Bold',
                },
            },
        },

        y: {
            min: 0,
            max: 100,
            ticks: {
                stepSize: 10,
                color: 'white',
                font: {
                    size: 12,
                    family: 'Manrope_Bold',
                },
            },
        },
    },
}));




</script>

<template>
    <div class="flex flex-col px-4 font-Manrope_Medium text-[16px] text-[#5F5F5F]" v-if="props.typechart == 'doughnut'">
        <span v-for="item in dataBase" :key="item.id"><b>{{ item.category }}</b> - {{ item.quantity }}
        </span>
    </div>
    <LineChart :chart-options="chartOptions" :chart-data="chartData" v-if="props.typechart == 'line'" />
    <BarChart :chart-options="chartOptions" :chart-data="chartData" v-if="props.typechart == 'bar'" />
    <DoughnutChart :chart-options="chartOptions" :chart-data="chartData" v-if="props.typechart == 'doughnut'" />
</template>