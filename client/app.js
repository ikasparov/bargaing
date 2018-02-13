'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import './styles/main.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

const Home = require('./Home.vue').default;
import { loginComponent } from './js/components/login/login.js'
const Reg = require('./Reg.vue').default;

const routes = [
    { path: '/home', component: Home },
    { path: '/login', component: loginComponent },
    { path: '/reg', component: Reg }
  ];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
