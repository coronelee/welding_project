<template><input type="file" id="file" class="hidden" @change="onFileChange">
<input type="file" id="camera" accept="image/*" capture="camera" class="hidden" @change="onFileChange">
    <div v-if="!showNavFile" id="nav"
        class="transition-all duration-300 w-full h-[50px] flex gap-2 [&>button]:w-full [&>button]:h-full   [&>button]:bg-contain [&>button]:bg-center [&>button]:bg-no-repeat rounded-lg">
        <button  @click="changePage('check')"> <img src="/images/check.svg" class="w-[48px] h-[40px]" :style="{color: page == 'check' ? '#2C50CC' : '#999999'}" alt=""></button>
        <button  @click="changePage('base')"><img src="/images/base.svg" class="w-[48px] h-[40px]" :style="{color: page == 'base' ? '#2C50CC' : '#999999'}"  alt=""></button>
        <button  @click="changePage('profile')"><img src="/images/profile.svg" class="w-[48px] h-[40px]" :style="{color: page == '#2C50CC' ? '#999999' : 'invert(0%)'}" alt=""></button>
    </div>
    
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    downloadImage: Function,
    onFileChange: Function,
    closeNavFile: Boolean,
    page: String,
    changePage: Function
})

const showProfile = () => {
    window.location.hash = '#/profile';
};

const showNavFile = ref(false);

watch(() => props.closeNavFile, () => {
    document.getElementById('navFile').style.transform = 'translateY(150%)';
    setTimeout(() => {
        showNavFile.value = !showNavFile.value;
    }, 300)
})



const showNav = () => {
    document.getElementById('nav').style.transform = 'translateY(150%)';
    setTimeout(() => {
        showNavFile.value = !showNavFile.value;
        window.location.hash = '#/main';

    }, 300)
}
</script>