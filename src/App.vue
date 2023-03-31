<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    AppCard,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // Creiamo una funzione per l'API
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
    }
  }

}
</script>

<template>
  <!-- Da inserire AppSearch -->
  <input type="text" placeholder="Cerca Film" v-model="store.searchKey">
  <button @click="getMovies">Search</button>
  <!-- AppSearch Emit -->

  <AppMain />
  <!-- Da spostare con emit nel AppMain -->
  <ul>
    <li v-for="movie in store.movies">
      <AppCard :info="movie"/>,
      <div></div>
    </li>
  </ul>
    <!-- Da spostare con emit nel AppMain -->
  <AppFooter />
</template>


<style lang="scss">
li{
  list-style: none;
}
</style>
