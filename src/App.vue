<template>
  <div id="app">
  <b-navbar toggleable="md" type="dark" variant="success" fixed="top">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand>NYSL</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
    <Navigation></Navigation>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

    
      <img alt="logo" src="./assets/nysl_logo.png" width="45%" vspace="30">
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components:{
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
 background-image: url("./assets/iphonebg1.jpg");
}



</style>
