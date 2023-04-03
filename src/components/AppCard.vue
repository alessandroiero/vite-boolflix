<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Card',
    props: {
        // metto tutte le info dentro un oggetto
        info: Object
    },
    components: {
        CountryFlag
    },
    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                // lingua inglese
                case 'en':
                    return 'Lingua: inglese';
                    break;
                    case 'it':
                    return 'Lingua: italiana';
                    break;
                    case 'fr':
                    return 'Lingua: francese';
                    break;

                default:
                    return info.original_language;
            }
        },
        voto() {
            // Approssimiamo il voto una volta diviso per due
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>

<template>
    <div class="series-card d-flex">
        <!-- mi richiamo i vari dati nel dom -->
        <!-- titolo -->
        <div class="container-content">
            <ul class="card d-flex justify-content-center">
                <div class="images">
                    <img v-if="info.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`"
                        :alt="info.title">
                    <img v-else :src="`https://via.placeholder.com/342x485/000?text=${info.title || info.name}`"
                        :alt="info.title">
                </div>
                <div class="card-bottom">
                    <li>{{ info.title || info.name }}</li>
                    <li>{{ info.original_title }}</li>
                    <li>{{ getLanguage }}</li>
                    <li class="overview"> {{ info.overview }}</li>
                </div>
            </ul>
            <!-- recensioni -->
            <div class="recensioni">
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in voto" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - voto" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.series-card {
    width: 300px;
    height: auto;
    margin: 30px 0 30px 0;

    .container-content {
        display: block;
        background-color: rgb(15, 15, 15);
        padding: 2px;

        ul {
            padding-left: 0;
            background-color: rgb(15, 15, 15);
            color: white;

            li {
                padding: 5px;
            }
        }

        .card-bottom{
            display: none;
        }

        .overview {
            display: none;
            font-size: 12px;
            max-height: 100%;
            overflow-y: auto;
        }

        &:hover .overview {
            display: block;
        }
        &:hover .card-bottom {
            display: block;
        }

        .recensioni {
            color: red;
        }
    }

    // }

    img {
        display: block;
        max-width: 100%;
        cursor: pointer;
    }
}
</style>