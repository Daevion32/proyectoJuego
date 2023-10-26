<script setup></script>

<template>
  <div >
    
    <ol class="attributes">
      <h1>Nombre : {character.characterName}</h1>
      <li>Fuerza : {character.strength}</li>
      <li>Destreza : {character.dexterity}</li>
      <li>Constitución : {character.constitution}</li>
      <li>Inteligencia : {character.intelligence}</li>
      <li>Sabiduría : {character.wisdom}</li>
      <li>Carisma : {character.charisma}</li>
    </ol>

  </div>

</template>

<style scoped>

.attributes {
  display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: black;
    color: white;
    position: relative;
    top: 2vw;
    right: 23.6vw;
    width: 15vw;
    height: 15vw;
    justify-content: space-around;
    border: black solid 0.5vw;
}

.attributes h1{
  font-size: x-large;
}
.attributes li {
  margin-top: 1vh;
  margin-left: 1vw;
}


</style>
