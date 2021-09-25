import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // here we import the store.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(BootstrapVue);
Vue.use(FlashMessage);

new Vue({
    el: '#app',
    router,
    store, // here we using now store
    render: h => h(App)
});