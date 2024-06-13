<template>
    <div class="bg-[url('/images/splash.svg')] bg-cover bg-no-repeat w-full h-full flex justify-center items-center flex-col gap-8">
      <span class="text-5xl font-mono text-white">Привет {{ first_name }}!</span>
      <a class="text-3xl bg-white px-6 py-3 rounded-lg" href="#/auth">Start</a>
    </div>
  </template>


<script setup>
    import axios from 'axios';
    import { ref } from 'vue';

    const first_name = ref('');

    axios.get('https://api.telegram.org/bot7310452207:AAFjS32-tuKH3V-W1Ghojv67MfQpBgcOj3M/getupdates').then((response) => {
        first_name.value = response.data.result[1].message.chat.first_name;
    })  
</script>
