<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },
    methods: {
        // Creiamo una funzione per l'API MOVIES
        getMovies() {
            axios.get(this.store.config.urlMovie, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey
                }
            }).then((response) => {
                console.log(response);
                this.store.movies = response.data.results;
            })
        },
        // API Serie TV
        getSeries() {
            axios.get(this.store.config.urlSeries, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey
                }
            }).then((response) => {
                console.log(response);
                this.store.series = response.data.results;
            })
        },
        // inseriamo sia le serie tv che i film
        moviesSeries() {
            this.getSeries();
            this.getMovies();
        }
    }

}
</script>

<template>
    <header>
        <!-- jumbotron -->
        <div class="jumbotron">
            <!-- logo -->
            <div class="jumbotron-logo d-flex">
                <img class="logo" src="../assets/img/Netflix-logo.png" alt="" />
            </div>
            <!-- /logo -->

            <!-- info -->
            <div class="info">
                <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
                <p>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</p>
                <!-- form -->
                <div class="form">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="store.searchKey" placeholder="Cerca Film o Serie TV"
                            aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button @click="moviesSeries" class="btn btn-outline-primary"
                            id="button-addon2">Cerca</button>
                    </div>
                </div>
                <!-- /form -->
            </div>
            <!-- /info -->
        </div>
        <!-- /jumbotron -->
    </header>
</template>


<style lang="scss" scoped>
.jumbotron {
    width: 100%;
    padding-bottom: 18.75rem;
    position: relative;
    background: url(../assets/img/jumbotron-netflix.jpg) center;

    // inseriamo lo strato che oscura l'immagine
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.6);
    }

    .jumbotron-logo {
        z-index: 100;
        height: 90px;

        .logo {
            width: 200px;
            height: 150px;
            z-index: 100;
            margin: 0 auto;
            padding: 20px 0;
        }
    }

    .info {
        position: relative;
        z-index: 100;
        width: 65%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 9rem;

        h1 {
            font-weight: 700;
            font-size: 5.2rem;
            margin: 0 0 2rem;
            color: white;
        }

        p {
            font-weight: 400;
            text-transform: uppercase;
            color: #fff;
            font-size: 1.9rem;
            line-height: 1.25;
            margin: 0 0 2rem;
        }
    }
}
</style>