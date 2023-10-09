<script setup>
import AsideBar from '../components/AsideBar.vue'
import InventaryCharacter from '../components/InventaryCharacter.vue'
import CharacterHome from '../components/CharacterHome.vue'
</script>

<template>
  <div class="characterView" >
    <AsideBar />
    <CharacterHome />
    <InventaryCharacter />
  </div>
</template>

<style scoped>
  .characterView{
    height: 77.6vh;
  }
</style>
