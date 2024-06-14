<template>

     <div class="w-full h-full flex justify-between items-top flex-col p-2 gap-2 animate-[showMain_0.5s_ease_1]">
        <div  class="text-3xl  w-full h-full bg-center bg-no-repeat bg-contain" :style="{backgroundImage: `url(${imageSrc})`}"></div>
        <NavBar :downloadImage="downloadImage" :onFileChange="onFileChange" :closeNavFile="closeNavFile" :page="page" :changePage="changePage"/>
     </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const page = ref('base');

const changePage = (pageName) => {
  page.value = pageName
}
const closeNavFile = ref(false);
const downloadImage = (id) => {
    document.getElementById(""+id).click();
}
const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    imageSrc.value = URL.createObjectURL(selectedFile);
    closeNavFile.value = !closeNavFile.value;
    

    // const img = new FormData();
    // img.append('photo', selectedFile);
    // axios.post(`http://localhost:8081/api/v1/photo/load`, 
    // img,
    // {
    //     headers: { "Content-Type": "multipart/form-data"},
    // },)
  }

  
</script>