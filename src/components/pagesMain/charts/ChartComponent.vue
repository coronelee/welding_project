<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { computed } from 'vue';
import { LineChart, BarChart, DoughnutChart } from 'vue-chart-3';
import { c } from 'vite/dist/node/types.d-aGj9QkWt';
let rand = [];
const props = defineProps({
    typechart: String
})

Chart.register(...registerables);

const quantity = ref(null)
const dataBase = ref(null);

onMounted(() => {
    axios.get('http://localhost:8081/api/v1/text-stats/most-common')
        .then((response) => {
            if (props.typechart === 'doughnut') {
                dataBase.value = response.data;
                // let arr = []
                // for (let i = 0; i < dataBase.value.length; i++) {
                //     arr.push(dataBase.value[i].quantity);
                // }
                // quantity.value = arr
                // for (let i = 0; i < dataBase.value.length; i++) {
                //     arr.push(response.data[i].quantity)
                // }
                // quantity.value = arr
                // console.log(quantity.value)
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });

})



const chartData = computed(() => ({
    datasets: [
        {
            data: quantity,
            backgroundColor: '#2C50CC',
            borderColor: '#77CEFF',
            borderWidth: 2,
            borderRadius: 2,
            hoverOffset: 2,
            borderRadius: 2,
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


let data = ref(0)



</script>

<template>
    <div class="flex flex-col px-4 font-Manrope_Medium text-[16px] text-[#5F5F5F]">
        <span v-for="item in dataBase" :key="item.id">{{ item.category }} - {{ item.quantity }}</span>
    </div>
    <LineChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'line'" />
    <BarChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'bar'" />
    <DoughnutChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'doughnut'" />
</template>