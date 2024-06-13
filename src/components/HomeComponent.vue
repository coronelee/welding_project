<template>
    <div id="home" class="transition-all duration-1000 bg-cover bg-no-repeat w-full h-full flex justify-center items-center flex-col gap-8">
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


<style scoped>
#home {
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,3px 0px;
    background-image: radial-gradient(49% 81% at 94% 7%, #4c0029 0%, #073AFF00 100%),radial-gradient(113% 91% at 13% 54%, #49779FFF 1%, #FF000000 99%),radial-gradient(142% 91% at 1% 58%, #000000FF 99%, #FF000000 99%);
}
</style>