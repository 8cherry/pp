import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: () => import('@/pages/index.vue') },
    { path: '/catalog', component: () => import('@/pages/catalog.vue')},
    { path: '/product/:id', component: () => import('@/pages/product.vue') },
    { path: '/contact', component: () => import('@/pages/contact.vue') },
    { path: '/cart', component: () => import('@/pages/cart.vue') },

];

export const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)