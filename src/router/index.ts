import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('@/views/HomePage.vue') },
    // { path: '/about', component: () => import('@/views/About.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
