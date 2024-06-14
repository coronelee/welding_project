<template>
  <div class="w-full h-[15%] flex justify-start px-4 items-center"><span
      class="font-Manrope_Bold text-[16px]">Здравствуйте, {{ first_name }} 😉</span> </div>
  <div class="text-3xl w-full h-[85%] bg-white rounded-t-lg flex justify-between items-center  px-4 flex-col">
    <div class="flex justify-center items-center flex-col gap-2 [&>span]:text-center">
      <span class="font-Manrope_Bold text-[24px]">Мои проверки</span>
      <span class="font-Manrope_Medium text-[16px] text-[#5F5F5F] leading-5">Вы еще не осуществляли проверок :(</span>
      <span class="font-Manrope_Medium text-[16px] text-[#5F5F5F] leading-5">Вы можете загрузить фотографию или сделать
        новую
        и отправить
        на проверку</span>
    </div>
    <div class="flex justify-center items-center gap-4 flex-col">
      <div
        class="w-[340px] h-[300px] bg-[#D9D9D9] border border-[#C2C2C2] rounded-lg flex justify-center items-center flex-col gap-[13px]">

        <img src="/images/load.svg" class="w-[96px]" alt="">
        <span class="font-Manrope_Medium text-[16px] text-[#5F5F5F] w-[250px] text-center leading-5">Проверить
          сварочный шов
          из галереи</span>
      </div>
      <button
        class="w-[340px] h-[50px] bg-[#2C50CC] rounded-lg text-white font-Manrope_Bold text-[16px] flex justify-center items-center gap-2 ">Сделать
        фото шва
        <img src="/images/scan.svg" class="w-[24px]" alt="">
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  first_name: String
})
</script>