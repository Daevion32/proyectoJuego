<script setup></script>

<template>
  <div>
    <div class="nameAccount">
      <p>Lolindil</p>
      <p><RouterLink to="/">Desconectarse</RouterLink></p>
    </div>
  </div>
  <div>
    <form>
      <div class="user">
        <label for="user">Usuario:</label>
        <input type="text" id="user" />
      </div>

      <div class="password">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" />
      </div>
    </form>
    <div class="Login">
      <p class="newAccount" type="submit">
        <RouterLink to="/newAccount">¿No tienes Cuenta? Regístrate</RouterLink>
      </p>
      <p class="newAccount" type="»submit»"><RouterLink to="/account">Conectarse</RouterLink></p>
    </div>
  </div>
</template>

<style scoped>
form {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.2vw;
}
.user {
  left: 0.67vw;
  position: relative;
  display: flex;
  gap: 1vw;
}
.user label {
  font-size: 1vw;
}
.password {
  position: relative;
  gap: 1vw;
  display: flex;
}
.password label {
  font-size: 1vw;
}
.Login {
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  position: relative;
  left: 0;
  top: 0.4vw;
  gap: 1.2vw;
  font-size: large;
  font-weight: bold;
}
.nameAccount {
  display: none;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  position: relative;
  left: 8vw;
  gap: 4vw;
  font-size: x-large;
  font-weight: bold;
}
</style>
