<template>
    <div id="home" class="bg-[url('/images/splash.svg')] transition-all duration-1000 bg-cover bg-no-repeat w-full h-full flex justify-center items-center flex-col gap-8">
      <span class="text-5xl font-mono text-white">Привет {{ first_name }}!</span>
      <button class="text-3xl bg-white px-6 py-3 rounded-lg" @click="swapPage">Start</button>
    </div>
</template>


<script setup>
const props = defineProps({
  first_name: String
})

const swapPage = () => {
  document.getElementById('home').style.transform = 'translateX(-100%)';
  setTimeout(() => {
  window.location.hash = '#/main';
  }, 1000);
}
</script>
