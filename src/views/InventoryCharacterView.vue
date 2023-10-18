
<script setup>
import InventoryCharacter from '../components/InventoryCharacter.vue';
import AsideBar from '../components/AsideBar.vue';

</script>

<template>
 <div>
    <AsideBar />
    
  </div>
  <div class="characterComplement">
    <button><RouterLink to="/character"><p>Personaje</p></RouterLink></button>
    <button><RouterLink to="/inventory"><p>Inventario</p></RouterLink></button>
  </div>
    <div class="inventoryView">
        <InventoryCharacter />
    </div>
</template>



<style scoped>
  .characterComplement{
    position: absolute;
    left: 26vw;
    top:3vw;
    width: 10vw;
    height: 3vw;
    overflow : hidden;
  }
  .characterComplement button{
    width: 50%;
    height: 100%;
    background-color:black;
  }
  .inventoryView{
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