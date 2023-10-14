<script setup>
import AsideBar from '../components/AsideBar.vue'
import InventoryCharacter from '../components/InventoryCharacter.vue'
import CharacterHome from '../components/CharacterHome.vue'
</script>

<template>
  <div>
    <AsideBar />
    
  </div>
  <div class="characterView">
    <CharacterHome />
    <InventoryCharacter />
  </div>
</template>

<style scoped>
  .characterView{
    position: absolute;
    bottom: 4vw;
    left: 22vw;
    height: 41.14vw;
    width: 78vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    background: #cd9c66;
  }
</style>
