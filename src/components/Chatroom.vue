<template>
  <div class="test">
    
 <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-heading">
				<h2 class="text-center">Login</h2>
			</div>
			<hr />
			<div class="modal-body">
				<form action="" role="form">
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
							<span class="glyphicon glyphicon-user"></span>
							</span>
							<input type="text" class="form-control" placeholder="User Name" />
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
							<span class="glyphicon glyphicon-lock"></span>
							</span>
							<input type="password" class="form-control" placeholder="Password" />

						</div>

					</div>

					<div class="form-group text-center">
						<button type="submit" class="btn btn-success btn-lg">Login</button>
						
					</div>

				</form>
			</div>
		</div>
	</div>


    </div>

</template>

<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>
    <script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAkR5AUVUI-XLgZzdH7lBlvHB5qwph_QR4",
            authDomain: "weko-first-app.firebaseapp.com",
            databaseURL: "https://weko-first-app.firebaseio.com",
            projectId: "weko-first-app",
            storageBucket: "weko-first-app.appspot.com",
            messagingSenderId: "1066123813809"
        };

        firebase.initializeApp(config);

</script>

<script>
export default {
  name: 'Chatroom'
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
