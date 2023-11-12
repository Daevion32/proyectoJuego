<script setup>
import { ref, onMounted } from 'vue'
import { getCharacter } from '../services/apiRequest' // Asegúrate de importar la función que obtiene la información del personaje

const character = ref({
  characterName: '',
  strength: 4,
  dexterity: 4,
  constitution: 4,
  intelligence: 4,
  wisdom: 4,
  charisma: 4,
  
  // Agrega más atributos aquí
})

// Utiliza una función para obtener la información completa del personaje
// const loadCharacterInfo = async () => {
//   try {
//     const characterInfo = await getCharacter() // Utiliza tu función API para obtener la información
//     character.value = characterInfo
//   } catch (error) {
//     console.error('Error al cargar la información del personaje:', error)
//   }
// }

// Llama a la función para cargar la información del personaje cuando se monta el componente
// onMounted(() => {
//   loadCharacterInfo()
// })
 
</script>

<template>
  <div>
    <ol class="attributes">
      <h1>Nombre : {{ character.characterName }}</h1>
      <li>Fuerza : {{ character.strength }}</li>
      <li>Destreza : {{ character.dexterity }}</li>
      <li>Constitución : {{ character.constitution }}</li>
      <li>Inteligencia : {{ character.intelligence }}</li>
      <li>Sabiduría : {{ character.wisdom }}</li>
      <li>Carisma : {{ character.charisma }}</li>
     
      <!-- Agrega más atributos aquí -->
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

.attributes h1 {
  font-size: x-large;
}
.attributes li {
  margin-top: 1vh;
  margin-left: 1vw;
}
</style>
