/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');
 window.Vue = require('vue').default;
 
 import App from './App.vue';
 import VueAxios from 'vue-axios';
 import VueRouter from 'vue-router';
 import axios from 'axios';
 import { routes } from './routes';
 import moment from 'moment';

 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */
 
 Vue.use(VueRouter);
 Vue.use(VueAxios, axios);

 Vue.filter('displayDate', function(value) {
  if (value) {
      return moment(String(value)).format('MMMM DD, YYYY')
  }
});

 axios.defaults.baseURL = 'http://localhost';

 

 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });

 router.beforeEach((to, from, next) => {  
    const token = localStorage.getItem('jwt') == null;  
    if (to.matched.some(record => record.meta.guest)) {
      if (!token) next({ name: 'welcome' })
      else next()
    } 
    if (to.matched.some(record => record.meta.requiresAuth)) { 
      if (token) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      } 
   }else{
    next()  
  }
  })
  
 const app = new Vue({
     el: '#app',
     router: router,
     render: h => h(App),
 });