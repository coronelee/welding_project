<template>
    <div :style="resultData.length < 1 ? 'height: 15%' : 'height: 35%'"
        class="w-full flex justify-start px-4 items-center">
        <span v-if="resultData.length < 1" class="font-Manrope_Bold text-[16px]">
            Здравствуйте, {{ first_name }} 😉
        </span>
        <div v-else class="flex justify-center items-center w-full px-4">
            <img alt="" :src="resultData" id="image" class="rounded-xl w-full h-[250px]" @click="openImage()">
        </div>
    </div>
    <div :style="resultData.length < 1 ? 'height: 85%' : 'height: 55%'"
        class="text-3xl transition-all duration-1000  w-full bg-white rounded-t-lg drop-shadow-lg flex justify-between items-center py-6 px-4 flex-col">
        <div class="flex justify-top items-center flex-col gap-2 overflow-scroll">
            <span class="font-Manrope_Bold text-[24px]">
                {{ resultData.length > 0 ? "" : 'Ваши проверки' }} </span>
            <span v-if="resultData.length > 0" class="font-Manrope_Medium text-[16px] flex flex-col">
                <span class="text-[24px] font-Manrope_Bold">Были обнаружены:</span>
                <span v-if="adj > 0">Прилегающие дефекты: {{ adj }} раз(а)</span>
                <span v-if="int > 0">Дефекты целостности: {{ int }} раз(а)</span>
                <span v-if="geo > 0">Дефекты геометрии: {{ geo }} раз(а)</span>
                <span v-if="org > 0">Дефекты постобработки: {{ org }} раз(а)</span>
                <span v-if="num > 0">Дефекты невыполнения: {{ num }} раз(а)</span>
            </span>

            <span v-if="resultData.length <= 0" class="font-Manrope_Medium text-[16px]" id="desription">
                {{ resultData.detected ? '' :
                    'Вы еще не осуществляли проверок :(' }}
            </span>
            <div v-else class="flex justify-between w-full items-start gap-4 flex-col">
                <div class="w-full">
                    <span
                        class="font-Manrope_Medium border-b w-[340px] text-[14px] flex justify-between items-center text-[#5F5F5F]"
                        v-for="(item, index) in dataHistory" :key="index">
                        <b class="flex flex-wrap">{{ item.photoFileName }}</b><span class="z-10">{{
                            item.uploadDateTime
                            }}</span>
                    </span>
                </div>
            </div>
        </div>
        <button
            class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_Bold text-[16px] flex justify-center items-center gap-2"
            @click="loadImage()">{{ resultData.length < 1 ? 'Проверить' : 'Проверить заново' }} <img
                src="/images/scan.svg" class="w-[24px]" alt=""> </button>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch, onMounted } from "vue";
const props = defineProps({
    first_name: String,
    editAdj: Function,
    editInt: Function,
    editGeo: Function,
    editPro: Function,
    editNon: Function
})



onMounted(() => {
    axios.get('http://localhost:8081/api/v1/photo/history').then((response) => {
        dataHistory.value = response.data
    })
})
const openImage = () => {
    document.getElementById('image').classList.toggle('absolute');
}
const adj = ref()
const int = ref()
const geo = ref()
const pro = ref()
const non = ref()

const dataHistory = ref([])
const resultData = ref([])
const input = document.createElement('input');
const loadImage = () => {
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.onchange = () => {
        const img = new FormData();
        img.append('file', input.files[0]);
        axios.post(`http://localhost:8000/upload`,
            img,
            {
                headers: { "Content-Type": "multipart/form-data" },
            },).then((response) => {
                resultData.value = response.data.image_url
                console.log(response.data.image_url);

                let stroke = response.data.image_url

                stroke.split('/').pop().split('_')
                adj.value = stroke.split('/').pop().split('_')[1].split('-')[1]
                int.value = stroke.split('/').pop().split('_')[2].split('-')[1]
                geo.value = stroke.split('/').pop().split('_')[3].split('-')[1]
                pro.value = stroke.split('/').pop().split('_')[4].split('-')[1]
                non.value = stroke.split('/').pop().split('_')[5].split('.')[0].split('-')[1]

                props.editAdj(adj.value)
                props.editInt(int.value)
                props.editGeo(geo.value)
                props.editOrg(pro.value)
                props.editNon(non.value)
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
