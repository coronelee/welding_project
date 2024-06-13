<template>
     <div class="w-full h-full flex justify-between items-top flex-col p-2 gap-2 animate-[showMain_0.5s_ease_1]">
        <div  class="text-3xl w-full h-full" >
            {{ first_name }}
            <img :src="photo" alt="" class="w-[200px] h-[200px]">
            {{ photo }}
        </div>
        <NavBar :closeNavFile="closeNavFile"/>
     </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const closeNavFile = ref(false);
 

import { TelegramWebAppContainer } from '@telegram-web-app/core';

const telegram = new TelegramWebAppContainer();

telegram.WebApp.ready();
const first_name = telegram.WebApp.initDataUnsafe?.user?.first_name;
const photo = telegram.WebAppUser.photo_url;


</script>