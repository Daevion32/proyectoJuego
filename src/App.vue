<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterPage from './components/FooterPage.vue'


</script>

<template>
  <header>
    <NavBar />
  </header>

  <div>
    <FooterPage />
  </div>
  <RouterView />
</template>

<style scoped></style>
