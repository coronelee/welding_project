<template>

    <div class="text-3xl w-full h-full bg-white rounded-t-lg flex justify-between items-center py-6 px-4 flex-col">
        <div v-if="page == 'main'" class="flex justify-center w-full items-center flex-col gap-4">
            <span class="font-Manrope_Bold text-[24px]">{{ first_name }}</span>
            <div class="w-[96px] h-[96px] bg-[#B5FF9C] rounded-full text-[#4D9F31] flex justify-center items-center">N
            </div>
            <span class="font-Manrope_Bold text-[20px]">{{ role }}</span>
            <div class="flex flex-col w-full justify-start [&>*]:font-Manrope_Medium [&>*]:text-[20px]">
                <span class="text-[#5F5F5F]">Telegram: <span class="text-black">@{{ username }}</span></span>
                <span class="text-[#5F5F5F]">Телефон: <span class="text-black">+{{ phone }}</span></span>
            </div>
            <div class=" w-full font-Manrope_Bold text-[16px] [&>div]:h-[50px] [&>div]:border-b border-[#EDEDED]">
                <div class="flex justify-between items-center" @click="changePage('checks')">
                    <span>Выполненные проверки</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <!-- <div class="flex justify-between items-center">
                    <span>Мой аккаунт</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <div class="flex justify-between items-center">
                    <span>Настройки</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div> -->
                <div class="flex justify-between items-center">
                    <span>Техподдержка</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <!-- <div class="flex justify-between items-center">
                    <span>Информация</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div> -->
            </div>
        </div>
        <component v-if="page == 'checks'" :is="ChecksComponent" :changePage="changePage" :first_name="first_name" />
    </div>
</template>


<script setup>
import { ref } from "vue";
import ChecksComponent from './ProfilePages/ChekcsComponent.vue'
defineProps({
    first_name: String,
    username: String,
    changePage: Function
})
const page = ref('main')

const changePage = (pageName) => {
    page.value = pageName
}

// let tg = "Welder"
// let first_name = "Anton"
let role = "Welder"
let phone = "12345678910"
</script>