<template>
    <div :style="resultData.length < 1 ? 'height: 15%' : 'height: 35%'"
        class="w-full flex justify-start px-4 items-center">
        <span v-if="resultData.length < 1" class="font-Manrope_Bold text-[16px]">
            Здравствуйте, {{ first_name }} 😉
        </span>
        <div v-else class="flex justify-center items-center w-full">
            <img :src="resultData.photoUrl" alt="" class="rounded-xl w-[250px]">
        </div>
    </div>
    <div :style="resultData.length < 1 ? 'height: 85%' : 'height: 65%'"
        class="text-3xl transition-all duration-1000  w-full bg-white rounded-t-lg drop-shadow-lg flex justify-between items-center py-6 px-4 flex-col">
        <div class="flex justify-top items-center flex-col gap-2 overflow-scroll">
            <span class="font-Manrope_Bold text-[24px]">
                {{ resultData.category ? resultData.category : 'Ваши проверки' }}
            </span>
            <span v-if="resultData.detected" class="font-Manrope_Medium text-[16px] flex flex-col">
                <b>Были обнаружены:</b>
                <span v-for="(item, index) in resultData.detected" :key="index">{{ item }}</span>
            </span>
            <span v-if="resultData.reasons" class="font-Manrope_Medium text-[16px] flex flex-col">
                <b>Возможные причины:</b>
                <span v-for="(item, index) in resultData.reasons" :key="index">{{ item }}</span>
            </span>
            <span v-if="resultData.removal" class="font-Manrope_Medium text-[16px] flex flex-col">
                <b>Способы устранения:</b>
                <span v-for="(item, index) in resultData.removal" :key="index">{{ item }}</span>
            </span>
            <span class="font-Manrope_Medium text-[16px]" id="desription">
                {{ resultData.detected ? '' :
                    'Вы еще не осуществляли проверок :(' }}
            </span>
        </div>
        <button
            class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_Bold text-[16px] flex justify-center items-center gap-2"
            @click="loadImage()">{{ resultData.length < 1 ? 'Проверить' : 'Проверить заново' }} <img
                src="/images/scan.svg" class="w-[24px]" alt=""> </button>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from "vue";
defineProps({
    first_name: String
})
const resultData = ref([])
const input = document.createElement('input');
const loadImage = () => {
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.onchange = () => {
        const img = new FormData();
        img.append('photo', input.files[0]);
        axios.post(`http://localhost:8081/api/v1/photo/load`,
            img,
            {
                headers: { "Content-Type": "multipart/form-data" },
            },).then((response) => {
                resultData.value = response.data
                console.log(resultData.value)
            })
    }
}

watch(resultData, () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.result) {
            const img = document.createElement('img');
            const imageContainer = document.getElementById('imageContainer');
            if (imageContainer) {
                img.src = reader.result;
                imageContainer.innerHTML = '';
                imageContainer.appendChild(img);
            }
        }
    }
    reader.readAsDataURL(file);
})


</script>
