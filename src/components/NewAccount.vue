<script setup>

</script>

<template>
  <div>
    <form class="container">
        <div class="">
            <label for="name">Nombre: </label>
            <input class="form-control ms-4" type="text" id="name" placeholder="Nombre">
        </div>
        <div class="">
            <label for="username">Usuario: </label>
            <input class="" type="text" id="username" placeholder="Usuario">
        </div>
        <div class="">
            <label for="password">Contraseña: </label>
            <input class="" type="password" id="password" placeholder="Contraseña">
        </div>
        <div class="">
            <label for="email"></label>
            <input class="" type="email" id="email" placeholder="E-mail" required>
        </div>
        <div class="">
            <div>
                <RouterLink to="/account"><button>Crear</button></RouterLink>
                <RouterLink to="/"><button class="ps-4">Cancelar</button></RouterLink>
            </div>
        </div>
     </form>    
  </div>
</template>

<style scoped>
.container{
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
