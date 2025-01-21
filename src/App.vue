<template>
  <HomePage/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from './views/HomePage.vue';

@Options({
  components: {
    HomePage,
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
