<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Card',
    props:{
        // metto tutte le info dentro un oggetto
        info: Object
    },
        components: {
            CountryFlag
        }
}
</script>

<template>
    <div>
        <!-- mi richiamo i vari dati nel dom -->
        <!-- titolo -->
        <h2> {{ info.title }}</h2>
        <!-- titolo originale -->
        <h3>{{ info.original_title }}</h3>
        <!-- info lingua -->
        <div>{{ info.original_language }}</div>
        <!-- recensioni -->
        <div>{{ info.vote_average }}</div>
    </div>
    <!-- <country-flag :contry='it' size='small'/>
    <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
</template>

<style lang="scss" scoped></style>