<template>
     <div class="w-full h-full flex justify-between items-top flex-col p-2 gap-2 animate-[showMain_0.5s_ease_1]">
        <div  class="text-3xl w-full h-full py-12 flex justify-start items-center flex-col gap-4 text-white" >
           <div class="flex flex-col justify-start items-center"><span>{{ first_name }}Anton</span> 
           <span class="text-2xl text-gray-300">@{{ username }}yourantosha</span> </div>
           <span class="text-2xl">У вас {{ points }} баллов</span>
        </div>
        <NavBar :closeNavFile="closeNavFile"/>
     </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const closeNavFile = ref(false);
 
const points = ref(0);

import { TelegramWebAppContainer } from '@telegram-web-app/core';

const telegram = new TelegramWebAppContainer();

telegram.WebApp.ready();
const first_name = telegram.WebApp.initDataUnsafe?.user?.first_name;
const username = telegram.WebApp.initDataUnsafe?.user?.username;

</script>