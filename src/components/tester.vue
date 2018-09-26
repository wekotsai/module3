<template>

<div id="app">
  <v-app id="inspire">
    <v-layout
      wrap
      style="height: 200px;"
    >
      <v-container>
        <v-layout justify-center>
          <v-btn
            color="pink"
            dark
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </v-layout>
      </v-container>
  
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="mini"
        absolute
        dark
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
  
          <v-list-tile avatar tag="div">
            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
  
        <v-list class="pt-0" dense>
          <v-divider light></v-divider>
  
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
  
            <v-list-tile-content>
              <v-list-tile-title><router-link :to="{name: 'Teams', params: { propsInTeams: this.myProps } }"><i class="fas fa-futbol" style="font-size:30px;color:white;"></i></router-link></v-list-tile-title>
               <v-list-tile-title><router-link :to="{name: 'Schedule', params: { propsInTeams: this.myProps } }"><i class="far fa-calendar-alt" style="font-size:30px;color:white;"></i></router-link></v-list-tile-title>
                <v-list-tile-title><router-link to="/Contact"><i class="fas fa-envelope" style="font-size:30px;color:white;"></i></router-link></v-list-tile-title>
                 <v-list-tile-title><router-link to="/login"><i class="fas fa-comments" style="font-size:30px;color:white;"></i></router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-app>
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
    return {
      drawer: null,
      items: [
        // { title: 'Home', icon: 'dashboard' },
        // { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null
    }
  }
})
</script>


<style scoped>

</style>

