<script setup>
import AttributeChar from './AttributeChar.vue';
</script>

<template>
  <div class="character">
    <img class="retrato" src="" alt="Imagen Personaje">
    <AttributeChar />
  </div>
</template>

<style scoped>
.character {
  display:flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  bottom:20vh;
  right:20vw;
  gap: 15vw;

  
}
.retrato{
  position: relative;
  text-align: center;
  width:20vw ;
  height: 20vw;
  background-color: red;
  bottom: 50vh;
  left: 45vw;
}
</style>
