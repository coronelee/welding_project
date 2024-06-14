<template>
    <div class="text-3xl w-full h-full bg-white rounded-t-lg flex justify-between items-center px-4  flex-col pt-16">
        <div class="flex justify-start items-center flex-col gap-2 w-full overflow-scroll mb-4">
            <span class="font-Manrope_Bold text-[24px]">База знаний</span>
            <ItemBaseComponent name="Процент дефектных швов" :data="data[0]" typeChart="line" />
            <ItemBaseComponent name="Наиболее распространенный дефект" :data="data[1]" typeChart="doughnut" />
            <ItemBaseComponent name="Число дефектов/период" :data="data[2]" typeChart="bar" />
        </div>

    </div>
</template>

<script setup>
import ChartComponent from "./charts/ChartComponent.vue";
import ItemBaseComponent from "./charts/ItemBaseComponent.vue";
const data = [
    {
        stroke1: 'Проверки -  15',
        stroke2: 'Oбщее кол-во не дефектых - 12',
        stroke3: 'Oбщее кол-во дефектных - 3',
        stroke4: 'Oбщее процент дефектов - 12%',
    },
    {
        stroke1: 'Проваренная деталь - встретился 2 раза'
    },
    {
        stroke1: 'За сегодня: $имя дефекта - $число'
    }
]

</script>