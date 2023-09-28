<script setup>
    import CharacterBtn from '../components/CharacterBtn.vue'
</script>


<template>
    <div class="ButtonPlay">
        
        <Router-link to="/character"><CharacterBtn /></Router-link>
    </div>
</template>



<style scoped>
    .ButtonPlay{
        width: 10em;
        height: 10em;
        background-color: black;
    }
</style>