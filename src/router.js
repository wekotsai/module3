import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Schedule from './components/Schedule.vue';
import Teams from './components/Teams.vue';
import Chatroom from './components/Chatroom.vue';
import Login from './components/Login.vue';

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
        { 
            path: '/teams',
            name: 'Teams',
            component: Teams,
        },  
        { 
            path: '/chatroom',
            name: 'Chatroom',
            component: Chatroom,
        }, 
        { 
            path: '/login',
            name: 'Login',
            component: Login,
        }, 
      ],
});


export default router;
