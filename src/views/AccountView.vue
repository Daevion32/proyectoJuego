<script setup>
import AccountPage from '../components/AccountPage.vue'
import AsideBar from '../components/AsideBar.vue'
</script>

<template>
  <div>
    <AsideBar />
  </div>
  <div class="accountView">
    <AccountPage />
  </div>
</template>

<style scoped>
  .accountView {
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
  overflow: hidden;
}
</style>
