<template>
  <div class="w-full h-[15%] flex justify-start px-4 items-center">
    <span class="font-Manrope_Bold text-[16px]">Здравствуйте, {{ first_name }} 😉</span>
  </div>
  <div
    class="text-3xl w-full h-[85%] bg-white rounded-t-lg flex justify-between items-center py-6 px-4 flex-col"
  >
    <div class="flex justify-center items-center flex-col gap-2 [&>*]:text-center">
      <span class="font-Manrope_Bold text-[24px]">Мои проверки</span>
      <span class="font-Manrope_Medium text-[16px]">Вы еще не осуществляли проверок :(</span>
      <span class="font-Manrope_Medium text-[16px]">Вы можете загрузить фотографию или сделать новую и отправить на проверку</span>

    </div>
    <button
      class="w-[320px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_Bold text-[16px] flex justify-center items-center gap-2"
    >
      Проверить шов<img src="/images/scan.svg" class="w-[24px]" alt="" />
    </button>
  </div>
</template>



<script setup>
defineProps({
  first_name: String
})

// let first_name = "Anton"
let role = 'Welder'
let tg = 'Welder'
let phone = '12345678910'
</script>