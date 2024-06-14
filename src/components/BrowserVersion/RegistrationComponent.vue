<template>
    <div  class="w-screen h-screen flex justify-center items-center flex-col">
        <div @click="goToRegistration()" class="w-[240px] h-[240px] rounded-full bg-[#2373ae] flex overflow-hidden justify-center items-center flex-col text-white gap-2 text-4xl font-bold">
            <span class="flex"><span>IceTea</span> <img src="/images/IceTea.svg" class="w-10" alt=""></span>
            <img src="/images/rosatom________.png" alt="" class="w-[250px]">
        </div>
       
    </div>
</template>

<script setup>
 const goToRegistration = () => {
    window.location.hash = '#/registrationNewAccount';
 }
</script>

 