<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { computed } from 'vue';
import { LineChart, BarChart, DoughnutChart } from 'vue-chart-3';
let rand = [];
let label = [];
const props = defineProps({
    typechart: String
})
const random = () => {

    for (let i = 0; props.typechart == 'doughnut' ? i < 7 : i < 40; i++) {
        rand.push(Math.floor(Math.random() * 100))
    }
}
const labelCreate = () => {

    for (let i = 0; props.typechart == 'doughnut' ? i < 7 : i < 30; i++) {
        label.push(i)
    }
}
labelCreate()
random()
Chart.register(...registerables);



const chartData = computed(() => ({
    labels: label,
    datasets: [
        {
            data: rand,
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

onMounted(() => {
    axios.get('http://localhost:8081/api/v1/text-stats/most-common').then((response) => {
        data.value = response.data
    })

    if (props.typechart === 'doughnut') {
        let arr = []

    }
})

</script>

<template>
    <LineChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'line'" />
    <BarChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'bar'" />
    <DoughnutChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'doughnut'" />
</template>