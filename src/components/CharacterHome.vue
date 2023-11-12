<script setup>
import AbilitiesChar from './AbilitiesChar.vue';
import AttributeChar from './AttributeChar.vue';
import BackpackContent from './BackpackContent.vue';
import CharacterImage from './icons/CharacterImage.vue'
</script>

<template>
  <div class="character">
    <CharacterImage />
    <AttributeChar />
    <AbilitiesChar />
  </div>
  <div class="backpack">
    <BackpackContent />

  </div>
</template>

<style scoped>
.character {
  position: relative;
  display: flex;
  width: 50vw;
  bottom: 21vw;
  left: 32vw;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.backpack  {
  position: relative;
    display: flex;
    right: 30vw;
    bottom:1vw;
    height: 17vw;
    width: 150vw;
    background: black;
    color:goldenrod;
}
</style>
