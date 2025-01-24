<template>
  <MenuComp />
  <router-view></router-view>
  <FooterComp />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MenuComp from './components/MenuComp.vue';
import FooterComp from './components/FooterComp.vue';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';

@Options({
  components: {
    HomePage,
    AboutPage,
    MenuComp,
    FooterComp
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;

}
</style>
