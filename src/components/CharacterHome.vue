<script setup>
import AttributeChar from './AttributeChar.vue'
import CharacterImage from './icons/CharacterImage.vue';
</script>

<template>
  <div class="character">
    <CharacterImage />
    <AttributeChar />
  </div>
</template>

<style scoped>
.character {
  display: flex;
  align-items: center;
  position: relative;
  width: 50vw ;
  height: auto;
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
