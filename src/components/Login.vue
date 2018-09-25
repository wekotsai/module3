<template>
  <div class="test">
    
    <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-heading">
				<h2 class="text-center">Login</h2>
			</div>
			<hr />
			<div class="modal-body">
				<form  @submit.prevent="getPost" role="form">
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
							<span class="glyphicon glyphicon-user"></span>
							</span>
							<input type="text" v-model="name" class="form-control" placeholder="User Name" />
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
							<span class="glyphicon glyphicon-lock"></span>
							</span>
							<input type="password" v-model="password" class="form-control" placeholder="Password" />

						</div>

					</div>

					<div class="form-group text-center">
						<button class="btn btn-success btn-lg" id="login">Login</button>
						
					</div>

				</form>
			</div>
		</div>
	</div>

  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data(){
      return {
          name:"",
          password:""
      }
  },
  methods: {
   getPost() {

       firebase.auth().signInWithEmailAndPassword(this.name, this.password)
       .then(reponse => {
        // eslint-disable-next-line 
        console.log('sajdasjhd')

           this.$router.push('/Chatroom')
       })
       .catch(function(error) {
    // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}
  }
}
</script>


<style scoped>
    h2{
        margin-top:20px;
    }
    .modal-content{
        background-color: rgba(22, 44, 105, 0.5);
    }
    .btn-link{
        color:white;
    }
    .modal-heading h2{
        color:#ffffff;
    }
</style>
