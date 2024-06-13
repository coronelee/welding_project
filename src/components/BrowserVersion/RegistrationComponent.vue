<template>
    <div id="app" class="w-screen h-screen flex justify-center items-center">
        <div @click="goToRegistration()" class="w-[240px] h-[240px] rounded-full bg-[#2C50CC] flex justify-center items-center flex-col gap-4 text-white text-4xl font-bold animate-pulse">
            <span>Welding</span>
            <span>seams</span>
        </div>
    </div>
</template>

<script setup>
 const goToRegistration = () => {
    window.location.hash = '#/registrationNewAccount';
 }
</script>


<style scoped>
#app {
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,3px 0px;
    background-image: radial-gradient(49% 81% at 94% 7%, #4c0029 0%, #073AFF00 100%),radial-gradient(113% 91% at 13% 54%, #49779FFF 1%, #FF000000 99%),radial-gradient(142% 91% at 1% 58%, #000000FF 99%, #FF000000 99%);
}
</style>