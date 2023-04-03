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
  methods: {}
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain />
  <!-- Da spostare con emit nel AppMain -->
  <main class="d-flex justify-content-center">
    <ul class="cards">
      <li v-for="movie in store.movies">
        <AppCard :info="movie" />,
      </li>
      <li v-for="serie in store.series">
        <AppCard :info="serie" />,
      </li>
    </ul>
  </main>
  <!-- Da spostare con emit nel AppMain -->
  <AppFooter />
</template>


<style lang="scss">
body {
  background-color: black;
}

main {
  width: 100%;
  .cards{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px;
    li{
      width: 300px;
    }
  }
  ul {
    padding-left: 0;
    width: 100%;
    li {
      font-weight: bolder;
      text-align: center;
      margin-top: 20px;
      list-style: none;
    }
  }

}
</style>
