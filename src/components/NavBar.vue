<template><input type="file" id="file" class="hidden" @change="onFileChange">
<input type="file" id="camera" accept="image/*" capture="camera" class="hidden" @change="onFileChange">
    <div v-if="!showNavFile" id="nav"
        class="transition-all duration-300 w-full h-[50px] animate-[showNav_0.3s_ease_1] flex gap-2 [&>button]:w-full [&>button]:h-full   [&>button]:bg-contain [&>button]:bg-center [&>button]:bg-no-repeat rounded-lg">
        <button class="bg-[url('/images/download.svg')]" @click="showNav()"></button>
        <button class="bg-[url('/images/help.svg')]"></button>
        <button class="bg-[url('/images/top.svg')]"></button>
        <button class="bg-[url('/images/profile.svg')]" @click="showProfile()"></button>
    </div>
    <div v-if="showNavFile" id="navFile"
        class="w-full h-[50px] transition-all duration-300 animate-[showNav_0.3s_ease_1] flex gap-4 justify-center items-center [&>button]:w-full [&>button]:h-full rounded-lg">
        <button @click="downloadImage('camera')" class="bg-[#0A3D7F] rounded-lg text-white">Сделать фото</button>
        <button @click="downloadImage('file')" class="bg-[#0A3D7F] rounded-lg text-white">Выбрать из галереи</button>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    downloadImage: Function,
    onFileChange: Function,
    closeNavFile: Boolean
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