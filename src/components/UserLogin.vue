<script setup>

</script>

<template>
    <form>
      <div class="user">
        <label for="»user»"> Usuario: </label>

        <input type="»text»" id="»user»" />
      </div>

      <div class="password">
        <label for="»password»"> Contraseña: </label>

        <input type="»password»" id="»password»" />
      </div>

      <button type="»submit»"><RouterLink to="/home">Login</RouterLink></button>
    </form>
</template>

<style scoped>
form {
  position: relative;
  top: 50vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user {
  left: 0.6vw;
  position: relative;
  display: flex;
  gap: 1vw;
}
.password {
  position: relative;
  gap: 1vw;
  display: flex;
}
</style>
