<script setup>
import AsideBar from '../components/AsideBar.vue'
import InventaryCharacter from '../components/InventaryCharacter.vue'
import CharacterHome from '../components/CharacterHome.vue'
</script>

<template>
  <div>
    <AsideBar />
    
  </div>
  <div class="characterView">
    <CharacterHome />
    <InventaryCharacter />
  </div>
</template>

<style scoped>
  .characterView{
    position: relative;
    bottom:30vh;
    width: 100vh;
    left: 62vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: flex-end;
  }
</style>
