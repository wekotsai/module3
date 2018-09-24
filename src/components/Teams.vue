<template>
  <div class="test">
    <div v-for="(p,i) in matches" :key="i">
      <h1> <a v-bind:href="p.team.t1Url">{{ p.team.t1 }}</a> </h1>
      <p> <img :src="p.team.t1logo"> </p> 
      <h1> <a v-bind:href="p.team.t2Url">{{ p.team.t2 }}</a> </h1>
      <p> <img :src="p.team.t2logo"> </p>
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
        font-size: 24px;
    }

    p {
        color: white;
        font-size: 20px;
    } 

 img{
    width: 120px;
    height: 120px;
  }
</style>
