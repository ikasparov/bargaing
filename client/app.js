'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import './styles/main.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

const Home = require('./Home.vue').default;
const Login = require('./Login.vue').default;
import './js/components/register/register.js';
// console.log(registerComponent);
debugger;
const routes = [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/reg', component: registerComponent }
  ];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');


// var vm = new Vue({
//   el: '#example',
//   // define methods under the `methods` object
//   methods: {
//     greet: function (event) {
//       // `this` inside methods point to the Vue instance
//       alert('Hello')
//       // `event` is the native DOM event
//       alert(event.target.tagName)
//     }
//   }
// })
// // you can invoke methods in JavaScript too'
