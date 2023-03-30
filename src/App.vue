<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  name:'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return {
      store
    }
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>


<style lang="scss">

</style>
