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
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>


<style lang="scss">
body {
  background-color: black;
}

</style>
