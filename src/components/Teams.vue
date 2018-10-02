<template>

<div class="container">
  <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
        <div class="row"  v-for="(p,i) in matches" :key="i">

    <div class="col-md-4">
		  <div class="cours2" style="overflow:hidden;">
				<img class="hover" :src="p.team.t1logo" style="width:120px;height:120px;border:1px solid transparent;transition:1s;">
					<div class="cours3">
						<h2 style="text-align:center;margin-top:-6px;color:rgb(237,78,110);">{{ p.team.t1 }}</h2>
					</div>
					<div class="cours4 text-center">
						<button class="cou" style="border:1px solid transparent;padding:10px 20px ;font-size:16px;border-radius:10%;background-color:rgb(237,78,110);color:white;"> <a v-bind:href="p.team.t1Url">More info</a></button>
					</div>		
		  </div>
	  </div>

    <div class="col-md-4">
		  <div class="cours2" style="overflow:hidden;">
				<img class="hover" :src="p.team.t2logo" style="width:120px;height:120px;border:1px solid transparent;transition:1s;">
					<div class="cours3">
						<h2 style="text-align:center;margin-top:-6px;color:rgb(237,78,110);">{{ p.team.t2 }}</h2>
					</div>
					<div class="cours4 text-center">
						<button class="cou" style="border:1px solid transparent;padding:10px 20px ;font-size:16px;border-radius:10%;background-color:rgb(237,78,110);color:white;"> <a v-bind:href="p.team.t2Url">More info</a></button>
					</div>		
		  </div>
   	</div>

   <!--       <div class="col"><h1> <a v-bind:href="p.team.t1Url">{{ p.team.t1 }}</a> </h1></div>
          <div class="col"><p> <img :src="p.team.t1logo"> </p> </div>
          <div class="w-100"></div>
          <div class="col"> <h1> <a v-bind:href="p.team.t2Url">{{ p.team.t2 }}</a> </h1></div>
          <div class="col"> <p> <img :src="p.team.t2logo"> </p></div>  -->

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


  .course{
    text-align:center;
    color:green;
  }
  .course1{
    text-align:center;
    font-family:Bradley Hand ITC;
  }
  .cours2{
    margin-top:30px;
  }
  .cours2{
    position:relative;
    margin-bottom:50px;
  }
  .cours3{
    -border:1px solid red;
    position:absolute;
    top:-100px;
    opacity:0;
    -bottom:100px;
    -background-color:rgba(142,198,63,.8);
    background-color:rgba(0,0,0,0.3);
    color:white;
    padding:10p;
  }
  .cours2:hover .cours3 {
    opacity:1;
    top:0px;
    transition:1s;
  }
  .cours4{
    position:absolute;
    -border:1px solid red;
    -margin-top:-80px;
    padding-top:20px;
    width:100%;
    height:80px;
    opacity:0;
    bottom:-50px;
    -background-color:rgba(142,198,63,.8);
    background-color:rgba(0,0,0,0.3);
  }
  .cours2:hover .cours4{
    opacity:1;
    bottom:0;
    transition:1s;
  }
  .cours2:hover .hover{
    transform:scale(1.3);
    transition:1s;
  }
  .cours7{
    border:1px solid rgb(73,183,43);
    background-color:rgb(73,183,43);
    color:white;
    font-size:18px;
    padding:10px 15px;
    border-radius:5px 20px;
  }
  .cours7:hover{
    background-color:transparent;
    color:rgb(73,183,43);
    border:1px solid rgb(73,183,43);
    transition:1s;
  }

  .cou:hover{
    background-color:transparent !important;
    color:rgb(237,78,110) !important;
    border:1px solid rgb(237,78,110) !important;
  }
</style>
