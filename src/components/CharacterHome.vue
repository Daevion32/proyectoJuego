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
    right: 50vw;
    gap: 15vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}


</style>
