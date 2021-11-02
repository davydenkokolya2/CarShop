import { createWebHistory, createRouter } from 'vue-router'
// import Vue from 'vue'
// import VueRouter from 'vue-router'

import vCatalog from '../components/vCatalog'
import vCart from '../components/vCart'

// Vue.use(VueRouter);

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog

        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true,
        }
    ]
})

export default router;