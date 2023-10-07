<script setup>
import AttributeChar from './AttributeChar.vue'
</script>

<template>
  <div class="character">
    <img class="retrato" src="" alt="Imagen Personaje" />
    <AttributeChar />
  </div>
</template>

<style scoped>
.character {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 20vh;
  right: 20vw;
  gap: 15vw;
}
.retrato {
  position: relative;
  text-align: center;
  width: 20vw;
  height: 30vh;
  background-color: red;
  bottom: 55vh;
  left: 45vw;
}
</style>
