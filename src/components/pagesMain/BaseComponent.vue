<template>
    <div class="text-3xl w-full h-full bg-white rounded-t-lg flex justify-between items-center px-4  flex-col pt-16">
        <div class="flex justify-start items-center flex-col gap-2 w-full overflow-scroll mb-4">
            <span class="font-Manrope_Bold text-[24px]">Метрики</span>
            <ItemBaseComponent name="Процент дефектных швов" :data="data[0]" :valueSumm="valueSumm" typeChart="line"
                :adj="adj" :int="int" :geo="geo" :pro="pro" :non="non" />
            <ItemBaseComponent name="Наиболее распространенный дефект" :data="data[1]" typeChart="doughnut" />
            <ItemBaseComponent name="Число дефектов/период" :data="data[2]" typeChart="bar" />
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ItemBaseComponent from "./charts/ItemBaseComponent.vue";
const data = [
    {
        stroke1: 'Проверки - ',
        stroke2: 'Oбщее кол-во дефектных - ',
        stroke3: 'Ср. дефектов на проверку - ',
    },
    {
        stroke1: 'Проваренная деталь - встретился 2 раза'
    },
    {
        stroke1: 'За сегодня: $имя дефекта - $число'
    }
]

const props = defineProps({
    adj: Number,
    int: Number,
    geo: Number,
    pro: Number,
    non: Number
})
const valueSumm = ref(0)
onMounted(() => {
    valueSumm.value = (props.adj + props.int + props.geo + props.pro + props.non)
})
</script>