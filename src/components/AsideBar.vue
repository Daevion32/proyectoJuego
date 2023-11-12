<script setup>
import CharacterBtn from './buttons/CharacterBtn.vue'
import WorldMapBtn from './buttons/WorldMapBtn.vue'
import AcademyBtn from './buttons/AcademyBtn.vue'
import SocialBtn from './buttons/SocialBtn.vue'
import AccountBtn from './buttons/AccountBtn.vue'
</script>

<template>
  <div class="aside buttonPlay">
    <RouterLink to="/character"><CharacterBtn /></RouterLink>
    <RouterLink to="/WorldMap"><WorldMapBtn /></RouterLink>
    <RouterLink to="/academy"><AcademyBtn /></RouterLink>
    <RouterLink to="/social"><SocialBtn /></RouterLink>
    <RouterLink to="/account"><AccountBtn /></RouterLink>
  </div>
</template>

<style scoped>
.aside {
  width: 22vw;
  height: 41.14vw;
  background-color: rgba(160, 82, 45 , 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vh;
  top: 5vw;
}
.buttonPlay {
  position: relative;
}
</style>
