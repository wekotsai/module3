<template>
  <div class="test">
    
    <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-heading">
			</div>
            <div class="modal-body">
                <div id="messages">
                    <div v-for="(key, i) in messages" :key="i" class="my-speech-bubble"
                     :class="{right: key.name === loggedInUser}">
                        <p>{{key.message}}</p>
                    </div>
                </div>
			</div>
		</div>
	</div>
    <input v-model="input" class="textarea" type="text" placeholder="Type here!" id="input"/>
    <button class="btn btn-success btn-md" id="submit" v-on:click="submit">Send</button>
   

  </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'Chatroom',
        data(){
            return{
                messages: null,
                input: '',
                loggedInUser: null
            }
        },
        created(){
            this.getPost()
        },
        methods: {
            submit() {
                // eslint-disable-next-line 
                console.log("write");
                let userName = firebase.auth().currentUser.email;
                // eslint-disable-next-line     
                console.log(userName);

                let message = {
                    name: userName,
                    message: this.input,
                }
                firebase.database().ref('chatroom').push(message)
                this.input="";

                setTimeout(()=>{
                    let pos_x = document.getElementById('input').scrollHeight;
                    document.getElementById('input').scrollTo(0 , pos_x);
                }, 600);
            },

            getPost() {
                // eslint-disable-next-line     
                console.log("getPost");
                this.loggedInUser = firebase.auth().currentUser.email;
                // eslint-disable-next-line     
                console.log(this.loggedInUser);
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
        background-color: rgba(255,255,255,0.6);
        overflow: scroll;
    }

    .btn-link {
        color: white;
    }

    .modal-heading h2 {
        color: #ffffff;
    }

    #messages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    /* M E S S A G E S */
    .my-speech-bubble {
        background: #34d07b;
        -webkit-border-radius: 4px;
                border-radius: 4px;
        font-size: 1.2rem;
        line-height: 1.3;
        margin-bottom: 40px;
        max-width: auto;
        padding: 15px;
        position: relative;
    }

    /*.my-speech-bubble::after {
        border-left: 20px solid transparent;
        border-top: 20px solid #34d07b;
        bottom: -20px;
        content: "";
        position: absolute;
        right: 20px;
    }*/

    .my-speech-bubble p {
        margin: 0 0 10px;
    }

    .my-speech-bubble p:last-of-type {
        margin-bottom: 0;
    }

    .right{
        align-self: flex-end;
        background: #4286f4;
    }

    /*.right::after {
        border-left: 20px solid transparent;
        border-top: 20px solid #4286f4;
        bottom: -20px;
        content: "";
        position: absolute;
        right: 20px;
    }*/

</style>
