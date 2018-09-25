import Vue from 'vue'
// import './plugins/vuetify'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router';



Vue.config.productionTip = false
 
Vue.use(Vuetify)
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

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

//firebase login 
function login() {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

