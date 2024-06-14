<template>
    <div class="w-screen h-screen flex justify-between py-44 items-center flex-col ">
        <div class="flex justify-center items-center flex-col gap-6 ">
            <div class="text-[24px] font-bold text-black font-Manrope_Bold">Вход или регистрация</div>
            <div class="text-[16px] text-[#5F5F5F] font-Manrope_Medium">Мы отправим вам код, он придёт в СМС</div>
            <div class="flex gap-2 [&>input]:h-[50px] [&>input]:rounded-lg [&>input]:bg-transparent &>input]:text-[20px] [&>input]:border [&>input]:border-[#2C50CC] [&>input]:font-Manrope_Bold">
                <input type="text" class="w-[65px] text-center" value="+7" disabled> 
                <input ref="phoneInput" class="w-[230px] px-2" placeholder="(123) 456-78-90"/>
            </div>
            <div class="text-[14px] text-center text-[#5F5F5F] font-Manrope_Medium">Продолжая, вы соглашаетесь c <span class="underline">политикой конфиденциальности</span></div>
            <button class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_ExtraBold" @click="sendCode()">Получить код</button>
        </div>
         
        <div class="flex justify-center items-center gap-4 flex-col">
            <span class="font-Manrope_Medium">Или войдите иначе</span>
            <div class="flex justify-center items-center gap-4 [&>div]:h-[60px] [&>div]:w-[60px] [&>div]:bg-[#EDEDED] [&>div]:rounded-lg
                [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>img]:w-[32px]"> 
                <!-- <div><img src="/iconReg/email.svg" alt=""></div>
                <div><img src="/iconReg/vk.svg" alt=""></div> -->
                <div><img src="/iconReg/telegram.svg" alt=""></div>
            </div>
        </div>
        <EnterCodeComponent v-if="enterCode" :showEnterCode="showEnterCode" :number="number"/>
    </div>
</template>
<script setup>
import EnterCodeComponent from './EnterCodeComponent.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import IMask from 'imask';
const phoneInput = ref(null);
const enterCode = ref(false)
onMounted(() => {
    const mask = IMask(phoneInput.value, {
    mask: '(000) 000-00-00'
  });
});
let number;
const sendCode = () => {
    console.log(phoneInput.value.value);
    number = phoneInput.value.value
    number.replace(/\D/g, '')

    if(number.length < 10) {
        alert('Номер должен содержать 10 цифр')
        return
    }
    else{
        showEnterCode()
    }
 }

 const showEnterCode = () => {
    enterCode.value = !enterCode.value
 }
</script>