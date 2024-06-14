<template>

    <div class="text-3xl w-full h-full bg-white rounded-t-lg flex justify-between items-center py-6 px-4 flex-col">
        <div class="flex justify-center w-full items-center flex-col gap-4">
            <span class="font-Manrope_Bold text-[24px]">{{ first_name }}</span>
            <div class="w-[96px] h-[96px] bg-[#B5FF9C] rounded-full text-[#4D9F31] flex justify-center items-center">N
            </div>
            <span class="font-Manrope_Bold text-[20px]">{{ role }}</span>
            <div class="flex flex-col w-full justify-start [&>*]:font-Manrope_Medium [&>*]:text-[20px]">
                <span class="text-[#5F5F5F]">Telegram: <span class="text-black">@{{ tg }}</span></span>
                <span class="text-[#5F5F5F]">Телефон: <span class="text-black">+{{ phone }}</span></span>
            </div>
            <div class="w-full font-Manrope_Bold text-[16px] [&>div]:h-[50px] [&>div]:border-b border-[#EDEDED]">

                <div class="flex justify-between items-center">
                    <span>Выполненные проверки</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <div class="flex justify-between items-center">
                    <span>Мой аккаунт</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <div class="flex justify-between items-center">
                    <span>Настройки</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <div class="flex justify-between items-center">
                    <span>Техподдержка</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
                <div class="flex justify-between items-center">
                    <span>Информация</span>
                    <img src="/images/arrow-right.svg" alt="">
                </div>
            </div>

        </div>
    </div>


</template>

<script setup>
defineProps({
    first_name: String
})

// let first_name = "Anton"
let role = "Welder"
let tg = "Welder"
let phone = "12345678910"
</script>