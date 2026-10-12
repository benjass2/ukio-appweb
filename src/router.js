import {
    createRouter,
    createWebHistory
} from 'vue-router';

import {propertiesRoutes} from './properties/presentation/properties-routes.js';

import Home from './properties/presentation/views/home.vue';
import PageNotFound from './shared/presentation/views/page-not-found.vue';

/**
 * @summary Configures the main application routes.
 * @author Benjamin Solorzano
 */

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    ...propertiesRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'page-not-found',
        component: PageNotFound
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
