<template>
  <div id="home" @click="getAnim()"
    class="transition-all duration-1000  w-screen h-screen absolute flex justify-end items-center flex-col p-24">

    <img src="/images/logo.svg" class="w-[300px] animate-pulse" alt="logo ">
  </div>
</template>


<script setup>
const getAnim = () => {
  let el = document.getElementById('home');
  el.classList.add('animate-[closeWelcome_0.5s_ease_1]');
  if (!props.username) {
    document.location.href = '#/Auth';
  }
}
const props = defineProps({
  username: String
})
</script>

<style scoped>
#home {
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(90deg, #A100FFFF 0%, #71C4FFFF 100%);
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  box-shadow: 0 0 10000px 300px #A100FFFF;
  z-index: 100;
}
</style>