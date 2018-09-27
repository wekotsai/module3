<template>
<div>
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
      <!-- <b-button :pressed="false" variant="success">
       <b-nav-item><router-link to="/maps"><i class="fas fa-map-marker-alt" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button> -->
     </b-button-group>
    </nav>
  </div>
</template>

<script>
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Navigation',
  components: {
    'b-button': bButton,
  },
  props: ['myProps'],
  created() {
    // eslint-disable-next-line
    console.log(this.myProps);
  },
}
</script>

<style scoped>

</style>

