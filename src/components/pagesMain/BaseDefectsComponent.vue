<template>
    <div class="flex justify-end items-center flex-col gap-2 w-full">
        <div class="w-full flex justify-center px-4 py-4 items-center">
            <img :src="data[0].img" class="w-[300px]" alt="">
        </div>
        <div id="text"
            class="text-3xl w-full h-[40%] bg-white rounded-t-xl flex justify-between items-center px-6 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  flex-col pt-4">
            <div class="w-[40px] h-[10px] rounded-full bg-[#999] absolute top-[8px] left-1/2 -translate-x-1/2"
                id="target"></div>
            <div class="flex justify-start items-center flex-col gap-2 overflow-scroll">
                <span class="font-Manrope_Bold text-[24px]">{{ data[0].name }}</span>
                <span class="font-Manrope_Medium text-[16px] ">{{ data[0].discription }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const data = [
    {
        id: 1,
        name: 'Горячие трещины',
        discription: 'Горячие трещины. Они появляются в процессе сварки или в процессе кристаллизации сварного соединения. Температура в этот момент может подняться выше 10 000 °C. Холодные трещины. Эти трещины появляются после завершения сварки и снижения температуры металла. Они могут образоваться спустя несколько часов или даже дней после проведения сварочных работ. Чаще всего это происходит при сварке стали. Причиной этого дефекта обычно являются деформация структуры стали. Кратеры. Обычно они образуются ближе к концу сварного шва. Когда сварочная ванна охлаждается и затвердевает, ей необходимо иметь достаточный объем, чтобы преодолеть усадку металла шва. В противном случае образуется кратерная трещина.',
        img: '/defects/1.png'
    },
    {
        id: 2,
        name: 'Возникновение пор',
        discription: 'Причиной возникновения пор может стать сварка сырыми (непросушенными) электродами или же сварка по грязному металлу (наличие ржавчины, масла, краски). Захваченные газы создают заполненный пузырьками сварной шов, который становится слабым и может со временем разрушиться.',
        img: '/defects/2.png'
    },
    {
        id: 3,
        name: 'Подрезы',
        discription: 'Этот дефект сварки представляет собой образование бороздок на протяжении всего сварного шва, уменьшающее толщину поперечного сечения основного металла. В результате получается ослабленный сварной шов.',
        img: '/defects/2.png'
    }
]



onMounted(() => {
    const targetEl = document.getElementById('target');
    const textEl = document.getElementById('text');
    let startY = 0;
    let startHeight = 0;

    targetEl.addEventListener('touchstart', touchStart);
    targetEl.addEventListener('touchmove', touchMove);
    targetEl.addEventListener('touchend', touchEnd);

    function touchStart(e) {
        startY = e.touches[0].clientY;
        startHeight = textEl.offsetHeight; // Используем offsetHeight для получения текущей высоты элемента
    }

    function touchMove(e) {
        const deltaY = e.touches[0].clientY - startY;
        const newHeight = startHeight - deltaY; // изменение знака для движения вверх
        textEl.style.height = Math.max(newHeight, 0) + 'px';
        textEl.style.transition = 'height 0.3s ease-out';
    }

    function touchEnd(e) {
        requestAnimationFrame(() => {
            const computedHeight = getComputedStyle(textEl).height;
            textEl.style.height = computedHeight;
        });
    }
});

</script>