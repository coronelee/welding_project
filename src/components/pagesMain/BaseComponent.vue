<template>

    <div class="w-full h-[15%] flex justify-start px-4 items-center"><span
            class="font-Manrope_Bold text-[16px]">Здравствуйте, {{ first_name }} 😉</span> </div>
    <div class="text-3xl w-full h-[85%] bg-white rounded-t-lg flex justify-between items-center  py-6 px-4  flex-col">
        <div class="flex justify-center items-center flex-col gap-2">
            <span class="font-Manrope_Bold text-[24px]">База знаний</span>
            <div @click="showFull(i.id, i.idSmall)" v-for="i in data" :key="i" class="flex flex-col items-center justify-between leading-6 border rounded-lg border-[#6BACE4]  font-Manrope_Medium text-[16px]">
                <span :style="s" :id="i.idSmall" class="flex justify-between w-full rounded-lg py-6 px-4 "><span>{{ i.name }}</span> <img src="/images/arrow-down.svg" alt=""></span>
                <span :id="i.id" class="hidden p-4 animate-[showBase_0.5s_ease-in-out] float-top" >{{ i.full }}</span>
            </div>
        </div>
         
    </div>


</template>

<script setup>
import { ref } from 'vue';
defineProps({
    first_name: String
})
const showFull = (id, idSmall) =>{
    document.getElementById(id).classList.toggle('hidden')
    document.getElementById(idSmall).classList.toggle('bg-[#6BACE4]')
    console.log(id)
}
const data = [{
    id:1,
    idSmall: '1small',
    name: 'В чём суть электродуговой сварки штучными электродами?',
    full: 'При электродуговой сварке при помощи электрической дуги происходит расплавление металла стержня электрода и металла детали, при этом производится защита места плавки от воздействия окружающей атмосферы.'
},
{
    id:2,
    idSmall: '2small',
    name: 'В чём суть электродуговой сварки штучными электродами?',
    full:  'При электродуговой сварке при помощи электрической дуги происходит расплавление металла стержня электрода и металла детали, при этом производится защита места плавки от воздействия окружающей атмосферы.'

}]


</script>