import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ServicePage from '@/views/ServicePage.vue';
import PortfolioPage from '@/views/PorfolioPage.vue';

const routes = [
    {   path: '/', 
        name: 'Home', 
        component: HomePage 
    },
    {   path: '/about', 
        name: 'About', 
        component: AboutPage 
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicePage
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioPage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
