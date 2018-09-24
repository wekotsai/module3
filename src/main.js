import Vue from 'vue'
// import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router';
// import Vue2Sidebar from 'vue2-sidebar';

Vue.config.productionTip = false
 
Vue.use(Vuetify)
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
