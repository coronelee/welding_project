<template>
    <div class="bg-[url('/images/splash.svg')] bg-cover bg-no-repeat w-full h-full flex justify-center items-center flex-col gap-8">
      <span class="text-5xl font-mono text-white">Привет {{ first_name }}!</span>
      <a class="text-3xl bg-white px-6 py-3 rounded-lg" href="#/auth">Start</a>
    </div>
  </template>


<script setup>
const props = defineProps({
  first_name: String
})
</script>
