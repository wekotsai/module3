<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <p><router-link to="/Home">Go to Home</router-link></p>
    <p><router-link to="/Test">Go to Test</router-link></p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
</style>
