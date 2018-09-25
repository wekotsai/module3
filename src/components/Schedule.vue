<template>
  <div class="test">
    <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
  <div v-for="(p, index) in matches" :key="index" class="row">
    <div class="col-sm-9">
          <h2>{{ p.team.date }} {{ p.team.time }} {{ p.team.name }}</h2>
          <p>{{ p.team.location }} <a v-bind:href="p.team.mapUrl"><i class="fas fa-map-marker-alt" style="font-size:30px;color:green;"></i></a></p>
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
  </div>
   </div>
    </div>

</template>

<script>
    export default {
        name: 'Schedule',
        created() {
            this.matches = this.$route.params.propsInTeams;
            // eslint-disable-next-line
            console.log(this.matches);
        },
        data() {
            return {
                matches: []
            }
        },
    }

</script>


<style scoped>
    h2,
    p {
        color: white;
        font-size: 20px;
        padding: 20px;
    }

    img {
        width: 120px;
        height: 120px;
    }

    .modal-content {
        background-color: rgba(22, 44, 105, 0.5);
    }

</style>
