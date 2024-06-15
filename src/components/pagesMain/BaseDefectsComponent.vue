<template>
    <div class="flex justify-end items-center flex-col gap-2 w-full h-full">
        <div class="w-full px-4 py-4 [&>img]:flex [&>img]:w-full justify-center items-center transition-all duration-1000"
            id="container">
            <!-- <div id="top"
                class="w-full  flex justify-center items-center flex-wrap gap-2 [&>div]:rounded-full [&>div]:border [&>div]:border-[#C2C2C2]  [&>div]:px-2 [&>div]:py-1">
                <div>Горячие трещины</div>
                <div>Подрезы</div>
                <div>Возникновение пор</div>
            </div> -->
            <!-- <img id="left" src="/images/arrow-right.svg" class="h-[24px] transform rotate-180" @click="previousItem"> -->
            <img id="photo" :src="'/defects/' + itemEdit + '/' + imageEdit + '.png'"
                class="w-[250px] h-[200px] rounded-xl" alt="">
            <!-- <img id="right" src="/images/arrow-right.svg" class="h-[24px]" @click="nextItem"> -->
            <button @click="nextImage" id="bot"
                class="w-[300px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_Bold text-[16px] flex justify-center items-center gap-2 ">Следующий
                пример</button>
        </div>
        <div id="text" :style="!openTextValue ? 'height: 40%;' : 'height: 80%'"
            class="transition-all duration-1000 text-3xl w-full bg-white rounded-t-xl flex justify-between items-center px-6 drop-shadow-2xl  flex-col pt-4">
            <div class="flex justify-start items-center flex-col gap-2 overflow-scroll">
                <span class="font-Manrope_Bold text-[24px] flex  justify-center items-center gap-2"><span>{{
                    data[itemEdit].name
                        }}</span>
                    <div class="font-Manrope_Bold text-[12px] text-[#2C50CC] flex justify-center items-center"
                        id="target" @click="openText()">
                        {{ openTextValue ? 'скрыть' : 'подробнее' }}
                    </div>
                </span>
                <span class="font-Manrope_Medium text-[16px] ">{{ data[itemEdit].discription }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
const imageEdit = ref(0);

const nextImage = () => {
    imageEdit.value = (imageEdit.value + 1) % data[0].img.length;
}
const previousImage = () => {
    imageEdit.value = (imageEdit.value - 1 + data[0].img.length) % data[0].img.length;
}

const itemEdit = ref(0);

const nextItem = () => {
    itemEdit.value = (itemEdit.value + 1) % data.length;
}
const previousItem = () => {
    itemEdit.value = (itemEdit.value - 1 + data.length) % data.length;
}




const data = [
    {
        id: 1,
        name: 'Горячие трещины',
        discription: 'Горячие трещины. Они появляются в процессе сварки или в процессе кристаллизации сварного соединения. Температура в этот момент может подняться выше 10 000 °C. Холодные трещины. Эти трещины появляются после завершения сварки и снижения температуры металла. Они могут образоваться спустя несколько часов или даже дней после проведения сварочных работ. Чаще всего это происходит при сварке стали. Причиной этого дефекта обычно являются деформация структуры стали. Кратеры. Обычно они образуются ближе к концу сварного шва. Когда сварочная ванна охлаждается и затвердевает, ей необходимо иметь достаточный объем, чтобы преодолеть усадку металла шва. В противном случае образуется кратерная трещина.',
        img: ['/defects/1/0.png', '/defects/1/1.png', '/defects/1/2.png']
    },
    {
        id: 2,
        name: 'Возникновение пор',
        discription: 'Причиной возникновения пор может стать сварка сырыми (непросушенными) электродами или же сварка по грязному металлу (наличие ржавчины, масла, краски). Захваченные газы создают заполненный пузырьками сварной шов, который становится слабым и может со временем разрушиться.',
        img: ['/defects/2/1.png', '/defects/2/2.jpg', '/defects/2/3.jpg']
    },
    {
        id: 3,
        name: 'Подрезы',
        discription: 'Этот дефект сварки представляет собой образование бороздок на протяжении всего сварного шва, уменьшающее толщину поперечного сечения основного металла. В результате получается ослабленный сварной шов.',
        img: ['/defects/1.png', '/defects/2.jpg', '/defects/3.jpg']
    }
]

const openTextValue = ref(false)

const openText = () => {
    openTextValue.value = !openTextValue.value
    const el = document.getElementById('container');
    el.classList.toggle('blur-sm');
    el.classList.toggle('brightness-50');
}


const knowledgeBase = ref([])

onMounted(() => {
    const targetEl = document.getElementById('container');
    let startX = 0;
    let startWidth = 0;
    let newCords = 0;
    targetEl.addEventListener('touchstart', touchStart);
    targetEl.addEventListener('touchmove', touchMove);
    targetEl.addEventListener('touchend', touchEnd);

    function touchStart(e) {
        startX = e.touches[0].clientX;
        startWidth = targetEl.offsetWidth;
    }

    function touchMove(e) {
        const deltaX = e.touches[0].clientX - startX;
        newCords = startWidth + deltaX;
    }


    function touchEnd(e) {
        if (targetEl && newCords && startWidth) {
            const delta = newCords - startWidth;
            if (delta > 100) {
                previousItem();
            }
            else if (delta < -100) {
                nextItem();
            }
        }
        else {
            console.error('touchEnd: Invalid state');
        }
    }
    let arr = []
    axios.get('http://localhost:8081/api/v1/knowledgebase').then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            arr[i] = response.data[i]
        }
    })
    knowledgeBase.value = arr
    console.log(knowledgeBase.value)
});

</script>

<style scoped>
#container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 24px 1fr 24px;
    grid-template-rows: 100px 1fr 24px;
    gap: 25px 5px;
    grid-template-areas:
        ". top ."
        "left photo right"
        ". bot .";
}

#left {
    grid-area: left;
}

#top {
    grid-area: top;
}

#bot {
    grid-area: bot;
}

#right {
    grid-area: right;
}

#photo {
    grid-area: photo;
}
</style>