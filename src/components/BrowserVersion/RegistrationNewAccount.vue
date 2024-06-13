<template>
    <div id="app" class="w-screen h-screen flex justify-between py-44 items-center flex-col text-white ">
        <div class="flex justify-center items-center flex-col gap-4">
            <div class="text-[24px] font-bold">Вход или регистрация</div>
            <div class="text-[16px]">Мы отправим вам код, он придёт в СМС</div>
            <div class="flex gap-2 [&>input]:h-[50px] [&>input]:rounded-lg [&>input]:bg-transparent   [&>input]:text-[20px] [&>input]:border [&>input]:border-[#2C50CC]">
                <input type="text" class="w-[65px] text-center" value="+7" disabled> 
                <input ref="phoneInput" class="w-[230px] px-2" placeholder="(123) 456-78-90"/>
            </div>
            <div class="text-[14px] text-center">Продолжая, вы соглашаетесь c <span class="underline">политикой конфиденциальности</span></div>
            <button class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white" @click="sendCode()">Получить код</button>
        </div>
         
        <div class="flex justify-center items-center gap-4 flex-col">
            <span>Или войдите иначе</span>
            <div class="flex justify-center items-center gap-4 [&>div]:h-[60px] [&>div]:w-[60px] [&>div]:bg-[#EDEDED] [&>div]:rounded-lg
                [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>img]:w-[32px]"> 
                <div><img src="/iconReg/email.svg" alt=""></div>
                <div><img src="/iconReg/vk.svg" alt=""></div>
                <div><img src="/iconReg/telegram.svg" alt=""></div>
                
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import IMask from 'imask';
const phoneInput = ref(null);
onMounted(() => {
    const mask = IMask(phoneInput.value, {
    mask: '(000) 000-00-00'
  });
});

const sendCode = () => {
    console.log(phoneInput.value.value);
    let number = phoneInput.value.value
    number.replace(/\D/g, '')

//     var SMSru = require('sms_ru');
//     var sms = new SMSru('3C48BA28-4C36-00EB-7657-D6CDB11EE0A0');
//     sms.sms_send({
//     to: '7' + number,
//     text: 'Текст SMS'
//     }, function(e){
//         console.log(e.description);
//     });
 }
</script>