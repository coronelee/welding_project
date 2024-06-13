<template>
<input type="file" id="file" class="hidden" @change="onFileChange">
<input type="file" id="camera" accept="image/*" capture="camera" class="hidden" @change="onFileChange">
     <div class="w-full h-full flex justify-center items-center flex-col p-2 gap-2 animate-[showMain_0.5s_ease_1]">
        <div class="text-3xl font-mono w-[calc(100%-58px)] h-full bg-center bg-no-repeat bg-contain" :style="{backgroundImage: `url(${imageSrc})`}"></div>
        <div class="w-full absolute bottom-2 h-[50px] flex gap-2 [&>button]:w-full [&>button]:h-full   [&>button]:bg-contain [&>button]:bg-center [&>button]:bg-no-repeat rounded-lg">
            <button class="bg-[url('/images/download.svg')]"  @click="downloadImage('file')"></button>
            <button class="bg-[url('/images/help.svg')]"></button>
            <button class="bg-[url('/images/top.svg')]"></button>
            <button class="bg-[url('/images/profile.svg')]"></button>
        </div>
     </div>
</template>

<script setup>
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const loadImage = () => {
    let input = document.createElement('input');
}
const downloadImage = (id) => {
    document.getElementById(""+id).click();
}
const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    imageSrc.value = URL.createObjectURL(selectedFile);



    // const img = new FormData();
    // img.append('photo', selectedFile);
    // axios.post(`http://localhost:8081/api/v1/photo/load`, 
    // img,
    // {
    //     headers: { "Content-Type": "multipart/form-data"},
    // },)
  }
</script>