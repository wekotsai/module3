<template>

<div class="container">
<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
  <div class="row"  v-for="(p,i) in matches" :key="i">
    <div class="col"><h1> <a v-bind:href="p.team.t1Url">{{ p.team.t1 }}</a> </h1></div>
    <div class="col"><p> <img :src="p.team.t1logo"> </p> </div>
    <div class="w-100"></div>
    <div class="col"> <h1> <a v-bind:href="p.team.t2Url">{{ p.team.t2 }}</a> </h1></div>
    <div class="col"> <p> <img :src="p.team.t2logo"> </p></div>
  </div>
</div>
</div>
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
        margin-top: 35px;

    }

    p {
        color: white;
        font-size: 20px;
    } 

  img{
      width: 120px;
      height: 120px;
    }

   .modal-content {
        background-color: rgba(22, 44, 105, 0.5);
    }
</style>
