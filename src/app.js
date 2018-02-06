'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const home = require('./home.vue').default;
const Login = require('./Login.vue').default;
const Reg = require('./Reg.vue').default;

const routes = [
    // { path: '/home', component: home },
    { path: '/login', component: Login },
    { path: '/reg', component: Reg }
  ];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
