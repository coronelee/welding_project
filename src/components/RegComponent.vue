<template>
    <div ref="root"></div>
  </template>
  
  <script>
  export default {
    name: 'TelegramWidget',
    mounted() {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://telegram.org/js/telegram-widget.js?22";
      script.setAttribute('data-telegram-login', '@regWelding_bot');
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-auth-url', '/');
      script.setAttribute('data-request-access', 'write');
      this.$refs.root.appendChild(script);
    }
  }
  </script>