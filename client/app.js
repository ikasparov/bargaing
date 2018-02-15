'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import './styles/main.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

import { loginComponent } from './js/components/login/login.js'
import { registerComponent } from './js/components/register/register.js';

const Home = require('./Home.vue').default;

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: loginComponent },
  { path: '/reg', component: registerComponent }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');

new Vue({
  el: 'body',
  components: {

  }
}
)
