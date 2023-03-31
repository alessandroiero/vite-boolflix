<script>
import CountryFlag from 'vue-country-flag-next'
import AppSearch from './AppSearch.vue';
import AppCard from './AppCard.vue';
    export default {
        name: 'Main',
        components: {
            AppSearch,
            AppCard
        }
    }
</script>

<template>
    <main>
        <AppSearch />
    </main>
</template>



<style lang="scss" scoped>

</style>