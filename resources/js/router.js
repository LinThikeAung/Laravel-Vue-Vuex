// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';
import Categories from './views/Categories.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
    },
  	{ // new route for our categories page
        path: '/categories',
        name: 'categories',
        component: Categories, // Vue we just created
    },
];

const router = new Router({
    routes: routes,
  	linkActiveClass: 'active'
});

export default router;