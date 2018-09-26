<template>
  <div class="test">
    
    <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-heading">
				
			</div>
			<div class="modal-body">

    <div id="messages">
    
       <div v-for="(key, i) in messages" :key="i" class="speech-bubble">
    <p>{{key.message}}</p>
   
    </div>

      </div>
			</div>
		</div>
	</div>
    <input class="textarea" type="text" placeholder="Type here!" id="input">
    <button class="btn btn-success btn-md" id="submit" v-on:click="submit">Send</button>
   

  </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'Chatroom',
        data(){
            return{
                messages:{}
            }
        },
        created(){
            this.getPost()
        },
        methods: {
            submit() {
                // eslint-disable-next-line 
                console.log("write");
                let userName = firebase.auth().currentUser.displayName;
                let text = document.getElementById("input").value;

                let message = {
                    name: userName,
                    message: text
                }

                firebase.database().ref('chatroom').push(message)
            },

            getPost() {
                // eslint-disable-next-line     
                console.log("getPost");
                firebase.database().ref('chatroom').on('value', (data) => {
                    this.messages = data.val();

                })
            }
        }
    }
</script>


<style scoped>
    input {
        width: 250px;
        height: 36px;
    }

    .modal-content {
        height: 450px;
        background-color: white;
        overflow: scroll;
    }

    .btn-link {
        color: white;
    }

    .modal-heading h2 {
        color: #ffffff;
    }

    /* M E S S A G E S */
.speech-bubble {
    background: #efefef;
    -webkit-border-radius: 4px;
            border-radius: 4px;
    font-size: 1.2rem;
    line-height: 1.3;
    margin: 0 auto 40px;
    max-width: 400px;
    padding: 15px;
    position: relative;
}

.speech-bubble p {
    margin: 0 0 10px;
}
.speech-bubble p:last-of-type {
    margin-bottom: 0;
}

.speech-bubble::after {
    border-left: 20px solid transparent;
    border-top: 20px solid #efefef;
    bottom: -20px;
    content: "";
    position: absolute;
    right: 20px;
}

</style>
