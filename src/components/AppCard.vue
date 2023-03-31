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
        },
        computed:{
            getLanguage(){
                switch(this.info.original_language){
                // lingua inglese
                case 'en':
                    return 'gb';
                    break;
                
                default:
                    return info.original_language
            }
        },
        voto(){
            // Approssimiamo il voto una volta diviso per due
            return Math.ceil(this.info.vote_average /2);
        }
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
        <div>{{ getLanguage }}</div>
        <!-- recensioni -->
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in voto"/>
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-voto"/>
    </div>
     <country-flag :contry='getLanguage' size='small'/>
</template>

<style lang="scss" scoped></style>