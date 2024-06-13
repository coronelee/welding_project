<script setup>
import { ref, computed } from "vue";
import MainComponent from "./components/MainComponent.vue";
import RatingComponent from "./components/RatingComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
const routes = {
  '/home': HomeComponent,
  '/rating': RatingComponent,
  '/main': MainComponent,
  '/': HomeComponent
}
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || HomeComponent
})
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

import { TelegramWebAppContainer } from '@telegram-web-app/core';

const telegram = new TelegramWebAppContainer();

telegram.WebApp.ready();
const first_name = telegram.WebApp.initDataUnsafe?.user?.first_name;
</script>

<template>
  <div  id="app"  class="w-screen h-screen"><component :is="currentView" :first_name="first_name"/></div>
</template>
<style scoped>
#app {
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,3px 0px;
    background-image: radial-gradient(49% 81% at 94% 7%, #4c0029 0%, #073AFF00 100%),radial-gradient(113% 91% at 13% 54%, #49779FFF 1%, #FF000000 99%),radial-gradient(142% 91% at 1% 58%, #000000FF 99%, #FF000000 99%);
}
</style>