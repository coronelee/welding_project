<script setup>
import { ref, computed } from "vue";
import MainComponent from "./components/MainComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import RegistrationNewAccount from "./components/BrowserVersion/RegistrationNewAccount.vue";

const routes = {
  '/registrationNewAccount': RegistrationNewAccount,
  '/home': HomeComponent,
  '/main': MainComponent,
}
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || MainComponent
})
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

import { TelegramWebAppContainer } from '@telegram-web-app/core';

const telegram = new TelegramWebAppContainer();

telegram.WebApp.ready();
const first_name = telegram.WebApp.initDataUnsafe?.user?.first_name;
const username = telegram.WebApp.initDataUnsafe?.user?.username;

telegram.WebApp.expand();


if (!first_name) {
  window.location.hash = '#/registration';
}


</script>
<template>
  <component :is="HomeComponent" />
  <div class="w-screen h-screen overflow-hidden font-mono bg-[#f3f8fa]">
    <component :is="currentView" :username="username" :first_name="first_name" />
  </div>
</template>
