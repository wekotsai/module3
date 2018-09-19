<template>
  <div>
    <nav>
      <b-button size="md" variant="outline-success">
       <b-nav-item><router-link to="/Home"><i class="fas fa-home" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
      </b-button>
      <b-button size="md" variant="outline-success">
        <b-nav-item><router-link to="/Schedule"><i class="far fa-calendar-alt" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
      </b-button>
      <b-button size="md" variant="outline-success">
       <b-nav-item><router-link to="/Contact"><i class="fas fa-envelope" style="font-size:30px;color:white;"></i></router-link></b-nav-item>
      </b-button>
      </b-button>
    </nav>
  </div>
</template>

<script>
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Navigation',
  components: {
    'b-button': bButton,
  }
}
</script>


<style scoped>

</style>

