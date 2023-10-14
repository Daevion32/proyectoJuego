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
    bottom: 16vw;
    left: 10vw;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}


</style>
