'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import './styles/main.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

import { loginComponent } from './js/components/login/login.js'
import { registerComponent } from './js/components/register/register.js';
import { homeComponent } from './js/components/home/home.js';

const routes = [
  { path: '/home', component: homeComponent },
  { path: '/login', component: loginComponent },
  { path: '/reg', component: registerComponent }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
