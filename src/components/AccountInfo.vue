<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <ol class="accountInfo">
      <li>Nombre : {user.name}</li>
      <li>Usuario : {user.username}</li>
      <li>Email : {user.email}</li>
      <li>Personaje : {user.characterName}</li>
    </ol>
  </div>
  <div>
    <RouterLink to="/newCharacter"><button class="newCharacter">Crear Personaje</button></RouterLink>
    <RouterLink to="/character"><button class="character">Personaje</button></RouterLink>
  </div>
</template>

<style scoped>
.accountInfo {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 20vw;
  right: 50.6vw;
  width: 15vw;
  height: 15vw;
  justify-content: space-around;
  border: black solid 0.5vw;
}
li {
  margin-top: 1vh;
  margin-left: 1vw;
}
.character {
  background-color: black;
  position: absolute;
  right: 50.6vw;
  top: 22vw;
  height: 4vw;
  width: 4vw;
  color: white;
  text-align: center;
}
.character:hover {
  height: 5vw;
  width: 5vw;
  color: goldenrod;
  font-size: medium;
  text-align: center;
}
.newCharacter {
  background-color: black;
  position: absolute;
  right:61.6vw;
  top: 22vw;
  height: 4vw;
  width: 4vw;
  color: white;
}
.newCharacter:hover {

 
  height: 5vw;
  width: 5vw;
  color: goldenrod;
  font-size: medium;
}
</style>
