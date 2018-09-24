<template>
  <div>
    <nav>
     <b-button-group size="md" class="opa">
      <b-button :pressed="false" variant="success">
       <b-nav-item><router-link :to="{name: 'Teams', params: { propsInTeams: this.myProps } }"><i class="fas fa-futbol" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button> 
       <b-button :pressed="false" variant="success">
       <b-nav-item><router-link to="/Schedule"><i class="far fa-calendar-alt" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button>
       <b-button :pressed="false" variant="success">
       <b-nav-item><router-link to="/Contact"><i class="fas fa-envelope" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
       </b-button>
       <b-button :pressed="false" variant="success">
       <b-nav-item><a href="https://www.instagram.com/wekotsai/"><i class="fab fa-instagram" style="font-size:30px;color:white;"></i></a></b-nav-item>
      </b-button> 
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

