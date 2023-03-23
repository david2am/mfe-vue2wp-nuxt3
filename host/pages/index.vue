<script setup>
// import { defineAsyncComponent } from "vue";
// const Footer = defineAsyncComponent(() => import("remote/Footer"));
import Footer from 'remote/Footer'
</script>

<template>
    <div class="container">
      <div>Name: LOCAL</div>
      <div>Framework: Vue 3 - Nuxt 3</div>
      <div>:Vite</div>
      <Footer />
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  font-size: 3rem;
  margin: auto;
  max-width: 800px;
  margin-top: 20px;
}
</style>