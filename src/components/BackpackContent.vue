
<script setup>

</script>

<template>
    <div class="bag">
        <h1>Bolsa de Viaje</h1>
        <ol>
            <li>Equipamiento 1</li>
            <br>
            <li>Equipamiento</li>
            <br>
            <li>Equipamiento</li>
            <br>
            <li>Equipamiento</li>
        </ol>

        <div class="coinBag">
            <h1>Monedas</h1>
            <p>Tienes : <span>30</span> monedas de oro</p>
        </div>
    </div>
</template>


<style  scoped>
 .bag h1{
    text-align: center;
    position: relative;
    top:1vw;
    left:10vw;
 }
 .bag li{
 
    position: relative;
    top:3vw;
    left:1vw;
    display:flex;
    flex-direction: column;
    
    
 }
 .coinBag{
    position: relative;
    top:3vw;
    left:1vw;

 }
 .coinBag h1{
    font-size: x-large;
 }
 .coinBag p{
    position: relative;
    top:2vw;
 }.coinBag span:hover{
    font-size: xx-large;
    color:red
    
 }
</style>