<template>
  <div class="test">
    <div v-for="p in matches">
      <h1> {{ p.team.t1 }} </h1>
      <p> <img :src="p.team.t1logo"> </p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Teams',
  created() {
      this.matches = this.$route.params.propsInTeams;
      // eslint-disable-next-line
      console.log(this.matches);
  },
  data(){
    return {
      matches: []
    }
  },
}
</script>


<style scoped>
    h1 {
        color: white;
        font-size: 30px;
    }

    p {
        color: white;
        font-size: 20px;
    } 

</style>
