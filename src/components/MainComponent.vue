<template>

     <div class="w-full h-full flex justify-end items-start   flex-col   animate-[showMain_0.5s_ease_1]">
      <div class="w-full h-[15%] flex justify-start px-4 items-center"><span class="font-Manrope_Bold text-[16px]">Здравствуйте, {{ first_name }}</span> </div>
      <div  class="text-3xl w-full h-[85%] bg-white rounded-t-lg flex justify-between items-center py-6 px-4 flex-col">
        <div class="flex justify-center items-center flex-col gap-2">
          <span class="font-Manrope_Bold text-[24px]">Мои проверки</span>
          <span class="font-Manrope_Medium text-[16px]">Вы еще не осуществляли проверок :(</span>
        </div>
        <button class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_Bold text-[16px] flex justify-center items-center gap-2 ">Проверить <img src="/images/scan.svg" class="w-[24px]" alt=""> </button>
      </div>
        <NavBar :downloadImage="downloadImage" :onFileChange="onFileChange" :closeNavFile="closeNavFile" :page="page" :changePage="changePage"/>
     </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const page = ref('check');
const props = defineProps({
  first_name: String
})
const changePage = (pageName) => {
  page.value = pageName
  console.log(page.value)
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