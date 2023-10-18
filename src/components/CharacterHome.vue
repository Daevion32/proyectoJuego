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
    bottom: 22vw;
    left: 8vw;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}


</style>
