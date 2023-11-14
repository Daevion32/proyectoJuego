<script setup>
import IconRol from '../components/icons/IconRol.vue'
</script>

<template>
  <div class="homePage">
    <div class="icons">
      <IconRol />
    </div>
    <p>
      Embárcate en la era dorada de los encantamientos y la magia, donde las tierras olvidadas
      aguardan con sus secretos. Vive emocionantes travesías mientras desentrañas los misterios de
      diversas escuelas de magia y te enfrentas a entidades míticas como dragones. Este es un mundo
      donde caballeros intrépidos y astutos hechiceros se encuentran inmersos en una eterna lucha
      entre la luz y la oscuridad, mientras antiguos encantamientos esperan ser descubiertos y
      dominados.
    </p>
  </div>
</template>

<style scoped>
.homePage {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 35%;
  font-size: x-large;
  font-weight: bolder;
}
.homePage .icons {
  position: relative;
  bottom: 14vw;
}
.homePage p {
  position: absolute;
  top: 10vw;
  width: 100%;
  text-align: center;
}
</style>
