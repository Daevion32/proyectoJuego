cd ..
<script setup>
import { ref } from 'vue'

const abilities = ref({
  attack: 20,
  defense: 4,
  life: 4,
  mana: 4,
  talent: 4,
  lenguages: 4
})
</script>

<template>
  <div>
    <ol class="abilities">
      <li>
        Ataque :{{ abilities.attack }}
        <p>El ataque viene de tu fuerza por un numero</p>
      </li>
      <li>
        Defensa : {{ abilities.defense }}
        <p>La defensa viene de tu destreza por un numero</p>
      </li>
      <li>
        Salud : {{ abilities.life }}
        <p>La vida viene de tu constitución por un numero</p>
      </li>
      <li>
        Mana : {{ abilities.mana }}
        <p>El mana viene dado de tu inteligencia por un numero</p>
      </li>
      <li>
        Talentos : {{ abilities.talent }}
        <p>Este apartado se tiene que pensar mejor</p>
      </li>
      <li>
        Idiomas : {{ abilities.lenguages }}
        <p>Este apartado se tiene que pensar mejor</p>
      </li>
      <!-- Agrega más atributos aquí -->
    </ol>
  </div>
</template>

<style scoped>
.abilities {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: black;
  color: white;
  position: relative;
  right: 14vw;
  width: 36vw;
  height: 15vw;
  justify-content: space-around;
  border: black solid 0.5vw;
}
.abilities p {
  display: inline;

  position: relative;
  left: 8vw;
}
</style>
