<script setup>
import { RouterLink } from 'vue-router'
import AsideBar from '../components/AsideBar.vue'

import CharacterHome from '../components/CharacterHome.vue'
</script>

<template>
  <div>
    <AsideBar />
  </div>
  <div class="characterComplement">
    <button>
      <RouterLink to="/character"><p>Personaje</p></RouterLink>
    </button>
    <button>
      <RouterLink to="/inventory"><p>Inventario</p></RouterLink>
    </button>
    <button>
      <RouterLink to="/skills"><p>Habilidades</p></RouterLink>
    </button>
    <button>
      <RouterLink to="/history"><p>Historia</p></RouterLink>
    </button>
  </div>
  <div class="characterView">
    <CharacterHome />
  </div>
</template>

<style scoped>
.characterView {
  position: absolute;
  bottom: 4vw;
  left: 22vw;
  height: 39.5vw;
  width: 78vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background: #cd9c66;
  overflow: hidden;
}
</style>
