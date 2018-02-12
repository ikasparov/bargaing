'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const home = require('./home.vue').default;
const login = require('./blanket_login.vue').default;
const reg = require('./blanket_reg.vue').default;

const routes = [
    { path: '/home', component: home },
    { path: '/blanket_login', component: login },
    { path: '/blanket_reg', component: reg }
  ];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
