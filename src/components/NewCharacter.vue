<script setup>
import { ref } from 'vue'
import router from '../router'
import { createCharacter } from '../services/apiRequest'

const characterName = ref('')

const crearPersonaje = async () => {
  try {
    const newCharacterData = {
      name: characterName.value
    }

    const response = await createCharacter(newCharacterData)

    if (response.status === 201) {
      const newCharacter = response.data
      router.push(`/character/${newCharacter.id}`) // Suponiendo que estás utilizando Vue Router
    }
  } catch (error) {
    // Manejar errores, por ejemplo, mostrar un mensaje de error
    console.error('Error al crear el personaje:', error)
  }

  characterName.value = ''
}
</script>

<template>
  <div>
    <form class="container" @submit="crearPersonaje">
      <div class="">
        <label for="name">Nombre Personaje: </label>
        <input
          v-model="characterName"
          class="form-control ms-4"
          type="text"
          id="name"
          placeholder="Nombre"
        />
      </div>

      <div>
        <RouterLink to="/character"><button type="submit">Crear</button></RouterLink>
        <RouterLink to="/account"><button class="ps-4" type="button" @click="cancelar">Cancelar</button></RouterLink>
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
  align-items: center;
  justify-content: center;
}
</style>
