<template>
<input type="file" id="file" class="hidden" @change="onFileChange">
<input type="file" id="camera" accept="image/*" capture="camera" class="hidden" @change="onFileChange">
     <div class="w-full h-full flex justify-center items-center flex-col p-2 gap-2 animate-[showMain_0.5s_ease_1]">
        <div  class="text-3xl font-mono w-[calc(100%-58px)] h-full bg-center bg-no-repeat bg-contain" :style="{backgroundImage: `url(${imageSrc})`}"></div>
        <div v-if="!showCamera" id="nav" class="transition-all duration-300 w-full h-[50px] animate-[showNav_0.3s_ease_1] flex gap-2 [&>button]:w-full [&>button]:h-full   [&>button]:bg-contain [&>button]:bg-center [&>button]:bg-no-repeat rounded-lg">
            <button class="bg-[url('/images/download.svg')]"  @click="showNav()"></button>
            <button class="bg-[url('/images/help.svg')]"></button>
            <button class="bg-[url('/images/top.svg')]"></button>
            <button class="bg-[url('/images/profile.svg')]"></button>
            
        </div>
        <div v-if="showCamera" id="navFile" class="w-full w-full transition-all duration-300 animate-[showNav_0.3s_ease_1] h-[50px] flex gap-4 justify-center items-center [&>button]:w-full [&>button]:h-full rounded-lg [&>button]:bg-[#D9D9D9]">
            <button @click="downloadImage('camera')">Сделать фото</button> <button @click="downloadImage('file')">Выбрать из галереи</button>
        </div>
     </div>
</template>

<script setup>
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const showCamera = ref(false);
const loadImage = () => {
    let input = document.createElement('input');
}

const showNav = () => {
    document.getElementById('nav').style.transform = 'translateY(150%)';
    setTimeout(() => {
        showCamera.value = !showCamera.value; 
    }, 300)
}
const downloadImage = (id) => {
    
    document.getElementById(""+id).click();
}
const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    imageSrc.value = URL.createObjectURL(selectedFile);

    showCamera.value = !showCamera.value;

    // const img = new FormData();
    // img.append('photo', selectedFile);
    // axios.post(`http://localhost:8081/api/v1/photo/load`, 
    // img,
    // {
    //     headers: { "Content-Type": "multipart/form-data"},
    // },)
  }
</script>