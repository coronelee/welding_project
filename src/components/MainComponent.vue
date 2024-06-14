<template>
     <div class="w-full h-full flex justify-end items-start   flex-col animate-[showMain_0.5s_ease_1]">
        <CheckComponent :first_name="first_name" v-if="page === 'check'"/>
        <BaseComponent  v-if="page === 'base'"/>
        <ProfileComponent :first_name="first_name" v-if="page === 'profile'"/>
        <NavBar :downloadImage="downloadImage" :onFileChange="onFileChange" :closeNavFile="closeNavFile" :page="page" :changePage="changePage"/>
     </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import CheckComponent from "./pagesMain/CheckComponent.vue";
import BaseComponent from "./pagesMain/BaseComponent.vue";
import ProfileComponent from "./pagesMain/ProfileComponent.vue";
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const page = ref('check');
const props = defineProps({
  first_name: String
})
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