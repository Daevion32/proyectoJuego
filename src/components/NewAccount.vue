<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <form class="container">
      <div class="username">
        <label for="username">Usuario: </label>
        <input class="" type="text" id="username" placeholder="Usuario" />
      </div>
      <div class="password">
        <label for="password">Contraseña: </label>
        <input class="" type="password" id="password" placeholder="Contraseña" />
      </div>
      <div class="confirm">
        <label for="password">Confirmar Contraseña: </label>
        <input class="" type="password" id="password" placeholder="Confirmar Contraseña" />
      </div>
      <div class="email">
        <label for="email">E-mail :</label>
        <input class="" type="email" id="email" placeholder="E-mail" required />
      </div>
      <div class="button">
        <div>
          <RouterLink to="/account"><button>Crear</button></RouterLink>
          <RouterLink to="/"><button class="ps-4">Cancelar</button></RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  height: 28vw;
  width: 29vw;
  position: relative;
  top: 11vw;
  left: 33vw;
  background-color: goldenrod;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  align-items: start;
  justify-content: center;
}

.name,
.username,
.password,
.confirm,
.email {
  position: relative;
  left: 2vw;
}
input {
  display: flex;
  flex-direction: row;
  position: relative;
  left: 10vw;
  bottom: 1vw;
}
button {
  position: relative;
  left: 12vw;
  bottom: 1vw;
}
.ps-4 {
  position: relative;
  left: 13vw;
  bottom: 1vw;
}
</style>
