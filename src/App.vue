<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>

<style>
  @import './assets/styles/grid.css';

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0px;
  }
</style>
