<script setup></script>

<template>
  <div>
    <form class="container">
      <div class="">
        <label for="name">Nombre Personaje: </label>
        <input class="form-control ms-4" type="text" id="name" placeholder="Nombre" />
      </div>

        <div>
          <RouterLink to="/character"><button>Crear</button></RouterLink>
          <RouterLink to="/account"><button class="ps-4">Cancelar</button></RouterLink>
        </div>
      
    </form>
  </div>
</template>

<style scoped>
.container {
  height: 28vw;
  width: 29vw;
  position: relative;
  top: 11vw;
  left: 33vw;
  background-color: goldenrod;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  align-items: center;
  justify-content: center;
}
</style>
