<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

    <ol class="accountInfo">
     
      <li>Usuario : {user.username}</li>
      <li>Email : {user.email}</li>
      <li>Personaje : {user.characterName}</li>

    </ol>
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
  border: 1vw solid black;
  background-color:rgba(255, 255, 255 ,0.6);
  color: black;
  position: absolute;
  bottom: 16vw;
  right: 34.6vw;
  width: 20vw;
  height: 20vw;
  justify-content:space-evenly;
}
li {
  margin-bottom: 1vw;
  margin-left: 1vw;
}
.character {
  background-color: black;
  position: absolute;
  left:35vw;
  top: 28vw;
  height: 5vw;
  width: 5vw;

  color: white;
  text-align: center;
}
.character:hover {
  height: 6vw;
  width: 6vw;
  color: goldenrod;
  font-size: medium;
  text-align: center;
  border:0.5vw solid goldenrod;

}
.newCharacter {
  background-color: lightgrey;
  position: absolute;
  left:25vw;
  top:28vw;
  height: 5vw;
  width: 5vw;
  color: black;
}
.newCharacter:hover {
  height: 6vw;
  width: 6vw;
  color: goldenrod;
  font-size: medium;
  border:0.5vw solid black;

}
</style>
