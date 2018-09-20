<template>
  <div class="test">

  <div v-for="p in matches" class="row">
    <div class="col-sm-9">
          <h2>{{ p.team.date }} {{ p.team.time }} {{ p.team.name }}</h2>
      <div class="row">
       <div class="col-7 col-sm-6">
        <img :src="p.team.t1logo">
          <h2> {{ p.team.t1 }} </h2>
       </div>
       <div class="col-4 col-sm-6">
        <img :src="p.team.t2logo">
          <h2> {{ p.team.t2 }} </h2>
       </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data(){
    return {
      matches: []
    }
  },

  methods: {
      getMatches: function(){
        fetch('https://api.myjson.com/bins/14bbbo')
          .then(function(response) {
            return response.json();
          })
          .then(myJson => {
            console.log(myJson);
            this.matches = myJson.Matches;
          });
      }
  },
  created: function() {
    this.getMatches();
  },

}
</script>


<style scoped>
  h2, p{
  color: white;
  font-size: 20px;
  padding: 20px;
  }

  img{
    width: 120px;
  }

</style>
