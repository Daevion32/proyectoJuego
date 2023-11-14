<script setup></script>
<template>
 <div>
    <h1 class="inventory">Inventario</h1>
    <div>
      <table class="principal">
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Cantidad</th>
      
        </tr>
        <tr>
          <td>${name}</td>
          <td>${description}</td>
          <td>${quantity}</td>
         
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.inventory {
  position: relative;
  bottom: 32vw;
  text-align: center;
  font-weight: bold;
  font-size: 2.2vw;
}
.inventory:hover {
  color: whitesmoke;
}
table {
  position: relative;
  bottom: 30vw;
  right: 0vw;
  width: 78vw;
  border-collapse: collapse;
  text-align: center;
}

th,
td {
  padding: 8px;
  font-weight: bold;
  font-size: 22px;
}

th {
  background-color: #ccc;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #000000;
}
</style>
