/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');
 import { createApp } from 'vue'
 import Dashboard from './Dashboard.vue'
 import router from './routes'
 import CKEditor from '@ckeditor/ckeditor5-vue'

 const app = createApp(Dashboard)
 app.use(router)
 app.use( CKEditor )
 app.mount('#app')
