<script setup>
import CharacterBtn from '../components/CharacterBtn.vue'
import WorldMapBtn from '../components/WorldMapBtn.vue'
</script>

<template>
  <div class="aside">
    <div class="buttonPlay">
      <Router-link to="/character"><CharacterBtn /></Router-link>
      <Router-link to="/worldMap"><WorldMapBtn /></Router-link>
    </div>
  </div>
</template>

<style scoped>
.aside {
  width: 20vw;
  height: 30vh;
  background-color: rgba(208, 25, 86, 0.675);
  position: relative;
  top: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonPlay {
  top: 2vh;
  position: relative;
}
</style>
