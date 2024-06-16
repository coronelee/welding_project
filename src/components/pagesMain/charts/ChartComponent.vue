<script setup>
import { ref, onMounted, reactive, toRaw } from 'vue';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { computed } from 'vue';

// let rand = [];

// const getRand = () => {
//     for (let i = 0; i < 10; i++) {
//         rand[i] = Math.floor(Math.random() * 100) + 1
//     }
// }


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
        dataBase.value = [{
            category: 'Число дефектов за период',
            quantity: "27",
        }]
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

const getQuantity = () => {
    axios.get('http://localhost:8081/api/v1/text-stats/most-common').then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            quantity[i] = response.data[i].quantity
        }
    });
    let arr = toRaw(quantity.value)
    console.log(arr)
    return arr
}



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

const chartDataD = computed(() => ({
    labels: ['10.06', '11.06', '12.06', '13.06', '14.06', '15.06', '16.06'],
    datasets: [
        {
            data: [6, 2, 4, 3, 2, 2, 1, 5, 2],
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



const chartOptionsD = computed(() => ({
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
    <div class="flex flex-col px-4 font-Manrope_Medium text-[16px] text-[#5F5F5F]">
        <span v-for="item in dataBase" :key="item.id"><b>{{ item.category }}</b> - {{ item.quantity }}
            {{ item.description }}</span>
    </div>
    <LineChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'line'" />
    <BarChart :chart-options="chartOptionsD" :chart-data="chartDataD" v-if="typechart === 'bar'" />
    <DoughnutChart :chart-options="chartOptions" :chart-data="chartData" v-if="typechart === 'doughnut'" />
</template>