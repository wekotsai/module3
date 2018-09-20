<template>
  <div class="test">

<table class="table table-hover table-dark">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Times</th>
          <th scope="col">Teams</th>
          <th scope="col">Location</th>
          <th scope="col">Map</th>
        </tr>
        <tr v-for="row in matches">
          <td rowspan="2">{{ team.date }}</td>
          <td>{{ team.time }}</td>
          <td>{{ team.name }}</td>
          <td>{{ team.location }}</td>
          <td>{{ team.mapUrl }}</td>
        </tr>
  </table>      

<!-- <div id="bodycontent">
     <h2 style="font-size:30px;color:white;"><em>Fall Schedule</em></h2>
     <p class="announcement" style="font-size:15px;color:white;">*All games take place on Saturday</p>
     
     <div id="infotable">
       <table class="table table-hover table-dark">
        <tr>
          <th scope="col">SEPTEMBER</th>
          <th scope="col">Teams</th>
          <th scope="col">Location</th>
          <th scope="col">Times</th>
        </tr>
        <tr>
          <td rowspan="2">9/01</td>
          <td>U1+U4</td>
          <td>AJ Katzenmaier</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U3+U2</td>
          <td>Greenbay</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td rowspan="2">9/08</td>
          <td>U5+U6</td>
          <td>Howard A Yeager</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U6+U1</td>
          <td>Marjorie P Hart</td>
          <td>1:00 p.m.</td>
       <tr>
          <td rowspan="2">9/15</td>
          <td>U2+U4</td>
          <td>North</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U3+U5</td>
          <td>AJ Katzenmaier</td>
          <td>1:00 p.m.</td>
        <tr>
          <td rowspan="2">9/22</td>
          <td>U1+U3</td>
          <td>South</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U2+U6</td>
          <td>Howard A Yeager</td>
          <td>1:00 p.m.</td>
        <tr>
          <td>9/29</td>
          <td>U4+U5</td>
          <td>Greenbay</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <th scope="col">OCTOBER</th>
          <th scope="col">Teams</th>
          <th scope="col">Location</th>
          <th scope="col">Times</th>
        </tr>
        <tr>
          <td rowspan="2">10/06</td>
          <td>U2+U5</td>
          <td>Marjorie P Hart</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U1+U6</td>
          <td>South</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td rowspan="2">10/08</td>
          <td>U3+U4</td>
          <td>Howard A Yeager</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U5+U1</td>
          <td>Greenbay</td>
          <td>1:00 p.m.</td>
       <tr>
          <td rowspan="2">10/20</td>
          <td>U6+U3</td>
          <td>North</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U2+U4</td>
          <td>Marjorie P Hart</td>
          <td>1:00 p.m.</td>
        <tr>
          <td rowspan="2">10/27</td>
          <td>U3+U1</td>
          <td>AJ Katzenmaier</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U5+U6</td>
          <td>Howard A Yeager</td>
          <td>1:00 p.m.</td>
        </tr>
      </table>
    </div>
    </div>-->
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
            this.matches = myJson;
          });
      }
  },
  created: function() {
    this.getMatches();
  },

}



</script>


<style scoped>
  p{
  color: white;
  font-size: 20px;
  padding: 20px;
  }
</style>
