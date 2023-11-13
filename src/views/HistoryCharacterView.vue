<script setup>
import AsideBar from '../components/AsideBar.vue'
import HistoryCharacter from '../components/HistoryCharacter.vue'
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
  <div class="historyView">
    <HistoryCharacter />
  </div>
</template>

<style scoped>
.historyView {
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
