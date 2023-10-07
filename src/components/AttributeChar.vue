<script setup></script>

<template>
  <div>
    <ol class="attributes">
      <li>Fuerza : {character.strength}</li>
      <li>Destreza : {character.dexterity}</li>
      <li>Constitucion : {character.constitution}</li>
      <li>Inteligencia : {character.inteligence}</li>
      <li>Sabiduria : {character.wisdom}</li>
      <li>Carisma : {character.charisma}</li>
    </ol>
  </div>
</template>

<style scoped>
.attributes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vh;
  background-color: black;
  color: white;
  position: relative;
  left: 40vw;
  bottom: 55vh;
  width: 35vw;
  height: 30vh;
}
li {
  margin-top: 1vh;
  margin-left: 1vw;
}
</style>
