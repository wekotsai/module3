import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Test from './components/Test.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
          path: '/home',
          name: 'Home', 
          component: Home,
        },
        { 
            path: '/test',
            name: 'Test', 
            component: Test,
          },
      ],
});


export default router;
