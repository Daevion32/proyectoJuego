<script setup>
import AccountInfo from '../components/AccountInfo.vue'
</script>

<template>
  <div class="account">
    <AccountInfo />
  </div>
</template>

<style scoped>
.account {
  position: relative;
  display: flex;
  height: 41.14vw;
  width: 78vw;
  bottom: 0;
  left: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
