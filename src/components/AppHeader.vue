<script>
export default {
    name: 'Header',
data() {
    return {
        store
    }
},
methods: {
    search(){
        console.log('fai la ricerca')
    }
}
}
</script>

<template>
    <header>
        <input type="text" placeholder="Cerca Film">
        <!-- inseriamo la funzione search nel metodo click -->
        <button @click="search">Search</button>

    </header>
</template>



<style lang="scss" scoped></style>