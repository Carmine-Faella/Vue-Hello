const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        image:'https://img.icons8.com/color/12x/vue-js.png'
      }
    }
  }).mount('#app')