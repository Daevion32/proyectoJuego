<script setup>
import { RouterLink } from 'vue-router'
import UserLogin from '../components/UserLogin.vue'
</script>

<template>
  <div class="nav">
    <RouterLink to="/"
      ><h1>Era de los Encantamientos: Travesía en las Tierras Olvidadas</h1></RouterLink
    >

    <div class="UserLogin">
      <UserLogin />
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

h1 {
  position: relative;
  left: 15vw;
  font-size: x-large;
  font-weight: bold;
  color: white;
}
h1:hover {
  color: goldenrod;
}
</style>
