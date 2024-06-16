<template>
  <div class="w-full h-full flex justify-end items-start  flex-col animate-[showMain_0.5s_ease_1]">
    <CheckComponent :first_name="first_name" v-if="page === 'check'" :editAdj="editAdj" :editGeo="editGeo"
      :editInt="editInt" :editNon="editNon" :editPro="editPro" />
    <BaseComponent v-if="page === 'base'" :adj="adj" :geo="geo" :int="int" :non="non" :pro="pro" />
    <BaseDefectsComponent v-if="page === 'defects'" />
    <ProfileComponent :first_name="first_name" :changePage="changePage" :username="username"
      v-if="page === 'profile'" />
    <NavBar :downloadImage="downloadImage" :onFileChange="onFileChange" :closeNavFile="closeNavFile" :page="page"
      :changePage="changePage" />
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import CheckComponent from "./pagesMain/CheckComponent.vue";
import BaseComponent from "./pagesMain/BaseComponent.vue";
import ProfileComponent from "./pagesMain/ProfileComponent.vue";
import BaseDefectsComponent from "./pagesMain/BaseDefectsComponent.vue";
import { ref } from "vue";
const imageSrc = ref('/images/noImage.jpg');
const page = ref('check');
const props = defineProps({
  first_name: String,
  username: String
})
const changePage = (pageName) => {
  page.value = pageName
  console.log(page.value)
}
const closeNavFile = ref(false);
const downloadImage = (id) => {
  document.getElementById("" + id).click();
}
const onFileChange = (event) => {
  const selectedFile = event.target.files[0];
  imageSrc.value = URL.createObjectURL(selectedFile);
  closeNavFile.value = !closeNavFile.value;

}

let adj = ref(5)
let int = ref(0)
let geo = ref(0)
let pro = ref(0)
let non = ref(0)

const editAdj = (value) => {
  adj = adj + value
}
const editInt = (value) => {
  int = int + value
}
const editGeo = (value) => {
  geo = geo + value
}
const editPro = (value) => {
  pro = pro + value
}
const editNon = (value) => {
  non = non + value
}
</script>