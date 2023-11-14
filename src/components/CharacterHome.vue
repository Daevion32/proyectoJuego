<script setup>
import AbilitiesChar from './AbilitiesChar.vue'
import AttributeChar from './AttributeChar.vue'
import CharacterImage from './icons/CharacterImage.vue'
</script>

<template>
  <div class="character">
    <CharacterImage />
    <AttributeChar />
    <AbilitiesChar />
  </div>
</template>

<style scoped>
.character {
  position: relative;
  display: flex;
  width: 50vw;
  bottom: 21vw;
  left: 18vw;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
