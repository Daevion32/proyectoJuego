<script setup>
import { RouterLink } from 'vue-router'
import IconRol from './icons/IconRol.vue'
</script>

<template>
  <div class="nav">
    <div class="icons">
      <RouterLink to="/"><IconRol /></RouterLink>
    </div>
    <RouterLink to="/"><h1>Era de los Encantamientos: Travesía en las Tierras Olvidadas</h1></RouterLink>

    <div>
      <RouterLink to="/userLogin"><p>Login</p></RouterLink>
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
  height: 5vw;
  background-color: red;
  align-items: center;
  color: white;
}
.icons {
  display: flex;
  align-items: center;
}
h1 {
  font-size:x-large;
  font-weight: bold;
  color: white;
  
}
h1:hover{
  color:goldenrod;
}
</style>
