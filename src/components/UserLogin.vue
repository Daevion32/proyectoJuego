<script setup></script>

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
  </form>
  <div class="btnLogin">
    <button class="newAccount" type="submit"><RouterLink to="/newAccount">New Account</RouterLink></button>
    <button class="newAccount"  type="»submit»"><RouterLink to="/home">Login</RouterLink></button>
    
  </div>
 
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

.btnLogin{
  display: flex;
  align-items: flex-start;
  align-content: center;
  position: relative;
  top:25.2vw;
  left:48vw;
  gap:0.2vw;
  
}
.newAccount{
  background-color: black;
  width: 4vw;
  height: 2vw;
}
</style>
