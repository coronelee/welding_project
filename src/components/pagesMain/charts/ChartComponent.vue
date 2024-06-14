<script setup>
import { Chart, registerables } from 'chart.js';
import { computed } from 'vue';
import { LineChart, BarChart, DoughnutChart } from 'vue-chart-3';
let rand = [];
const random = () => {
    for (let i = 0; i < 40; i++) {
        rand.push(Math.floor(Math.random() * 100))
    }
}

random()
Chart.register(...registerables);

const props = defineProps({
    typechart: String
})

const chartData = computed(() => ({
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',],
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
</script>

<template>
    <LineChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'line'" />
    <BarChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'bar'" />
    <DoughnutChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'doughnut'" />
</template>