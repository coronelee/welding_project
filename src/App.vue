<script setup>
import { ref, computed } from "vue";
import MainComponent from "./components/MainComponent.vue";
import RatingComponent from "./components/RatingComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import RegistrationComponent from "./components/BrowserVersion/RegistrationComponent.vue";
import RegistrationNewAccount from "./components/BrowserVersion/RegistrationNewAccount.vue";

const routes = { 
  '/registrationNewAccount': RegistrationNewAccount,
  '/registration': RegistrationComponent,
  '/profile': ProfileComponent,
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
telegram.WebApp.expand();


if(!first_name) {
  window.location.hash = '#/registration';
}


</script>
<template>
  <div  class="w-screen h-screen overflow-hidden font-mono"><component :is="currentView" :first_name="first_name"/></div>
</template>
