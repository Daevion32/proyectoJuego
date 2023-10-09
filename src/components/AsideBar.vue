<script setup>
import CharacterBtn from './buttons/CharacterBtn.vue'
import WorldMapBtn from './buttons/WorldMapBtn.vue'
import AcademyBtn from './Buttons/AcademyBtn.vue'
import SocialBtn from './buttons/SocialBtn.vue'
import AccountBtn from './buttons/AccountBtn.vue'
</script>

<template>
  <div class="aside buttonPlay">

      <RouterLink to="/character"><CharacterBtn /></RouterLink>
      <RouterLink to="/worldMap"><WorldMapBtn /></RouterLink>
      <RouterLink to="/academy"><AcademyBtn /></RouterLink>
      <RouterLink to="/social"><SocialBtn /></RouterLink>
      <RouterLink to="/account"><AccountBtn /></RouterLink>

  </div>
</template>

<style scoped>
.aside {
  width: 22vw;
  height: 78vh;
  background-color: rgba(81, 94, 66, 0.564);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:1vh;
  
}
.buttonPlay {

  position: relative;
}
</style>
