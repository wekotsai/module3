<template>
  <div id="app">

    <div v-if="isLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <b-navbar toggleable="md" type="dark" variant="success-outline" fixed="top">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand>
        <router-link to="/Home"><i class="fas fa-home" style="font-size:30px;color:white;"></i></router-link>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <Navigation :myProps="matches"></Navigation>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

        
          <img alt="logo" src="./assets/nysl_logo.png" width="45%" vspace="30">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components:{
    Navigation
  },
  data(){
    return {
      matches: [],
      isLoading: true,
    }
  },
  methods: {
      getMatches: function(){
        fetch('https://api.myjson.com/bins/brg8k')
          .then(function(response) {
            return response.json();
          })
          .then(myJson => {
            this.matches = myJson.Matches;
            // eslint-disable-next-line
            console.log(this.matches);            
            // eslint-disable-next-line
            console.log(this.isLoading);
            this.isLoading = false;
          });
      }
  },
  created: function() {
    this.getMatches();
  },
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
