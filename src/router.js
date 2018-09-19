import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Schedule from './components/Schedule.vue';
// import Vue2Sidebar from 'vue2-sidebar';

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
            path: '/contact',
            name: 'Contact', 
            component: Contact,
        },
        { 
            path: '/schedule',
            name: 'Schedule',
            component: Schedule,
        },  
        // { 
        //     name: 'Vue2Sidebar',
        //     path: '/Vue2Sidebar',
        //     components: Vue2Sidebar,
        // },
      ],
});


export default router;
