<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav">
    <div class="icons">
      <RouterLink to="/">Icono Juego</RouterLink>
    </div>
    <h1>Titulo Juego</h1>

    <div>
      <RouterLink to="/userLogin"><h1>Login</h1></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: red;
  align-items: center;
  color: white;
}
.icons {
  display: flex;
  align-items: center;
}
h1 {
  color: white;
}
</style>
