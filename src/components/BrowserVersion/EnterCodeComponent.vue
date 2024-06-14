<template>
    <div class="w-screen h-screen bg-gray-300 flex justify-end items-center flex-col absolute top-0">
        <div
            class="animate-[showEnterCodeForm_0.8s_ease-in-out] overflow-hidden w-full bg-white h-[85%] relative flex justify-center items-center flex-col  gap-6 rounded-t-lg">
            <img src="/images/back.svg" class="w-[36px] absolute top-6 left-6" alt="" @click="showEnterCode()">
            <div class="flex justify-center items-center flex-col gap-2">
                <div class="text-[24px] font-bold text-black font-Manrope_Bold">Теперь введите код</div>
                <div class="text-[16px] text-[#5F5F5F] font-Manrope_Medium">Код отправили на номер +7{{ number }}</div>
                <div
                    class="flex gap-2 mt-6 [&>input]:h-[32px] [&>input]:w-[32px] [&>input]:text-center [&>input]:border-b [&>input]:border-[#2C50CC] [&>input]:outline-none [&>input]:bg-transparent &>input]:text-[32px]  [&>input]:font-Manrope_Bold">
                    <input type="text" id="codeSymbol1" maxlength="1" @input="code(2)" placeholder="·">
                    <input type="text" id="codeSymbol2" maxlength="1" @input="code(3)" placeholder="·">
                    <input type="text" id="codeSymbol3" maxlength="1" @input="code(4)" placeholder="·">
                    <input type="text" id="codeSymbol4" maxlength="1" @input="code('enter')" placeholder="·">
                </div>

                <button class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_ExtraBold mt-[100px]">
                    Получить новый код
                </button>
            </div>
        </div>
    </div>
</template>
 
<script setup>
import { watch, onMounted } from 'vue';
const props = defineProps({
    showEnterCode: Function,
    number: String
})
const goToRegistration = () => {
    window.location.hash = '#/registrationNewAccount';
}
onMounted(() => {
    document.getElementById('codeSymbol1').focus()

})
const code = (input) => {
    if (input == 'enter') {
        console.log(document.getElementById('codeSymbol1').value + document.getElementById('codeSymbol2').value + document.getElementById('codeSymbol3').value + document.getElementById('codeSymbol4').value)
        document.location.href = '#/main'
    } else {
        document.getElementById('codeSymbol' + input).focus()
    }
}
</script>