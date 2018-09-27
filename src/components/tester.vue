<template>

<div id="app">
 <!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
          <span class="sr-only">Toggle navigation</span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"><router-link :to="{name: 'Teams', params: { propsInTeams: this.myProps } }"><i class="fas fa-futbol" style="font-size:30px;color:white;"></i></router-link></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link :to="{name: 'Schedule', params: { propsInTeams: this.myProps } }"><i class="far fa-calendar-alt" style="font-size:30px;color:white;"></i></router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.0/components/jumbotron/" role="button" target="_blank">Learn more</a>
  </p>
</div>

</div>

<!--<div>
    <nav>
     <b-button-group size="md">
      <b-button :pressed="false" variant="success">
       <b-nav-item><router-link :to="{name: 'Teams', params: { propsInTeams: this.myProps } }"><i class="fas fa-futbol" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button> 
       <b-button :pressed="false" variant="success">
       <b-nav-item><router-link :to="{name: 'Schedule', params: { propsInTeams: this.myProps } }"><i class="far fa-calendar-alt" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button>
       <b-button :pressed="false" variant="success">
       <b-nav-item><router-link to="/Contact"><i class="fas fa-envelope" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button>
       <b-button :pressed="false" variant="success">
       <b-nav-item><router-link to="/login"><i class="fas fa-comments" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button>
     </b-button-group>
    </nav>
  </div>-->

</template>

<script>
// import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'tester',
  components: {
    // 'b-button': bButton,
  },
  props: ['myProps'],
  created() {
    // eslint-disable-next-line
    console.log(this.myProps);
  },
}

new Vue({
  el: '#app',
  data () {

  }
})
</script>


<style scoped>
.navbar-toggler {
  border: none;
  background: transparent !important;
}

.navbar-toggler:focus {
  outline: none;
  background: transparent !important;
}

.navbar-toggler .icon-bar {
  background-color: #fff;
  transform: rotate(0deg) translate(0px, 0px);
  transition: ease all .2s;
}

.navbar-toggler .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggler .icon-bar+.icon-bar {
  margin-top: 4px;
}

.icon-bar:nth-child(2) {
  width: 16px;
  transition: ease all .2s;
}

.navbar-toggler:hover>.icon-bar:nth-child(2) {
  width: 22px;
  transition: ease all .2s;
}

.navbar-toggler:active>.icon-bar:nth-child(2) {
  width: 22px;
  transition: ease all .2s;
}

.navbar-toggler:not(.collapsed) .icon-bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 4px);
  transition: ease all .2s;
}

.navbar-toggler:not(.collapsed) .icon-bar:nth-child(2) {
  opacity: 0;
  transition: ease all .2s;
}

.navbar-toggler:not(.collapsed) .icon-bar:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
  transition: ease all .2s;
}

</style>

