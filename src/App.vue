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
  <div class="w-screen h-screen pb-16"><component :is="currentView" :first_name="first_name"/></div>
</template>
