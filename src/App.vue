<script setup>
import { ref, computed } from "vue";
import AuthComponent from "./components/AuthComponent.vue";
import RegComponent from "./components/RegComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import RatingComponent from "./components/RatingComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
const routes = {
  '/': HomeComponent,
  '/auth': AuthComponent,
  '/reg': RegComponent,
  '/main': MainComponent,
  '/rating': RatingComponent
}
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || MainComponent
})
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
let tg = window.Telegram.WebApp

const info = ref(tg.initDataUnsafe)
</script>

<template>
  <!-- <div class="w-screen h-screen"><component :is="currentView" /></div> -->
   <div>{{ info }}</div>
</template>
