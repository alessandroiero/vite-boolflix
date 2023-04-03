<script>
import CountryFlag from 'vue-country-flag-next';
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    name: 'Main',
    components: {
        AppCard
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
  <!-- main -->
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
    <!-- /main -->
</template>



<style lang="scss" scoped>
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

}</style>