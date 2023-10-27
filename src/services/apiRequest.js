import axios from 'axios'

// Define la URL base de tu API
const baseURL = 'http://localhost:8000/api' // Asegúrate de que coincida con la URL de tu servidor

// Configura Axios para usar la URL base
const api = axios.create({
  baseURL
})

// Función para recuperar una lista de personajes
export const getCharacter = () => {
  return api.get('/character')
}

// Función para crear un nuevo personaje
export const createCharacter = (characterData) => {
  return api.post('/character', characterData)
}

// Función para actualizar un personaje existente
export const updateCharacter = (characterId, updatedCharacterData) => {
  return api.patch(`/character/${characterId}`, updatedCharacterData)
}

// Función para eliminar un personaje
export const deleteCharacter = (characterId) => {
  return api.delete(`/character/${characterId}`)
}
