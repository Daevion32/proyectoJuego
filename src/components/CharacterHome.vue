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
.character{
  position: absolute;
  display: flex;
  width: 50vw;
  left: 30vw;
  
  gap: 15vw;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
}


</style>
